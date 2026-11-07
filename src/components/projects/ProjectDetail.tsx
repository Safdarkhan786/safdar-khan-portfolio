"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Cpu,
  FileText,
  Layers,
  ShieldAlert,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PROJECTS_DATA, type ProjectItem } from "@/data/projectsData";
import { ProjectIllustration } from "./ProjectIllustration";
import { ProjectGallery } from "./ProjectGallery";

export interface ProjectDetailProps {
  project: ProjectItem;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : null;
  const nextProject =
    currentIndex < PROJECTS_DATA.length - 1
      ? PROJECTS_DATA[currentIndex + 1]
      : null;

  const isDevelopment = project.status.includes("In Progress");

  return (
    <article className="mx-auto max-w-6xl px-4 pb-28 pt-28 sm:px-6 sm:pt-32 lg:px-10">
      {/* Top Breadcrumb & Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-xl border border-astral-gold/35 bg-obsidian-onyx/75 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-astral-champagne backdrop-blur-md transition-all hover:border-astral-champagne/75 hover:bg-astral-gold/15 hover:text-starlight-alabaster"
        >
          <ArrowLeft className="h-4 w-4 text-astral-gold" />
          <span>Back to Featured Projects</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <span className="rounded-full border border-astral-gold/30 bg-obsidian-onyx/80 px-3.5 py-1 font-mono text-xs font-semibold text-astral-gold">
            CASE STUDY // {project.number}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs ${
              isDevelopment
                ? "border-astral-champagne/40 bg-obsidian-onyx/80 text-astral-champagne"
                : "border-telemetry-emerald/40 bg-obsidian-onyx/80 text-telemetry-emerald"
            }`}
          >
            {isDevelopment ? (
              <Clock className="h-3.5 w-3.5 text-astral-gold" />
            ) : (
              <CheckCircle2 className="h-3.5 w-3.5 text-telemetry-emerald" />
            )}
            <span>{project.status}</span>
          </span>
        </div>
      </motion.div>

      {/* Case Study Hero Banner */}
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="cosmic-glass-card mt-7 overflow-hidden rounded-3xl border border-astral-gold/30"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="flex flex-col justify-between p-6 sm:p-9 lg:col-span-7 lg:p-10">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-astral-gold">
                {project.category}
              </span>
              <h1 className="mt-2.5 font-display text-3xl font-bold tracking-tight text-starlight-alabaster sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
                {project.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-starlight-titanium sm:text-lg">
                {project.shortDescription}
              </p>
            </div>

            {/* 3. MY ROLE Highlight Box */}
            <div className="mt-7 rounded-2xl border border-astral-gold/30 bg-obsidian/70 p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-astral-gold/35 bg-astral-gold/15 text-astral-champagne">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-astral-gold">
                    My Role
                  </span>
                  <span className="font-display text-base font-semibold text-starlight-alabaster sm:text-lg">
                    {project.role}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Illustration */}
          <div className="min-h-[240px] border-t border-obsidian-hairline lg:col-span-5 lg:min-h-full lg:border-l lg:border-t-0">
            <ProjectIllustration
              projectNumber={project.number}
              variant={`PROJECT ${project.number} ARCHITECTURE`}
            />
          </div>
        </div>
      </motion.header>

      {/* Optional Confidentiality / Security Notice for Government & Infrastructure Projects */}
      {project.confidentialityNote && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-6 flex items-start gap-3.5 rounded-2xl border border-astral-gold/30 bg-obsidian-onyx/80 px-5 py-4 backdrop-blur-md"
        >
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-astral-gold" />
          <p className="text-xs leading-relaxed text-starlight-silver sm:text-sm">
            {project.confidentialityNote}
          </p>
        </motion.div>
      )}

      {/* 1. PROJECT OVERVIEW & 2. PROBLEM / REQUIREMENT */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="cosmic-glass-card rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-astral-gold">
            <FileText className="h-4 w-4" />
            <span>01 // Project Overview</span>
          </div>
          <h2 className="mt-2 font-display text-xl font-bold text-starlight-alabaster sm:text-2xl">
            Executive Summary
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-starlight-titanium sm:text-base">
            {project.overview}
          </p>
        </section>

        <section className="cosmic-glass-card rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-astral-gold">
            <Sparkles className="h-4 w-4" />
            <span>02 // Problem &amp; Requirement</span>
          </div>
          <h2 className="mt-2 font-display text-xl font-bold text-starlight-alabaster sm:text-2xl">
            Operational Challenge
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-starlight-titanium sm:text-base">
            {project.problemRequirement}
          </p>
        </section>
      </div>

      {/* 4. RESPONSIBILITIES & 6. TECHNOLOGIES USED */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Responsibilities / Key Contributions */}
        <section className="cosmic-glass-card rounded-3xl p-6 sm:p-8 lg:col-span-7">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-astral-gold">
            <Wrench className="h-4 w-4" />
            <span>03 // Responsibilities &amp; {project.contributionsTitle}</span>
          </div>
          <h2 className="mt-2 font-display text-xl font-bold text-starlight-alabaster sm:text-2xl">
            {project.contributionsTitle}
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-obsidian/55 p-3.5 text-sm leading-snug text-starlight-alabaster/90"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-astral-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies Used */}
        <section className="cosmic-glass-card flex flex-col justify-between rounded-3xl p-6 sm:p-8 lg:col-span-5">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-astral-gold">
              <Cpu className="h-4 w-4" />
              <span>04 // Technologies Used</span>
            </div>
            <h2 className="mt-2 font-display text-xl font-bold text-starlight-alabaster sm:text-2xl">
              Technical Stack &amp; Systems
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-xl border border-astral-gold/30 bg-obsidian/80 px-3.5 py-2 font-mono text-xs font-medium text-astral-champagne"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-astral-gold" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-obsidian-hairline bg-obsidian/60 p-4">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-starlight-silver">
              Project Classification
            </span>
            <span className="mt-1 block font-display text-sm font-medium text-starlight-alabaster">
              {project.category} ({project.status})
            </span>
          </div>
        </section>
      </div>

      {/* 5. TECHNICAL ARCHITECTURE */}
      <section className="cosmic-glass-card mt-8 rounded-3xl p-6 sm:p-8">
        <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-astral-gold">
          <Layers className="h-4 w-4" />
          <span>05 // Technical Architecture</span>
        </div>
        <h2 className="mt-2 font-display text-xl font-bold text-starlight-alabaster sm:text-2xl">
          System Design &amp; Structural Layers
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-starlight-titanium sm:text-base">
          {project.technicalArchitectureSummary}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {project.architectureLayers.map((layer, idx) => (
            <div
              key={layer.layer}
              className="rounded-2xl border border-astral-gold/25 bg-obsidian/70 p-5"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-astral-gold">
                Layer 0{idx + 1} // {layer.layer}
              </span>
              <h3 className="mt-1.5 font-display text-base font-semibold text-astral-champagne">
                {layer.component}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-starlight-titanium sm:text-sm">
                {layer.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. IMPLEMENTATION PROCESS & 8. PROJECT RESULTS */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Implementation Process */}
        <section className="cosmic-glass-card rounded-3xl p-6 sm:p-8 lg:col-span-7">
          <span className="font-mono text-xs uppercase tracking-widest text-astral-gold">
            06 // Implementation Process
          </span>
          <h2 className="mt-2 font-display text-xl font-bold text-starlight-alabaster sm:text-2xl">
            Execution Methodology
          </h2>

          <div className="mt-5 space-y-4">
            {project.implementationProcess.map((stage) => (
              <div
                key={stage.step}
                className="flex items-start gap-4 rounded-2xl border border-white/5 bg-obsidian/55 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-astral-gold/40 bg-astral-gold/10 font-mono text-xs font-bold text-astral-champagne">
                  {stage.step}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-starlight-alabaster">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-starlight-titanium sm:text-sm">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Results */}
        <section className="cosmic-glass-card flex flex-col justify-between rounded-3xl p-6 sm:p-8 lg:col-span-5">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-astral-gold">
              07 // Project Results
            </span>
            <h2 className="mt-2 font-display text-xl font-bold text-starlight-alabaster sm:text-2xl">
              Verified Outcomes
            </h2>
            <ul className="mt-5 space-y-3.5">
              {project.projectResults.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-3 rounded-2xl border border-astral-gold/20 bg-obsidian/65 p-4 text-sm leading-relaxed text-starlight-alabaster/95"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-telemetry-emerald" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* 9. PROJECT GALLERY */}
      <section className="mt-12">
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-astral-gold">
            08 // Project Gallery &amp; Technical Blueprints
          </span>
          <h2 className="mt-1.5 font-display text-2xl font-bold text-starlight-alabaster sm:text-3xl">
            Architecture Diagrams &amp; Visual Schematics
          </h2>
        </div>

        <ProjectGallery
          projectNumber={project.number}
          items={project.gallery}
        />
      </section>

      {/* Bottom Case Study Navigation (Previous / Next Project) */}
      <nav
        aria-label="Case Study Pagination"
        className="mt-14 flex flex-col items-stretch justify-between gap-4 border-t border-obsidian-hairline pt-8 sm:flex-row sm:items-center"
      >
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="cosmic-glass-card group flex items-center gap-3.5 rounded-2xl px-5 py-4 transition-all hover:border-astral-gold/45"
          >
            <ArrowLeft className="h-4 w-4 text-astral-gold transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-starlight-silver">
                Previous Project ({prevProject.number})
              </span>
              <span className="font-display text-sm font-semibold text-starlight-alabaster group-hover:text-astral-champagne">
                {prevProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="cosmic-glass-card group flex items-center justify-end gap-3.5 rounded-2xl px-5 py-4 text-right transition-all hover:border-astral-gold/45"
          >
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-starlight-silver">
                Next Project ({nextProject.number})
              </span>
              <span className="font-display text-sm font-semibold text-starlight-alabaster group-hover:text-astral-champagne">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-astral-gold transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <Link
            href="/#projects"
            className="cosmic-glass-card group flex items-center justify-end gap-3.5 rounded-2xl px-5 py-4 text-right transition-all hover:border-astral-gold/45"
          >
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-starlight-silver">
                All Case Studies
              </span>
              <span className="font-display text-sm font-semibold text-starlight-alabaster group-hover:text-astral-champagne">
                Return to Featured Projects
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-astral-gold transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </nav>
    </article>
  );
};

