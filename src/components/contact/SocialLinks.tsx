"use client";

import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { CONTACT_CONFIG } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/ui/FloatingWhatsApp";

export interface SocialLinksProps {
  variant?: "cards" | "compact";
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = "cards",
  className = "",
}) => {
  const mailtoHref = CONTACT_CONFIG.email
    ? `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(
        "Technology Inquiry — Safdar Khan Portfolio"
      )}`
    : `mailto:?subject=${encodeURIComponent(
        "Technology Inquiry for Safdar Khan"
      )}`;

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("contact-form-panel");
    if (target) {
      e.preventDefault();
      const headerOffset = 96;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const socialItems = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      subtitle: CONTACT_CONFIG.whatsappNumber,
      href: CONTACT_CONFIG.whatsappUrl,
      isExternal: true,
      isConfigured: true,
      icon: WhatsAppIcon,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      subtitle: "Verified Professional Profile",
      href: CONTACT_CONFIG.linkedinUrl,
      isExternal: true,
      isConfigured: true,
      icon: Linkedin,
    },
    {
      id: "github",
      name: "GitHub",
      subtitle: CONTACT_CONFIG.githubUrl
        ? "Code Repositories"
        : "Configurable Placeholder (Inquire via Contact)",
      href: CONTACT_CONFIG.githubUrl || "/#contact-form-panel",
      isExternal: Boolean(CONTACT_CONFIG.githubUrl),
      isConfigured: Boolean(CONTACT_CONFIG.githubUrl),
      icon: Github,
    },
    {
      id: "email",
      name: "Email",
      subtitle: CONTACT_CONFIG.email || "Open Email Client (mailto)",
      href: mailtoHref,
      isExternal: false,
      isConfigured: true,
      icon: Mail,
    },
  ];

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {socialItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              onClick={!item.isConfigured ? handleScrollToContact : undefined}
              aria-label={item.name}
              title={`${item.name} — ${item.subtitle}`}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-astral-gold/30 bg-obsidian-onyx/80 text-starlight-silver transition-all duration-300 hover:-translate-y-0.5 hover:border-astral-champagne/75 hover:bg-astral-gold/15 hover:text-astral-champagne hover:shadow-[0_0_20px_rgba(212,175,55,0.24)]"
            >
              <IconComponent className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {socialItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.id}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            onClick={!item.isConfigured ? handleScrollToContact : undefined}
            className="cosmic-glass-card group flex items-center justify-between gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-astral-gold/45"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-astral-gold/35 bg-astral-gold/10 text-astral-champagne transition-all duration-300 group-hover:border-astral-champagne/75 group-hover:bg-astral-gold/20 group-hover:text-starlight-alabaster">
                <IconComponent className="h-5 w-5" />
              </div>
              <div>
                <span className="block font-display text-base font-bold text-starlight-alabaster transition-colors group-hover:text-astral-champagne">
                  {item.name}
                </span>
                <span className="block font-mono text-[11px] text-starlight-titanium">
                  {item.subtitle}
                </span>
              </div>
            </div>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-astral-gold/25 bg-obsidian/70 text-astral-gold transition-all duration-300 group-hover:border-astral-champagne/60 group-hover:text-astral-champagne">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        );
      })}
    </div>
  );
};
