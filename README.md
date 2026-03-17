# The Human Algorithm: System Architecture v3.5.0

> **Engineering Philosophy:** *"Software is a physical constraint applied to human behavior. We do not just build interfaces; we engineer resilient systems where algorithmic enforcement meets human intuition—with zero frame drops and zero cognitive friction."*

Welcome to the internal source matrix of **[fadlyzaki-design.vercel.app](https://fadlyzaki-design.vercel.app/)** — a production-grade, highly experimental Single Page Application (SPA).

This repository is deliberately over-engineered. It is not a static portfolio; it is an *Interactive Manifesto* and the definitive proof of work for Fadly Uzzaki, Senior Product Designer specializing in Trust Engineering. Designed for the scrutiny of Product and Engineering leadership, this system proves the capacity to ingest chaotic business logic, tame systemic B2B complexity, and output deeply resilient, accessible workflows.

[![Status](https://img.shields.io/badge/SYSTEM-NOMINAL-green?style=flat-square&logo=react)](https://fadlyzaki-design.vercel.app/)
[![Build](https://img.shields.io/badge/VERSION-3.5.0-blue?style=flat-square&logo=vercel)](https://vercel.com)
[![Web Vitals](https://img.shields.io/badge/LIGHTHOUSE-100-orange?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)

---

## 🏗 Architectural Topography & Core Infrastructure

A robust system is measured by its fault tolerance, its Developer Experience (DevX), and its render budget. We utilize a modern, highly optimized edge-native stack tailored for O(1) velocity and 60fps tactile interfaces.

* **The Engine**: **React 18 + Vite** (Migrated from legacy CRA to achieve blazing fast HMR, isolated module reloading, and aggressive Rollup tree-shaking for optimized parse times). Includes a **Vitest/jsdom** CI testing baseline.
* **The Physics**: **Framer Motion**. We strictly enforce GPU-accelerated CSS transforms (`translate3d`, `scale`) and structural `layoutId` animations to completely bypass main-thread layout thrashing and composite paint blocking.
* **The Syntax**: **Tailwind CSS**. A utility-first styling architecture that enables rapid molecular component design. It guarantees absolute design system adherence via an unyielding token schema (`var(--text-primary)`, `var(--bg-void)`) while ensuring zero runtime CSS extraction overhead.
* **The Edge**: **Vercel Edge Network**. Utilizing Edge Middleware for instantaneous bot-detection and dynamic OpenGraph image generation via `@vercel/og` to ensure lossless social previews.

## ⚡ Performance Budget & Rendering Strategy

We optimize for **Device Computational Load** just as rigorously as we optimize UX Cognitive Load.

* **Strict Design Token Integration**: 100% of the presentation layer relies on global CSS variables. This eradicates unmanaged hex injections and guarantees O(1) client-side theme transitions (Light/Dark/Cyberpunk) without triggering expensive DOM re-paints.
* **Aggressive DOM Culling**: Our custom 3D Physical Flipbook engine dynamically monitors structural `zIndex`. It physically unmounts (`display: none`) any DOM node that sits more than two layers deep within the Z-axis, aggressively eradicating GPU overdraw and Z-fighting on mobile devices.
* **Suspense & Code Splitting**: Strict route-level and component-level chunking via `React.lazy()`. Heavy visual clusters (like the Chaos Canvas WebGL node) are structurally deferred off the critical render path to fiercely defend our >90 Mobile Real Experience Score (RES).
* **Defensive Error Boundaries**: Critical interactive modules are wrapped in isolated Error Boundaries. If WebGL or heavy physics fail on a heavily throttled device, the system gracefully degrades to semantic HTML fallbacks without crashing the underlying OS.

## 🧬 Sub-Systems & Architectural Highlights

### 1. Generative Identity Modules (`DraggablePhoto.jsx`)
A polymorphic generative "ID Card" engine yielding 7 distinct design architectures (Industrial, Cyberpunk, Glassmorphism, Swiss, Retro, Neo-Brutalism, Holographic). All variants strictly adhere to a standardized, decoupled payload interface (`ID_NO`, `ROLE`, `EXP`) bound to our bilingual context API.

### 2. The Fluid Mechanics (`HomeSideProjects.jsx`)
A master class in Flexbox and Spring Physics powering the "Experiments & Explorations" tier. We abandoned rigid grid constraints to implement a dynamic `flex-row` accumulator. Active hover states commandeer the available viewport bandwidth (`flex-basis: 50%`) while siblings mathematically compress (`flex-basis: 15%`), natively dimming via hardware-accelerated CSS filters (`grayscale`, `brightness`, `blur`).

### 3. SVG Schematic Engine (`AiryDiagram.jsx`)
Shipping megabytes of raster PNGs to communicate architecture is an anti-pattern. We engineered a proprietary charting engine that compiles technical diagrams (Flow, Radar, Hierarchy) directly into <5KB raw SVG payloads, dynamically adapting `currentColor` to our exact Dark/Light theme matrices with infinite scalability.

### 4. Semantic Intelligence & AI Dialects (`NeuralEcho.jsx`)
A custom UI module mimicking a multi-modal reasoning AI. We implemented state-machine-driven typewriter effects (tuned to 5ms human-readable intervals) and "thinking" suspense states across `AIBrainstorm.jsx`. This transforms a standard portfolio read into a self-interrogating dialogue.

### 5. Recruiter Fast-Path (`?recruiter=true`)
Cognitive load reduction applied at the network layer. Detecting the `recruiter=true` perimeter query parameter injects a global `.recruiter-mode` CSS class that universally strips all animation delays, physics transitions, and typewriter blocks. This guarantees a hyper-scannable, zero-friction data extraction environment for high-stakes evaluators.

### 6. Physical DOM Virtualization (`Flipbook.jsx`)
An experimental 3D CSS rendering engine powering `/sketches`. It calculates realistic pagination geometry using raw CSS transforms while simultaneously unmounting (`display: none`) occluded pages within the Z-index stack. This aggressively mitigates DOM node bloat and achieves stable 60fps frame rates for deep visual arrays on entry-level mobile silicon.

### 7. Automated ATS Extraction (`SystemManifest.jsx`)
A dedicated `/cv` route engineered purely for robotic ingestion. It utilizes aggressive `@media print` CSS injections to dynamically overwrite the global stylistic cascade, yielding a monochromatic, single-column, highly semantic document. This guarantees 100% parse fidelity across enterprise HR tracking algorithms without the overhead of maintaining two separate repositories of truth.

### 8. The Narrative Gateway (`ChaosToMatrixIntro.jsx`)
A cinematic boot protocol that safely captures initial user attention while actively pre-loading subsequent React logic chunks (`React.lazy()`) in the background. It fiercely respects cognitive load boundaries by establishing an omnipresent, structural heuristic bypass (`[ Skip to Content ]`) directly fused into the DOM layer.

### 9. The Companion Protocol (`VirtualAssistant.jsx`)
A context-aware AI sprite companion that recognizes the user's focus and current route. It provides high-intensity TL;DRs and contextual greetings, simulating a live pair-design session across the entire portfolio matrix.

### 10. Structural Component Integrity (`/design-system`)
A live testing environment that acts as the platform's immutable source of truth. Version 3.5.0 introduces dedicated sections for Agentic Prototypes and Kinetic Motion documentation, ensuring total technical transparency.

## 📂 System Topography

```text
src/
├── components/           # THE VIEW LAYER (Pure Functions & Render Targets)
│   ├── welcome/          # Boot Loaders & Terminal Orchestration
│   ├── sketches/         # Extracted 3D Flipbook Module Engine
│   ├── interactions/     # Heavy Feature-Specific DOM Subsystems
│   └── NeuralEcho.jsx    # AI Conversational UI Nodes
├── context/              # THE STATE LAYER (Global Truth & Invariants)
│   ├── ThemeContext      # Light / Dark OS Mode Topology
│   ├── LanguageContext   # en / id Localization State Machine
│   └── HandCursorContext # Computer Vision Sensor Data Stream
├── data/                 # THE KNOWLEDGE GRAPH (Static Payloads)
│   ├── portfolioData.js  # The Single Source of Truth
│   └── translations.js   # O(1) Linguistic Database Lookup
└── pages/                # THE ROUTING LAYER (Lazy Loaded & Suspense Boundaries)
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
* Continuous Integration (CI) is hardlined to the `main` branch. Safe merges automatically trigger sub-60-second edge propagation across Vercel’s global CDN.
* Next Generation Edge Middleware intercepts social crawler traffic for semantic tagging analysis and dynamic preview injection (`/api/og`).

---
**Engineered by:** Fadly Uzzaki  
*Code is poetry. Architecture is survival.*  
*(c) 2025-2026. All Rights Reserved.*
