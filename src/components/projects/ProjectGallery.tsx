"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import type { ProjectGalleryItem } from "@/data/projectsData";
import { ProjectIllustration } from "./ProjectIllustration";

export interface ProjectGalleryProps {
  projectNumber: string;
  items: ProjectGalleryItem[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projectNumber,
  items,
}) => {
  const [selectedItem, setSelectedItem] = useState<ProjectGalleryItem | null>(
    null
  );

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="cosmic-glass-card group flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-300 hover:border-astral-gold/45"
          >
            <div>
              <div className="relative h-44 w-full overflow-hidden border-b border-obsidian-hairline/80">
                {item.imageSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <ProjectIllustration
                    projectNumber={projectNumber}
                    variant={`FIG 0${idx + 1}`}
                  />
                )}

                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  aria-label={`Inspect ${item.title}`}
                  className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-astral-gold/35 bg-obsidian/85 text-astral-champagne opacity-85 backdrop-blur-md transition-all hover:border-astral-champagne hover:opacity-100"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-astral-gold">
                  Architecture View 0{idx + 1}
                </span>
                <h4 className="mt-1.5 font-display text-base font-semibold text-starlight-alabaster group-hover:text-astral-champagne">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-starlight-titanium">
                  {item.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Modal Lightbox for Gallery Inspection */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/85 p-4 backdrop-blur-xl sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="cosmic-glass-card relative w-full max-w-3xl overflow-hidden rounded-3xl border border-astral-gold/40 p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-astral-gold">
                    Project {projectNumber} // Technical Visual
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-starlight-alabaster sm:text-2xl">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close gallery preview"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-astral-gold/30 bg-obsidian text-astral-champagne hover:border-astral-gold"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 h-64 w-full overflow-hidden rounded-2xl border border-obsidian-hairline sm:h-80">
                {selectedItem.imageSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={selectedItem.imageSrc}
                    alt={selectedItem.title}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <ProjectIllustration
                    projectNumber={projectNumber}
                    variant={selectedItem.diagramType.toUpperCase()}
                  />
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-starlight-titanium">
                {selectedItem.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

