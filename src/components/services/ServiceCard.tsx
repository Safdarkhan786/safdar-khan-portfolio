"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import type { ServiceItem } from "@/data/servicesData";

export interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index = 0,
}) => {
  const IconComponent = service.icon;

  return (
    <GlassCard
      delay={index * 0.07}
      className="flex flex-col justify-between p-6 sm:p-7"
    >
      <div>
        {/* Top Row: Icon Badge + Service Number & Domain Tag */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-astral-gold/40 bg-astral-gold/10 text-astral-champagne shadow-[0_0_24px_rgba(212,175,55,0.14)] transition-all duration-300 group-hover:border-astral-champagne/75 group-hover:bg-astral-gold/20 group-hover:text-starlight-alabaster">
            <IconComponent className="h-5 w-5" />
          </div>

          <div className="flex flex-col items-end text-right">
            <span className="font-mono text-xs font-bold tracking-wider text-astral-gold">
              SERVICE {service.number}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-starlight-silver">
              {service.domainTag}
            </span>
          </div>
        </div>

        {/* Service Title */}
        <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-starlight-alabaster transition-colors duration-300 group-hover:text-astral-champagne">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-starlight-titanium">
          {service.description}
        </p>

        {/* Subtle Champagne Gold Divider */}
        <div
          aria-hidden="true"
          className="my-4 h-px w-full bg-gradient-to-r from-astral-gold/30 via-obsidian-hairline to-transparent"
        />

        {/* Capabilities List */}
        <div>
          <span className="mb-2.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-astral-champagne/90">
            Core Capabilities
          </span>
          <ul className="space-y-2.5">
            {service.capabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-start gap-2.5 text-xs leading-relaxed text-starlight-titanium transition-colors duration-200 group-hover:text-starlight-alabaster/90 sm:text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-astral-gold/85" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlassCard>
  );
};

