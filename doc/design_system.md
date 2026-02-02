# 🧢 Human By Design - Design System

A comprehensive design system for Fadly Zaki's portfolio, embodying a cyberpunk aesthetic with human-centered design principles.

---

## 🎨 Color Palette

### Core Colors (CSS Variables)

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--bg-primary` | `#0a0a0a` | `#F0F0F3` | Main background |
| `--bg-surface` | `#1a1a1c` | `#FFFFFF` | Cards, modals |
| `--bg-backdrop` | `rgba(10,10,10,0.8)` | `rgba(240,240,243,0.8)` | Overlay backgrounds |
| `--text-primary` | `#FFFFFF` | `#0a0a0a` | Headings, body |
| `--text-secondary` | `#888888` | `#666666` | Muted text |
| `--border-color` | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.1)` | Dividers, borders |

### Accent Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--accent-amber` | `#F59E0B` | Primary CTA, highlights |
| `--accent-blue` | `#3B82F6` | Links, listening status |
| `--accent-red` | `#EF4444` | Location pin, warnings |
| `--accent-green` | `#10B981` | Success, active status |

### Treasure Hunt Colors

| Type | Primary | Glow |
|------|---------|------|
| Gem | `#A855F7` (Purple) | Purple radial glow |
| Coins | `#F59E0B` (Gold) | Amber radial glow |
| Crown | `#EAB308` (Yellow) | Yellow radial glow |
| Anchor | `#14B8A6` (Teal) | Cyan radial glow |

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

### 1. ID Card (DraggablePhoto)

```
┌─────────────────────────────────┐
│ ○ PUNCH HOLE                    │
├─────────────────────────────────┤
│ ACCESS_LEVEL_4                  │
│ HUMAN BY DESIGN         [👤]   │
├─────────────────────────────────┤
│ ┌─────────┐            [CHIP]   │
│ │  PHOTO  │                     │
│ │ (B&W)   │   UZZAKI, FADLY 🧢  │
│ └─────────┘   Product Designer  │
│                                 │
│ ID_NO: 1407-1995   EXP: ∞      │
├─────────────────────────────────┤
│ ▌▌▌▌  ▌▌  ▌▌▌▌▌▌  ▌▌▌ ▌       │
└─────────────────────────────────┘
```

**Interactions:**
- Draggable (±100px constraint)
- Click to flip between 4 cards
- Holographic sheen on hover

### 2. Sticky Notes

```jsx
<StickyNote 
  text="Antidote to digital fatigue." 
  className="text-[var(--accent-blue)]" 
  rotate="lg:-rotate-2" 
/>
```

**Styling:**
- Background: `bg-[var(--bg-surface)]`
- Border: `border border-[var(--border-color)]`
- Shadow: `shadow-xl`
- Rotation: `-2°` to `+2°`
- Hover: Straightens to 0°

### 3. Running Ticker

```
┌────────────────────────────────────────────┐
│ 📍 Jakarta • 📖 Reading... • 🎧 Listening │
│ ─────────────────────────────────────────→ │
└────────────────────────────────────────────┘
```

**Configuration:**
- Animation: `60s linear infinite marquee`
- Pause on hover
- Edge gradients fade content
- All items clickable (external links)

### 4. Treasure Hunt Items

**States:**
- Unfound: Glowing orb with pulse animation
- Revealed: Holographic message box
- Found: Green badge with checkmark

**Positioning:**
- Random within 10-70% viewport
- Re-randomizes on reset trigger

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

- **Emoji:** 🧢 (Billed Cap)
- **Tagline:** "Human By Design"
- **Favicon:** 🧢 SVG emoji

### ID Card Data

```
ACCESS_LEVEL_4
HUMAN BY DESIGN
UZZAKI, FADLY 🧢
Product Designer // SysOp
ID_NO: 1407-1995
EXP: INDEFINITE
```

---

## 📄 Open Graph / SEO

```html
<title>Fadlyzaki 🧢 Human By Design</title>
<meta property="og:image" content="/og-preview.png" />
<meta property="og:description" content="Product Designer · Systems Thinker. I don't chase chaos—I contain it." />
```

---

## 🎯 Design Principles

1. **Privacy First** - All processing local (hand tracking)
2. **Graceful Degradation** - Fallbacks for all features
3. **Accessible Defaults** - ESC shortcuts, keyboard navigation
4. **Performance** - Lazy loading, lite models
5. **Human-Centered** - Built for users "at their limit"

---

*Last updated: February 2026*
*Version: 2.0 (Human By Design)*
