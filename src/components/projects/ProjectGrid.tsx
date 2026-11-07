"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectItem } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";

export interface ProjectGridProps {
  projects: ProjectItem[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <motion.div
      layout
      className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

