"use client";

import React from "react";

export interface ProjectIllustrationProps {
  projectNumber: string;
  variant?: string;
  className?: string;
}

export const ProjectIllustration: React.FC<ProjectIllustrationProps> = ({
  projectNumber,
  variant,
  className = "",
}) => {
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-obsidian-onyx via-obsidian to-obsidian-charcoal ${className}`}
    >
      {/* Subtle architectural coordinate grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(243, 229, 171, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(243, 229, 171, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient warm champagne radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(212, 175, 55, 0.16) 0%, rgba(243, 229, 171, 0.05) 45%, rgba(6, 7, 10, 0) 75%)",
        }}
      />

      {/* Project 01: Enterprise IT Infrastructure & Fiber/Rack Topology */}
      {projectNumber === "01" && (
        <svg
          viewBox="0 0 400 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 h-full w-full p-4"
          aria-label="Enterprise IT Infrastructure Network Topology Illustration"
        >
          {/* Fiber Uplink Arcs */}
          <path
            d="M200 46 L95 118 M200 46 L200 118 M200 46 L305 118"
            stroke="#D4AF37"
            strokeWidth="1.4"
            strokeDasharray="4 3"
            strokeOpacity="0.7"
          />
          <path
            d="M95 118 L55 178 M95 118 L135 178 M200 118 L200 178 M305 118 L265 178 M305 118 L345 178"
            stroke="#A8B2C1"
            strokeWidth="1.1"
            strokeOpacity="0.5"
          />

          {/* Core Distribution Rack */}
          <rect
            x="162"
            y="22"
            width="76"
            height="36"
            rx="6"
            fill="#141720"
            stroke="#F3E5AB"
            strokeWidth="1.4"
          />
          <circle cx="176" cy="34" r="2.5" fill="#10B981" />
          <circle cx="186" cy="34" r="2.5" fill="#D4AF37" />
          <line x1="200" y1="34" x2="226" y2="34" stroke="#F3E5AB" strokeWidth="1.5" />
          <line x1="174" y1="45" x2="226" y2="45" stroke="#A8B2C1" strokeWidth="1.2" strokeOpacity="0.6" />

          {/* 3 Managed Switches (100+ Computers & VoIP Segmentation) */}
          {[95, 200, 305].map((cx, i) => (
            <g key={i}>
              <rect
                x={cx - 34}
                y="102"
                width="68"
                height="28"
                rx="5"
                fill="#0D0F14"
                stroke="#D4AF37"
                strokeWidth="1.2"
              />
              <circle cx={cx - 20} cy="116" r="2" fill="#F3E5AB" />
              <circle cx={cx - 11} cy="116" r="2" fill="#D4AF37" />
              <line
                x1={cx}
                y1="116"
                x2={cx + 22}
                y2="116"
                stroke="#A8B2C1"
                strokeWidth="1.2"
              />
            </g>
          ))}

          {/* Endpoint Workstations & VoIP Nodes */}
          {[55, 135, 200, 265, 345].map((wx, i) => (
            <g key={i}>
              <circle
                cx={wx}
                cy="178"
                r="12"
                fill="#141720"
                stroke="#F3E5AB"
                strokeWidth="1.1"
                strokeOpacity="0.8"
              />
              <circle cx={wx} cy="178" r="3.5" fill="#D4AF37" />
            </g>
          ))}
        </svg>
      )}

      {/* Project 02: Advanced CCTV Surveillance (~65 Uniview IP, PTZ Dome & Thermal PTZ) */}
      {projectNumber === "02" && (
        <svg
          viewBox="0 0 400 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 h-full w-full p-4"
          aria-label="Advanced CCTV Surveillance Matrix Illustration"
        >
          {/* Concentric Radar / Thermal PTZ Field of View */}
          <circle
            cx="200"
            cy="110"
            r="78"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeDasharray="4 4"
            strokeOpacity="0.45"
          />
          <circle
            cx="200"
            cy="110"
            r="52"
            stroke="#F3E5AB"
            strokeWidth="1.1"
            strokeOpacity="0.35"
          />

          {/* PTZ Field-of-View Cone */}
          <path
            d="M200 110 L295 48 A110 110 0 0 1 295 172 Z"
            fill="url(#ptzCone)"
            stroke="#F3E5AB"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <defs>
            <linearGradient id="ptzCone" x1="200" y1="110" x2="310" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Camera Node Grid Lines */}
          <path
            d="M82 58 L200 110 M82 162 L200 110 M312 62 L200 110 M312 158 L200 110"
            stroke="#A8B2C1"
            strokeWidth="1"
            strokeOpacity="0.45"
          />

          {/* Central NVR / Thermal PTZ Command Core */}
          <circle
            cx="200"
            cy="110"
            r="24"
            fill="#141720"
            stroke="#F3E5AB"
            strokeWidth="1.5"
          />
          <circle cx="200" cy="110" r="10" stroke="#D4AF37" strokeWidth="1.4" />
          <circle cx="200" cy="110" r="3.5" fill="#10B981" />

          {/* Perimeter IP & PTZ Camera Nodes */}
          {[
            { x: 82, y: 58, label: "IP-CAM" },
            { x: 82, y: 162, label: "PTZ-DOME" },
            { x: 312, y: 62, label: "THERMAL" },
            { x: 312, y: 158, label: "NVR-LINK" },
          ].map((node, idx) => (
            <g key={idx}>
              <rect
                x={node.x - 28}
                y={node.y - 12}
                width="56"
                height="24"
                rx="5"
                fill="#0D0F14"
                stroke="#D4AF37"
                strokeWidth="1.1"
              />
              <text
                x={node.x}
                y={node.y + 3}
                textAnchor="middle"
                fill="#F3E5AB"
                fontSize="8"
                fontFamily="monospace"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      )}

      {/* Project 03: AI-Based Attendance Automation (ZKTeco & Multi-Office Sync) */}
      {projectNumber === "03" && (
        <svg
          viewBox="0 0 400 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 h-full w-full p-4"
          aria-label="AI-Based Biometric Attendance Automation Illustration"
        >
          {/* Biometric Scanner Frame */}
          <rect
            x="148"
            y="36"
            width="104"
            height="126"
            rx="14"
            fill="#141720"
            stroke="#D4AF37"
            strokeWidth="1.4"
          />
          {/* Corner Brackets */}
          <path
            d="M162 56 V48 H170 M238 56 V48 H230 M162 142 V150 H170 M238 142 V150 H230"
            stroke="#F3E5AB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Biometric Concentric Identification Rings */}
          <circle cx="200" cy="96" r="26" stroke="#D4AF37" strokeWidth="1.2" strokeDasharray="5 3" />
          <circle cx="200" cy="96" r="17" stroke="#F3E5AB" strokeWidth="1.2" />
          <circle cx="200" cy="96" r="7" fill="#D4AF37" fillOpacity="0.4" stroke="#F3E5AB" strokeWidth="1.2" />
          {/* Horizontal AI Verification Scan Line */}
          <line x1="158" y1="96" x2="242" y2="96" stroke="#10B981" strokeWidth="1.4" />

          {/* Multi-Office Reporting Feed Lines */}
          <path
            d="M78 72 H148 M78 126 H148 M252 72 H322 M252 126 H322"
            stroke="#A8B2C1"
            strokeWidth="1.1"
            strokeDasharray="3 3"
          />
          {[
            { x: 58, y: 72, text: "OFFICE A" },
            { x: 58, y: 126, text: "OFFICE B" },
            { x: 342, y: 72, text: "AI SYNC" },
            { x: 342, y: 126, text: "REPORTS" },
          ].map((b, i) => (
            <g key={i}>
              <rect
                x={b.x - 30}
                y={b.y - 12}
                width="60"
                height="24"
                rx="5"
                fill="#0D0F14"
                stroke="#D4AF37"
                strokeWidth="1.1"
              />
              <text
                x={b.x}
                y={b.y + 3}
                textAnchor="middle"
                fill="#F3E5AB"
                fontSize="8"
                fontFamily="monospace"
              >
                {b.text}
              </text>
            </g>
          ))}
        </svg>
      )}

      {/* Project 04: DairyConnect ERP (Farms, Milk Collectors, Routes, PostgreSQL/Prisma) */}
      {projectNumber === "04" && (
        <svg
          viewBox="0 0 400 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 h-full w-full p-4"
          aria-label="DairyConnect ERP Architecture Illustration"
        >
          {/* ERP Dashboard Window Frame */}
          <rect
            x="48"
            y="26"
            width="304"
            height="168"
            rx="10"
            fill="#0D0F14"
            stroke="#D4AF37"
            strokeWidth="1.3"
          />
          <line x1="48" y1="50" x2="352" y2="50" stroke="#222634" strokeWidth="1.2" />
          <circle cx="64" cy="38" r="3" fill="#D4AF37" />
          <circle cx="75" cy="38" r="3" fill="#F3E5AB" />
          <circle cx="86" cy="38" r="3" fill="#A8B2C1" />
          <text x="200" y="41" textAnchor="middle" fill="#F3E5AB" fontSize="8.5" fontFamily="monospace">
            DAIRYCONNECT ERP // POSTGRESQL + PRISMA
          </text>

          {/* 3 ERP Modules Inside Window */}
          {[
            { x: 64, y: 64, title: "FARMS", sub: "Records" },
            { x: 158, y: 64, title: "COLLECTORS", sub: "Personnel" },
            { x: 252, y: 64, title: "ROUTES", sub: "Distribution" },
          ].map((mod, i) => (
            <g key={i}>
              <rect
                x={mod.x}
                y={mod.y}
                width="84"
                height="48"
                rx="6"
                fill="#141720"
                stroke="#F3E5AB"
                strokeWidth="1"
                strokeOpacity="0.55"
              />
              <text x={mod.x + 42} y={mod.y + 22} textAnchor="middle" fill="#D4AF37" fontSize="8.5" fontFamily="monospace">
                {mod.title}
              </text>
              <text x={mod.x + 42} y={mod.y + 36} textAnchor="middle" fill="#A8B2C1" fontSize="7.5" fontFamily="monospace">
                {mod.sub}
              </text>
            </g>
          ))}

          {/* Bottom Relational Database & RBAC Bar */}
          <rect
            x="64"
            y="126"
            width="272"
            height="50"
            rx="6"
            fill="#141720"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeOpacity="0.7"
          />
          <path d="M84 158 L125 142 L170 152 L225 136 L275 145 L315 134" stroke="#F3E5AB" strokeWidth="1.6" />
          <circle cx="125" cy="142" r="2.8" fill="#D4AF37" />
          <circle cx="225" cy="136" r="2.8" fill="#D4AF37" />
          <circle cx="315" cy="134" r="2.8" fill="#10B981" />
        </svg>
      )}

      {/* Project 05: AI Chatbots & Business Automation (AI Agents, n8n, Python) */}
      {projectNumber === "05" && (
        <svg
          viewBox="0 0 400 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 h-full w-full p-4"
          aria-label="AI Chatbots and n8n Workflow Automation Illustration"
        >
          {/* Workflow Pipeline Connections */}
          <path
            d="M95 110 C135 110, 140 65, 185 65 M95 110 C135 110, 140 155, 185 155 M215 65 C260 65, 265 110, 305 110 M215 155 C260 155, 265 110, 305 110"
            stroke="#D4AF37"
            strokeWidth="1.5"
          />

          {/* Left Node: Trigger / Chatbot Input */}
          <rect
            x="38"
            y="84"
            width="64"
            height="52"
            rx="10"
            fill="#141720"
            stroke="#F3E5AB"
            strokeWidth="1.3"
          />
          <text x="70" y="107" textAnchor="middle" fill="#F3E5AB" fontSize="8.5" fontFamily="monospace">
            AI CHAT
          </text>
          <text x="70" y="121" textAnchor="middle" fill="#D4AF37" fontSize="7.5" fontFamily="monospace">
            WEBHOOK
          </text>

          {/* Center Top Node: AI Agent / RAG */}
          <rect
            x="162"
            y="42"
            width="76"
            height="46"
            rx="10"
            fill="#141720"
            stroke="#D4AF37"
            strokeWidth="1.3"
          />
          <text x="200" y="63" textAnchor="middle" fill="#F3E5AB" fontSize="8.5" fontFamily="monospace">
            AI AGENT
          </text>
          <text x="200" y="76" textAnchor="middle" fill="#A8B2C1" fontSize="7.5" fontFamily="monospace">
            LLM / RAG
          </text>

          {/* Center Bottom Node: n8n & Python Automation */}
          <rect
            x="162"
            y="132"
            width="76"
            height="46"
            rx="10"
            fill="#141720"
            stroke="#D4AF37"
            strokeWidth="1.3"
          />
          <text x="200" y="153" textAnchor="middle" fill="#F3E5AB" fontSize="8.5" fontFamily="monospace">
            n8n + PY
          </text>
          <text x="200" y="166" textAnchor="middle" fill="#A8B2C1" fontSize="7.5" fontFamily="monospace">
            WORKFLOW
          </text>

          {/* Right Node: Automated Business Action */}
          <rect
            x="298"
            y="84"
            width="64"
            height="52"
            rx="10"
            fill="#141720"
            stroke="#10B981"
            strokeWidth="1.3"
          />
          <text x="330" y="107" textAnchor="middle" fill="#F8F9FA" fontSize="8.5" fontFamily="monospace">
            ACTION
          </text>
          <text x="330" y="121" textAnchor="middle" fill="#10B981" fontSize="7.5" fontFamily="monospace">
            AUTOMATED
          </text>
        </svg>
      )}

      {/* Project 06: Web Scraping & Data Automation (Python, E-Commerce, Excel/Sheets) */}
      {projectNumber === "06" && (
        <svg
          viewBox="0 0 400 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 h-full w-full p-4"
          aria-label="Web Scraping and Data Automation Pipeline Illustration"
        >
          {/* Left Source Web Pages */}
          {[46, 94, 142].map((y, idx) => (
            <g key={idx}>
              <rect
                x="42"
                y={y}
                width="74"
                height="34"
                rx="5"
                fill="#141720"
                stroke="#A8B2C1"
                strokeWidth="1.1"
              />
              <line x1="52" y1={y + 12} x2="96" y2={y + 12} stroke="#F3E5AB" strokeWidth="1.2" />
              <line x1="52" y1={y + 22} x2="82" y2={y + 22} stroke="#D4AF37" strokeWidth="1" />
              <path
                d={`M116 ${y + 17} L164 110`}
                stroke="#D4AF37"
                strokeWidth="1.1"
                strokeDasharray="3 3"
              />
            </g>
          ))}

          {/* Center Python Data Extraction & Normalization Engine */}
          <circle
            cx="200"
            cy="110"
            r="36"
            fill="#0D0F14"
            stroke="#D4AF37"
            strokeWidth="1.5"
          />
          <text x="200" y="106" textAnchor="middle" fill="#F3E5AB" fontSize="9" fontFamily="monospace">
            PYTHON
          </text>
          <text x="200" y="119" textAnchor="middle" fill="#D4AF37" fontSize="7.5" fontFamily="monospace">
            PARSER
          </text>

          {/* Right Output: Structured Excel & Google Sheets Grid */}
          <path d="M236 110 L276 110" stroke="#F3E5AB" strokeWidth="1.5" />
          <rect
            x="276"
            y="54"
            width="86"
            height="112"
            rx="7"
            fill="#141720"
            stroke="#F3E5AB"
            strokeWidth="1.3"
          />
          {/* Spreadsheet Rows & Columns */}
          {[76, 98, 120, 142].map((ry) => (
            <line
              key={ry}
              x1="286"
              y1={ry}
              x2="352"
              y2={ry}
              stroke="#D4AF37"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          ))}
          <line x1="314" y1="66" x2="314" y2="154" stroke="#A8B2C1" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      )}

      {/* Optional Variant Tag in Bottom-Right of Illustration */}
      {variant && (
        <span className="pointer-events-none absolute bottom-2.5 right-3 z-20 rounded border border-astral-gold/30 bg-obsidian/85 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-astral-champagne">
          {variant}
        </span>
      )}
    </div>
  );
};

