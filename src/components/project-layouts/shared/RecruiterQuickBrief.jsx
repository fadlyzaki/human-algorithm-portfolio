import React from "react";
import {
  Sparkles,
  ExternalLink,
  Github,
  CheckCircle2,
  Clock,
  User,
  Users,
  Briefcase,
  Layers,
  ArrowUpRight,
} from "lucide-react";

/**
 * RecruiterQuickBrief: A high-density, scannable executive summary
 * specifically engineered for HR, Recruiters, and Hiring Managers on 30-second timers.
 */
const RecruiterQuickBrief = ({
  tldr,
  context = {},
  stack = [],
  hiringSignals = [],
  metrics = [],
  links = {},
  globalEquivalent = null,
  brandColor = "var(--accent-blue)",
  isId = false,
}) => {
  const role = context.role ? (typeof context.role === "object" ? (isId ? context.role.id : context.role.en) : context.role) : null;
  const timeline = context.timeline ? (typeof context.timeline === "object" ? (isId ? context.timeline.id : context.timeline.en) : context.timeline) : null;
  const team = context.team ? (typeof context.team === "object" ? (isId ? context.team.id : context.team.en) : context.team) : null;
  const client = context.client ? (typeof context.client === "object" ? (isId ? context.client.id : context.client.en) : context.client) : null;
  const equivalent = typeof globalEquivalent === "object" && globalEquivalent !== null ? (isId ? globalEquivalent.id : globalEquivalent.en) : globalEquivalent;

  return (
    <section
      aria-label="Recruiter Executive Summary"
      className="my-10 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl relative overflow-hidden font-mono"
    >
      {/* Top Accent Gradient Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 opacity-90"
        style={{
          background: `linear-gradient(90deg, ${brandColor}, var(--accent-purple), var(--accent-sky))`,
        }}
      />

      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--border-color)]">
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className="flex h-2.5 w-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: brandColor }}
          />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-primary)]">
            {isId ? "⚡ Ringkasan Eksekutif (Recruiter Fast-Scan)" : "⚡ Executive Briefing (Recruiter Fast-Scan)"}
          </span>
          {equivalent && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-normal bg-[var(--text-primary)]/10 text-[var(--text-primary)] border border-[var(--border-color)]">
              🌐 {isId ? "Ekuivalen Global" : "Global Equivalent"}: {equivalent}
            </span>
          )}
        </div>

        {/* Live Demo & Repo Links */}
        <div className="flex items-center gap-2">
          {links.demo && links.demo !== "#" && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[var(--text-primary)] text-[var(--bg-void)] hover:opacity-90 transition-opacity"
            >
              <span>{isId ? "Buka Prototype" : "Live Demo"}</span>
              <ArrowUpRight size={13} />
            </a>
          )}
          {links.repo && links.repo !== "#" && (
            <a
              href={links.repo.startsWith("http") ? links.repo : `https://${links.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
            >
              <Github size={13} />
              <span>{isId ? "Sumber Kode" : "Source"}</span>
            </a>
          )}
        </div>
      </div>

      {/* Core TL;DR Narrative */}
      <div className="mb-6">
        <h2 className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-1.5">
          {isId ? "NILAI INTI & PERNYATAAN KARYA" : "CORE THESIS & VALUE DELIVERED"}
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed font-sans font-normal">
          {tldr}
        </p>
      </div>

      {/* Meta Grid: Role, Timeline, Team, Stack */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] mb-6 text-xs">
        <div>
          <span className="text-[10px] uppercase text-[var(--text-secondary)] flex items-center gap-1 mb-1">
            <User size={11} /> {isId ? "Peran" : "Role"}
          </span>
          <span className="font-bold text-[var(--text-primary)]">{role || "Solo Architect"}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-[var(--text-secondary)] flex items-center gap-1 mb-1">
            <Clock size={11} /> {isId ? "Waktu" : "Timeline"}
          </span>
          <span className="font-bold text-[var(--text-primary)]">{timeline || "2026"}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-[var(--text-secondary)] flex items-center gap-1 mb-1">
            <Users size={11} /> {isId ? "Tim / Klien" : "Team / Client"}
          </span>
          <span className="font-bold text-[var(--text-primary)]">{team || client || "Independent"}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-[var(--text-secondary)] flex items-center gap-1 mb-1">
            <Layers size={11} /> {isId ? "Stack Inti" : "Core Tech"}
          </span>
          <span className="font-bold text-[var(--text-primary)] truncate block">
            {stack.slice(0, 3).join(" · ")}
          </span>
        </div>
      </div>

      {/* Hiring Signals ("What This Proves") */}
      {hiringSignals && hiringSignals.length > 0 && (
        <div className="mb-6">
          <h2 className="text-[10px] uppercase font-bold tracking-widest text-[var(--accent-blue)] mb-3 flex items-center gap-1.5">
            <Sparkles size={12} />
            {isId ? "KOMPETENSI KUNCI YANG DITUNJUKKAN (HIRING SIGNALS)" : "KEY COMPETENCIES DEMONSTRATED (HIRING SIGNALS)"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {hiringSignals.map((signal, index) => {
              const text = typeof signal === "object" ? (isId ? signal.id : signal.en) : signal;
              return (
                <div
                  key={index}
                  className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-snug p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)]"
                >
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[var(--text-primary)]">{text}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Metrics Row (if present) */}
      {metrics && metrics.length > 0 && (
        <div className="pt-4 border-t border-[var(--border-color)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {metrics.map((m, idx) => {
              const label = typeof m.label === "object" ? (isId ? m.label.id : m.label.en) : m.label;
              const value = typeof m.value === "object" ? (isId ? m.value.id : m.value.en) : m.value;
              return (
                <div key={idx} className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] text-center">
                  <div className="text-base sm:text-lg font-bold text-[var(--text-primary)]" style={{ color: brandColor }}>
                    {value}
                  </div>
                  <div className="text-[10px] uppercase text-[var(--text-secondary)] tracking-wider mt-0.5">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default RecruiterQuickBrief;
