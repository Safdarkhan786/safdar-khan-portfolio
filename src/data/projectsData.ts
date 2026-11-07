export type ProjectFilterCategory =
  | "All Projects"
  | "IT Infrastructure"
  | "AI & Automation"
  | "Software Development"
  | "Data Solutions";

export const PROJECT_FILTER_CATEGORIES: ProjectFilterCategory[] = [
  "All Projects",
  "IT Infrastructure",
  "AI & Automation",
  "Software Development",
  "Data Solutions",
];

export interface ProjectGalleryItem {
  id: string;
  title: string;
  caption: string;
  diagramType:
    | "network-topology"
    | "rack-fiber"
    | "voip-intercom"
    | "cctv-matrix"
    | "ptz-thermal"
    | "nvr-command"
    | "biometric-sync"
    | "attendance-workflow"
    | "multi-office-report"
    | "erp-schema"
    | "milk-route-ops"
    | "rbac-security"
    | "ai-agent-flow"
    | "n8n-orchestration"
    | "chatbot-pipeline"
    | "scraper-pipeline"
    | "price-monitor"
    | "sheets-export";
  /** Optional path to a real screenshot/photo in public/images/projects/ */
  imageSrc?: string | null;
}

export interface ProjectArchitectureLayer {
  layer: string;
  component: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  filterCategory: Exclude<ProjectFilterCategory, "All Projects">;
  status: "Completed Implementation" | "In Progress / Active Development";
  confidentialityNote?: string;
  shortDescription: string;
  role: string;
  contributionsTitle: "Key Contributions" | "Key Features" | "Key Areas";
  contributions: string[];
  cardHighlights: string[];
  overview: string;
  problemRequirement: string;
  technicalArchitectureSummary: string;
  architectureLayers: ProjectArchitectureLayer[];
  technologiesUsed: string[];
  implementationProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  projectResults: string[];
  gallery: ProjectGalleryItem[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "project-01",
    slug: "enterprise-it-infrastructure-deployment",
    number: "01",
    title: "Enterprise IT Infrastructure Deployment",
    category: "IT Infrastructure & Networking",
    filterCategory: "IT Infrastructure",
    status: "Completed Implementation",
    confidentialityNote:
      "Security & Confidentiality Notice: Specific district office locations, IP addressing schemes, rack layouts, and internal network diagrams are omitted to respect organizational security protocols.",
    shortDescription:
      "Planning and implementation of IT infrastructure across multiple district-level office projects, including network architecture, structured connectivity and technology deployment.",
    role: "Project Lead / IT Infrastructure Implementation",
    contributionsTitle: "Key Contributions",
    contributions: [
      "Infrastructure planning from initial stages.",
      "Network architecture and topology design.",
      "Switch, rack, fiber and network-point planning.",
      "Network installation supervision.",
      "Coordination with engineers, technicians and electrical teams.",
      "Administrative office networking for 100+ computers.",
      "VoIP and intercom connectivity.",
    ],
    cardHighlights: [
      "Network Architecture",
      "Fiber & Rack Planning",
      "100+ Workstations LAN",
      "VoIP & Intercom",
    ],
    overview:
      "Led the end-to-end planning and on-site implementation of enterprise IT infrastructure across multiple district-level office projects. The initiative encompassed initial technical assessment, structured LAN/fiber topology design, equipment rack engineering, workstation connectivity for 100+ administrative systems, and unified VoIP/intercom communications.",
    problemRequirement:
      "District-level administrative offices required a reliable, structured IT backbone capable of supporting over 100 desktop workstations alongside internal VoIP telephony and intercom communications. Deploying across physical office facilities demanded precise early-stage planning for fiber backbones, network racks, data points, and multidisciplinary coordination between network engineers, cabling technicians, and electrical teams.",
    technicalArchitectureSummary:
      "Hierarchical star-and-backbone LAN topology utilizing fiber-optic uplinks between distribution racks, managed network switches for workstation segmentation, and dedicated voice/intercom connectivity paths.",
    architectureLayers: [
      {
        layer: "Core & Backbone Layer",
        component: "Fiber-Optic Interconnect & Main Distribution Racks",
        detail:
          "Planned primary equipment racks, fiber terminations, and structured distribution pathways across administrative zones.",
      },
      {
        layer: "Access & Switching Layer",
        component: "Managed LAN Switches & Patch Panels",
        detail:
          "Structured network-point allocation and switching capacity designed for 100+ administrative computers.",
      },
      {
        layer: "Unified Communications Layer",
        component: "VoIP Telephony & Intercom Network",
        detail:
          "Integrated voice communication endpoints and internal intercom connectivity across office departments.",
      },
    ],
    technologiesUsed: [
      "Network Architecture & Topology Design",
      "Structured Cabling (Cat6 / Fiber Optic)",
      "Network Switches & Server Racks",
      "TCP/IP & LAN Administration",
      "VoIP & Intercom Systems",
      "Technical Project Supervision",
    ],
    implementationProcess: [
      {
        step: "01",
        title: "Initial Site Assessment & Infrastructure Planning",
        description:
          "Conducted early-stage infrastructure planning, mapping out network points, rack placements, fiber pathways, and power coordination requirements.",
      },
      {
        step: "02",
        title: "Network Architecture & Topology Design",
        description:
          "Designed logical and physical network topologies to serve 100+ administrative computers alongside VoIP and intercom endpoints.",
      },
      {
        step: "03",
        title: "Multidisciplinary Team Coordination & Supervision",
        description:
          "Supervised physical installation and coordinated closely with engineers, cabling technicians, and electrical teams during deployment.",
      },
      {
        step: "04",
        title: "Workstation, VoIP & Intercom Commissioning",
        description:
          "Verified switch terminations, desktop network connectivity, and intercom/VoIP communication links across all office segments.",
      },
    ],
    projectResults: [
      "Established structured, maintainable LAN and fiber connectivity across multiple district-level office facilities.",
      "Successfully networked 100+ administrative computers with organized rack, switch, and patch-panel infrastructure.",
      "Delivered operational VoIP and intercom communications supporting daily inter-departmental coordination.",
      "Completed deployment through structured supervision of engineers, technicians, and electrical teams.",
    ],
    gallery: [
      {
        id: "p1-g1",
        title: "Hierarchical LAN & Fiber Topology Blueprint",
        caption:
          "Abstracted architectural representation of fiber distribution, rack switching, and workstation access zones.",
        diagramType: "network-topology",
      },
      {
        id: "p1-g2",
        title: "Equipment Rack & Network-Point Allocation",
        caption:
          "Structured rack layout planning for switches, patch panels, and 100+ administrative computer terminations.",
        diagramType: "rack-fiber",
      },
      {
        id: "p1-g3",
        title: "VoIP & Office Intercom Connectivity Mesh",
        caption:
          "Unified internal voice and intercom communication pathways across administrative wings.",
        diagramType: "voip-intercom",
      },
    ],
  },
  {
    id: "project-02",
    slug: "advanced-cctv-surveillance-infrastructure",
    number: "02",
    title: "Advanced CCTV Surveillance Infrastructure",
    category: "Security & Surveillance Technology",
    filterCategory: "IT Infrastructure",
    status: "Completed Implementation",
    confidentialityNote:
      "Security & Confidentiality Notice: Exact camera placement coordinates, facility floorplans, and surveillance network configurations are withheld for physical security compliance.",
    shortDescription:
      "Supervised the deployment of an integrated CCTV surveillance infrastructure using professional Uniview camera systems.",
    role: "Project Lead / Technical Supervisor",
    contributionsTitle: "Key Contributions",
    contributions: [
      "Deployment of approximately 65 cameras.",
      "Uniview IP cameras.",
      "PTZ dome cameras.",
      "Thermal PTZ camera installation.",
      "CCTV networking and connectivity.",
      "Installation supervision and technical coordination.",
      "Supervision of an engineer, technicians and electrical workers.",
    ],
    cardHighlights: [
      "~65 IP Cameras",
      "Uniview Surveillance",
      "Thermal & PTZ Dome",
      "CCTV Network Supervision",
    ],
    overview:
      "Served as Project Lead and Technical Supervisor for the deployment of a comprehensive IP CCTV surveillance infrastructure comprising approximately 65 professional Uniview cameras, including fixed IP units, PTZ dome cameras, and specialized thermal PTZ imaging systems.",
    problemRequirement:
      "The facility required multi-zone perimeter and interior surveillance capable of operating reliably in varied lighting and environmental conditions. Implementing roughly 65 high-bandwidth IP cameras—including specialized PTZ dome and thermal PTZ units—demanded dedicated surveillance networking, reliable power/cabling coordination, and hands-on supervision of field engineers, technicians, and electrical personnel.",
    technicalArchitectureSummary:
      "Dedicated IP surveillance network interconnecting ~65 Uniview optical and thermal cameras across field switches to centralized NVR recording and monitoring infrastructure.",
    architectureLayers: [
      {
        layer: "Optical & Thermal Sensing Layer",
        component: "Uniview Fixed IP, PTZ Dome & Thermal PTZ Cameras (~65 Units)",
        detail:
          "Combined standard IP surveillance with Pan-Tilt-Zoom dome coverage and thermal PTZ detection.",
      },
      {
        layer: "Surveillance Transport Layer",
        component: "Dedicated CCTV Switching & Cabling Infrastructure",
        detail:
          "Structured network connectivity and power routing engineered for continuous multi-stream video transmission.",
      },
      {
        layer: "Recording & Monitoring Layer",
        component: "Centralized NVR & Surveillance Management",
        detail:
          "Configured camera streams, PTZ controls, and centralized monitoring readiness.",
      },
    ],
    technologiesUsed: [
      "Uniview IP Camera Systems",
      "PTZ Dome Cameras",
      "Thermal PTZ Cameras",
      "NVR & Surveillance Networking",
      "Structured Cabling & Power Coordination",
      "Field Engineering & Team Supervision",
    ],
    implementationProcess: [
      {
        step: "01",
        title: "Surveillance Zone & Connectivity Planning",
        description:
          "Coordinated network pathways, mounting requirements, and cabling routes for approximately 65 camera endpoints.",
      },
      {
        step: "02",
        title: "Field Supervision of Multi-Disciplinary Crew",
        description:
          "Supervised an engineer, installation technicians, and electrical workers throughout physical mounting and cabling execution.",
      },
      {
        step: "03",
        title: "IP, PTZ Dome & Thermal PTZ Camera Installation",
        description:
          "Oversaw the installation and network termination of Uniview IP cameras, PTZ dome units, and thermal PTZ systems.",
      },
      {
        step: "04",
        title: "Network Integration & System Verification",
        description:
          "Configured CCTV network connectivity, verified camera feeds, and validated PTZ/thermal operational controls.",
      },
    ],
    projectResults: [
      "Successfully deployed approximately 65 Uniview IP, PTZ dome, and thermal PTZ cameras across the target infrastructure.",
      "Established a dedicated, stable CCTV network backbone supporting continuous multi-camera video streams.",
      "Coordinated an engineer, technicians, and electrical workers to deliver a safe, standards-compliant installation.",
    ],
    gallery: [
      {
        id: "p2-g1",
        title: "Multi-Tier IP Surveillance Network Architecture",
        caption:
          "Abstracted schematic of ~65 Uniview IP endpoints aggregating into centralized surveillance switching and NVR storage.",
        diagramType: "cctv-matrix",
      },
      {
        id: "p2-g2",
        title: "Optical PTZ Dome & Thermal PTZ Coverage Model",
        caption:
          "Dual-spectrum surveillance architecture combining standard optical PTZ domes with thermal PTZ perimeter units.",
        diagramType: "ptz-thermal",
      },
      {
        id: "p2-g3",
        title: "Centralized CCTV Connectivity & Monitoring Flow",
        caption:
          "End-to-end camera stream routing, power coordination, and central monitoring verification.",
        diagramType: "nvr-command",
      },
    ],
  },
  {
    id: "project-03",
    slug: "ai-based-attendance-automation",
    number: "03",
    title: "AI-Based Attendance Automation",
    category: "AI & Computer Vision",
    filterCategory: "AI & Automation",
    status: "Completed Implementation",
    shortDescription:
      "Worked on AI-assisted biometric attendance solutions to improve attendance monitoring and reporting processes.",
    role: "IT Implementation and Technical Support",
    contributionsTitle: "Key Contributions",
    contributions: [
      "Biometric attendance system implementation.",
      "ZKTeco attendance technology.",
      "AI-assisted attendance automation.",
      "Attendance monitoring and reporting workflows.",
      "Multi-office attendance reporting.",
    ],
    cardHighlights: [
      "ZKTeco Biometrics",
      "AI-Assisted Verification",
      "Automated Workflows",
      "Multi-Office Reporting",
    ],
    overview:
      "Implemented and supported AI-assisted biometric attendance solutions utilizing ZKTeco attendance hardware and automated reporting workflows to streamline attendance tracking across multiple office locations.",
    problemRequirement:
      "Tracking personnel attendance across multiple offices using manual or disconnected logs created delays in administrative reporting. A unified biometric and AI-assisted attendance workflow was needed to capture accurate check-ins and consolidate multi-office attendance reports.",
    technicalArchitectureSummary:
      "Distributed ZKTeco biometric terminals connected over office networks to centralized attendance management and AI-assisted reporting workflows.",
    architectureLayers: [
      {
        layer: "Terminal Capture Layer",
        component: "ZKTeco Biometric & AI-Assisted Verification Devices",
        detail:
          "Deployed and configured biometric attendance terminals at office entry points for reliable identity verification.",
      },
      {
        layer: "Synchronization & Workflow Layer",
        component: "Automated Attendance Data Aggregation",
        detail:
          "Networked synchronization of attendance logs from multiple offices into a unified processing workflow.",
      },
      {
        layer: "Reporting & Operations Layer",
        component: "Multi-Office Attendance Monitoring & Reports",
        detail:
          "Structured attendance reporting workflows for administrative oversight and operational review.",
      },
    ],
    technologiesUsed: [
      "ZKTeco Biometric Systems",
      "AI-Assisted Attendance Technology",
      "Network Device Synchronization",
      "Attendance Reporting Workflows",
      "Multi-Office IT Support",
    ],
    implementationProcess: [
      {
        step: "01",
        title: "Biometric Hardware Deployment & Network Setup",
        description:
          "Installed and configured ZKTeco biometric terminals and connected them to the office network infrastructure.",
      },
      {
        step: "02",
        title: "User Enrollment & AI-Assisted Verification Setup",
        description:
          "Supported user registration, biometric calibration, and AI-assisted attendance capture settings.",
      },
      {
        step: "03",
        title: "Multi-Office Workflow & Reporting Integration",
        description:
          "Configured automated attendance log collection and reporting workflows spanning multiple office locations.",
      },
      {
        step: "04",
        title: "Operational Support & Maintenance",
        description:
          "Provided ongoing technical support, device troubleshooting, and reporting assistance for administrative teams.",
      },
    ],
    projectResults: [
      "Streamlined daily attendance capture using ZKTeco biometric and AI-assisted verification technology.",
      "Enabled consolidated multi-office attendance monitoring and structured administrative reporting workflows.",
      "Reduced manual attendance reconciliation overhead through reliable device synchronization and technical support.",
    ],
    gallery: [
      {
        id: "p3-g1",
        title: "Biometric Terminal & AI Verification Pipeline",
        caption:
          "ZKTeco biometric terminal capture and AI-assisted identity verification workflow.",
        diagramType: "biometric-sync",
      },
      {
        id: "p3-g2",
        title: "Automated Attendance Processing Workflow",
        caption:
          "Log synchronization, timestamp validation, and automated attendance status classification.",
        diagramType: "attendance-workflow",
      },
      {
        id: "p3-g3",
        title: "Multi-Office Attendance Reporting Architecture",
        caption:
          "Centralized aggregation of attendance records from distributed branch offices.",
        diagramType: "multi-office-report",
      },
    ],
  },
  {
    id: "project-04",
    slug: "dairyconnect-erp",
    number: "04",
    title: "DairyConnect ERP",
    category: "Business Software Development",
    filterCategory: "Software Development",
    status: "In Progress / Active Development",
    shortDescription:
      "A database-driven dairy business management application designed to organize farm operations, milk collection, personnel and distribution routes.",
    role: "Software Solution Development",
    contributionsTitle: "Key Features",
    contributions: [
      "Farm management.",
      "Milk collector management.",
      "Route management.",
      "Operational records.",
      "Role-based access.",
      "Business reporting.",
    ],
    cardHighlights: [
      "Node.js & TypeScript",
      "Express.js & Prisma",
      "PostgreSQL Database",
      "JWT Role-Based Access",
    ],
    overview:
      "DairyConnect ERP is a database-driven business management application currently in active development, engineered to digitize and organize dairy farm operations, milk collection workflows, field collector personnel, distribution routes, and operational reporting.",
    problemRequirement:
      "Dairy operations managing multiple farms, field milk collectors, and daily collection/distribution routes often struggle with fragmented paper records and manual reconciliation. A structured, role-secured backend and relational database system was needed to centralize farm records, collector logs, route assignments, and business reporting.",
    technicalArchitectureSummary:
      "Modular RESTful backend built with Node.js, TypeScript, and Express.js, utilizing Prisma ORM for type-safe data modeling over PostgreSQL and JWT for role-based authentication.",
    architectureLayers: [
      {
        layer: "Authentication & Authorization Layer",
        component: "JWT Authentication & Role-Based Access Control (RBAC)",
        detail:
          "Secures API endpoints according to operational roles (administrators, supervisors, and milk collectors).",
      },
      {
        layer: "Application & API Layer",
        component: "Node.js, TypeScript & Express.js REST APIs",
        detail:
          "Handles business logic for farm profiles, milk collection entries, route assignments, and operational reporting.",
      },
      {
        layer: "Data Persistence Layer",
        component: "PostgreSQL & Prisma ORM",
        detail:
          "Relational schema maintaining data integrity across farms, collectors, collection logs, and distribution routes.",
      },
    ],
    technologiesUsed: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "JWT (JSON Web Tokens)",
    ],
    implementationProcess: [
      {
        step: "01",
        title: "Domain Modeling & PostgreSQL Schema Design",
        description:
          "Designed relational schemas in Prisma and PostgreSQL covering farms, milk collectors, collection routes, and daily operational records.",
      },
      {
        step: "02",
        title: "JWT Authentication & Role-Based Access Implementation",
        description:
          "Built secure authentication workflows and role-based permissions to separate administrative and field-collector access.",
      },
      {
        step: "03",
        title: "Core ERP Modules & REST API Development",
        description:
          "Developed TypeScript and Express.js endpoints for farm management, milk collector tracking, and route management.",
      },
      {
        step: "04",
        title: "Operational Reporting & Iterative Refinement (In Progress)",
        description:
          "Continuing development of business reporting modules and operational record workflows.",
      },
    ],
    projectResults: [
      "Established a structured PostgreSQL and Prisma data model for farms, milk collectors, and distribution routes.",
      "Implemented JWT-based role-based access control (RBAC) for secure multi-role business operations.",
      "Built core RESTful modules for operational record keeping and business reporting (Project in active development).",
    ],
    gallery: [
      {
        id: "p4-g1",
        title: "DairyConnect ERP Relational Schema & Prisma Architecture",
        caption:
          "Core entities linking Farms, Milk Collectors, Distribution Routes, and Daily Operational Records in PostgreSQL.",
        diagramType: "erp-schema",
      },
      {
        id: "p4-g2",
        title: "Milk Collection & Route Management Workflow",
        caption:
          "End-to-end operational data flow from farm collection entry to route aggregation and business reporting.",
        diagramType: "milk-route-ops",
      },
      {
        id: "p4-g3",
        title: "JWT Authentication & Role-Based Access Control",
        caption:
          "Layered security middleware governing administrative, supervisor, and field collector permissions.",
        diagramType: "rbac-security",
      },
    ],
  },
  {
    id: "project-05",
    slug: "ai-chatbots-business-automation",
    number: "05",
    title: "AI Chatbots & Business Automation",
    category: "AI Automation",
    filterCategory: "AI & Automation",
    status: "In Progress / Active Development",
    shortDescription:
      "Developing practical AI-powered solutions to simplify business operations and automate repetitive tasks.",
    role: "AI Automation Developer",
    contributionsTitle: "Key Areas",
    contributions: [
      "AI chatbots.",
      "AI agents.",
      "Business workflow automation.",
      "Python automation.",
      "n8n workflows.",
      "Intelligent business solutions.",
    ],
    cardHighlights: [
      "AI Chatbots & Agents",
      "n8n Workflow Automation",
      "Python Automation",
      "Business Process AI",
    ],
    overview:
      "An ongoing suite of practical AI automation projects and intelligent workflows designed to simplify everyday business operations, automate repetitive administrative tasks, and deploy conversational AI chatbots and autonomous agents.",
    problemRequirement:
      "Many businesses spend significant hours on repetitive manual inquiries, data handoffs between software tools, and routine administrative tasks. Practical, maintainable AI chatbots, agent workflows, and n8n/Python automations are needed to connect systems and handle recurring tasks reliably.",
    technicalArchitectureSummary:
      "Event-driven workflow orchestration combining n8n automation pipelines, Python backend scripts, and LLM-powered conversational agents/RAG pipelines.",
    architectureLayers: [
      {
        layer: "Conversational & Agent Interface",
        component: "AI Chatbots & Task-Specific AI Agents",
        detail:
          "Handles user inquiries, structured prompt execution, and context-aware business responses.",
      },
      {
        layer: "Workflow Orchestration Layer",
        component: "n8n Business Process Automation",
        detail:
          "Connects webhooks, messaging channels, spreadsheets, and business APIs into automated multi-step pipelines.",
      },
      {
        layer: "Custom Execution Layer",
        component: "Python Automation Scripts & Data Connectors",
        detail:
          "Executes custom data transformations, scheduled tasks, and backend API integrations.",
      },
    ],
    technologiesUsed: [
      "AI Agents",
      "LangChain & RAG",
      "n8n Workflow Automation",
      "Python Automation",
      "REST APIs & Webhooks",
    ],
    implementationProcess: [
      {
        step: "01",
        title: "Workflow Bottleneck Identification",
        description:
          "Analyzed repetitive business tasks and communication touchpoints suitable for structured automation.",
      },
      {
        step: "02",
        title: "n8n & Python Automation Pipeline Design",
        description:
          "Built automated workflows connecting triggers, data processing steps, and external business tools.",
      },
      {
        step: "03",
        title: "AI Chatbot & Agent Integration",
        description:
          "Configured conversational AI chatbots and intelligent agent routines to assist with information retrieval and task execution.",
      },
      {
        step: "04",
        title: "Continuous Iteration & Expansion (Active Development)",
        description:
          "Actively expanding agent capabilities, RAG knowledge retrieval, and multi-app business workflow templates.",
      },
    ],
    projectResults: [
      "Developed modular AI chatbot and agent workflows tailored for practical business task automation.",
      "Built reusable n8n and Python automation pipelines that reduce repetitive manual data handling.",
      "Created an extensible foundation for intelligent business solutions (Ongoing development and expansion).",
    ],
    gallery: [
      {
        id: "p5-g1",
        title: "Autonomous AI Agent & Chatbot Architecture",
        caption:
          "Prompt routing, knowledge context retrieval, and structured action execution for business inquiries.",
        diagramType: "ai-agent-flow",
      },
      {
        id: "p5-g2",
        title: "n8n Multi-App Workflow Orchestration",
        caption:
          "Automated trigger-to-action pipelines linking webhooks, AI nodes, and business productivity tools.",
        diagramType: "n8n-orchestration",
      },
      {
        id: "p5-g3",
        title: "Python Task Automation & Integration Pipeline",
        caption:
          "Custom Python automation scripts handling scheduled processing and API data synchronization.",
        diagramType: "chatbot-pipeline",
      },
    ],
  },
  {
    id: "project-06",
    slug: "web-scraping-data-automation",
    number: "06",
    title: "Web Scraping & Data Automation",
    category: "Python & Data Solutions",
    filterCategory: "Data Solutions",
    status: "Completed Implementation",
    shortDescription:
      "Developed practical web scraping and automation solutions for collecting, processing and organizing online business data.",
    role: "Python Automation Developer",
    contributionsTitle: "Key Areas",
    contributions: [
      "E-commerce product scraping.",
      "Price and stock monitoring.",
      "Lead generation.",
      "Excel automation.",
      "Google Sheets integration.",
      "Data processing.",
    ],
    cardHighlights: [
      "E-Commerce & Price Scraping",
      "Lead Generation Pipelines",
      "Excel & Google Sheets",
      "Python Data Processing",
    ],
    overview:
      "Developed practical Python-based web scraping and data automation utilities designed to extract online e-commerce and business directory data, monitor product pricing and stock availability, and automatically clean and export structured datasets to Excel and Google Sheets.",
    problemRequirement:
      "Businesses tracking competitor product catalogs, stock availability, and B2B leads often rely on slow, error-prone manual copy-pasting into spreadsheets. Automated Python extraction and spreadsheet formatting pipelines were required to turn unstructured web pages into clean, actionable business datasets.",
    technicalArchitectureSummary:
      "Modular Python extraction scripts paired with data cleaning routines and automated export connectors for Microsoft Excel and Google Sheets.",
    architectureLayers: [
      {
        layer: "Data Extraction Layer",
        component: "Python Web Scrapers & Catalog Collectors",
        detail:
          "Extracts structured fields from e-commerce product listings, pricing pages, and business directories.",
      },
      {
        layer: "Data Processing & Normalization Layer",
        component: "Automated Cleaning, Deduplication & Formatting",
        detail:
          "Normalizes pricing formats, stock flags, contact fields, and product attributes into consistent schemas.",
      },
      {
        layer: "Reporting & Spreadsheet Delivery Layer",
        component: "Excel Automation & Google Sheets Integration",
        detail:
          "Outputs formatted workbooks and live-synced Google Sheets ready for immediate business review.",
      },
    ],
    technologiesUsed: [
      "Python",
      "Web Scraping & Data Extraction",
      "Data Processing & Cleaning",
      "Excel Automation",
      "Google Sheets Integration",
      "Workflow Automation",
    ],
    implementationProcess: [
      {
        step: "01",
        title: "Target Data Source & Field Mapping",
        description:
          "Identified required data attributes across e-commerce product pages, pricing tables, and lead directories.",
      },
      {
        step: "02",
        title: "Python Extraction Script Development",
        description:
          "Built resilient Python scraping routines to collect product details, price/stock indicators, and business lead records.",
      },
      {
        step: "03",
        title: "Data Cleaning & Transformation",
        description:
          "Implemented automated parsing, deduplication, and validation rules to ensure clean tabular output.",
      },
      {
        step: "04",
        title: "Excel & Google Sheets Automation Delivery",
        description:
          "Automated the generation of structured Excel reports and direct synchronization with Google Sheets.",
      },
    ],
    projectResults: [
      "Automated the collection of e-commerce product data, pricing updates, and stock availability indicators.",
      "Streamlined lead generation data gathering into clean, structured datasets.",
      "Eliminated manual spreadsheet formatting through automated Excel generation and Google Sheets integration.",
    ],
    gallery: [
      {
        id: "p6-g1",
        title: "Python Web Extraction & Parsing Pipeline",
        caption:
          "Structured extraction of product attributes, pricing, and business directory records from web sources.",
        diagramType: "scraper-pipeline",
      },
      {
        id: "p6-g2",
        title: "E-Commerce Price & Stock Monitoring Workflow",
        caption:
          "Automated tracking of catalog price changes and inventory availability statuses.",
        diagramType: "price-monitor",
      },
      {
        id: "p6-g3",
        title: "Excel & Google Sheets Automated Delivery",
        caption:
          "Direct transformation of cleaned datasets into formatted Excel workbooks and live Google Sheets.",
        diagramType: "sheets-export",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((project) => project.slug === slug);
}

