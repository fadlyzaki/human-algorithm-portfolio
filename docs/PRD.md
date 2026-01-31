# Product Requirements Document (PRD): Human Algorithm Portfolio

## 1. Introduction
This document outlines the product requirements for the "Human Algorithm Portfolio," a personal portfolio website for Fadly Uzzaki, a Product Designer and Systems Specialist. The product is designed to embody the persona of a "Systems Thinker" who bridges Computer Science logic with human chaotic reality.

### 1.1 Product Vision
To create an immersive, narrative-driven portfolio that functions less like a static brochure and more like a "living system." The interface should reflect the designer's philosophy: "Design for recovery, not perfection," utilizing an industrial, cyberpunk-adjacent aesthetic ("The Void" vs. "The Surface").

## 2. User Personas
*   **The Recruiter**: Needs quick access to the CV (System Manifest) and high-level project summaries.
*   **The Design Manager**: Interested in the "Why" and "How"—the case study narratives, problem-solving approach, and system architecture.
*   **The Peer/Engineer**: Appreciates the technical details, "Easter eggs" (terminal aesthetics, system status), and the hybrid code/design background.

## 3. Functional Requirements

### 3.1 Core Navigation & Layout
*   **Global Navigation**:
    *   Desktop: Top bar with "System Online" status, section links (/ABOUT, /WORK, /NOTES), and theme toggle.
    *   Mobile: "Control Deck" (Floating bottom bar) with Menu, Scroll-to-Top.
    *   Overlay Menu: Full-screen "System Directory" for mobile/tablet.
*   **Theme System**:
    *   **Modes**: Toggle between "Dark Mode" (The Void) and "Light Mode" (Paper/Surface).
    *   **Persistence**: System should default to Dark Mode.
    *   **Dynamic Styling**: All components (text, borders, backgrounds) must react instantly to theme changes.

### 3.2 Landing Page (The Terminal)
*   **Hero Section**:
    *   Headline: "Product Designer · Systems Thinker".
    *   **Status Ticker**: "Open to collaboration" / Live activity feed.
    *   **Identity Anchor**: Interactive, draggable profile card (3:4 ratio, rotated) with "Identity" and "Context" modes.
*   **Work Clusters**:
    *   **Brand Identity**: Each cluster (Workforce, Commerce, Efficiency) adopts a specific brand color (Teal, Cyan, Orange) that dynamically tints the UI (borders, glows, text).
    *   **Navigation**: Deep linking to specific project clusters.
*   **Side Projects (The Archive)**:
    *   Grid layout displaying "Experiments" with tech stack tags.
    *   "View All" link leading to the dedicated Side Projects Index.

### 3.3 Company & Case Study System
*   **Company Detail Pages**:
    *   **Visual Logic**: Inherits the company's brand color schema for immersion.
    *   **Feature Previews**: List of key contributions with "Image Preview" slots for immediate visual context.
*   **Protected Case Studies**:
    *   **Dynamic Routing**: Unique URLs for each project (`/case-study/:id`).
    *   **Simulated Security**: A "Classified File" interface requiring a password to decrypt.
    *   **Contextual Data**: Loads specific "Declassified Memos" and metrics for each project.

### 3.4 Semantic Memory (The Agent)
*   **Interface**: A simulated RAG (Retrieval-Augmented Generation) module replacing the static "About" config.
*   **Functionality**: Users can query the system about the designer's background, returning "probability-based" answers in a CLI format.

### 3.5 System Manifest (CV)
*   **Concept**: A printable, high-contrast technical specification sheet.

## 4. Security & Privacy Measures
*   **Application Security**:
    *   **Simulated Authentication**: The "Protected Case Study" system uses client-side logic to simulate a secure environment. *Note: As a portfolio, the "password" is public knowledge (hinted in UI) to allow recruiter access while maintaining the "confidential" narrative.*
    *   **Client-Side Privacy**: No sensitive PII (Personally Identifiable Information) or proprietary company data is actually stored in the bundle. All "protected" metrics are anonymized or public-safe.
*   **deployment Security**:
    *   **HTTPS Enforcement**: All traffic is served over SSL via the hosting platform (Vercel/Netlify).
    *   **Source Integrity**: Codebase is version-controlled with strict main-branch protection policies (simulated via git workflow).

## 5. Non-Functional Requirements
*   **Aesthetics**:
    *   **Theme**: "Human Algorithm" – blending industrial Swiss design with soft digital humanism.
    *   **Visual Language**: 
        *   **Rounded Corners**: Strict 8px (`rounded-lg`) radius on all cards, buttons, and frames.
        *   **Motion**: "ScrollReveal" framework for staggered fade-up animations.
    *   **Typography**: Monospace (Geist Mono/JetBrains) for data, Sans (Inter/Geist) for body, Serif (Playfair/Instrument) for quotes.

## 6. Technical Stack
*   **Frontend**: React (Vite)
*   **Styling**: Tailwind CSS + CSS Variables (ThemeContext).
*   **Icons**: Lucide React.
*   **Animation**: Framer Motion (Gestures), Native CSS (Scroll).

## 7. Asset Requirements List
To fully personalize the "Human Algorithm" system, prepare the following assets. 

| Asset Type | Location | Aspect Ratio | Dimensions |
| :--- | :--- | :--- | :--- |
| **Hero Profile Photo** | Home Header | **3:4** | `600px x 800px` |
| **Work Context Images** | Detail Pages | **16:9** | `1280px x 720px` |
| **Feature Previews** | Feature Lists | **16:9** | `800px x 450px` |

## 8. Future Scope / Roadmap
*   **Blog/Notes System**: Fully functional CMS.
*   **Real-time Analytics**: Firebase tracking.
*   **Interactive Terminal**: CLI route.
