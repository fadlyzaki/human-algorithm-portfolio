# The Human Algorithm: System Architecture v4.0

> **Engineering Philosophy:** *"Software is a physical constraint applied to human behavior. We do not just build interfaces; we engineer resilient systems where algorithmic enforcement meets human intuition—with zero frame drops and zero cognitive friction."*

Welcome to the internal source matrix of **[fadlyzaki-design.vercel.app](https://fadlyzaki-design.vercel.app/)** — a production-grade, highly experimental Single Page Application (SPA).

This repository is deliberately over-engineered. It is not a static portfolio; it is an *Interactive Manifesto* and the definitive proof of work for Fadly Uzzaki, Senior Product Designer specializing in Trust Engineering. Designed for the scrutiny of Product and Engineering leadership, this system proves the capacity to ingest chaotic business logic, tame systemic B2B complexity, and output deeply resilient, accessible workflows.

[![Status](https://img.shields.io/badge/SYSTEM-NOMINAL-green?style=flat-square&logo=react)](https://fadlyzaki-design.vercel.app/)
[![Build](https://img.shields.io/badge/VERSION-4.0.0-blue?style=flat-square&logo=vercel)](https://vercel.com)
[![Web Vitals](https://img.shields.io/badge/LIGHTHOUSE-100-orange?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)

---

## 🏗 Architectural Topography & Core Infrastructure

A robust system is measured by its fault tolerance, Developer Experience (DevX), and render budget. We utilize a modern, highly optimized edge-native stack tailored for O(1) velocity and 60fps tactile interfaces.

* **The Engine**: **React 18 + Vite** — Blazing fast HMR, isolated module reloading, and aggressive Rollup tree-shaking. Includes a **Vitest/jsdom** CI testing baseline.
* **The Physics**: **Framer Motion** — GPU-accelerated CSS transforms (`translate3d`, `scale`) and spring-based `layoutId` animations. All major interaction surfaces (Navbar, NavigationMenu, Footer, WorkBento, ScrollReveal) operate on spring physics for 60fps consistency.
* **The Syntax**: **Tailwind CSS** — Utility-first styling architecture with strict design token adherence via CSS custom properties (`var(--text-primary)`, `var(--bg-void)`).
* **The Edge**: **Vercel Edge Network** — Edge Middleware for bot-detection and dynamic OpenGraph image generation via `@vercel/og`.

## ⚡ Performance Budget & Rendering Strategy

* **Strict Design Token Integration**: 100% CSS variables. O(1) client-side theme transitions (Light/Dark) without DOM re-paints.
* **Aggressive DOM Culling**: 3D Flipbook engine unmounts (`display: none`) occluded Z-axis DOM nodes to eradicate GPU overdraw.
* **Suspense & Code Splitting**: Route-level and component-level chunking via `React.lazy()`. Heavy payloads (`ChaosCanvas`, `Flipbook`) deferred off critical render path.
* **Defensive Error Boundaries**: Critical modules wrapped in isolated Error Boundaries for graceful degradation.

## 🧬 Sub-Systems & Architectural Highlights

### 1. Generative Identity Modules (`DraggablePhoto.jsx`)
Polymorphic generative "ID Card" engine yielding 7 distinct design architectures (Industrial, Cyberpunk, Glassmorphism, Swiss, Retro, Neo-Brutalism, Holographic). All variants bound to bilingual context API via `LanguageContext`.

### 2. Polymorphic Project Card System (`VentureCard.jsx`)
5 distinct card archetypes (SystemCore, CosmicPop, Brutalist, Bento, Blueprint) with `BlindsReveal` 3D CSS slat overlay. Mobile parity via `IntersectionObserver` auto-toggling every 4 seconds. `ExperimentCard` shares this same mobile auto-cycle.

### 3. 6-Archetype Project Layout Engine (`project-layouts/`)
Each side project renders through a unique layout: `SystemCoreDetail`, `CosmicPopDetail`, `BrutalistDetail`, `BentoDetail`, `BlueprintDetail`, `PrototypeDetail`. Transparent root containers allow `ChaosCanvas` particle fields to render behind content. Targeted glassmorphism panels ensure text readability.

### 4. ChaosCanvas GPU Particle System (`ChaosCanvas.jsx`)
Canvas-based interactive particle field rendered on homepage and all side project detail pages. Lazy-loaded via `React.lazy()` to protect critical render path.

### 5. SVG Schematic Engine (`AiryDiagram.jsx`)
Proprietary charting engine compiling technical diagrams (Flow, Radar, Hierarchy) into <5KB raw SVG payloads, dynamically adapting to Dark/Light theme matrices.

### 6. Semantic Intelligence & AI Dialects (`NeuralEcho.jsx`)
State-machine-driven typewriter effects (5ms intervals) and "thinking" suspense states. `AIBrainstorm.jsx` transforms portfolio reads into self-interrogating dialogues.

### 7. Recruiter Mode (`RecruiterModeContext`)
Global context toggle switchable between "Terminal Mode" and "Document Mode." Universally strips animation delays, physics transitions, and typewriter blocks for hyper-scannable evaluation. Toggled via Navbar and NavigationMenu.

### 8. Physical DOM Virtualization (`Flipbook.jsx`)
Experimental 3D CSS rendering engine on `/sketches`. Dynamically unmounts occluded pages within the Z-index stack. Stable 60fps on entry-level mobile silicon.

### 9. Automated ATS Extraction (`SystemManifest.jsx`)
`/cv` route with aggressive `@media print` CSS. Monochromatic, single-column, highly semantic document guaranteeing 100% parse fidelity across Workday, Greenhouse, and Lever.

### 10. BlindsReveal Interaction System (`BlindsReveal.jsx`)
3D CSS horizontal slat overlay that opens on hover (desktop) or auto-cycles via `IntersectionObserver` (mobile, 60% viewport threshold). Used across `VentureCard`, `ExperimentCard`, and Design System demos.

### 11. The Dynamic Footer (`Footer.jsx`)
Auto-cycling deliverable text ("Let's build a [dashboard] resilient together.") using `inline-grid` with invisible longest-word spacer guaranteeing zero layout shift. `FrequencyVisualizer` canvas background with interactive social link tooltips.

### 12. Hardware-Accelerated Contact Scratch (`ContactScratch.jsx`)
Canvas-based scratch-to-reveal interaction for contact information. Enforces user engagement before exposing email/phone fields on the About page.

### 13. SpringPhysics Cursor Engine (`CustomCursor.jsx`)
Framer Motion spring-driven custom cursor with magnetic attraction to interactive elements. Documented in Design System's `LayoutLab`.

### 14. The Companion Protocol (`VirtualAssistant.jsx`)
Context-aware AI sprite companion providing route-specific "Pair Design" commentary. Hidden on 404 pages where a pixel-art survival game takes over.

### 15. The Narrative Gateway (`ChaosToMatrixIntro.jsx`)
Cinematic boot protocol with chaotic terminal sequence resolving into structured UI. Pre-loads React chunks in background. `[ Skip to Content ]` kill-switch for instant bypass.

### 16. ScrollReveal Animation System (`ScrollReveal.jsx`)
Framer Motion `useInView`-based entrance animations with configurable directional spring physics (up/down/left/right). Applied globally across page sections.

### 17. The Component Blueprint (`/design-system`)
Live Design System Viewer with `ComponentForge` (NeuralEcho, ContactScratch, BlindsReveal demos), `LayoutLab` (Cursor Physics), `BrandIdentity` (Persona Cards), and `UXPrinciples`. X-Ray structural inspection mode.

### 18. 404 Survival Game (`NotFound.jsx`)
Interactive pixel-art survival game with item collection, score tracking, and ambient theme matching. Virtual Assistant hidden to not interfere with gameplay.

## 📂 System Topography

```text
src/
├── components/               # THE VIEW LAYER (55+ Components)
│   ├── welcome/              # Boot Loaders & Terminal Orchestration
│   ├── sketches/             # 3D Flipbook Engine
│   ├── interactions/         # Heavy Feature-Specific Subsystems
│   ├── project-layouts/      # 6 Polymorphic Detail Archetypes
│   ├── design-system/        # Live DS Viewer Modules
│   ├── cards/                # Specialized Card Components
│   ├── id-cards/             # 7 Generative ID Card Variants
│   ├── about/                # About Page Sub-Components
│   ├── auth/                 # Lock Screen & Chaos Matrix BG
│   ├── prototypes/           # Interactive Prototypes (FilterMe, FloodAlert, etc.)
│   └── ui/                   # Shared UI Primitives
├── context/                  # THE STATE LAYER (Global Truth)
│   ├── ThemeContext           # Light / Dark Mode
│   ├── LanguageContext        # en / id Localization
│   └── RecruiterModeContext   # Terminal / Document Mode Toggle
├── data/                     # THE KNOWLEDGE GRAPH
│   ├── portfolioData.js      # Single Source of Truth
│   ├── translations.js       # Bilingual Database
│   └── navigationData.js     # Route & Link Definitions
└── pages/                    # THE ROUTING LAYER (14 Pages)
    ├── Home.jsx              # Conversion Funnel
    ├── About.jsx             # System Operations Dashboard
    ├── Contact.jsx           # Multi-Channel Contact with Scratch Reveal
    ├── SideProjectsIndex.jsx # Experiment Grid with Canvas Proximity Lines
    ├── SideProjectDetail.jsx # Polymorphic Layout Router + ChaosCanvas
    ├── ProtectedCaseStudy.jsx# Gated Enterprise Case Studies
    ├── CompanyDetail.jsx     # Company Profile Pages
    ├── SystemManifest.jsx    # ATS-Optimized CV Engine
    ├── DesignSystem.jsx      # Live Design System Viewer
    ├── Sketches.jsx          # 3D Flipbook Archive
    ├── BlogPost.jsx          # MDX Thought Leadership
    ├── UnprovokedThoughts*.jsx # Blog Index + Detail
    └── NotFound.jsx          # 404 Survival Game
```

## 🚀 Deployment Protocol & CI/CD Pipeline

### Local Ignition
```bash
# 1. Clone & Provision Dependencies
git clone https://github.com/fadlyzaki/human-algorithm-portfolio.git
npm install

# 2. Boot the Edge Emulation Server
npm run dev

# 3. Verify System Structural Integrity
npm run test

# 4. Compile Production Asset Bundle
npm run build
```

### Production Environment
* CI hardlined to `main` branch. Merges trigger sub-60-second edge propagation across Vercel's global CDN.
* Edge Middleware intercepts social crawler traffic for dynamic OpenGraph preview injection (`/api/og`).

---
**Engineered by:** Fadly Uzzaki
*Code is poetry. Architecture is survival.*
*(c) 2025-2026. All Rights Reserved.*
