"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Network } from "lucide-react";
import { DigitalGlobeCanvas } from "./DigitalGlobeCanvas";
import { PORTRAIT_CONFIG } from "@/config/siteConfig";
import { SKLogo } from "@/components/brand/SKLogo";

const ORBITAL_PARTICLES = [
  { angle: 18, distance: "48%", size: 6, color: "bg-astral-champagne", glow: "0 0 14px #F3E5AB" },
  { angle: 76, distance: "44%", size: 4, color: "bg-starlight-alabaster", glow: "0 0 10px #F8F9FA" },
  { angle: 138, distance: "49%", size: 5, color: "bg-astral-gold", glow: "0 0 14px #D4AF37" },
  { angle: 205, distance: "45%", size: 4, color: "bg-astral-champagne", glow: "0 0 12px #F3E5AB" },
  { angle: 268, distance: "49%", size: 6, color: "bg-starlight-alabaster", glow: "0 0 14px #F8F9FA" },
  { angle: 324, distance: "43%", size: 5, color: "bg-astral-gold", glow: "0 0 12px #D4AF37" },
];

const AUTO_DETECT_PORTRAIT_PATHS = [
  "/images/safdar-khan.webp",
  "/images/safdar-khan.png",
  "/images/safdar-khan.jpg",
  "/images/safdar-khan.jpeg",
];

export const HeroOrbitalVisual: React.FC = () => {
  const [resolvedPortraitSrc, setResolvedPortraitSrc] = useState<string | null>(
    PORTRAIT_CONFIG.imageSrc
  );

  // Auto-detect if user placed their portrait in public/images/safdar-khan.{webp,png,jpg,jpeg}
  useEffect(() => {
    if (PORTRAIT_CONFIG.imageSrc) {
      setResolvedPortraitSrc(PORTRAIT_CONFIG.imageSrc);
      return;
    }

    let cancelled = false;
    const probePortrait = async () => {
      for (const candidate of AUTO_DETECT_PORTRAIT_PATHS) {
        try {
          const res = await fetch(candidate, { method: "HEAD" });
          const contentType = res.headers.get("content-type") || "";
          if (res.ok && contentType.startsWith("image/")) {
            if (!cancelled) {
              setResolvedPortraitSrc(candidate);
            }
            return;
          }
        } catch {
          // Continue checking next candidate path
        }
      }
    };

    probePortrait();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center sm:max-w-[500px] lg:max-w-[540px]">
      {/* 1. Ambient Golden Nebula Backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-6 rounded-full blur-[75px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212, 175, 55, 0.22) 0%, rgba(243, 229, 171, 0.09) 45%, rgba(6, 7, 10, 0) 75%)",
        }}
      />

      {/* 2. Outer Cosmic Orbital Ring (Slow Clockwise Rotation) */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 rounded-full border border-astral-gold/20"
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-px -translate-x-1/2 bg-astral-champagne/60" />
        <span className="absolute bottom-0 left-1/2 h-2.5 w-px -translate-x-1/2 bg-astral-champagne/60" />
        <span className="absolute left-0 top-1/2 h-px w-2.5 -translate-y-1/2 bg-astral-champagne/60" />
        <span className="absolute right-0 top-1/2 h-px w-2.5 -translate-y-1/2 bg-astral-champagne/60" />

        {ORBITAL_PARTICLES.map((p, idx) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * 50;
          const y = 50 + Math.sin(rad) * 50;
          return (
            <span
              key={idx}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                boxShadow: p.glow,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${p.color}`}
            />
          );
        })}
      </motion.div>

      {/* 3. Secondary Dashed Technical Telemetry Ring (Counter-Clockwise) */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-[6.5%] rounded-full border border-dashed border-starlight-silver/25"
      >
        <span
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-astral-champagne"
          style={{ boxShadow: "0 0 12px 2px rgba(243, 229, 171, 0.85)" }}
        />
        <span
          className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-astral-gold"
          style={{ boxShadow: "0 0 12px 2px rgba(212, 175, 55, 0.85)" }}
        />
      </motion.div>

      {/* 4. Inclined Elliptical Cosmic Ring Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[3%] -rotate-[26deg] scale-y-[0.42] rounded-full border border-astral-champagne/25 shadow-[0_0_28px_rgba(212,175,55,0.12)]"
      />

      {/* 5. Realistic 3D Digital Globe Canvas Layer */}
      <div className="relative flex h-[84%] w-[84%] items-center justify-center rounded-full">
        <DigitalGlobeCanvas />
      </div>

      {/* 6. Central Executive Portrait Medallion (Supports Next/Image AVIF/WebP + Auto-Detection) */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="group relative z-10 flex h-[55%] w-[55%] flex-col items-center justify-center overflow-hidden rounded-full border-2 border-astral-gold/60 bg-gradient-to-b from-obsidian-onyx/95 via-obsidian to-obsidian-charcoal p-1.5 shadow-[0_22px_65px_rgba(0,0,0,0.88),0_0_45px_rgba(212,175,55,0.24)] backdrop-blur-xl transition-all duration-500 hover:border-astral-champagne/85 hover:shadow-[0_22px_65px_rgba(0,0,0,0.92),0_0_60px_rgba(243,229,171,0.34)]"
      >
        {/* Inner Champagne-Gold Rim & Soft Lighting Frame */}
        <div
          className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border border-astral-champagne/35"
          style={{
            background:
              "radial-gradient(circle at 50% 38%, rgba(212, 175, 55, 0.22) 0%, rgba(24, 28, 40, 0.94) 52%, #07090E 100%)",
          }}
        >
          {/* Soft studio top-lighting reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1/2 rounded-t-full opacity-45"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(243, 229, 171, 0.22) 0%, rgba(212, 175, 55, 0.05) 55%, transparent 100%)",
            }}
          />

          {/* Soft inner circular rim vignette for natural portrait blending */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 rounded-full shadow-[inset_0_0_24px_rgba(6,7,10,0.65)]"
          />

          {resolvedPortraitSrc ? (
            <Image
              src={resolvedPortraitSrc}
              alt={PORTRAIT_CONFIG.alt}
              fill
              priority
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 300px"
              className="z-10 object-cover object-top pt-2 transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            /* Clearly Identified Personal Portrait Placeholder (Never an AI/Unrelated Person) */
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-end overflow-hidden pt-4">
              {/* Personal Brand SK Logo Crest at Top */}
              <div className="z-10 mb-0.5 flex items-center gap-1.5">
                <SKLogo size="sm" showFrame={false} className="h-7 w-7" />
              </div>

              {/* Architectural Executive Silhouette SVG */}
              <svg
                viewBox="0 0 220 225"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Safdar Khan Personal Photograph Placeholder"
                className="h-[78%] w-[86%] text-astral-gold"
              >
                <defs>
                  <linearGradient
                    id="portraitSuitGrad"
                    x1="110"
                    y1="90"
                    x2="110"
                    y2="225"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#1E2330" />
                    <stop offset="55%" stopColor="#12151E" />
                    <stop offset="100%" stopColor="#080A0F" />
                  </linearGradient>
                  <linearGradient
                    id="portraitGoldRim"
                    x1="35"
                    y1="20"
                    x2="185"
                    y2="220"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#F3E5AB" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8A6D1B" stopOpacity="0.25" />
                  </linearGradient>
                </defs>

                {/* Subtle halo behind head */}
                <circle
                  cx="110"
                  cy="70"
                  r="42"
                  fill="url(#portraitGoldRim)"
                  fillOpacity="0.08"
                  stroke="url(#portraitGoldRim)"
                  strokeWidth="0.85"
                  strokeDasharray="3 3"
                />

                {/* Executive Head & Neck Contour */}
                <path
                  d="M110 32C93 32 81 45 81 63.5C81 81 93 95 110 95C127 95 139 81 139 63.5C139 45 127 32 110 32Z"
                  fill="url(#portraitSuitGrad)"
                  stroke="url(#portraitGoldRim)"
                  strokeWidth="1.5"
                />

                {/* Tailored Executive Shoulders & Lapel Silhouette */}
                <path
                  d="M34 224C37 171 64 139 110 139C156 139 183 171 186 224H34Z"
                  fill="url(#portraitSuitGrad)"
                  stroke="url(#portraitGoldRim)"
                  strokeWidth="1.5"
                />

                {/* Subtle Suit Lapel V-Lines in Champagne Gold */}
                <path
                  d="M92 141L110 182L128 141"
                  stroke="url(#portraitGoldRim)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <text
                  x="110"
                  y="206"
                  textAnchor="middle"
                  fill="#F3E5AB"
                  fillOpacity="0.85"
                  fontSize="11.5"
                  fontWeight="700"
                  letterSpacing="2.8"
                  fontFamily="var(--font-space-grotesk), sans-serif"
                >
                  SAFDAR KHAN
                </text>
              </svg>
            </div>
          )}
        </div>
      </motion.div>

      {/* 7. Floating Layered Depth Badges Around the Orbital System */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="cosmic-glass-card pointer-events-none absolute left-1 top-[8%] z-20 flex items-center gap-2 rounded-2xl px-3 py-1.5 sm:left-0 sm:top-[14%] sm:gap-2.5 sm:px-4 sm:py-2.5"
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-astral-gold/35 bg-astral-gold/10 text-astral-champagne sm:h-8 sm:w-8">
          <Network className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-wider text-astral-gold sm:text-[10px]">
            Infrastructure
          </p>
          <p className="font-display text-[11px] font-semibold text-starlight-alabaster sm:text-xs">
            Enterprise IT &amp; Networks
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="cosmic-glass-card pointer-events-none absolute bottom-[8%] right-1 z-20 flex items-center gap-2 rounded-2xl px-3 py-1.5 sm:bottom-[14%] sm:right-0 sm:gap-2.5 sm:px-4 sm:py-2.5"
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-astral-gold/35 bg-astral-gold/10 text-astral-champagne sm:h-8 sm:w-8">
          <Cpu className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-wider text-astral-gold sm:text-[10px]">
            Intelligence
          </p>
          <p className="font-display text-[11px] font-semibold text-starlight-alabaster sm:text-xs">
            AI Agents &amp; Vision
          </p>
        </div>
      </motion.div>
    </div>
  );
};
