import React, { useState } from "react";
import {
  Terminal,
  Type,
  Grid3X3,
  Cpu,
  Hash,
  MoveRight,
  Layers,
  Box,
  Activity,
  ShieldAlert,
  ShieldCheck,
  Fingerprint,
  Scale,
  Zap,
  Eye,
  Lock,
  UserCheck,
  AlertTriangle,
  Target,
  ClipboardList,
  FileWarning,
  CheckCircle2,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import DefaultCard from "./cards/DefaultCard";
import SystemMonitor from "./SystemMonitor";
import UIDiagram from "./diagrams/UIDiagram";
import { SYSTEM_CONFIG } from "../config/constants";

const DesignSystemViewer = () => {
  const { isDark } = useTheme();
  const [isXRayMode, setIsXRayMode] = useState(false);
  const [activeSection, setActiveSection] = useState("chromatics");

  const sectors = [
    { id: "chromatics", label: "01 // CHROMATICS", icon: Hash },
    { id: "typography", label: "02 // TYPOGRAPHY", icon: Type },
    { id: "components", label: "03 // MODULES", icon: Grid3X3 },
    { id: "layout", label: "04 // GRID & MOTION", icon: MoveRight },
    { id: "brand", label: "05 // IDENTITY", icon: Fingerprint },
    { id: "strategy", label: "06 // STRATEGY", icon: Target },
    { id: "ux", label: "07 // PRINCIPLES", icon: Scale },
    { id: "governance", label: "08 // GOVERNANCE", icon: Lock },
    { id: "audit", label: "09 // AUDIT", icon: ClipboardList },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    // Optional: Reset scroll to top of the main container when switching tabs
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Note: IntersectionObserver removed, as we are no longer using continuous scrolling.

  return (
    <section className="w-full bg-[var(--bg-void)] relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? "#FFF" : "#000"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#FFF" : "#000"} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto border-x border-[var(--border-color)] bg-[var(--bg-void)]/50 backdrop-blur-sm relative z-10 flex flex-col md:flex-row">
        {/* Sticky Sidebar */}
        <aside className="w-full md:w-64 border-r border-[var(--border-color)] bg-[var(--bg-void)]/80 backdrop-blur-md z-40 md:sticky md:top-[72px] md:h-[calc(100vh-72px)] overflow-y-auto">
          <div className="p-8 space-y-8">
            <div>
              <h2 className="text-xl font-bold tracking-tighter text-[var(--text-primary)] mb-1">
                KERNEL<span className="text-[var(--accent)]">.SYS</span>
              </h2>
              <div className="h-0.5 w-12 bg-[var(--accent)]"></div>
            </div>

            <div className="space-y-1">
              {sectors.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => scrollToSection(sector.id)}
                  className={`w-full group flex items-center gap-3 px-4 py-3 text-[10px] font-mono font-bold uppercase tracking-widest transition-all text-left border-l-2 ${activeSection === sector.id ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10" : "border-transparent text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"}`}
                >
                  <sector.icon
                    size={12}
                    className={`transition-colors ${activeSection === sector.id ? "text-[var(--accent)]" : "text-[var(--text-secondary)] group-hover:text-[var(--accent)]"}`}
                  />
                  {sector.label.split(" // ")[1]}
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-[var(--border-color)]">
              <button
                onClick={() => setIsXRayMode(!isXRayMode)}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 font-mono text-[9px] uppercase tracking-widest border transition-all duration-300 ${isXRayMode ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent)] shadow-[0_0_15px_-5px_var(--accent)]" : "bg-[var(--bg-void)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"}`}
              >
                <Eye size={12} className={isXRayMode ? "animate-pulse" : ""} />
                {isXRayMode ? "X-Ray Active" : "Enable X-Ray"}
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-h-screen">
          {/* Header Terminal */}
          <header className="border-b border-[var(--border-color)] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <Grid3X3 size={400} strokeWidth={0.5} />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] font-mono text-[10px] uppercase tracking-widest font-bold backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>System_Diagnostic_Mode_active</span>
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--text-primary)] mb-8">
                  DESIGN_KERNEL
                  <span className="text-[var(--accent)]">.SYS</span>
                </h1>
                <div className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest max-w-xl space-y-3">
                  <p>
                    &gt; Executing visual language protocols{" "}
                    {SYSTEM_CONFIG.VERSION}
                  </p>
                  <p>&gt; Target: Human_Cognition_Optimization</p>
                  <p>
                    &gt; Status:{" "}
                    <span className="text-[var(--accent-green)]">
                      {SYSTEM_CONFIG.STATUS}
                    </span>
                  </p>
                  <p>&gt; Architect: Systems Thinker</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-8 md:p-12 min-h-[800px] relative">
            {activeSection === "chromatics" && (
              <section
                id="chromatics"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-8 flex items-center gap-3">
                  <Hash size={14} /> [01] Chromatics_Architecture
                </h2>
                <ChromaticsGrid isXRayMode={isXRayMode} />
              </section>
            )}

            {activeSection === "typography" && (
              <section
                id="typography"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-8 flex items-center gap-3">
                  <Type size={14} /> [02] Typographic_Protocols
                </h2>
                <TypographyLab isXRayMode={isXRayMode} />
              </section>
            )}

            {activeSection === "components" && (
              <section
                id="components"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-8 flex items-center gap-3">
                  <Grid3X3 size={14} /> [03] Module_Forge
                </h2>
                <ComponentForge
                  isXRayMode={isXRayMode}
                  setIsXRayMode={setIsXRayMode}
                />
              </section>
            )}

            {activeSection === "layout" && (
              <section
                id="layout"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-8 flex items-center gap-3">
                  <MoveRight size={14} /> [04] Grid_&_Motion_Physics
                </h2>
                <LayoutLab isXRayMode={isXRayMode} />
              </section>
            )}

            {activeSection === "brand" && (
              <section
                id="brand"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-8 flex items-center gap-3">
                  <Fingerprint size={14} /> [05] Persona_Identity
                </h2>
                <BrandIdentity isXRayMode={isXRayMode} />
              </section>
            )}

            {activeSection === "strategy" && (
              <section
                id="strategy"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-8 flex items-center gap-3">
                  <Target size={14} /> [06] Strategic_Manifesto
                </h2>
                <BrandStrategy isXRayMode={isXRayMode} />
              </section>
            )}

            {activeSection === "ux" && (
              <section
                id="ux"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-8 flex items-center gap-3">
                  <Scale size={14} /> [07] Interaction_Axioms
                </h2>
                <UXPrinciples isXRayMode={isXRayMode} />
              </section>
            )}

            {activeSection === "governance" && (
              <section
                id="governance"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-8 flex items-center gap-3">
                  <Lock size={14} /> [08] System_Governance
                </h2>
                <GovernanceLab isXRayMode={isXRayMode} />
              </section>
            )}

            {activeSection === "audit" && (
              <section
                id="audit"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-8 flex items-center gap-3">
                  <ClipboardList size={14} /> [09] Token_Audit_Report
                </h2>
                <AuditReport isXRayMode={isXRayMode} />
              </section>
            )}
          </div>

          {/* Footer Data Line */}
          <footer className="border-t border-[var(--border-color)] p-6 flex justify-between items-center font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest bg-[var(--bg-surface)]">
            <div className="flex gap-8">
              <span>
                Mem: {SYSTEM_CONFIG.MEM_USAGE} // Threads:{" "}
                {SYSTEM_CONFIG.THREADS}
              </span>
              <span>Uptime: {SYSTEM_CONFIG.UPTIME}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
              <span>System {SYSTEM_CONFIG.STATUS}</span>
            </div>
          </footer>
        </main>
      </div>
    </section>
  );
};

// --- SECTORS ---

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
      <div className="space-y-1.5 border-t border-[var(--border-color)] pt-2">
        <div className="flex justify-between font-mono text-[9px] text-[var(--text-secondary)]">
          <span className="opacity-40">TOKEN</span>
          <span className="bg-[var(--bg-surface)] px-1 rounded">{token}</span>
        </div>
        <div className="flex justify-between font-mono text-[9px] text-[var(--text-secondary)]">
          <span className="opacity-40">HEX</span>
          <span className="select-all hover:text-[var(--text-primary)] cursor-text">
            {hex}
          </span>
        </div>
      </div>
    </div>
  </div>
);

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
          className={`flex items-center gap-2 px-4 py-3 font-mono text-[9px] uppercase tracking-widest border transition-all duration-300 ${isXRayMode ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent)] shadow-[0_0_15px_-5px_var(--accent)]" : "bg-[var(--bg-void)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"}`}
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

      {/* DESTRUCTIVE ACTION GUARDRAILS */}
      <div className="border-t border-[var(--border-color)] pt-12">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-red)] flex items-center gap-2 mb-8">
          <ShieldAlert size={14} /> Destructive Action Guardrails
        </h3>

        <div
          className={`relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : "p-8 border border-[var(--accent-red)]/20 bg-[var(--bg-card)]"}`}
        >
          {isXRayMode && (
            <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
              Guardrail // Double-Confirm Pattern
            </span>
          )}

          <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
            <ShieldAlert size={120} className="text-[var(--accent-red)]" />
          </div>
          <div className="space-y-2 relative z-10 max-w-sm">
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              Purge Instance Data
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Irreversible operation. Requires double-confirmation friction
              pattern.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto">
            {!isConfirmingDestructive ? (
              <button
                onClick={() => setIsConfirmingDestructive(true)}
                className="w-full md:w-auto border border-[var(--accent-red)]/30 text-[var(--accent-red)] hover:bg-[var(--accent-red)]/10 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                <AlertTriangle size={14} /> Initiate Purge
              </button>
            ) : (
              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto animate-in slide-in-from-right-4 duration-300">
                <input
                  type="text"
                  placeholder="Type 'PURGE' to confirm"
                  className="bg-[var(--bg-void)] border border-[var(--accent-red)]/50 p-3 font-mono text-xs text-[var(--accent-red)] focus:outline-none focus:border-[var(--accent-red)] transition-colors placeholder:text-[var(--accent-red)]/50"
                  readOnly
                />
                <div className="flex gap-2">
                  <button className="flex-1 bg-[var(--accent-red)] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap">
                    Confirm
                  </button>
                  <button
                    onClick={() => setIsConfirmingDestructive(false)}
                    className="px-4 py-3 text-xs font-mono uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystemViewer;

const BrandIdentity = ({ isXRayMode }) => (
  <div
    className={`space-y-16 animate-in slide-in-from-bottom-8 duration-500 relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
  >
    {isXRayMode && (
      <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
        BrandIdentity.jsx // Grid.2Col
      </span>
    )}
    <div className="grid md:grid-cols-2 gap-12 relative z-10">
      <div
        className={`space-y-6 relative ${isXRayMode ? "p-4 border border-dashed border-[var(--text-secondary)]/50" : ""}`}
      >
        {isXRayMode && (
          <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--text-secondary)]">
            Col 1 // PersonaCards
          </span>
        )}
        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
          <Fingerprint size={14} /> Persona Architecture
        </h3>
        <div className="space-y-4">
          <PersonaCard
            role="The Architect"
            icon={Cpu}
            color="var(--accent-red)"
            desc="Enforces system scalability and data integrity. Veto power over schema changes."
            quote="Adding this state to Root will trigger a re-render. Blocked."
          />
          <PersonaCard
            role="The Warden"
            icon={ShieldAlert}
            color="var(--accent-red)"
            desc="Platform integrity and security. Zero-trust policy on instance isolation."
            quote="This resolver bypasses the Default Deny policy. Essential breach."
          />
          <PersonaCard
            role="The Auditor"
            icon={Terminal}
            color="var(--accent-green)"
            desc="Enforces technical budgets and token semantics. Anti-entropy agent."
            quote="This hardcoded value increases bundle size risk. Rejected."
          />
        </div>
      </div>

      <div
        className={`space-y-6 relative ${isXRayMode ? "p-4 border border-dashed border-[var(--text-secondary)]/50" : ""}`}
      >
        {isXRayMode && (
          <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--text-secondary)]">
            Col 2 // VisualIdentity
          </span>
        )}
        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
          <UserCheck size={14} /> Visual Identity
        </h3>
        <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Fingerprint size={120} />
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
              Logomark
            </span>
            <div className="text-4xl mt-2">🧢 Fadlyzaki</div>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
              ID Card Data
            </span>
            <div className="font-mono text-xs text-[var(--text-primary)] leading-relaxed p-4 bg-[var(--bg-void)] border border-[var(--border-color)]">
              ROOT_ACCESS
              <br />
              HUMAN BY DESIGN
              <br />
              UZZAKI, FADLY 🧢
              <br />
              Product Designer // Systems Thinker
              <br />
              ID_NO: 1407-1995
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const UXPrinciples = ({ isXRayMode }) => (
  <div
    className={`relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
  >
    {isXRayMode && (
      <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
        UXPrinciples.jsx // Grid.3Col
      </span>
    )}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in zoom-in-95 duration-500 relative z-10">
      <PrincipleCard
        num="01"
        title="Zero Trust Data"
        icon={Lock}
        desc="Assume all external data is hostile. Processing stays local. Client-side sanitization enforced before DOM injection."
      />
      <PrincipleCard
        num="02"
        title="Graceful Degradation"
        icon={Activity}
        desc="Core workflows must survive sub-optimal conditions. If WebGL fails, fallback to SVG. If JS fails, SSR must deliver root content."
      />
      <PrincipleCard
        num="03"
        title="Inherent Accessibility"
        icon={UserCheck}
        desc="A11y is not a checklist, it's a foundation. Keyboard navigation is required to pass Merge Gate. WCAG AA contrast is hardcoded into tokens."
      />
      <PrincipleCard
        num="04"
        title="Performance Budgets"
        icon={Zap}
        desc="Strict adherence to 15kb CSS limits. Interaction-to-Next-Paint (INP) capped at 200ms. Code-splitting by route is mandatory."
      />
      <PrincipleCard
        num="05"
        title="Cognitive Ergonomics"
        icon={Eye}
        desc="Designed for high-stress, low-attention environments. Minimize visual noise. Leverage progressive disclosure for complex configuration."
      />
      <div
        className={`border border-[var(--border-color)] bg-[var(--bg-card)] p-6 flex flex-col justify-center items-center text-center opacity-50 relative ${isXRayMode ? "border-dashed border-[var(--text-secondary)]" : ""}`}
      >
        {isXRayMode && (
          <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--text-secondary)]">
            Placeholder
          </span>
        )}
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
          Fetching deeper axioms...
        </span>
      </div>
    </div>
  </div>
);

const PersonaCard = ({ role, icon: Icon, color, desc, quote }) => (
  <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-all duration-300 group hover:shadow-lg hover:-translate-x-1">
    <div className="flex items-center justify-between mb-4">
      <h4 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-3">
        <div className="p-2 rounded bg-[var(--bg-void)] border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors">
          <Icon size={16} style={{ color }} />
        </div>
        {role}
      </h4>
      <div
        className="w-2 h-2 rounded-full animate-pulse"
        style={{ backgroundColor: color }}
      ></div>
    </div>
    <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed h-12">
      {desc}
    </p>
    <div className="pl-4 border-l-2 border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors bg-[var(--bg-void)] p-3 italic rounded-r-lg">
      <p className="font-mono text-[10px] text-[var(--text-secondary)]">
        "{quote}"
      </p>
    </div>
  </div>
);

const PrincipleCard = ({ num, title, icon: Icon, desc }) => (
  <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-card)] hover:translate-y-[-2px] transition-transform duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-[var(--bg-surface)] rounded-lg border border-[var(--border-color)] text-[var(--accent)]">
        <Icon size={20} />
      </div>
      <span className="font-mono text-4xl font-bold text-[var(--bg-surface)] text-stroke">
        {num}
      </span>
    </div>
    <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2">
      {title}
    </h3>
    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
      {desc}
    </p>
  </div>
);

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
          {[...Array(12)].map((_, i) => (
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
  </div>
);

const GovernanceLab = ({ isXRayMode }) => (
  <div
    className={`space-y-16 animate-in slide-in-from-right-4 duration-500 relative ${isXRayMode ? "p-4 border border-dashed border-[var(--accent)]/50 bg-[var(--accent)]/5" : ""}`}
  >
    {isXRayMode && (
      <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--accent)]">
        GovernanceLab.jsx // Grid.2Col
      </span>
    )}
    <div className="grid lg:grid-cols-2 gap-12 relative z-10">
      {/* TELEMETRY DASHBOARD */}
      <div
        className={`space-y-6 relative ${isXRayMode ? "p-4 border border-dashed border-[var(--text-secondary)]/50" : ""}`}
      >
        {isXRayMode && (
          <span className="absolute -top-3 left-2 z-20 bg-[var(--bg-void)] px-1 font-mono text-[8px] text-[var(--text-secondary)]">
            Col 1 // TelemetryDashboard
          </span>
        )}
        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
          <Activity size={14} /> System Telemetry & Health
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Adoption Metric */}
          <div className="border border-[var(--border-color)] bg-[var(--bg-card)] p-6 flex flex-col justify-between">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] mb-4">
              Adoption Rate
            </span>
            <div>
              <div className="text-4xl font-bold text-[var(--text-primary)] mb-1">
                84<span className="text-[var(--accent)] text-lg">%</span>
              </div>
              <div className="text-[10px] text-[var(--accent-green)] flex items-center gap-1">
                <MoveRight size={10} className="-rotate-45" /> +12% this quarter
              </div>
            </div>
          </div>

          {/* Accessibility Metric */}
          <div className="border border-[var(--border-color)] bg-[var(--bg-card)] p-6 flex flex-col justify-between">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] mb-4">
              A11y Violations
            </span>
            <div>
              <div className="text-4xl font-bold text-[var(--text-primary)] mb-1">
                0
              </div>
              <div className="text-[10px] text-[var(--accent-green)] flex items-center gap-1">
                <ShieldCheck size={10} /> Passing WCAG AA
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[var(--border-color)] bg-[var(--bg-card)] p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-sm text-[var(--text-primary)]">
                Current Version
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                {SYSTEM_CONFIG.VERSION} ({SYSTEM_CONFIG.CODENAME})
              </p>
            </div>
            <div className="px-3 py-1 bg-[var(--accent-green)]/10 text-[var(--accent-green)] border border-[var(--accent-green)]/20 font-mono text-[10px] uppercase tracking-widest rounded-full">
              Stable
            </div>
          </div>

          {/* Budget progress */}
          <div className="space-y-2 pt-4 border-t border-[var(--border-color)]">
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
              <span>CSS Bundle Budget (15kb target)</span>
              <span className="text-[var(--accent)]">11.2kb</span>
            </div>
            <div className="h-1.5 w-full bg-[var(--bg-surface)] overflow-hidden">
              <div className="h-full bg-[var(--accent)] w-[75%] relative">
                <div className="absolute right-0 top-0 w-1 h-full bg-white/50"></div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--border-color)] flex gap-4">
            <div className="flex-1">
              <span className="block font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-widest mb-1">
                Maintainer
              </span>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[var(--text-primary)]"></div>
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  {SYSTEM_CONFIG.MAINTAINER}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <span className="block font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-widest mb-1">
                Last Deploy
              </span>
              <div className="text-xs font-bold text-[var(--text-primary)]">
                Today, 19:23
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RFC PIPELINE */}
      <div className="space-y-6">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
          <Lock size={14} /> Component Graduation Pipeline (RFC)
        </h3>

        <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--border-color)] before:to-transparent">
          {/* Step 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-[var(--bg-void)] bg-[var(--bg-surface)] text-[var(--text-secondary)] group-[.is-active]:bg-[var(--accent-blue)] group-[.is-active]:text-[var(--bg-void)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-12 md:static z-10 transition-colors">
              1
            </div>
            <div className="w-full md:w-[calc(50%-2rem)] p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-sm text-[var(--text-primary)]">
                  Proposal (Draft)
                </h4>
                <span className="text-[8px] font-mono text-[var(--accent-blue)] uppercase px-1.5 py-0.5 border border-[var(--accent-blue)]/30 rounded">
                  Figma
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Component documented in Figma with states and variants. Initial
                dev review.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-[var(--bg-void)] bg-[var(--bg-surface)] text-[var(--text-secondary)] group-[.is-active]:bg-[var(--accent-amber)] group-[.is-active]:text-[var(--bg-void)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-12 md:static z-10 transition-colors">
              2
            </div>
            <div className="w-full md:w-[calc(50%-2rem)] p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-sm text-[var(--text-primary)]">
                  Experimental
                </h4>
                <span className="text-[8px] font-mono text-[var(--accent-amber)] uppercase px-1.5 py-0.5 border border-[var(--accent-amber)]/30 rounded">
                  React
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Built in isolation using Storybook. Accessibility (a11y) testing
                begins.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-[var(--bg-void)] bg-[var(--bg-surface)] text-[var(--text-secondary)] group-[.is-active]:bg-[var(--accent-red)] group-[.is-active]:text-[var(--bg-void)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-12 md:static z-10 transition-colors">
              3
            </div>
            <div className="w-full md:w-[calc(50%-2rem)] p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-sm text-[var(--text-primary)]">
                  Merge Gate
                </h4>
                <span className="text-[8px] font-mono text-[var(--accent-red)] uppercase px-1.5 py-0.5 border border-[var(--accent-red)]/30 rounded">
                  Review
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Principal/Staff sign-off. Bundle size budget verified against
                Kernel limit.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-[var(--bg-void)] bg-[var(--bg-surface)] text-[var(--text-secondary)] group-[.is-active]:bg-[var(--accent-green)] group-[.is-active]:text-[var(--bg-void)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-12 md:static z-10 transition-colors">
              4
            </div>
            <div className="w-full md:w-[calc(50%-2rem)] p-4 border border-[var(--accent-green)]/30 bg-[var(--accent-green)]/5 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-[0.03]">
                <ShieldCheck size={80} />
              </div>
              <div className="flex justify-between items-center mb-1 relative z-10">
                <h4 className="font-bold text-sm text-[var(--text-primary)]">
                  Stable Release
                </h4>
                <span className="text-[8px] font-mono text-[var(--accent-green)] uppercase px-1.5 py-0.5 border border-[var(--accent-green)]/30 rounded">
                  Core
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] relative z-10">
                Component is locked. Breaking changes require major semver bump.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border border-[var(--border-color)] bg-[var(--bg-surface)] p-8 text-center space-y-4">
      <h4 className="text-sm font-bold text-[var(--text-primary)]">
        Design System Roadmap
      </h4>
      <div className="flex flex-wrap justify-center gap-4 md:gap-12 font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
        <span className="text-[var(--text-primary)]">
          Q1: Modules (Complete)
        </span>
        <span>Q2: A11y Automation</span>
        <span>Q3: Token Migration</span>
        <span>Q4: Mobile Motion</span>
      </div>
    </div>
  </div>
);

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

// ── AUDIT REPORT SECTION ──
const AUDIT_DATA = {
  timestamp: "2026-03-03T20:47:00+07:00",
  excluded: ["prototypes/", "interactions/"],
  summary: {
    errors: 246,
    warnings: 68,
    total: 314,
    files: 43,
    uniqueColors: 140,
  },
  topFiles: [
    { file: "DesignSystemViewer.jsx", count: 30, severity: "error" },
    { file: "pages/SideProjectDetail.jsx", count: 30, severity: "error" },
    { file: "DraggablePhoto.jsx", count: 24, severity: "error" },
    { file: "hooks/useThemeStyles.js", count: 24, severity: "error" },
    { file: "pages/SideProjectsIndex.jsx", count: 18, severity: "error" },
    { file: "VentureCard.jsx", count: 16, severity: "error" },
    { file: "pages/BlogPost.jsx", count: 16, severity: "error" },
    { file: "welcome/ChaosToMatrixIntro.jsx", count: 14, severity: "warn" },
    { file: "pages/DesignSystem.jsx", count: 14, severity: "error" },
    { file: "sketches/Flipbook.jsx", count: 13, severity: "error" },
    { file: "pages/SystemManifest.jsx", count: 12, severity: "error" },
    { file: "project-layouts/CosmicPopDetail.jsx", count: 9, severity: "warn" },
    { file: "pages/ProtectedCaseStudy.jsx", count: 8, severity: "error" },
    { file: "CoverLetterModal.jsx", count: 7, severity: "error" },
    { file: "home/HomeAbout.jsx", count: 7, severity: "error" },
  ],
  categories: [
    { name: "Colors (hex)", count: 246, icon: Hash },
    { name: "Colors (rgba)", count: 68, icon: Hash },
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
      value: "#888 / #666",
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
    colors: { total: 140, tokenized: 11, percentage: 7.9 },
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
      light: "#3b82f6",
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
      light: "#8b5cf6",
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
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[9px] uppercase tracking-wider ${
                  item.severity === "error"
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
