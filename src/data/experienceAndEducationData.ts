import {
  Award,
  BookOpen,
  Bot,
  Cpu,
  Database,
  GraduationCap,
  Landmark,
  MonitorCheck,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface ExperienceItem {
  id: string;
  number: string;
  position: string;
  organization: string;
  period?: string; // Only populated where verified; never fabricated
  summary?: string;
  responsibilitiesTitle: "Key Responsibilities" | "Responsibilities";
  responsibilities: string[];
  majorProjects?: string[];
  icon: LucideIcon;
  domainBadge: string;
}

export interface EducationItem {
  id: string;
  number: string;
  degree: string;
  institution: string;
  year: string;
  fieldTag: string;
  icon: LucideIcon;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  categoryTag: string;
  icon: LucideIcon;
}

export const PROFESSIONAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-01",
    number: "01",
    position: "Regional IT Incharge",
    organization: "Punjab Police, Government of Pakistan",
    // No fabricated date
    summary:
      "Managing and supporting IT infrastructure and technology operations across multiple regional and district-level offices, with responsibilities spanning network infrastructure, surveillance systems, communications, technical support and technology implementation.",
    responsibilitiesTitle: "Key Responsibilities",
    responsibilities: [
      "Managing IT operations across five offices.",
      "Supporting infrastructure across Sahiwal, Okara and Pakpattan districts.",
      "Planning and implementing network infrastructure.",
      "Supervising CCTV and surveillance deployments.",
      "Managing VoIP and video conferencing systems.",
      "Supporting biometric attendance systems and reporting.",
      "Troubleshooting hardware, software and network issues.",
      "Coordinating technical teams and infrastructure projects.",
      "Preparing technical reports and procurement recommendations.",
    ],
    majorProjects: [
      "Enterprise IT infrastructure deployment.",
      "CCTV surveillance infrastructure.",
      "Administrative office networking.",
      "Regional technology support and implementation.",
    ],
    icon: Landmark,
    domainBadge: "Enterprise & Regional IT Infrastructure",
  },
  {
    id: "exp-02",
    number: "02",
    position: "Founder & Director",
    organization: "ACE AI Solutions",
    // No fabricated date
    summary:
      "Leading a technology and professional training initiative focused on practical AI solutions, software development, automation and technical education.",
    responsibilitiesTitle: "Key Responsibilities",
    responsibilities: [
      "Developing practical business software solutions.",
      "Working on AI chatbots and intelligent automation.",
      "Building Python-based applications.",
      "Exploring AI agents and computer vision solutions.",
      "Developing business workflow automation.",
      "Providing programming and technology training.",
      "Supporting student software projects and final-year projects.",
      "Designing practical learning programs.",
    ],
    icon: Sparkles,
    domainBadge: "AI Automation, Software & Training",
  },
  {
    id: "exp-03",
    number: "03",
    position: "IT Incharge",
    organization: "Army Public School, Okara Cantt",
    period: "April 2015 – May 2016",
    responsibilitiesTitle: "Responsibilities",
    responsibilities: [
      "Managing computer laboratory and IT operations.",
      "Supporting a network of approximately 100 computers.",
      "Hardware and software troubleshooting.",
      "Computer networking and maintenance.",
      "Supporting educational technology requirements.",
    ],
    icon: MonitorCheck,
    domainBadge: "Campus Network & IT Operations",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-01",
    number: "01",
    degree: "MS Computer Science",
    institution: "Virtual University of Pakistan",
    year: "2021",
    fieldTag: "Postgraduate Degree",
    icon: GraduationCap,
  },
  {
    id: "edu-02",
    number: "02",
    degree: "BS Computer Science",
    institution: "Virtual University of Pakistan",
    year: "2017",
    fieldTag: "Undergraduate Degree",
    icon: GraduationCap,
  },
  {
    id: "edu-03",
    number: "03",
    degree: "Diploma of Associate Engineering — Electronics",
    institution: "Punjab Board of Technical Education",
    year: "2012",
    fieldTag: "Technical Engineering Diploma",
    icon: Cpu,
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-01",
    title: "AI for Everyone",
    issuer: "Google / Coursera",
    categoryTag: "Artificial Intelligence",
    icon: Bot,
  },
  {
    id: "cert-02",
    title: "Python for Everybody",
    issuer: "Google",
    categoryTag: "Programming & Automation",
    icon: Award,
  },
  {
    id: "cert-03",
    title: "Cybersecurity for Everyone",
    issuer: "University of Maryland",
    categoryTag: "Security & Infrastructure",
    icon: ShieldCheck,
  },
  {
    id: "cert-04",
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    categoryTag: "Data Analytics",
    icon: Database,
  },
  {
    id: "cert-05",
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google",
    categoryTag: "Data Decision Making",
    icon: Award,
  },
  {
    id: "cert-06",
    title:
      "Additional practical training in Python, Data Science, Power BI, Pandas and AI tools.",
    issuer: "Continuous Professional Learning",
    categoryTag: "Applied Technical Training",
    icon: BookOpen,
  },
];

