import type { Metadata } from "next";
import "./globals.css";
import { GalaxyBackground } from "@/components/background";
import { CONTACT_CONFIG, SITE_METADATA } from "@/config/siteConfig";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: {
    default: SITE_METADATA.title,
    template: "%s | Safdar Khan",
  },
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  authors: [{ name: SITE_METADATA.author, url: CONTACT_CONFIG.linkedinUrl }],
  creator: SITE_METADATA.author,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: SITE_METADATA.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_METADATA.siteUrl,
    siteName: "Safdar Khan — Portfolio",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_METADATA.siteUrl}/#person`,
        name: "Safdar Khan",
        jobTitle: "IT Infrastructure & AI Technology Specialist",
        description: SITE_METADATA.description,
        url: SITE_METADATA.siteUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Okara",
          addressRegion: "Punjab",
          addressCountry: "Pakistan",
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Virtual University of Pakistan",
          },
          {
            "@type": "EducationalOrganization",
            name: "Punjab Board of Technical Education",
          },
        ],
        sameAs: [
          CONTACT_CONFIG.linkedinUrl,
          ...(CONTACT_CONFIG.githubUrl ? [CONTACT_CONFIG.githubUrl] : []),
        ],
        knowsAbout: [
          "IT Infrastructure and Network Management",
          "CCTV and Surveillance Systems",
          "VoIP and Video Conferencing",
          "IT Operations and Technical Support",
          "AI Automation and AI Agents",
          "Computer Vision",
          "Python Automation and Web Scraping",
          "Software and Business Solutions Development",
          "Technical Training and Education",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_METADATA.siteUrl}/#website`,
        url: SITE_METADATA.siteUrl,
        name: SITE_METADATA.title,
        description: SITE_METADATA.description,
        publisher: {
          "@id": `${SITE_METADATA.siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-obsidian font-sans text-starlight-alabaster antialiased selection:bg-astral-gold/30 selection:text-starlight-alabaster">
        {/* Keyboard Accessibility Skip Link */}
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:border focus:border-astral-gold focus:bg-obsidian focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-astral-champagne"
        >
          Skip to main content
        </a>

        {/* Global Astronomical & Nebula Visual Foundation */}
        <GalaxyBackground />

        {/* Foreground Content Layer */}
        <div className="relative z-10 min-h-screen">{children}</div>

        {/* Global Floating WhatsApp Direct Button */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
