# Navbar

## Metadata
- **Name**: Navbar
- **Category**: Navigation
- **Status**: Stable
- **File**: `src/components/Navbar.jsx`

## Overview
Global navigation bar. Fixed to top (72px height). Contains logo, nav links, theme toggle, and language switcher.

### When to use
- Every page uses Navbar as the top-level navigation

### When NOT to use
- N/A — singleton component

## Anatomy
1. **Logo** — brand mark + text
2. **Nav Links** — route links
3. **Actions** — theme toggle, language switch
4. **Back Button** (optional) — for subpages

## Tokens Used
| Token | Property |
|-------|----------|
| `--bg-void` | background |
| `--border-color` | bottom border |
| `--text-primary` | active link |
| `--text-secondary` | inactive link |
| `--accent` | hover state |

## States
| State | Visual |
|-------|--------|
| Default | Transparent/blur background |
| Scrolled | Solid background with border |
| Mobile | Hamburger menu expanded |

## Props
| Prop | Type | Description |
|------|------|-------------|
| `backPath` | `string` | Path for back navigation |
| `title` | `string` | Override display title |

## Cross-references
- `ScrollProgressBar` — often paired for scroll indication
- `NavigationMenu` — mobile menu overlay
