import React from "react";
import { TerminalWindowCard } from "../home/HomeAbout";
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
import NeuralEcho from "../NeuralEcho";
import ContactScratch from "../ContactScratch";
import BlindsReveal from "../BlindsReveal";


const ComponentForge = ({ isXRayMode, setIsXRayMode }) => {

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
              <div className="space-y-6 relative z-10 p-6 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-lg">
                <div className="space-y-3">
                  <div className="flex justify-between items-center font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Cpu size={12} className="text-[var(--accent)]" /> System Load</span>
                    <span className="text-[var(--accent)] font-bold">84%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[var(--bg-void)] overflow-hidden rounded-full border border-[var(--border-color)]">
                    <div className="h-full bg-[var(--accent)] w-[84%] relative shadow-[0_0_10px_var(--accent)]">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white shadow-[0_0_8px_white] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Zap size={12} className="text-[var(--accent-blue)]" /> Network Flux</span>
                    <span className="text-[var(--accent-blue)] font-bold">62%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[var(--bg-void)] overflow-hidden rounded-full border border-[var(--border-color)]">
                    <div className="h-full bg-[var(--accent-blue)] w-[62%] relative opacity-80 shadow-[0_0_10px_var(--accent-blue)]">
                    </div>
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
                  <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] text-[var(--text-primary)] transition-all font-mono text-xs uppercase tracking-widest shadow-sm hover:shadow-[0_0_15px_-5px_var(--accent)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] group-hover:animate-pulse"></span>
                    Primary Action
                  </button>
                  <button className="group relative inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all font-mono text-xs uppercase tracking-widest bg-transparent">
                    Secondary
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px]">&gt;</span>
                  </button>
                </div>
              </div>

              {/* Terminal Input */}
              <div className="space-y-4">
                <label className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
                  Terminal_Input
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 bg-[var(--bg-void)] rounded text-[var(--accent)] border border-transparent group-focus-within:border-[var(--accent)]/30 transition-colors">
                    <Terminal size={12} />
                  </div>
                  <input
                    type="text"
                    placeholder="Awaiting command_ sequence..."
                    className="w-full bg-[var(--bg-void)] border border-[var(--border-color)] p-4 pl-12 font-mono text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20 transition-all placeholder:text-[var(--text-secondary)]/40 rounded-sm"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-widest text-[var(--text-secondary)] font-mono opacity-0 group-focus-within:opacity-100 transition-opacity">
                    [ENTER] TO SUBMIT
                  </div>
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

      {/* SECTION 3: HIGH-FIDELITY INTERACTIONS (NEW) */}
      <div className="border-t border-[var(--border-color)] pt-12 space-y-6">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] flex items-center gap-2 mb-8">
          <Zap size={14} /> High-Fidelity_Interactions
        </h3>

        <div className="grid grid-cols-1 gap-12 mt-8">
          {/* Neural Echo */}
          <div className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}>
            {isXRayMode && (
              <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                NeuralEcho.jsx // Interaction
              </span>
            )}
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-4">
              Semantic Core // NeuralEcho
            </h4>
            <div className="relative z-10 max-w-2xl">
              <NeuralEcho />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Image Scratch */}
            <div className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}>
              {isXRayMode && (
                <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                  ContactScratch.jsx // Filter Interaction
                </span>
              )}
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-4">
                Hardware Accelerated Scratch // ContactScratch
              </h4>
              <div className="relative z-10 h-64 border border-[var(--border-color)] overflow-hidden rounded-xl">
                 <ContactScratch
                    coverText="SCRATCH TO REVEAL"
                    revealContent={
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--bg-surface)] text-[var(--text-primary)]">
                        <Zap size={32} className="text-[var(--accent)] mb-2" />
                        <span className="font-mono text-xs font-bold">PAYLOAD UNLOCKED</span>
                      </div>
                    }
                 />
              </div>
            </div>

            {/* Blinds Reveal */}
            <div className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}>
              {isXRayMode && (
                <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                  BlindsReveal.jsx // Motion Interaction
                </span>
              )}
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-4">
                Slat Physics // BlindsReveal
              </h4>
              <div className="relative z-10 h-64 border border-[var(--border-color)] overflow-hidden rounded-xl group cursor-pointer bg-[var(--bg-card)]">
                 <BlindsReveal isOpen={true} slats={8} color="rgba(0,0,0,0.8)" staggerDelay={0.04}>
                    <div className="w-full h-full flex items-center justify-center">
                       <span className="font-mono text-[10px] tracking-widest uppercase opacity-50">Hover parent to trigger</span>
                    </div>
                 </BlindsReveal>
              </div>
            </div>
          </div>

          {/* Terminal Window Card (OS Desktop) */}
          <div className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}>
            {isXRayMode && (
              <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
                TerminalWindowCard.jsx // OS Desktop Card
              </span>
            )}
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-4">
              Interactive OS Desktop // TerminalWindowCard
            </h4>
            <div className="relative z-10 h-80 border border-[var(--border-color)] overflow-hidden rounded-xl bg-[var(--bg-card)] p-4">
               <TerminalWindowCard
                  lsOutput="secure_payload.exe"
                  terminalCommand="run secure_payload.exe"
                  executeLabel="[ Execute Prototype ]"
                  accentColorClass="text-[var(--accent)]"
                  accentBgClass="bg-[var(--accent)]/10"
                  accentBorderClass="border-[var(--accent)]/30"
                  hoverBorderClass="hover:border-[var(--accent)]"
               >
                  <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text-primary)] relative z-10 p-6 text-center">
                     <Terminal size={48} className="text-[var(--accent)] mb-4 opacity-50" />
                     <h3 className="font-mono text-sm uppercase tracking-widest text-[var(--accent)] mb-2">Payload Executed</h3>
                     <p className="text-xs text-[var(--text-secondary)] text-center max-w-xs">The TerminalWindowCard safely isolates state to maintain draggable physics constraints across the grid layout.</p>
                  </div>
               </TerminalWindowCard>
            </div>
          </div>
        </div>
      </div>

      {/* COMPANION PROTOTYPES */}
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
              Gemini_Agentic_Logic // Edge Protocols
            </h4>
            <div className="bg-[var(--bg-card)] p-6 border border-[var(--border-color)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-blue)]">Live LLM Connection Active</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The agent intercepts chat and TL;DR commands, injecting the portfolio context directly into a secure <span className="text-[var(--text-primary)] font-mono">/api/echoz-chat</span> Serverless Edge Function powered by Gemini 1.5 Flash.
              </p>
              <div className="p-3 bg-[var(--bg-void)] rounded font-mono text-[9px] text-[var(--text-primary)]">
                &gt; POST /api/echoz-chat<br/>
                &gt; PAYLOAD: &#123; message, currentPath &#125;<br/>
                &gt; STATUS: 200 OK (85ms latency)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentForge;
