import React from "react";

const ColorCard = ({ name, token, hex }) => (
  <div className="group border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-all duration-300 p-1 hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1">
    <div
      className="h-32 w-full bg-[var(--bg-surface)] relative overflow-hidden"
      style={{ backgroundColor: `var(${token})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine" />
      <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
        {hex}
      </div>
    </div>
    <div className="p-5 space-y-3">
      <div className="flex justify-between items-center">
        <h4 className="font-mono text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
          {name}
        </h4>
        <div
          className="w-1.5 h-1.5 rounded-full shadow-sm"
          style={{ backgroundColor: `var(${token})` }}
        ></div>
      </div>
      <div className="space-y-2 border-t border-[var(--border-color)] pt-3">
        <div className="flex justify-between font-mono text-[9px] text-[var(--text-secondary)] items-center">
          <span className="opacity-40 mr-3 whitespace-nowrap">TOKEN</span>
          <span className="bg-[var(--bg-surface)] px-1.5 py-0.5 rounded truncate max-w-[120px] md:max-w-full" title={token}>{token}</span>
        </div>
        <div className="flex justify-between font-mono text-[9px] text-[var(--text-secondary)] items-center mt-1.5">
          <span className="opacity-40 mr-3 whitespace-nowrap">HEX</span>
          <span className="select-all hover:text-[var(--text-primary)] cursor-text truncate max-w-[120px] md:max-w-full text-right" title={hex}>
            {hex}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const ChromaticsGrid = ({ isXRayMode }) => (
  <div
    className={`space-y-16 animate-in fade-in zoom-in-95 duration-500 relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
  >
    {isXRayMode && (
      <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
        ChromaticsGrid.jsx // Core_Tokens
      </span>
    )}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
      <ColorCard name="VOID" token="--bg-void" hex="var(--bg-surface)" />
      <ColorCard name="SURFACE" token="--bg-surface" hex="var(--bg-surface)" />
      <ColorCard name="TEXT_PRI" token="--text-primary" hex="#F4F4F5" />
      <ColorCard name="TEXT_SEC" token="--text-secondary" hex="#A1A1AA" />
    </div>

    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="h-px bg-[var(--border-color)] flex-grow"></div>
        <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">
          Semantic_Tokens
        </span>
        <div className="h-px bg-[var(--border-color)] flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ColorCard name="SYS_BLUE" token="--accent-blue" hex="#3B82F6" />
        <ColorCard name="SYS_GREEN" token="--accent-green" hex="var(--accent-green)" />
        <ColorCard name="SYS_AMBER" token="--accent-amber" hex="var(--accent-amber)" />
        <ColorCard name="SYS_RED" token="--accent-red" hex="var(--accent-red)" />
      </div>
    </div>
  </div>
);

export default ChromaticsGrid;
