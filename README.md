# The Human Algorithm: System Architecture v6.0

> **Engineering Philosophy**: *"I design where software logic meets human intuition."*

This repository houses the source code for the production portfolio: **[fadlyzaki-design.vercel.app](https://fadlyzaki-design.vercel.app/)** — a high-performance, single-page application (SPA) built to demonstrate resilient workflows that tame complexity and free up mental bandwidth when it matters most.

[![Status](https://img.shields.io/badge/SYSTEM-NOMINAL-green?style=flat-square&logo=react)](https://fadlyzaki-design.vercel.app/)
[![Build](https://img.shields.io/badge/BUILD-PASSING-blue?style=flat-square&logo=vercel)](https://vercel.com)
[![Performance](https://img.shields.io/badge/LIGHTHOUSE-100-orange?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)

---

## 🏗 Architectural Decisions

As a **Design Engineer**, I treat this portfolio not just as a gallery, but as a production-grade product. Every technology choice balances **Creative Expression** (Framer Motion, MediaPipe) with **Engineering Rigor** (Performance, Accessibility, Resilience).

### 1. The Core Engine: React 18 + Vite
*   **Decision**: Migrated from CRA to Vite for O(1) HMR (Hot Module Replacement) and optimized Rollup builds.
*   **Benefit**: Sub-second dev server response allows for rapid prototyping of complex physics interactions without friction.
*   **Design Pattern**: Strict differentiation between `Logic Layer` (Custom Hooks) and `View Layer` (Components).

### 2. Physics & Interaction: Chaos to Matrix & Framer Motion
*   **Welcome Sequence (Chaos to Matrix)**: An ultra-premium, physics-driven orchestration of 100+ procedural SVG nodes that wander chaotically before an invisible algorithmic force violently snaps them into a perfect 3D matrix. This explicitly communicates the capability to tame chaotic data into structured, beautiful architecture.
*   **The Physical Flipbook**: Built a custom 3D mathematical flipbook for the `/sketches` route, rendering interactive pages as physical DOM sheets with precise `rotateY` transforms, pointer-event tunneling, and GPU culling for 60fps performance without heavy WebGL libraries.
*   **Tactile ID Cards**: The `DraggablePhoto` component supports 7 distinct physics-enabled ID card variants with interactive grayscale-to-color reveals.

### 3. Vision System: MediaPipe Hand Tracking
*   **Decision**: Implemented `HandCursorOverlay` using Google's Client-Side AI.
*   **Privacy-First**: No video data is ever sent to a server. Inference happens locally in the browser's WASM runtime.
*   **Performance Mitigation**: High-frequency 60fps tracking updates broadcast Custom DOM Events (`handCursorMove`) to decoupled listeners, avoiding full React tree re-renders.

### 4. Technical Visualizations: Airy SVG Engine
*   **Decision**: Replaced static PNGs with `AiryDiagram.jsx`, a custom SVG rendering engine.
*   **Benefit**: Renders localized, responsive, and animated technical schematics (Flow, Cycle, Architecture) at <5KB payload, replacing MBs of raster assets.

### 5. Localization & System Context
*   **Architecture**: A lightweight `LanguageContext` provider wrapping the application root.
*   **Subpage Navigation**: Contextual `Navbar` that switches from brand-focused (Home) to navigation-focused (Subpage) with a dynamic route-aware back button.
*   **Optimization**: Centralized O(1) linguistic database in `translations.js`.

### 6. System Governance & OS Integrity
*   **Merge Gate Status**: System continually verified via `merge_gate.skill` against structural and heuristic UX audits.
*   **Zero Magic Strings**: Config literals and storage keys are entirely centralized in `src/config/constants.js`.
*   **Modular Architecture**: Monolithic structures are strictly decomposed into single-responsibility molecules to isolate rendering domains.

### 7. Social & Distribution
*   **Dynamic OpenGraph Images**: Vercel Edge Middleware (`middleware.js`) detects social crawler bots and serves per-page OG meta tags via serverless API. Dynamic 1200×630 branded preview images generated on-the-fly via `@vercel/og`.
*   **Interactive Folder Cards**: Designed case study project cards as "Classified Folder" cards with peek-on-hover animation revealing Problem/Outcome.

---

## ⚡ Performance Strategy

We optimize for **Cognitive Load** (User) and **Computational Load** (Device).

*   **Code Splitting**: Route-level splitting via `React.lazy()` ensures users only download the code for the page they are viewing.
*   **Asset Optimization**: All assets served via Vercel's Global Edge Network.
*   **Defensive Rendering**: `ErrorBoundary` wraps critical subsystems to gracefully downgrade to static content on low-power devices.

---

## 📂 System Topography

```bash
src/
├── components/           # THE VIEW LAYER
│   ├── welcome/          # ChaosToMatrix Intro Orchestration
│   ├── sketches/         # Physical Sheet 3D Flipbook Module
│   ├── interactions/     # Feature-Specific Microsystems
│   ├── AiryDiagram.jsx   # SVG Schematic Engine
│   └── AIBrainstorm.jsx  # Conversational Interface
├── context/              # THE STATE LAYER
│   ├── ThemeContext      # Light / Dark
│   ├── LanguageContext   # en / id
│   └── HandCursorContext # Computer Vision State
├── data/                 # THE KNOWLEDGE GRAPH
│   ├── portfolioData.js  # Single Source of Truth
│   └── translations.js   # Linguistic Database
└── pages/                # THE ROUTING LAYER
```

---

## 🚀 Deployment Protocol

### Local Development
```bash
# 1. Clone & Install
git clone https://github.com/fadlyzaki/human-algorithm-portfolio.git
npm install

# 2. Ignite Dev Server
npm run dev

# 3. Compile Production Build
npm run build
```

### Production Environment
*   **Live URL**: [https://fadlyzaki-design.vercel.app/](https://fadlyzaki-design.vercel.app/)
*   **CI/CD**: Pushes to `main` trigger automated Vercel Edge Distribution.

---

## 🛡 Security & Privacy

*   **Client-Side "Encryption"**: Sensitive case studies use a simulated decryption layer. Authentication is logic-based, ensuring zero server-side attack surface for personal data.
*   **No PII Collection**: The application is stateless and collects no Personally Identifiable Information.
*   **Edge Case Hardening**: Extensive fallbacks for invalid IDs, missing translations, and camera permission denials.

---

© 2025-2026 Fadly Uzzaki.
*Engineered for Resilience.*
