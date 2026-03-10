import React from "react";
import { Activity, MoveRight, Lock, ShieldCheck } from "lucide-react";
import { SYSTEM_CONFIG } from "../../config/constants";

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
            <div className="w-full md:w-[calc(50%-2rem)] p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-sm text-[var(--text-primary)]">
                  Stable Release
                </h4>
                <span className="text-[8px] font-mono text-[var(--accent-green)] uppercase px-1.5 py-0.5 border border-[var(--accent-green)]/30 rounded">
                  Core
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
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
        <span className="text-[var(--accent-green)]">Q2: Token Migration (Complete)</span>
        <span className="text-[var(--accent-green)]">Q3: Vitest Integration (Complete)</span>
        <span>Q4: Mobile System Parity</span>
      </div>
    </div>
  </div>
);

export default GovernanceLab;
