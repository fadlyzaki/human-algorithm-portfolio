import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers, Palette, Type, Grid3X3, Box, ToggleLeft,
  MessageSquare, AlertTriangle, ChevronRight,
  Users, GitBranch, CheckCircle2, ArrowRight,
  Monitor, Smartphone, ExternalLink, MonitorPlay,
  Lightbulb, Target, Zap, BookOpen
} from "lucide-react";
import ScrollReveal from "../ScrollReveal";

// ─── Section Wrapper ───
const Section = ({ number, title, children, className = "" }) => (
  <ScrollReveal>
    <section className={`max-w-5xl mx-auto px-6 py-12 md:py-16 ${className}`}>
      <div className="flex items-baseline gap-4 mb-8">
        <span className="font-mono text-[var(--brand)] text-sm tracking-widest opacity-60">
          {String(number).padStart(2, "0")}
        </span>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--text-primary)]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  </ScrollReveal>
);

// ─── Stat Card ───
const StatCard = ({ icon: Icon, label, value, color = "var(--brand)" }) => (
  <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-[var(--brand)] transition-colors group">
    <Icon size={20} className="mb-4 opacity-40 group-hover:opacity-80 transition-opacity" style={{ color }} />
    <p className="text-2xl md:text-3xl font-light text-[var(--text-primary)] mb-1">{value}</p>
    <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">{label}</p>
  </div>
);

// ─── Token Swatch ───
const TokenSwatch = ({ name, colors }) => (
  <div className="space-y-3">
    <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">{name}</p>
    <div className="flex gap-1 h-10 rounded-lg overflow-hidden">
      {colors.map((c, i) => (
        <div key={i} className="flex-1 transition-transform hover:scale-y-110" style={{ backgroundColor: c }} />
      ))}
    </div>
  </div>
);

// ─── Component Card ───
const ComponentCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-[var(--brand)] transition-all group">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--brand)] transition-colors shrink-0">
        <Icon size={16} className="text-[var(--brand)] opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>
      <h4 className="font-medium text-sm text-[var(--text-primary)]">{title}</h4>
    </div>
    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{desc}</p>
  </div>
);

// ─── Process Step ───
const ProcessStep = ({ number, title, items }) => (
  <div className="flex gap-6 group">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] group-hover:border-[var(--brand)] flex items-center justify-center font-mono text-xs text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors shrink-0">
        {number}
      </div>
      <div className="w-px flex-1 bg-[var(--border-color)] mt-2" />
    </div>
    <div className="pb-10">
      <h4 className="font-medium text-[var(--text-primary)] mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            <ChevronRight size={12} className="mt-1 text-[var(--brand)] shrink-0 opacity-50" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const DesignSystemCaseStudy = ({ caseData, t }) => {
  const [activeTokenTab, setActiveTokenTab] = useState("color");

  const tokenTabs = [
    { id: "color", label: t("case_study.ds_tokens_tab_color"), icon: Palette },
    { id: "type", label: t("case_study.ds_tokens_tab_type"), icon: Type },
    { id: "spacing", label: t("case_study.ds_tokens_tab_spacing"), icon: Grid3X3 },
  ];

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-12 md:pt-40 md:pb-16">
        <ScrollReveal>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[var(--bg-card)] border border-[var(--brand)]/40 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--brand)] animate-pulse shrink-0" />
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: "var(--brand)" }}>
                {t("case_study.ds_tag")}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-widest">2021</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[var(--text-primary)] leading-[1.1]">
              {t("case_study.ds_title_main")}<br />
              <span className="text-[var(--text-secondary)]">{t("case_study.ds_title_sub")}</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl">
              {t("case_study.ds_tagline")}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <StatCard icon={Palette} label={t("case_study.ds_stat_brand_colors")} value="14 → 1" />
              <StatCard icon={Box} label={t("case_study.ds_stat_components")} value="40+" />
              <StatCard icon={Monitor} label={t("case_study.ds_stat_platforms")} value="3" />
              <StatCard icon={Zap} label={t("case_study.ds_stat_velocity")} value="+35%" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <div className="border-t border-[var(--border-color)]" />

      {/* ═══════ 01. OVERVIEW ═══════ */}
      <Section number={1} title={t("case_study.ds_sec_overview")}>
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">
          {t("case_study.ds_overview_desc")}
        </p>
      </Section>

      {/* ═══════ 02. PROBLEM ═══════ */}
      <Section number={2} title={t("case_study.ds_sec_problem")}>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: Palette, text: t("case_study.ds_prob_inconsistency") },
            { icon: Layers, text: t("case_study.ds_prob_manual") },
            { icon: GitBranch, text: t("case_study.ds_prob_fragmented") },
            { icon: MessageSquare, text: t("case_study.ds_prob_terminology") },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-red-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-red-500/50 transition-colors shrink-0">
                <item.icon size={16} className="text-red-400 opacity-80" />
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ 03. OBJECTIVES ═══════ */}
      <Section number={3} title={t("case_study.ds_sec_objectives")}>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: Target, title: t("case_study.ds_obj_unified_title"), desc: t("case_study.ds_obj_unified_desc") },
            { icon: Zap, title: t("case_study.ds_obj_efficiency_title"), desc: t("case_study.ds_obj_efficiency_desc") },
            { icon: Layers, title: t("case_study.ds_obj_scalability_title"), desc: t("case_study.ds_obj_scalability_desc") },
            { icon: Users, title: t("case_study.ds_obj_vocabulary_title"), desc: t("case_study.ds_obj_vocabulary_desc") },
          ].map((item, i) => (
            <ComponentCard key={i} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </Section>

      <div className="border-t border-[var(--border-color)]" />

      {/* ═══════ 04. DESIGN TOKENS ═══════ */}
      <Section number={4} title={t("case_study.ds_sec_tokens")}>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-10 max-w-2xl">
          {t("case_study.ds_tokens_desc")}
        </p>

        {/* Token Tab Switcher */}
        <div className="flex gap-1 p-1 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl w-fit mb-10">
          {tokenTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTokenTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-widest transition-all ${
                activeTokenTab === tab.id
                  ? "bg-[var(--bg-void)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              <tab.icon size={12} />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTokenTab === "color" && (
            <motion.div
              key="color"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <TokenSwatch name={t("case_study.ds_tokens_swatch_primary")} colors={["#00ADB5", "#00BCD4", "#B2EBF2", "#E0F7FA"]} />
              <TokenSwatch name={t("case_study.ds_tokens_swatch_neutral")} colors={["#1A1A1A", "#4A4A4A", "#9E9E9E", "#E0E0E0", "#F5F5F5"]} />
              <TokenSwatch name={t("case_study.ds_tokens_swatch_feedback")} colors={["#4CAF50", "#FF9800", "#F44336"]} />
              <TokenSwatch name={t("case_study.ds_tokens_swatch_surface")} colors={["#FFFFFF", "#FAFAFA", "#F0F0F0", "#E8E8E8"]} />
            </motion.div>
          )}
          {activeTokenTab === "type" && (
            <motion.div
              key="type"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {[
                { label: t("case_study.ds_tokens_type_h1"), size: "text-4xl", weight: "font-bold", spec: "32px / Bold" },
                { label: t("case_study.ds_tokens_type_h2"), size: "text-2xl", weight: "font-semibold", spec: "24px / Semibold" },
                { label: t("case_study.ds_tokens_type_h3"), size: "text-xl", weight: "font-medium", spec: "20px / Medium" },
                { label: t("case_study.ds_tokens_type_body"), size: "text-base", weight: "font-normal", spec: "15px / Regular" },
                { label: t("case_study.ds_tokens_type_caption"), size: "text-sm", weight: "font-normal", spec: "13px / Regular" },
                { label: t("case_study.ds_tokens_type_overline"), size: "text-xs", weight: "font-medium", spec: "11px / Medium / Uppercase" },
              ].map((t, i) => (
                <div key={i} className="flex items-baseline justify-between border-b border-[var(--border-color)] pb-4">
                  <span className={`${t.size} ${t.weight} text-[var(--text-primary)]`}>{t.label}</span>
                  <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-widest">{t.spec}</span>
                </div>
              ))}
            </motion.div>
          )}
          {activeTokenTab === "spacing" && (
            <motion.div
              key="spacing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                {t("case_study.ds_tokens_spacing_desc")}
              </p>
              {[2, 4, 8, 12, 16, 24, 32, 48].map((px) => (
                <div key={px} className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-[var(--text-secondary)] w-12 text-right">{px}px</span>
                  <div
                    className="h-3 rounded-sm bg-[var(--brand)] transition-all"
                    style={{ width: `${px * 4}px`, opacity: 0.3 + (px / 48) * 0.7 }}
                  />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Section>

      <div className="border-t border-[var(--border-color)]" />

      {/* ═══════ 05. COMPONENT ARCHITECTURE ═══════ */}
      <Section number={5} title={t("case_study.ds_sec_architecture")}>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-10 max-w-2xl">
          {t("case_study.ds_arch_desc")}
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ComponentCard icon={ToggleLeft} title={t("case_study.ds_arch_inputs_title")} desc={t("case_study.ds_arch_inputs_desc")} />
          <ComponentCard icon={Grid3X3} title={t("case_study.ds_arch_nav_title")} desc={t("case_study.ds_arch_nav_desc")} />
          <ComponentCard icon={MessageSquare} title={t("case_study.ds_arch_feedback_title")} desc={t("case_study.ds_arch_feedback_desc")} />
          <ComponentCard icon={Layers} title={t("case_study.ds_arch_display_title")} desc={t("case_study.ds_arch_display_desc")} />
        </div>
      </Section>

      {/* ═══════ 06. LAYOUT SYSTEM ═══════ */}
      <Section number={6} title={t("case_study.ds_sec_layout")}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl">
            <Monitor size={24} className="text-[var(--brand)] mb-4 opacity-60" />
            <h4 className="font-medium text-[var(--text-primary)] mb-2">{t("case_study.ds_layout_desktop_title")}</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
              {t("case_study.ds_layout_desktop_desc")}
            </p>
            <div className="flex gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex-1 h-8 rounded-sm bg-[var(--brand)] opacity-20 hover:opacity-50 transition-opacity" />
              ))}
            </div>
          </div>
          <div className="p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl">
            <Smartphone size={24} className="text-[var(--brand)] mb-4 opacity-60" />
            <h4 className="font-medium text-[var(--text-primary)] mb-2">{t("case_study.ds_layout_mobile_title")}</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
              {t("case_study.ds_layout_mobile_desc")}
            </p>
            <div className="flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex-1 h-8 rounded-sm bg-[var(--brand)] opacity-20 hover:opacity-50 transition-opacity" />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="border-t border-[var(--border-color)]" />

      {/* ═══════ 07. PROCESS ═══════ */}
      <Section number={7} title={t("case_study.ds_sec_process")}>
        <div className="max-w-xl">
          <ProcessStep number="1" title={t("case_study.ds_proc_step1_title")} items={t("case_study.ds_proc_step1_items", { returnObjects: true })} />
          <ProcessStep number="2" title={t("case_study.ds_proc_step2_title")} items={t("case_study.ds_proc_step2_items", { returnObjects: true })} />
          <ProcessStep number="3" title={t("case_study.ds_proc_step3_title")} items={t("case_study.ds_proc_step3_items", { returnObjects: true })} />
          <ProcessStep number="4" title={t("case_study.ds_proc_step4_title")} items={t("case_study.ds_proc_step4_items", { returnObjects: true })} />
        </div>
      </Section>

      {/* ═══════ 08. CHALLENGES ═══════ */}
      <Section number={8} title={t("case_study.ds_sec_challenges")}>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: AlertTriangle, title: t("case_study.ds_chall_ssot_title"), desc: t("case_study.ds_chall_ssot_desc") },
            { icon: MessageSquare, title: t("case_study.ds_chall_naming_title"), desc: t("case_study.ds_chall_naming_desc") },
            { icon: GitBranch, title: t("case_study.ds_chall_integ_title"), desc: t("case_study.ds_chall_integ_desc") },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-amber-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center mb-4 group-hover:border-amber-500/50 transition-colors shrink-0">
                <item.icon size={16} className="text-amber-500 opacity-80" />
              </div>
              <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">{item.title}</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="border-t border-[var(--border-color)]" />

      {/* ═══════ 09. IMPACT ═══════ */}
      <Section number={9} title={t("case_study.ds_sec_impact")}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard icon={Zap} label={t("case_study.ds_impact_redundancy")} value="Reduced" />
          <StatCard icon={Users} label={t("case_study.ds_impact_onboarding")} value="Faster" />
          <StatCard icon={CheckCircle2} label={t("case_study.ds_impact_consistency")} value="Unified" />
          <StatCard icon={GitBranch} label={t("case_study.ds_impact_sync")} value="Synced" />
        </div>

        <div className="p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl">
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {t("case_study.ds_impact_summary")}
          </p>
        </div>
      </Section>

      {/* ═══════ 10. LEARNINGS ═══════ */}
      <Section number={10} title={t("case_study.ds_sec_learnings")}>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: BookOpen, title: t("case_study.ds_learn_gov_title"), desc: t("case_study.ds_learn_gov_desc") },
            { icon: Palette, title: t("case_study.ds_learn_tokens_title"), desc: t("case_study.ds_learn_tokens_desc") },
            { icon: Lightbulb, title: t("case_study.ds_learn_doc_title"), desc: t("case_study.ds_learn_doc_desc") },
            { icon: Users, title: t("case_study.ds_learn_align_title"), desc: t("case_study.ds_learn_align_desc") },
          ].map((item, i) => (
            <ComponentCard key={i} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </Section>

      <div className="border-t border-[var(--border-color)]" />

      {/* ═══════ 11. PROTOTYPE VIEWER ═══════ */}
      {caseData?.prototypeUrl && (
        <Section number={11} title={t("case_study.ds_sec_proto")}>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 max-w-2xl">
            {t("case_study.ds_proto_desc")}
          </p>

          <div className="relative rounded-xl overflow-hidden border border-[var(--border-color)] shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-[var(--bg-card)]">
            {/* MacOS Chrome */}
            <div className="h-10 border-b border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center px-4 justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="font-mono text-[10px] text-[var(--text-secondary)] flex items-center gap-2 opacity-50">
                <MonitorPlay size={12} />
                gada_design_system.exe
              </div>
              <a
                href={caseData.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors"
              >
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#fafafa] dark:bg-[#09090b]">
              <iframe
                src={caseData.prototypeUrl}
                className="absolute inset-0 w-full h-full border-0"
                title="Design System Prototype"
                loading="lazy"
                allow="fullscreen"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>
        </Section>
      )}

      {/* ═══════ 12. REFLECTION ═══════ */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32 text-center">
        <ScrollReveal>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-8 block">
            12 — {t("case_study.ds_sec_reflection")}
          </span>
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[var(--text-primary)] italic">
            "{t("case_study.ds_reflection_quote")}"
          </p>
          <div className="mt-12 w-24 h-1 bg-[var(--brand)] mx-auto" />
        </ScrollReveal>
      </section>
    </>
  );
};

export default DesignSystemCaseStudy;
