import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Sticky Transparent Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Two-Column Hero Section with Orbital Digital Globe & Portrait Frame */}
        <HeroSection />

        {/* Section 1: About Me + 4 Professional Highlights Cards */}
        <AboutSection />

        {/* Section 2: Professional Expertise ("What I Bring to the Table") + Section 3: Technology Toolkit */}
        <ExpertiseSection />

        {/* Section 4: Featured Projects Showcase with Interactive Category Filters */}
        <ProjectsSection />

        {/* Section 5: Professional Experience ("Professional Journey") + Career Timeline */}
        <ExperienceSection />

        {/* Section 6: Services & Solutions + My Approach + Who I Work With + CTA */}
        <ServicesSection />

        {/* Section 7: Education & Academic Background + Certifications & Professional Learning */}
        <EducationSection />

        {/* Section 8: Contact Section, Contact Form, Social Connections & Final CTA */}
        <ContactSection />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
