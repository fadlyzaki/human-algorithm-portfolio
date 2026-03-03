# SystemMonitor

## Metadata
- **Name**: SystemMonitor
- **Category**: Data Visualization
- **Status**: Stable
- **File**: `src/components/SystemMonitor.jsx`

## Overview
Displays skill/technology metrics in a terminal-styled monitor. Shows skill name with icon and animated progress bar.

### When to use
- Skills section, design system components showcase

### When NOT to use
- For simple lists without visual metrics

## Anatomy
1. **Header** — monitor title with status indicator
2. **Skill Row** — icon + name + animated bar
3. **Footer** — system status metadata

## Tokens Used
| Token | Property |
|-------|----------|
| `--bg-card` | background |
| `--bg-void` | progress track |
| `--border-color` | borders |
| `--accent` | progress fill |
| `--text-primary` | skill name |
| `--text-secondary` | labels |

## Props
| Prop | Type | Description |
|------|------|-------------|
| `skills` | `Array<{name, icon}>` | Skills to display |

## Code Example
```jsx
<SystemMonitor skills={[
  { name: 'Figma', icon: Layers },
  { name: 'React', icon: Cpu }
]} />
```

## Cross-references
- `DefaultCard` — often wraps SystemMonitor
- `DesignSystemViewer` — uses in components section
