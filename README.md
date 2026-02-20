# The Human Algorithm: System Architecture v3.0

> **Engineering Philosophy**: "Chaos contained within a grid."

This repository houses the source code for [fadlyzaki.com](https://fadlyzaki.com)—a high-performance, single-page application (SPA) architected to demonstrate the intersection of **Computer Science logic** and **Human-Centered Design**.

[![Status](https://img.shields.io/badge/SYSTEM-NOMINAL-green?style=flat-square&logo=react)](https://fadlyzaki.com)
[![Build](https://img.shields.io/badge/BUILD-PASSING-blue?style=flat-square&logo=vercel)](https://vercel.com)
[![Performance](https://img.shields.io/badge/LIGHTHOUSE-100-orange?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)

---

## 🏗 Architectural Decisions

As a **Design Engineer**, I treat this portfolio not just as a gallery, but as a production-grade product. Every technology choice balances **Creative Expression** (WebGL, Framer Motion) with **Engineering Rigor** (Performance, Accessibility, Type Safety).

### 1. The Core Engine: React 18 + Vite
*   **Decision**: Migrated from CRA to Vite for O(1) HMR (Hot Module Replacement) and optimized Rollup builds.
*   **Benefit**: Sub-second dev server constraints allow for rapid prototyping of complex physics interactions without friction.
*   **Design Pattern**: Strict differentiation between `Logic Layer` (Custom Hooks) and `View Layer` (Components).

### 2. Physics & Interaction: Framer Motion
*   **Decision**: Used `framer-motion` over CSS transitions for state-driven physics (springs, drag constraints).
*   **Rationale**: The "Human Algorithm" requires interfaces that feel organic, not linear. Spring physics mimic the natural resistance and elasticity of real-world objects, reinforcing the "Tactile" UX pillar.

### 3. Vision System: MediaPipe (Client-Side AI)
*   **Decision**: Implemented `HandCursorOverlay` using Google's MediaPipe on the Edge (Client-Side).
*   **Privacy-First**: No video data is ever sent to a server. Inference happens locally in the browser's WASM runtime.
*   **Performance**: `HandCursorOverlay` is eagerly loaded (not lazy) for zero-latency gesture activation. Welcome modal (`HandTrackerWelcome`) is lazy-loaded.
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
*   **Merge Gate Status**: System verified at a flawless **100/100** score against structural and heuristic UX audits (`merge_gate.skill`).
*   **Zero Magic Strings**: Config literals and storage keys are entirely centralized in `src/config/constants.js` to eliminate drift.
*   **Safety Guardrails**: "Destructive" UI actions mandate a double-confirmation visual friction pattern protecting user latency.

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
