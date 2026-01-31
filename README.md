# Human Algorithm :: The Portfolio System

> **Bridging Computer Science logic with human behavior.**

Built as a high-performance, narrative-driven interface, this system serves as more than a portfolio—it is an exploration of "Design for Recovery," emphasizing resilience, system transparency, and human-centric feedback loops.

---

## 🛠 Engineering Core

This project is architected for speed, modularity, and immersive interactivity. It rejects "delight for the sake of delight," opting instead for functional aesthetics that respect the user's cognitive load.

-   **Runtime**: [React](https://react.dev/) + [Vite](https://vite.dev/) (Optimized for HMR and cold-start speed)
-   **Style Engine**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Variables (Atomic theme injection via `ThemeContext`)
-   **Computer Vision**: [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) (Driving the "Decryption Lens" interaction layer)
-   **Performance**: Route-based [Lazy Loading](https://react.dev/reference/react/lazy) and `Suspense` for critical-path optimization.
-   **Typography**: Variable font stacks (Sans/Serif/Mono) tailored for specific data hierarchy.

---

## 🛰 System Architecture

### 1. The Decryption Lens (CV Interaction)
A custom-built interaction layer using MediaPipe. It translates standard webcam input into a global CSS mask, allowing users to "scrub" through an encrypted UI layer to reveal the "True UI." 
- **Accessibility Logic**: Includes `ESC` overrides and a failsafe floating exit button for non-CV environments.

### 2. Editorial Case Study Framework
A structured 8-step narrative system defined in `portfolioData.js`. This allows for data-driven storytelling while maintaining a consistent visual rhythm across both visual and research-heavy projects.

### 3. Smart Navigation System
- **Scroll-Aware Navbar**: Uses `requestAnimationFrame` style logic (via standard scroll events) to hide/show based on scroll direction, maximizing reading real estate.
- **Route Persistence**: Integrated `ScrollToTop` higher-order component logic ensures consistent viewport state on navigation.

### 4. Semantic Memory Module
A simulated RAG (Retrieval-Augmented Generation) interface designed to replace static biographies with an interactive, terminal-style query system.

---

## 🚀 Deployment & Development

### Local Uplink
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (optimized assets)
npm run build

# Preview production build locally
npm run preview
```

### Production Standards
- **Standardized Radius**: `rounded-lg` (8px) across all modules for a cohesive industrial feel.
- **Interaction Model**: Every clickable element follows the Nielsen Heuristics for feedback and visibility.

---

**Designed & Engineered by [Fadly Uzzaki](https://github.com/fadlyzaki)**
*"Building systems that feel inevitable, not forced."*
