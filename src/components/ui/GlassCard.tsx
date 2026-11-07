"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  delay = 0,
  as = "article",
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [spotlight, setSpotlight] = useState<{
    x: number;
    y: number;
    opacity: number;
  }>({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const MotionTag = as === "article" ? motion.article : motion.div;

  return (
    <MotionTag
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`cosmic-glass-card group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-astral-gold/40 ${className}`}
    >
      {/* Top subtle champagne specular border reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-champagne-shimmer opacity-45 transition-opacity duration-300 group-hover:opacity-90"
      />

      {/* Subtle cursor-tracking warm champagne radial spotlight */}
      <div
        aria-hidden="true"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(380px circle at ${spotlight.x}px ${spotlight.y}px, rgba(243, 229, 171, 0.075), rgba(212, 175, 55, 0.03) 45%, transparent 80%)`,
        }}
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
      />

      <div className="relative z-10 h-full">{children}</div>
    </MotionTag>
  );
};

