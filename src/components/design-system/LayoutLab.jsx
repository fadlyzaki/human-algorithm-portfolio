import React from "react";
import { Grid3X3, Activity } from "lucide-react";

const GRID_COLUMNS = Array.from({ length: 12 });
const SPRITE_URL = "/images/sprite-walk.png";

const LayoutLab = ({ isXRayMode }) => (
  <div
    className={`space-y-16 animate-in slide-in-from-bottom-8 duration-500 relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
  >
    {isXRayMode && (
      <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
        LayoutLab.jsx // Stack
      </span>
    )}

    {/* GRID SYSTEM */}
    <div
      className={`space-y-6 relative z-10 ${isXRayMode ? "p-4 border border-dashed border-[var(--text-secondary)]/50" : ""}`}
    >
      {isXRayMode && (
        <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--text-secondary)]">
          Section // GridSystem
        </span>
      )}
      <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
        <Grid3X3 size={14} /> Spatial Architecture (12-Col)
      </h3>

      <div className="relative border border-[var(--border-color)] bg-[var(--bg-surface)] h-48 overflow-hidden">
        {/* Visual Grid Layer */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 px-4 md:px-12 pointer-events-none opacity-20">
          {GRID_COLUMNS.map((_, i) => (
            <div
              key={i}
              className="h-full bg-[var(--accent-red)]/20 border-x border-[var(--accent-red)]/30 flex flex-col justify-between py-2 items-center"
            >
              <span className="text-[6px] font-mono text-[var(--accent-red)]">
                {i + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Content Simulation */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 px-4 md:px-12 items-center">
          <div className="col-span-12 md:col-span-3 h-24 bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center font-mono text-xs text-[var(--text-secondary)]">
            Sidebar
          </div>
          <div className="col-span-12 md:col-span-9 h-24 bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center font-mono text-xs text-[var(--text-secondary)]">
            Main Content Area
          </div>
        </div>

        {/* Measurements */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[var(--text-secondary)] bg-[var(--bg-void)] px-2 border border-[var(--border-color)] rounded">
          Max-Width: 1280px // Class: max-w-7xl
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
          <span className="block font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-widest mb-2">
            Gutters
          </span>
          <div className="text-xl font-bold text-[var(--text-primary)]">
            24px
          </div>
          <code className="text-xs text-[var(--accent)]">gap-6</code>
        </div>
        <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
          <span className="block font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-widest mb-2">
            Margins
          </span>
          <div className="text-xl font-bold text-[var(--text-primary)]">
            48px
          </div>
          <code className="text-xs text-[var(--accent)]">px-12</code>
        </div>
      </div>
    </div>

    {/* MOTION CURVES */}
    <div
      className={`space-y-6 relative z-10 ${isXRayMode ? "p-4 border border-dashed border-[var(--text-secondary)]/50" : ""}`}
    >
      {isXRayMode && (
        <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--text-secondary)]">
          Section // MotionCurves
        </span>
      )}
      <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
        <Activity size={14} /> Kinetic Architecture & Physics
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Curve 1: Default */}
        <div className="space-y-4 group cursor-pointer">
          <div className="h-32 border border-[var(--border-color)] bg-[var(--bg-card)] relative overflow-hidden flex items-center justify-center">
            <div className="w-8 h-8 bg-[var(--accent-blue)] rounded shadow-lg group-hover:translate-x-32 transition-transform duration-500 ease-out"></div>
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              preserveAspectRatio="none"
            >
              <path
                d="M0,128 C50,128 50,0 200,0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Soft Out
            </h4>
            <code className="text-xs text-[var(--text-secondary)]">
              ease-out // 500ms
            </code>
          </div>
        </div>

        {/* Curve 2: Elastic */}
        <div className="space-y-4 group cursor-pointer">
          <div className="h-32 border border-[var(--border-color)] bg-[var(--bg-card)] relative overflow-hidden flex items-center justify-center">
            <div className="w-8 h-8 bg-[var(--accent-green)] rounded shadow-lg group-hover:scale-150 transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
          </div>
          <div>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Elastic Pop
            </h4>
            <code className="text-xs text-[var(--text-secondary)]">
              cubic-bezier(.34,1.56,...)
            </code>
          </div>
        </div>

        {/* Curve 3: Linear/Glitch */}
        <div className="space-y-4 group cursor-pointer">
          <div className="h-32 border border-[var(--border-color)] bg-[var(--bg-card)] relative overflow-hidden flex items-center justify-center">
            <div className="w-full h-1 bg-[var(--accent-red)] group-hover:opacity-0 animate-pulse"></div>
          </div>
          <div>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Signal Pulse
            </h4>
            <code className="text-xs text-[var(--text-secondary)]">
              linear // infinite
            </code>
          </div>
        </div>
      </div>
    </div>

    {/* KINETIC NAVIGATION (NEW) */}
    <div
      className={`space-y-6 relative z-10 ${isXRayMode ? "p-4 border border-dashed border-[var(--text-secondary)]/50" : ""}`}
    >
      <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
        <Activity size={14} /> Global_Kinetic_Navigation
      </h3>

      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-8 space-y-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-4">
            <h4 className="font-bold text-sm">The Scroll-Track Pattern</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              We transformed the abstract concept of "page depth" into a physical track. A 1/8th scale sprite travels along the X-axis mapping 0-100% of the document height, providing tactile awareness of current location.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-[var(--bg-void)] rounded font-mono text-[9px]">
                <span className="opacity-50">STIFFNESS:</span> 100<br/>
                <span className="opacity-50">DAMPING:</span> 30
              </div>
              <div className="p-3 bg-[var(--bg-void)] rounded font-mono text-[9px]">
                <span className="opacity-50">METHOD:</span> useSpring<br/>
                <span className="opacity-50">RENDER:</span> fixed-bottom
              </div>
            </div>
          </div>
          <div className="w-full md:w-64 h-32 bg-[var(--bg-void)] rounded-lg relative overflow-hidden border border-[var(--border-color)]">
             <div className="absolute bottom-4 left-4 w-12 h-16 opacity-30">
               <img loading="lazy" decoding="async" src={SPRITE_URL} className="sprite-img sprite-anim-walk scale-50" alt="demo" />
             </div>
             <div className="absolute bottom-1 w-full h-[1px] bg-[var(--accent)] opacity-20" />
          </div>
          {/* Cursor Physics Data */}
          <div className="flex-1 space-y-4">
            <h4 className="font-bold text-sm">Framer-Fidelity Cursor Physics</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Native cursor events are suppressed in favor of a dual-layer, framer-motion powered pointer. It features a responsive dot (stiffness: 1000, damping: 28) and a trailing ring (stiffness: 250, damping: 20) to mimic high-end interactive inertia.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-3 bg-[var(--bg-void)] rounded font-mono text-[9px]">
                 <span className="opacity-50">DOT_STIFFNESS:</span> 1000<br/>
                 <span className="opacity-50">DOT_DAMPING:</span> 28
               </div>
               <div className="p-3 bg-[var(--bg-void)] rounded font-mono text-[9px]">
                 <span className="opacity-50">RING_STIFFNESS:</span> 250<br/>
                 <span className="opacity-50">RING_DAMPING:</span> 20
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LayoutLab;
