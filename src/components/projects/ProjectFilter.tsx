"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PROJECT_FILTER_CATEGORIES,
  type ProjectFilterCategory,
} from "@/data/projectsData";

export interface ProjectFilterProps {
  activeCategory: ProjectFilterCategory;
  onSelectCategory: (category: ProjectFilterCategory) => void;
  counts: Record<ProjectFilterCategory, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
    >
      {PROJECT_FILTER_CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        const count = counts[category] ?? 0;

        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(category)}
            className={`relative inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-astral-gold/50 sm:px-5 sm:text-sm ${
              isActive
                ? "text-obsidian font-semibold"
                : "border border-astral-champagne/15 bg-obsidian-onyx/65 text-starlight-silver hover:border-astral-gold/40 hover:text-starlight-alabaster"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeProjectFilterPill"
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 30,
                }}
                className="absolute inset-0 -z-10 rounded-xl bg-solar-eclipse shadow-[0_0_24px_rgba(212,175,55,0.35)]"
              />
            )}
            <span>{category}</span>
            <span
              className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                isActive
                  ? "bg-obsidian/20 text-obsidian font-bold"
                  : "bg-obsidian/80 text-astral-gold"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

