"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  ABOUT_ME_CONTENT,
  PROFESSIONAL_HIGHLIGHTS,
} from "@/data/aboutAndExpertiseData";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Heading & Subtitle */}
        <SectionHeader
          badge="01 // Executive Profile"
          title={ABOUT_ME_CONTENT.heading}
          subtitle={ABOUT_ME_CONTENT.subtitle}
          align="center"
        />

        {/* Main Content Grid: Biography Narrative + 4 Professional Highlight Cards */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column (7 cols on Desktop): Executive Introduction Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="cosmic-glass-card relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-9 lg:col-span-7 lg:p-10"
          >
            {/* Top subtle champagne reflection line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-champagne-shimmer opacity-70"
            />

            {/* Subtle corner architectural accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[70px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(6, 7, 10, 0) 70%)",
              }}
            />

            <div className="relative z-10 space-y-5">
              {/* Header label inside narrative card */}
              <div className="flex items-center gap-3 border-b border-obsidian-hairline/90 pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-astral-gold">
                  Professional Overview
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-astral-gold/30 to-transparent" />
                <span className="font-mono text-xs text-starlight-silver">
                  10+ YRS EXP
                </span>
              </div>

              {/* First 4 Narrative Paragraphs */}
              <div className="space-y-4 text-base leading-relaxed text-starlight-alabaster/90 sm:text-[16.5px] sm:leading-[1.78]">
                {ABOUT_ME_CONTENT.paragraphs.slice(0, 4).map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? "font-medium text-starlight-alabaster"
                        : "text-starlight-titanium"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* 5th Closing Statement Highlighted in a Champagne-Gold Accent Callout */}
            <div className="relative z-10 mt-7 rounded-2xl border border-astral-gold/25 bg-obsidian/65 p-4 sm:p-5">
              <div className="flex items-start gap-3.5">
                <span
                  aria-hidden="true"
                  className="mt-1 h-8 w-1 shrink-0 rounded-full bg-solar-eclipse"
                />
                <p className="font-display text-base font-medium leading-snug text-astral-champagne sm:text-lg">
                  {ABOUT_ME_CONTENT.paragraphs[4]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (5 cols on Desktop): 4 Professional Highlights Glassmorphism Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-4">
            {PROFESSIONAL_HIGHLIGHTS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <GlassCard
                  key={item.id}
                  delay={idx * 0.08}
                  className="p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Badge */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-astral-gold/35 bg-astral-gold/10 text-astral-champagne shadow-[0_0_20px_rgba(212,175,55,0.12)] transition-all duration-300 group-hover:border-astral-champagne/70 group-hover:bg-astral-gold/20 group-hover:text-starlight-alabaster">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    {/* Card Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display text-base font-semibold text-starlight-alabaster transition-colors duration-300 group-hover:text-astral-champagne sm:text-lg">
                          {item.title}
                        </h3>
                        <span className="font-mono text-[11px] text-astral-gold/75">
                          {item.index}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-starlight-titanium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

