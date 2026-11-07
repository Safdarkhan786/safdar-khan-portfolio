"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Mail, X } from "lucide-react";
import { CONTACT_CONFIG, CV_DOWNLOAD_PATH } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/ui/FloatingWhatsApp";

export interface DownloadCvButtonProps {
  variant?: "navbar" | "navbar-mobile" | "hero";
  onActionComplete?: () => void;
  className?: string;
}

export const DownloadCvButton: React.FC<DownloadCvButtonProps> = ({
  variant = "hero",
  onActionComplete,
  className = "",
}) => {
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleCvClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (checking) return;

    setChecking(true);
    try {
      const res = await fetch(CV_DOWNLOAD_PATH, { method: "HEAD" });
      const contentType = res.headers.get("content-type") || "";

      if (res.ok && contentType.includes("pdf")) {
        // Real PDF exists in /public/Safdar-Khan-CV.pdf — trigger download
        const link = document.createElement("a");
        link.href = CV_DOWNLOAD_PATH;
        link.download = "Safdar-Khan-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onActionComplete?.();
      } else {
        setShowNoticeModal(true);
      }
    } catch {
      setShowNoticeModal(true);
    } finally {
      setChecking(false);
    }
  };

  const handleRequestViaContact = () => {
    setShowNoticeModal(false);
    onActionComplete?.();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const headerOffset = 88;
      const top =
        contactEl.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const baseStylesByVariant = {
    navbar:
      "group relative hidden items-center gap-2 overflow-hidden rounded-xl border border-astral-gold/45 bg-gradient-to-r from-astral-gold/20 via-astral-champagne/15 to-astral-bronze/20 px-4 py-2.5 text-xs font-semibold tracking-wide text-astral-champagne shadow-[0_0_24px_rgba(212,175,55,0.16)] transition-all duration-300 hover:border-astral-champagne/75 hover:bg-astral-gold/25 hover:text-starlight-alabaster hover:shadow-[0_0_30px_rgba(212,175,55,0.32)] sm:inline-flex",
    "navbar-mobile":
      "mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-astral-gold/50 bg-solar-eclipse px-4 py-3 text-xs font-semibold uppercase tracking-wider text-obsidian shadow-[0_0_24px_rgba(212,175,55,0.28)] sm:hidden",
    hero: "group inline-flex items-center justify-center gap-2.5 rounded-xl border border-astral-gold/45 bg-obsidian-onyx/75 px-7 py-3.5 text-sm font-semibold tracking-wide text-astral-champagne backdrop-blur-md transition-all duration-300 hover:border-astral-champagne/80 hover:bg-astral-gold/15 hover:text-starlight-alabaster hover:shadow-[0_0_28px_rgba(212,175,55,0.2)] focus:outline-none focus:ring-2 focus:ring-astral-gold/50",
  };

  return (
    <>
      <a
        href={CV_DOWNLOAD_PATH}
        onClick={handleCvClick}
        className={`${baseStylesByVariant[variant]} ${className}`}
      >
        <Download
          className={
            variant === "navbar"
              ? "h-3.5 w-3.5 text-astral-gold transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-astral-champagne"
              : variant === "navbar-mobile"
              ? "h-4 w-4"
              : "h-4 w-4 text-astral-gold transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-astral-champagne"
          }
        />
        <span>{checking ? "Checking CV..." : "Download CV"}</span>
      </a>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showNoticeModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowNoticeModal(false)}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/85 p-4 backdrop-blur-xl"
              >
                <motion.div
                  initial={{ scale: 0.94, opacity: 0, y: 12 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.94, opacity: 0, y: 12 }}
                  onClick={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="cv-modal-title"
                  className="cosmic-glass-card relative w-full max-w-md overflow-hidden rounded-3xl border border-astral-gold/45 p-6 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-astral-gold/40 bg-astral-gold/15 text-astral-champagne">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-astral-gold">
                          Executive Resume // PDF
                        </span>
                        <h3
                          id="cv-modal-title"
                          className="font-display text-lg font-bold text-starlight-alabaster"
                        >
                          Safdar Khan — Official CV
                        </h3>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowNoticeModal(false)}
                      aria-label="Close modal"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-astral-gold/30 bg-obsidian text-starlight-silver hover:border-astral-gold hover:text-starlight-alabaster"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-starlight-titanium">
                    To request Safdar Khan&apos;s latest detailed curriculum
                    vitae directly, click below to connect via the inquiry
                    section.
                  </p>

                  <div className="mt-3 rounded-xl border border-obsidian-hairline bg-obsidian/70 p-3 font-mono text-[11px] text-starlight-silver">
                    <strong className="text-astral-champagne">
                      Owner Asset Path:
                    </strong>{" "}
                    Place your PDF at{" "}
                    <code className="text-astral-gold">
                      /public/Safdar-Khan-CV.pdf
                    </code>{" "}
                    to enable instant direct download.
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleRequestViaContact}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-solar-eclipse px-4 py-3 text-xs font-semibold uppercase tracking-wider text-obsidian shadow-[0_0_24px_rgba(212,175,55,0.28)] transition-all hover:scale-[1.01]"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Request via Contact</span>
                    </button>
                    {CONTACT_CONFIG.whatsappUrl && (
                      <a
                        href="https://wa.me/923316788362?text=Hello%20Safdar%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20request%20a%20copy%20of%20your%20latest%20CV."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setShowNoticeModal(false)}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-telemetry-emerald/45 bg-telemetry-emerald/15 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-starlight-alabaster transition-all hover:border-telemetry-emerald hover:bg-telemetry-emerald/25"
                      >
                        <WhatsAppIcon className="h-4 w-4 text-telemetry-emerald" />
                        <span>Request on WhatsApp</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

