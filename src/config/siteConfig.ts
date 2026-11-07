export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

/**
 * CANONICAL URL & SEO METADATA CONFIGURATION:
 * Set `NEXT_PUBLIC_SITE_URL` in `.env.local` or Vercel Environment Variables
 * (e.g., `NEXT_PUBLIC_SITE_URL=https://safdarkhan.com`).
 * Normalizes trailing slashes and validates URL structure safely.
 */
function resolveCanonicalSiteUrl(rawUrl?: string): string {
  const fallbackUrl = "https://safdarkhan.dev";
  if (!rawUrl || !rawUrl.trim()) {
    return fallbackUrl;
  }

  const normalized = rawUrl.trim().replace(/\/+$/, "");
  try {
    const parsed = new URL(normalized);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return normalized;
    }
    return fallbackUrl;
  } catch {
    return fallbackUrl;
  }
}

export const SITE_METADATA = {
  siteUrl: resolveCanonicalSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  title: "Safdar Khan | IT Infrastructure & AI Technology Specialist",
  description:
    "Safdar Khan is an IT Infrastructure and AI Technology Specialist with 10+ years of experience in IT operations, networking, surveillance systems, AI automation and software solutions.",
  author: "Safdar Khan",
  keywords: [
    "Safdar Khan",
    "IT Infrastructure Specialist",
    "AI Technology Specialist",
    "Network Administration",
    "CCTV Surveillance Systems",
    "AI Automation",
    "AI Agents",
    "Computer Vision",
    "Python Automation",
    "Web Scraping",
    "Software Development",
    "MS Computer Science",
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Education", href: "/#education", sectionId: "education" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

/**
 * PORTRAIT REPLACEMENT GUIDE:
 * 1. Place your professional portrait image inside `public/images/` (e.g. `public/images/safdar-khan.png` or `.jpg`).
 * 2. Set `imageSrc` below to `"/images/safdar-khan.png"`.
 * 3. While `imageSrc` is `null` (or empty), the Hero section renders the bespoke Astral Executive Portrait Placeholder.
 */
export const PORTRAIT_CONFIG = {
  imageSrc: "/images/safdar-khan.webp" as string | null,
  alt: "Safdar Khan — IT Infrastructure & AI Technology Specialist",
};

/**
 * DOWNLOAD CV CONFIGURATION:
 * 1. Place your official PDF resume at `public/Safdar-Khan-CV.pdf`.
 * 2. The Download CV buttons automatically check `/Safdar-Khan-CV.pdf`.
 * 3. If the file is present in `public/`, it downloads immediately; if not yet uploaded,
 *    it displays an honest modal prompt allowing the visitor to request the CV via the Contact Section.
 */
export const CV_DOWNLOAD_PATH = "/Safdar-Khan-CV.pdf";

/**
 * CONTACT & SOCIAL CONFIGURATION:
 * - Set `email` to your actual professional email address (e.g. "safdar@yourdomain.com").
 * - Set `githubUrl` to your actual GitHub profile URL (e.g. "https://github.com/yourusername").
 * - LinkedIn is pre-configured with your verified profile URL.
 */
export const CONTACT_CONFIG = {
  /** Set your actual professional email here when ready (no fake email is invented) */
  email: null as string | null,
  emailDisplayPlaceholder: "Available upon request (Configure in siteConfig.ts)",
  whatsappNumber: "+92 331 6788362",
  whatsappUrl:
    "https://wa.me/923316788362?text=Hello%20Safdar%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
  linkedinUrl: "https://www.linkedin.com/in/safdar-khan-2386b0137/",
  linkedinLabel: "linkedin.com/in/safdar-khan-2386b0137",
  /** Set your actual GitHub profile URL here when ready (no fake URL is used) */
  githubUrl: null as string | null,
  githubLabel: "Configurable Placeholder (Set GitHub URL in siteConfig.ts)",
  location: "Okara, Punjab, Pakistan.",
  opportunitiesNote:
    "Open to international employment, relocation opportunities and remote technology projects.",
};

export const INQUIRY_TYPES = [
  "Employment Opportunity",
  "IT Infrastructure Project",
  "AI Automation Project",
  "Software Development",
  "Freelance Collaboration",
  "Other",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];
