# Product Requirements Document (PRD): Human Algorithm Portfolio v2.7

## 1. Executive Summary
The "Human Algorithm Portfolio" is a high-performance, narrative-driven personal platform for Fadly Uzzaki. Unlike traditional portfolios, this system is architected as an "Interactive Manifesto" that bridges the gap between Computer Science rigor and human emotional complexity.

**Strategic Goal**: Establish the user as a "Scientific Design Engineer"—a hybrid professional who combines "Engineering Logic" with "Cognitive Science" to build resilient systems. This platform must demonstrate this duality through both its *content* (case studies) and its *code* (interactive physics, efficient rendering).

## 2. Success Metrics (KPIs)
*   **Performance**: Core Web Vitals (LCP < 2.5s, FID < 100ms) on mobile networks.
*   **Conversion**: >15% click-through rate from Home to "System Manifest" (CV).
*   **Retention**: >45s average session duration on Case Study pages (indicating deep reading).
*   **ATS Compliance**: 100% parse rate for the printable CV generated from `SystemManifest`.

## 3. Market Positioning & Personas
*   **The Technical Recruiter (High Frequency)**: Requires sub-2-second access to core credentials and an ATS-optimized, printable "System Manifest" (CV).
*   **The Head of Product/Design (High Depth)**: Demands a structured narrative ("The Why") focusing on "Cognitive Load Optimization" and "Resilience-First" UX.
*   **The Creative Peer (Viral/Engagement)**: Values the technical "Easter eggs," draggable physics, and the cyberpunk-industrial aesthetic ("The Void").
*   **The Global Hiring Manager**: Needs clear context on local achievements (GudangAda, etc.) framed through universal problems (B2B scale, friction reduction).

## 4. Risk Management
*   **Accessibility (a11y)**: High-concept interactions (hand tracking, custom cursors) must fail gracefully to standard pointer events for screen readers/keyboard users.
*   **Performance Overhead**: Large libraries (MediaPipe, Framer Motion) must be lazy-loaded to prevent main-thread blocking on initial load.
*   **Data Privacy**: Case study decryption occurs entirely client-side; no sensitive data is ever transmitted to a server.

## 3. Product Architecture

### 3.1 Homepage Information Architecture (IA)
The homepage follows a "Priority-First" narrative flow:
1.  **Level 0 (Hero/Header)**: Identity and "Contain Chaos" positioning with draggable ID card.
2.  **Level 1 (Side Projects)**: High-creativity, rapid-iteration experiments ("Wild Creativity"). Includes "The Archive" as a consolidated repository.
3.  **Level 2 (Work)**: Validated, large-scale industrial excellence (The Workforce/Commerce/Efficiency Ecosystems) via `WorkHoloDeck` cards.
4.  **Level 3 (About Me)**: Bento Grid layout with Bio Narrative, ProfileScanner, Philosophy, Current Focus, and Runtime Metrics cards. ChaosSlider and "System History" on dedicated About page.
5.  **Level 4 (Notes)**: Professional logs and intellectual pattern recognition via `BlogPost`.

### 3.2 System Manifest v2.0 (The CV Strategy)
*   **Single Source of Truth (SSOT)**: The CV dynamically mirrors `portfolioData.js`. No manual duplication permitted.
*   **ATS Optimization**: Uses standard terminology (Professional Experience, Skills, Education) and pipe-separated job titles to maximize parsing scores in HRD systems.
*   **Print Stylesheet (v2.5)**: Comprehensive `@media print` CSS for ATS/HRD readability:
    *   Standard fonts (Georgia body, Arial headings) instead of monospace
    *   Black text on white background
    *   Hidden decorative icons and animations
    *   Single-column layout for better parsing
    *   Skill tags as comma-separated plain text
    *   A4 page size with 0.75in margins
*   **Compact Header**: Aggregates Location, LinkedIn, Portfolio, and Email into a high-density, horizontal contact block to minimize vertical scroll.
*   **Dynamic Outcomes**: Experience bullets are automatically generated from project-level metrics (e.g., "+37% Conversion," "Latency Reduced").
*   **Cover Letter Modal**: Quick-access modal (`CoverLetterModal.jsx`) for generating contextual cover letter content.

### 3.3 The "Contain Chaos" Messaging Layer
*   **Consistency**: Unified messaging across `index.html` (SEO Meta), Home, and About pages.
*   **Visual Logic**: Grayscale profile imagery, scanline effects, and industrial iconography to maintain the "Systems Specialist" persona.
*   **Status Indicators**: "OPEN TO WORK" badges synced with local deployment states to drive conversion.

### 3.4 Technical Foundations
### 3.4 Technical Foundations
*   **Performance**: Vite-powered React engine with lazy loading via `React.lazy()` and `Suspense` for near-instant transitions.
*   **Performance Monitoring**: integrated `@vercel/speed-insights` for real-time Core Web Vitals tracking.
*   **SEO/Crawler Resilience**: Implemented static HTML fallbacks in `index.html` to ensure SEO indexing for SPA content. SEO component (`SEO.jsx`) for dynamic meta tags.
*   **Theme Management**: Dark Mode (The Void) by default, with persistent user-mode selection via `ThemeContext`.
*   **Error Handling**: Custom `ErrorBoundary` component with themed 404 page (`NotFound.jsx`) for graceful failure states.
*   **Security & Sanitization**:
    *   **Environment Management**: Sensitive keys managed via `.env` (git-ignored) with `vite-env` integration.
    *   **Content Safety**: Replaced unsafe `dangerouslySetInnerHTML` with `RichText` component for sanitized rendering.
*   **Analytics**: Page view tracking via `AnalyticsTracker.jsx`.
*   **Visual Language (Airy Technical Diagrams)**:
    *   **Primary Visual**: All Case Study headers use the interactive "Airy Technical Diagram" (`ProjectCard.jsx`) instead of images.
    *   **Consistency Rule**: 1:1 visual match with the project card schema.
    *   **Implementation**: `expanded={true}` and `showChrome={true}` for maximum technical detail.

### 3.5 Core Features

#### Interactive Experiences
*   **Adaptive Summaries**: Polymorphic text engine that rewrites case study summaries based on viewer persona (`ELI5`, `Recruiter`, `System`).
*   **Localization Strategy**: Full `en`/`id` (English/Indonesian) duality toggle via `LanguageContext`, enabling global reach.
*   **Hand Gesture Control**: Experimental "Decryption Lens" (`HandCursorOverlay.jsx`) using MediaPipe-based hand tracking with welcome modal (`HandTrackerWelcome.jsx`).
*   **Treasure Hunt Gamification**: Hidden collectibles (`Treasure.jsx`) that appear during gesture mode. Progress tracked via `TreasureProgress.jsx` with completion celebration (`TreasureCongrats.jsx`).
*   **Semantic Memory AI**: RAG-styled Q&A module (`SemanticMemory.jsx`) with typewriter streaming effect for recruiter-friendly self-interrogation.
*   **ChaosSlider**: Interactive personality dial on About page for dynamic content revelation.
*   **ProfileScanner (Identity Scan)**: High-fidelity component (`ProfileScanner.jsx`) featuring blur-to-clear "boot-up" scan animation with `useInView` viewport detection, interactive 3D tilt physics, and real-time HUD overlay. Animation triggers only when scrolled into view.
*   **Sticky Notes Cluster (v2.5)**: 4 unique insight notes in Hero section with varied rotations and accent colors (Blue, Amber, Green, Purple) in single-row `flex-nowrap` layout.
*   **AI Brainstorm Dialogue (v2.7)**: Redesigned "If I built this today..." section as Human + AI collaborative conversation (`AIBrainstorm` component). Features:
    *   **Chat Bubble Interface**: Visual dialogue between "You" (human, amber accent) and "AI Collaborator" (emerald accent).
    *   **Typing Indicators**: Animated dots when AI is "thinking" about alternatives.
    *   **Neural Network Background**: Subtle SVG pattern reinforcing AI collaboration theme.
    *   **Glowing Solution Card**: Highlighted output with gradient border and pulsing impact badge.
    *   **Multi-Hypothesis Support**: Each case study offers 3 AI-powered solution alternatives in `aiHypotheses` array.
    *   **Smooth Transitions**: Framer Motion animations for solution cycling with "Explore Another Idea" button.
*   **Zoomable Images (v2.6)**: Click-to-zoom modal for case study evidence images (`ZoomableImage.jsx`) using React Portal for proper z-index stacking.

#### Work Cluster Interactions
*   **WorkforceAI Demo** (`interactions/WorkforceAI.jsx`): Interactive demo for Lumina ecosystem features.
*   **CommerceAI Demo** (`interactions/CommerceAI.jsx`): Interactive demo for GudangAda B2B marketplace features.
*   **EfficiencyAI Demo** (`interactions/EfficiencyAI.jsx`): Interactive demo for Stoqo logistics features.
*   **NexusAI Interaction** (`interactions/NexusAI.jsx`): Generative "Synthesis" visual for side projects and recursive experiments, mapped dynamically based on project theme.
*   **SignalAI Interaction** (`interactions/SignalAI.jsx`): Generative communication frequency background for Contact page, responsive to user keystrokes.
*   **AI Interactive Protocol** (`pages/Contact.jsx`): Real-time intent analysis engine and "Neural Handshake" progress tracker that reacts to form input data.

#### Content Systems
*   **Meta-Project**: "The Human Algorithm" is now listed as a self-referential "Meta-Project" within the portfolio, documenting its own creation.
*   **Project Categorization**: `FilterMe` (AR Experiment) moves to "Notes" to reflect its status as a conceptual study rather than a production ship.
*   **Substack Intel-Matrix**: Automated (or mock-fallback) professional logs integrated into the homepage using RSS-to-JSON protocols.
*   **Knowledge Upgrades (Certifications)**: Technical "System Upgrade" modules on the About page documenting professional growth via verifiable external credentials. Implements a "Visual ID" card system with verifiable links.

### 3.6 UI/UX Refinements (v2.3–2.4)
*   **Profile Scanner (v2.4)**: Replaced static About page photo with interactive 3D scanner. Features "Blur-to-Clear" reveal animation on load.
*   **Navbar Standardization**: Unified navigation interaction across all pages (Introduction of `BackButton` in About page and fixed scroll positioning).
*   **Mobile-Responsive Work Cards**: Title text wraps naturally on mobile with optimized font sizing (`text-2xl` mobile, `text-6xl` desktop).
*   **Theme-Aware ID Card**: Industrial ID card design uses proper contrast colors—black text in light mode, white text in dark mode.
*   **Work Card Dark Mode Fix**: White backgrounds for work cards and case study preview cards in dark mode for diagram visibility.
*   **Draggable Photo Stack**: Multi-variant ID card designs (Industrial, Cyberpunk, Swiss) with Framer Motion physics.
*   **Tag & Pill Accessibility**: Standardized label legibility (`11px` min) and enforced contrast ratios for badges sitting on inverted card headers.
*   **Bento Grid About Section (v2.5)**: Reorganized homepage About section into 3-column grid with 5 modular cards (Bio Narrative, ProfileScanner, Philosophy, Current Focus, Runtime Metrics) for cleaner visual hierarchy.
*   **Case Study Layout Refactor (v2.7)**: "Solution" section for Stoqo Sales & Logistics now features a centered interactive prototype for focus, with explanatory static images arranged in a responsive 2-column grid.
*   **Stoqo Logistics Localization (v2.7)**: Full Indonesian translation support added to Stoqo Logistics, matching the bilingual capabilities of Stoqo Sales.
*   **Standardized Case Study Layout (v2.9)**: Unified all case studies (Stoqo, GudangAda, Lumina) to a strict 5-step `designProcess` structure (Research → Insight → Design → Ship → Measure), ensuring consistent narrative rhythm.
*   **Interactive Solution Modules (v2.9)**: "Paper-to-Paperless" concept now features fully interactive `StoqoPickerApp` and `StoqoCheckerApp` prototypes replacing static images.

## 4. Functional Specifications

### 4.1 Case Study Security
*   **Simulated Encryption & Localization**: All detailed case studies reside behind a "Confidential File" layer (`ProtectedCaseStudy.jsx`), using client-side password validation. The entire "Classified" narrative (lock screens, decryption sequences, error messages) is fully localized (`en`/`id`) to maintain immersion across languages.

### 4.2 Interactive Physics
*   **Draggable Interface**: High-fidelity tactile interactions using Framer Motion. Elements respect "Friction" and "Elasticity" constraints.
*   **Parallax Holodeck**: Work cards feature mouse-tracking parallax with depth layers and dynamic lighting reflections.

### 4.3 Page Structure
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.jsx` | Main landing with all portfolio sections |
| `/about` | `About.jsx` | Personality synthesis, Certifications, and ChaosSlider |
| `/contact` | `Contact.jsx` | Contact form and information |
| `/cv` | `SystemManifest.jsx` | ATS-optimized printable CV |
| `/work/:id` | `CompanyDetail.jsx` | Company cluster detail with brand theming |
| `/case-study/:id` | `ProtectedCaseStudy.jsx` | Password-protected case studies |
| `/side-projects` | `SideProjectsIndex.jsx` | Archive of all side projects |
| `/side-project/:id` | `SideProjectDetail.jsx` | Individual side project detail |
| `/blog/:id` | `BlogPost.jsx` | Individual note/blog post |

## 5. Non-Functional Requirements (NFRs)
*   **Heuristic Compliance**: Strict adherence to Nielsen's 10 Heuristics (Recognition vs. Recall, Consistency).
*   **Print Fidelity**: ATS-optimized A4 layouts with standard fonts (Georgia/Arial) and comma-separated skills for CV printing.
*   **Mobile-First Responsive**: All components optimized for touch and narrow viewports.
*   **Lazy Loading**: All pages use `React.lazy()` with Suspense fallback for performance.

*   **Airy Animations & Expansion (v2.8)**:
    *   **Live Schematics**: Technical diagrams (`ProjectCard`) now feature `framer-motion` path animations and data pulses to simulate active system monitoring.
    *   **Hypothesis Scale-up**: Expanded "If I built this today" section to 5 AI-native hypotheses per case study, covering Agentic Workflows and Multi-modal reasoning.
    *   **Visual Polish**: Removed legacy "Fig 1.0" artifacts for a cleaner, immersive display.

## 6. Roadmap & Future Iterations

### Phase 1: Foundation & Identity (Active)
*   **[COMPLETED]** Adaptive Content Engine (Adaptive Summaries)
*   **[COMPLETED]** Hand Tracking (HandCursorOverlay + Treasure Hunt)
*   **[COMPLETED]** Mobile Responsiveness (Work cards, ID card)
*   **[COMPLETED]** Semantic Memory AI (SemanticMemory.jsx)
*   **[COMPLETED]** AI Interactive Protocol (Contact page analysis + pings)
*   **[COMPLETED]** Knowledge Upgrades (Certification system in About page)

### Phase 2: Narrative & Depth (Q1 2026)
*   **[COMPLETED]** Narrative Refinement: "Resilience" Story & "Scientific Design Engineer" Positioning
*   **[COMPLETED]** Master's Degree Integration: `KNOWLEDGE_INSTALL` in System Runtime Log
*   **[COMPLETED]** Stoqo Logistics Visuals & Localization
*   **[COMPLETED]** Unified 5-Step Design Process (All Case Studies Standardized)
*   **[COMPLETED]** Interactive Warehouse Prototypes (Stoqo Picker & Checker Apps)
*   **[COMPLETED]** Side Project: "The Productivity Illusion" (Product Research Case Study & Visuals)

### Phase 3: Intelligence & Expansion (Q2-Q4 2026)
*   **[Q2 2026]** Enhanced AI Agent: Expand semantic memory with real RAG backend.
*   **[Q3 2026]** CMS Integration: Migrating "Notes" to MDX for easier publishing.
*   **[Q4 2026]** 3D WebGL Experiments: Evaluating Three.js for immersive hero section.

## 7. Asset Specifications

### 7.1 Work Bento Cards (Homepage)
To maintain the "Apple-style" minimalist aesthetic, assets for the Work grid must adhere to strict dimensions and quality standards.

| Component | Element | Dimensions (WxH) | Format | Notes |
|-----------|---------|------------------|--------|-------|
| **Card Container** | Full Card | `480px` (Fixed Height) | N/A | Width is responsive (`100%` of grid column). |
| **Hero Visual** | Product Shot | **1200x900px** (Recommended) | PNG/WebP | Aspect ratio ~4:3. Should be a high-fidelity "Device Frame" or "Product Shot" on a transparent or matching background. Anchored to the bottom. |
| **Company Logo** | Icon | **112x112px** (Min) | SVG/PNG | Displayed at `56x56px`. Must be transparent with sufficient contrast against white/dark backgrounds. |

**Visual Guidelines:**
*   **Hero Images**: Avoid text. Focus on UI screens, device mockups (phones, laptops), or abstract product representations.
*   **Logos**: Use the standalone logomark (icon) rather than the full logotype if possible, for better scalability on mobile.

---
**Document Status**: *ACTIVE*  
**Product Owner**: Fadly Uzzaki  
**Maintainer**: Human Algorithm Agent (Antigravity)

