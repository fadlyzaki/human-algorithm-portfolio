# Elevation / Shadow Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift, inline elements |
| `--shadow-sm` | `0 2px 4px rgba(0,0,0,0.06)` | Cards at rest |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Hovered cards, dropdowns |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Modals, overlays |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.16)` | Hero elements, floating panels |
| `--shadow-glow` | `0 0 15px -5px var(--accent-green)` | Active/focus glow effect |

## Rules
- Default card state: `--shadow-sm`
- Hover state: transition to `--shadow-md`
- Modals and overlays: `--shadow-lg`
- Glow effects use `--shadow-glow` with color override
