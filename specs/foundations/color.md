# Color Tokens

## Core Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--bg-void` | `#ffffff` | `#050505` | Page background, deepest layer |
| `--bg-surface` | `#f9fafb` | `#111111` | Card backgrounds, elevated surfaces |
| `--bg-card` | `#ffffff` | `#1a1a1a` | Card containers |
| `--text-primary` | `#111827` | `#f3f4f6` | Headings, body text |
| `--text-secondary` | `#6b7280` | `#9ca3af` | Muted labels, descriptions |
| `--border-color` | `#e5e7eb` | `#374151` | Dividers, card borders |

## Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--accent-red` | `#ef4444` | Errors, destructive actions |
| `--accent-blue` | `#3b82f6` | Info, links, interactive |
| `--accent-amber` | `#f59e0b` | Warnings, in-progress |
| `--accent-green` | `#10b981` | Success, operational |
| `--accent-purple` | `#8b5cf6` | Code syntax, special |

## Layer 2 Aliases

| Alias | Maps To | Usage |
|-------|---------|-------|
| `--color-text` | `var(--text-primary)` | Default text |
| `--color-text-muted` | `var(--text-secondary)` | Muted text |
| `--color-bg` | `var(--bg-void)` | Default background |
| `--color-surface` | `var(--bg-surface)` | Surface background |
| `--color-success` | `var(--accent-green)` | Success states |
| `--color-warning` | `var(--accent-amber)` | Warning states |
| `--color-error` | `var(--accent-red)` | Error states |
| `--color-info` | `var(--accent-blue)` | Info states |

## Rules
- Never use raw hex values in components
- Always reference Layer 2 aliases or Layer 1 tokens
- Dark mode is handled automatically via `.dark` class override
