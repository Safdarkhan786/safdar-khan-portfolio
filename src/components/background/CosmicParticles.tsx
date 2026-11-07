"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CosmicParticlesProps {
  prefersReducedMotion?: boolean;
  isMobile?: boolean;
}

interface DustParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  glowColor: string;
  baseOpacity: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
}

const DUST_PALETTE = [
  {
    color: "rgba(243, 229, 171, 0.78)",
    glow: "rgba(243, 229, 171, 0.32)",
  }, // Champagne Gold
  {
    color: "rgba(212, 175, 55, 0.72)",
    glow: "rgba(212, 175, 55, 0.28)",
  }, // Warm Metallic Gold
  {
    color: "rgba(168, 178, 193, 0.68)",
    glow: "rgba(168, 178, 193, 0.24)",
  }, // Soft Silver
  {
    color: "rgba(248, 249, 250, 0.65)",
    glow: "rgba(248, 249, 250, 0.22)",
  }, // Subtle Warm White
];

export const CosmicParticles: React.FC<CosmicParticlesProps> = ({
  prefersReducedMotion = false,
  isMobile = false,
}) => {
  const [particles, setParticles] = useState<DustParticle[]>([]);

  useEffect(() => {
    const count = isMobile ? 14 : 32;
    const generated: DustParticle[] = Array.from({ length: count }, (_, idx) => {
      const palette = DUST_PALETTE[idx % DUST_PALETTE.length];
      return {
        id: idx,
        x: (idx * 37.3 + Math.random() * 14) % 98,
        y: (idx * 23.7 + Math.random() * 16) % 96,
        size: 1.4 + Math.random() * 2.4,
        color: palette.color,
        glowColor: palette.glow,
        baseOpacity: 0.16 + Math.random() * 0.34,
        driftX: (Math.random() - 0.5) * 34,
        driftY: -18 - Math.random() * 28,
        duration: 14 + Math.random() * 18,
        delay: Math.random() * 6,
      };
    });

    setParticles(generated);
  }, [isMobile]);

  if (particles.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((p) =>
        prefersReducedMotion ? (
          <span
            key={p.id}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.baseOpacity,
              boxShadow: `0 0 ${p.size * 3.5}px ${p.glowColor}`,
            }}
            className="absolute rounded-full"
          />
        ) : (
          <motion.span
            key={p.id}
            initial={{
              opacity: p.baseOpacity * 0.6,
              x: 0,
              y: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: [
                p.baseOpacity * 0.55,
                p.baseOpacity,
                p.baseOpacity * 0.45,
                p.baseOpacity * 0.9,
                p.baseOpacity * 0.55,
              ],
              x: [0, p.driftX, p.driftX * 0.4, 0],
              y: [0, p.driftY * 0.5, p.driftY, 0],
              scale: [0.9, 1.12, 0.95, 0.9],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.glowColor}`,
            }}
            className="absolute rounded-full will-change-transform"
          />
        )
      )}
    </div>
  );
};

