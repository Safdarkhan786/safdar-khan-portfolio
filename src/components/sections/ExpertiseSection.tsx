"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  PROFESSIONAL_EXPERTISE_CARDS,
  TECHNOLOGY_TOOLKIT,
} from "@/data/aboutAndExpertiseData";

export const ExpertiseSection: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Professional Expertise and Technology Toolkit"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* =========================================================
            SECTION 2: PROFESSIONAL EXPERTISE
           ========================================================= */}
        <SectionHeader
          badge="02 // Professional Expertise"
          title="What I Bring to the Table"
          subtitle="Bridging Enterprise IT Infrastructure with Practical AI & Software Solutions"
          align="center"
        />

        {/* 6 Expertise Glassmorphism Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONAL_EXPERTISE_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <GlassCard
                key={card.id}
                delay={idx * 0.07}
                className="flex flex-col justify-between p-6 sm:p-7"
              >
                <div>
                  {/* Card Top Bar: Icon + Index & Domain Tag */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-astral-gold/35 bg-astral-gold/10 text-astral-champagne shadow-[0_0_24px_rgba(212,175,55,0.14)] transition-all duration-300 group-hover:border-astral-champagne/75 group-hover:bg-astral-gold/20 group-hover:text-starlight-alabaster">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="flex flex-col items-end text-right">
                      <span className="font-mono text-xs font-semibold text-astral-gold">
                        {card.index}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-starlight-silver">
                        {card.domainTag}
                      </span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-starlight-alabaster transition-colors duration-300 group-hover:text-astral-champagne">
                    {card.title}
                  </h3>

                  {/* Subtle Divider */}
                  <div
                    aria-hidden="true"
                    className="my-4 h-px w-full bg-gradient-to-r from-astral-gold/30 via-obsidian-hairline to-transparent"
                  />

                  {/* Bullet Points */}
                  <ul className="space-y-2.5">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-starlight-titanium transition-colors duration-200 group-hover:text-starlight-alabaster/90"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-astral-gold/85" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* =========================================================
            SECTION 3: TECHNOLOGY TOOLKIT
           ========================================================= */}
        <div className="mt-24 sm:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-astral-gold/30 bg-obsidian-onyx/75 px-4 py-1.5 backdrop-blur-md">
              <Layers className="h-3.5 w-3.5 text-astral-gold" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-astral-champagne">
                03 // Technology Toolkit
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold tracking-tight text-starlight-alabaster sm:text-3xl lg:text-4xl">
              Technologies, Platforms &amp; Tools
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-starlight-titanium sm:text-base">
              Core infrastructure protocols, programming languages, web
              frameworks, and AI automation tools applied across field
              operations and software projects.
            </p>
          </motion.div>

          {/* 6 Category Showcase Grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TECHNOLOGY_TOOLKIT.map((group, idx) => {
              const IconComponent = group.icon;
              return (
                <GlassCard
                  key={group.id}
                  delay={idx * 0.06}
                  className="flex flex-col justify-between p-6"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-astral-gold/30 bg-obsidian/80 text-astral-gold transition-colors duration-300 group-hover:border-astral-champagne/60 group-hover:text-astral-champagne">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-display text-base font-semibold text-starlight-alabaster group-hover:text-astral-champagne sm:text-lg">
                          {group.category}
                        </h4>
                        <p className="font-mono text-[11px] text-starlight-silver/85">
                          {group.contextNote}
                        </p>
                      </div>
                    </div>

                    {/* Technology Pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-astral-champagne/15 bg-obsidian/75 px-3 py-1.5 font-mono text-xs font-medium text-starlight-alabaster/95 shadow-[inset_0_1px_0_rgba(243,229,171,0.08)] transition-all duration-200 hover:border-astral-gold/50 hover:bg-astral-gold/15 hover:text-astral-champagne"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-astral-gold/80" />
                          <span>{tech}</span>
                        </span>
                      ))}
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

