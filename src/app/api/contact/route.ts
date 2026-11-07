import { NextResponse } from "next/server";
import { INQUIRY_TYPES, type InquiryType } from "@/config/siteConfig";

interface ContactRequestPayload {
  fullName?: unknown;
  email?: unknown;
  subject?: unknown;
  inquiryType?: unknown;
  message?: unknown;
  /** Honeypot field: must remain empty for legitimate human visitors */
  website?: unknown;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_INQUIRY_TYPES = new Set<string>(INQUIRY_TYPES);

/** Basic sliding-window IP rate limiter (5 requests per 60 seconds per IP) */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestTimestamps = new Map<string, number[]>();

function isRateLimited(clientIp: string): boolean {
  const now = Date.now();
  const recent = (ipRequestTimestamps.get(clientIp) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestTimestamps.set(clientIp, recent);
    return true;
  }

  recent.push(now);
  ipRequestTimestamps.set(clientIp, recent);
  return false;
}

/**
 * Strips ASCII control characters and collapses CRLF in single-line inputs
 * to prevent header injection and malformed payloads.
 */
function sanitizeSingleLine(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[\x00-\x1F\x7F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Strips non-printable control characters while preserving normal paragraph
 * line breaks (`\n`) in multi-line message bodies.
 */
function sanitizeMultiLine(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim();
}

/**
 * Validates server-side Resend environment variables without exposing secrets.
 */
function resolveServerEmailConfig(): {
  configured: boolean;
  apiKey: string;
  receiverEmail: string;
  senderEmail: string;
} {
  const rawApiKey = sanitizeSingleLine(process.env.RESEND_API_KEY);
  const rawReceiver = sanitizeSingleLine(
    process.env.CONTACT_RECEIVER_EMAIL
  ).toLowerCase();
  const rawSender = sanitizeSingleLine(process.env.CONTACT_SENDER_EMAIL);

  const isPlaceholderKey =
    !rawApiKey ||
    rawApiKey === "your_resend_api_key" ||
    rawApiKey === "re_xxxxxxxxx";

  const isValidReceiver =
    Boolean(rawReceiver) &&
    EMAIL_REGEX.test(rawReceiver) &&
    !rawReceiver.endsWith("@example.com");

  const senderEmail =
    rawSender || "Safdar Khan Portfolio <onboarding@resend.dev>";

  return {
    configured: !isPlaceholderKey && isValidReceiver,
    apiKey: rawApiKey,
    receiverEmail: rawReceiver,
    senderEmail,
  };
}

export async function POST(request: Request) {
  try {
    // 1. Basic Per-IP Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          status: "rate_limited",
          message:
            "Too many requests submitted recently. Please wait a minute or reach out directly via WhatsApp (+92 331 6788362) or your email client below.",
        },
        { status: 429 }
      );
    }

    const body = (await request.json()) as ContactRequestPayload;

    // 2. Honeypot Spam Protection Check
    const honeypotValue = sanitizeSingleLine(body.website);
    if (honeypotValue.length > 0) {
      return NextResponse.json(
        {
          status: "spam_detected",
          message: "Automated spam submission rejected.",
        },
        { status: 400 }
      );
    }

    // 3. Sanitize Inputs
    const fullName = sanitizeSingleLine(body.fullName);
    const email = sanitizeSingleLine(body.email).toLowerCase();
    const subject = sanitizeSingleLine(body.subject);
    const inquiryType = sanitizeSingleLine(body.inquiryType);
    const message = sanitizeMultiLine(body.message);

    // 4. Server-Side Field Validation
    if (!fullName || !email || !subject || !inquiryType || !message) {
      return NextResponse.json(
        {
          status: "validation_error",
          message: "All required fields must be filled out.",
        },
        { status: 400 }
      );
    }

    if (fullName.length < 2 || fullName.length > 120) {
      return NextResponse.json(
        {
          status: "validation_error",
          message: "Full Name must be between 2 and 120 characters.",
        },
        { status: 400 }
      );
    }

    if (email.length > 160 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          status: "validation_error",
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    if (subject.length < 3 || subject.length > 200) {
      return NextResponse.json(
        {
          status: "validation_error",
          message: "Subject must be between 3 and 200 characters.",
        },
        { status: 400 }
      );
    }

    if (!ALLOWED_INQUIRY_TYPES.has(inquiryType as InquiryType)) {
      return NextResponse.json(
        {
          status: "validation_error",
          message: "Please select a valid Inquiry Type.",
        },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 4000) {
      return NextResponse.json(
        {
          status: "validation_error",
          message: "Message must be between 10 and 4000 characters.",
        },
        { status: 400 }
      );
    }

    // 5. Honest Environment Variable Check (Never fake success when Resend is unconfigured)
    const emailConfig = resolveServerEmailConfig();

    if (!emailConfig.configured) {
      return NextResponse.json(
        {
          status: "integration_required",
          message:
            "Direct server email delivery is currently awaiting backend email service configuration. Your message has been formatted—use the WhatsApp Direct (+92 331 6788362) or Email Client (mailto:) buttons below to send it immediately.",
        },
        { status: 503 }
      );
    }

    // 6. Dispatch via Resend API when credentials are configured
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${emailConfig.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: emailConfig.senderEmail,
        to: [emailConfig.receiverEmail],
        reply_to: email,
        subject: `[${inquiryType}] ${subject} — from ${fullName}`,
        text: [
          `New Portfolio Inquiry for Safdar Khan`,
          `----------------------------------------`,
          `Full Name: ${fullName}`,
          `Email: ${email}`,
          `Inquiry Type: ${inquiryType}`,
          `Subject: ${subject}`,
          ``,
          `Message:`,
          message,
        ].join("\n"),
      }),
    });

    if (!resendResponse.ok) {
      return NextResponse.json(
        {
          status: "provider_error",
          message:
            "The email delivery service encountered an error while dispatching your message. Please use the pre-filled WhatsApp or Email Client (mailto:) fallback buttons below.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        status: "sent",
        message:
          "Your message has been delivered to Safdar Khan. Thank you for reaching out.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        status: "error",
        message:
          "Unable to process the request. Please use the pre-filled WhatsApp or Email Client (mailto:) fallback buttons below.",
      },
      { status: 500 }
    );
  }
}
