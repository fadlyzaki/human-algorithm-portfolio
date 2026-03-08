import React from "react";
import {
  Hash,
  FileWarning,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Activity,
  ClipboardList,
  Eye,
  Terminal,
} from "lucide-react";

// ── AUDIT REPORT SECTION ──
const AUDIT_DATA = {
  timestamp: "2026-03-04T17:50:00+07:00",
  excluded: ["prototypes/", "interactions/"],
  summary: {
    errors: 80,
    warnings: 70,
    total: 150,
    files: 32,
    uniqueColors: 120,
  },
  topFiles: [
    { file: "src/components/DraggablePhoto.jsx", count: 22, severity: "error" },
    { file: "src/components/VentureCard.jsx", count: 14, severity: "error" },
    { file: "src/components/sketches/Flipbook.jsx", count: 13, severity: "error" },
    { file: "src/components/welcome/ChaosToMatrixIntro.jsx", count: 12, severity: "warn" },
    { file: "src/components/DesignSystemViewer.jsx", count: 11, severity: "error" },
    { file: "src/components/project-layouts/CosmicPopDetail.jsx", count: 9, severity: "warn" },
    { file: "src/pages/SideProjectsIndex.jsx", count: 8, severity: "error" },
    { file: "src/components/home/HomeAbout.jsx", count: 7, severity: "error" },
    { file: "src/data/experiments.js", count: 5, severity: "error" },
    { file: "src/components/project-layouts/BrutalistDetail.jsx", count: 5, severity: "error" },
    { file: "src/components/ChaosCanvas.jsx", count: 5, severity: "error" },
    { file: "src/pages/SideProjectDetail.jsx", count: 4, severity: "error" },
  ],
  categories: [
    { name: "Colors (hex)", count: 80, icon: Hash },
    { name: "Colors (rgba)", count: 70, icon: Hash },
  ],
  recommendations: [
    {
      value: "var(--text-primary) / var(--text-primary)",
      token: "var(--text-primary)",
      rec: "Already tokenized — replace inline hex with var()",
      files: 12,
    },
    {
      value: "var(--text-secondary) / var(--text-secondary)",
      token: "var(--text-secondary)",
      rec: "Already tokenized — replace inline hex with var()",
      files: 10,
    },
    {
      value: "var(--bg-void) / var(--bg-void)",
      token: "var(--bg-void)",
      rec: "Already tokenized — use var() in style objects",
      files: 8,
    },
    {
      value: "var(--bg-card) / var(--bg-card)",
      token: "var(--bg-card)",
      rec: "Near-match to --bg-card dark — replace with var()",
      files: 7,
    },
    {
      value: "var(--border-color) / var(--border-color)",
      token: "var(--border-color)",
      rec: "Already tokenized — replace hardcoded borders with var()",
      files: 9,
    },
    {
      value: "var(--accent-red)",
      token: "var(--accent-red)",
      rec: "Already tokenized — use var() instead of raw hex",
      files: 4,
    },
    {
      value: "var(--accent-green)",
      token: "var(--accent-green)",
      rec: "Already tokenized — use var() instead of raw hex",
      files: 5,
    },
    {
      value: "var(--accent-amber) / var(--accent-amber)",
      token: "var(--accent-amber)",
      rec: "Use --accent-amber. Add --accent-amber-dark if needed",
      files: 3,
    },
    {
      value: "var(--text-secondary) / var(--text-secondary)",
      token: "var(--text-secondary)",
      rec: "Gray text should use semantic text token",
      files: 3,
    },
    {
      value: "rgba(0,0,0,*)",
      token: "bg-black/{opacity}",
      rec: "Black overlays → use Tailwind opacity modifier on token",
      files: 11,
    },
    {
      value: "rgba(255,255,255,*)",
      token: "bg-white/{opacity}",
      rec: "White overlays → use Tailwind opacity modifier on token",
      files: 8,
    },
  ],
  tokenCoverage: {
    colors: { total: 120, tokenized: 40, percentage: 33.3 },
    spacing: { total: 10, tokenized: 10, percentage: 100 },
    typography: { total: 11, tokenized: 11, percentage: 100 },
    radius: { total: 6, tokenized: 6, percentage: 100 },
    elevation: { total: 6, tokenized: 6, percentage: 100 },
    zIndex: { total: 8, tokenized: 8, percentage: 100 },
    motion: { total: 9, tokenized: 9, percentage: 100 },
  },
  tokenMap: [
    {
      token: "--bg-void",
      light: "var(--bg-void)",
      dark: "var(--bg-void)",
      usage: "Page background",
    },
    {
      token: "--bg-surface",
      light: "var(--bg-surface)",
      dark: "var(--bg-surface)",
      usage: "Surface layer",
    },
    {
      token: "--bg-card",
      light: "var(--bg-void)",
      dark: "var(--bg-card)",
      usage: "Card containers",
    },
    {
      token: "--text-primary",
      light: "var(--text-primary)",
      dark: "var(--text-primary)",
      usage: "Headings, body",
    },
    {
      token: "--text-secondary",
      light: "var(--text-secondary)",
      dark: "var(--text-secondary)",
      usage: "Muted text",
    },
    {
      token: "--border-color",
      light: "var(--border-color)",
      dark: "var(--border-color)",
      usage: "Borders",
    },
    {
      token: "--accent-red",
      light: "var(--accent-red)",
      dark: "–",
      usage: "Error states",
    },
    {
      token: "--accent-blue",
      light: "var(--accent-blue)",
      dark: "–",
      usage: "Info, links",
    },
    { token: "--accent-amber", light: "var(--accent-amber)", dark: "–", usage: "Warnings" },
    {
      token: "--accent-green",
      light: "var(--accent-green)",
      dark: "–",
      usage: "Success states",
    },
    {
      token: "--accent-purple",
      light: "var(--accent-purple)",
      dark: "–",
      usage: "Code syntax",
    },
  ],
};

const AuditReport = ({ isXRayMode }) => (
  <div
    className={`space-y-16 animate-in slide-in-from-bottom-8 duration-500 relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
  >
    {isXRayMode && (
      <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
        AuditReport.jsx // DataGrid
      </span>
    )}

    {/* AUDIT SUMMARY DASHBOARD */}
    <div className="space-y-6 relative z-10">
      <div className="flex items-end justify-between border-b border-[var(--border-color)] pb-4">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] flex items-center gap-2">
          <Activity size={14} /> System_Token_Compliance
        </h3>
        <div className="font-mono text-[10px] text-[var(--text-secondary)] uppercase">
          Scan: {new Date(AUDIT_DATA.timestamp).toLocaleDateString()}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border border-[var(--accent-red)]/30 bg-[var(--bg-card)] p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
            <FileWarning size={60} />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] mb-3 block">
            Errors
          </span>
          <div className="text-4xl font-bold text-[var(--accent-red)]">
            {AUDIT_DATA.summary.errors}
          </div>
          <div className="text-[10px] text-[var(--accent-red)] flex items-center gap-1 mt-1">
            <AlertTriangle size={10} /> Hardcoded values
          </div>
        </div>
        <div className="border border-[var(--accent-amber)]/30 bg-[var(--bg-card)] p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
            <AlertTriangle size={60} />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] mb-3 block">
            Warnings
          </span>
          <div className="text-4xl font-bold text-[var(--accent-amber)]">
            {AUDIT_DATA.summary.warnings}
          </div>
          <div className="text-[10px] text-[var(--text-secondary)] flex items-center gap-1 mt-1">
            Prototype-specific
          </div>
        </div>
        <div className="border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] mb-3 block">
            Files Scanned
          </span>
          <div className="text-4xl font-bold text-[var(--text-primary)]">
            {AUDIT_DATA.summary.files}
          </div>
          <div className="text-[10px] text-[var(--text-secondary)] mt-1">
            CSS + JSX + JS
          </div>
        </div>
        <div className="border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] mb-3 block">
            Unique Colors
          </span>
          <div className="text-4xl font-bold text-[var(--text-primary)]">
            {AUDIT_DATA.summary.uniqueColors}
          </div>
          <div className="text-[10px] text-[var(--text-secondary)] mt-1">
            Distinct values found
          </div>
        </div>
      </div>
    </div>

    {/* CATEGORY BREAKDOWN */}
    <div className="space-y-6 relative z-10">
      <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
        <Hash size={14} /> Violation_Categories
      </h3>
      <div className="space-y-3">
        {AUDIT_DATA.categories.map((cat, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <div className="w-28 md:w-40 font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-2">
              <cat.icon size={10} className="opacity-40" /> {cat.name}
            </div>
            <div className="flex-1 h-2 bg-[var(--bg-surface)] overflow-hidden border border-[var(--border-color)]">
              <div
                className="h-full bg-[var(--accent-red)] transition-all duration-1000 relative"
                style={{
                  width: `${Math.min((cat.count / AUDIT_DATA.summary.total) * 200, 100)}%`,
                }}
              >
                <div className="absolute right-0 top-0 w-1 h-full bg-white/30" />
              </div>
            </div>
            <span className="font-mono text-xs font-bold text-[var(--text-primary)] w-12 text-right">
              {cat.count}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* TOP FILES TABLE */}
    <div className="space-y-6 relative z-10">
      <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
        <ClipboardList size={14} /> Hotspot_Files
      </h3>
      <div className="border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-[var(--bg-surface)] border-b border-[var(--border-color)] font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
          <div className="col-span-1">#</div>
          <div className="col-span-7">File</div>
          <div className="col-span-2 text-center">Severity</div>
          <div className="col-span-2 text-right">Count</div>
        </div>
        {/* Table Rows */}
        {AUDIT_DATA.topFiles.map((item, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-12 gap-2 px-4 py-3 font-mono text-xs items-center transition-colors hover:bg-[var(--bg-surface)] ${idx < AUDIT_DATA.topFiles.length - 1 ? "border-b border-[var(--border-color)]" : ""}`}
          >
            <div className="col-span-1 text-[var(--text-secondary)] opacity-40">
              {String(idx + 1).padStart(2, "0")}
            </div>
            <div className="col-span-7 text-[var(--text-primary)] truncate">
              {item.file}
            </div>
            <div className="col-span-2 text-center">
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[9px] uppercase tracking-wider ${item.severity === "error"
                  ? "bg-[var(--accent-red)]/10 text-[var(--accent-red)] border border-[var(--accent-red)]/20"
                  : "bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] border border-[var(--accent-amber)]/20"
                  }`}
              >
                {item.severity === "error" ? (
                  <AlertTriangle size={8} />
                ) : (
                  <Eye size={8} />
                )}
                {item.severity}
              </span>
            </div>
            <div className="col-span-2 text-right font-bold text-[var(--text-primary)]">
              {item.count}
            </div>
          </div>
        ))}
      </div>
      <div className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest text-center flex items-center justify-center gap-2">
        <ShieldCheck size={10} />
        Excluded: {AUDIT_DATA.excluded.join(", ")} — not part of portfolio
        design system
      </div>
    </div>

    {/* RECOMMENDATIONS */}
    <div className="space-y-6 relative z-10">
      <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-green)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
        <CheckCircle2 size={14} /> Token_Recommendations
      </h3>
      <div className="border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-[var(--bg-surface)] border-b border-[var(--border-color)] font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
          <div className="col-span-3">Hardcoded Value</div>
          <div className="col-span-3">Replace With</div>
          <div className="col-span-5">Recommendation</div>
          <div className="col-span-1 text-right">Files</div>
        </div>
        {/* Table Rows */}
        {AUDIT_DATA.recommendations.map((item, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-12 gap-2 px-4 py-3 font-mono text-xs items-start transition-colors hover:bg-[var(--bg-surface)] ${idx < AUDIT_DATA.recommendations.length - 1 ? "border-b border-[var(--border-color)]" : ""}`}
          >
            <div className="col-span-3 text-[var(--accent-red)] font-bold">
              {item.value}
            </div>
            <div className="col-span-3 text-[var(--accent-green)] font-bold">
              {item.token}
            </div>
            <div className="col-span-5 text-[var(--text-secondary)] leading-relaxed">
              {item.rec}
            </div>
            <div className="col-span-1 text-right text-[var(--text-primary)] font-bold">
              {item.files}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* TOKEN COVERAGE */}
    <div className="space-y-6 relative z-10">
      <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
        <ShieldCheck size={14} /> Token_Coverage_Matrix
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(AUDIT_DATA.tokenCoverage).map(([key, data]) => (
          <div
            key={key}
            className="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3 group hover:border-[var(--accent)] transition-colors"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] block">
              {key}
            </span>
            <div className="flex items-end gap-1">
              <span
                className={`text-2xl font-bold ${data.percentage === 100 ? "text-[var(--accent-green)]" : "text-[var(--accent-amber)]"}`}
              >
                {data.percentage}
              </span>
              <span className="text-sm text-[var(--text-secondary)] mb-0.5">
                %
              </span>
            </div>
            <div className="h-1 w-full bg-[var(--bg-surface)] overflow-hidden">
              <div
                className={`h-full ${data.percentage === 100 ? "bg-[var(--accent-green)]" : "bg-[var(--accent-amber)]"}`}
                style={{ width: `${data.percentage}%` }}
              />
            </div>
            <div className="font-mono text-[9px] text-[var(--text-secondary)]">
              {data.tokenized}/{data.total} defined
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* TOKEN REFERENCE TABLE */}
    <div className="space-y-6 relative z-10">
      <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
        <Terminal size={14} /> Token_Reference
      </h3>
      <div className="border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-[var(--bg-surface)] border-b border-[var(--border-color)] font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
          <div className="col-span-3">Token</div>
          <div className="col-span-2 text-center">Light</div>
          <div className="col-span-2 text-center">Dark</div>
          <div className="col-span-1"></div>
          <div className="col-span-4">Usage</div>
        </div>
        {AUDIT_DATA.tokenMap.map((t, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-12 gap-2 px-4 py-3 font-mono text-xs items-center hover:bg-[var(--bg-surface)] transition-colors ${idx < AUDIT_DATA.tokenMap.length - 1 ? "border-b border-[var(--border-color)]" : ""}`}
          >
            <div className="col-span-3 text-[var(--accent)] font-bold truncate">
              {t.token}
            </div>
            <div className="col-span-2 text-center text-[var(--text-secondary)] select-all">
              {t.light}
            </div>
            <div className="col-span-2 text-center text-[var(--text-secondary)] select-all">
              {t.dark}
            </div>
            <div className="col-span-1 flex justify-center">
              {t.light !== "–" && (
                <div
                  className="w-4 h-4 rounded-sm border border-[var(--border-color)]"
                  style={{ backgroundColor: `var(${t.token})` }}
                />
              )}
            </div>
            <div className="col-span-4 text-[var(--text-secondary)]">
              {t.usage}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* RUN COMMAND */}
    <div className="border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-3">
      <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">
        <Terminal size={12} /> Audit_CLI
      </div>
      <div className="font-mono text-sm text-[var(--text-primary)] bg-[var(--bg-void)] border border-[var(--border-color)] p-4">
        <span className="text-[var(--accent)]">$</span> node
        scripts/token-audit.cjs
      </div>
      <p className="text-xs text-[var(--text-secondary)]">
        Run before committing. Exit code 1 on errors. Warnings are logged but do
        not block CI.
      </p>
    </div>
  </div>
);


export default AuditReport;
