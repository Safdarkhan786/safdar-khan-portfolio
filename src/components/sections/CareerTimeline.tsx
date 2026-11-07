"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, CheckCircle2, Compass } from "lucide-react";
import { PROFESSIONAL_EXPERIENCES } from "@/data/experienceAndEducationData";

export const CareerTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 25%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div className="mt-24 sm:mt-28">
      {/* Sub-Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-astral-gold/30 bg-obsidian-onyx/75 px-4 py-1.5 backdrop-blur-md">
          <Compass className="h-3.5 w-3.5 text-astral-gold" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-astral-champagne">
            Career Timeline // Trajectory
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold tracking-tight text-starlight-alabaster sm:text-3xl lg:text-4xl">
          Career Progression &amp; Milestones
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-starlight-titanium sm:text-base">
          A connected view of leadership, enterprise IT operations, and applied
          AI initiatives across government, private technology, and academic
          environments.
        </p>
      </motion.div>

      {/* Vertical Constellation Timeline Container */}
      <div
        ref={containerRef}
        className="relative mx-auto mt-14 max-w-5xl"
      >
        {/* Background static vertical hairline */}
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-5 top-4 w-px bg-obsidian-hairline sm:left-6 md:left-1/2 md:-translate-x-1/2"
        />

        {/* Scroll-Animated Golden Illuminated Line */}
        <motion.div
          aria-hidden="true"
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-astral-champagne via-astral-gold to-astral-bronze shadow-[0_0_14px_rgba(212,175,55,0.65)] sm:left-6 md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-12 md:space-y-16">
          {PROFESSIONAL_EXPERIENCES.map((item, idx) => {
            const IconComponent = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={`timeline-${item.id}`}
                className="relative flex flex-col md:flex-row md:items-center"
              >
                {/* Animated Orbital Timeline Marker Node */}
                <div
                  aria-hidden="true"
                  className="absolute left-5 top-6 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-astral-gold/60 bg-obsidian shadow-[0_0_24px_rgba(212,175,55,0.45)] sm:left-6 sm:h-11 sm:w-11 md:left-1/2"
                >
                  <span className="absolute inset-1 rounded-full border border-dashed border-astral-champagne/40" />
                  <IconComponent className="h-4 w-4 text-astral-champagne" />
                </div>

                {/* Left / Right Alternating Card Placement on Desktop */}
                <div
                  className={`w-full pl-12 sm:pl-16 md:w-1/2 ${
                    isEven
                      ? "md:pl-0 md:pr-12 lg:pr-16"
                      : "md:ml-auto md:pl-12 lg:pl-16"
                  }`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -24 : 24,
                      y: 16,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="cosmic-glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-astral-gold/45 sm:p-7"
                  >
                    {/* Top Champagne Specular Highlight */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-8 top-0 h-px bg-champagne-shimmer opacity-55"
                    />

                    {/* Top Meta Bar: Index + Optional Verified Date */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-astral-gold">
                        MILESTONE {item.number} // {item.domainBadge}
                      </span>

                      {item.period && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-astral-gold/30 bg-obsidian/80 px-3 py-1 font-mono text-[11px] text-astral-champagne">
                          <Calendar className="h-3 w-3 text-astral-gold" />
                          <span>{item.period}</span>
                        </span>
                      )}
                    </div>

                    {/* Position & Organization */}
                    <h4 className="mt-3 font-display text-xl font-bold text-starlight-alabaster transition-colors group-hover:text-astral-champagne">
                      {item.position}
                    </h4>
                    <p className="mt-0.5 font-display text-sm font-medium text-astral-gold/95 sm:text-base">
                      {item.organization}
                    </p>

                    {/* Brief Description (if present) */}
                    {item.summary && (
                      <p className="mt-3 text-xs leading-relaxed text-starlight-titanium sm:text-sm">
                        {item.summary}
                      </p>
                    )}

                    {/* Highlighted Responsibilities Summary */}
                    <ul className="mt-4 space-y-2 border-t border-obsidian-hairline/80 pt-4">
                      {item.responsibilities.slice(0, 4).map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-2 text-xs leading-relaxed text-starlight-alabaster/90 sm:text-[13px]"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-astral-gold" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

