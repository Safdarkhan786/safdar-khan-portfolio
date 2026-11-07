"use client";

import React, { useEffect, useState } from "react";

export interface ShootingStarsProps {
  prefersReducedMotion?: boolean;
  isMobile?: boolean;
  minDelay?: number;
  maxDelay?: number;
}

interface Meteor {
  id: number;
  startX: number;
  startY: number;
  angle: number;
  length: number;
  duration: number;
  travelDistance: number;
  accent: "champagne" | "gold" | "silver";
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  prefersReducedMotion = false,
  isMobile = false,
  minDelay = 3800,
  maxDelay = 8500,
}) => {
  const [meteor, setMeteor] = useState<Meteor | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setMeteor(null);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let clearMeteorId: ReturnType<typeof setTimeout>;
    let isCancelled = false;

    const spawnMeteor = () => {
      if (isCancelled) return;

      if (!document.hidden) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const accents: Meteor["accent"][] = ["champagne", "gold", "silver"];
        const accent = accents[Math.floor(Math.random() * accents.length)];
        const duration = 900 + Math.random() * 550; // 0.9s - 1.45s crisp astronomical streak
        const angle = 24 + Math.random() * 18; // 24deg - 42deg natural trajectory

        const newMeteor: Meteor = {
          id: Date.now(),
          startX: Math.random() * (vw * 0.78) + vw * 0.05,
          startY: Math.random() * (vh * 0.48) + vh * 0.03,
          angle,
          length: isMobile ? 95 + Math.random() * 45 : 135 + Math.random() * 75,
          duration,
          travelDistance: isMobile ? 240 + Math.random() * 110 : 380 + Math.random() * 180,
          accent,
        };

        setMeteor(newMeteor);

        clearMeteorId = setTimeout(() => {
          if (!isCancelled) setMeteor(null);
        }, duration + 150);
      }

      const nextInterval = minDelay + Math.random() * (maxDelay - minDelay);
      timeoutId = setTimeout(spawnMeteor, nextInterval);
    };

    // Initial gentle delay before first shooting star
    timeoutId = setTimeout(spawnMeteor, 2400);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
      clearTimeout(clearMeteorId);
    };
  }, [prefersReducedMotion, isMobile, minDelay, maxDelay]);

  if (prefersReducedMotion || !meteor) return null;

  const gradientByAccent = {
    champagne:
      "linear-gradient(90deg, rgba(248,249,250,0.95) 0%, rgba(243,229,171,0.75) 22%, rgba(212,175,55,0.3) 55%, rgba(212,175,55,0) 100%)",
    gold:
      "linear-gradient(90deg, rgba(243,229,171,0.95) 0%, rgba(212,175,55,0.8) 25%, rgba(184,134,11,0.28) 60%, rgba(184,134,11,0) 100%)",
    silver:
      "linear-gradient(90deg, rgba(248,249,250,0.95) 0%, rgba(168,178,193,0.72) 25%, rgba(148,163,184,0.22) 60%, rgba(148,163,184,0) 100%)",
  };

  const rad = (meteor.angle * Math.PI) / 180;
  const dx = Math.cos(rad) * meteor.travelDistance;
  const dy = Math.sin(rad) * meteor.travelDistance;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        key={meteor.id}
        style={
          {
            left: `${meteor.startX}px`,
            top: `${meteor.startY}px`,
            width: `${meteor.length}px`,
            height: "1.5px",
            background: gradientByAccent[meteor.accent],
            transform: `rotate(${meteor.angle}deg)`,
            transformOrigin: "left center",
            "--meteor-dx": `${dx}px`,
            "--meteor-dy": `${dy}px`,
            "--meteor-angle": `${meteor.angle}deg`,
            animation: `astronomicalMeteor ${meteor.duration}ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          } as React.CSSProperties
        }
        className="absolute rounded-full"
      >
        {/* Glowing leading head of the shooting star */}
        <span
          className="absolute -left-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-starlight-alabaster"
          style={{
            boxShadow:
              "0 0 8px 2px rgba(243, 229, 171, 0.85), 0 0 18px 4px rgba(212, 175, 55, 0.45)",
          }}
        />
      </div>
    </div>
  );
};

