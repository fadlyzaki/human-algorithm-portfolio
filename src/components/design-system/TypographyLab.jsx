import React from "react";
import { Terminal, Type } from "lucide-react";
import { SYSTEM_CONFIG } from "../../config/constants";

const TypographyLab = ({ isXRayMode }) => (
  <div
    className={`space-y-12 animate-in slide-in-from-left-4 duration-500 relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
  >
    {isXRayMode && (
      <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
        TypographyLab.jsx // Scales
      </span>
    )}
    <div
      className={`border border-[var(--border-color)] p-8 md:p-12 relative overflow-hidden bg-[var(--bg-card)] group hover:border-[var(--accent)] transition-colors ${isXRayMode ? "border-dashed border-[var(--text-secondary)]/50" : ""}`}
    >
      {isXRayMode && (
        <span className="absolute top-2 left-2 z-20 font-mono text-[8px] text-[var(--text-secondary)]">
          Section // DisplayHero
        </span>
      )}
      <div className="absolute top-4 right-4 font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest border border-[var(--text-secondary)] px-2 py-1 rounded flex items-center gap-2">
        <Type size={10} /> Sans-Serif // Inter
      </div>

      <div className="relative">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[var(--text-primary)] mb-8 leading-[0.9]">
          Human
          <br />
          Algorithm<span className="text-[var(--accent)]">.</span>
        </h1>

        {/* Spec Annotations */}
        <div className="absolute -left-6 top-0 h-full w-px bg-[var(--accent)]/30 hidden group-hover:block"></div>
        <div className="absolute top-1/2 -left-12 -translate-y-1/2 font-mono text-[9px] text-[var(--accent)] hidden group-hover:block rotate-[-90deg]">
          Line-Height: 0.9
        </div>
      </div>

      <p className="text-xl md:text-3xl font-light text-[var(--text-secondary)] max-w-3xl leading-relaxed">
        The quick brown fox jumps over the lazy dog.
        <span className="text-[var(--text-primary)]">
          {" "}
          System architecture requiring resilience vs efficiency.
        </span>
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 relative z-10">
      <div
        className={`border border-[var(--border-color)] p-8 bg-[var(--bg-card)] space-y-4 relative overflow-hidden group hover:border-[var(--accent)] transition-colors ${isXRayMode ? "border-dashed border-[var(--text-secondary)]/50" : ""}`}
      >
        {isXRayMode && (
          <span className="absolute top-2 left-2 z-20 font-mono text-[8px] text-[var(--text-secondary)]">
            Section // Mono_Specs
          </span>
        )}
        <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
          <Terminal size={120} />
        </div>
        <div className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest border-b border-[var(--border-color)] pb-2 mb-4 flex justify-between">
          <span>Monospace // JetBrains Mono</span>
          <span className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
            Tracking: 0em
          </span>
        </div>
        <p className="font-mono text-sm text-[var(--text-primary)] leading-relaxed relative z-10">
          <span className="text-[var(--accent-purple)]">function</span>{" "}
          <span className="text-[var(--accent-blue)]">initiateSequence</span>(){" "}
          {"{"}
          <br />
          &nbsp;&nbsp;<span className="text-[var(--accent-purple)]">
            const
          </span>{" "}
          status ={" "}
          <span className="text-[var(--accent-green)]">
            "{SYSTEM_CONFIG.STATUS}"
          </span>
          ;<br />
          &nbsp;&nbsp;
          <span className="text-[var(--accent-purple)]">return</span> system.
          <span className="text-[var(--accent-blue)]">boot</span>(status);
          <br />
          {"}"}
        </p>
        <div className="flex gap-2 mt-4 pt-4 border-t border-[var(--border-color)] border-dashed">
          <div className="space-y-1">
            <div className="text-[8px] font-mono uppercase text-[var(--text-secondary)]">
              Size
            </div>
            <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
              14px
            </div>
          </div>
          <div className="w-px bg-[var(--border-color)] h-8 mx-2"></div>
          <div className="space-y-1">
            <div className="text-[8px] font-mono uppercase text-[var(--text-secondary)]">
              Weight
            </div>
            <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
              400
            </div>
          </div>
        </div>
      </div>

      <div
        className={`border border-[var(--border-color)] p-8 bg-[var(--bg-card)] flex flex-col justify-center space-y-6 relative ${isXRayMode ? "border-dashed border-[var(--text-secondary)]/50" : ""}`}
      >
        {isXRayMode && (
          <span className="absolute top-2 left-2 z-20 font-mono text-[8px] text-[var(--text-secondary)]">
            Section // Data_Viz_Specs
          </span>
        )}
        <div className="w-full font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest border-b border-[var(--border-color)] pb-2 mb-2">
          Data Visualization // Tabular Numerals
        </div>

        <div className="space-y-2">
          <div className="text-6xl font-bold tracking-tighter text-[var(--text-primary)]">
            98.4<span className="text-3xl text-[var(--accent)]">%</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] block">
            System Efficiency Metric
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-[9px] font-mono text-[var(--text-secondary)] pt-4 border-t border-[var(--border-color)]">
          <div>
            <span className="block opacity-50">Letter Spacing</span>
            <span className="text-[var(--text-primary)]">-0.05em</span>
          </div>
          <div>
            <span className="block opacity-50">Font Selection</span>
            <span className="text-[var(--text-primary)]">Inter Tight</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TypographyLab;
