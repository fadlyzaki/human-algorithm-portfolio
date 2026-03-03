# Motion Tokens

## Durations

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-instant` | `100ms` | Micro-interactions, opacity toggles |
| `--duration-fast` | `200ms` | Hover states, toggles |
| `--duration-normal` | `300ms` | Default transitions, color changes |
| `--duration-slow` | `500ms` | Layout shifts, page transitions |
| `--duration-glacial` | `1000ms` | Complex reveal animations |

## Easing Curves

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard transitions |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations |
| `--ease-elastic` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful pop, scale bounces |

## Animation Classes (index.css)

| Class | Duration | Timing | Usage |
|-------|----------|--------|-------|
| `.airy-float` | 4s | ease-in-out | Floating elements |
| `.airy-pulse` | 3s | ease-in-out | Status indicators |
| `.airy-breathe` | 3s | ease-in-out | Subtle opacity pulse |
| `.airy-spin` | 40s | linear | Background decorations |
| `.airy-sway` | 4s | ease-in-out | Gentle horizontal movement |
| `.animate-marquee` | 60s | linear | Infinite scroll tickers |

## Rules
- Use `--duration-fast` for hover/focus state changes
- Use `--duration-normal` for color/border transitions
- Use `--duration-slow` for layout animations
- Respect `prefers-reduced-motion` media query
