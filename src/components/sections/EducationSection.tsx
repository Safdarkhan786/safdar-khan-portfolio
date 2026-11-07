"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
} from "@/data/experienceAndEducationData";

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education and Certifications"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* =========================================================
            SECTION 3: EDUCATION & ACADEMIC BACKGROUND
           ========================================================= */}
        <SectionHeader
          badge="07 // Academic Credentials"
          title="Education & Academic Background"
          subtitle="Formal Academic Foundation in Computer Science & Electronics Engineering"
          align="center"
        />

        {/* 3 Education Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {EDUCATION_DATA.map((edu, idx) => {
            const IconComponent = edu.icon;
            return (
              <GlassCard
                key={edu.id}
                delay={idx * 0.08}
                className="flex flex-col justify-between p-6 sm:p-7"
              >
                <div>
                  {/* Card Top Bar: Icon + Year Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-astral-gold/40 bg-astral-gold/10 text-astral-champagne shadow-[0_0_24px_rgba(212,175,55,0.14)] transition-all duration-300 group-hover:border-astral-champagne/75 group-hover:bg-astral-gold/20 group-hover:text-starlight-alabaster">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-astral-gold/35 bg-obsidian/80 px-3.5 py-1 font-mono text-xs font-semibold text-astral-champagne">
                      <Calendar className="h-3.5 w-3.5 text-astral-gold" />
                      <span>{edu.year}</span>
                    </span>
                  </div>

                  {/* Field Tag */}
                  <span className="mt-5 block font-mono text-[10px] uppercase tracking-[0.18em] text-astral-gold">
                    {edu.fieldTag}
                  </span>

                  {/* Degree Name */}
                  <h3 className="mt-1.5 font-display text-xl font-bold leading-snug text-starlight-alabaster transition-colors duration-300 group-hover:text-astral-champagne sm:text-2xl">
                    {edu.degree}
                  </h3>
                </div>

                {/* Institution Footer */}
                <div className="mt-6 border-t border-obsidian-hairline/80 pt-4">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-starlight-silver">
                    Institution
                  </span>
                  <p className="mt-1 font-display text-sm font-medium text-starlight-alabaster/95 sm:text-base">
                    {edu.institution}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* =========================================================
            SECTION 4: CERTIFICATIONS & PROFESSIONAL LEARNING
           ========================================================= */}
        <div className="mt-24 sm:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-astral-gold/30 bg-obsidian-onyx/75 px-4 py-1.5 backdrop-blur-md">
              <Award className="h-3.5 w-3.5 text-astral-gold" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-astral-champagne">
                Continuous Learning // Credentials
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold tracking-tight text-starlight-alabaster sm:text-3xl lg:text-4xl">
              Certifications &amp; Professional Learning
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-starlight-titanium sm:text-base">
              Specialized coursework and practical skill development across
              artificial intelligence, Python programming, cybersecurity, and
              data analytics.
            </p>
          </motion.div>

          {/* 6 Certification Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS_DATA.map((cert, idx) => {
              const IconComponent = cert.icon;
              return (
                <GlassCard
                  key={cert.id}
                  delay={idx * 0.06}
                  className="flex flex-col justify-between p-6"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-astral-gold/35 bg-obsidian/80 text-astral-gold transition-colors duration-300 group-hover:border-astral-champagne/70 group-hover:text-astral-champagne">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-starlight-silver">
                        {cert.categoryTag}
                      </span>
                    </div>

                    <h4 className="mt-4 font-display text-base font-semibold leading-snug text-starlight-alabaster transition-colors duration-300 group-hover:text-astral-champagne sm:text-lg">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="mt-5 flex items-center gap-2 border-t border-obsidian-hairline/75 pt-3.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-astral-gold" />
                    <span className="font-mono text-xs font-medium text-astral-champagne/95">
                      {cert.issuer}
                    </span>
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

