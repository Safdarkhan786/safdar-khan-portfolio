"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import {
  PROJECTS_DATA,
  type ProjectFilterCategory,
} from "@/data/projectsData";

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectFilterCategory>("All Projects");

  // Calculate count per filter category
  const counts = useMemo(() => {
    const map: Record<ProjectFilterCategory, number> = {
      "All Projects": PROJECTS_DATA.length,
      "IT Infrastructure": 0,
      "AI & Automation": 0,
      "Software Development": 0,
      "Data Solutions": 0,
    };

    for (const p of PROJECTS_DATA) {
      map[p.filterCategory] += 1;
    }

    return map;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter((p) => p.filterCategory === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Heading & Subtitle */}
        <SectionHeader
          badge="04 // Portfolio & Case Studies"
          title="Featured Projects"
          subtitle="Real-World Technology. Practical Solutions."
          align="center"
        />

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-starlight-titanium sm:text-base"
        >
          Explore selected projects demonstrating my experience in IT
          infrastructure, intelligent automation, software development and
          technology implementation.
        </motion.p>

        {/* Interactive Category Filters */}
        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={counts}
        />

        {/* Filtered Project Cards Grid */}
        <ProjectGrid projects={filteredProjects} />
      </div>
    </section>
  );
};

