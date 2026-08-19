import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Terminal,
  FileCode2,
  ListTree,
  Activity,
  Box,
  Cpu,
  ArrowRight,
  ExternalLink,
  Presentation,
  Layers,
  Compass,
  ShieldCheck,
  Check,
  Columns,
  Sparkles,
  Users,
  Target,
  Zap,
} from "lucide-react";
import AiryDiagram from "../AiryDiagram";
import RecruiterQuickBrief from "./shared/RecruiterQuickBrief";

const AgenticDetail = ({
  project,
  activeContext,
  activeChallenge,
  activeProcess,
  activeInsights,
  activeMetrics,
  activeLearnings,
  InteractionComponent,
  activeTitle,
  activeTldr,
  t,
  isIndonesian,
}) => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("challenge");
  const [activePhase, setActivePhase] = useState(0);
  const [activeDirectoryCategory, setActiveDirectoryCategory] = useState(0);

  const personas = project.personas || [];
  const taxonomy = project.taxonomy || [];
  const specsGuide = project.specsGuide || [];
  const benchmarkCategories = project.benchmarkCategories || [];
  const roadmap = project.roadmap || [];

  const resolveText = (field) => {
    if (!field) return "";
    if (typeof field === "object" && field.en) {
      return isIndonesian ? field.id || field.en : field.en;
    }
    return field;
  };

  return (
    <main
      ref={containerRef}
      className="text-[var(--text-primary)] font-sans min-h-[100dvh] pt-24 pb-32 px-4 md:px-8 selection:bg-[var(--accent-purple)] selection:text-white"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* IDE SHELL CONTAINER */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-void)] overflow-hidden shadow-2xl flex flex-col min-h-[85vh]">
          {/* 1. IDE TOP BAR */}
          <div className="h-12 bg-[var(--bg-surface)] border-b border-[var(--border-color)] flex items-center px-4 justify-between shrink-0">
            <div className="flex items-center gap-2 w-1/3">
              <div className="w-3 h-3 rounded-full bg-red-400 opacity-80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 opacity-80"></div>
            </div>

            <div className="w-1/3 text-center opacity-60">
              <div className="inline-flex items-center justify-center gap-2 px-6 py-1 bg-[var(--bg-card)] rounded-md border border-[var(--border-color)] text-[10px] font-mono tracking-wider text-[var(--accent-purple)] truncate">
                <Activity size={12} />
                HUMAN_ALGORITHM_OS // {project.id}_workspace
              </div>
            </div>

            <div className="w-1/3 flex justify-end items-center gap-3">
              {project.version && (
                <span className="px-2 py-0.5 rounded bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] border border-[var(--accent-purple)]/30 text-[9px] font-mono font-bold">
                  v{project.version}
                </span>
              )}
              {/* Decorative dots */}
              <div className="flex gap-1 opacity-20">
                <div className="w-1 h-1 rounded-full bg-current"></div>
                <div className="w-1 h-1 rounded-full bg-current"></div>
                <div className="w-1 h-1 rounded-full bg-current"></div>
              </div>
            </div>
          </div>

          {/* 2. IDE WORKSPACE SPLIT */}
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
            {/* -- LEFT PANE: EXPLORER / CONTEXT -- */}
            <div className="w-full lg:w-64 shrink-0 border-r border-[var(--border-color)] bg-[var(--bg-surface)] overflow-y-auto">
              {/* Explorer Header */}
              <div className="p-4 border-b border-[var(--border-color)] text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-2">
                <ListTree size={12} /> {t("project_layouts.explorer")}
              </div>

              <div className="p-4 font-mono text-xs">
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold mb-3 cursor-pointer">
                    <span className="opacity-50">▾</span> metadata.json
                  </div>
                  <div className="pl-4 space-y-3 border-l border-[var(--border-color)] ml-1">
                    <div>
                      <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">
                        {t("project_layouts.type")}
                      </div>
                      <div className="text-[var(--accent-purple)]">{project.type}</div>
                    </div>
                    <div>
                      <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">
                        {t("project_layouts.role")}
                      </div>
                      <div className="text-[var(--accent-purple)]">{activeContext.role}</div>
                    </div>
                    <div>
                      <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">
                        {t("project_layouts.timeline")}
                      </div>
                      <div className="text-[var(--accent-purple)]">{activeContext.timeline}</div>
                    </div>
                    {activeContext.event && (
                      <div>
                        <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">
                          Hackathon_Event
                        </div>
                        <a
                          href={activeContext.event_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent-purple)] hover:text-white transition-colors underline decoration-[var(--border-color)] underline-offset-4 text-[10px] block"
                        >
                          {activeContext.event}
                        </a>
                      </div>
                    )}
                    {project.status && (
                      <div>
                        <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">
                          Ship_Status
                        </div>
                        <div className="text-emerald-400 font-bold text-[10px]">
                          {resolveText(project.status)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold mb-3 cursor-pointer">
                    <span className="opacity-50">▾</span> dependencies.lock
                  </div>
                  <div className="pl-4 border-l border-[var(--border-color)] ml-1 flex flex-col gap-2">
                    {project.stack.map((tech) => (
                      <div
                        key={tech}
                        className="text-[#ce9178] before:content-['>'] before:opacity-30 before:mr-2 text-[11px]"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {activeMetrics && activeMetrics.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold mb-3 cursor-pointer">
                      <span className="opacity-50">▾</span> signals.log
                    </div>
                    <div className="pl-4 border-l border-[var(--border-color)] ml-1 space-y-4">
                      {activeMetrics.map((m, i) => (
                        <div key={i}>
                          <div className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                            {m.value}
                          </div>
                          <div className="text-[8px] uppercase tracking-wider text-[var(--text-secondary)] mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* -- CENTER PANE: EDITOR (NARRATIVE) -- */}
            <div className="flex-1 flex flex-col bg-[var(--bg-card)] overflow-y-auto relative">
              {/* Editor Tabs bar */}
              <div className="flex bg-[var(--bg-surface)] border-b border-[var(--border-color)] overflow-x-auto hide-scrollbar sticky top-0 z-20">
                {[
                  { id: "challenge", label: "README.md", icon: FileCode2 },
                  { id: "taxonomy", label: "taxonomy-prd.json", icon: Layers },
                  { id: "insights", label: "architecture-insights.json", icon: Cpu },
                  { id: "learnings", label: "post-mortem.log", icon: Terminal },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-5 py-2.5 text-xs font-mono flex items-center gap-2 border-r border-[var(--border-color)] transition-colors shrink-0 ${
                        isActive
                          ? "bg-[var(--bg-card)] border-t-2 border-[var(--accent-purple)] text-[var(--accent-purple)] font-bold"
                          : "bg-transparent border-t-2 border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      <Icon size={14} className={isActive ? "text-[var(--accent-purple)]" : "opacity-60"} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Editor Content Area */}
              <div className="p-6 lg:p-10 max-w-4xl pt-10">
                {/* Hero Title injected as a markdown H1 */}
                <div className="mb-12">
                  <div className="text-[var(--accent-purple)] font-mono text-xs mb-3 flex items-center gap-2">
                    <span># {project.id}</span>
                    <span className="opacity-40">//</span>
                    <span className="text-emerald-400 font-bold uppercase text-[10px]">Production Approved</span>
                  </div>
                  <h1 className="text-3xl lg:text-5xl font-serif italic font-bold mb-4 text-[var(--text-primary)] leading-[1.15]">
                    {activeTitle}
                  </h1>
                  <p className="text-lg md:text-xl font-light text-[var(--text-secondary)] leading-relaxed">
                    {activeTldr}
                  </p>
                </div>

                {/* RECRUITER & HIRING MANAGER FAST-BRIEF */}
                <RecruiterQuickBrief
                  title={activeTitle}
                  tldr={activeTldr}
                  context={activeContext}
                  stack={project.stack}
                  hiringSignals={project.hiringSignals}
                  metrics={activeMetrics}
                  links={project.links}
                  brandColor="var(--accent-purple)"
                  isId={isIndonesian}
                />

                {/* Interactive Tabs Terminal */}
                <div className="mb-14">
                  <AnimatePresence mode="wait">
                    {/* TAB 1: README.md (Challenge + JTBD Personas) */}
                    {activeTab === "challenge" && (
                      <motion.div
                        key="challenge"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-8"
                      >
                        <div className="border-l-2 border-[var(--accent-purple)] pl-6">
                          <div className="text-[10px] font-mono text-[var(--accent-purple)] uppercase tracking-wider mb-2">
                            ## Executive_Summary &amp; Problem_Framing
                          </div>
                          <p className="text-lg leading-relaxed font-light text-[var(--text-primary)]">
                            {activeChallenge}
                          </p>
                        </div>

                        {personas.length > 0 && (
                          <div className="space-y-4">
                            <div className="text-xs font-mono text-[var(--accent-purple)] uppercase tracking-wider flex items-center gap-2">
                              <Users size={14} /> ## Target_Personas &amp; Jobs-to-be-Done (JTBD)
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                              {personas.map((persona, idx) => (
                                <div
                                  key={idx}
                                  className="p-5 border border-[var(--border-color)] bg-[var(--bg-void)] rounded-lg font-mono"
                                >
                                  <div className="text-xs font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                                    <Target size={13} className="text-[var(--accent-purple)]" />
                                    {resolveText(persona.name)}
                                  </div>
                                  <div className="text-[11px] text-red-400/90 mb-2 leading-relaxed">
                                    <span className="opacity-60 text-[9px] uppercase tracking-wider text-red-400 block mb-0.5">
                                      Friction Point:
                                    </span>
                                    {resolveText(persona.pain)}
                                  </div>
                                  <div className="text-[11px] text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-card)] p-3 rounded border border-[var(--border-color)]">
                                    <span className="opacity-60 text-[9px] uppercase tracking-wider text-emerald-400 block mb-0.5">
                                      JTBD:
                                    </span>
                                    "{resolveText(persona.jtbd)}"
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* TAB 2: taxonomy-prd.json (9-Dim Taxonomy + 4 Specs + 100 Directory) */}
                    {activeTab === "taxonomy" && (
                      <motion.div
                        key="taxonomy"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-8 font-mono"
                      >
                        {/* 4 Core Specifications Header */}
                        <div>
                          <div className="text-xs font-mono text-[var(--accent-purple)] uppercase tracking-wider flex items-center gap-2 mb-3">
                            <Sparkles size={14} /> ## 4_Core_Product_Specifications
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {specsGuide.map((spec, idx) => (
                              <div
                                key={idx}
                                className="p-3 border border-[var(--border-color)] bg-[var(--bg-void)] rounded-lg"
                              >
                                <div className="text-[10px] uppercase tracking-wider text-[var(--accent-purple)] font-bold mb-1">
                                  {spec.label} <span className="opacity-50">(`{spec.key}`)</span>
                                </div>
                                <div className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                                  {spec.desc}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 9-Dimension Intelligence Taxonomy */}
                        <div>
                          <div className="text-xs font-mono text-[var(--accent-purple)] uppercase tracking-wider flex items-center gap-2 mb-3">
                            <Layers size={14} /> ## The_9_Dimension_Intelligence_Taxonomy
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {taxonomy.map((dim, idx) => (
                              <div
                                key={idx}
                                className="p-3.5 border border-[var(--border-color)] bg-[var(--bg-void)] rounded-lg relative"
                              >
                                <div className="text-[9px] uppercase tracking-wider text-[var(--accent-purple)] font-bold mb-1 flex items-center justify-between">
                                  <span>{resolveText(dim.name)}</span>
                                  <span className="opacity-40">DIM_{dim.number}</span>
                                </div>
                                <div className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                                  {resolveText(dim.desc)}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 100 Benchmarks Directory Breakdown */}
                        {benchmarkCategories.length > 0 && (
                          <div>
                            <div className="text-xs font-mono text-[var(--accent-purple)] uppercase tracking-wider flex items-center gap-2 mb-3">
                              <Compass size={14} /> ## 100_Curated_Benchmarks_Directory (5x20)
                            </div>
                            {/* Category Selector Tabs */}
                            <div className="flex gap-1.5 overflow-x-auto hide-scrollbar mb-3">
                              {benchmarkCategories.map((cat, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setActiveDirectoryCategory(idx)}
                                  className={`px-3 py-1.5 rounded text-[10px] uppercase font-bold tracking-wider transition-all whitespace-nowrap ${
                                    activeDirectoryCategory === idx
                                      ? "bg-[var(--accent-purple)] text-white shadow-sm"
                                      : "bg-[var(--bg-void)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-white"
                                  }`}
                                >
                                  {cat.category.split(" (")[0]} (20)
                                </button>
                              ))}
                            </div>

                            {/* Benchmark Chips */}
                            <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-void)] rounded-lg">
                              <div className="text-[10px] text-[var(--accent-purple)] uppercase tracking-wider mb-2 font-bold flex justify-between items-center">
                                <span>{benchmarkCategories[activeDirectoryCategory].category}</span>
                                <span className="text-[9px] text-[var(--text-secondary)] font-normal">
                                  Design Archetype: {benchmarkCategories[activeDirectoryCategory].archetype}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1.5 mt-3">
                                {benchmarkCategories[activeDirectoryCategory].items.map((item, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2.5 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-color)] text-[10px] text-[var(--text-primary)]"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* TAB 3: architecture-insights.json */}
                    {activeTab === "insights" && activeInsights && (
                      <motion.div
                        key="insights"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6 font-mono"
                      >
                        <div className="text-xs font-mono text-[var(--accent-purple)] uppercase tracking-wider flex items-center gap-2">
                          <Cpu size={14} /> ## Architecture_Insights &amp; Invariants
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeInsights.map((insight, i) => (
                            <div
                              key={i}
                              className="p-5 border border-[var(--border-color)] bg-[var(--bg-void)] rounded-lg relative group"
                            >
                              <div className="absolute top-0 right-0 px-2 py-0.5 bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-[10px] rounded-bl-lg">
                                insight_{i + 1}.sys
                              </div>
                              <h3 className="font-bold text-xs mb-2 mt-1 text-[var(--text-primary)]">
                                &gt; {insight.title}
                              </h3>
                              <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                                {insight.desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Data Contract Code Snippet */}
                        <div className="p-4 bg-[var(--bg-void)] border border-[var(--border-color)] rounded-lg text-[10px] leading-relaxed overflow-x-auto text-[var(--text-secondary)]">
                          <div className="text-emerald-400 mb-2 font-bold">// TypeScript Strict Data Contract</div>
                          <pre className="font-mono text-[10px] text-zinc-300 whitespace-pre">
{`export interface ProductSpecs {
  primary_segment: string;       // e.g. "Engineering & Product Teams"
  monetization_model: string;    // e.g. "Freemium + Per-Seat Subscription"
  conversion_path: string;       // e.g. "Self-Serve Instant Workspace Creation"
  design_signature: string;      // e.g. "Dark Glassmorphism, 100ms Interactions"
}

export interface AnalysisResult {
  url: string;
  product_brand: string;
  core_value_proposition: string;
  target_audience: string;
  cta_strategy: string[];
  information_hierarchy: string;
  trust_signals: string[];
  ux_writing_notes: string;
  friction_points: string[];
  design_opportunities: string[];
  designer_summary: string;
  specs?: ProductSpecs;
}`}
                          </pre>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 4: post-mortem.log */}
                    {activeTab === "learnings" && (
                      <motion.div
                        key="learnings"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6 font-mono"
                      >
                        <div className="p-6 bg-[var(--bg-void)] border border-[var(--border-color)] rounded-lg text-xs leading-relaxed text-[var(--text-secondary)]">
                          <div className="text-[var(--accent-purple)] mb-3 font-bold">
                            root@system:~# cat post_mortem.log
                          </div>
                          <p className="mb-4 text-sm font-light text-[var(--text-primary)] leading-relaxed">
                            {activeLearnings}
                          </p>
                        </div>

                        {roadmap.length > 0 && (
                          <div className="p-6 bg-[var(--bg-void)] border border-[var(--border-color)] rounded-lg">
                            <div className="text-xs font-mono text-[var(--accent-purple)] uppercase tracking-wider mb-4 font-bold flex items-center gap-2">
                              <Zap size={14} /> ## Product_Roadmap &amp; Future_Horizons
                            </div>
                            <div className="space-y-3">
                              {roadmap.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 text-[11px] pb-2 border-b border-[var(--border-color)] last:border-b-0"
                                >
                                  <span className="font-bold text-emerald-400 shrink-0 w-36">
                                    {item.version}
                                  </span>
                                  <span className="text-[var(--text-secondary)]">{item.desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Interactive Execution Flow (The Process) */}
                {activeProcess && (
                  <div className="mb-16">
                    <div className="text-[var(--accent-purple)] font-mono text-sm mb-6 flex items-center gap-2 font-bold">
                      <span>## execution_loop_stdout</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative">
                      {/* Phase Selector (Left Axis) */}
                      <div className="lg:col-span-4 space-y-2 sticky top-20">
                        {activeProcess.map((step, idx) => {
                          const isActive = activePhase === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => setActivePhase(idx)}
                              className={`w-full min-h-[44px] text-left px-4 py-3 rounded border transition-all duration-200 flex items-center gap-3 font-mono text-xs group ${
                                isActive
                                  ? "border-[var(--accent-purple)] bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] shadow-[inset_2px_0_0_var(--accent-purple)]"
                                  : "border-[var(--border-color)] bg-[var(--bg-void)] hover:border-[var(--accent-purple)]/30 text-[var(--text-secondary)]"
                              }`}
                            >
                              <span className="font-bold">{String(idx + 1).padStart(2, "0")}</span>
                              <span className="truncate flex-1">{step.title}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Phase Detail Viewer (Right Axis) */}
                      <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activePhase}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="border border-[var(--border-color)] bg-[var(--bg-void)] p-6 lg:p-8 rounded-lg relative overflow-hidden"
                          >
                            <div className="font-mono text-[9px] uppercase text-[var(--text-secondary)] mb-4 border-b border-[var(--border-color)] pb-2 flex justify-between">
                              <span>Step_{String(activePhase + 1).padStart(2, "0")}.exe</span>
                              <span className="text-[var(--accent-purple)]">
                                {t("project_layouts.status_running")}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-3 font-mono text-[var(--text-primary)]">
                              {activeProcess[activePhase].title}
                            </h3>
                            <p className="text-xs font-mono leading-relaxed text-[var(--text-secondary)] mb-6">
                              {activeProcess[activePhase].desc}
                            </p>
                            {activeProcess[activePhase].image && (
                              <div className="border border-[var(--border-color)] bg-[#0d0d0d] p-4 flex justify-center items-center h-48 relative overflow-hidden rounded group">
                                <div className="absolute inset-0 bg-[var(--accent-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:block hidden"></div>
                                <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(10,1fr)] opacity-5 md:block hidden">
                                  {Array.from({ length: 200 }).map((_, i) => (
                                    <div
                                      key={i}
                                      className="border-r border-b border-white mix-blend-overlay"
                                    ></div>
                                  ))}
                                </div>
                                {activeProcess[activePhase].image.startsWith("airy:") ? (
                                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <AiryDiagram
                                      type={activeProcess[activePhase].image.split(":")[1]}
                                    />
                                  </div>
                                ) : (
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src={activeProcess[activePhase].image}
                                    alt="diagram"
                                    className="max-h-full rounded z-10 relative"
                                  />
                                )}
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* -- RIGHT PANE: PREVIEW / RUNTIME TERMINAL -- */}
            {InteractionComponent && (
              <div className="w-full lg:w-96 shrink-0 border-l border-[var(--border-color)] flex flex-col bg-[var(--bg-void)]">
                {/* Terminal Header */}
                <div className="p-4 border-b border-[var(--border-color)] text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-2 shrink-0">
                  <Terminal size={12} /> {t("project_layouts.runtime_environment")}
                </div>

                <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
                  <div className="sticky top-0 mb-4">
                    <div className="text-[10px] font-mono text-emerald-500 mb-1">
                      $ pnpm run start:agent --watch
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-secondary)] opacity-60">
                      {t("project_layouts.starting_live_environment")}
                    </div>
                  </div>

                  {/* Mounted Component */}
                  <div className="w-full h-[520px] border border-[var(--accent-purple)]/20 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.05)] bg-[var(--bg-card)]">
                    <InteractionComponent />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. IDE BOTTOM STATUS BAR */}
          <div className="h-7 bg-[#007acc] dark:bg-[var(--accent-purple)] text-white flex items-center justify-between px-4 text-[9px] font-mono uppercase tracking-wider shrink-0">
            <div className="flex gap-4 items-center">
              <span className="flex items-center gap-1">
                <Cpu size={10} /> STATUS: 200 OK
              </span>
              <span className="hidden sm:inline">UTF-8</span>
              <span className="hidden sm:inline">React 19 / Vite / Gemini 2.5 Flash</span>
            </div>
            <div className="flex gap-4 items-center">
              {project.links?.pitch_deck && (
                <a
                  href={project.links.pitch_deck}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 flex items-center gap-1.5 px-2.5 py-0.5 bg-yellow-500/10 text-yellow-300 rounded border border-yellow-500/30"
                >
                  {t("project_layouts.pitch_deck")} <Presentation size={10} />
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/20 text-emerald-200 font-bold rounded border border-emerald-500/40 shadow-sm"
                >
                  {t("project_layouts.live_prototype")} <ExternalLink size={10} />
                </a>
              )}
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 flex items-center gap-1"
                >
                  {t("project_layouts.source")} <ArrowRight size={10} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AgenticDetail;
