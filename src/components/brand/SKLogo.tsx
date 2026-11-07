"use client";

import React from "react";

export interface SKLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showFrame?: boolean;
}

const SIZE_MAP = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
  xl: "h-20 w-20",
};

/**
 * Bespoke Minimal & Geometric Personal Brand Logo ("SK")
 * Crafted in the Celestial Obsidian & Astral Gold palette (#F3E5AB, #D4AF37, #8A6D1B).
 */
export const SKLogo: React.FC<SKLogoProps> = ({
  size = "md",
  className = "",
  showFrame = true,
}) => {
  const uniqueId = React.useId();
  const goldGradId = `sk-gold-grad-${uniqueId}`;
  const borderGradId = `sk-border-grad-${uniqueId}`;

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center select-none ${SIZE_MAP[size]} ${className}`}
      aria-label="SK — Safdar Khan Personal Logo"
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          {/* Primary Warm Metallic & Champagne Gold Gradient */}
          <linearGradient
            id={goldGradId}
            x1="10"
            y1="8"
            x2="54"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#F8F9FA" />
            <stop offset="28%" stopColor="#F3E5AB" />
            <stop offset="68%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6D1B" />
          </linearGradient>

          {/* Subtle Specular Frame Gradient */}
          <linearGradient
            id={borderGradId}
            x1="4"
            y1="4"
            x2="60"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#F3E5AB" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#A8B2C1" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {showFrame && (
          <>
            {/* Precision Chamfered Octagonal-Rounded Frame */}
            <rect
              x="3"
              y="3"
              width="58"
              height="58"
              rx="14"
              fill="#0B0D13"
              fillOpacity="0.88"
              stroke={`url(#${borderGradId})`}
              strokeWidth="1.6"
            />

            {/* Inner Architectural Hairline */}
            <rect
              x="7.5"
              y="7.5"
              width="49"
              height="49"
              rx="10"
              stroke="#F3E5AB"
              strokeOpacity="0.14"
              strokeWidth="0.9"
            />

            {/* Precision Corner Telemetry Accents */}
            <path
              d="M3 14 V10 A7 7 0 0 1 10 3 H14"
              stroke="#F3E5AB"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M61 50 V54 A7 7 0 0 1 54 61 H50"
              stroke="#D4AF37"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Geometric Monogram "S" (Left Half: x=14..31) */}
        <path
          d="M29.5 21 H19.5 C17.3 21 15.8 22.4 15.8 24.5 C15.8 26.5 17.2 27.8 19.4 28.4 L26.2 30.2 C29.3 31.0 31.0 33.0 31.0 36.2 C31.0 39.8 28.3 42.5 24.2 42.5 H15.2"
          stroke={`url(#${goldGradId})`}
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Geometric Monogram "K" (Right Half: x=35..50) */}
        <path
          d="M35.5 20.5 V42.5 M48.8 20.5 L37.2 31.5 L49.2 42.5"
          stroke={`url(#${goldGradId})`}
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Subtle Astral Gold Apex Dot */}
        <circle cx="32" cy="12.5" r="1.4" fill="#F3E5AB" fillOpacity="0.8" />
      </svg>
    </div>
  );
};

