import React from "react";
import { Lock, Activity, UserCheck, Zap, Eye } from "lucide-react";

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

export default UXPrinciples;
