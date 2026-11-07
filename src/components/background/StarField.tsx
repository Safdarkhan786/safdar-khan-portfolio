"use client";

import React, { useEffect, useRef } from "react";

export interface StarFieldProps {
  prefersReducedMotion?: boolean;
  isMobile?: boolean;
  mouseOffset?: React.MutableRefObject<{ x: number; y: number }>;
  className?: string;
}

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  twinkleAmplitude: number;
  color: string; // "r, g, b"
  depth: number; // 0.15 (far) to 1.0 (near)
  driftVx: number;
  driftVy: number;
  hasDiffractionSpikes: boolean;
}

// Approved Celestial Obsidian & Astral Gold spectral palette (RGB triplets)
const STAR_SPECTRA: { rgb: string; weight: number }[] = [
  { rgb: "248, 249, 250", weight: 0.34 }, // Lunar Alabaster (Warm White)
  { rgb: "243, 229, 171", weight: 0.28 }, // Warm Champagne Gold
  { rgb: "168, 178, 193", weight: 0.18 }, // Soft Starlight Silver
  { rgb: "212, 175, 55", weight: 0.12 },  // Astral Metallic Gold
  { rgb: "148, 163, 184", weight: 0.05 }, // Muted Titanium
  { rgb: "205, 155, 45", weight: 0.03 },  // Burnished Amber Gold
];

function pickStarColor(): string {
  const r = Math.random();
  let acc = 0;
  for (const spectrum of STAR_SPECTRA) {
    acc += spectrum.weight;
    if (r <= acc) return spectrum.rgb;
  }
  return STAR_SPECTRA[0].rgb;
}

// Box-Muller Gaussian random for natural galactic band clustering
function gaussianRandom(): number {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

export const StarField: React.FC<StarFieldProps> = ({
  prefersReducedMotion = false,
  isMobile = false,
  mouseOffset,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars: Star[] = [];
    let isPageVisible = !document.hidden;

    const createStars = (w: number, h: number) => {
      const area = w * h;
      // Thousands of tiny realistic stars on desktop, optimized count on mobile
      const densityDivisor = isMobile ? 2100 : 1050;
      const maxCount = isMobile ? 520 : 1650;
      const minCount = isMobile ? 280 : 950;
      const count = Math.min(maxCount, Math.max(minCount, Math.floor(area / densityDivisor)));

      const generated: Star[] = [];
      const angle = -24 * (Math.PI / 180); // Galactic plane tilt angle
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const diagonal = Math.hypot(w, h);

      for (let i = 0; i < count; i++) {
        // 42% of stars gently follow a diagonal galactic dust band for realistic astronomical structure
        const inGalacticBand = Math.random() < 0.42;
        let x: number;
        let y: number;

        if (inGalacticBand) {
          const along = (Math.random() - 0.5) * diagonal * 1.25;
          const spread = gaussianRandom() * (Math.min(w, h) * 0.22);
          x = w * 0.5 + along * cosA - spread * sinA;
          y = h * 0.48 + along * sinA + spread * cosA;
          // Wrap into viewport bounds if needed
          x = ((x % w) + w) % w;
          y = ((y % h) + h) % h;
        } else {
          x = Math.random() * w;
          y = Math.random() * h;
        }

        // Power-law distribution: vast majority are tiny dust-like stars, very few are bright beacons
        const sizeRoll = Math.random();
        let radius: number;
        let depth: number;
        let baseAlpha: number;
        let hasDiffractionSpikes = false;

        if (sizeRoll < 0.72) {
          // Far micro-stars (thousands of tiny points)
          radius = 0.35 + Math.random() * 0.45;
          depth = 0.15 + Math.random() * 0.2;
          baseAlpha = 0.22 + Math.random() * 0.45;
        } else if (sizeRoll < 0.96) {
          // Mid-field stars
          radius = 0.8 + Math.random() * 0.55;
          depth = 0.4 + Math.random() * 0.35;
          baseAlpha = 0.45 + Math.random() * 0.42;
        } else {
          // Near navigational stars & telescope beacons
          radius = 1.35 + Math.random() * 0.85;
          depth = 0.78 + Math.random() * 0.22;
          baseAlpha = 0.75 + Math.random() * 0.25;
          hasDiffractionSpikes = Math.random() < 0.32;
        }

        generated.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius,
          baseAlpha,
          twinkleSpeed: 0.4 + Math.random() * 1.9,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleAmplitude: sizeRoll < 0.72 ? 0.12 : 0.28,
          color: pickStarColor(),
          depth,
          // Subtle slow celestial drift (west-northwest)
          driftVx: -(0.015 + depth * 0.045),
          driftVy: -(0.006 + depth * 0.018),
          hasDiffractionSpikes,
        });
      }

      stars = generated;
    };

    const setupCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createStars(width, height);
    };

    setupCanvas();

    let currentParallaxX = 0;
    let currentParallaxY = 0;
    let lastTime = performance.now();

    const renderFrame = (now: number) => {
      if (!isPageVisible) return;

      const dt = Math.min((now - lastTime) / 16.667, 3); // normalized to 60fps
      lastTime = now;
      const timeSec = now * 0.001;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax interpolation (desktop only)
      const targetX = !isMobile && !prefersReducedMotion && mouseOffset ? mouseOffset.current.x : 0;
      const targetY = !isMobile && !prefersReducedMotion && mouseOffset ? mouseOffset.current.y : 0;
      currentParallaxX += (targetX - currentParallaxX) * 0.045;
      currentParallaxY += (targetY - currentParallaxY) * 0.045;

      const maxShift = isMobile ? 0 : 22;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!prefersReducedMotion) {
          s.baseX += s.driftVx * dt;
          s.baseY += s.driftVy * dt;

          if (s.baseX < -10) s.baseX = width + 10;
          if (s.baseX > width + 10) s.baseX = -10;
          if (s.baseY < -10) s.baseY = height + 10;
          if (s.baseY > height + 10) s.baseY = -10;
        }

        const drawX = s.baseX + currentParallaxX * maxShift * s.depth;
        const drawY = s.baseY + currentParallaxY * maxShift * s.depth;

        // Scintillation (twinkle) calculation
        let alpha = s.baseAlpha;
        if (!prefersReducedMotion) {
          const wave = Math.sin(timeSec * s.twinkleSpeed + s.twinklePhase);
          alpha = Math.max(0.08, Math.min(1, s.baseAlpha + wave * s.twinkleAmplitude));
        }

        // Draw star core
        ctx.beginPath();
        ctx.arc(drawX, drawY, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${alpha.toFixed(3)})`;
        ctx.fill();

        // Subtle atmospheric halo for larger stars
        if (s.radius > 1.25) {
          const haloRadius = s.radius * 3.4;
          const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, haloRadius);
          grad.addColorStop(0, `rgba(${s.color}, ${(alpha * 0.32).toFixed(3)})`);
          grad.addColorStop(1, `rgba(${s.color}, 0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(drawX, drawY, haloRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Delicate JWST/observatory diffraction spikes on rare primary beacons
        if (s.hasDiffractionSpikes) {
          const spikeLen = s.radius * 5.8 * (0.85 + 0.15 * alpha);
          ctx.strokeStyle = `rgba(${s.color}, ${(alpha * 0.35).toFixed(3)})`;
          ctx.lineWidth = 0.55;

          ctx.beginPath();
          ctx.moveTo(drawX - spikeLen, drawY);
          ctx.lineTo(drawX + spikeLen, drawY);
          ctx.moveTo(drawX, drawY - spikeLen);
          ctx.lineTo(drawX, drawY + spikeLen);
          ctx.stroke();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(renderFrame);
      }
    };

    // Initial render (and continuous loop if motion is allowed)
    animationFrameId = requestAnimationFrame(renderFrame);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setupCanvas();
        if (prefersReducedMotion) {
          renderFrame(performance.now());
        }
      }, 150);
    };

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible && !prefersReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(renderFrame);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [prefersReducedMotion, isMobile, mouseOffset]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 block ${className}`}
    />
  );
};

