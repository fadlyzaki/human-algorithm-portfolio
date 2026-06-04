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
  HeartPulse,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
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
  BiologicalLab,
} from "./design-system";

const DesignSystemViewer = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [isXRayMode, setIsXRayMode] = useState(false);
  const [activeSection, setActiveSection] = useState("chromatics");

  const sectors = [
    { id: "chromatics", label: t("design_system.sector_chromatics"), icon: Hash },
    { id: "typography", label: t("design_system.sector_typography"), icon: Type },
    { id: "components", label: t("design_system.sector_components"), icon: Grid3X3 },
    { id: "layout", label: t("design_system.sector_layout"), icon: MoveRight },
    { id: "brand", label: t("design_system.sector_brand"), icon: Fingerprint },
    { id: "strategy", label: t("design_system.sector_strategy"), icon: Target },
    { id: "ux", label: t("design_system.sector_ux"), icon: Scale },
    { id: "governance", label: t("design_system.sector_governance"), icon: Lock },
    { id: "audit", label: t("design_system.sector_audit"), icon: ClipboardList },
    { id: "biological", label: t("design_system.sector_biological"), icon: HeartPulse },
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
    biological: BiologicalLab,
  };

  const SECTION_HEADERS = {
    chromatics: { icon: Hash, label: t("design_system.header_chromatics") },
    typography: { icon: Type, label: t("design_system.header_typography") },
    components: { icon: Grid3X3, label: t("design_system.header_components") },
    layout: { icon: MoveRight, label: t("design_system.header_layout") },
    brand: { icon: Fingerprint, label: t("design_system.header_brand") },
    strategy: { icon: Target, label: t("design_system.header_strategy") },
    ux: { icon: Scale, label: t("design_system.header_ux") },
    governance: { icon: Lock, label: t("design_system.header_governance") },
    audit: { icon: ClipboardList, label: t("design_system.header_audit") },
    biological: { icon: HeartPulse, label: t("design_system.header_biological") },
  };

  const ActiveComponent = SECTION_COMPONENTS[activeSection];
  const activeHeader = SECTION_HEADERS[activeSection];
  const HeaderIcon = activeHeader?.icon;

  return (
    <section className="w-full relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? "var(--bg-void)" : "var(--bg-void)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "var(--bg-void)" : "var(--bg-void)"} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row">
        {/* Sticky Sidebar */}
        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[var(--border-color)] backdrop-blur-md z-40 md:sticky md:top-[72px] md:h-[calc(100vh-72px)] overflow-y-auto">
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
                  className={`w-full group flex items-center gap-3 px-4 py-4 min-h-[48px] text-[10px] font-mono font-bold uppercase tracking-wider transition-all text-left border-l-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]/50 focus-visible:bg-[var(--accent)]/5 ${activeSection === sector.id ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10" : "border-transparent text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"}`}
                >
                  <sector.icon
                    size={12}
                    className={`transition-colors ${activeSection === sector.id ? "text-[var(--accent)]" : "text-[var(--text-secondary)] group-hover:text-[var(--accent)]"}`}
                  />
                  {sector.label}
                </button>
              ))}
            </div>

            <div className="pt-8 pb-4 border-t border-[var(--border-color)]">
              <button
                onClick={() => setIsXRayMode(!isXRayMode)}
                className={`w-full flex items-center justify-center gap-2 px-4 py-4 min-h-[48px] font-mono text-[9px] uppercase tracking-wider border transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]/50 ${isXRayMode ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent)] shadow-[0_0_15px_-5px_var(--accent)]" : "border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"}`}
              >
                <Eye size={12} className={isXRayMode ? "animate-pulse" : ""} />
                {isXRayMode ? t("design_system.xray_active") : t("design_system.xray_enable")}
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-h-[100dvh]">
          {/* Header Terminal */}
          <header className="border-b border-[var(--border-color)] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <Grid3X3 size={400} strokeWidth={0.5} />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                  {t("design_system.diagnostic_mode")}
                </span>
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--text-primary)] mb-8">
                  DESIGN_KERNEL
                  <span className="text-[var(--accent)]">.SYS</span>
                </h1>
                <div className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider max-w-xl space-y-3">
                  <p>
                    &gt; {t("design_system.executing_protocols")}{" "}
                    {SYSTEM_CONFIG.VERSION}
                  </p>
                  <p>&gt; {t("design_system.target")}</p>
                  <p>
                    &gt; {t("design_system.status")}:{" "}
                    <span className="text-[var(--accent-green)]">
                      {SYSTEM_CONFIG.STATUS}
                    </span>
                  </p>
                  <p>&gt; {t("design_system.architect")}</p>
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
                <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)] mb-8 flex items-center gap-3">
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
          <footer className="border-t border-[var(--border-color)] p-6 flex justify-between items-center font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider bg-[var(--bg-surface)]">
            <div className="flex gap-8">
              <span>
                {t("design_system.mem")}: {SYSTEM_CONFIG.MEM_USAGE} // {t("design_system.threads")}:{" "}
                {SYSTEM_CONFIG.THREADS}
              </span>
              <span>{t("design_system.uptime")}: {SYSTEM_CONFIG.UPTIME}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
              <span>{t("design_system.system")} {SYSTEM_CONFIG.STATUS}</span>
            </div>
          </footer>
        </main>
      </div>
    </section>
  );
};

export default DesignSystemViewer;
