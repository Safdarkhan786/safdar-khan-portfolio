import {
  Bot,
  Building2,
  Camera,
  Code2,
  Cpu,
  Database,
  FileSpreadsheet,
  Layout,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export interface HighlightCardItem {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ExpertiseCardItem {
  id: string;
  index: string;
  title: string;
  domainTag: string;
  icon: LucideIcon;
  points: string[];
}

export interface TechCategoryItem {
  id: string;
  category: string;
  contextNote: string;
  icon: LucideIcon;
  technologies: string[];
}

export const ABOUT_ME_CONTENT = {
  heading: "About Me",
  subtitle: "Technology Professional | IT Infrastructure | AI & Automation",
  paragraphs: [
    "I am Safdar Khan, an IT and technology professional with over 10 years of practical experience in IT infrastructure, networking, systems administration, technical operations and technology implementation.",
    "My professional journey combines enterprise IT infrastructure management with modern software development and emerging AI technologies.",
    "Throughout my career, I have worked on planning and implementing IT infrastructure, CCTV surveillance systems, VoIP communications, video conferencing, network deployments and regional IT support operations.",
    "Alongside my infrastructure experience, I am actively developing practical AI and software solutions, including AI automation, computer vision, Python applications, business management systems and intelligent workflows.",
    "I enjoy transforming technical challenges into practical, reliable and scalable solutions.",
  ],
};

export const PROFESSIONAL_HIGHLIGHTS: HighlightCardItem[] = [
  {
    id: "enterprise-it-infrastructure",
    index: "01",
    title: "Enterprise IT Infrastructure",
    description:
      "Network planning, implementation, CCTV, VoIP and IT operations.",
    icon: Network,
  },
  {
    id: "regional-it-management",
    index: "02",
    title: "Regional IT Management",
    description:
      "Supporting multiple offices, coordinating technical resources and managing infrastructure requirements.",
    icon: Building2,
  },
  {
    id: "ai-intelligent-automation",
    index: "03",
    title: "AI & Intelligent Automation",
    description:
      "Computer vision, AI agents, workflow automation and intelligent applications.",
    icon: Bot,
  },
  {
    id: "software-business-solutions",
    index: "04",
    title: "Software & Business Solutions",
    description:
      "Python automation, web applications, data scraping and business software.",
    icon: Code2,
  },
];

export const PROFESSIONAL_EXPERTISE_CARDS: ExpertiseCardItem[] = [
  {
    id: "it-infrastructure-networking",
    index: "01",
    title: "IT Infrastructure & Networking",
    domainTag: "Core Infrastructure",
    icon: Network,
    points: [
      "Network architecture and implementation.",
      "LAN and structured cabling.",
      "Switches, routers and network troubleshooting.",
      "Infrastructure planning and documentation.",
    ],
  },
  {
    id: "cctv-security-systems",
    index: "02",
    title: "CCTV & Security Systems",
    domainTag: "Surveillance & Security",
    icon: Camera,
    points: [
      "IP CCTV infrastructure.",
      "PTZ and thermal PTZ cameras.",
      "NVR and surveillance networking.",
      "Installation supervision and configuration.",
    ],
  },
  {
    id: "enterprise-it-operations",
    index: "03",
    title: "Enterprise IT Operations",
    domainTag: "Systems & Operations",
    icon: ShieldCheck,
    points: [
      "Hardware and software support.",
      "Windows Server and Active Directory fundamentals.",
      "IT asset and infrastructure management.",
      "Technical coordination and reporting.",
    ],
  },
  {
    id: "ai-and-automation",
    index: "04",
    title: "AI & Automation",
    domainTag: "Intelligent Systems",
    icon: Cpu,
    points: [
      "AI agents and intelligent workflows.",
      "AI chatbots.",
      "Computer vision applications.",
      "n8n and business process automation.",
      "Python-based automation solutions.",
    ],
  },
  {
    id: "software-development",
    index: "05",
    title: "Software Development",
    domainTag: "Application Engineering",
    icon: Terminal,
    points: [
      "Python programming.",
      "REST APIs and backend development.",
      "Web application development.",
      "Database-driven business applications.",
      "Full-stack application development fundamentals.",
    ],
  },
  {
    id: "data-technical-solutions",
    index: "06",
    title: "Data & Technical Solutions",
    domainTag: "Data & Workflow Optimization",
    icon: FileSpreadsheet,
    points: [
      "Web scraping and data extraction.",
      "Excel and Google Sheets automation.",
      "Data processing and visualization.",
      "Technical problem solving.",
      "Business workflow optimization.",
    ],
  },
];

export const TECHNOLOGY_TOOLKIT: TechCategoryItem[] = [
  {
    id: "it-infrastructure",
    category: "IT Infrastructure",
    contextNote: "10+ Years Field & Enterprise Operations",
    icon: Server,
    technologies: [
      "Windows Server",
      "Active Directory",
      "TCP/IP",
      "LAN",
      "CCTV",
      "VoIP",
      "VPN",
    ],
  },
  {
    id: "ai-automation",
    category: "AI & Automation",
    contextNote: "Practical Applied AI & Workflow Automation",
    icon: Bot,
    technologies: [
      "LangChain",
      "AI Agents",
      "n8n",
      "RAG",
      "Computer Vision",
    ],
  },
  {
    id: "programming",
    category: "Programming",
    contextNote: "Automation, Scripting & Application Logic",
    icon: Terminal,
    technologies: ["Python", "JavaScript", "TypeScript"],
  },
  {
    id: "frontend",
    category: "Frontend",
    contextNote: "Modern Web Interfaces & UI Architecture",
    icon: Layout,
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    category: "Backend",
    contextNote: "APIs, Services & Backend Fundamentals",
    icon: Code2,
    technologies: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    id: "database",
    category: "Database",
    contextNote: "Relational & Document Data Persistence",
    icon: Database,
    technologies: ["PostgreSQL", "MySQL", "MongoDB"],
  },
];

