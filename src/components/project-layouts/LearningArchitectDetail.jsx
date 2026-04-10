import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Target,
  Zap,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Cpu,
  Database,
  Layers,
  ArrowRight,
  Activity,
  Brain,
  Clock,
  TrendingUp,
  Terminal,
  GitBranch,
  Shield,
  Compass,
  Lightbulb,
  Minus,
  Plus,
} from "lucide-react";
import AiryDiagram from "../AiryDiagram";

// ─── DATA CONSTANTS ──────────────────────────────────────────────────────────

const LOOP_PHASES = [
  { icon: Target,     label: "Define Goal",       sublabel: "Goal · Level · Pace · Style",       color: "var(--accent-emerald, #10b981)" },
  { icon: GitBranch,  label: "Generate Roadmap",  sublabel: "AI-structured starter plan",        color: "var(--accent-blue, #3b82f6)" },
  { icon: BookOpen,   label: "Resource Pairing",  sublabel: "Task + material link",              color: "var(--accent-purple, #8b5cf6)" },
  { icon: Clock,      label: "Focused Session",   sublabel: "Timer · Task · Objective",          color: "var(--accent-orange, #f97316)" },
  { icon: Zap,        label: "Quick Actions",     sublabel: "explain · example · analogy",       color: "var(--accent-yellow, #eab308)" },
  { icon: Brain,      label: "Reflection",        sublabel: "Blockers · Confidence · Notes",     color: "var(--accent-pink, #ec4899)" },
  { icon: RotateCcw,  label: "Adaptive Review",   sublabel: "Spaced repetition scheduling",      color: "var(--accent-teal, #14b8a6)" },
];

const ARCH_LAYERS = [
  { label: "React Frontend",     detail: "React 19 · Router 7 · Vite",           icon: Layers },
  { label: "Express Runtime",    detail: "Node · TypeScript · Auth",              icon: Terminal },
  { label: "Python ADK Service", detail: "Workflow planning · Study coach",       icon: Brain },
  { label: "MCP Tool Layer",     detail: "Workspace ops · Context lookup",        icon: Cpu },
  { label: "SQLite / AlloyDB",   detail: "Persistence · Migration-ready",         icon: Database },
];

const JTBD = [
  {
    core: true,
    job: "When I want to learn something complex on my own",
    outcome: "help me turn that goal into a realistic plan and keep me moving without constantly re-deciding what to do next.",
    icon: Compass,
    color: "emerald-400"
  },
  {
    job: "When I sit down to study",
    outcome: "show me the highest-leverage next task immediately.",
    icon: Zap,
    color: "blue-400"
  },
  {
    job: "When I get stuck",
    outcome: "help me understand the concept in the context of my current task.",
    icon: Target,
    color: "orange-400"
  },
  {
    job: "When I finish a session",
    outcome: "capture what I understood and what remains weak.",
    icon: Database,
    color: "purple-400"
  },
  {
    job: "When I am at risk of forgetting something",
    outcome: "bring it back at the right time.",
    icon: Brain,
    color: "pink-400"
  },
  {
    job: "When I lose momentum",
    outcome: "remind me of progress in a way that is actionable, not just informational.",
    icon: TrendingUp,
    color: "amber-400"
  },
];

const PRINCIPLES = [
  {
    icon: Compass,
    name: "Next Action First",
    desc: "Every major surface makes the next best action obvious before it shows supporting information.",
  },
  {
    icon: Brain,
    name: "AI Inside the Workflow",
    desc: "AI strengthens planning, understanding, and reinforcement inside a bounded product flow. It does not replace product structure.",
  },
  {
    icon: Shield,
    name: "Trust Through State Clarity",
    desc: "If something is saved, scheduled, completed, or still draft-only, the UI makes that explicit. No important input appears persistent if it is not.",
  },
  {
    icon: Lightbulb,
    name: "Opinionated by Default",
    desc: "The product makes smart defaults on behalf of the learner wherever possible, reducing planning overhead.",
  },
  {
    icon: Activity,
    name: "Graceful Degradation",
    desc: "Core learning workflows remain operable even when AI generation quality degrades or provider availability is constrained.",
  },
];

const RELEASE_PHASES = [
  {
    phase: "Phase 1",
    title: "Trust and Loop Completion",
    status: "In Progress",
    statusColor: "#10b981",
    items: [
      "Formalize active-goal semantics",
      "Make workflow creation transactional",
      "Persist or remove in-session notes",
      "Create a real review completion path",
      "Clarify save states and post-action outcomes",
    ],
  },
  {
    phase: "Phase 2",
    title: "Decisional UX and Navigation",
    status: "Planned",
    statusColor: "#3b82f6",
    items: [
      "Strengthen next-best-action hierarchy",
      "Add robust mobile navigation",
      "Reduce visual competition on key pages",
      "Dashboard as operational control surface",
    ],
  },
  {
    phase: "Phase 3",
    title: "Intelligence and Depth",
    status: "Future",
    statusColor: "#8b5cf6",
    items: [
      "Improve roadmap depth beyond starter structure",
      "Deepen reference quality and retrieval grounding",
      "Improve adaptation across confidence and history",
      "AlloyDB AI for memory and retrieval enrichment",
    ],
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const LearningArchitectDetail = ({
  project,
  activeContext,
  activeChallenge,
  activeProcess,
  activeInsights,
  activeMetrics,
  activeLearnings,
  // InteractionComponent — not used in this layout (no live preview panel)
  // activeSnapshot — hero uses AiryDiagram directly
  // t, isIndonesian — EN/ID resolution done upstream by SideProjectDetail
  activeTitle,
  activeTldr,
}) => {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTab, setActiveTab] = useState("challenge");

  const accentEmerald = "var(--accent-emerald, #10b981)";

  return (
    <div className="text-[var(--text-primary)] font-sans min-h-[100dvh] pb-32 selection:bg-emerald-500/30">

      {/* ─────────────────────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950" />
        <div className="absolute inset-0 opacity-30">
          <AiryDiagram type="network" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          className="absolute left-0 right-0 h-px bg-emerald-400/20 pointer-events-none"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute top-32 right-8 md:right-24 flex flex-col gap-3 opacity-80">
          {["MVP → v1", "ADK + MCP", "Cloud Run"].map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-900/30 backdrop-blur-md text-emerald-300 font-mono text-[9px] uppercase tracking-widest"
            >
              {badge}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 px-6 md:px-16 pb-20 max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-900/30 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
              Self-Directed Learning OS · April 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic mb-6 text-white leading-[0.95] tracking-tighter max-w-4xl"
          >
            {activeTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-emerald-100/70 max-w-3xl leading-relaxed mb-12"
          >
            {activeTldr}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-6 text-sm font-mono text-emerald-300/60"
          >
            {[
              { label: "Role", value: activeContext.role },
              { label: "Team", value: activeContext.team },
              { label: "Timeline", value: activeContext.timeline },
              { label: "Stack", value: "React + Express + ADK + MCP" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest opacity-50">{label}</span>
                <span className="text-white/80 text-xs">{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PHILOSOPHY QUOTE
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--bg-surface)] border-y border-[var(--border-color)] px-6 md:px-16 py-16">
        <div className="max-w-[1400px] mx-auto">
          <blockquote className="max-w-4xl">
            <p className="text-2xl md:text-3xl font-serif italic text-[var(--text-primary)] leading-relaxed mb-6">
              "Learning breaks down not because people lack ambition, but because the system around the ambition is unstable."
            </p>
            <footer className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--border-color)]" />
              Product Philosophy
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          JOBS TO BE DONE
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 bg-[var(--bg-void)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--border-color)]" />
              Jobs To Be Done
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-[var(--text-primary)] max-w-2xl">
              Six moments where the system has to show up
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JTBD.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, ease: "easeOut" }}
                  className={`group relative overflow-hidden flex flex-col p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                    item.core
                      ? "border-emerald-500/40 bg-emerald-950/30 hover:border-emerald-500/80 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                      : "border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-blue)]/50 hover:bg-[var(--bg-card)] hover:shadow-2xl"
                  }`}
                >
                  {/* Background Radial Gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100`} />
                  
                  {/* Header Row: Number + Icon */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                        item.core
                          ? "bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)] text-emerald-400"
                          : "bg-[var(--border-color)] text-[var(--text-secondary)] group-hover:bg-[var(--accent-blue)]/20 group-hover:text-[var(--accent-blue)]"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[var(--text-secondary)] opacity-50 tracking-widest">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Core Content */}
                  <div className="flex-1 relative z-10 flex flex-col">
                    {item.core && (
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Core Architecture Job
                        </span>
                      </div>
                    )}
                    <h3 className={`text-lg md:text-xl font-serif italic leading-snug mb-3 transition-colors duration-300 ${item.core ? "text-emerald-50" : "text-[var(--text-primary)] group-hover:text-white"}`}>
                      {item.job}
                    </h3>
                    <p className={`text-sm leading-relaxed mt-auto border-t pt-4 transition-colors duration-300 ${item.core ? "text-emerald-200/80 border-emerald-500/20" : "text-[var(--text-secondary)] border-[var(--border-color)] group-hover:text-gray-300"}`}>
                      {item.outcome}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE 7-STEP LEARNING LOOP — Interactive
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 bg-[var(--bg-surface)] border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--border-color)]" />
              The Learning Loop
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-[var(--text-primary)]">
              One continuous loop, not isolated features
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Phase Selector */}
            <div className="space-y-2">
              {LOOP_PHASES.map((phase, idx) => {
                const Icon = phase.icon;
                const isActive = activePhase === idx;
                return (
                  <motion.button
                    key={idx}
                    onClick={() => setActivePhase(idx)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-4 group ${
                      isActive
                        ? "border-emerald-500/40 bg-emerald-950/30"
                        : "border-[var(--border-color)] bg-[var(--bg-void)] hover:border-emerald-500/20"
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all"
                      style={{
                        background: isActive ? `${phase.color}20` : "var(--bg-card)",
                        border: `1px solid ${isActive ? phase.color + "40" : "var(--border-color)"}`,
                      }}
                    >
                      <Icon size={16} style={{ color: isActive ? phase.color : "var(--text-secondary)" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] text-[var(--text-secondary)] opacity-50">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className={`font-medium text-sm ${isActive ? "text-white" : "text-[var(--text-primary)]"}`}>
                          {phase.label}
                        </span>
                      </div>
                      <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">{phase.sublabel}</div>
                    </div>
                    {isActive && <ChevronRight size={14} className="text-emerald-400 shrink-0" />}
                  </motion.button>
                );
              })}
            </div>

            {/* Phase Detail Panel */}
            <div className="lg:sticky lg:top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-void)] overflow-hidden"
                >
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${LOOP_PHASES[activePhase].color}, transparent)` }}
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${LOOP_PHASES[activePhase].color}15`,
                          border: `1px solid ${LOOP_PHASES[activePhase].color}30`,
                        }}
                      >
                        {React.createElement(LOOP_PHASES[activePhase].icon, {
                          size: 22,
                          style: { color: LOOP_PHASES[activePhase].color },
                        })}
                      </div>
                      <div>
                        <div className="font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-widest">
                          Step {String(activePhase + 1).padStart(2, "0")} / 07
                        </div>
                        <div className="text-xl font-semibold text-[var(--text-primary)]">
                          {LOOP_PHASES[activePhase].label}
                        </div>
                      </div>
                    </div>

                    {activeProcess && activeProcess[activePhase] ? (
                      <>
                        <h3 className="text-lg font-serif italic mb-3 text-[var(--text-primary)]">
                          {activeProcess[activePhase].title}
                        </h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                          {activeProcess[activePhase].desc}
                        </p>
                      </>
                    ) : (
                      <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                        {LOOP_PHASES[activePhase].sublabel}
                      </p>
                    )}

                    {activeProcess && activeProcess[activePhase]?.image && (
                      <div className="mt-6 rounded-xl border border-[var(--border-color)] overflow-hidden bg-[var(--bg-card)] h-40 flex items-center justify-center">
                        <AiryDiagram type={activeProcess[activePhase].image.split(":")[1] || "flow"} />
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex justify-center gap-1.5 mt-4">
                {LOOP_PHASES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhase(i)}
                    className="w-1.5 h-1.5 rounded-full transition-all"
                    style={{
                      background: i === activePhase ? accentEmerald : "var(--border-color)",
                      transform: i === activePhase ? "scale(1.5)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CHALLENGE + TABS (Problem | Insights | Principles | Post Mortem)
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 bg-[var(--bg-void)] border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto">
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-1 mb-12 border-b border-[var(--border-color)]">
            {[
              { id: "challenge",  label: "The Problem" },
              { id: "insights",   label: "Key Insights" },
              { id: "principles", label: "Principles" },
              { id: "learnings",  label: "Post Mortem" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-mono text-[11px] uppercase tracking-widest transition-all border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? "border-emerald-500 text-[var(--text-primary)]"
                    : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">

            {activeTab === "challenge" && (
              <motion.div
                key="challenge"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl"
              >
                {/* P3 fix: use CSS variable tokens + dark-aware tint */}
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-[var(--text-primary)] border-l-4 border-emerald-600/50 dark:border-emerald-500/60 pl-8">
                  {activeChallenge}
                </p>
              </motion.div>
            )}

            {activeTab === "insights" && activeInsights && (
              <motion.div
                key="insights"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {activeInsights.map((insight, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-emerald-500/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                      <TrendingUp size={14} className="text-emerald-400" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-[var(--text-primary)]">{insight.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{insight.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "principles" && (
              <motion.div
                key="principles"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {PRINCIPLES.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-emerald-500/20 transition-colors group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/15 transition-colors">
                          <Icon size={16} className="text-emerald-400" />
                        </div>
                        <div className="font-mono text-[9px] text-emerald-500/60 uppercase tracking-widest">
                          P{String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <h3 className="font-semibold text-base mb-2 text-[var(--text-primary)]">{p.name}</h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{p.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === "learnings" && activeLearnings && (
              <motion.div
                key="learnings"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl"
              >
                <div className="p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 mb-6">
                    // Post Mortem
                  </div>
                  <p className="font-serif italic text-xl text-[var(--text-secondary)] leading-relaxed">
                    "{activeLearnings}"
                  </p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ARCHITECTURE TOPOLOGY
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 bg-[var(--bg-surface)] border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--border-color)]" />
              System Topology
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-[var(--text-primary)]">
              Three-service orchestration layer
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Layer diagram */}
            <div className="space-y-3">
              {ARCH_LAYERS.map((layer, idx) => {
                const Icon = layer.icon;
                const isBottom = idx === ARCH_LAYERS.length - 1;
                return (
                  <div key={idx} className="relative">
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-void)] hover:border-emerald-500/20 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/15 transition-colors">
                        <Icon size={16} className="text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-[var(--text-primary)]">{layer.label}</div>
                        <div className="font-mono text-[10px] text-[var(--text-secondary)] mt-0.5">{layer.detail}</div>
                      </div>
                      <div className="font-mono text-[9px] text-[var(--text-secondary)] opacity-30">
                        L{String(idx + 1).padStart(2, "0")}
                      </div>
                    </motion.div>
                    {!isBottom && (
                      <div className="flex justify-center my-1">
                        <ArrowRight size={12} className="text-emerald-500/30 rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stable public contract + degradation */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-void)] overflow-hidden">
                <div className="px-6 py-4 border-b border-[var(--border-color)] flex items-center gap-2">
                  <Terminal size={12} className="text-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                    Stable Public Contract
                  </span>
                </div>
                <div className="p-6 font-mono text-sm space-y-3">
                  {[
                    { method: "POST", path: "/api/agent/workflow",              note: "roadmap generation" },
                    { method: "POST", path: "/api/tasks/:taskId/quick-action",  note: "in-session AI" },
                    { method: "GET",  path: "/api/data",                        note: "workspace payload" },
                  ].map(({ method, path, note }) => (
                    <div key={path} className="flex items-start gap-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold shrink-0 ${
                        method === "POST"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}>
                        {method}
                      </span>
                      <div>
                        <div className="text-[var(--text-primary)] text-xs">{path}</div>
                        <div className="text-[var(--text-secondary)] text-[10px] mt-0.5 opacity-60">// {note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-void)] overflow-hidden">
                <div className="px-6 py-4 border-b border-[var(--border-color)] flex items-center gap-2">
                  <Activity size={12} className="text-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                    Graceful Degradation
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { trigger: "ADK unavailable",          fallback: "Legacy in-process behavior" },
                    { trigger: "Gemini quota constrained", fallback: "Deterministic context-aware content" },
                    { trigger: "Repeated quick-actions",   fallback: "Cached outputs reused" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[var(--text-secondary)] text-xs">{row.trigger}</span>
                        <span className="text-[var(--text-secondary)] text-xs opacity-40 mx-2">→</span>
                        <span className="text-[var(--text-primary)] text-xs">{row.fallback}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          RELEASE PHASES
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 bg-[var(--bg-void)] border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--border-color)]" />
              Release Plan
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-[var(--text-primary)]">
              What the next iteration looks like
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELEASE_PHASES.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden"
              >
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${phase.statusColor}, transparent)` }} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
                      {phase.phase}
                    </span>
                    <span
                      className="font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full border"
                      style={{
                        color: phase.statusColor,
                        borderColor: phase.statusColor + "40",
                        background: phase.statusColor + "10",
                      }}
                    >
                      {phase.status}
                    </span>
                  </div>
                  <h3 className="font-serif italic text-xl text-[var(--text-primary)] mb-5">{phase.title}</h3>
                  <ul className="space-y-2.5">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ background: phase.statusColor + "80" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          METRICS BAR
      ───────────────────────────────────────────────────────────── */}
      {activeMetrics && activeMetrics.length > 0 && (
        <section className="px-6 md:px-16 py-16 bg-[var(--bg-surface)] border-t border-[var(--border-color)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-[var(--border-color)] rounded-2xl overflow-hidden">
              {activeMetrics.map((metric, i) => (
                <div key={i} className="bg-[var(--bg-card)] px-6 py-8 text-center">
                  <div className="text-xl font-bold text-[var(--text-primary)] mb-2 font-mono">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] opacity-60">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          PRODUCT SURFACES
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 bg-[var(--bg-void)] border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--border-color)]" />
              Product Surfaces
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-[var(--text-primary)]">
              Shaped like a guided workspace, not a feature buffet
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              "Landing", "Login / Signup", "Onboarding", "Dashboard", "Roadmap",
              "Session", "Comprehension", "Reviews", "Progress", "Reflections", "Goals",
            ].map((surface, i) => (
              <motion.div
                key={surface}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-emerald-500/30 hover:bg-emerald-950/10 transition-all cursor-default group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 group-hover:bg-emerald-400 transition-colors mb-2" />
                <div className="font-mono text-[10px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {surface}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SYSTEM INTENT + LINKS
      ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950 border-t border-[var(--border-color)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <AiryDiagram type="architecture" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/60 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-emerald-500/30" />
              System Intent
            </div>
            <p className="text-3xl md:text-4xl font-serif italic text-white leading-tight mb-10">
              People should spend their cognitive energy learning the subject, not maintaining the machinery around the learning.
            </p>

            <div className="flex flex-wrap gap-4">
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-medium text-sm transition-all"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:text-white font-medium text-sm transition-all"
                >
                  Source <ArrowRight size={14} />
                </a>
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-emerald-500/20">
              <p className="font-mono text-[11px] text-emerald-400/50 uppercase tracking-widest">
                Engineered by Fadly Uzzaki and Vedo Alfarizi
              </p>
              <p className="font-serif italic text-emerald-300/40 text-sm mt-1">
                Learning is human. The system should behave accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LearningArchitectDetail;
