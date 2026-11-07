"use client";

import { useEffect, useState } from "react";

export interface CosmicEnvironmentState {
  prefersReducedMotion: boolean;
  isMobile: boolean;
  isTablet: boolean;
  mounted: boolean;
}

export function useCosmicEnvironment(): CosmicEnvironmentState {
  const [state, setState] = useState<CosmicEnvironmentState>({
    prefersReducedMotion: false,
    isMobile: false,
    isTablet: false,
    mounted: false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnvironment = () => {
      const width = window.innerWidth;
      setState({
        prefersReducedMotion: mediaQuery.matches,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        mounted: true,
      });
    };

    updateEnvironment();

    window.addEventListener("resize", updateEnvironment, { passive: true });
    mediaQuery.addEventListener("change", updateEnvironment);

    return () => {
      window.removeEventListener("resize", updateEnvironment);
      mediaQuery.removeEventListener("change", updateEnvironment);
    };
  }, []);

  return state;
}

