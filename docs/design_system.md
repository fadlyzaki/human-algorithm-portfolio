# 🧢 Human By Design - Design System v3.0

A comprehensive design system for Fadly Zaki's portfolio, embodying a cyberpunk aesthetic with human-centered design principles.

---

## 🎨 Color Palette

### Core Colors (from `src/index.css` variables)

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--bg-void` | `#111111` | `#F0F0F3` | Main background (Void) |
| `--bg-surface` | `#1F1F1F` | `#FFFFFF` | Secondary background |
| `--bg-card` | `#181818` | `#FFFFFF` | Card background |
| `--text-primary` | `#F4F4F5` | `#18181B` | Primary content (Zinc-100/900) |
| `--text-secondary` | `#A1A1AA` | `#52525B` | Muted content (Zinc-400/600) |
| `--border-color` | `#262626` | `#E4E4E7` | UI Boundaries |

### Accent Colors

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--accent-amber` | `#F59E0B` | `#D97706` | Primary Brand/Warning |
| `--accent-blue` | `#3B82F6` | `#2563EB` | Links, Actions |
| `--accent-green` | `#10B981` | `#059669` | Success, Systems Go, Open to Work |
| `--accent-red` | `#EF4444` | `#DC2626` | Errors, Critical |
| `--accent-amber` | `#F59E0B` | `#D97706` | Achievements, Awards, Warnings |

### Treasure Hunt Colors

| Type | Primary | Glow | Label |
|------|---------|------|-------|
| Gem | `#8B5CF6` (Purple) | Purple radial glow | GEM |
| Coins | `#F59E0B` (Gold) | Amber radial glow | COINS |
| Crown | `#EF4444` (Red) | Red radial glow | CROWN |
| Anchor | `#3B82F6` (Blue) | Blue radial glow | RELIC |

---

## 🔤 Typography

### Font Families

| Purpose | Font | Fallback |
|---------|------|----------|
| Headings | `font-mono` (system) | `monospace` |
| Body | `font-sans` (system) | `sans-serif` |
| Quotes/Notes | `font-serif` (system) | `serif` |

### Type Scale

| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| H1 (Hero) | `4xl` → `6xl` (responsive) | Bold | `tight` |
| H2 (Section) | `xl` | Mono | `wide` on hover |
| Body | `base` → `lg` | Light | Normal |
| Caption | `xs` → `sm` | Mono | `widest` |
| Label | `[8px]` → `[10px]` | Mono, Bold | `[0.2em]` |

### Text Styles

```css
/* Mono uppercase tracking */
.font-mono.uppercase.tracking-widest

/* Serif italic for quotes */
.font-serif.italic

/* System status text */
.text-xs.font-mono.text-[var(--text-secondary)].uppercase.tracking-widest
```

---

## 📐 Spacing System

Based on Tailwind defaults:

| Token | Value | Usage |
|-------|-------|-------|
| `gap-2` | 8px | Inline icons |
| `gap-3` | 12px | Status items |
| `gap-4` | 16px | Card padding |
| `gap-6` | 24px | Section margins |
| `gap-12` | 48px | Between major sections |
| `mb-16` | 64px | Hero bottom margin |
| `mb-40` | 160px | Large section gaps |

---

## 🧩 Components

### 1. Atomic UI (`src/components/ui`)
*   **IconMapper**: Centralized icon registry using Lucide React.
    *   Usage: `<IconMapper name="Code" className="w-4 h-4" />`
*   **SkeletonLine**: Loading state placeholder.
*   **WindowControls**: Mac-style window buttons (Red/Yellow/Green).
*   **DotGrid**: Background pattern generator.

### 2. Core Layout Components
*   **BackButton**: Standard navigation return with hover animation.
*   **SectionTitle**: Standardized heading with numbering (e.g., "01 / WORK").
*   **ScrollReveal**: Wrapper for scroll-triggered fade-in animations.
*   **Navbar (Rota-Style)**: Refined navigation with a sliding pill background and rotational spring physics. Supports terminal/document mode switching.

### 3. Feature Components
*   **AiryDiagram**: Clean, technical diagrams for case studies. Uses React Flow or SVG.
*   **VirtualAssistant (Vaki)**: Gemini 1.5 Flash-powered conversational AI sprite. Features real-time RAG chat UI and 1-click case-study cognitive load TL;DRs served securely via Vercel Edge functions.
*   **Diagrams Library**: A comprehensive set of specialized technical diagrams located in `src/components/diagrams/`, including:
    *   **ArchitectureDiagram**: System component relationships.
    *   **FlowDiagram**: Sequence and logic flows.
    *   **FunnelDiagram**: User conversion paths.
    *   **HierarchyDiagram**: Organizational or data structures.
    *   **TimelineDiagram**: Chronological events and roadmaps.
    *   **UI/Data/Ecosystem**: Specialized context diagrams.
*   **ProfileScanner**: Interactive "Identity Scan" effect in About page.
*   **Treasure**: Gamified hidden item component (Gems, Coins, Crowns).
*   **StickyNote**: Rotated, playful annotations.
*   **HandshakeTerminal**: Real-time protocol visualizer (`[SYN]`, `[SYN-ACK]`, `[ACK]`) for contact form initialization.
*   **MagneticTooltip**: Context-aware crosshair labels that track the cursor with zero latency.

### 4. ID Card (DraggablePhoto)
*   **Path**: `src/components/DraggablePhoto.jsx`
*   **Behavior**: Physics-based drag interaction with holographic sheen.
*   **Data**: Displays user identity and "Access Level 4".

### 5. Running Ticker
*   **Path**: `src/components/SystemMonitor.jsx` (and Footer)
*   **Behavior**: Infinite scrolling text for status updates (Location, Reading, Listening).

### 6. Mobile Navigation (FAB)
*   **Structure**: `[ Work | ☰ Menu | Contact ]`
*   **Behavior**: Quick access to primary conversion points without determining menu state.
*   **Status**: Static green dot (no pulses) to reduce cognitive load.

### 7. Achievements Section
*   **Path**: `src/pages/About.jsx`
*   **Style**: Amber-accented cards in 2-column grid.
*   **Differentiation**: Distinct from "Certifications" (Blue/Green) to highlight competitive awards.


---

## 🎭 Animations

### Keyframes

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Transitions

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Theme toggle | All | 500ms | Default |
| Hover effects | All | 300ms | Default |
| Card flip | Transform | 400ms | `circOut` |
| Sticky note | Rotation | 300ms | Default |

---

## 🖼️ Iconography

**Library:** Lucide React

### Common Icons

| Icon | Usage |
|------|-------|
| `MapPin` | Location status |
| `BookOpen` | Reading/Goodreads |
| `Headphones` | Listening/Music |
| `Activity` | Training/Strava |
| `PenLine` | Writing/Substack |
| `ScanEye` | Hand tracker activation |
| `Gem` | Treasure type |
| `Coins` | Treasure type |
| `Crown` | Treasure type |
| `Anchor` | Treasure type (Relic) |

**Icon Sizes:**
- Status ticker: `14px`
- Navigation: `18px` - `24px`
- Hero accents: `48px`+

---

## 📱 Responsive Breakpoints

```css
/* Mobile first */
sm: 640px   /* Tablet */
md: 768px   /* Desktop starts */
lg: 1024px  /* Wide desktop */
xl: 1280px  /* Max content width */
```

### Responsive Patterns

| Component | Mobile | Desktop |
|-----------|--------|---------|
| Hero grid | 1 column | 2 columns (`1fr 280px`) |
| ID Card | Hidden | Visible, draggable |
| Sticky notes | Stack | Side-by-side |
| Navigation | Hamburger menu | Full nav bar |

---

## 🌓 Theme System

### Implementation

```jsx
// ThemeContext.jsx
const [isDark, setIsDark] = useState(() => {
  const saved = localStorage.getItem('theme');
  if (saved !== null) return JSON.parse(saved);
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
});
```

### CSS Variable Application

```jsx
<main 
  data-theme={isDark ? 'dark' : 'light'}
  className="transition-colors duration-500"
>
```

---

## 🌐 Internationalization

**Supported Languages:** English (en), Indonesian (id)

### Translation Keys

```javascript
{
  home: {
    status_location: "Jakarta, Indonesia",
    status_reading: "Reading: Daring Greatly by Brené Brown",
    status_listening: "Let's get things done — together",
    status_training: "Running 5K & Swimming 1K Weekly",
    status_reflecting: "Reflecting on Life Weekly",
    status_collab: "Open to Collaboration",
    sticky_note: "Antidote to digital fatigue.",
    sticky_note_2: "Built for humans at their limit."
  }
}
```

---

## 🧢 Brand Elements

### Logo/Identity

- **Logo/Identity:** 🧢 Fadlyzaki
- **Tagline:** "Human By Design" / "Systems Thinker"
- **Favicon:** 🧢 SVG emoji

### ID Card Data

```
ROOT_ACCESS
HUMAN BY DESIGN
UZZAKI, FADLY 🧢
Product Designer // Systems Thinker
ID_NO: 1407-1995
ID_NO: 1407-1995
EXP: INDEFINITE
STATUS: ACTIVE
```

---

## 📄 Open Graph / SEO

```html
<title>Fadlyzaki Portfolio</title>
<meta property="og:image" content="/og-square.png" />
<meta property="og:description" content="Product Designer · Systems Thinker. I don't chase chaos—I contain it." />
```

---

## 🎯 Design Principles

1. **Privacy First** - All processing local (hand tracking)
2. **Graceful Degradation** - Fallbacks for all features and structural unit tests
3. **Accessible Defaults** - ESC shortcuts, keyboard navigation
4. **Performance** - Lazy loading, lite models, vitest coverage >0%
5. **Human-Centered** - Built for users "at their limit"

---

*Last updated: March 10, 2026*
*Version: 3.2 (Vitest Integration & Token Audit)*
