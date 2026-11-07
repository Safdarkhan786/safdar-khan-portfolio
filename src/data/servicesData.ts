import {
  Bot,
  Building2,
  Camera,
  Code2,
  Compass,
  Cpu,
  FileSpreadsheet,
  Headset,
  Lightbulb,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
  domainTag: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AudienceCardItem {
  id: string;
  index: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES_HEADER = {
  heading: "Services & Solutions",
  subtitle: "Practical Technology Solutions for Modern Organizations",
  description:
    "I combine hands-on IT infrastructure experience with software development and emerging AI technologies to help organizations improve their technology operations and business workflows.",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-01",
    number: "01",
    title: "IT Infrastructure & Networking",
    domainTag: "Enterprise Connectivity",
    description:
      "Planning, implementing and supporting reliable IT infrastructure for offices and organizations.",
    capabilities: [
      "LAN and network infrastructure planning.",
      "Structured cabling and connectivity.",
      "Network device configuration and troubleshooting.",
      "IT infrastructure deployment.",
      "Technical documentation and support.",
    ],
    icon: Network,
  },
  {
    id: "service-02",
    number: "02",
    title: "CCTV & Surveillance Systems",
    domainTag: "Security Infrastructure",
    description:
      "Professional surveillance infrastructure planning, deployment and technical support.",
    capabilities: [
      "IP CCTV systems.",
      "PTZ and thermal PTZ camera infrastructure.",
      "NVR connectivity and networking.",
      "CCTV installation supervision.",
      "Surveillance system troubleshooting.",
    ],
    icon: Camera,
  },
  {
    id: "service-03",
    number: "03",
    title: "AI Automation & Intelligent Agents",
    domainTag: "Intelligent Workflows",
    description:
      "Developing practical AI-powered workflows and intelligent solutions to reduce repetitive work.",
    capabilities: [
      "AI chatbots.",
      "AI agents and tool integration.",
      "n8n workflow automation.",
      "Python automation.",
      "Business process automation.",
    ],
    icon: Bot,
  },
  {
    id: "service-04",
    number: "04",
    title: "Custom Software & Business Applications",
    domainTag: "Application Engineering",
    description:
      "Building practical software applications that help businesses organize their operations.",
    capabilities: [
      "Business management applications.",
      "Web application development.",
      "Backend API development.",
      "Database-driven systems.",
      "Custom workflow solutions.",
    ],
    icon: Code2,
  },
  {
    id: "service-05",
    number: "05",
    title: "Python & Data Automation",
    domainTag: "Data & Extraction",
    description:
      "Automating data collection, processing and repetitive digital tasks.",
    capabilities: [
      "Web scraping.",
      "E-commerce data extraction.",
      "Price and stock monitoring.",
      "Excel and Google Sheets automation.",
      "Data processing and visualization.",
    ],
    icon: FileSpreadsheet,
  },
  {
    id: "service-06",
    number: "06",
    title: "IT Support & Technical Consulting",
    domainTag: "Operations & Advisory",
    description:
      "Supporting organizations with practical IT solutions, technical troubleshooting and infrastructure guidance.",
    capabilities: [
      "IT hardware and software support.",
      "Network troubleshooting.",
      "Technology planning.",
      "IT operations documentation.",
      "Technical team coordination.",
    ],
    icon: Headset,
  },
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the business requirement and technical challenges.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Design a suitable technical solution and implementation strategy.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Implement",
    description: "Develop, configure and deploy the required solution.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Support & Improve",
    description: "Test, monitor, document and improve the solution.",
    icon: ShieldCheck,
  },
];

export const AUDIENCE_CARDS: AudienceCardItem[] = [
  {
    id: "audience-01",
    index: "01",
    label: "Enterprise & Institutional IT",
    description:
      "Organizations seeking IT infrastructure and technical operations support.",
    icon: Building2,
  },
  {
    id: "audience-02",
    index: "02",
    label: "Modernizing Businesses",
    description:
      "Businesses looking for automation and custom software solutions.",
    icon: Cpu,
  },
  {
    id: "audience-03",
    index: "03",
    label: "Forward-Thinking Teams",
    description:
      "Companies seeking practical AI integration and workflow improvements.",
    icon: Sparkles,
  },
];

