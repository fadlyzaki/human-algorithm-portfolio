# Token Reference — Master Map

> Complete map of every CSS variable in the system, its value, and when to use it.

## Colors — Core

| Token | Light | Dark | Category |
|-------|-------|------|----------|
| `--bg-void` | `#ffffff` | `#050505` | Background |
| `--bg-surface` | `#f9fafb` | `#111111` | Background |
| `--bg-card` | `#ffffff` | `#1a1a1a` | Background |
| `--text-primary` | `#111827` | `#f3f4f6` | Text |
| `--text-secondary` | `#6b7280` | `#9ca3af` | Text |
| `--border-color` | `#e5e7eb` | `#374151` | Border |
| `--accent-red` | `#ef4444` | – | Semantic |
| `--accent-blue` | `#3b82f6` | – | Semantic |
| `--accent-amber` | `#f59e0b` | – | Semantic |
| `--accent-green` | `#10b981` | – | Semantic |
| `--accent-purple` | `#8b5cf6` | – | Semantic |

## Colors — Aliases (Layer 2)

| Token | Maps To |
|-------|---------|
| `--color-text` | `var(--text-primary)` |
| `--color-text-muted` | `var(--text-secondary)` |
| `--color-bg` | `var(--bg-void)` |
| `--color-surface` | `var(--bg-surface)` |
| `--color-card` | `var(--bg-card)` |
| `--color-border` | `var(--border-color)` |
| `--color-accent` | `var(--accent-green)` |
| `--color-success` | `var(--accent-green)` |
| `--color-warning` | `var(--accent-amber)` |
| `--color-error` | `var(--accent-red)` |
| `--color-info` | `var(--accent-blue)` |

## Spacing

| Token | Value |
|-------|-------|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |

## Typography

| Token | Value |
|-------|-------|
| `--font-sans` | Inter, system-ui |
| `--font-mono` | JetBrains Mono |
| `--font-display` | Inter Tight |
| `--text-xs` | `0.625rem` (10px) |
| `--text-sm` | `0.75rem` (12px) |
| `--text-base` | `0.875rem` (14px) |
| `--text-md` | `1rem` (16px) |
| `--text-lg` | `1.25rem` (20px) |
| `--text-xl` | `1.5rem` (24px) |
| `--text-2xl` | `2rem` (32px) |
| `--text-3xl` | `2.5rem` (40px) |
| `--text-4xl` | `3rem` (48px) |
| `--text-5xl` | `3.75rem` (60px) |
| `--text-6xl` | `4.5rem` (72px) |
| `--weight-normal` | 400 |
| `--weight-medium` | 500 |
| `--weight-semibold` | 600 |
| `--weight-bold` | 700 |
| `--weight-black` | 900 |
| `--leading-tight` | 0.9 |
| `--leading-snug` | 1.1 |
| `--leading-normal` | 1.5 |
| `--leading-relaxed` | 1.625 |
| `--tracking-tight` | -0.05em |
| `--tracking-normal` | 0em |
| `--tracking-wide` | 0.05em |
| `--tracking-widest` | 0.1em |

## Border Radius

| Token | Value |
|-------|-------|
| `--radius-none` | `0px` |
| `--radius-sm` | `2px` |
| `--radius-md` | `4px` |
| `--radius-lg` | `8px` |
| `--radius-xl` | `12px` |
| `--radius-full` | `9999px` |

## Elevation

| Token | Value |
|-------|-------|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` |
| `--shadow-sm` | `0 2px 4px rgba(0,0,0,0.06)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.16)` |
| `--shadow-glow` | `0 0 15px -5px var(--accent-green)` |

## Z-Index

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 0 | Default stacking |
| `--z-raised` | 10 | Cards, raised elements |
| `--z-dropdown` | 20 | Dropdowns, popovers |
| `--z-sticky` | 30 | Sticky headers |
| `--z-overlay` | 40 | Sidebar, navigation |
| `--z-modal` | 50 | Modals, dialogs |
| `--z-toast` | 60 | Notifications |
| `--z-cursor` | 9999 | Cursor effects |

## Motion

| Token | Value |
|-------|-------|
| `--duration-instant` | `100ms` |
| `--duration-fast` | `200ms` |
| `--duration-normal` | `300ms` |
| `--duration-slow` | `500ms` |
| `--duration-glacial` | `1000ms` |
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--ease-elastic` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
