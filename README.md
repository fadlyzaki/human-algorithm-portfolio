# The Human Algorithm: System Architecture v5.0

> **Engineering Philosophy:** *"Software is a physical constraint applied to human behavior. We do not just build interfaces; we engineer resilient systems where algorithmic enforcement meets human intuition - with zero frame drops and zero cognitive friction. Human by Design."*

Welcome to the source matrix of **[fadlyzaki-design.vercel.app](https://fadlyzaki-design.vercel.app/)** - a production-grade, highly experimental Single Page Application (SPA).

This repository is heavily system-driven and highly optimized. It is not a static portfolio; it is an *Interactive Architecture* and the definitive proof of work for Fadly Uzzaki, Product Designer specializing in Trust Engineering. Designed for the scrutiny of Product and Engineering leadership, this system proves the capacity to organize chaotic business logic, tame systemic B2B complexity, and output deeply resilient, accessible workflows with measurable impact.

[![Status](https://img.shields.io/badge/SYSTEM-NOMINAL-green?style=flat-square&logo=react)](https://fadlyzaki-design.vercel.app/)
[![Build](https://img.shields.io/badge/VERSION-5.0.0-blue?style=flat-square&logo=vercel)](https://vercel.com)
[![Web Vitals](https://img.shields.io/badge/LIGHTHOUSE-100-orange?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)

---

## 🏗 Architectural Topography & Core Infrastructure

A robust system is measured by its fault tolerance, Developer Experience (DevX), and render budget. We utilize a modern, highly optimized edge-native stack tailored for O(1) velocity and 60fps tactile interfaces.

* **The Engine**: **React 18 + Vite** - Blazing fast HMR, isolated module reloading, and aggressive Rollup tree-shaking. Includes a **Vitest/jsdom** CI testing baseline.
* **The Physics**: **Framer Motion** - GPU-accelerated CSS transforms (`translate3d`, `scale`) and spring-based `layoutId` animations. All major interaction surfaces (Navbar, NavigationMenu, Footer, WorkBento, ScrollReveal) operate on spring physics with added **rotational character** (sliding pill transitions) for 60fps consistency.
* **The Syntax**: **Tailwind CSS** - Utility-first styling architecture with strict design token adherence via CSS custom properties (`var(--text-primary)`, `var(--bg-void)`).
* **The Edge**: **Vercel Edge Network** - Edge Middleware for bot-detection and dynamic OpenGraph image generation via `@vercel/og`.

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
Global context toggle switchable between "Terminal Mode" and "Document Mode." Universally strips animation delays, physics transitions, and typewriter blocks for hyper-scannable evaluation. Also bypasses the interactive Terminal GUI in the About section's OS Desktop, instantly rendering readable glassmorphic content. Toggled via Navbar and NavigationMenu.

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

### 14. Interactive OS Desktop (`DraggableBento.jsx` & `TerminalWindowCard.jsx`)
Framer Motion-powered drag physics engine deployed across the "About Me" section. Transitions static bento grids into a draggable, z-index-aware workspace on desktop viewports. Implements `TerminalWindowCard` archetypes requiring user "command execution" to expand into glassmorphic content areas.

### 15. The Context Navigator: Echo.Z Sprite (LLM Features Deprecated)
Persistent pixel-art sprite companion providing passive, context-aware route commentary and page explanations. **LLM-powered features deprecated in v9.1**: the "Ask Echo.Z" chat (Gemini 1.5 Flash via `api/echoz-chat.js`) and "1-click TL;DR" summarization were removed after profiling showed that serverless LLM round-trips degraded Time-To-Interactive. The sprite retains its rule-based context messaging, sleep mode, and interactive menu (Explain / Contact / Sleep). Hidden on the 404 pixel-art survival game.

### 15. The Narrative Gateway (`ChaosToMatrixIntro.jsx`)
Cinematic boot protocol with chaotic terminal sequence resolving into structured UI. Pre-loads React chunks in background. `[ Skip to Content ]` kill-switch for instant bypass.

### 16. ScrollReveal Animation System (`ScrollReveal.jsx`)
Framer Motion `useInView`-based entrance animations with configurable directional spring physics (up/down/left/right). Applied globally across page sections.

### 17. The Component Blueprint (`/design-system`)
Live Design System Viewer with `ComponentForge` (NeuralEcho, ContactScratch, BlindsReveal demos), `LayoutLab` (Cursor Physics), `BrandIdentity` (Persona Cards), and `UXPrinciples`. X-Ray structural inspection mode.

### 18. 404 Survival Game (`NotFound.jsx`)
Interactive pixel-art survival game with item collection, score tracking, and ambient theme matching. Virtual Assistant hidden to not interfere with gameplay.

### 19. Robust Dynamic Imports (`lazyWithRetry.js`)
Application-wide implementation of a resilient lazy-loading wrapper. Automatically detects and reloads on chunk-load failures (e.g., during a new deployment), backed by a global `ErrorBoundary` for 100% graceful degradation.

### 20. Human Connection Sync Terminal (`Contact.jsx`)
Human-centric connection terminal replacing aggressive networking jargon. Tracks `SYNC_VALUES`, `ALIGN_GOALS`, and `ESTABLISH_CONN` steps to visualize the formation of a genuine human connection.

### 21. Circadian UI Overlay (`CircadianOverlay.jsx`)
A fixed, full-screen overlay that shifts the global color temperature based on the user's local time. Morning (cool blue), Midday (neutral), Golden Hour (warm amber), Night (deep indigo). Re-evaluates every 10 minutes with proper cleanup. All color values housed in a `CIRCADIAN_PHASES` config object.

### 22. Breath-Synced Variable Typography (`useVariableTypography.js`)
Custom hook modulating the `--font-weight-dynamic` CSS property via `requestAnimationFrame`. Idle/reading state generates a slow sine-wave oscillation (weights 370–410) simulating breathing rhythm. Fast scrolling snaps to weight 440 for immediate legibility. Powered by Inter Variable Font (100–900 continuous weight axis) loaded from Google Fonts CDN.

### 23. Adaptive Cognitive Pacing (`useScrollPacing.js`)
Framer Motion hook that maps scroll velocity to a pacing multiplier consumed by `ChaosCanvas`. When reading (idle), background particles slow to a calm 0.2x pace. When scanning (fast scroll), they accelerate to 2.0x. All values abstracted into `PACING_CONFIG`.

### 24. Biomimetic Motion (`VentureCard.jsx`)
All VentureCard archetypes inherit a biological "breathing" idle animation (`y: [0, -3, 0]`) via Framer Motion spring physics with per-archetype timing configurations housed in `MOTION_CONFIG`.

### 25. The Benchmarking Engine (`SummarizerAI.jsx`)
Real-world application of Google ADK (Agent Development Kit) and Model Context Protocol (MCP). An AI-powered interaction simulating the process of converting unstructured public landing pages into structured product-design benchmarking JSON.

## 📂 System Topography
The architecture follows a strict decoupled multi-layer pattern:
- **View Layer**: 60+ UI components across 14 pages, emphasizing recursive performance and kinetic polish.
- **State Layer**: Global Truth management via React Context (`Theme`, `Language`, `RecruiterMode`).
- **Knowledge Graph**: Centralized Single Source of Truth (`portfolioData.js`) and high-fidelity bilingual databases.
- **Biological Layer**: Circadian time-sync, breath-synced typography, and adaptive cognitive pacing.
- **Infrastructure**: Resilience-first routing with dynamic import fail-safes and isolated error handling.


## 🚀 Deployment Protocol & CI/CD Pipeline

### Local Ignition
Standard local development requires Node.js and a package manager.
1. Provision dependencies via `npm install`.
2. Boot the development server with `npm run dev`.
3. Verify system integrity via `npm run test`.
4. Compile production assets using `npm run build`.


### Production Environment
* CI hardlined to `main` branch. Merges trigger sub-60-second edge propagation across Vercel's global CDN.
* Edge Middleware intercepts social crawler traffic for dynamic OpenGraph preview injection (`/api/og`).

---
**Engineered by:** Fadly Uzzaki
*Design is a system. Architecture is survival.*
*(c) 2025-2026. All Rights Reserved.*
