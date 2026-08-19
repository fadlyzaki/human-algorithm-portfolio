import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Check,
  Globe,
  RefreshCw,
  Sparkles,
  Columns,
  Layers,
  ArrowRight,
  ShieldCheck,
  Compass,
} from "lucide-react";

const BENCHMARKS = {
  DevTools: {
    brand: "Linear",
    url: "https://linear.app",
    specs: {
      segment: "Engineering & Product Teams",
      monetization: "Freemium + Per-Seat ($8-$14/mo)",
      conversion: "Self-Serve Instant Workspace",
      signature: "Dark Glassmorphism, 100ms Feel",
    },
    takeaway:
      "Linear masterfully anchors around speed and keyboard-first fluidity. Visual minimalism creates an instant aura of engineering excellence.",
    dimensions: [
      { key: "Value Prop", val: "Plan and build products with high velocity" },
      { key: "CTA Strategy", val: "Primary: 'Start for free' / Secondary: 'Book demo'" },
      { key: "Trust Signals", val: "Backed by top tech leaders, SOC2 compliant, 99.99% uptime" },
      { key: "UX Tone", val: "Crisp, active, engineer-centric, zero marketing fluff" },
    ],
  },
  AI: {
    brand: "Cursor",
    url: "https://cursor.com",
    specs: {
      segment: "Software Engineers & Builders",
      monetization: "Usage-Based + Pro Subscription",
      conversion: "1-Click Direct Binary Download",
      signature: "Split-Canvas Code Terminals & Diff",
    },
    takeaway:
      "Cursor turns the editor itself into the hero. Immediate demonstration of autocomplete in action reduces onboarding cognitive friction to zero.",
    dimensions: [
      { key: "Value Prop", val: "The AI Code Editor built for pair-programming speed" },
      { key: "CTA Strategy", val: "Primary: 'Download for macOS' / Secondary: 'Explore docs'" },
      { key: "Trust Signals", val: "Trusted by engineers at OpenAI, Scale AI, and Vercel" },
      { key: "UX Tone", val: "Technical, direct, action-oriented, demo-first" },
    ],
  },
  Productivity: {
    brand: "Notion",
    url: "https://notion.so",
    specs: {
      segment: "Knowledge Workers & Enterprises",
      monetization: "Freemium + Tiered Plans",
      conversion: "Instant Web Workspace Signup",
      signature: "Modular Block Canvas & Notion AI",
    },
    takeaway:
      "Notion balances consumer simplicity with enterprise scale through modular block animations and clear vertical tab switchers.",
    dimensions: [
      { key: "Value Prop", val: "The connected workspace where better work happens" },
      { key: "CTA Strategy", val: "Primary: 'Get Notion free' / Secondary: 'Request a demo'" },
      { key: "Trust Signals", val: "Over 30M+ users, Fortune 500 company logos" },
      { key: "UX Tone", val: "Friendly, empowering, creative, structured" },
    ],
  },
  Fintech: {
    brand: "Ramp",
    url: "https://ramp.com",
    specs: {
      segment: "Finance Teams & CFOs",
      monetization: "Interchange Share + Enterprise SaaS",
      conversion: "Instant Savings Calculator to Demo",
      signature: "High Trust Density, Dark Teal Accents",
    },
    takeaway:
      "Ramp places quantified cost savings at the center of the hero viewport, converting skepticism into instant ROI comprehension.",
    dimensions: [
      { key: "Value Prop", val: "The ultimate finance automation & corporate card platform" },
      { key: "CTA Strategy", val: "Primary: 'Get Started' / Secondary: 'Calculate Savings'" },
      { key: "Trust Signals", val: "Visa network partner, SOC1/SOC2, $1B+ saved for clients" },
      { key: "UX Tone", val: "Authoritative, ROI-driven, institutional, modern" },
    ],
  },
  Consumer: {
    brand: "Airbnb",
    url: "https://airbnb.com",
    specs: {
      segment: "Global Travelers & Hosts",
      monetization: "Two-Sided Marketplace Commission",
      conversion: "Floating Location Search Capsule",
      signature: "Full-Bleed Photography & Map View",
    },
    takeaway:
      "Airbnb removes all conceptual barriers by making the search capsule the singular focal point of the viewport.",
    dimensions: [
      { key: "Value Prop", val: "Find unique places to stay and unforgettable experiences" },
      { key: "CTA Strategy", val: "Primary: 'Search Destinations' / Secondary: 'Airbnb your home'" },
      { key: "Trust Signals", val: "AirCover protection, 1B+ guest arrivals, verified reviews" },
      { key: "UX Tone", val: "Evocative, welcoming, human, aspirational" },
    ],
  },
};

export default function SummarizerAI() {
  const [category, setCategory] = useState("DevTools");
  const [viewMode, setViewMode] = useState("taxonomy"); // "taxonomy" | "matrix"
  const [isProcessing, setIsProcessing] = useState(false);
  const [pipelineStep, setPipelineStep] = useState(3); // 0=DOM, 1=Sanitize, 2=Gemini, 3=Rendered

  const current = BENCHMARKS[category] || BENCHMARKS.DevTools;

  const handleSelectCategory = (cat) => {
    if (cat === category && pipelineStep === 3) return;
    setCategory(cat);
    setIsProcessing(true);
    setPipelineStep(0);

    setTimeout(() => setPipelineStep(1), 300);
    setTimeout(() => setPipelineStep(2), 700);
    setTimeout(() => {
      setPipelineStep(3);
      setIsProcessing(false);
    }, 1100);
  };

  return (
    <div className="w-full h-full flex flex-col bg-[var(--bg-void)] text-[var(--text-primary)] font-mono text-xs select-none overflow-hidden relative">
      {/* Background Subtle Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(0deg, var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Header Bar */}
      <div className="p-3 border-b border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center justify-between shrink-0 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-[10px] font-bold tracking-wider text-[var(--accent-purple)] uppercase">
            INTEL_ENGINE // v2.0
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex bg-[var(--bg-void)] rounded p-0.5 border border-[var(--border-color)]">
          <button
            onClick={() => setViewMode("taxonomy")}
            className={`px-2 py-0.5 rounded text-[9px] uppercase tracking-wider transition-colors flex items-center gap-1 ${
              viewMode === "taxonomy"
                ? "bg-[var(--accent-purple)] text-white"
                : "text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            <Layers size={10} /> 9-Dim
          </button>
          <button
            onClick={() => setViewMode("matrix")}
            className={`px-2 py-0.5 rounded text-[9px] uppercase tracking-wider transition-colors flex items-center gap-1 ${
              viewMode === "matrix"
                ? "bg-[var(--accent-purple)] text-white"
                : "text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            <Columns size={10} /> Matrix (4x)
          </button>
        </div>
      </div>

      {/* Category Chips Bar (100 Benchmarks) */}
      <div className="p-2 border-b border-[var(--border-color)] bg-black/20 flex flex-col gap-1.5 shrink-0 relative z-10">
        <div className="flex items-center justify-between text-[9px] text-[var(--accent-purple)] font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <Sparkles size={10} className="text-emerald-400" />
            Live Interactive Simulation (Click to Explore)
          </span>
          <span className="text-[8px] text-[var(--text-secondary)]">100 Benchmarks</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto hide-scrollbar">
          {Object.keys(BENCHMARKS).map((cat) => (
            <button
              key={cat}
              onClick={() => handleSelectCategory(cat)}
              className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider transition-all whitespace-nowrap ${
                category === cat
                  ? "bg-[var(--accent-purple)] text-white shadow-sm"
                  : "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {cat} (20)
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-3 overflow-y-auto relative z-10 flex flex-col gap-2.5">
        {/* Active URL Ingestion Simulation Pill */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded p-2 flex items-center justify-between gap-2 shadow-sm shrink-0">
          <div className="flex items-center gap-2 truncate">
            <Globe size={12} className="text-[var(--accent-purple)] shrink-0" />
            <span className="text-[10px] text-[var(--text-secondary)] truncate font-mono">
              {current.url}
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {isProcessing ? (
              <span className="text-[9px] text-yellow-400 flex items-center gap-1">
                <RefreshCw size={10} className="animate-spin" />
                {pipelineStep === 0 && "INGEST_DOM"}
                {pipelineStep === 1 && "STRIP_BLOAT"}
                {pipelineStep === 2 && "GEMINI_2.5_FLASH"}
              </span>
            ) : (
              <span className="text-[9px] text-emerald-400 flex items-center gap-1">
                <Check size={10} /> 0ms CACHED
              </span>
            )}
          </div>
        </div>

        {/* View Mode: 9-Dimension Taxonomy */}
        {viewMode === "taxonomy" && (
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col gap-2.5"
            >
              {/* Product Specifications Badges */}
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-[var(--bg-card)] p-2 rounded border border-[var(--border-color)]">
                  <div className="text-[8px] uppercase tracking-wider text-[var(--text-secondary)] mb-0.5">
                    Primary Segment
                  </div>
                  <div className="text-[10px] font-bold text-[var(--text-primary)] truncate">
                    {current.specs.segment}
                  </div>
                </div>
                <div className="bg-[var(--bg-card)] p-2 rounded border border-[var(--border-color)]">
                  <div className="text-[8px] uppercase tracking-wider text-[var(--text-secondary)] mb-0.5">
                    Monetization
                  </div>
                  <div className="text-[10px] font-bold text-emerald-400 truncate">
                    {current.specs.monetization}
                  </div>
                </div>
                <div className="bg-[var(--bg-card)] p-2 rounded border border-[var(--border-color)]">
                  <div className="text-[8px] uppercase tracking-wider text-[var(--text-secondary)] mb-0.5">
                    Conversion Path
                  </div>
                  <div className="text-[10px] font-bold text-sky-400 truncate">
                    {current.specs.conversion}
                  </div>
                </div>
                <div className="bg-[var(--bg-card)] p-2 rounded border border-[var(--border-color)]">
                  <div className="text-[8px] uppercase tracking-wider text-[var(--text-secondary)] mb-0.5">
                    Design Signature
                  </div>
                  <div className="text-[10px] font-bold text-[var(--accent-purple)] truncate">
                    {current.specs.signature}
                  </div>
                </div>
              </div>

              {/* Decoupled Product Designer Takeaway Callout */}
              <div className="p-2.5 rounded border border-[var(--accent-purple)]/40 bg-[var(--accent-purple)]/10 flex flex-col gap-1 shadow-sm">
                <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-[var(--accent-purple)] font-bold">
                  <Compass size={11} /> Designer Takeaway ({current.brand})
                </div>
                <div className="text-[10px] text-[var(--text-primary)] leading-relaxed italic">
                  "{current.takeaway}"
                </div>
              </div>

              {/* 4 Representative Dimensions */}
              <div className="flex flex-col gap-1.5">
                {current.dimensions.map((dim, idx) => (
                  <div
                    key={idx}
                    className="bg-[var(--bg-card)] p-2 rounded border border-[var(--border-color)] flex flex-col gap-0.5"
                  >
                    <div className="text-[8px] uppercase tracking-wider text-[var(--text-secondary)] flex items-center justify-between">
                      <span>{dim.key}</span>
                      <span className="opacity-40">DIM_0{idx + 1}</span>
                    </div>
                    <div className="text-[10px] text-[var(--text-primary)] leading-snug">
                      {dim.val}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* View Mode: Comparison Matrix (4 Competitors Diff) */}
        {viewMode === "matrix" && (
          <div className="flex flex-col gap-2">
            <div className="text-[9px] uppercase tracking-wider text-[var(--accent-purple)] font-bold flex items-center gap-1 mb-1">
              <Columns size={10} /> Multi-Competitor Synchronized Diff (4x)
            </div>
            <div className="border border-[var(--border-color)] rounded overflow-hidden">
              <table className="w-full text-left border-collapse text-[9px]">
                <thead>
                  <tr className="bg-[var(--bg-card)] border-b border-[var(--border-color)]">
                    <th className="p-1.5 text-[var(--text-secondary)] font-mono">Product</th>
                    <th className="p-1.5 text-[var(--text-secondary)] font-mono">Acquisition Hook</th>
                    <th className="p-1.5 text-[var(--text-secondary)] font-mono">Monetization</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-color)]">
                  {Object.entries(BENCHMARKS).map(([catKey, data]) => (
                    <tr
                      key={catKey}
                      className={category === catKey ? "bg-[var(--accent-purple)]/15 font-bold" : ""}
                    >
                      <td className="p-1.5 font-bold text-[var(--text-primary)]">{data.brand}</td>
                      <td className="p-1.5 text-[var(--text-secondary)] truncate max-w-[100px]">
                        {data.specs.conversion}
                      </td>
                      <td className="p-1.5 text-emerald-400">{data.specs.monetization}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-[8px] text-[var(--text-secondary)] opacity-60">
              * Supports side-by-side export to Markdown, JSON schema, CSV, and printable PDF.
            </div>
          </div>
        )}
      </div>

      {/* Footer Status Bar */}
      <div className="p-2 border-t border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center justify-between text-[8px] text-[var(--text-secondary)] shrink-0">
        <span className="flex items-center gap-1">
          <ShieldCheck size={9} className="text-emerald-400" /> BYOK Zero-Tracking
        </span>
        <span className="text-[var(--accent-purple)] font-bold">100 BENCHMARKS LOADED</span>
      </div>
    </div>
  );
}
