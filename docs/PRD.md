# Product Requirements Document (PRD): Human Algorithm v7.0

## 1. Executive Strategy & Vision
**Product Name:** Human Algorithm (Portfolio Platform)
**Product Owner:** Fadly Uzzaki (Senior Product Designer · Trust Engineering)
**Target Domain:** B2B System Design & High-Converting Talent Acquisition Assets

### The North Star
The "Human Algorithm" is not a standard digital portfolio—it is an *Interactive Manifesto* and our primary acquisition wedge. We are building a high-performance, narrative-driven platform that physically deploys our core thesis: "Designing where software logic meets human intuition." 

This product serves as undeniable, executable proof of work. It is designed to survive the highest levels of scrutiny from executive leadership (Product, Design, and Engineering), proving the ability to ingest chaotic business requirements, tame systemic complexity, and output deeply resilient, accessible workflows that drive measurable conversion.

## 2. Market Positioning & Ideal Customer Profile (ICP)
Every pixel must serve a conversion goal. We have segmented our product positioning to target three highly specific user archetypes:

1. **The Technical Recruiter (High Frequency / Low Attention)**
   * **The Need:** Immediate extraction of signal (hire/no-hire) in under 30 seconds.
   * **The Solution:** A dedicated "Recruiter Fast-Path" (`?recruiter=true`) that strips all transition animations, typewriter delays, and visual noise to enforce a pure, hyper-scannable data view. Paired with a 100% ATS-optimized, single-click printable "System Manifest" (CV Engine).
2. **The Head of Product / VP of Design (High Depth / Strategic Scrutiny)**
   * **The Need:** Validation of deeply structural, product-led thinking and business outcome generation.
   * **The Solution:** The `ProtectedCaseStudy` module, which forces a strict 5-step strategic narrative layout (Research → Insight → Design → Ship → Measure) focusing purely on ROI, operational efficiency, and scalable component architecture.
3. **The Design Technologist / CTO Peer (High Engagement / Viral Catalyst)**
   * **The Need:** Demonstration of technical excellence, zero-tolerance for "slop," and modern stack mastery.
   * **The Solution:** Fluid 60fps Framer Motion physics, dynamic Edge-rendered SVGs, and an unyielding commitment to >90 Mobile Real Experience Scores (RES). 

## 3. Core OKRs & Success Metrics
**Objective 1: Extreme Performance, Resilience, & Frictionless Accessibility**
* **Key Result 1:** Maintain Core Web Vitals at peak limits (LCP < 2.5s, FID < 100ms) on mobile 3G, holding a Real Experience Score (RES) of >90.
* **Key Result 2:** 100% Graceful Degradation rate (e.g., visual physics or heavy WebGL components safely falling back to standard semantic HTML).
* **Key Result 3:** Maintain a >0% functional reliability baseline through `vitest`, ensuring zero structural regressions across core modules.

**Objective 2: Maximized Conversion Protocol**
* **Key Result 1:** >15% click-through rate from the Homepage priority funnels directly to the ATS-Compliant System Manifest.
* **Key Result 2:** Average session duration >45 seconds on primary Case Study pages, indicating deep engagement with the strategic methodology.
* **Key Result 3:** 100% semantic parsing success rate of the printable CV by enterprise ATS systems (Workday, Greenhouse, Lever).

## 4. Product Risk Management & Governance
* **Cognitive Load Liability:** Interactive features (like terminal intros and chaos sliders) carry the risk of becoming gimmicks that block the critical path. **Mitigation:** Strict structural affordances (e.g., explicit generic UI drag handles) and omnipresent "Skip to Content" kill-switches.
* **Performance Debt:** Introduction of complex physics must not break the UX. **Mitigation:** Strict enforcement of CSS hardware acceleration (`translate3d`) and an absolute freeze on DOM-thrashing layout mutations.
* **Privacy Compliance:** Any integrated camera stream or computer vision processing must remain strictly ephemeral and client-bound. Absolute lifecycle cleanup occurs dynamically upon unmount.

## 5. Product Architecture & Information Architecture (IA)

### 5.1 Homepage Conversion Funnel
The primary surface follows a "Priority-First" narrative flow designed to hook, validate, and convert:
1.  **Level 0 (Hero Anchor)**: Immediate Identity validation and "Contain Chaos" positioning featuring a draggable, generative interactive ID card to establish immediate technical credibility.
2.  **Level 1 (Work - The Revenue Generator)**: Validated, large-scale industrial excellence (The Workforce/Commerce/Efficiency Ecosystems) surfaced via high-density `WorkHoloDeck` component cards. Here we prove business value.
3.  **Level 2 (Experiments & Explorations - The R&D Lab)**: High-creativity, rapid-iteration experiments (previously 'Side Projects'). Proves an innate curiosity and mastery of emerging patterns without diluting the core enterprise message.
4.  **Level 3 (About Me - The Cultural Fit)**: Bento Grid layout highlighting Bio Narrative, Philosophy, and Runtime Metrics.
5.  **Level 4 (Unprovoked Thoughts - External Thought Leadership)**: Professional logs and intellectual pattern recognition hosted natively via MDX.

### 5.2 System Manifest v2.0 (The CV Strategy)
*   **Single Source of Truth (SSOT)**: The CV dynamically mirrors the `portfolioData.js` object model. We do not permit manual data duplication. 
*   **ATS Optimization**: We utilize standard industry taxonomies (Professional Experience, Skills, Education) and pipe-separated terminologies to hack ATS parsing algorithms and ensure top-tier ranking in recruiter dashboards.
*   **Print Stylesheet (v2.5)**: A comprehensive `@media print` CSS engine designed for absolute ATS/HRD readability: Replaces custom fonts with standard serif/sans-serif fallbacks, aggressively hides all decorative nodes, and forces a clean A4 standard margin.

### 5.3 Technical Product Foundations
*   **Render Engine**: Vite-powered React engine layered with aggressive lazy loading (`React.lazy()`) to ensure near-instant page transitions, preserving user momentum down the funnel.
*   **Dynamic OpenGraph (v3.5)**: We treat social sharing as a primary marketing channel. Vercel Edge Middleware detects 20+ social crawler bots and serves dynamically generated (`@vercel/og`), route-specific 1200×630 branded preview images to maximize external click-through rates.
*   **Security & Sanitization**: Strict sandboxing. We removed all unsafe HTML injections in favor of a sanitized `RichText` rendering component.
*   **Live Schematics**: We discarded heavy PNG assets in favor of `AiryDiagram.jsx`, a proprietary SVG charting engine that compiles technical architecture into dynamic <5KB payloads that inherently respect the user's system theme preferences.

## 6. Product Capability Matrix (The "Aha" Moments)

Instead of a static gallery, this platform achieves conversion through sequenced, interactive feature narratives. Each sub-system is designed to answer a specific objection standard to high-level hiring processes.

### 6.1 The Identity Engine: Generative Interactive Personas
*   **The Feature**: The `DraggablePhoto.jsx` component acting as the hero anchor.
*   **The Narrative**: To instantly establish technical supremacy, the static headshot is replaced with a polymorphic, draggable ID card engine. The system programmatically generates 7 distinct design architectures (Industrial, Cyberpunk, Glassmorphism, Swiss, Retro, Neo-Brutalism, Holographic). This proves multi-variant design system capabilities and immediate tactile control via Framer Motion physics, answering the question: *"Can this designer adapt to our brand?"*

### 6.2 The Competency Engine: Narrative Case Studies
*   **The Feature**: The `ProtectedCaseStudy` pipeline supported by dynamic SVG diagrams (`AiryDiagram.jsx`) and interactive prototypes.
*   **The Narrative**: Executive stakeholders require strategic depth. The platform funnels massive amounts of complex workflow data (from STOQO, GudangAda, Lumina) into an accessible 5-step narrative format (Research → Insight → Design → Ship → Measure). Heavy, unscalable raster images are dynamically discarded in favor of lightweight, mathematically generated SVGs that adapt to system themes. This proves deep organizational empathy and an understanding of product lifecycles.

### 6.3 The Empathy Engine: Multi-Modal AI Brainstorming
*   **The Feature**: The `AIBrainstorm` dialogue interface embedded within historical case studies.
*   **The Narrative**: Showing past work isn't enough; leaders want to know how a candidate thinks *today*. By simulating a live chat dialogue between the human operator and an "AI Collaborator", the platform actively critiques its own past architecture, providing 5 forward-facing, multi-modal hypotheses per case study. It demonstrates profound strategic flexibility and an aggressive readiness for AI-native agentic workflows.

### 6.4 The Validation Engine: Neural Echo & System Operations
*   **The Feature**: The centralized `NeuralEcho.jsx` component functioning as a fast-response semantic FAQ, paired with the `ProfileScanner` capability matrix.
*   **The Narrative**: The "About" section is decoupled from the standard narcissistic bio sequence, transformed instead into a System Operations dashboard. Visitors "interrogate" the `NeuralEcho` semantic memory (tuned to a 5ms visceral delivery rate) to extract specific insights on methodology. Meanwhile, the `ProfileScanner` resolves from an interactive low-res pixel matrix into a high-res portrait, tangibly illustrating the transformation of "Chaos" into "Structure."

### 6.5 The Frictionless Pipeline: Recruiter Fast-Path
*   **The Feature**: The universal `?recruiter=true` bypass and the single-click CV Generation Modal.
*   **The Narrative**: Recognizing that recruitment pipelines operate on 30-second decision windows, the system offers a backdoor payload intercept. This global tactical override instantly zeroes out all transition delays, typing animations, and immersive WebGL blockers to provide a raw, high-speed data stream to busy hiring managers. This is true empathy applied at the network edge.
 
### 6.6 The Publishing Engine: Integrated MDX CMS
*   **The Feature**: The Custom MDX Content Management System powering the `Unprovoked Thoughts` section.
*   **The Narrative**: True subject-matter expertise requires a publishing cadence. Instead of linking out to external platforms, the system retains horizontal control via a native, statically compiled MDX architecture. This demonstrates full-stack capability and ensures that thought leadership assets feed the platform’s core SEO directly.

### 6.7 Global Addressability: Zero-Reload Localization
*   **The Feature**: The `LanguageContext` `en`/`id` toggle.
*   **The Narrative**: Global operations demand global context. A seamless, client-side bilingual toggle expands addressable market penetration instantly across two major language demographics (English and Indonesian) without triggering hard page reloads, preserving user flow and deep-linking architecture perfectly intact.

### 6.8 The Narrative Gateway: Chaotic Terminal Intro
*   **The Feature**: The `ChaosToMatrixIntro.jsx` and `TerminalIntro.jsx` boot sequence.
*   **The Narrative**: Setting the tone is critical. The user's journey begins with a highly stylized, chaotic terminal sequence that programmatically resolves into an organized, structured UI. This is not mere loading animation; it’s an interactive metaphor proving the core thesis regarding "taming systemic complexity." Crucially, strict semantic Kill-Switches (`[ Skip to Content ]`) guarantee zero heuristic entrapment for impatient users.

### 6.9 The Analog Bridge: 3D Physical Rendering
*   **The Feature**: The custom `Flipbook.jsx` engine powering the `/sketches` Archive route.
*   **The Narrative**: Proving absolute technical proficiency requires rendering complex multi-dimensional physics without dropping frames. The Archive transforms static creative explorations into a fully interactive, GPU-accelerated 3D CSS flipbook that dynamically manages its own Z-index memory to prevent mobile overdraw. It proves the ability to translate analog paradigms into digital realities flawlessly.

### 6.11 The Intelligence Engine: The Companion Protocol
*   **The Feature**: The sprite-based `VirtualAssistant.jsx` companion system.
*   **The Narrative**: To demonstrate readiness for the Agentic Era, we implemented an autonomous companion that recognizes user context. By mapping `location.pathname` to tailored translation strings, the assistant provides real-time "Pair Design" commentary. This proves the ability to architect complex, state-aware AI interfaces that enhance rather than distract from the core user journey.

### 6.12 The Kinetic Engine: Global Scroll-Track Navigation
*   **The Feature**: The persistent `ScrollJourneyGuide.jsx` kinetic navigator.
*   **The Narrative**: Standard navigation is static. We engineered a horizontal "scroll-track" where a 1/8th scale sprite travels based on document depth. Utilizing `useSpring` logic for momentum and section-aware labels, it provides a physical, tactile sense of progress. This demonstrates mastery of motion design and cognitive spatial awareness in large-scale digital environments.

### 6.13 The System Ledger: Extracted ATS Manifest
*   **The Feature**: The `/cv` System Manifest route utilizing aggressive `@media print` CSS optimization.
*   **The Narrative**: High-concept design often fails enterprise HR algorithms. The System Manifest engine actively strips the complex React UI down to a bare HTML matrix. By leveraging exact ATS-compliant taxonomies (pipe-separated values, strict semantic grouping), it guarantees 100% parsing success rates by Workday, Greenhouse, and Lever when downloaded to PDF.

### 6.14 The Component Blueprint: Design System Verification
*   **The Feature**: The dedicated `/design-system` interactive route.
*   **The Narrative**: Modern engineering leadership requires systemic scalability. By permanently hosting a live, explorable "Design System Viewer", the platform proves that every UI element is tethered to strict, deterministic token guidelines (e.g., `var(--bg-void)`). Version 3.5.0 introduces dedicated documentation for Agentic and Kinetic primitives, proving that even our most experimental features are built on resilient, documented foundations.

## 7. UX Audit Post-Mortem & System Governance
Following a rigorous adversarial UX audit leveraging recognized heuristic frameworks, the following strategic upgrades were deployed to eliminate cognitive friction:
*   **Affordance Clarity**: Added physical grip visuals to the `ChaosSlider` to resolve ambiguous interactivity signals.
*   **Signal-to-Noise Optimization**: Deeply purged superfluous "cyberpunk" decorative text from the UI to ensure the highest-value data (the insights) commands the absolute visual hierarchy.
*   **Structural Fail-Safes**: Implemented an immediate, highly-visible `[ Skip to Content ]` fallback in the boot-up sequence, ensuring users maintain ultimate agency over the timeline.
*   **Monolithic Deconstruction**: Aggressively factored the `About.jsx` UI into strict single-responsibility grids.

## 8. Strategic Roadmap

### Phase 1: Foundation & Identity (Active & Verified)
*   **[COMPLETED]** UX Kill-Switch Audit execution and friction eradication (e.g., Immediate `Skip to Content`).
*   **[COMPLETED]** Universal Market Fit & Recruiter Fast Path (`?recruiter=true`) architectural bypass integration.
*   **[COMPLETED]** Dynamic OpenGraph and Edge-based social scaling.
*   **[COMPLETED]** CMS Pipeline Integration: Migrated to a localized MDX rendering engine for bespoke typography.
*   **[COMPLETED]** Structural Reliability: Established `vitest` suite with `jsdom` API mocking to guarantee 100% DOM-rendering safety.

### Phase 2: Autonomous Intelligence & Spatial Adaptation (COMPLETED)
*   **[COMPLETED] The Companion Protocol**: Implemented a context-aware AI assistant with localized route-mapping.
*   **[COMPLETED] Kinetic Navigation**: Deployed spring-physics-driven scroll track for tactile spatial awareness.
*   **[COMPLETED] Agentic Design System**: Documented all new kinetic and agentic primitives in the Design Kernel.
*   **[COMPLETED] v7.0 System Synchronization**: Unified versioning and narrative across all project indices.

### Phase 3: Advanced Agentic Workflow & Predictive UX (Q3-Q4 2026)
*   **[Q3 2026] Algorithmic Role Alignment (Dynamic IA)**: Implement Edge-based intent detection. By appending a job description URL (e.g., `?jd=role-link`), the system autonomously parses the requirements via an embedded LLM, reorders the case study hierarchy, and highlights specific skills to match.

### Phase 3: Biometric UX & Hyper-Dimensional Physics (Q4 2026 - 2027)
*   **[Q4 2026] WebGPU Physicality Engine**: Migrate the `Flipbook` and `AiryDiagram` DOM nodes into a custom Rust-compiled WebGPU renderer. This bypasses the DOM entirely, allowing the OS to render complex, fluid-dynamics-based typography and 10,000+ interactive data nodes that react directly to the device's exact thermal and memory capacities in real-time.
*   **[Q1 2027] Biometric Intent (BCI Prototype)**: Research integration via the Web Bluetooth API with non-invasive Brain-Computer Interfaces (e.g., Neurosity Crown/Muse). The UI will preemptively scroll and expand case studies based purely on the user's measurable state of focus, completely eliminating the need for trackpad/mouse inputs.
*   **[Q2 2027] Distributed Portfolio Clustering (The Swarm)**: Decentralize the portfolio architecture so that if a recruiter shares the link with a colleague, the two active sessions establish a peer-to-peer WebRTC connection. Both users exist simultaneously in the same "session," able to see each other's cursor movements and collaboratively review the system manifesto in a shared spatial environment.
*   **[Q3 2027] Zero-Knowledge Proof (ZKP) Credentials [Web3 Core]**: Decouple the portfolio's "System History" (work experience, certifications) from the centralized codebase by deploying it entirely on-chain. Implement a ZK-SNARK protocol allowing recruiters to verify the cryptographic authenticity of your work history (e.g., employment at GudangAda) instantly via a smart contract, without exposing underlying personal contracts or raw data blocks.

---
**Document Status**: *ACTIVE*  
**Product Strategy**: Fadly Uzzaki  
*Optimizing for human bandwidth. Operating at the intersection of complex constraints and profound simplicity.*
