# Safdar Khan — Executive Technology Portfolio

**IT Infrastructure & AI Technology Specialist** | MS Computer Science | 10+ Years of Experience

A futuristic, production-ready personal portfolio website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed in the bespoke *"Celestial Obsidian & Astral Gold"* cosmic visual system with an interactive multi-layered galaxy starfield, 3D orbital telemetry canvas, executive project case studies, and verified contact integrations.

---

## ✨ Key Features & Architecture

- **Bespoke Cosmic Visual Identity (`Celestial Obsidian & Astral Gold`)**:
  - Multi-layer hardware-accelerated starfield (`StarField`, `NebulaClouds`, `CosmicParticles`, `ShootingStars`) with automatic `prefers-reduced-motion` and mobile frame-rate optimization.
  - Custom `SK` metallic champagne-gold geometric monogram (`SKLogo`), vector favicons (`/favicon.ico`, `/favicon.svg`, `/icon`, `/apple-icon`), and dynamic 1200×630 Open Graph social card (`/opengraph-image`).
- **Complete Portfolio Sections**:
  1. **Hero & Executive Portrait**: 3D Digital Globe telemetry canvas + circular champagne-gold portrait frame (`/images/safdar-khan.webp`).
  2. **About Me & Key Metrics**: Verified 10+ years of experience, 5+ offices managed, 3 districts supported, 100+ enterprise systems, and MS Computer Science academic background.
  3. **Core Expertise & Technology Toolkit**: 6 specialized capability domains and categorized technology stack.
  4. **Featured Projects & Dedicated Case Study Routes (`/projects/[slug]`)**:
     - Enterprise IT Infrastructure Deployment
     - Enterprise Surveillance & Monitoring Infrastructure
     - AI Agents & Intelligent Automation Systems
     - Computer Vision Applications
     - DairyConnect — Smart Dairy Farm Management & ERP System *(In Progress / Active Development)*
     - AI Chatbots & Business Automation *(In Progress / Active Development)*
  5. **Professional Experience, Career Timeline & Education**: Regional IT Incharge (Punjab Police, Government of Pakistan) and MS / BS / B.Ed qualifications.
  6. **Services & Solutions**: 6 consulting & engineering service pillars + 4-step delivery methodology.
  7. **Contact System & Floating WhatsApp Direct**:
     - Direct WhatsApp integration (`+92 331 6788362`) via floating widget, contact card, and pre-filled form fallback.
     - Validated glassmorphic Contact Form with `/api/contact` backend endpoint (Resend API ready + automatic `mailto:` and WhatsApp fallbacks).
- **SEO & Security**:
  - Dynamic `/sitemap.xml` and `/robots.txt`.
  - Schema.org `Person` and `WebSite` JSON-LD structured data.
  - Hardened HTTP security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) in `next.config.mjs`.

---

## 🚀 Local Installation & Development

### Prerequisites
- **Node.js** `>= 18.18.0` (Node 20 LTS or Node 22 LTS recommended)
- **npm** `>= 9.0.0`

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables (Optional for Local Dev)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
*(On Windows PowerShell: `Copy-Item .env.example .env.local`)*

### 3. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Production Build & Verification Checks
```bash
npx tsc --noEmit
npm run build
npm run start
```

---

## ⚙️ Owner Customization & Asset Paths

All personal links, portrait settings, CV path, and SEO metadata are centralized in [`src/config/siteConfig.ts`](src/config/siteConfig.ts):

| Asset / Setting | Location | Description |
| :--- | :--- | :--- |
| **Personal Portrait** | `public/images/safdar-khan.webp` | Optimized transparent WebP portrait displayed in the Hero orbital frame. |
| **Official PDF CV** | `public/Safdar-Khan-CV.pdf` | Place your PDF resume at this exact path to enable instant one-click PDF download across all **Download CV** buttons. |
| **Contact & Social URLs** | `src/config/siteConfig.ts` (`CONTACT_CONFIG`) | Set `email`, `githubUrl`, `whatsappNumber`, and `linkedinUrl`. |
| **Canonical Domain** | `.env.local` / Vercel Env (`NEXT_PUBLIC_SITE_URL`) | Set to your live domain (e.g. `https://safdarkhan.com` or `https://safdarkhan.dev`). |

---

## 🌐 Deploying to Vercel

1. Push this repository to your **GitHub** account (`.gitignore` automatically protects `.env.local` and private credentials).
2. Log in to [vercel.com](https://vercel.com) and click **Add New... → Project**.
3. Import your `safdar-khan-portfolio` GitHub repository.
4. Confirm the auto-detected settings:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (Next.js default)
   - **Install Command**: `npm install`
5. Expand **Environment Variables** and add:
   - `NEXT_PUBLIC_SITE_URL` = `https://safdarkhan.com` *(or your chosen custom domain / `.vercel.app` URL)*
   - *(Optional)* `RESEND_API_KEY`, `CONTACT_RECEIVER_EMAIL`, `CONTACT_SENDER_EMAIL`
6. Click **Deploy**. Vercel will build, optimize assets, and provision automatic HTTPS.

---

## 🔒 Security Note

Never commit `.env`, `.env.local`, API keys, or private credentials to version control. Use `.env.example` as a safe reference template and store production secrets exclusively in **Vercel Project Settings → Environment Variables**.

