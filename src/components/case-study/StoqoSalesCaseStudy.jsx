import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy, Target, Users, Zap, Eye, Shield, Music,
  ChevronRight, Monitor, BookOpen, Wifi, Gamepad2,
  AlertTriangle, Terminal, Crosshair, Radio, Flag,
  ArrowDown, Skull, HeartPulse, Award, Swords,
  Megaphone, TrendingUp, BarChart3, Layers,
} from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import ProjectCard from "../ProjectCard";
import AiryDiagram from "../AiryDiagram";
import ZoomableImage from "../ZoomableImage";

/* ═══════════════════════════════════════════════════════
   STOQO SALES — CUSTOM EDITORIAL CASE STUDY
   Brand: "Field Operations / Military Briefing" Metaphor
   Vocabulary: ops_log, evidence_log, field_intel, mission
   ═══════════════════════════════════════════════════════ */

// ─── Evidence Log (Section Wrapper) ───
const EvidenceLog = ({ logId, title, classification, children, className = "", dark = false }) => (
  <ScrollReveal>
    <section className={`relative ${dark ? "bg-[var(--bg-card)] border-y border-[var(--border-color)]" : ""} ${className}`}>
      {/* Subtle scan line effect on dark sections */}
      {dark && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)",
            backgroundSize: "100% 4px",
          }}
        />
      )}
      <div className={`relative max-w-5xl mx-auto px-6 ${dark ? "py-16 md:py-24" : "py-12 md:py-16"}`}>
        {title && (
          <div className="mb-8 md:mb-12">
            {/* Log header — monospace terminal style */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[var(--brand)] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand)] opacity-70">
                {logId || "LOG_ENTRY"}
              </span>
              {classification && (
                <>
                  <span className="text-[var(--border-color)]">|</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)] opacity-50">
                    {classification}
                  </span>
                </>
              )}
            </div>
            <h2 className="text-2xl md:text-4xl font-light tracking-tight text-[var(--text-primary)] leading-tight">
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  </ScrollReveal>
);

// ─── Intel Card ───
const IntelCard = ({ icon: Icon, title, desc, severity = "default" }) => {
  const severityColors = {
    critical: "border-[var(--accent-red)]/30 hover:border-[var(--accent-red)]",
    warning: "border-[var(--accent-amber)]/30 hover:border-[var(--accent-amber)]",
    success: "border-[var(--accent-green)]/30 hover:border-[var(--accent-green)]",
    default: "border-[var(--border-color)] hover:border-[var(--brand)]",
  };
  const iconColors = {
    critical: "var(--accent-red)",
    warning: "var(--accent-amber)",
    success: "var(--accent-green)",
    default: "var(--brand)",
  };

  return (
    <div className={`relative p-6 bg-[var(--bg-card)] border ${severityColors[severity]} rounded-xl transition-all group overflow-hidden`}>
      {/* Corner severity indicator */}
      <div
        className="absolute top-0 right-0 w-8 h-8 opacity-10"
        style={{
          background: `linear-gradient(135deg, ${iconColors[severity]} 50%, transparent 50%)`,
        }}
      />
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
          <Icon size={15} style={{ color: iconColors[severity] }} className="opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
        <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-medium">{title}</h4>
      </div>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{desc}</p>
    </div>
  );
};

// ─── Field Report Quote ───
const FieldReport = ({ text, source, classification = "CLASSIFIED" }) => (
  <div className="relative my-8">
    <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full" style={{ background: "linear-gradient(to bottom, var(--brand), transparent)" }} />
    <div className="pl-8 md:pl-10">
      <div className="flex items-center gap-2 mb-3">
        <Terminal size={12} className="text-[var(--brand)] opacity-60" />
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--brand)] opacity-50">
          {classification}
        </span>
      </div>
      <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed text-[var(--text-primary)]">
        "{text}"
      </blockquote>
      {source && (
        <cite className="block mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)] not-italic opacity-60">
          — {source}
        </cite>
      )}
    </div>
  </div>
);

// ─── KPI Ticker (Metric row styled like stock ticker) ───
const KPITicker = ({ metrics }) => (
  <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden">
    <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)]">
      {metrics.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="flex-1 px-6 py-8 md:py-10 text-center group hover:bg-[var(--bg-card)] transition-colors"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <TrendingUp size={14} className="text-[var(--accent-green)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="font-mono text-3xl md:text-4xl font-bold tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--brand)] transition-colors leading-none">
              {m.value}
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-60">
            {m.label}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

// ─── Rank Badge (Tier system visual) ───
const RankBadge = ({ rank, tier, level, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-center gap-4 p-5 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl hover:border-[var(--brand)] transition-all group"
  >
    <div className="relative">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-mono text-sm font-bold shadow-lg group-hover:scale-110 transition-transform"
        style={{ backgroundColor: color }}
      >
        <Award size={20} />
      </div>
      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center">
        <span className="font-mono text-[8px] font-bold text-[var(--text-secondary)]">{rank}</span>
      </div>
    </div>
    <div className="flex-1">
      <p className="font-medium text-[var(--text-primary)] text-sm">{tier}</p>
      <p className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-[0.15em]">{level}</p>
    </div>
    <Flag size={16} className="text-[var(--text-secondary)] opacity-0 group-hover:opacity-40 transition-opacity" />
  </motion.div>
);


const StoqoSalesCaseStudy = ({ caseData, project }) => {
  const designProcess = caseData.designProcess || caseData.process || [];
  const insights = caseData.insights || [];
  const solution = caseData.solution || [];
  const metrics = caseData.metrics || [];

  // Map process steps by type for narrative access
  const stepsByType = {};
  designProcess.forEach((step) => {
    if (!stepsByType[step.type]) stepsByType[step.type] = [];
    stepsByType[step.type].push(step);
  });

  const researchStep = stepsByType["research"]?.[0];
  const insightStep = stepsByType["insight"]?.[0];
  const designSteps = stepsByType["design"] || [];
  const shipStep = stepsByType["ship"]?.[0];

  const prototypes = solution.filter((s) => s.componentId);
  const exhibits = solution.filter((s) => !s.componentId);

  return (
    <>
      {/* ═══════ MISSION BRIEFING (HERO) ═══════ */}
      <section className="relative max-w-5xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <ScrollReveal>
          <div className="space-y-8">
            {/* Status bar */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 border border-[var(--brand)]/30 rounded-full bg-[var(--brand)]/5">
                <Crosshair size={12} style={{ color: "var(--brand)" }} />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--brand)" }}>
                  {project.tag || "Gamification"}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-[0.15em] uppercase">
                {caseData.context?.timeline || project.timeline}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[var(--text-primary)] leading-[1.05]">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl">
              {caseData.snapshot?.tagline || caseData.challenge}
            </p>

            {/* Ops metadata grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              {[
                { icon: Users, label: "Client", value: caseData.context?.client || "Sales Force" },
                { icon: Target, label: "Role", value: caseData.context?.role || "Product Designer" },
                { icon: Zap, label: "Timeline", value: caseData.context?.timeline || "3 Months" },
                { icon: Swords, label: "Team", value: caseData.context?.team || "Sales Ops" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg hover:border-[var(--brand)] transition-colors group"
                >
                  <item.icon size={16} className="mb-3 opacity-30 group-hover:opacity-70 transition-opacity" style={{ color: "var(--brand)" }} />
                  <p className="text-base md:text-lg font-light text-[var(--text-primary)] mb-0.5 leading-snug">{item.value}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-60">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <div className="border-t border-[var(--border-color)]" />

      {/* ═══════ SITUATION REPORT (Challenge) ═══════ */}
      <EvidenceLog logId="SIT_REP" title="Situation Report" classification="PRIORITY:_HIGH">
        <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-3xl mb-10">
          {caseData.challenge}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <IntelCard icon={Skull} title="Agent Attrition" desc="Sales agents leaving faster than we could hire — not because of salary, but because of confusion." severity="critical" />
          <IntelCard icon={Eye} title="KPI Blindspot" desc="Agents didn't understand how they were being measured. No clarity meant no trust." severity="warning" />
          <IntelCard icon={AlertTriangle} title="Data Distrust" desc="When data reliability is questioned, motivation collapses. 'My app says X, your dashboard says Y.'" severity="critical" />
        </div>
      </EvidenceLog>

      {/* ═══════ FIELD INTELLIGENCE (Research) ═══════ */}
      {researchStep && (
        <EvidenceLog logId="FIELD_INTEL" title="Field Intelligence" classification="RAW_DATA" dark>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <FieldReport
                text="TL doesn't understand definition of the KPI. If the leaders are confused, the troops are lost."
                source="Raw Data Interview — Field Activator TL"
                classification="EVIDENCE_LOG"
              />
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mt-8">
                {researchStep.desc}
              </p>
            </div>
            <div className="relative bg-[var(--bg-surface)] rounded-xl border border-[var(--border-color)] overflow-hidden">
              {researchStep.image && researchStep.image.startsWith("airy:") ? (
                <div className="w-full h-[280px] p-6 flex items-center justify-center">
                  <div className="w-full h-full max-w-md mx-auto">
                    <AiryDiagram type={researchStep.image.split(":")[1]} />
                  </div>
                </div>
              ) : researchStep.image ? (
                <ZoomableImage src={researchStep.image} alt={researchStep.title} className="w-full h-auto" />
              ) : (
                <div className="w-full h-[200px] flex items-center justify-center opacity-10">
                  <Radio size={48} />
                </div>
              )}
            </div>
          </div>
        </EvidenceLog>
      )}

      {/* ═══════ CORE FINDING (Trust Equation) ═══════ */}
      {insightStep && (
        <EvidenceLog logId="CORE_FINDING" title="The Trust Equation" classification="SYNTHESIS">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Equation Visual — styled like a system diagnostic */}
            <div className="md:col-span-2">
              <div className="relative p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl overflow-hidden">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[var(--brand)] opacity-20 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[var(--brand)] opacity-20 rounded-br-xl" />

                <div className="relative space-y-4 text-center py-4">
                  <div className="font-mono text-3xl md:text-4xl font-bold text-[var(--accent-red)] tracking-tight">
                    No Trust
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px flex-1 bg-[var(--border-color)]" />
                    <span className="font-mono text-lg text-[var(--text-secondary)] opacity-40">=</span>
                    <div className="h-px flex-1 bg-[var(--border-color)]" />
                  </div>
                  <div className="font-mono text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                    No Action
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--border-color)]">
                  <div className="flex items-center justify-center gap-2">
                    <HeartPulse size={12} className="text-[var(--accent-red)] animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-60">
                      Core Research Axiom
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Insight Description */}
            <div className="md:col-span-3">
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                {insightStep.desc}
              </p>
              <div className="relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] overflow-hidden">
                {insightStep.image && insightStep.image.startsWith("airy:") ? (
                  <div className="w-full h-[250px] p-6 flex items-center justify-center">
                    <div className="w-full h-full max-w-md mx-auto">
                      <AiryDiagram type={insightStep.image.split(":")[1]} />
                    </div>
                  </div>
                ) : insightStep.image ? (
                  <ZoomableImage src={insightStep.image} alt={insightStep.title} className="w-full h-auto" />
                ) : null}
              </div>
            </div>
          </div>
        </EvidenceLog>
      )}

      <div className="border-t border-[var(--border-color)]" />

      {/* ═══════ DESIGN HYPOTHESIS 01 (Chewable Info) ═══════ */}
      {designSteps[0] && (
        <EvidenceLog logId="DESIGN_HYP_01" title="Designing Chewable Information" classification="DESIGN_STRATEGY">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                {designSteps[0].desc}
              </p>

              {/* Transformation arrow — before/after */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-[var(--accent-red)]/5 border border-[var(--accent-red)]/20 rounded-lg"
                >
                  <Skull size={16} className="text-[var(--accent-red)] opacity-60 shrink-0" />
                  <div>
                    <p className="font-mono text-[9px] text-[var(--accent-red)] uppercase tracking-[0.2em] mb-0.5">Before</p>
                    <p className="text-sm text-[var(--text-primary)]">Complex Monthly Dashboards</p>
                  </div>
                </motion.div>

                <div className="flex justify-center">
                  <ArrowDown size={16} className="text-[var(--text-secondary)] opacity-30" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex items-center gap-3 p-4 bg-[var(--accent-green)]/5 border border-[var(--accent-green)]/20 rounded-lg"
                >
                  <Crosshair size={16} className="text-[var(--accent-green)] opacity-60 shrink-0" />
                  <div>
                    <p className="font-mono text-[9px] text-[var(--accent-green)] uppercase tracking-[0.2em] mb-0.5">After</p>
                    <p className="text-sm text-[var(--text-primary)]">Daily "Chewable" Goals</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] overflow-hidden">
              {designSteps[0].image && designSteps[0].image.startsWith("airy:") ? (
                <div className="w-full h-[300px] p-6 flex items-center justify-center">
                  <div className="w-full h-full max-w-md mx-auto">
                    <AiryDiagram type={designSteps[0].image.split(":")[1]} />
                  </div>
                </div>
              ) : designSteps[0].image ? (
                <ZoomableImage src={designSteps[0].image} alt={designSteps[0].title} className="w-full h-auto" />
              ) : null}
            </div>
          </div>
        </EvidenceLog>
      )}

      {/* ═══════ DESIGN HYPOTHESIS 02 (Gamification / Rank System) ═══════ */}
      {designSteps[1] && (
        <EvidenceLog logId="DESIGN_HYP_02" title="Motivation Beyond Money" classification="BEHAVIORAL_DESIGN" dark>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                {designSteps[1].desc}
              </p>

              {/* Rank Badges — military-themed tier system */}
              <div className="space-y-3">
                <RankBadge rank="★" tier="General" level="Elite Performer" color="var(--accent-amber)" delay={0} />
                <RankBadge rank="II" tier="Kapten" level="Advanced Agent" color="var(--brand)" delay={0.1} />
                <RankBadge rank="I" tier="Sersan" level="Standard Operative" color="var(--text-secondary)" delay={0.2} />
              </div>
            </div>

            <div className="relative bg-[var(--bg-surface)] rounded-xl border border-[var(--border-color)] overflow-hidden">
              {designSteps[1].image && designSteps[1].image.startsWith("airy:") ? (
                <div className="w-full h-[300px] p-6 flex items-center justify-center">
                  <div className="w-full h-full max-w-md mx-auto">
                    <AiryDiagram type={designSteps[1].image.split(":")[1]} />
                  </div>
                </div>
              ) : designSteps[1].image ? (
                <ZoomableImage src={designSteps[1].image} alt={designSteps[1].title} className="w-full h-auto" />
              ) : null}
            </div>
          </div>
        </EvidenceLog>
      )}

      {/* ═══════ BLUEPRINT & EXPLORATION (Requested Additions) ═══════ */}
      <EvidenceLog logId="SYS_ARCH" title="Blueprint & Exploration" classification="DESIGN_ARTIFACTS" className="blueprint-grid bg-[var(--bg-card)]">
        <div className="space-y-16">
          
          {/* Interaction Flow & User Journey */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded bg-[var(--brand)]/10 border border-[var(--brand)]/30 flex items-center justify-center">
                <Target size={12} className="text-[var(--brand)]" />
              </div>
              <h3 className="font-mono text-sm uppercase tracking-[0.1em] text-[var(--text-primary)]">
                Interaction Flow & User Journey
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-black">01</div>
                <h4 className="font-medium text-lg text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand)] transition-colors">Micro-commitments</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">Mapping the exact friction points from login to the "Siap Komandan!" daily target acceptance.</p>
                <div className="h-[200px] w-full border border-[var(--border-color)] border-dashed rounded-lg flex items-center justify-center opacity-60 bg-black/5 dark:bg-white/5">
                  <AiryDiagram type="flow" />
                </div>
              </div>
              
              <div className="p-8 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-black">02</div>
                <h4 className="font-medium text-lg text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand)] transition-colors">Cognitive Load Mapping</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">Journey map tracking the emotional variance of field agents during a typical 12-hour shift.</p>
                <div className="h-[200px] w-full border border-[var(--border-color)] border-dashed rounded-lg flex items-center justify-center opacity-60 bg-black/5 dark:bg-white/5">
                  <AiryDiagram type="chart" />
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes & Design Exploration */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded bg-[var(--brand)]/10 border border-[var(--brand)]/30 flex items-center justify-center">
                <Layers size={12} className="text-[var(--brand)]" />
              </div>
              <h3 className="font-mono text-sm uppercase tracking-[0.1em] text-[var(--text-primary)]">
                Wireframes & Design Exploration
              </h3>
            </div>
            
            <div className="relative p-6 md:p-10 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand)] via-[var(--accent-red)] to-[var(--brand)] opacity-20" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Wireframes */}
                <div className="flex flex-col">
                  <div className="aspect-[3/4] md:aspect-auto md:h-[600px] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl mb-4 overflow-hidden relative group">
                    <ZoomableImage 
                      src="/case-studies/stoqo-sales/wireframe.jpg" 
                      alt="Early Wireframes and Information Architecture" 
                      className="w-full h-full object-cover md:object-contain bg-black/5 dark:bg-white/5"
                    />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 pointer-events-none">
                      <span className="w-2 h-2 bg-[var(--accent-red)] rounded-full animate-pulse" />
                      <span className="font-mono text-[10px] md:text-xs font-bold text-[var(--accent-red)] bg-white/80 dark:bg-black/80 px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">LO-FI WIREFRAMES</span>
                    </div>
                  </div>
                  <h5 className="font-mono text-sm uppercase tracking-wider text-[var(--text-primary)]">Structural Constraints</h5>
                  <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">Early low-fidelity layouts tracing out the minimum required data for a field agent to feel secure about their targets before we applied high-fidelity UI elements.</p>
                </div>

                {/* Design Exploration */}
                <div className="flex flex-col">
                  <div className="aspect-[3/4] md:aspect-auto md:h-[600px] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl mb-4 overflow-hidden relative group">
                    <ZoomableImage 
                      src="/case-studies/stoqo-sales/exploration.jpg" 
                      alt="High-Fidelity Design Explorations" 
                      className="w-full h-full object-cover md:object-contain bg-black/5 dark:bg-white/5"
                    />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 pointer-events-none">
                      <span className="w-2 h-2 bg-[var(--accent-green)] rounded-full animate-pulse" />
                      <span className="font-mono text-[10px] md:text-xs font-bold text-[var(--accent-green)] bg-white/80 dark:bg-black/80 px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">HI-FI EXPLORATIONS</span>
                    </div>
                  </div>
                  <h5 className="font-mono text-sm uppercase tracking-wider text-[var(--text-primary)]">Visual Language Evolution</h5>
                  <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">Iterating through the cognitive load of high-fidelity screens. The goal was maintaining 'Chewable' information states across complex dashboard drill-downs.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[var(--border-color)] text-center">
                <p className="text-xs text-[var(--text-secondary)] font-mono">
                  &gt; ITERATION_LOG: 34_VARIATIONS_TESTED // SELECTED_UI_FOCUS: 'CHEWABLE_GOALS'
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </EvidenceLog>

      {/* ═══════ DEPLOYMENT BRIEF (Ship / Offline-First) ═══════ */}
      {shipStep && (
        <EvidenceLog logId="DEPLOY_BRIEF" title="Offline-First Rollout" classification="EDUCATION_&_ADOPTION">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                {shipStep.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: Megaphone, title: "Video Animasi", desc: "Animated guides for every FA", color: "var(--accent-blue)" },
                  { icon: Layers, title: "Infographics", desc: "Standardized visual playbooks", color: "var(--accent-purple)" },
                  { icon: Wifi, title: "Admin Day", desc: "Offline data sync ritual", color: "var(--accent-green)" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl text-center hover:border-[var(--brand)] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center mx-auto mb-3 group-hover:border-[var(--brand)] transition-colors">
                      <item.icon size={16} style={{ color: item.color }} className="opacity-60" />
                    </div>
                    <p className="font-mono text-xs text-[var(--text-primary)] mb-1 font-medium">{item.title}</p>
                    <p className="font-mono text-[10px] text-[var(--text-secondary)] opacity-60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] overflow-hidden">
              {shipStep.image && shipStep.image.startsWith("airy:") ? (
                <div className="w-full h-[280px] p-6 flex items-center justify-center">
                  <div className="w-full h-full max-w-sm mx-auto">
                    <AiryDiagram type={shipStep.image.split(":")[1]} />
                  </div>
                </div>
              ) : shipStep.image ? (
                <ZoomableImage src={shipStep.image} alt={shipStep.title} className="w-full h-auto" />
              ) : null}
            </div>
          </div>
        </EvidenceLog>
      )}

      <div className="border-t border-[var(--border-color)]" />

      {/* ═══════ FIELD NOTES (Key Insights) ═══════ */}
      {insights.length > 0 && (
        <EvidenceLog logId="FIELD_NOTES" title="Field Notes" classification="POST_DISCOVERY" dark>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.map((insight, i) => (
              <IntelCard
                key={i}
                icon={i === 0 ? Shield : Music}
                title={insight.title}
                desc={insight.desc}
                severity={i === 0 ? "success" : "default"}
              />
            ))}
          </div>
        </EvidenceLog>
      )}

      {/* ═══════ THE PRODUCT (Solution — Prototype) ═══════ */}
      <EvidenceLog logId="SOLUTION_DEMO" title="The Product" classification="INTERACTIVE_PROTOTYPE">
        {/* Interactive Prototype */}
        {prototypes.length > 0 && (
          <div className="mb-16">
            {prototypes.map((sol, i) => (
              <div key={`proto-${i}`} className="flex flex-col items-center">
                {/* Phone frame */}
                <div className="w-full md:w-1/2 aspect-[9/19] max-w-sm mx-auto bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] relative shadow-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 w-full h-full bg-[var(--bg-surface)]">
                    <ProjectCard id={sol.componentId} expanded={true} showChrome={true} />
                  </div>
                </div>

                {/* Prototype label */}
                <div className="mt-10 text-center max-w-2xl mx-auto px-4">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
                    <span className="font-mono text-[10px] text-[var(--accent-green)] uppercase tracking-[0.2em]">
                      Recreated 2018 Prototype
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light mb-3 text-[var(--text-primary)]">{sol.title}</h3>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Static Exhibits — Gallery style */}
        {exhibits.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 border-t border-[var(--border-color)] pt-14">
            {exhibits.map((sol, i) => (
              <div key={`exhibit-${i}`} className="flex flex-col group">
                <div className="aspect-video bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] relative shadow-lg overflow-hidden mb-5 transition-all duration-300 group-hover:shadow-xl group-hover:border-[var(--brand)]/30">
                  {sol.image && sol.image.startsWith("airy:") ? (
                    <div className="absolute inset-0 w-full h-full bg-[var(--bg-surface)] p-4 md:p-6">
                      <AiryDiagram type={sol.image.split(":")[1]} />
                    </div>
                  ) : sol.image ? (
                    <ZoomableImage
                      src={sol.image}
                      alt={sol.title}
                      containerClassName="absolute inset-0 w-full h-full"
                      className="w-full h-full object-contain bg-black/5 dark:bg-black/50"
                    />
                  ) : null}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-[1px] bg-[var(--brand)] opacity-50" />
                    <span className="font-mono text-[9px] text-[var(--brand)] uppercase tracking-[0.2em] opacity-60">
                      Exhibit_{String.fromCharCode(65 + i)}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-[var(--brand)] transition-colors text-[var(--text-primary)]">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </EvidenceLog>

      <div className="border-t border-[var(--border-color)]" />

      {/* ═══════ IMPACT (KPI Ticker) ═══════ */}
      {metrics.length > 0 && (
        <EvidenceLog logId="IMPACT_REPORT" title="Impact" classification="MEASURABLE_OUTCOMES">
          <KPITicker metrics={metrics} />
        </EvidenceLog>
      )}
    </>
  );
};

export default StoqoSalesCaseStudy;
