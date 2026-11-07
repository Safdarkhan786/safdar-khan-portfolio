"use client";

import React, { useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import {
  CONTACT_CONFIG,
  INQUIRY_TYPES,
  type InquiryType,
} from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/ui/FloatingWhatsApp";

interface FormValues {
  fullName: string;
  email: string;
  subject: string;
  inquiryType: InquiryType | "";
  message: string;
  /** Honeypot spam-trap field — must remain empty for human visitors */
  website: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  inquiryType?: string;
  message?: string;
}

type SubmissionStatus =
  | "idle"
  | "submitting"
  | "sent"
  | "integration_required"
  | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    subject: "",
    inquiryType: "Employment Opportunity",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const validateForm = (): boolean => {
    const nextErrors: FormErrors = {};
    const trimmedName = values.fullName.trim();
    const trimmedEmail = values.email.trim();
    const trimmedSubject = values.subject.trim();
    const trimmedMessage = values.message.trim();

    if (!trimmedName) {
      nextErrors.fullName = "Full Name is required.";
    } else if (trimmedName.length < 2 || trimmedName.length > 120) {
      nextErrors.fullName = "Full Name must be between 2 and 120 characters.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Email Address is required.";
    } else if (trimmedEmail.length > 160 || !EMAIL_REGEX.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!trimmedSubject) {
      nextErrors.subject = "Subject is required.";
    } else if (trimmedSubject.length < 3 || trimmedSubject.length > 200) {
      nextErrors.subject = "Subject must be between 3 and 200 characters.";
    }

    if (!values.inquiryType) {
      nextErrors.inquiryType = "Please select an Inquiry Type.";
    }

    if (!trimmedMessage) {
      nextErrors.message = "Message is required.";
    } else if (trimmedMessage.length < 10) {
      nextErrors.message =
        "Please provide a brief message (at least 10 characters).";
    } else if (trimmedMessage.length > 4000) {
      nextErrors.message = "Message cannot exceed 4000 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  // Pre-filled mailto link dynamically constructed from current form values
  const mailtoFallbackHref = useMemo(() => {
    const recipient = CONTACT_CONFIG.email || "";
    const subjectLine = values.subject.trim()
      ? `[${values.inquiryType || "Inquiry"}] ${values.subject.trim()}`
      : `[${values.inquiryType || "Portfolio Inquiry"}] Message for Safdar Khan`;

    const bodyLines = [
      `Hello Safdar,`,
      ``,
      values.message.trim() || "(Write your message here)",
      ``,
      `---`,
      `Full Name: ${values.fullName.trim() || "Not specified"}`,
      `Email: ${values.email.trim() || "Not specified"}`,
      `Inquiry Type: ${values.inquiryType || "General"}`,
    ].join("\n");

    return `mailto:${recipient}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyLines)}`;
  }, [values]);

  // Pre-filled WhatsApp fallback link dynamically constructed from current form values
  const whatsappFallbackHref = useMemo(() => {
    const textLines = [
      `Hello Safdar,`,
      ``,
      values.message.trim() ||
        `I visited your portfolio and would like to discuss an opportunity.`,
      ``,
      `• Name: ${values.fullName.trim() || "Not specified"}`,
      `• Email: ${values.email.trim() || "Not specified"}`,
      `• Inquiry: ${values.inquiryType || "General"}`,
      `• Subject: ${values.subject.trim() || "Portfolio Inquiry"}`,
    ].join("\n");

    return `https://wa.me/923316788362?text=${encodeURIComponent(textLines)}`;
  }, [values]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (status !== "idle" && status !== "submitting") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        status?: string;
        message?: string;
      };

      if (response.ok && data.status === "sent") {
        setStatus("sent");
        setStatusMessage(
          data.message || "Your message has been sent successfully."
        );
        setValues({
          fullName: "",
          email: "",
          subject: "",
          inquiryType: "Employment Opportunity",
          message: "",
          website: "",
        });
      } else if (data.status === "integration_required") {
        setStatus("integration_required");
        setStatusMessage(
          data.message ||
            "Direct server email delivery is currently awaiting backend email service configuration. Use the WhatsApp Direct (+92 331 6788362) or Email Client (mailto:) buttons below to send your pre-filled message immediately."
        );
      } else {
        setStatus("error");
        setStatusMessage(
          data.message ||
            "Could not dispatch message automatically. Please use the WhatsApp or Email Client fallback buttons below."
        );
      }
    } catch {
      setStatus("integration_required");
      setStatusMessage(
        "Direct form submission requires an active backend email service (e.g., Resend). Click the WhatsApp Direct or Email Client button below to send your pre-filled message immediately."
      );
    }
  };

  return (
    <div className="cosmic-glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10">
      {/* Top Champagne Specular Highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-champagne-shimmer opacity-75"
      />

      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-astral-gold">
          Direct Inquiry // Form
        </span>
        <h3 className="mt-1.5 font-display text-2xl font-bold text-starlight-alabaster sm:text-3xl">
          Send a Message
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-starlight-titanium sm:text-sm">
          Fill out the details below to discuss employment opportunities, IT
          infrastructure deployments, software development, or AI automation.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot Spam-Protection Field (Hidden from human users & screen readers) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
        >
          <label htmlFor="contact-website">
            Organization Website (Do not fill this out)
          </label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={handleChange}
          />
        </div>

        {/* Row 1: Full Name & Email Address */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label
              htmlFor="contact-fullName"
              className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-starlight-alabaster"
            >
              Full Name <span className="text-astral-gold">*</span>
            </label>
            <input
              id="contact-fullName"
              name="fullName"
              type="text"
              required
              value={values.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={
                errors.fullName ? "error-fullName" : undefined
              }
              className={`w-full rounded-xl border bg-obsidian/80 px-4 py-3 text-sm text-starlight-alabaster placeholder-starlight-titanium/55 transition-colors focus:outline-none ${
                errors.fullName
                  ? "border-red-400/75 focus:border-red-400"
                  : "border-obsidian-hairline focus:border-astral-gold/75"
              }`}
            />
            {errors.fullName && (
              <p
                id="error-fullName"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-starlight-alabaster"
            >
              Email Address <span className="text-astral-gold">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={values.email}
              onChange={handleChange}
              placeholder="name@organization.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "error-email" : undefined}
              className={`w-full rounded-xl border bg-obsidian/80 px-4 py-3 text-sm text-starlight-alabaster placeholder-starlight-titanium/55 transition-colors focus:outline-none ${
                errors.email
                  ? "border-red-400/75 focus:border-red-400"
                  : "border-obsidian-hairline focus:border-astral-gold/75"
              }`}
            />
            {errors.email && (
              <p
                id="error-email"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Inquiry Type & Subject */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Inquiry Type */}
          <div>
            <label
              htmlFor="contact-inquiryType"
              className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-starlight-alabaster"
            >
              Inquiry Type <span className="text-astral-gold">*</span>
            </label>
            <select
              id="contact-inquiryType"
              name="inquiryType"
              required
              value={values.inquiryType}
              onChange={handleChange}
              aria-invalid={Boolean(errors.inquiryType)}
              aria-describedby={
                errors.inquiryType ? "error-inquiryType" : undefined
              }
              className="w-full rounded-xl border border-obsidian-hairline bg-obsidian/85 px-4 py-3 text-sm text-starlight-alabaster transition-colors focus:border-astral-gold/75 focus:outline-none"
            >
              {INQUIRY_TYPES.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-obsidian-charcoal text-starlight-alabaster"
                >
                  {type}
                </option>
              ))}
            </select>
            {errors.inquiryType && (
              <p
                id="error-inquiryType"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.inquiryType}</span>
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="contact-subject"
              className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-starlight-alabaster"
            >
              Subject <span className="text-astral-gold">*</span>
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              value={values.subject}
              onChange={handleChange}
              placeholder="Project or role discussion"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "error-subject" : undefined}
              className={`w-full rounded-xl border bg-obsidian/80 px-4 py-3 text-sm text-starlight-alabaster placeholder-starlight-titanium/55 transition-colors focus:outline-none ${
                errors.subject
                  ? "border-red-400/75 focus:border-red-400"
                  : "border-obsidian-hairline focus:border-astral-gold/75"
              }`}
            />
            {errors.subject && (
              <p
                id="error-subject"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-starlight-alabaster"
          >
            Message <span className="text-astral-gold">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            value={values.message}
            onChange={handleChange}
            placeholder="Describe your opportunity, project scope, or technical requirements..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "error-message" : undefined}
            className={`w-full resize-y rounded-xl border bg-obsidian/80 px-4 py-3 text-sm text-starlight-alabaster placeholder-starlight-titanium/55 transition-colors focus:outline-none ${
              errors.message
                ? "border-red-400/75 focus:border-red-400"
                : "border-obsidian-hairline focus:border-astral-gold/75"
            }`}
          />
          {errors.message && (
            <p
              id="error-message"
              role="alert"
              className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Status Feedback Banner (Success / Integration Notice / Error) */}
        {status === "sent" && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-2xl border border-telemetry-emerald/40 bg-obsidian/85 p-4 text-xs leading-relaxed text-starlight-alabaster sm:text-sm"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-telemetry-emerald" />
            <div>
              <strong className="block font-display font-semibold text-telemetry-emerald">
                Message Delivered
              </strong>
              <p className="mt-0.5 text-starlight-titanium">{statusMessage}</p>
            </div>
          </div>
        )}

        {(status === "integration_required" || status === "error") && (
          <div
            role="alert"
            className="space-y-3 rounded-2xl border border-astral-gold/45 bg-obsidian/90 p-4 text-xs leading-relaxed text-starlight-alabaster sm:text-sm"
          >
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-astral-gold" />
              <div>
                <strong className="block font-display font-semibold text-astral-champagne">
                  {status === "integration_required"
                    ? "Email Provider Integration Notice"
                    : "Submission Notice"}
                </strong>
                <p className="mt-1 text-starlight-titanium">{statusMessage}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href={whatsappFallbackHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-telemetry-emerald/50 bg-telemetry-emerald/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-starlight-alabaster transition-all hover:border-telemetry-emerald hover:bg-telemetry-emerald/25"
              >
                <WhatsAppIcon className="h-4 w-4 text-telemetry-emerald" />
                <span>Send Instantly via WhatsApp</span>
              </a>

              <a
                href={mailtoFallbackHref}
                className="inline-flex items-center gap-2 rounded-xl border border-astral-gold/50 bg-astral-gold/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-astral-champagne transition-all hover:border-astral-champagne hover:bg-astral-gold/25 hover:text-starlight-alabaster"
              >
                <Mail className="h-4 w-4 text-astral-gold" />
                <span>Open Pre-Filled Email Client (mailto)</span>
              </a>
            </div>
          </div>
        )}

        {/* Submit & Direct WhatsApp / Mailto Fallback Actions */}
        <div className="flex flex-col gap-3 pt-1 lg:flex-row lg:items-center lg:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-solar-eclipse px-7 py-3.5 text-sm font-semibold tracking-wide text-obsidian shadow-[0_0_28px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_38px_rgba(243,229,171,0.48)] disabled:cursor-not-allowed disabled:opacity-65"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </>
            )}
          </button>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href={whatsappFallbackHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-telemetry-emerald/40 bg-obsidian/70 px-3.5 py-2.5 text-xs font-medium text-starlight-alabaster transition-colors hover:border-telemetry-emerald hover:bg-telemetry-emerald/15"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-telemetry-emerald" />
              <span>WhatsApp Fallback</span>
            </a>

            <a
              href={mailtoFallbackHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-astral-gold/30 bg-obsidian/70 px-3.5 py-2.5 text-xs font-medium text-starlight-silver transition-colors hover:border-astral-gold/60 hover:text-astral-champagne"
            >
              <Mail className="h-3.5 w-3.5 text-astral-gold" />
              <span>Email (mailto) Fallback</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

