"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { CONTACT_CONFIG } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/ui/FloatingWhatsApp";

export const ContactSection: React.FC = () => {
  const mailtoHref = CONTACT_CONFIG.email
    ? `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(
        "Technology Opportunity / Inquiry — Safdar Khan"
      )}`
    : `mailto:?subject=${encodeURIComponent(
        "Technology Opportunity / Inquiry for Safdar Khan"
      )}`;

  const handleFocusContactForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formEl = document.getElementById("contact-form-panel");
    const nameInput = document.getElementById(
      "contact-fullName"
    ) as HTMLInputElement | null;

    if (formEl) {
      const headerOffset = 96;
      const top =
        formEl.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }

    if (nameInput) {
      setTimeout(() => nameInput.focus(), 450);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Safdar Khan"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* =========================================================
            SECTION 1: CONTACT INTRODUCTION
           ========================================================= */}
        <SectionHeader
          badge="08 // Contact & Inquiries"
          title="Let's Connect"
          subtitle="Have an Opportunity or Technology Project?"
          align="center"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-starlight-titanium sm:text-base"
        >
          I&apos;m always interested in connecting with professionals,
          organizations and businesses to discuss technology opportunities, IT
          infrastructure, software development and AI automation.
        </motion.p>

        {/* Two-Column Contact Layout */}
        <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT COLUMN (5 cols on Desktop): Contact Information */}
          <div className="space-y-4 lg:col-span-5">
            {/* 1. WhatsApp Direct (+92 331 6788362) */}
            <GlassCard delay={0.03} className="p-5 sm:p-6">
              <a
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-telemetry-emerald/45 bg-telemetry-emerald/15 text-telemetry-emerald transition-colors group-hover/link:border-telemetry-emerald group-hover/link:bg-telemetry-emerald/25">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-telemetry-emerald">
                      01 // WhatsApp Direct
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold text-starlight-alabaster group-hover/link:text-astral-champagne sm:text-lg">
                      {CONTACT_CONFIG.whatsappNumber}
                    </h3>
                    <p className="mt-1 text-xs text-starlight-titanium">
                      Click to start a direct WhatsApp conversation
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-telemetry-emerald transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </GlassCard>

            {/* 2. Email (Clickable mailto) */}
            <GlassCard delay={0.05} className="p-5 sm:p-6">
              <a
                href={mailtoHref}
                className="group/link flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-astral-gold/40 bg-astral-gold/10 text-astral-champagne transition-colors group-hover/link:border-astral-champagne group-hover/link:bg-astral-gold/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-astral-gold">
                      01 // Email
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold text-starlight-alabaster group-hover/link:text-astral-champagne sm:text-lg">
                      {CONTACT_CONFIG.email || "Direct Email Inquiry"}
                    </h3>
                    <p className="mt-1 text-xs text-starlight-titanium">
                      {CONTACT_CONFIG.email
                        ? "Click to compose a direct email"
                        : "Click to open email client (Set address in siteConfig.ts)"}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-astral-gold transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </GlassCard>

            {/* 2. LinkedIn (Verified External Profile Link) */}
            <GlassCard delay={0.1} className="p-5 sm:p-6">
              <a
                href={CONTACT_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-astral-gold/40 bg-astral-gold/10 text-astral-champagne transition-colors group-hover/link:border-astral-champagne group-hover/link:bg-astral-gold/20">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-astral-gold">
                      02 // LinkedIn
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold text-starlight-alabaster group-hover/link:text-astral-champagne sm:text-lg">
                      Safdar Khan on LinkedIn
                    </h3>
                    <p className="mt-1 break-all font-mono text-xs text-starlight-titanium">
                      {CONTACT_CONFIG.linkedinUrl}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-astral-gold transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </GlassCard>

            {/* 3. GitHub (Configurable Placeholder Link) */}
            <GlassCard delay={0.15} className="p-5 sm:p-6">
              <a
                href={CONTACT_CONFIG.githubUrl || "#contact-form-panel"}
                target={CONTACT_CONFIG.githubUrl ? "_blank" : undefined}
                rel={
                  CONTACT_CONFIG.githubUrl ? "noopener noreferrer" : undefined
                }
                onClick={
                  !CONTACT_CONFIG.githubUrl ? handleFocusContactForm : undefined
                }
                className="group/link flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-astral-gold/40 bg-astral-gold/10 text-astral-champagne transition-colors group-hover/link:border-astral-champagne group-hover/link:bg-astral-gold/20">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-astral-gold">
                      03 // GitHub
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold text-starlight-alabaster group-hover/link:text-astral-champagne sm:text-lg">
                      GitHub Repositories
                    </h3>
                    <p className="mt-1 text-xs text-starlight-titanium">
                      {CONTACT_CONFIG.githubUrl || CONTACT_CONFIG.githubLabel}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-astral-gold transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </GlassCard>

            {/* 4. Location */}
            <GlassCard delay={0.2} className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-astral-gold/40 bg-astral-gold/10 text-astral-champagne">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-astral-gold">
                    04 // Location
                  </span>
                  <h3 className="mt-1 font-display text-base font-semibold text-starlight-alabaster sm:text-lg">
                    {CONTACT_CONFIG.location}
                  </h3>
                </div>
              </div>
            </GlassCard>

            {/* 5. Professional Opportunities */}
            <GlassCard delay={0.25} className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-telemetry-emerald/40 bg-telemetry-emerald/10 text-telemetry-emerald">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-telemetry-emerald shadow-[0_0_8px_#10B981]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-astral-champagne">
                      05 // Professional Opportunities
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-starlight-alabaster/95">
                    {CONTACT_CONFIG.opportunitiesNote}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* RIGHT COLUMN (7 cols on Desktop): Contact Form */}
          <motion.div
            id="contact-form-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* =========================================================
            SECTION 2: SOCIAL CONNECTIONS
           ========================================================= */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-6 flex flex-col items-center text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-astral-gold">
              Direct Channels // Social Connections
            </span>
            <h3 className="mt-1.5 font-display text-2xl font-bold text-starlight-alabaster">
              Connect Across Platforms
            </h3>
          </div>

          <SocialLinks variant="cards" />
        </div>

        {/* =========================================================
            SECTION 3: PROFESSIONAL CALL TO ACTION BANNER
           ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="cosmic-glass-card relative mt-20 overflow-hidden rounded-3xl border border-astral-gold/40 p-8 text-center sm:mt-24 sm:p-12 lg:p-14"
        >
          {/* Top Champagne Specular Reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-12 top-0 h-px bg-champagne-shimmer opacity-90"
          />

          {/* Subtle Golden Backlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[95px]"
            style={{
              background:
                "radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, rgba(243, 229, 171, 0.05) 55%, transparent 80%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-astral-gold/30 bg-obsidian/80 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-astral-gold" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-astral-champagne">
                Global Collaboration &amp; Hiring
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold tracking-tight text-starlight-alabaster sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Let&apos;s Turn Ideas into Practical Technology Solutions.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-starlight-titanium sm:text-base lg:text-lg">
              Whether you are hiring, building a business solution or exploring
              AI automation, I would be glad to connect.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact-form-panel"
                onClick={handleFocusContactForm}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-solar-eclipse px-8 py-4 text-sm font-semibold tracking-wide text-obsidian shadow-[0_0_32px_rgba(212,175,55,0.34)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_44px_rgba(243,229,171,0.52)] focus:outline-none focus:ring-2 focus:ring-astral-champagne/60"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </a>

              <a
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-telemetry-emerald/50 bg-obsidian/85 px-7 py-4 text-sm font-semibold tracking-wide text-starlight-alabaster shadow-[0_0_24px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-[1.02] hover:border-telemetry-emerald hover:bg-telemetry-emerald/15 hover:text-astral-champagne"
              >
                <WhatsAppIcon className="h-4 w-4 text-telemetry-emerald" />
                <span>WhatsApp ({CONTACT_CONFIG.whatsappNumber})</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

