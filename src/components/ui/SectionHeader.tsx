"use client";

import React from "react";
import { motion } from "framer-motion";

export interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${
        isCenter ? "mx-auto max-w-3xl items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {/* Monospace Telemetry Index Pill */}
      <div className="mb-3.5 inline-flex items-center gap-2.5 rounded-full border border-astral-gold/30 bg-obsidian-onyx/75 px-4 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-astral-gold shadow-[0_0_8px_#D4AF37]" />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-astral-champagne">
          {badge}
        </span>
      </div>

      {/* Main Section Heading */}
      <h2 className="font-display text-3xl font-bold tracking-tight text-starlight-alabaster sm:text-4xl lg:text-[44px] lg:leading-[1.12]">
        {title}
      </h2>

      {/* Decorative Champagne Gold Horizon Accent */}
      <div
        aria-hidden="true"
        className={`mt-4 h-px w-24 bg-gradient-to-r ${
          isCenter
            ? "from-transparent via-astral-gold/70 to-transparent"
            : "from-astral-gold/80 via-astral-champagne/40 to-transparent"
        }`}
      />

      {/* Optional Subtitle */}
      {subtitle && (
        <p className="mt-4 font-display text-base font-medium tracking-wide text-astral-champagne/90 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

