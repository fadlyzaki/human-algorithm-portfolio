import React from "react";
import { Terminal, Activity } from "lucide-react";

const BrandStrategy = ({ isXRayMode }) => {
  const renderNode = (title, items) => (
    <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,var(--accent)_0%,transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

      {/* Corner Bracket */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors" />

      <div className="flex items-center gap-3 mb-6 border-b border-[var(--border-color)] pb-4 relative z-10">
        <div className="w-1.5 h-1.5 bg-[var(--border-color)] group-hover:bg-[var(--accent)] transition-colors rounded-sm" />
        <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h4>
      </div>

      <ul className="space-y-3 relative z-10 flex-grow flex flex-col justify-end">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="font-mono text-[10px] text-[var(--text-secondary)] mt-0.5 opacity-40 group-hover:text-[var(--accent)] group-hover:opacity-100 transition-colors">
              0{idx + 1}
            </span>
            <span className="text-xs text-[var(--text-secondary)] tracking-wide group-hover:text-[var(--text-primary)] transition-colors leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className={`space-y-16 animate-in slide-in-from-bottom-8 duration-500 py-8 relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
    >
      {isXRayMode && (
        <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
          BrandStrategy.jsx // DataMatrix
        </span>
      )}

      {/* Header Area */}
      <div
        className={`text-center space-y-4 max-w-2xl mx-auto relative ${isXRayMode ? "p-4 border border-dashed border-[var(--text-secondary)]/50" : ""}`}
      >
        {isXRayMode && (
          <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--text-secondary)]">
            Section // Header
          </span>
        )}
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)]">
          System Architect Profile
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--text-primary)]">
          Strategic Core
        </h2>
        <div className="h-1 w-12 bg-[var(--accent)] mx-auto mt-6"></div>
      </div>

      {/* BRAND FOUNDATION */}
      <div
        className={`space-y-8 relative z-10 ${isXRayMode ? "p-4 border border-dashed border-[var(--text-secondary)]/50" : ""}`}
      >
        {isXRayMode && (
          <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--text-secondary)]">
            Section // Foundation Grid
          </span>
        )}

        <div className="flex items-end justify-between border-b border-[var(--border-color)] pb-4 mb-8">
          <h3 className="text-lg font-bold tracking-widest text-[var(--text-primary)] flex items-center gap-3 uppercase font-mono">
            <Terminal size={18} className="text-[var(--accent)]" />
            Foundation Constants
          </h3>
          <div className="hidden md:block font-mono text-[10px] text-[var(--accent)] uppercase px-2 py-1 border border-[var(--accent)]/30 bg-[var(--accent)]/10">
            Read_Only // Root
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderNode("Archetype", [
            "Systems Architect",
            "Product Strategist",
            "UX Engineer",
          ])}
          {renderNode("Directive", [
            "Reduce Entropy",
            "Enforce Scalability",
            "Elevate Standards",
          ])}
          {renderNode("Principles", [
            "Data-Driven",
            "Framework Agnostic",
            "A11y Compliant",
          ])}
          {renderNode("Positioning", [
            "0 to 1 Velocity",
            "Enterprise Scale",
            "Cross-Functional Bridge",
          ])}
          {renderNode("System Voice", [
            "Clinical",
            "Authoritative",
            "Unambiguous",
          ])}
          {renderNode("Manifesto", [
            "Measurement > Bias",
            "Documentation > Lore",
            "Resilience > Flash",
          ])}
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-full h-px bg-[linear-gradient(90deg,transparent_0%,var(--border-color)_50%,transparent_100%)]"></div>

      {/* BRAND ACTIVATION */}
      <div
        className={`space-y-8 relative z-10 ${isXRayMode ? "p-4 border border-dashed border-[var(--text-secondary)]/50" : ""}`}
      >
        {isXRayMode && (
          <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--text-secondary)]">
            Section // Execution Grid
          </span>
        )}

        <div className="flex items-end justify-between border-b border-[var(--border-color)] pb-4 mb-8">
          <h3 className="text-lg font-bold tracking-widest text-[var(--text-primary)] flex items-center gap-3 uppercase font-mono">
            <Activity size={18} className="text-[var(--accent-amber)]" />
            Execution Vectors
          </h3>
          <div className="hidden md:block font-mono text-[10px] text-[var(--accent-amber)] uppercase px-2 py-1 border border-[var(--accent-amber)]/30 bg-[var(--accent-amber)]/10">
            Runtime // Active
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderNode("Focus", [
            "Design Operations",
            "Component API",
            "Technical Debt Reduction",
          ])}
          {renderNode("Tooling", [
            "Figma Variables",
            "React Components",
            "Storybook Specs",
          ])}
          {renderNode("Capabilities", [
            "System Audit",
            "Motion Physics",
            "LLM Orchestration",
          ])}
          {renderNode("Methodology", [
            "Atomic Design",
            "BEM Architecture",
            "Continuous Delivery",
          ])}
          {renderNode("Impact", [
            "Dev Velocity",
            "Adoption Rate",
            "Reduced Bug Count",
          ])}
          {renderNode("Advocacy", [
            "Design Ops",
            "Cross-team Syncs",
            "Governance Standards",
          ])}
          {renderNode("Research", [
            "Heuristic Audits",
            "Quantitative Sync",
            "Telemetry Analysis",
          ])}
          {renderNode("Evolution", [
            "AI Workflows",
            "Spatial Computing",
            "Edge Delivery",
          ])}
        </div>
      </div>
    </div>
  );
};

export default BrandStrategy;
