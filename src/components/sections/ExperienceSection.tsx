"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { PROFESSIONAL_EXPERIENCES } from "@/data/experienceAndEducationData";
import { CareerTimeline } from "./CareerTimeline";

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience and Career Timeline"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* =========================================================
            SECTION 1: PROFESSIONAL EXPERIENCE
           ========================================================= */}
        <SectionHeader
          badge="05 // Professional Experience"
          title="Professional Journey"
          subtitle="Experience Built Through Real-World Technology Implementation"
          align="center"
        />

        {/* Detailed Experience Cards */}
        <div className="mt-14 space-y-8">
          {PROFESSIONAL_EXPERIENCES.map((exp, idx) => {
            const IconComponent = exp.icon;
            return (
              <GlassCard
                key={exp.id}
                delay={idx * 0.08}
                className="p-6 sm:p-8 lg:p-10"
              >
                {/* Card Header: Organization Emblem, Position, Organization & Optional Verified Period */}
                <div className="flex flex-col justify-between gap-4 border-b border-obsidian-hairline/90 pb-6 md:flex-row md:items-center">
                  <div className="flex items-start gap-4 sm:items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-astral-gold/40 bg-astral-gold/10 text-astral-champagne shadow-[0_0_26px_rgba(212,175,55,0.16)] transition-all duration-300 group-hover:border-astral-champagne/75 group-hover:bg-astral-gold/20 group-hover:text-starlight-alabaster">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-astral-gold">
                          EXPERIENCE {exp.number}
                        </span>
                        <span className="hidden text-obsidian-hairline sm:inline">
                          •
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-starlight-silver">
                          {exp.domainBadge}
                        </span>
                      </div>

                      <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-starlight-alabaster transition-colors duration-300 group-hover:text-astral-champagne sm:text-3xl">
                        {exp.position}
                      </h3>
                      <p className="mt-0.5 font-display text-base font-medium text-astral-gold/95 sm:text-lg">
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  {/* Verified Period Badge (Only displayed where verified) */}
                  {exp.period && (
                    <div className="inline-flex items-center gap-2 self-start rounded-xl border border-astral-gold/35 bg-obsidian/80 px-4 py-2 font-mono text-xs text-astral-champagne md:self-center">
                      <Calendar className="h-4 w-4 text-astral-gold" />
                      <span>{exp.period}</span>
                    </div>
                  )}
                </div>

                {/* Professional Summary (Where provided) */}
                {exp.summary && (
                  <div className="mt-6 rounded-2xl border border-astral-gold/20 bg-obsidian/55 p-4 sm:p-5">
                    <p className="text-sm leading-relaxed text-starlight-alabaster/95 sm:text-base">
                      {exp.summary}
                    </p>
                  </div>
                )}

                {/* Responsibilities & Major Projects Grid */}
                <div
                  className={`mt-6 grid grid-cols-1 gap-6 ${
                    exp.majorProjects ? "lg:grid-cols-12" : ""
                  }`}
                >
                  {/* Key Responsibilities */}
                  <div
                    className={
                      exp.majorProjects ? "lg:col-span-8" : "w-full"
                    }
                  >
                    <div className="mb-3.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-astral-champagne">
                      <Briefcase className="h-4 w-4 text-astral-gold" />
                      <span>{exp.responsibilitiesTitle}</span>
                    </div>

                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {exp.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-obsidian/45 p-3 text-xs leading-relaxed text-starlight-titanium transition-colors duration-200 group-hover:text-starlight-alabaster/90 sm:text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-astral-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Major Projects Column (for Experience 01) */}
                  {exp.majorProjects && (
                    <div className="flex flex-col justify-between rounded-2xl border border-astral-gold/25 bg-obsidian/70 p-5 lg:col-span-4">
                      <div>
                        <div className="mb-3.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-astral-gold">
                          <FolderGit2 className="h-4 w-4" />
                          <span>Major Projects</span>
                        </div>

                        <ul className="space-y-3">
                          {exp.majorProjects.map((proj) => (
                            <li
                              key={proj}
                              className="flex items-start gap-2.5 text-sm font-medium text-starlight-alabaster"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-astral-gold shadow-[0_0_8px_#D4AF37]" />
                              <span>{proj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 border-t border-obsidian-hairline pt-3">
                        <span className="font-mono text-[11px] text-starlight-silver">
                          Scope: 5 Offices • Sahiwal, Okara &amp; Pakpattan
                          Districts
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* =========================================================
            SECTION 2: CAREER TIMELINE
           ========================================================= */}
        <CareerTimeline />
      </div>
    </section>
  );
};

