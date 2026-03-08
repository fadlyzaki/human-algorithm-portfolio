import React, { useState } from "react";
import {
  Hash,
  Type,
  Grid3X3,
  MoveRight,
  Fingerprint,
  Scale,
  Target,
  Lock,
  ClipboardList,
  Eye,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SYSTEM_CONFIG } from "../config/constants";

// Extracted section components
import {
  ChromaticsGrid,
  TypographyLab,
  ComponentForge,
  BrandIdentity,
  UXPrinciples,
  LayoutLab,
  GovernanceLab,
  BrandStrategy,
  AuditReport,
} from "./design-system";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Map section IDs to components
  const SECTION_COMPONENTS = {
    chromatics: ChromaticsGrid,
    typography: TypographyLab,
    components: ComponentForge,
    layout: LayoutLab,
    brand: BrandIdentity,
    strategy: BrandStrategy,
    ux: UXPrinciples,
    governance: GovernanceLab,
    audit: AuditReport,
  };

  const SECTION_HEADERS = {
    chromatics: { icon: Hash, label: "[01] Chromatics_Architecture" },
    typography: { icon: Type, label: "[02] Typographic_Protocols" },
    components: { icon: Grid3X3, label: "[03] Module_Forge" },
    layout: { icon: MoveRight, label: "[04] Grid_&_Motion_Physics" },
    brand: { icon: Fingerprint, label: "[05] Persona_Identity" },
    strategy: { icon: Target, label: "[06] Strategic_Manifesto" },
    ux: { icon: Scale, label: "[07] Interaction_Axioms" },
    governance: { icon: Lock, label: "[08] System_Governance" },
    audit: { icon: ClipboardList, label: "[09] Token_Audit_Report" },
  };

  const ActiveComponent = SECTION_COMPONENTS[activeSection];
  const activeHeader = SECTION_HEADERS[activeSection];
  const HeaderIcon = activeHeader?.icon;

  return (
    <section className="w-full bg-[var(--bg-void)] relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? "var(--bg-void)" : "var(--bg-void)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "var(--bg-void)" : "var(--bg-void)"} 1px, transparent 1px)`,
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

            <div className="pt-8 pb-4 border-t border-[var(--border-color)]">
              <button
                onClick={() => setIsXRayMode(!isXRayMode)}
                className={`w-full flex items-center justify-center gap-2 px-4 py-4 md:py-3 font-mono text-[9px] uppercase tracking-widest border transition-all duration-300 ${isXRayMode ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent)] shadow-[0_0_15px_-5px_var(--accent)]" : "bg-[var(--bg-void)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"}`}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  System_Diagnostic_Mode_active
                </span>
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
            {ActiveComponent && (
              <section
                id={activeSection}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] mb-8 flex items-center gap-3">
                  {HeaderIcon && <HeaderIcon size={14} />} {activeHeader.label}
                </h2>
                {activeSection === "components" ? (
                  <ActiveComponent
                    isXRayMode={isXRayMode}
                    setIsXRayMode={setIsXRayMode}
                  />
                ) : (
                  <ActiveComponent isXRayMode={isXRayMode} />
                )}
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

export default DesignSystemViewer;
