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
    *   **Smart Navbar**: Desktop top bar that hides on scroll-down and reappears on scroll-up. Includes **Active State Indicators** to show current location.
    *   **Mobile Control Deck**: Floating bottom bar with Menu and Scroll-to-Top.
    *   **Keyboard Support**: Global menu and modals support `ESC` key closure.
    *   **Scroll Management**: Integrated `ScrollToTop` logic ensuring all route changes reset the viewport to (0,0).
*   **Theme System**:
    *   **Modes**: Toggle between "Dark Mode" (The Void) and "Light Mode" (Paper/Surface).
    *   **Persistence**: Handled via `ThemeContext`.

### 3.2 Landing Page (The Terminal)
    *   "View All" link leading to the dedicated Side Projects Index.

### 3.3 Company & Case Study System
*   **Company Detail Pages**:
    *   **Visual Logic**: Inherits the company's brand color schema for immersion.
    *   **Feature Previews**: List of key contributions with "Image Preview" slots for immediate visual context.
*   **Protected Case Studies**:
    *   **Dynamic Routing**: Unique URLs for each project (`/case-study/:id`).
    *   **Simulated Security**: A "Classified File" interface requiring a password to decrypt.
    *   **Error Handling**: "Access Denied" (Themed 404) states for invalid IDs, replacing silent redirects.
    *   **Contextual Data**: Loads specific "Declassified Memos" and metrics for each project.

### 3.4 Semantic Memory (The Agent)
*   **Interface**: A simulated RAG (Retrieval-Augmented Generation) module replacing the static "About" config.
*   **Functionality**: Users can query the system about the designer's background, returning "probability-based" answers in a CLI format.

### 3.5 System Manifest (CV)
*   **Concept**: A printable, high-contrast technical specification sheet.

### 3.6 Decryption Lens (Hand Tracking)
*   **Interaction**: A custom-built layer using MediaPipe Hands that translates webcam input into a global CSS mask.
*   **Stability**: Uses pinned MediaPipe versions and robust camera initialization (`onUserMedia`) to ensure reliability in production environments.
*   **Accessibility**: Provides `ESC` overrides and a failsafe "Exit Decryption" button.

### 3.7 Draggable Visuals
*   **Physics-based Motion**: Uses Framer Motion's `dragElastic` and `dragTransition` for tactile, high-fidelity interaction.
*   **Conflict Resolution**: Pure Framer Motion orchestration for all transforms to avoid standard CSS transition jitters.

## 4. Security & Privacy Measures
*   **Application Security**:
    *   **Simulated Authentication**: The "Protected Case Study" system uses client-side logic to simulate a secure environment. *Note: As a portfolio, the "password" is public knowledge (hinted in UI) to allow recruiter access while maintaining the "confidential" narrative.*
    *   **Client-Side Privacy**: No sensitive PII (Personally Identifiable Information) or proprietary company data is actually stored in the bundle. All "protected" metrics are anonymized or public-safe.
*   **deployment Security**:
    *   **HTTPS Enforcement**: All traffic is served over SSL via the hosting platform (Vercel/Netlify).
    *   **Source Integrity**: Codebase is version-controlled with strict main-branch protection policies (simulated via git workflow).

## 5. Non-Functional Requirements
*   **Usability & Accessibility**:
    *   **Heuristics**: Audited against Nielsen's 10 Usability Heuristics.
    *   **Error Recovery**: No silent redirects; dedicated "System Error" / "404" views for missing data.
    *   **Consistency**: Standardized `BackButton` logic across all detail views.
    *   **Accessibility**: Semantic `aria-label` attributes on all interactive elements.
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
*   **Computer Vision**: MediaPipe Hands (`@mediapipe/hands`).
*   **Animation**: Framer Motion (Gestures), Native CSS (Scroll).

## 7. Asset Requirements List

To maintain the system's "High-Fidelity" aesthetic, all assets must follow these strict specifications.

| Asset Type | Location | Aspect Ratio | Min Specs | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Identity Anchor** | Home Header / Draggable | **3:4** | `1200 x 1600 px` | Hero profile photo / interaction. |
| **Cluster Hero** | Company Detail Header | **16:9** | `1920 x 1080 px` | Background fallback for AI sims. |
| **Feature Preview** | Company Detail Project List | **16:9** | `1280 x 720 px` | Entry-point visual for case studies. |
| **Cinematic Hero** | Protected Case Study Hook | **21:9** | `2560 x 1080 px` | Ultra-wide impact visual. |
| **Film Strip Step** | Process / Process Section | **4:5** | `1000 x 1250 px` | "Vintage forensic" process shots. |
| **Annotated Screen** | Solution Section | **16:9** | `1920 x 1080 px` | Key interface solution highlights. |
| **Photo Evidence** | Research Case Study | **4:3 / 1:1** | `800 x 600 px` | Field research / physical artifacts. |

> [!TIP]
> Use high-contrast, slightly desaturated or industrial-themed photography to match "The Void" aesthetic. For interface screenshots, use a consistent background color or transparent PNGs.

## 8. Future Scope / Roadmap
*   **Blog/Notes System**: Fully functional CMS.
*   **Real-time Analytics**: Firebase tracking.
*   **Interactive Terminal**: CLI route.
