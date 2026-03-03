#!/usr/bin/env node
/**
 * Token Audit Script — Design System Compliance Scanner
 * Scans all CSS and JSX files for hardcoded visual values
 * and suggests the correct token from the design system.
 *
 * Excludes prototype directories (prototypes/, interactions/)
 * since those are self-contained demos with their own palettes.
 *
 * Usage: node scripts/token-audit.cjs
 * Exit code 1 if any ERRORS found (CI-ready)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

// ── Directories to fully exclude ──
const SKIP_DIRS = [
    'node_modules', '.git', 'dist', 'specs',
    'prototypes',   // StoqoApp, StoqoCheckerApp, etc. — self-contained demos
    'interactions',  // FloodAlert, FilterMeApp, NexusAI, etc. — interactive prototypes
];

// ── Token Mapping: hardcoded value → recommended token + rationale ──
const COLOR_RECOMMENDATIONS = {
    // Backgrounds
    '#ffffff': { token: 'var(--bg-void)', rec: 'Use --bg-void for light page background, or --bg-card for card surfaces' },
    '#fff': { token: 'var(--bg-void)', rec: 'Use --bg-void for light page background' },
    '#f9fafb': { token: 'var(--bg-surface)', rec: 'Use --bg-surface for elevated surfaces in light mode' },
    '#f0f0f3': { token: 'var(--bg-surface)', rec: 'Use --bg-surface — close match to existing surface token' },
    '#f4f4f5': { token: 'var(--text-primary)', rec: 'If used as text, use --text-primary (dark mode value). If bg, use --bg-surface' },
    '#f3f4f6': { token: 'var(--text-primary)', rec: 'Use --text-primary (dark mode) — already tokenized' },
    '#f8f8f8': { token: 'var(--bg-surface)', rec: 'Near-white background → use --bg-surface' },
    '#050505': { token: 'var(--bg-void)', rec: 'Use --bg-void (dark mode) — already tokenized' },
    '#111111': { token: 'var(--bg-surface)', rec: 'Use --bg-surface (dark mode) — already tokenized' },
    '#111': { token: 'var(--bg-surface)', rec: 'Use --bg-surface (dark mode)' },
    '#1a1a1a': { token: 'var(--bg-card)', rec: 'Use --bg-card (dark mode) — already tokenized' },
    '#181818': { token: 'var(--bg-card)', rec: 'Use --bg-card (dark mode) — very close match' },
    '#141414': { token: 'var(--bg-card)', rec: 'Use --bg-card (dark mode)' },
    '#0a0a0a': { token: 'var(--bg-void)', rec: 'Near-black background → use --bg-void (dark)' },
    '#121212': { token: 'var(--bg-surface)', rec: 'Dark background → use --bg-surface (dark)' },
    '#1e1e1e': { token: 'var(--bg-card)', rec: 'Dark card background → use --bg-card (dark)' },
    '#161616': { token: 'var(--bg-surface)', rec: 'Dark background → use --bg-surface (dark)' },
    '#252525': { token: 'var(--bg-card)', rec: 'Dark elevated surface → use --bg-card (dark)' },
    '#2a2a2a': { token: 'var(--border-color)', rec: 'Dark border/divider → use --border-color (dark)' },
    '#2c2c2c': { token: 'var(--border-color)', rec: 'Dark border → use --border-color (dark)' },
    '#0f172a': { token: 'var(--bg-void)', rec: 'Deep dark blue → use --bg-void (dark)' },
    '#0f0f0f': { token: 'var(--bg-void)', rec: 'Near-black → use --bg-void (dark)' },

    // Text
    '#111827': { token: 'var(--text-primary)', rec: 'Use --text-primary (light mode) — already tokenized' },
    '#18181b': { token: 'var(--text-primary)', rec: 'Near-black text → use --text-primary' },
    '#6b7280': { token: 'var(--text-secondary)', rec: 'Use --text-secondary (light mode) — already tokenized' },
    '#52525b': { token: 'var(--text-secondary)', rec: 'Muted text → use --text-secondary' },
    '#9ca3af': { token: 'var(--text-secondary)', rec: 'Use --text-secondary (dark mode) — already tokenized' },
    '#a1a1aa': { token: 'var(--text-secondary)', rec: 'Muted text → use --text-secondary' },

    // Borders
    '#e5e7eb': { token: 'var(--border-color)', rec: 'Use --border-color (light mode) — already tokenized' },
    '#e4e4e7': { token: 'var(--border-color)', rec: 'Border → use --border-color (light)' },
    '#e0e0e0': { token: 'var(--border-color)', rec: 'Border → use --border-color (light)' },
    '#e5e5e5': { token: 'var(--border-color)', rec: 'Border → use --border-color (light)' },
    '#374151': { token: 'var(--border-color)', rec: 'Use --border-color (dark mode) — already tokenized' },
    '#333': { token: 'var(--border-color)', rec: 'Dark border → use --border-color (dark)' },
    '#333333': { token: 'var(--border-color)', rec: 'Dark border → use --border-color (dark)' },
    '#262626': { token: 'var(--border-color)', rec: 'Dark border → use --border-color (dark)' },
    '#222': { token: 'var(--border-color)', rec: 'Dark border/bg → use --border-color (dark) or --bg-card' },

    // Semantic colors
    '#ef4444': { token: 'var(--accent-red)', rec: 'Use --accent-red — already tokenized' },
    '#3b82f6': { token: 'var(--accent-blue)', rec: 'Use --accent-blue — already tokenized' },
    '#f59e0b': { token: 'var(--accent-amber)', rec: 'Use --accent-amber — already tokenized' },
    '#10b981': { token: 'var(--accent-green)', rec: 'Use --accent-green — already tokenized' },
    '#8b5cf6': { token: 'var(--accent-purple)', rec: 'Use --accent-purple — already tokenized' },
    '#d97706': { token: 'var(--accent-amber)', rec: 'Amber variant → use --accent-amber with opacity or add --accent-amber-dark' },

    // Common near-matches
    '#888': { token: 'var(--text-secondary)', rec: 'Gray text → use --text-secondary' },
    '#666666': { token: 'var(--text-secondary)', rec: 'Gray text → use --text-secondary' },
    '#9e9e9e': { token: 'var(--text-secondary)', rec: 'Gray text → use --text-secondary' },
    '#aaaaaa': { token: 'var(--text-secondary)', rec: 'Gray text → use --text-secondary' },
    '#eeeeee': { token: 'var(--bg-surface)', rec: 'Light gray → use --bg-surface' },
    '#f2f2f2': { token: 'var(--bg-surface)', rec: 'Light gray → use --bg-surface' },
    '#000': { token: 'var(--text-primary)', rec: 'Pure black text → use --text-primary (light mode)' },
    '#000000': { token: 'var(--text-primary)', rec: 'Pure black → use --text-primary (light mode)' },

    // Accent near-matches
    '#dc2626': { token: 'var(--accent-red)', rec: 'Red-600 → use --accent-red' },
    '#2563eb': { token: 'var(--accent-blue)', rec: 'Blue-600 → use --accent-blue' },
    '#059669': { token: 'var(--accent-green)', rec: 'Green-600 → use --accent-green' },
    '#60a5fa': { token: 'var(--accent-blue)', rec: 'Blue-400 → use --accent-blue with opacity' },
    '#34d399': { token: 'var(--accent-green)', rec: 'Green-400 → use --accent-green with opacity' },
    '#6b46c1': { token: 'var(--accent-purple)', rec: 'Purple variant → use --accent-purple' },
    '#ec4899': { token: 'var(--accent-red)', rec: 'Pink → consider --accent-red or add --accent-pink if recurring' },
};

// rgba recommendations
const RGBA_RECOMMENDATIONS = [
    { pattern: /rgba\(0,\s*0,\s*0,\s*[\d.]+\)/, rec: 'Black overlay → use bg-black/{opacity} or var(--bg-void) with Tailwind opacity' },
    { pattern: /rgba\(255,\s*255,\s*255,\s*[\d.]+\)/, rec: 'White overlay → use bg-white/{opacity} or var(--bg-void) with Tailwind opacity' },
    { pattern: /rgba\(239,\s*68,\s*68/, rec: 'Red with opacity → use var(--accent-red) with Tailwind opacity modifier' },
    { pattern: /rgba\(59,\s*130,\s*246/, rec: 'Blue with opacity → use var(--accent-blue) with Tailwind opacity modifier' },
    { pattern: /rgba\(16,\s*185,\s*129/, rec: 'Green with opacity → use var(--accent-green) with Tailwind opacity modifier' },
    { pattern: /rgba\(245,\s*158,\s*11/, rec: 'Amber with opacity → use var(--accent-amber) with Tailwind opacity modifier' },
];

let errors = 0;
let warnings = 0;
const results = [];

function getColorRecommendation(value) {
    const lower = value.toLowerCase();
    const mapped = COLOR_RECOMMENDATIONS[lower];
    if (mapped) return { suggestion: mapped.token, recommendation: mapped.rec };
    return null;
}

function getRgbaRecommendation(value) {
    for (const entry of RGBA_RECOMMENDATIONS) {
        if (entry.pattern.test(value)) return entry.rec;
    }
    return 'Use token-based color with Tailwind opacity modifier, e.g. bg-[var(--token)]/20';
}

function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const relPath = path.relative(ROOT, filePath);

    lines.forEach((line, i) => {
        const lineNum = i + 1;
        const trimmed = line.trim();

        // Skip comments and CSS variable definitions
        if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) return;
        if (trimmed.startsWith('--') && line.includes(':')) return;

        // Detect hardcoded hex colors
        const hexMatches = [...line.matchAll(/#[0-9a-fA-F]{3,8}\b/g)];
        for (const m of hexMatches) {
            if (line.includes('var(--') && !line.includes('style=')) continue;
            if (/hex[=:]/.test(line.substring(Math.max(0, m.index - 10), m.index))) continue;

            const colorRec = getColorRecommendation(m[0]);
            const suggestion = colorRec ? colorRec.suggestion : 'No direct token match';
            const recommendation = colorRec ? colorRec.recommendation : 'Add to tokens.css if this color is used in 2+ places. Otherwise, keep as inline style with a comment.';

            errors++;
            results.push({ severity: 'ERROR', file: relPath, line: lineNum, value: m[0], suggestion, recommendation });
        }

        // Detect hardcoded rgba/rgb
        const rgbMatches = [...line.matchAll(/rgba?\([^)]{4,}\)/g)];
        for (const m of rgbMatches) {
            if (line.includes('var(--')) continue;
            const recommendation = getRgbaRecommendation(m[0]);

            warnings++;
            results.push({ severity: 'WARN', file: relPath, line: lineNum, value: m[0], suggestion: 'Use token + opacity', recommendation });
        }
    });
}

function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
        if (SKIP_DIRS.includes(e.name)) continue;
        const fullPath = path.join(dir, e.name);
        if (e.isDirectory()) {
            walkDir(fullPath);
        } else if (e.isFile() && (e.name.endsWith('.css') || e.name.endsWith('.jsx') || e.name.endsWith('.js'))) {
            scanFile(fullPath);
        }
    }
}

// Run
console.log('╔══════════════════════════════════════════════════════╗');
console.log('║   DESIGN SYSTEM TOKEN AUDIT                        ║');
console.log('║   Excluding: prototypes/, interactions/             ║');
console.log('╚══════════════════════════════════════════════════════╝\n');

walkDir(SRC);

// Group by file
const byFile = {};
results.forEach(r => {
    if (!byFile[r.file]) byFile[r.file] = [];
    byFile[r.file].push(r);
});

// Print results
for (const [file, items] of Object.entries(byFile)) {
    console.log(`\n📄 ${file}`);
    items.forEach(item => {
        const icon = item.severity === 'ERROR' ? '❌' : '⚠️';
        console.log(`  ${icon} L${item.line}: ${item.value}`);
        console.log(`     → Token: ${item.suggestion}`);
        console.log(`     💡 ${item.recommendation}`);
    });
}

// Summary
console.log('\n' + '═'.repeat(56));
console.log(`\n  ERRORS:   ${errors}`);
console.log(`  WARNINGS: ${warnings}`);
console.log(`  TOTAL:    ${errors + warnings}`);

const fileCount = Object.keys(byFile).length;
console.log(`  FILES:    ${fileCount}`);
console.log(`  EXCLUDED: prototypes/, interactions/ (not part of design system)`);
console.log('');

if (errors > 0) {
    console.log('❌ AUDIT FAILED — Fix errors before committing.\n');
    process.exit(1);
} else if (warnings > 0) {
    console.log('⚠️  AUDIT PASSED with warnings.\n');
    process.exit(0);
} else {
    console.log('✅ AUDIT PASSED — Zero violations!\n');
    process.exit(0);
}
