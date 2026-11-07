"use client";

import React, { useEffect, useRef } from "react";
import { useCosmicEnvironment } from "@/hooks/useCosmicEnvironment";

interface GlobePoint {
  lat: number;
  lon: number;
  isHub: boolean;
  size: number;
}

export const DigitalGlobeCanvas: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { prefersReducedMotion } = useCosmicEnvironment();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let isInViewport = true;
    let isPageVisible = !document.hidden;

    const size = 460;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = size / 2;
    const cy = size / 2;
    const radius = 176;

    // Generate Fibonacci sphere nodes for realistic global infrastructure mesh
    const points: GlobePoint[] = [];
    const totalNodes = 250;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < totalNodes; i++) {
      const y = 1 - (i / (totalNodes - 1)) * 2;
      const lat = Math.asin(y);
      const lon = goldenAngle * i;
      const isHub = i % 19 === 0;
      points.push({
        lat,
        lon,
        isHub,
        size: isHub ? 2.4 : 1.15,
      });
    }

    let rotation = 0.6;
    const axialTilt = 0.34;
    const cosTilt = Math.cos(axialTilt);
    const sinTilt = Math.sin(axialTilt);

    const project = (lat: number, lon: number, rot: number) => {
      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);
      const x0 = cosLat * Math.sin(lon + rot);
      const y0 = sinLat;
      const z0 = cosLat * Math.cos(lon + rot);

      const y = y0 * cosTilt - z0 * sinTilt;
      const z = y0 * sinTilt + z0 * cosTilt;
      const x = x0;

      return {
        px: cx + x * radius,
        py: cy - y * radius,
        z,
      };
    };

    const render = (now: number) => {
      if (!isInViewport || !isPageVisible) return;

      ctx.clearRect(0, 0, size, size);

      if (!prefersReducedMotion) {
        rotation += 0.0032;
      }

      // 1. Deep-space sphere ambient core & golden atmospheric limb glow
      const atmosphereGrad = ctx.createRadialGradient(
        cx - 24,
        cy - 24,
        radius * 0.15,
        cx,
        cy,
        radius * 1.14
      );
      atmosphereGrad.addColorStop(0, "rgba(20, 23, 32, 0.72)");
      atmosphereGrad.addColorStop(0.72, "rgba(13, 15, 20, 0.85)");
      atmosphereGrad.addColorStop(0.92, "rgba(212, 175, 55, 0.14)");
      atmosphereGrad.addColorStop(1, "rgba(212, 175, 55, 0)");

      ctx.fillStyle = atmosphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.12, 0, Math.PI * 2);
      ctx.fill();

      // 2. Longitude meridians
      const meridianCount = 12;
      for (let m = 0; m < meridianCount; m++) {
        const lon = (m / meridianCount) * Math.PI * 2;
        ctx.beginPath();
        let started = false;
        for (let step = -90; step <= 90; step += 6) {
          const lat = (step * Math.PI) / 180;
          const p = project(lat, lon, rotation);
          if (p.z > -0.15) {
            if (!started) {
              ctx.moveTo(p.px, p.py);
              started = true;
            } else {
              ctx.lineTo(p.px, p.py);
            }
          } else {
            started = false;
          }
        }
        ctx.strokeStyle = "rgba(243, 229, 171, 0.11)";
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }

      // 3. Latitude parallels
      const latitudes = [-60, -30, 0, 30, 60];
      for (const latDeg of latitudes) {
        const lat = (latDeg * Math.PI) / 180;
        ctx.beginPath();
        let started = false;
        for (let step = 0; step <= 360; step += 6) {
          const lon = (step * Math.PI) / 180;
          const p = project(lat, lon, rotation);
          if (p.z > -0.1) {
            if (!started) {
              ctx.moveTo(p.px, p.py);
              started = true;
            } else {
              ctx.lineTo(p.px, p.py);
            }
          } else {
            started = false;
          }
        }
        ctx.strokeStyle =
          latDeg === 0
            ? "rgba(212, 175, 55, 0.22)"
            : "rgba(168, 178, 193, 0.09)";
        ctx.lineWidth = latDeg === 0 ? 1 : 0.7;
        ctx.stroke();
      }

      // 4. Project nodes and collect front hubs
      const projectedHubs: { px: number; py: number; z: number }[] = [];

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        const p = project(pt.lat, pt.lon, rotation);

        if (p.z < -0.25) continue;

        const depthAlpha = Math.max(0.08, (p.z + 0.25) / 1.25);

        ctx.beginPath();
        ctx.arc(p.px, p.py, pt.size, 0, Math.PI * 2);

        if (pt.isHub) {
          projectedHubs.push(p);
          const pulse = prefersReducedMotion
            ? 1
            : 0.75 + 0.25 * Math.sin(now * 0.003 + i);
          ctx.fillStyle = `rgba(243, 229, 171, ${(depthAlpha * 0.95 * pulse).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.px, p.py, pt.size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${(depthAlpha * 0.24).toFixed(3)})`;
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(168, 178, 193, ${(depthAlpha * 0.52).toFixed(3)})`;
          ctx.fill();
        }
      }

      // 5. Connect visible hub nodes with warm metallic gold network links
      for (let i = 0; i < projectedHubs.length; i++) {
        for (let j = i + 1; j < projectedHubs.length; j++) {
          const a = projectedHubs[i];
          const b = projectedHubs[j];
          if (a.z < 0.1 || b.z < 0.1) continue;
          const dist = Math.hypot(a.px - b.px, a.py - b.py);
          if (dist < 115) {
            const lineAlpha = (1 - dist / 115) * 0.28 * Math.min(a.z, b.z);
            ctx.beginPath();
            ctx.moveTo(a.px, a.py);
            ctx.lineTo(b.px, b.py);
            ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha.toFixed(3)})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // 6. Outer specular gold rim around the digital globe
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(243, 229, 171, 0.26)";
      ctx.lineWidth = 1.1;
      ctx.stroke();

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(render);
      }
    };

    const startOrResume = () => {
      cancelAnimationFrame(animationId);
      if (isInViewport && isPageVisible) {
        animationId = requestAnimationFrame(render);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isInViewport = entry ? entry.isIntersecting : true;
        if (isInViewport && !prefersReducedMotion) {
          startOrResume();
        } else {
          cancelAnimationFrame(animationId);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible && !prefersReducedMotion) {
        startOrResume();
      } else {
        cancelAnimationFrame(animationId);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startOrResume();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none h-full w-full max-h-[460px] max-w-[460px] ${className}`}
    />
  );
};
