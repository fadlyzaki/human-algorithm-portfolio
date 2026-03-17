import React, { useState } from "react";
import {
  Terminal,
  Grid3X3,
  Cpu,
  Layers,
  Box,
  Activity,
  Zap,
  Eye,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import { SYSTEM_CONFIG } from "../../config/constants";
import DefaultCard from "../cards/DefaultCard";
import SystemMonitor from "../SystemMonitor";
import UIDiagram from "../diagrams/UIDiagram";


const ComponentForge = ({ isXRayMode, setIsXRayMode }) => {
  const [isConfirmingDestructive, setIsConfirmingDestructive] = useState(false);

  return (
    <div className="space-y-16 animate-in slide-in-from-right-4 duration-500">
      {/* X-RAY TOGGLE CONTROLS FOR THIS SECTION */}
      <div className="flex justify-between items-end border-b border-[var(--border-color)] pb-4">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-accent)] flex items-center gap-2 mb-2">
            <Terminal size={14} /> Spec Testing Crucible
          </h3>
          <p className="text-xs text-[var(--text-secondary)]">
            Toggle X-Ray to inspect CSS construction classes and structural
            bounding boxes.
          </p>
        </div>
        <button
          onClick={() => setIsXRayMode(!isXRayMode)}
          className={`flex items-center gap-2 px-4 py-4 md:py-3 font-mono text-[9px] uppercase tracking-widest border transition-all duration-300 ${isXRayMode ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent)] shadow-[0_0_15px_-5px_var(--accent)]" : "bg-[var(--bg-void)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"}`}
        >
          <Eye size={12} className={isXRayMode ? "animate-pulse" : ""} />
          {isXRayMode ? "X-Ray Active" : "Enable X-Ray"}
        </button>
      </div>

      {/* SECTION 1: SYSTEM COMPONENTS */}
      <div className="flex justify-between items-end border-b border-[var(--border-color)] pb-4">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2">
          <Layers size={14} /> Production_Ready_Modules
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div className="space-y-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
            <Box size={14} /> Containers
          </h3>

          <div className="space-y-8">
            {/* Real Component 1: DefaultCard */}
            <div
              className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
            >
              {isXRayMode && (
                <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                  DefaultCard.jsx // Container.jsx
                </span>
              )}
              <div className="h-64 relative z-10">
                <DefaultCard
                  type="SYSTEM_AUDIT"
                  expanded={true}
                  showChrome={true}
                />
              </div>
            </div>

            {/* Real Component 2: SystemMonitor */}
            <div
              className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
            >
              {isXRayMode && (
                <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                  SystemMonitor.jsx
                </span>
              )}
              <div className="relative z-10">
                <SystemMonitor
                  skills={[
                    { name: "Figma", icon: Layers },
                    { name: "React", icon: Cpu },
                    { name: "Tailwind CSS", icon: Activity },
                    { name: "Vite & Build Tools", icon: Zap },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
            <Activity size={14} /> Data_Visualization
          </h3>

          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] space-y-8">
            {/* Real Component 3: UIDiagram */}
            <div
              className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
            >
              {isXRayMode && (
                <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                  UIDiagram.jsx // Node Architecture
                </span>
              )}
              <div className="h-48 overflow-hidden bg-[var(--bg-void)] border border-[var(--border-color)] relative z-10 flex items-center justify-center">
                <div className="scale-75 origin-center w-full h-full flex items-center justify-center">
                  <UIDiagram />
                </div>
              </div>
            </div>

            {/* Real Component 4: Static Progress Bars */}
            <div
              className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
            >
              {isXRayMode && (
                <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                  div // Kinetic_Load
                </span>
              )}
              <div className="space-y-4 relative z-10">
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">
                    <span>System Load</span>
                    <span className="text-[var(--accent)]">84%</span>
                  </div>
                  <div className="h-1 w-full bg-[var(--bg-void)] overflow-hidden">
                    <div className="h-full bg-[var(--accent)] w-[84%] relative animate-pulse">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">
                    <span>Network Flux</span>
                    <span className="text-[var(--accent-blue)]">62%</span>
                  </div>
                  <div className="h-1 w-full bg-[var(--bg-void)] overflow-hidden">
                    <div className="h-full bg-[var(--accent-blue)] w-[62%] relative opacity-70"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Missing Bento Grid Component restored */}
        <div className="col-span-1 md:col-span-2 space-y-6 mt-8">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
            <Grid3X3 size={14} /> Bento_Grid_Pattern
          </h3>
          <div
            className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
          >
            {isXRayMode && (
              <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                Grid.Layout // BentoGrid
              </span>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {/* Feature Card 1 */}
              <div className="md:col-span-2 p-8 border border-[var(--border-color)] bg-[var(--bg-card)] group hover:border-[var(--accent)] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Activity size={80} />
                </div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
                  Core Module
                </h4>
                <h3 className="text-2xl font-bold tracking-tight mb-2">
                  Primary Payload
                </h3>
                <p className="text-[var(--text-secondary)] text-sm max-w-md">
                  High-density data visualization components. Designed to render
                  complex metrics within severe spatial constraints.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between group hover:border-[var(--text-primary)] transition-colors">
                <ShieldAlert
                  size={24}
                  className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
                />
                <div className="mt-8">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                    Status
                  </h4>
                  <p className="font-bold text-lg">Secure Auth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: ATOMIC ELEMENTS */}
      <div className="space-y-6">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
          <Box size={14} /> Core_Input_Atoms
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : "p-8 border border-[var(--border-color)] bg-[var(--bg-card)]"}`}
          >
            {isXRayMode && (
              <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                button // Atoms
              </span>
            )}
            <div className="space-y-8 relative z-10">
              {/* Button Variants */}
              <div className="space-y-4">
                <label className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
                  Primary_Directives
                </label>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[var(--text-primary)] text-[var(--bg-void)] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                    Primary Action
                  </button>
                  <button className="px-6 py-3 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] text-xs font-bold uppercase tracking-widest transition-all">
                    Secondary
                  </button>
                </div>
              </div>

              {/* Terminal Input */}
              <div className="space-y-4">
                <label className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
                  Terminal_Input
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[var(--accent)] text-xs">
                    &gt;
                  </span>
                  <input
                    type="text"
                    placeholder="Awaiting command..."
                    className="w-full bg-[var(--bg-void)] border border-[var(--border-color)] p-3 pl-8 font-mono text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-secondary)]/50"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative flex flex-col justify-between ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : "p-8 border border-[var(--border-color)] bg-[var(--bg-card)]"}`}
          >
            {isXRayMode && (
              <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                span // Badges
              </span>
            )}
            <div className="space-y-8 relative z-10">
              {/* Status Badges */}
              <div className="space-y-4">
                <label className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
                  System_States
                </label>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--accent-green)]/10 text-[var(--accent-green)] border border-[var(--accent-green)]/20 font-mono text-[10px] uppercase tracking-widest">
                    <ShieldCheck size={10} /> Operational
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--accent-red)]/10 text-[var(--accent-red)] border border-[var(--accent-red)]/20 font-mono text-[10px] uppercase tracking-widest">
                    <AlertTriangle size={10} /> Critical
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMPANION PROTOTYPES (NEW) */}
      <div className="border-t border-[var(--border-color)] pt-12">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-blue)] flex items-center gap-2 mb-8">
          <Cpu size={14} /> Agentic_Companion_Protocols
        </h3>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-2">
              Sprite_Matrix // 1x8 Horizontal Sheet
            </h4>
            <div className="bg-[var(--bg-void)] p-8 border border-[var(--border-color)] flex items-center justify-center overflow-hidden">
               <div className="flex gap-4">
                 {['idle', 'walk', 'think'].map(state => (
                   <div key={state} className="flex flex-col items-center gap-2">
                     <div className="w-16 h-20 overflow-hidden bg-white/10 rounded-lg">
                       <img src={`/images/sprite-${state}.png`} className={`sprite-img sprite-anim-${state} scale-75`} alt={state} />
                     </div>
                     <span className="font-mono text-[9px] uppercase opacity-50">{state}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-2">
              Context_Aware_Logic // TL;DR Protocols
            </h4>
            <div className="bg-[var(--bg-card)] p-6 border border-[var(--border-color)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
                <span className="font-mono text-[10px] uppercase tracking-widest">Route Recognition</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The agent maps `location.pathname` segments to specific context strings in `translations.js`. If no match exists, it falls back to a structural generic message.
              </p>
              <div className="p-3 bg-[var(--bg-void)] rounded font-mono text-[9px] text-[var(--text-primary)]">
                &gt; GET /case-study/workforce-chat<br/>
                &gt; LOADING: virtual_assistant.context.workforce-chat
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentForge;
