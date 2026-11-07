"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

export interface NebulaCloudsProps {
  prefersReducedMotion?: boolean;
  parallaxX?: MotionValue<number>;
  parallaxY?: MotionValue<number>;
}

export const NebulaClouds: React.FC<NebulaCloudsProps> = ({
  prefersReducedMotion = false,
  parallaxX,
  parallaxY,
}) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Layer 1: Deep Milky Way Galactic Dust Band (Diagonal -24deg) */}
      <motion.div
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
        className="absolute inset-0"
      >
        <div
          className={`absolute left-1/2 top-1/2 h-[58vh] w-[145vw] -translate-x-1/2 -translate-y-1/2 -rotate-[24deg] rounded-full opacity-75 blur-[95px] ${
            prefersReducedMotion ? "" : "animate-pulse-subtle"
          }`}
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.085) 0%, rgba(243, 229, 171, 0.045) 32%, rgba(168, 178, 193, 0.035) 58%, rgba(6, 7, 10, 0) 80%)",
          }}
        />
      </motion.div>

      {/* Layer 2: Primary Distant Spiral/Elliptical Galaxy Core (Upper Right Horizon) */}
      <div
        className={`absolute -right-[8vw] top-[6vh] h-[440px] w-[680px] sm:h-[560px] sm:w-[860px] ${
          prefersReducedMotion ? "" : "animate-nebula-drift-slow"
        }`}
      >
        {/* Outer Silver-Champagne Galactic Halo */}
        <div
          className="absolute inset-0 -rotate-[28deg] rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(ellipse 65% 36% at 50% 50%, rgba(243, 229, 171, 0.12) 0%, rgba(212, 175, 55, 0.075) 35%, rgba(168, 178, 193, 0.04) 62%, rgba(6, 7, 10, 0) 100%)",
          }}
        />
        {/* Inner Warm Gold Galactic Nucleus & Spiral Disk */}
        <div
          className="absolute left-1/2 top-1/2 h-[170px] w-[420px] -translate-x-1/2 -translate-y-1/2 -rotate-[28deg] rounded-full blur-[32px]"
          style={{
            background:
              "radial-gradient(ellipse 55% 24% at 50% 50%, rgba(248, 249, 250, 0.16) 0%, rgba(243, 229, 171, 0.14) 24%, rgba(212, 175, 55, 0.08) 54%, rgba(6, 7, 10, 0) 100%)",
          }}
        />
        {/* Crisp Astronomical Core Pinpoint Glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[38px] w-[110px] -translate-x-1/2 -translate-y-1/2 -rotate-[28deg] rounded-full blur-[12px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(248, 249, 250, 0.28) 0%, rgba(243, 229, 171, 0.15) 48%, rgba(212, 175, 55, 0) 100%)",
          }}
        />
      </div>

      {/* Layer 3: Secondary Silver & Burnished Gold Nebula Cloud (Lower Left Quadrant) */}
      <div
        className={`absolute -left-[12vw] bottom-[4vh] h-[460px] w-[640px] sm:h-[600px] sm:w-[820px] ${
          prefersReducedMotion ? "" : "animate-nebula-drift-reverse"
        }`}
      >
        <div
          className="absolute inset-0 rotate-[18deg] rounded-full blur-[95px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 48% 52%, rgba(168, 178, 193, 0.085) 0%, rgba(184, 134, 11, 0.06) 42%, rgba(13, 15, 20, 0.02) 72%, rgba(6, 7, 10, 0) 100%)",
          }}
        />
      </div>

      {/* Layer 4: Subtle Secondary Distant Galaxy (Upper-Left Deep Field) */}
      <div className="absolute left-[14vw] top-[18vh] hidden h-[180px] w-[320px] rotate-[34deg] opacity-75 md:block">
        <div
          className="h-full w-full rounded-full blur-[28px]"
          style={{
            background:
              "radial-gradient(ellipse 52% 20% at 50% 50%, rgba(243, 229, 171, 0.14) 0%, rgba(168, 178, 193, 0.07) 45%, rgba(6, 7, 10, 0) 100%)",
          }}
        />
      </div>

      {/* Layer 5: Central Zenith Warm Champagne Atmospheric Veil */}
      <div
        className="absolute left-1/2 top-[42%] h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212, 175, 55, 0.048) 0%, rgba(243, 229, 171, 0.025) 45%, rgba(6, 7, 10, 0) 75%)",
        }}
      />
    </div>
  );
};

