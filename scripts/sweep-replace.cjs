const fs = require('fs');
const path = require('path');
const srcDir = path.resolve(__dirname, '..', 'src');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if ((fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) &&
      !file.endsWith('sweep-replace.cjs') &&
      file !== 'index.css') {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walkDir(srcDir);

// Mapping (Lowercase keys only for consistency)
const COLOR_MAP = {
  '#ffffff': 'var(--bg-void)',
  '#fff': 'var(--bg-void)',
  '#f9fafb': 'var(--bg-surface)',
  '#f0f0f3': 'var(--bg-surface)',
  '#f4f4f5': 'var(--text-primary)',
  '#f8f8f8': 'var(--bg-surface)',
  '#050505': 'var(--bg-void)',
  '#111111': 'var(--bg-surface)',
  '#111': 'var(--bg-surface)',
  '#1a1a1a': 'var(--bg-card)',
  '#181818': 'var(--bg-card)',
  '#141414': 'var(--bg-card)',
  '#0a0a0a': 'var(--bg-void)',
  '#121212': 'var(--bg-surface)',
  '#1e1e1e': 'var(--bg-card)',
  '#161616': 'var(--bg-surface)',
  '#252525': 'var(--bg-card)',
  '#2a2a2a': 'var(--border-color)',
  '#2c2c2c': 'var(--border-color)',
  '#0f172a': 'var(--bg-void)',
  '#0f0f0f': 'var(--bg-void)',
  '#111827': 'var(--text-primary)',
  '#18181b': 'var(--text-primary)',
  '#6b7280': 'var(--text-secondary)',
  '#52525b': 'var(--text-secondary)',
  '#9ca3af': 'var(--text-secondary)',
  '#a1a1aa': 'var(--text-secondary)',
  '#e5e7eb': 'var(--border-color)',
  '#e4e4e7': 'var(--border-color)',
  '#e0e0e0': 'var(--border-color)',
  '#e5e5e5': 'var(--border-color)',
  '#374151': 'var(--border-color)',
  '#333': 'var(--border-color)',
  '#333333': 'var(--border-color)',
  '#262626': 'var(--border-color)',
  '#222': 'var(--border-color)',
  '#ef4444': 'var(--accent-red)',
  '#3b82f6': 'var(--accent-blue)',
  '#f59e0b': 'var(--accent-amber)',
  '#10b981': 'var(--accent-green)',
  '#8b5cf6': 'var(--accent-purple)',
  '#d97706': 'var(--accent-amber)',
  '#000': 'var(--text-primary)',
  '#000000': 'var(--text-primary)',
  '#dc2626': 'var(--accent-red)',
  '#2563eb': 'var(--accent-blue)',
  '#059669': 'var(--accent-green)',
  '#34d399': 'var(--accent-green)',
  '#1d1b19': 'var(--bg-void)',
  '#e4d9c7': 'var(--bg-surface)',
  '#2c2826': 'var(--bg-void)',
  '#f8f6f0': 'var(--bg-surface)',
  '#2a2a2c': 'var(--bg-surface)',
  '#00c2ff': 'var(--accent-sky)',
  '#ff3b30': 'var(--accent-red)',
  '#0a1128': 'var(--bg-void)',
  '#f97316': 'var(--accent-orange)',
  '#ea580c': 'var(--accent-orange)',
  '#fbbf24': 'var(--accent-amber)',
  '#a78bfa': 'var(--accent-purple)',
  '#f472b6': 'var(--accent-pink)',
  '#38bdf8': 'var(--accent-sky)',
  '#c2410c': 'var(--accent-orange)',
  '#ec4899': 'var(--accent-pink)',
  '#e50914': 'var(--accent-red)',
  '#666': 'var(--text-secondary)',
  '#666666': 'var(--text-secondary)',
  '#888': 'var(--text-secondary)',
  '#8b5cf6': 'var(--accent-purple)',
  '#6b46c1': 'var(--accent-purple)',
  '#1a1a2e': 'var(--accent-indigo)',
  '#16213e': 'var(--accent-indigo)',
  '#1aa8b4': 'var(--accent-teal)',
  '#260d40': 'var(--accent-purple)',
  '#00d1c7': 'var(--accent-teal)',
  '#fa6130': 'var(--accent-orange)',
  '#646cffaa': 'var(--accent-blue)',
  '#61dafbaa': 'var(--accent-sky)',
};

const sortedHex = Object.keys(COLOR_MAP).sort((a, b) => b.length - a.length);
const hexRegex = new RegExp(`${sortedHex.join('|')}`, 'gi');

const RGBA_MAP = [
  { pattern: /rgba\(0,\s*0,\s*0,\s*([\d.]+)\)/g, replacement: 'rgba(var(--bg-void-rgb), $1)' },
  { pattern: /rgba\(255,\s*255,\s*255,\s*([\d.]+)\)/g, replacement: 'rgba(var(--bg-surface-rgb), $1)' },
  { pattern: /rgba\(16,\s*185,\s*129,\s*([\d. \/\$*+-\{\}]+)\)/g, replacement: 'rgba(var(--accent-green-rgb), $1)' },
  { pattern: /rgba\(59,\s*130,\s*246,\s*([\d.]+)\)/g, replacement: 'rgba(var(--accent-blue-rgb), $1)' },
  { pattern: /rgba\(52,\s*211,\s*153,\s*([\d. \/\$*+-\{\}a-zA-Z\(\)]+)\)/g, replacement: 'rgba(var(--accent-green-rgb), $1)' },
  { pattern: /rgba\(0,\s*0,\s*0,\s*0\)/g, replacement: 'transparent' },
];

let totalReplaces = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // SAFEGUARD: Skip RGBA replacements in files that use Canvas API
  // Canvas addColorStop/fillStyle doesn't support CSS variables via rgba(var(--...))
  const isCanvasFile = content.includes("getContext('2d')") || content.includes('getContext("2d")');

  content = content.replace(hexRegex, (matched) => {
    const key = matched.toLowerCase();
    const replacement = COLOR_MAP[key];
    if (replacement) {
      totalReplaces++;
      return replacement;
    }
    return matched;
  });

  if (!isCanvasFile || f.endsWith('.css')) {
    RGBA_MAP.forEach(({ pattern, replacement }) => {
      content = content.replace(pattern, (match, p1) => {
        totalReplaces++;
        if (typeof p1 === 'undefined') return replacement;
        return replacement.replace('$1', p1);
      });
    });
  }

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Fixed', f.split('src/')[1]);
  }
});

console.log(`Replaced ${totalReplaces} values.`);
