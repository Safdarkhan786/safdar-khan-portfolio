"use client";

import React, { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useCosmicEnvironment } from "@/hooks/useCosmicEnvironment";
import { NebulaClouds } from "./NebulaClouds";
import { StarField } from "./StarField";
import { CosmicParticles } from "./CosmicParticles";
import { ShootingStars } from "./ShootingStars";

export interface GalaxyBackgroundProps {
  className?: string;
}

export const GalaxyBackground: React.FC<GalaxyBackgroundProps> = ({
  className = "",
}) => {
  const { prefersReducedMotion, isMobile } = useCosmicEnvironment();

  // Normalized mouse coordinates (-1 to 1) stored in a ref for 60fps Canvas consumption
  const mouseOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Framer Motion spring values for subtle nebula & galactic plane parallax
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springX = useSpring(rawMouseX, {
    stiffness: 35,
    damping: 26,
    mass: 1.2,
  });
  const springY = useSpring(rawMouseY, {
    stiffness: 35,
    damping: 26,
    mass: 1.2,
  });

  useEffect(() => {
    if (isMobile || prefersReducedMotion) {
      mouseOffsetRef.current = { x: 0, y: 0 };
      rawMouseX.set(0);
      rawMouseY.set(0);
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const normX = (event.clientX / window.innerWidth - 0.5) * 2;
      const normY = (event.clientY / window.innerHeight - 0.5) * 2;

      mouseOffsetRef.current.x = normX;
      mouseOffsetRef.current.y = normY;

      // Very subtle nebula shift (-14px to +14px)
      rawMouseX.set(-normX * 14);
      rawMouseY.set(-normY * 14);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, prefersReducedMotion, rawMouseX, rawMouseY]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 select-none overflow-hidden bg-obsidian ${className}`}
    >
      {/* 1. Deep Space Obsidian & Charcoal Base Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 24%, #0D0F14 0%, #08090D 52%, #06070A 100%)",
        }}
      />

      {/* 2. Distant Galaxies & Golden/Silver Nebula Clouds */}
      <NebulaClouds
        prefersReducedMotion={prefersReducedMotion}
        parallaxX={springX}
        parallaxY={springY}
      />

      {/* 3. Multi-Depth Realistic Astronomical Starfield (Canvas) */}
      <StarField
        prefersReducedMotion={prefersReducedMotion}
        isMobile={isMobile}
        mouseOffset={mouseOffsetRef}
      />

      {/* 4. Subtle Floating Cosmic Dust Particles */}
      <CosmicParticles
        prefersReducedMotion={prefersReducedMotion}
        isMobile={isMobile}
      />

      {/* 5. Occasional Astronomical Shooting Stars */}
      <ShootingStars
        prefersReducedMotion={prefersReducedMotion}
        isMobile={isMobile}
      />

      {/* 6. Subtle Observatory Vignette for Maximum Foreground Text Readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6, 7, 10, 0) 50%, rgba(6, 7, 10, 0.58) 100%)",
        }}
      />

      {/* 7. Ultra-Fine Optical Film Grain (Prevents Gradient Banding) */}
      <div className="cosmic-grain-overlay absolute inset-0 opacity-[0.022]" />
    </div>
  );
};

