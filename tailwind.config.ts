import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#06070A",
          charcoal: "#0D0F14",
          onyx: "#141720",
          hairline: "#222634",
        },
        astral: {
          gold: "#D4AF37",
          champagne: "#F3E5AB",
          amber: "#B8860B",
          bronze: "#8A6D1B",
        },
        starlight: {
          silver: "#A8B2C1",
          alabaster: "#F8F9FA",
          titanium: "#94A3B8",
        },
        telemetry: {
          emerald: "#10B981",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "solar-eclipse": "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #8A6D1B 100%)",
        "champagne-shimmer": "linear-gradient(90deg, rgba(243,229,171,0) 0%, rgba(243,229,171,0.35) 50%, rgba(243,229,171,0) 100%)",
      },
      animation: {
        "nebula-drift-slow": "nebulaDrift 38s ease-in-out infinite alternate",
        "nebula-drift-reverse": "nebulaDriftReverse 46s ease-in-out infinite alternate",
        "galaxy-rotate": "galaxyRotate 160s linear infinite",
        "pulse-subtle": "pulseSubtle 6s ease-in-out infinite",
      },
      keyframes: {
        nebulaDrift: {
          "0%": { transform: "translate3d(0px, 0px, 0) scale(1)" },
          "50%": { transform: "translate3d(25px, -18px, 0) scale(1.06)" },
          "100%": { transform: "translate3d(-20px, 15px, 0) scale(0.97)" },
        },
        nebulaDriftReverse: {
          "0%": { transform: "translate3d(0px, 0px, 0) scale(1)" },
          "50%": { transform: "translate3d(-30px, 20px, 0) scale(1.05)" },
          "100%": { transform: "translate3d(20px, -15px, 0) scale(0.96)" },
        },
        galaxyRotate: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.03)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

