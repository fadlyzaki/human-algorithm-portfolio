# The Human Algorithm: System Architecture v3.0

> **Engineering Philosophy**: *"I design where software logic meets human intuition."*

This repository houses the source code for [fadlyzaki.com](https://fadlyzaki.com)—a high-performance, single-page application (SPA) built to demonstrate resilient workflows that tame complexity and free up mental bandwidth when it matters most.

> 📄 **[Brand Copy — Living Doc](docs/brand_copy.md)** — Centralized, reusable copy for LinkedIn, Dribbble, job apps, and beyond.

[![Status](https://img.shields.io/badge/SYSTEM-NOMINAL-green?style=flat-square&logo=react)](https://fadlyzaki.com)
[![Build](https://img.shields.io/badge/BUILD-PASSING-blue?style=flat-square&logo=vercel)](https://vercel.com)
[![Performance](https://img.shields.io/badge/LIGHTHOUSE-100-orange?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)

---

## 🏗 Architectural Decisions

As a **Design Engineer**, I treat this portfolio not just as a gallery, but as a production-grade product. Every technology choice balances **Creative Expression** (Framer Motion, MediaPipe) with **Engineering Rigor** (Performance, Accessibility, Resilience).

### 1. The Core Engine: React 18 + Vite
*   **Decision**: Migrated from CRA to Vite for O(1) HMR (Hot Module Replacement) and optimized Rollup builds.
*   **Benefit**: Sub-second dev server constraints allow for rapid prototyping of complex physics interactions without friction.
*   **Design Pattern**: Strict differentiation between `Logic Layer` (Custom Hooks) and `View Layer` (Components).

### 2. Physics & Interaction: Framer Motion
*   **Decision**: Used `framer-motion` over CSS transitions for state-driven physics (springs, drag constraints).
*   **Rationale**: The "Human Algorithm" requires interfaces that feel organic, not linear. Spring physics mimic the natural resistance and elasticity of real-world objects, reinforcing the "Tactile" UX pillar.
*   **Tactile ID Cards**: The `DraggablePhoto` component supports 7 distinct physics-enabled ID card variants (Industrial, Cyberpunk, Swiss, Glassmorphism, Retro, Neo-Brutalism, Holographic), unified by a strict monochrome aesthetic and interactive grayscale-to-color reveals.

### 3. Vision System: MediaPipe (Client-Side AI)
*   **Decision**: Implemented `HandCursorOverlay` using Google's MediaPipe on the Edge (Client-Side).
*   **Privacy-First**: No video data is ever sent to a server. Inference happens locally in the browser's WASM runtime.
*   **Performance (Context Trap Mitigated)**: High-frequency 60fps tracking updates bypass React Context entirely. Instead, they broadcast Custom DOM Events (`handCursorMove`) to decoupled listeners (like `Treasure.jsx`), avoiding full-tree re-renders constraint.
*   **Lifecycle**: Full cleanup on deactivation—MediaPipe camera stop, webcam media stream track release (`track.stop()`), `encrypted-mode` CSS class removal, and cursor position reset.

### 4. Visualization: Airy Technical Diagrams
*   **Decision**: Replaced static PNGs with `AiryDiagram.jsx`, a custom SVG engine.
*   **Benefit**: Renders localized, responsive, and animated technical schematics (Flow, Cycle, Architecture) at <5KB payload, replacing MBs of raster assets.

### 5. Localization & System Context
*   **Architecture**: A lightweight `LanguageContext` provider wrapping the application root with `useCallback`-optimized toggle and CSS fade transition.
*   **Localized Clock**: Real-time `HH:MM:SS` with dynamic timezone detection (e.g., `WIB`, `EST`, `JST`).
*   **Subpage Navigation**: Contextual `Navbar` that switches from brand-focused (Home: `Fadlyzaki🧢`) to navigation-focused (Subpage) with a back button and page title.
*   **Optimization**: Centralized O(1) linguistic database in `translations.js`.

### 6. System Governance & OS Integrity
*   **Merge Gate Status**: System verified at a flawless **95/100** score against structural and heuristic UX audits (`merge_gate.skill`), with critical Context Trap and God Component blockers mitigated.
*   **Zero Magic Strings**: Config literals and storage keys are entirely centralized in `src/config/constants.js` to eliminate drift.
*   **Safety Guardrails**: "Destructive" UI actions mandate a double-confirmation visual friction pattern protecting user latency.
*   **Modular Architecture**: Monolithic structures (e.g., `About.jsx` "God Component") are strictly decomposed into single-responsibility molecules (`RuntimeLogTimeline`, `CertificationsGrid`, etc.) to isolate rendering domains.

### 7. UI/UX Polish (v3.4)
*   **System Core Card Alignment**: Fixed the flex distribution in the `SystemCoreCard` component, optimizing height ratios to `40/60` to ensure content properly fits on mobile and tablet without overlapping.
*   **Prototype Embedding**: Migrated static prototype representations (like Project Kinship) to live, interactive `iframe` HTML mounts.
*   **Side Project Ordering**: Adjusted `portfolioData.js` object arrays to dynamically deprioritize older/archived ventures (e.g. Dolphi) from the primary Homepage view.
*   **Dynamic Visuals for Data**: Replaced static raster images in the Price Lock "Evolution" timeline with responsive `AiryDiagram` components (`airy:timeline`, `airy:search`, `airy:ui`, `airy:chart`) and completed the 4-step UX narrative.
*   **Interactive Node Physics**: Enhanced the `/sketches` archive with a dual-mode layout (Chaos/Order) featuring responsive grid-wrapping, collision-aware node routing, natural-aspect image popovers, and subtle breathing animations.
*   **Navbar Contextualization**: Re-architected the `Navbar` to dynamically display context-aware page titles across all subpages, replacing static fallbacks with route-aware headers.
*   **Hardware Fallbacks**: Hardened experimental AR components (e.g., `FilterMe`) with explicit media stream permission handling to prevent silent camera activation failures.

### 8. Social & Distribution (v3.5)
*   **Interactive Folder Cards**: Redesigned case study project cards as "Classified Folder" cards with peek-on-hover animation revealing Problem/Outcome and a "VIEW CASE" CTA.
*   **Hero Image Failsafe**: Added loading skeleton + error fallback to homepage `WorkBento` cards to prevent empty states during slow loads or image failures.
*   **Dynamic OpenGraph Images**: Vercel Edge Middleware (`middleware.js`) detects 20+ social crawler bots and serves per-page OG meta tags via serverless API. Dynamic 1200×630 branded preview images generated on-the-fly via `@vercel/og`.

### 9. Systems Hardening (v3.6)
*   **Methodology Grid Optimization**: Re-architected 5-item methodology grids (Year In Review, Dolphi, Productivity Illusion) from awkward 3-col layouts to a clean 2-column model with a full-width hero card for improved visual rhythm.
*   **Brand Intelligence Sync**: Standardized the `🧢 Fadly Uzzaki` naming convention across all 7 generative ID card variants (Industrial to Holographic), fixing name abbreviated drift.
*   **Data Integrity Protocol**: Restored missing structural metadata (Metrics, Researcher Notes) across the side-project ecosystem and fixed bilingual data resolvers.

---

## ⚡ Performance Strategy

We optimize for **Cognitive Load** (User) and **Computational Load** (Device).

*   **Code Splitting**: Route-level splitting via `React.lazy()` ensures users only download the code for the page they are viewing.
*   **Asset Optimization**: All assets (WebP) served via Vercel's Global Edge Network.
*   **Defensive Rendering**: `ErrorBoundary` wraps critical subsystems (like the 3D Profile Scanner) to gracefully downgrade to static content on low-power devices.

---

## 📂 System Topography

```bash
src/
├── components/           # THE VIEW LAYER
│   ├── interactions/     # Feature-Specific Microsystems (WorkforceAI, NexusAI)
│   ├── home/             # Homepage Section Components (HomeHero, HomeAbout, etc.)
│   ├── AiryDiagram.jsx   # SVG Schematic Engine
│   └── AIBrainstorm.jsx  # Conversational Interface
├── context/              # THE STATE LAYER
│   ├── ThemeContext       # "The Void" (Dark Mode) vs "Surface" (Light Mode)
│   ├── LanguageContext    # en/id Bilingual Toggle with Fade Transition
│   └── HandCursorContext  # Gesture Mode State & Easter Egg Collection
├── data/                 # THE KNOWLEDGE GRAPH
│   ├── portfolioData.js  # Single Source of Truth for Projects
│   ├── aboutData.js      # Certifications, Achievements, Habits, Runtime Log
│   ├── contactData.js    # Contact Information & Social Matrix
│   └── translations.js   # Linguistic Database
└── pages/                # THE ROUTING LAYER

api/                      # VERCEL SERVERLESS LAYER
├── _ogRoutes.js          # Centralized route-to-metadata mapping (30+ pages)
├── og.js                 # Dynamic OG image generation (@vercel/og)
└── og-html.js            # Crawler-facing HTML with correct meta tags
    ├── SystemManifest    # ATS-Optimized CV Generation
    └── ...
```

---

## 🚀 Deployment Protocol

### Local Development
Standardized `npm` scripts for developer experience (DX).

```bash
# 1. Clone & Install
git clone https://github.com/fadlyzaki/human-algorithm-portfolio.git
npm install

# 2. Ignite Dev Server
npm run dev

# 3. Compile Production Build
npm run build
```

### CI/CD Pipeline
*   **Trigger**: Push to `main`.
*   **Runner**: Vercel Build Pipeline.
*   **Checks**: Linting -> Build -> Asset Optimization -> Edge Distribution.

---

## 🛡 Security & Privacy

*   **Client-Side "Encryption"**: Sensitive case studies use a simulated decryption layer. Authentication is logic-based, not server-based, ensuring zero server-side attack surface for personal data.
*   **No PII Collection**: The application is stateless and collects no Personally Identifiable Information beyond standard anonymous analytics.
*   **Edge Case Hardening**: Extensive fallbacks for invalid IDs, missing translations, and camera permission denials ensure system stability.

---

© 2025-2026 Fadly Uzzaki.
*Engineered for Resilience.*
