# Product Requirements Document (PRD): Human Algorithm Portfolio v2.2

## 1. Executive Summary
The "Human Algorithm Portfolio" is a high-performance, narrative-driven personal platform for Fadly Uzzaki. Unlike traditional portfolios, this system is architected as an "Interactive Manifesto" that bridges the gap between Computer Science rigor and human emotional complexity. 

**Strategic Goal**: Establish the user as an "AI-native, human-centered thinker" who doesn't just manage systems, but "contains chaos" for peak resilience.

## 2. Market Positioning & Personas
*   **The Technical Recruiter (High Frequency)**: Requires sub-2-second access to core credentials and an ATS-optimized, printable "System Manifest" (CV).
*   **The Head of Design (High Depth)**: Demands a structured narrative ("The Why") through case studies, focusing on "Design for Recovery" and "Resilience-First" UX.
*   **The Creative Peer (Viral/Engagement)**: Values the technical "Easter eggs," draggable physics, and the cyberpunk-industrial aesthetic ("The Void").

## 3. Product Architecture

### 3.1 Homepage Information Architecture (IA)
The homepage follows a "Priority-First" narrative flow:
1.  **Level 0 (Hero/Header)**: Identity and "Contain Chaos" positioning.
2.  **Level 1 (Side Projects)**: High-creativity, rapid-iteration experiments ("Wild Creativity"). Includes "The Archive" as a consolidated repository.
3.  **Level 2 (Work)**: Validated, large-scale industrial excellence (The Workforce/Commerce/Efficiency Ecosystems).
4.  **Level 3 (About Me)**: The human backend—personality synthesis and "System History."
5.  **Level 4 (Notes)**: Professional logs and intellectual pattern recognition.

### 3.2 System Manifest v2.0 (The CV Strategy)
*   **Single Source of Truth (SSOT)**: The CV dynamically mirrors `portfolioData.js`. No manual duplication permitted.
*   **ATS Optimization**: Uses standard terminology (Professional Experience, Skills, Education) and pipe-separated job titles to maximize parsing scores in HRD systems.
*   **Compact Header**: Aggregates Location, LinkedIn, Portfolio, and Email into a high-density, horizontal contact block to minimize vertical scroll.
*   **Dynamic Outcomes**: Experience bullets are automatically generated from project-level metrics (e.g., "+37% Conversion," "Latency Reduced").

### 3.3 The "Contain Chaos" Messaging Layer
*   **Consistency**: Unified messaging across `index.html` (SEO Meta), Home, and About pages.
*   **Visual Logic**: Grayscale profile imagery, scanline effects, and industrial iconography to maintain the "Systems Specialist" persona.
*   **Status Indicators**: "OPEN TO WORK" badges synced with local deployment states to drive conversion.

### 3.4 Technical Foundations
*   **Performance**: Vite-powered React engine for near-instant transitions.
*   **SEO/Crawler Resilience**: Implemented static HTML fallbacks in `index.html` to ensure SEO indexing for SPA (Single Page Application) content.
*   **Theme Management**: Dark Mode (The Void) by default, with persistent user-mode selection via `ThemeContext`.
*   **Visual Language (Airy Technical Diagrams)**:
    *   **Primary Visual**: All Case Study headers use the interactive "Airy Technical Diagram" (`ProjectCard.jsx`) instead of images.
    *   **Consistency Rule**: 1:1 visual match with the project card schema.
    *   **Implementation**: `expanded={true}` and `showChrome={true}` for maximum technical detail.

### 3.5 Core Features (v2.2 Additions)
*   **Adaptive Summaries**: A polymorphic text engine that rewrites case study summaries based on viewer persona:
    *   `ELI5` (Simple analogies)
    *   `Recruiter` (Metrics-focused)
    *   `System` (Technical architecture)
*   **Localization Strategy**: Full `en`/`id` (English/Indonesian) duality toggle, enabling infinite reach across local and global markets.
*   **Hand Gesture Control**: Experimental "Decryption Lens" allowing users to navigate and decrypt content using MediaPipe-based hand tracking.

## 4. Functional Specifications

### 4.1 Case Study Security
*   **Simulated Encryption**: All detailed case studies reside behind a "Confidential File" layer, using client-side password validation (or localized keys) to maintain the "Classified" narrative without blocking legitimate user access.

### 4.2 Interactive Physics
*   **Draggable Interface**: High-fidelity tactile interactions using Framer Motion. Elements must respect "Friction" and "Elasticity" constraints.

## 5. Non-Functional Requirements (NFRs)
*   **Heuristic Compliance**: Strict adherence to Nielsen's 10 Heuristics (Recognition vs. Recall, Consistency).
*   **Print Fidelity**: Zero-margin A4 layouts for CV printing.

## 6. Roadmap & Future Iterations
*   **[COMPLETED] Adaptive Content Engine**: Implemented via Adaptive Summaries.
*   **[COMPLETED] Hand Tracking**: Implemented via HandCursorOverlay.
*   **[Q2] AI Agent (Semantic Memory)**: RAG module for recruiter Q&A.
*   **[Q3] CMS Integration**: Migrating "Notes" to MDX.

---
**Document Status**: *ACTIVE*  
**Product Owner**: Fadly Uzzaki  
**Maintainer**: Human Algorithm Agent (Antigravity)
