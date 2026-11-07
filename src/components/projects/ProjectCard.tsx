"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, CheckCircle2, Clock } from "lucide-react";
import type { ProjectItem } from "@/data/projectsData";
import { ProjectIllustration } from "./ProjectIllustration";

export interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
}) => {
  const cardRef = useRef<HTMLElement | null>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  const isDevelopment = project.status.includes("In Progress");

  return (
    <motion.article
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.48,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="cosmic-glass-card group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:border-astral-gold/45"
    >
      {/* Top Champagne Reflection Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-champagne-shimmer opacity-50 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Cursor-Tracking Spotlight */}
      <div
        aria-hidden="true"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(420px circle at ${spotlight.x}px ${spotlight.y}px, rgba(243, 229, 171, 0.075), rgba(212, 175, 55, 0.025) 45%, transparent 80%)`,
        }}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
      />

      {/* TOP AREA: Visual Illustration + Project Number & Category Overlay */}
      <div className="relative z-10">
        <div className="relative h-48 w-full overflow-hidden border-b border-obsidian-hairline/90 sm:h-52">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
            <ProjectIllustration projectNumber={project.number} />
          </div>

          {/* Project Number Badge (Top Left) */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-astral-gold/40 bg-obsidian/85 px-3 py-1 backdrop-blur-md">
            <span className="font-mono text-xs font-bold tracking-wider text-astral-gold">
              PROJECT {project.number}
            </span>
          </div>

          {/* Status Pill (Top Right) */}
          <div className="absolute right-4 top-4">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur-md ${
                isDevelopment
                  ? "border-astral-champagne/40 bg-obsidian/85 text-astral-champagne"
                  : "border-telemetry-emerald/35 bg-obsidian/85 text-telemetry-emerald"
              }`}
            >
              {isDevelopment ? (
                <>
                  <Clock className="h-3 w-3 text-astral-gold" />
                  <span>In Development</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-3 w-3 text-telemetry-emerald" />
                  <span>Implemented</span>
                </>
              )}
            </span>
          </div>
        </div>

        {/* CARD BODY */}
        <div className="p-6 sm:p-7">
          {/* Category Label */}
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-astral-gold">
            {project.category}
          </span>

          {/* Project Title */}
          <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-starlight-alabaster transition-colors duration-300 group-hover:text-astral-champagne sm:text-2xl">
            <Link
              href={`/projects/${project.slug}`}
              className="focus:outline-none"
            >
              {project.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="mt-3 text-sm leading-relaxed text-starlight-titanium">
            {project.shortDescription}
          </p>

          {/* Role Badge */}
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/5 bg-obsidian/60 px-3 py-2">
            <Briefcase className="h-3.5 w-3.5 shrink-0 text-astral-gold" />
            <span className="font-mono text-[11px] text-starlight-silver">
              Role:{" "}
              <strong className="font-medium text-astral-champagne">
                {project.role}
              </strong>
            </span>
          </div>

          {/* 4 Key Technologies / Features Pills */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.cardHighlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-lg border border-astral-champagne/15 bg-obsidian/75 px-2.5 py-1 font-mono text-[11px] text-starlight-alabaster/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CARD FOOTER: View Case Study CTA */}
      <div className="relative z-10 border-t border-obsidian-hairline/80 px-6 py-4 sm:px-7">
        <Link
          href={`/projects/${project.slug}`}
          className="group/btn inline-flex w-full items-center justify-between text-xs font-semibold uppercase tracking-widest text-astral-champagne transition-colors duration-200 hover:text-starlight-alabaster"
        >
          <span>View Case Study</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-astral-gold/35 bg-astral-gold/10 text-astral-gold transition-all duration-300 group-hover/btn:border-astral-champagne/70 group-hover/btn:bg-astral-gold/25 group-hover/btn:text-starlight-alabaster">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </motion.article>
  );
};

