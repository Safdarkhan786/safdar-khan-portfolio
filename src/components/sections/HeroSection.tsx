"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { HeroOrbitalVisual } from "./HeroOrbitalVisual";
import { DownloadCvButton } from "@/components/ui/DownloadCvButton";

const ACHIEVEMENT_HIGHLIGHTS = [
  {
    label: "10+ Years IT Experience",
    icon: ShieldCheck,
  },
  {
    label: "AI & Automation Projects",
    icon: Sparkles,
  },
  {
    label: "Global Opportunities Ready",
    icon: Globe2,
  },
];

export const HeroSection: React.FC = () => {
  const handleExploreWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      const headerOffset = 88;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      aria-label="Introduction and Hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* LEFT COLUMN: Text First on Mobile & Desktop */}
          <div className="order-1 flex flex-col items-start text-left lg:col-span-7">
            {/* Small Introductory Text */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-astral-gold/30 bg-obsidian-onyx/75 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-astral-gold shadow-[0_0_10px_#D4AF37]" />
              <span className="font-mono text-xs font-medium tracking-[0.18em] text-astral-champagne uppercase">
                Hello, I&apos;m
              </span>
            </motion.div>

            {/* Main Heading: Safdar Khan */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-4xl font-bold tracking-tight text-starlight-alabaster sm:text-6xl lg:text-[64px] lg:leading-[1.06]"
            >
              Safdar Khan
            </motion.h1>

            {/* Professional Title */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-3 bg-solar-eclipse bg-clip-text font-display text-xl font-semibold tracking-tight text-transparent sm:text-2xl lg:text-[28px] lg:leading-snug"
            >
              IT Infrastructure &amp; AI Technology Specialist
            </motion.h2>

            {/* Main Statement */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 font-display text-lg font-medium text-starlight-alabaster/95 sm:text-xl lg:text-2xl"
            >
              Building IT Infrastructure. Developing AI Solutions.
            </motion.p>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-3 max-w-xl text-base leading-relaxed text-starlight-titanium sm:text-lg"
            >
              Turning Technology into Practical Solutions for a Smarter Future.
            </motion.p>

            {/* Dual Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.38,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
            >
              {/* Primary CTA: Explore My Work */}
              <a
                href="#projects"
                onClick={handleExploreWork}
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-solar-eclipse px-7 py-3.5 text-sm font-semibold tracking-wide text-obsidian shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(243,229,171,0.48)] focus:outline-none focus:ring-2 focus:ring-astral-champagne/60"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Download CV */}
              <DownloadCvButton variant="hero" />
            </motion.div>

            {/* Three Compact Achievement Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.46,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3.5"
            >
              {ACHIEVEMENT_HIGHLIGHTS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className="cosmic-glass-card group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 hover:border-astral-gold/45 hover:bg-obsidian-onyx/90"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-astral-gold/30 bg-astral-gold/10 text-astral-gold transition-colors duration-300 group-hover:border-astral-champagne/60 group-hover:text-astral-champagne">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <span className="font-display text-xs font-medium leading-snug text-starlight-alabaster/95 sm:text-[13px]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Visual Second on Mobile, Right Column on Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="order-2 flex w-full items-center justify-center lg:col-span-5"
          >
            <HeroOrbitalVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

