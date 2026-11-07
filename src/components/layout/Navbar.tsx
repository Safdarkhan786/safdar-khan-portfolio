"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/config/siteConfig";
import { DownloadCvButton } from "@/components/ui/DownloadCvButton";
import { SKLogo } from "@/components/brand/SKLogo";

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Track scroll position for sticky elevation & active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Determine active section based on viewport scroll offset
      const viewportTrigger = scrollY + 180;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.sectionId);
        if (el) {
          const top = el.offsetTop;
          if (viewportTrigger >= top) {
            setActiveSection(item.sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      const target = document.getElementById(sectionId);
      if (target) {
        e.preventDefault();
        setActiveSection(sectionId);
        setMobileMenuOpen(false);

        const headerOffset = 88;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: sectionId === "home" ? 0 : offsetPosition,
          behavior: "smooth",
        });
      } else {
        // Navigating from a sub-route (e.g. /projects/[slug]) back to homepage section
        setMobileMenuOpen(false);
      }
    },
    []
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-10">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Primary Navigation"
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "border border-astral-gold/25 bg-obsidian/80 shadow-[0_18px_50px_rgba(0,0,0,0.75)] backdrop-blur-xl"
            : "border border-astral-champagne/15 bg-obsidian-charcoal/55 shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-md"
        }`}
      >
        {/* Top subtle metallic champagne reflection line */}
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-champagne-shimmer opacity-80" />

        <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-7">
          {/* LEFT: SK Monogram Logo + Name + Subtitle */}
          <a
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            <SKLogo
              size="md"
              className="transition-transform duration-300 group-hover:scale-105"
            />

            {/* Name & Subtitle */}
            <div className="flex flex-col">
              <span className="font-display text-base font-semibold tracking-tight text-starlight-alabaster transition-colors duration-300 group-hover:text-astral-champagne sm:text-lg">
                Safdar Khan
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-astral-gold/90 sm:text-[11px]">
                IT + AI Solutions
              </span>
            </div>
          </a>

          {/* CENTER: Desktop Navigation Links */}
          <ul className="hidden items-center gap-1 lg:flex xl:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <li key={item.sectionId}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.sectionId)}
                    className={`relative inline-flex items-center rounded-xl px-3.5 py-2 text-xs font-medium tracking-wide transition-colors duration-200 xl:px-4 xl:text-[13px] ${
                      isActive
                        ? "text-astral-champagne"
                        : "text-starlight-silver hover:text-starlight-alabaster"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        transition={{
                          type: "spring",
                          stiffness: 340,
                          damping: 30,
                        }}
                        className="absolute inset-0 -z-10 rounded-xl border border-astral-gold/35 bg-astral-gold/10 shadow-[0_0_16px_rgba(212,175,55,0.16)]"
                      />
                    )}
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* RIGHT: Download CV CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <DownloadCvButton variant="navbar" />

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-astral-gold/30 bg-obsidian-onyx/80 text-astral-champagne transition-colors hover:border-astral-gold/60 hover:text-starlight-alabaster lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-astral-gold/15 lg:hidden"
            >
              <div className="flex flex-col gap-1.5 px-4 pb-5 pt-3">
                <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.sectionId;
                    return (
                      <a
                        key={item.sectionId}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.sectionId)}
                        className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-xs font-medium transition-all ${
                          isActive
                            ? "border-astral-gold/40 bg-astral-gold/15 text-astral-champagne"
                            : "border-white/5 bg-obsidian-onyx/40 text-starlight-silver hover:border-astral-gold/20 hover:text-starlight-alabaster"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-astral-gold shadow-[0_0_8px_#D4AF37]" />
                        )}
                      </a>
                    );
                  })}
                </div>

                {/* Mobile Download CV Button */}
                <DownloadCvButton
                  variant="navbar-mobile"
                  onActionComplete={() => setMobileMenuOpen(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

