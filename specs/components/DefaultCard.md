# DefaultCard

## Metadata
- **Name**: DefaultCard
- **Category**: Container
- **Status**: Stable
- **File**: `src/components/cards/DefaultCard.jsx`

## Overview
Primary container component used across the portfolio. Renders project cards with system-themed chrome (title bar, status indicators).

### When to use
- Displaying project entries in grid/list layouts
- Wrapping content that needs card-level elevation

### When NOT to use
- For inline content — use raw `div` with border tokens
- For modal dialogs — use dedicated overlay patterns

## Anatomy
1. **Chrome Bar** — title, type badge, status dot
2. **Content Area** — slot for child content
3. **Border** — uses `--border-color`, hover → `--accent`

## Tokens Used
| Token | Property |
|-------|----------|
| `--bg-card` | `background-color` |
| `--border-color` | `border-color` |
| `--text-primary` | heading color |
| `--text-secondary` | metadata color |
| `--accent` | hover border, active state |

## States
| State | Visual |
|-------|--------|
| Default | `border-[var(--border-color)]` bg-card |
| Hover | `border-[var(--accent)]`, shadow lift |
| Expanded | Full-height content visible |

## Code Example
```jsx
<DefaultCard type="SYSTEM_AUDIT" expanded={true} showChrome={true} />
```

## Cross-references
- `SystemMonitor` — often used inside DefaultCard
- `VentureCard` — alternative card variant for ventures
