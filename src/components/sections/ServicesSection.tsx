"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { ServiceCard } from "@/components/services/ServiceCard";
import {
  AUDIENCE_CARDS,
  PROCESS_STEPS,
  SERVICES_DATA,
  SERVICES_HEADER,
} from "@/data/servicesData";

export const ServicesSection: React.FC = () => {
  const handleDiscussProject = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      const headerOffset = 88;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      aria-label="Services and Solutions"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* =========================================================
            SECTION 1: SERVICES & SOLUTIONS
           ========================================================= */}
        <SectionHeader
          badge="06 // Services & Solutions"
          title={SERVICES_HEADER.heading}
          subtitle={SERVICES_HEADER.subtitle}
          align="center"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-starlight-titanium sm:text-base"
        >
          {SERVICES_HEADER.description}
        </motion.p>

        {/* 6 Premium Service Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* =========================================================
            SECTION 2: HOW I WORK ("My Approach")
           ========================================================= */}
        <div className="mt-24 sm:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-astral-gold/30 bg-obsidian-onyx/75 px-4 py-1.5 backdrop-blur-md">
              <Workflow className="h-3.5 w-3.5 text-astral-gold" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-astral-champagne">
                How I Work // Methodology
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold tracking-tight text-starlight-alabaster sm:text-3xl lg:text-4xl">
              My Approach
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-starlight-titanium sm:text-base">
              A structured four-stage delivery methodology designed to move from
              requirement discovery to reliable deployment and long-term
              operational support.
            </p>
          </motion.div>

          {/* 4-Step Process: Animated Horizontal on Desktop, Vertical on Mobile */}
          <div className="relative mt-14">
            {/* Desktop Horizontal Connecting Line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[12%] right-[12%] top-12 hidden h-px bg-obsidian-hairline lg:block"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
                className="h-full w-full bg-gradient-to-r from-astral-champagne via-astral-gold to-astral-bronze shadow-[0_0_12px_rgba(212,175,55,0.6)]"
              />
            </div>

            {/* Mobile/Tablet Vertical Connecting Line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-10 left-6 top-10 w-px bg-gradient-to-b from-astral-champagne via-astral-gold to-astral-bronze opacity-50 sm:left-8 lg:hidden"
            />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative flex items-start gap-5 pl-2 sm:pl-4 lg:flex-col lg:items-center lg:pl-0 lg:text-center"
                  >
                    {/* Step Orbital Node */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-astral-gold/55 bg-obsidian shadow-[0_0_24px_rgba(212,175,55,0.28)] lg:h-20 lg:w-20 lg:rounded-3xl">
                      <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-astral-champagne/60 bg-solar-eclipse font-mono text-[10px] font-bold text-obsidian shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                        {step.number}
                      </span>
                      <IconComponent className="h-5 w-5 text-astral-champagne lg:h-7 lg:w-7" />
                    </div>

                    {/* Step Card Body */}
                    <div className="cosmic-glass-card flex-1 rounded-2xl p-5 transition-all duration-300 hover:border-astral-gold/40 lg:mt-4 lg:w-full lg:p-6">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-astral-gold">
                        Step {step.number}
                      </span>
                      <h4 className="mt-1 font-display text-lg font-bold text-starlight-alabaster sm:text-xl">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-starlight-titanium sm:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 3: WHO I WORK WITH
           ========================================================= */}
        <div className="mt-24 sm:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-astral-gold/30 bg-obsidian-onyx/75 px-4 py-1.5 backdrop-blur-md">
              <Users className="h-3.5 w-3.5 text-astral-gold" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-astral-champagne">
                Who I Work With // Partners &amp; Clients
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold tracking-tight text-starlight-alabaster sm:text-3xl lg:text-4xl">
              Tailored for Modern Organizations
            </h3>
          </motion.div>

          {/* 3 Audience Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {AUDIENCE_CARDS.map((aud, idx) => {
              const IconComponent = aud.icon;
              return (
                <GlassCard
                  key={aud.id}
                  delay={idx * 0.08}
                  className="flex flex-col justify-between p-6 sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-astral-gold/35 bg-astral-gold/10 text-astral-champagne">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-astral-gold">
                        {aud.index}
                      </span>
                    </div>

                    <h4 className="mt-5 font-display text-lg font-semibold text-astral-champagne">
                      {aud.label}
                    </h4>

                    <p className="mt-2.5 text-sm leading-relaxed text-starlight-alabaster/95 sm:text-base">
                      {aud.description}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            SECTION 4: CALL TO ACTION ("Have a Technology Challenge?")
           ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="cosmic-glass-card relative mt-24 overflow-hidden rounded-3xl border border-astral-gold/35 p-8 sm:mt-28 sm:p-12 lg:p-14"
        >
          {/* Top Champagne Specular Reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-12 top-0 h-px bg-champagne-shimmer opacity-85"
          />

          {/* Ambient Golden Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[90px]"
            style={{
              background:
                "radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, rgba(243, 229, 171, 0.05) 50%, transparent 75%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-astral-gold/30 bg-obsidian/75 px-3.5 py-1">
                <Sparkles className="h-3.5 w-3.5 text-astral-gold" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-astral-champagne">
                  Consultation &amp; Solutions
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight text-starlight-alabaster sm:text-3xl lg:text-4xl">
                Have a Technology Challenge?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-starlight-titanium sm:text-base lg:text-lg">
                Let&apos;s discuss how practical IT infrastructure, software
                development and AI automation can help solve your business
                challenges.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                onClick={handleDiscussProject}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-solar-eclipse px-8 py-4 text-sm font-semibold tracking-wide text-obsidian shadow-[0_0_32px_rgba(212,175,55,0.32)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_42px_rgba(243,229,171,0.5)] focus:outline-none focus:ring-2 focus:ring-astral-champagne/60"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

