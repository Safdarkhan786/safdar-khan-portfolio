"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { CONTACT_CONFIG } from "@/config/siteConfig";
import { SKLogo } from "@/components/brand/SKLogo";

const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Education", href: "/#education", sectionId: "education" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const Footer: React.FC = () => {
  const handleQuickLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    const target = document.getElementById(sectionId);
    if (target) {
      e.preventDefault();
      const headerOffset = 88;
      const top =
        sectionId === "home"
          ? 0
          : target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative border-t border-astral-gold/20 bg-obsidian/90 backdrop-blur-xl"
    >
      {/* Top Champagne Specular Border Reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-champagne-shimmer opacity-75"
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 pb-12 lg:grid-cols-12 lg:gap-8">
          {/* Column 1 (5 cols): Brand Identity */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5">
              <SKLogo size="md" />

              <div>
                <span className="block font-display text-xl font-bold tracking-wider text-starlight-alabaster">
                  SAFDAR KHAN
                </span>
                <span className="block font-mono text-xs text-astral-gold">
                  IT Infrastructure &amp; AI Technology Specialist
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-starlight-titanium">
              MS Computer Science with 10+ years of practical experience in
              enterprise IT infrastructure, surveillance systems, software
              development, and intelligent AI automation.
            </p>

            <p className="mt-3 font-mono text-xs text-starlight-silver">
              Location: {CONTACT_CONFIG.location}
            </p>
          </div>

          {/* Column 2 (4 cols): Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-astral-gold">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.sectionId}>
                  <a
                    href={link.href}
                    onClick={(e) => handleQuickLinkClick(e, link.sectionId)}
                    className="inline-flex items-center gap-2 text-sm text-starlight-silver transition-colors duration-200 hover:text-astral-champagne"
                  >
                    <span className="h-1 w-1 rounded-full bg-astral-gold/70" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (3 cols): Social Links & Back to Top */}
          <div className="flex flex-col justify-between lg:col-span-3">
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-astral-gold">
                Social Links
              </h4>
              <p className="mt-2 text-xs text-starlight-titanium">
                Connect via LinkedIn, GitHub, or direct email.
              </p>
              <SocialLinks variant="compact" className="mt-4" />
            </div>

            <div className="mt-6 lg:mt-0">
              <button
                type="button"
                onClick={handleBackToTop}
                className="group inline-flex items-center gap-2 rounded-xl border border-astral-gold/30 bg-obsidian-onyx/75 px-4 py-2 font-mono text-xs text-astral-champagne transition-all hover:border-astral-champagne/70 hover:bg-astral-gold/15 hover:text-starlight-alabaster"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-3.5 w-3.5 text-astral-gold transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Tagline Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-obsidian-hairline pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-starlight-titanium sm:text-sm">
            © 2026 Safdar Khan. All rights reserved.
          </p>
          <p className="font-mono text-xs text-astral-champagne/85">
            Designed &amp; Developed with Passion for Technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

