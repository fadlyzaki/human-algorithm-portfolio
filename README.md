# The Human Algorithm: System Architecture v6.0

> **Engineering Philosophy:** *"We don't just write code; we craft resilient systems. We engineer spaces where software logic meets human intuition without dropping a single frame."*

Welcome to the source code of **[fadlyzaki-design.vercel.app](https://fadlyzaki-design.vercel.app/)** — a production-grade, highly experimental Single Page Application (SPA). 

This repository is deliberately over-engineered. It is not a static portfolio; it is an *Interactive Manifesto* and the definitive proof of work for Fadly Uzzaki, a Design Engineer who treats front-end development as an industrial science. It is built to survive extreme technical scrutiny, balancing wild creativity with unwavering Core Web Vitals.

[![Status](https://img.shields.io/badge/SYSTEM-NOMINAL-green?style=flat-square&logo=react)](https://fadlyzaki-design.vercel.app/)
[![Build](https://img.shields.io/badge/BUILD-PASSING-blue?style=flat-square&logo=vercel)](https://vercel.com)
[![Performance](https://img.shields.io/badge/LIGHTHOUSE-100-orange?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)

---

## 🏗 Architectural Topography & Tech Stack

A robust system is measured by its resilience, its DevX, and its render budget. We utilize a modern, highly optimized stack tailored for O(1) velocity and 60fps tactile interfaces.

* **The Engine**: **React 18 + Vite** (Migrated from legacy CRA to achieve blazing fast HMR and optimized Rollup tree-shaking).
* **The Physics**: **Framer Motion**. We strictly enforce GPU-accelerated CSS transforms (`translate3d`, `scale`) and structural `layoutId` animations to completely bypass main-thread layout thrashing.
* **The Intelligence**: **MediaPipe WASM**. Client-side computer vision models running via WebAssembly. Zero server round-trips. Absolute data privacy.
* **The Syntax**: **Tailwind CSS**. Utility-first styling enabling rapid molecular component design with absolute design system adherence and zero runtime CSS overhead.
* **The Edge**: **Vercel Edge Network**. Utilizing Edge Middleware for instantaneous bot-detection and dynamic OpenGraph image generation via `@vercel/og`.

## ⚡ Performance Budget & Render Strategy

### Strict Design Token Integration
Refined our presentation layer through global token alignment. Removed over 120+ unmanaged hex injections across `src/pages` and `src/components`, systematically enforcing structural CSS variables (`var(--text-primary)`, `var(--bg-void)`) to streamline client-side theme transitions avoiding unnecessary re-paints.


We optimize for **Device Computational Load** just as rigorously as we optimize UX Cognitive Load.

* **Aggressive DOM Culling**: Our custom 3D Physical Flipbook engine dynamically monitors structural `zIndex` and physically unmounts (`display: none`) any DOM node that sits more than 2 layers deep within the Z-axis. This eradicates GPU overdraw and Z-fighting.
* **Context Trap Mitigation**: Heavy sensor pipelines (like 60fps Hand Tracking) bypass the React Context tree entirely. They instead dispatch hyper-optimized Custom DOM Events (`handCursorMove`) to decoupled listeners, preventing cascading React Re-renders.
* **Aggressive Suspense Splitting**: Strict route-level and component-level chunking via `React.lazy()`. Heavy machine-learning models (`@mediapipe/hands`) and lower-fold UI clusters are structurally deferred off the critical render path to maintain a >90 Mobile Real Experience Score (RES).
* **Defensive Error Boundaries**: Critical interactive modules are wrapped in isolated Error Boundaries. If WebGL or WASM fails on a low-end device, the system gracefully degrades to semantic HTML fallbacks without crashing the OS.

## 🧬 Sub-Systems & Architectural Highlights

### 1. Terminal Boot Sequence (`TerminalIntro.jsx`)
A hyper-optimized CSS-driven typing engine. It securely locks the Typography cascade until the terminal execution completes, flashing seamlessly into the initialized application state. Designed to prevent cognitive overload for fast-moving recruiters with an immediate `[ Press any key to bypass ]` kill-switch.

### 2. Generative Identity Modules (`DraggablePhoto.jsx`)
A dynamic generative "ID Card" engine yielding 7 distinct design architectures (Industrial, Cyberpunk, Glassmorphism, Swiss, Retro, Neo-Brutalism, Holographic). All variants strictly adhere to a standardized payload interface (`ID_NO`, `ROLE`, `EXP`) bound to our bilingual formatting context API.

### 2. The Fluid Mechanics (`HomeSideProjects.jsx`)
A masterclass in Flexbox and Spring Physics. We ripped out rigid grid systems to implement a dynamic `flex-row` accumulator. Active hover states commandeer the available bandwidth (`flex-basis: 50%`) while siblings mathematically compress (`flex-basis: 15%`), dimming natively via hardware-accelerated CSS filters (`grayscale`, `brightness`, `blur`).

### 3. SVG Schematic Engine (`AiryDiagram.jsx`)
Why ship megabytes of raster PNGs when you can ship math? We built a proprietary charting engine that compiles technical architecture diagrams (Flow, Radar, Hierarchy) directly into <5KB raw SVG payloads, dynamically adapting `currentColor` to our Dark/Light theme matrix.

### 4. Semantic Intelligence & AI Dialects
A custom UI module mimicking a multi-modal reasoning AI. We implemented state-machine-driven typewriter effects and "thinking" suspense states across `AIBrainstorm.jsx` and the newly integrated `NeuralEcho.jsx` to allow users to interrogate the portfolio as if speaking to the system itself.

## 📂 System Topography

```text
src/
├── components/           # THE VIEW LAYER (Pure Functions)
│   ├── welcome/          # Boot Loaders & Terminal Orchestration
│   ├── sketches/         # Extracted 3D Flipbook Module Engine
│   ├── interactions/     # Heavy Feature-Specific Subsystems
│   └── NeuralEcho.jsx    # AI Conversational UI Nodes
├── context/              # THE STATE LAYER (Global Truth)
│   ├── ThemeContext      # Light / Dark OS Mode
│   ├── LanguageContext   # en / id Localization State
│   └── HandCursorContext # Computer Vision Sensor Data
├── data/                 # THE KNOWLEDGE GRAPH
│   ├── portfolioData.js  # The Single Source of Truth
│   └── translations.js   # O(1) Linguistic Database Lookup
└── pages/                # THE ROUTING LAYER (Lazy Loaded)
```

## 🚀 Deployment Protocol

### Local Ignition
```bash
# 1. Clone & Install Dependencies
git clone https://github.com/fadlyzaki/human-algorithm-portfolio.git
npm install

# 2. Boot the Edge Server
npm run dev

# 3. Compile Production Bundle
npm run build
```

### Production Environment
* Continuous Integration (CI) is hardlined to the `main` branch. Merges automatically trigger edge propagation across Vercel’s global CDN.
* Next Generation Edge Middleware intercepts social crawler traffic for semantic tagging analysis and dynamic preview injection (`/api/og`).

---
**Engineered by:** Fadly Uzzaki  
*Code is poetry. Architecture is survival.*  
*(c) 2025-2026. All Rights Reserved.*
