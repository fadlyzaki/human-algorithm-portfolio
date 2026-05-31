import React, { useState } from "react";
import { Cpu, Zap, Eye, Fingerprint, ShieldAlert, Terminal, UserCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import {
  IndustrialCard,
  CyberpunkCard,
  SwissCard,
  GlassmorphismCard,
  RetroCard,
  NeoBrutalismCard,
  HolographicCard,
} from "../id-cards";

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

const BrandIdentity = ({ isXRayMode }) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [variant, setVariant] = useState("cyberpunk");

  const variants = [
    "industrial",
    "cyberpunk",
    "swiss",
    "glassmorphism",
    "retro",
    "neo-brutalism",
    "holographic",
  ];

  const VariantMap = {
    industrial: IndustrialCard,
    cyberpunk: CyberpunkCard,
    swiss: SwissCard,
    glassmorphism: GlassmorphismCard,
    retro: RetroCard,
    "neo-brutalism": NeoBrutalismCard,
    holographic: HolographicCard,
  };

  const variantDescriptions = {
    industrial: "Monospace typeface, heavy borders, raw data grids, and zebra line barcode footer. Emphasizes clean structured technical systems.",
    cyberpunk: "Glowing text-shadows, scanlines grid background patterns, and neon red accents. Renders the visual language of absolute data velocity.",
    swiss: "Grotesque layouts, clean bold fonts, high-contrast grids. Emphasizes clean asymmetric alignment and grid precision.",
    glassmorphism: "Backdrop blur refraction filters, high-opacity white/black overlays, subtle glowing rims. Highlights token layers in space.",
    retro: "CRT amber/green monitor scanlines emulation, mono status beacons. Replicates vintage terminal aesthetics.",
    "neo-brutalism": "Saturated border outlines, flat thick offsets, offset box shadows, high contrast elements. Bold, playful, and assertive.",
    holographic: "Iridescent color-sheen light reflection overlays, moving foil angles. Emphasizes modern spatial graphics.",
  };

  const ActiveCardComponent = VariantMap[variant] || IndustrialCard;

  return (
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
          <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] space-y-6 relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
              <Fingerprint size={200} />
            </div>

            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
                Identity Logomark
              </span>
              <div className="text-3xl mt-1 font-bold text-[var(--text-primary)]">🧢 Fadlyzaki</div>
            </div>

            <div className="space-y-3 flex-grow flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] block">
                Interactive Polymorphic Card
              </span>
              
              {/* Variant Selector */}
              <div className="flex flex-wrap gap-1.5">
                {variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest border transition-all rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]/50 ${
                      variant === v
                        ? "bg-[var(--accent)]/15 border-[var(--accent)] text-[var(--accent)] shadow-[0_0_8px_rgba(var(--accent-rgb),0.1)] font-bold"
                        : "border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>

              {/* Display Selected Card Component */}
              <div className="relative aspect-[3/4.2] max-w-[280px] mx-auto w-full border border-[var(--border-color)] bg-[var(--bg-void)] p-2 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
                <ActiveCardComponent t={t} isDark={isDark} currentItem={{ type: "identity", src: "/hero-id-v2.jpg" }} />
              </div>

              {/* Variant Description */}
              <div className="p-3 bg-[var(--bg-void)] border border-[var(--border-color)] font-mono text-[10px] text-[var(--text-secondary)] leading-relaxed rounded-sm mt-2">
                <span className="text-[var(--text-primary)] font-bold uppercase block mb-1">&gt; Spec Description</span>
                {variantDescriptions[variant]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIdentity;

