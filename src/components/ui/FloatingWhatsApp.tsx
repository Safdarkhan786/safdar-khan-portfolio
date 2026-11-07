"use client";

import React from "react";
import { motion } from "framer-motion";
import { CONTACT_CONFIG } from "@/config/siteConfig";

export const WhatsAppIcon: React.FC<{ className?: string }> = ({
  className = "h-5 w-5",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.008c0 1.766.461 3.49 1.337 5.012L2 22l5.122-1.343a9.974 9.974 0 0 0 4.906 1.292h.004c5.522 0 10.007-4.485 10.007-10.008C22.039 6.485 17.554 2 12.031 2Zm5.845 14.15c-.246.693-1.434 1.326-1.995 1.409-.513.076-1.163.108-1.878-.118-.434-.138-.99-.322-1.703-.63-2.996-1.294-4.953-4.312-5.103-4.512-.15-.2-1.219-1.622-1.219-3.094 0-1.472.771-2.196 1.045-2.495.274-.3.598-.375.797-.375.199 0 .399.002.573.01.184.009.43-.07.673.514.249.599.847 2.069.921 2.219.075.15.125.324.025.524-.1.2-.15.324-.299.499-.15.174-.314.389-.449.524-.15.15-.305.312-.131.611.174.3.774 1.277 1.662 2.069 1.142 1.018 2.104 1.334 2.403 1.484.3.15.474.125.648-.075.175-.2.748-.873.947-1.172.2-.3.399-.25.673-.15.274.1 1.744.823 2.043.972.3.15.499.225.573.35.075.124.075.723-.171 1.416Z" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href={CONTACT_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Safdar Khan on WhatsApp (${CONTACT_CONFIG.whatsappNumber})`}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-astral-gold/50 bg-obsidian/90 p-3 pr-4 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_28px_rgba(16,185,129,0.22)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-telemetry-emerald/75 hover:shadow-[0_14px_45px_rgba(0,0,0,0.9),0_0_36px_rgba(16,185,129,0.38)] sm:bottom-7 sm:right-7 sm:py-3 sm:pl-3.5 sm:pr-5"
    >
      {/* WhatsApp Emerald & Gold Icon Circle */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-telemetry-emerald to-[#059669] text-obsidian shadow-[0_0_18px_rgba(16,185,129,0.5)]">
        <WhatsAppIcon className="h-5 w-5 text-white" />
        {/* Live status pulse dot */}
        <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-telemetry-emerald opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full border border-obsidian bg-telemetry-emerald" />
        </span>
      </div>

      {/* Text Label */}
      <div className="flex flex-col text-left">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-telemetry-emerald">
          WhatsApp Direct
        </span>
        <span className="font-display text-xs font-bold tracking-wide text-starlight-alabaster group-hover:text-astral-champagne sm:text-[13px]">
          {CONTACT_CONFIG.whatsappNumber}
        </span>
      </div>
    </motion.a>
  );
};

