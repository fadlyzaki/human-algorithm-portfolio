---
name: The Human Algorithm Portfolio
description: Interactive architecture portfolio for product design, trust engineering, B2B complexity, accessibility, and performance craft.
colors:
  bg-void-light: "#FAF9F6"
  bg-surface-light: "#FFFFFF"
  bg-card-light: "#FFFFFF"
  text-primary-light: "#18181B"
  text-secondary-light: "#52525B"
  border-light: "#E4E4E7"
  bg-void-dark: "#0A0A0C"
  bg-surface-dark: "#1F1F1F"
  bg-card-dark: "#27272A"
  text-primary-dark: "#F4F4F5"
  text-secondary-dark: "#A1A1AA"
  border-dark: "#3F3F46"
  accent-red: "#DC2626"
  accent-blue: "#2563EB"
  accent-amber: "#F59E0B"
  accent-green: "#10B981"
  accent-purple: "#8B5CF6"
  accent-sky: "#0EA5E9"
  accent-pink: "#EC4899"
  accent-orange: "#F97316"
  accent-indigo: "#6366F1"
  accent-teal: "#14B8A6"
typography:
  sans: "Inter, system-ui, -apple-system, sans-serif"
  mono: "JetBrains Mono, Fira Code, monospace"
  display: "Inter, system-ui, -apple-system, sans-serif"
radii:
  none: "0px"
  sm: "0.125rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  full: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  xxl: "4rem"
---

# Design System

## 1. Overview

The portfolio uses a light/dark token bridge built from CSS custom properties in `src/index.css`, with Tailwind utilities consuming those variables through the app. The system reads as a precise, resilient product surface rather than a generic portfolio: restrained neutral backgrounds, high-contrast text, compact radii, intentional borders, and signature interaction components such as recruiter mode, case-study architecture views, side-project detail pages, sketches, and the Echo.Z assistant layer.

The visual system should preserve the current identity: Inter-based type, structured information density, tokenized color roles, resilient motion, and portfolio-specific proof-of-work components. New design work should amplify clarity and evidence before decoration.

## 2. Colors

Use semantic tokens, not raw hex values in components. The current source tokens bridge light and dark themes:

- Backgrounds: `--bg-void`, `--bg-surface`, and `--bg-card`.
- Text: `--text-primary`, `--text-secondary`, and `--text-inverse`.
- Borders and rings: `--border-color`, focus rings, and subtle tokenized outlines.
- Accents: red, blue, amber, green, purple, sky, pink, orange, indigo, and teal.

Light mode is warm off-white and zinc-neutral: `#FAF9F6`, `#FFFFFF`, `#18181B`, `#52525B`, `#E4E4E7`.

Dark mode is near-black and zinc-neutral: `#0A0A0C`, `#1F1F1F`, `#27272A`, `#F4F4F5`, `#A1A1AA`, `#3F3F46`.

Accent color should communicate meaning or route context. Avoid broad decorative glow. Prefer small, precise accent commitments on badges, state markers, timelines, focus rings, and evidence callouts.

## 3. Typography

Primary typography is Inter through `--font-sans` and `--font-display`, with JetBrains Mono or Fira Code through `--font-mono` for technical labels, data, and code-like system cues.

The scale in `src/index.css` runs from `--text-xs` through `--text-6xl`, with display type reserved for true hero or route-opening moments. Components should use smaller, tighter headings, especially cards, sidebars, filters, and dense proof-of-work surfaces.

Use:

- Strong heading hierarchy with clear route-level H1s.
- Tight but readable line heights for system copy.
- Monospace sparingly for labels, slugs, technical metadata, and evidence tags.
- No negative letter spacing unless the existing token explicitly requires it.

## 4. Elevation

Elevation is restrained. The system prefers borders, surface contrast, and small shadows over floating card stacks. Available shadow tokens include `--shadow-xs`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`, and `--shadow-glow`, but glow should be exceptional and tied to meaningful interaction or focus.

Radii are constrained: `none`, `sm`, `md`, `lg`, `xl`, and `full`. Cards and repeated content should stay compact and precise. Avoid oversized rounded panels that make the portfolio feel template-like.

Motion should follow the existing duration and easing tokens. Respect reduced-motion behavior, defer heavy work, and avoid animations that compete with reading or damage recruiter scanning.

## 5. Components

The system is built from portfolio-specific surfaces, not generic landing-page blocks:

- Recruiter mode and CV paths: fast, scannable, credibility-first routes for evaluation.
- Work clusters: commerce, workforce, and efficiency pages that group case-study evidence.
- Case-study detail pages: structured product architecture narratives with context, decisions, constraints, and outcomes.
- Side-project pages: proof-of-work surfaces for experiments, prototypes, and personal systems.
- Thoughts and blog routes: writing surfaces that should remain readable, focused, and accessible.
- Echo.Z assistant layer: should feel like a resilient helper, not a novelty overlay.
- Design-system route and sketches: demonstrate craft without undermining performance or comprehension.

Components should expose strong page structure, preserve token usage, and make interactive affordances obvious through visible focus, hover, active, loading, and empty/error states.

## 6. Do's and Don'ts

Do:

- Use CSS variables and Tailwind utilities that reference the established token system.
- Preserve light/dark parity and verify contrast in both modes.
- Keep responsive layouts stable at mobile `390x844`, tablet `768x1024`, and desktop `1280x900`.
- Treat recruiter mode, CV, and contact flows as core product paths.
- Prefer borders, rhythm, hierarchy, and precise copy over decorative spectacle.
- Preserve accessibility basics: semantic landmarks, unique H1s, keyboard focus, target sizing, alt text, and reduced motion.

Don't:

- Add generic portfolio-card layouts, decorative AI glow, bokeh blobs, or stock-feeling visual filler.
- Introduce raw hex colors in components when tokens exist.
- Add motion that hides content, delays evaluation, or creates mobile jank.
- Use large nested cards or card-in-card structures for page sections.
- Make pages read as a one-note color theme or a template clone.
- Treat generated output, prototypes, or visual experiments as an excuse to bypass performance and accessibility rules.
