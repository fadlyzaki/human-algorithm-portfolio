import React from "react";
import { Cpu, Zap, Eye } from "lucide-react";

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

export default BrandIdentity;
