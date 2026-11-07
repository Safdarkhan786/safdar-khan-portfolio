import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { getProjectBySlug, PROJECTS_DATA } from "@/data/projectsData";
import { SITE_METADATA } from "@/config/siteConfig";

interface ProjectCaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const canonicalPath = `/projects/${project.slug}`;
  const canonicalUrl = `${SITE_METADATA.siteUrl}${canonicalPath}`;

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study | Safdar Khan`,
      description: project.shortDescription,
      url: canonicalUrl,
      siteName: "Safdar Khan — Portfolio",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study | Safdar Khan`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </div>
  );
}
