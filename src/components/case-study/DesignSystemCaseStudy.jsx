import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Box,
  Boxes,
  CheckCircle2,
  Code2,
  Component,
  Database,
  ExternalLink,
  FileCode2,
  Figma,
  Gauge,
  GitBranch,
  Grid3X3,
  LibraryBig,
  MessageSquare,
  Monitor,
  MonitorPlay,
  MousePointer2,
  Palette,
  ScanLine,
  ShieldCheck,
  Smartphone,
  TabletSmartphone,
  Target,
  ToggleLeft,
  Type,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import RecruiterQuickBrief from "../project-layouts/shared/RecruiterQuickBrief";
import { useLanguage } from "../../context/LanguageContext";

const toList = (value) => (Array.isArray(value) ? value : []);

const metricValue = (caseData, label, fallback) => (
  caseData?.metrics?.find((metric) => metric.label === label)?.value || fallback
);

const LabSection = ({
  index,
  eyebrow,
  title,
  body,
  children,
  className = "",
}) => (
  <ScrollReveal>
    <section className={`px-6 py-16 md:py-24 ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.8fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-5 flex items-center gap-3 text-xs font-mono text-[var(--brand)]">
            <span>{String(index).padStart(2, "0")}</span>
            <span className="h-px w-10 bg-[var(--brand)]/50" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="max-w-md text-3xl font-light leading-[1.08] text-[var(--text-primary)] md:text-5xl">
            {title}
          </h2>
          {body && (
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--text-secondary)]">
              {body}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  </ScrollReveal>
);

const MetricTile = ({ icon: Icon, label, value, tone = "brand" }) => {
  const toneClass = {
    brand: "text-[var(--brand)] border-[var(--brand)]/35 bg-[var(--brand)]/5",
    green: "text-emerald-500 border-emerald-500/35 bg-emerald-500/5",
    blue: "text-blue-500 border-blue-500/35 bg-blue-500/5",
    amber: "text-amber-500 border-amber-500/35 bg-amber-500/5",
  }[tone];

  return (
    <div className={`rounded-lg border p-4 md:p-5 ${toneClass}`}>
      <Icon size={18} className="mb-3 md:mb-4" />
      <p className="text-2xl font-light leading-none text-[var(--text-primary)] md:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] md:mt-3">
        {label}
      </p>
    </div>
  );
};

const EvidenceRow = ({ icon: Icon, value, label, detail, tone }) => {
  const toneClass = {
    red: "text-red-500 bg-red-500/10 border-red-500/35",
    amber: "text-amber-500 bg-amber-500/10 border-amber-500/35",
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/35",
    green: "text-emerald-500 bg-emerald-500/10 border-emerald-500/35",
  }[tone];

  return (
    <div className="grid gap-4 border-b border-[var(--border-color)] py-5 last:border-b-0 md:grid-cols-[120px_1fr_1.25fr] md:items-center">
      <div className={`flex min-h-16 items-center gap-3 rounded-lg border px-4 ${toneClass}`}>
        <Icon size={17} />
        <span className="text-2xl font-light text-[var(--text-primary)]">
          {value}
        </span>
      </div>
      <div>
        <h3 className="text-base font-medium text-[var(--text-primary)]">
          {label}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        {detail}
      </p>
    </div>
  );
};

const TokenStrip = ({ label, colors }) => (
  <div>
    <div className="mb-2 flex items-center justify-between gap-4 text-xs text-[var(--text-secondary)]">
      <span>{label}</span>
      <span className="font-mono">{colors.length} tokens</span>
    </div>
    <div className="grid h-14 grid-cols-4 overflow-hidden rounded-lg border border-[var(--border-color)]">
      {colors.map((color) => (
        <div key={color} style={{ backgroundColor: color }} />
      ))}
    </div>
  </div>
);

const SpecimenHero = ({ t }) => (
  <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] shadow-[0_28px_80px_rgba(0,0,0,0.14)]">
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--brand)]/20 to-transparent" />

    <div className="relative p-5 md:p-7">
      <div className="mb-7 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/gudangada-logo.png"
            alt="GudangAda"
            className="h-9 w-9 rounded-lg border border-[var(--border-color)] bg-white object-contain p-1"
          />
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              GADA Design
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              {t("case_study.ds_lab_hero_artifact_subtitle")}
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-lg border border-emerald-500/35 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-500 sm:flex">
          <CheckCircle2 size={14} />
          <span>{t("case_study.ds_lab_source_truth")}</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-void)]/70 p-5">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-medium text-[var(--text-primary)]">
              {t("case_study.ds_lab_hero_artifact_title")}
            </p>
            <Figma size={16} className="text-[var(--brand)]" />
          </div>
          <div className="space-y-4">
            <TokenStrip
              label="brand.primary"
              colors={["#005F73", "#0A9396", "#1AA8B4", "#94D2BD"]}
            />
            <TokenStrip
              label="feedback.status"
              colors={["#10B981", "#3B82F6", "#F59E0B", "#EF4444"]}
            />
            <TokenStrip
              label="surface.scale"
              colors={["#FFFFFF", "#FAF9F6", "#E4E4E7", "#18181B"]}
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-void)]/70 p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-[var(--text-primary)]">
                Button.Primary
              </p>
              <Code2 size={16} className="text-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {["Default", "Hover", "Pressed", "Disabled"].map((state, index) => (
                <div
                  key={state}
                  className={`min-h-11 rounded-lg border px-3 py-3 ${
                    index === 3
                      ? "border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
                      : "border-[var(--brand)]/35 bg-[var(--brand)] text-white"
                  }`}
                  style={{ opacity: index === 3 ? 0.65 : 1 - index * 0.08 }}
                >
                  {state}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-void)]/70 p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-[var(--text-primary)]">
                Android Sheet
              </p>
              <Smartphone size={16} className="text-amber-500" />
            </div>
            <div className="mx-auto max-w-[180px] rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3">
              <div className="mx-auto mb-3 h-1 w-10 rounded-lg bg-[var(--border-color)]" />
              <div className="mb-2 h-3 rounded bg-[var(--text-primary)]/15" />
              <div className="mb-4 h-3 w-2/3 rounded bg-[var(--text-primary)]/10" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-10 rounded-lg bg-[var(--brand)]/20" />
                <div className="h-10 rounded-lg bg-[var(--brand)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-[var(--text-secondary)]">
        {["React", "Android", "Internal Tools"].map((platform) => (
          <div
            key={platform}
            className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-void)]/70 px-3 py-3"
          >
            {platform}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TokenWorkbench = ({ activeTokenTab, setActiveTokenTab, t }) => {
  const tokenTabs = [
    { id: "color", label: t("case_study.ds_tokens_tab_color"), icon: Palette },
    { id: "type", label: t("case_study.ds_tokens_tab_type"), icon: Type },
    { id: "spacing", label: t("case_study.ds_tokens_tab_spacing"), icon: Grid3X3 },
  ];

  return (
    <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
      <div className="flex flex-col gap-4 border-b border-[var(--border-color)] p-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-[var(--text-primary)]">
            {t("case_study.ds_lab_token_workbench")}
          </p>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            {t("case_study.ds_tokens_desc")}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tokenTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTokenTab(tab.id)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors ${
                activeTokenTab === tab.id
                  ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                  : "border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              <tab.icon size={15} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 md:p-7">
        <AnimatePresence mode="wait">
          {activeTokenTab === "color" && (
            <motion.div
              key="color"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="grid gap-5 md:grid-cols-2"
            >
              <TokenStrip
                label={t("case_study.ds_tokens_swatch_primary")}
                colors={["#005F73", "#0A9396", "#1AA8B4", "#94D2BD"]}
              />
              <TokenStrip
                label={t("case_study.ds_tokens_swatch_neutral")}
                colors={["#111827", "#374151", "#9CA3AF", "#E5E7EB"]}
              />
              <TokenStrip
                label={t("case_study.ds_tokens_swatch_feedback")}
                colors={["#10B981", "#3B82F6", "#F59E0B", "#EF4444"]}
              />
              <TokenStrip
                label={t("case_study.ds_tokens_swatch_surface")}
                colors={["#FFFFFF", "#FAF9F6", "#F3F4F6", "#181818"]}
              />
            </motion.div>
          )}

          {activeTokenTab === "type" && (
            <motion.div
              key="type"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              {[
                [t("case_study.ds_tokens_type_h1"), "32px", "text-4xl"],
                [t("case_study.ds_tokens_type_h2"), "24px", "text-2xl"],
                [t("case_study.ds_tokens_type_h3"), "20px", "text-xl"],
                [t("case_study.ds_tokens_type_body"), "15px", "text-base"],
                [t("case_study.ds_tokens_type_caption"), "13px", "text-sm"],
              ].map(([label, spec, size]) => (
                <div
                  key={label}
                  className="grid gap-2 border-b border-[var(--border-color)] pb-4 md:grid-cols-[1fr_110px] md:items-end"
                >
                  <span className={`${size} leading-tight text-[var(--text-primary)]`}>
                    {label}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-secondary)] md:text-right">
                    {spec}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          {activeTokenTab === "spacing" && (
            <motion.div
              key="spacing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {t("case_study.ds_tokens_spacing_desc")}
              </p>
              {[4, 8, 12, 16, 24, 32, 48].map((px) => (
                <div key={px} className="grid grid-cols-[48px_1fr] items-center gap-4">
                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    {px}px
                  </span>
                  <div className="h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-void)] p-2">
                    <div
                      className="h-full rounded bg-[var(--brand)]"
                      style={{ width: `${Math.min(px * 5, 240)}px`, opacity: 0.35 + px / 96 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const PillarCard = ({ icon: Icon, title, desc, meta }) => (
  <article className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
    <div className="mb-6 flex items-center justify-between gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--brand)]/35 bg-[var(--brand)]/10 text-[var(--brand)]">
        <Icon size={19} />
      </div>
      <span className="font-mono text-xs text-[var(--text-secondary)]">
        {meta}
      </span>
    </div>
    <h3 className="text-xl font-medium text-[var(--text-primary)]">
      {title}
    </h3>
    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
      {desc}
    </p>
  </article>
);

const ComponentAnatomy = ({ t }) => (
  <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
    <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium text-[var(--text-primary)]">
            {t("case_study.ds_lab_component_anatomy")}
          </h3>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {t("case_study.ds_lab_component_anatomy_desc")}
          </p>
        </div>
        <Component className="text-[var(--brand)]" size={22} />
      </div>

      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="space-y-3">
          {[
            [t("case_study.ds_lab_state_default"), "bg-[var(--brand)] text-white border-[var(--brand)]"],
            [t("case_study.ds_lab_state_hover"), "bg-[var(--brand)]/80 text-white border-[var(--brand)]"],
            [t("case_study.ds_lab_state_focus"), "bg-[var(--brand)] text-white border-blue-500"],
            [t("case_study.ds_lab_state_disabled"), "bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-color)]"],
          ].map(([state, classes]) => (
            <div
              key={state}
              className={`flex min-h-12 items-center justify-center rounded-lg border px-4 text-sm ${classes}`}
            >
              {state}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {[
            ["minHeight", "48dp"],
            ["radius", "8px"],
            ["contrast", "AAA target"],
            ["props", "variant / size / state"],
          ].map(([name, value]) => (
            <div
              key={name}
              className="grid grid-cols-[0.8fr_1fr] rounded-lg border border-[var(--border-color)] bg-[var(--bg-void)] px-4 py-3 text-sm"
            >
              <span className="font-mono text-xs text-[var(--text-secondary)]">
                {name}
              </span>
              <span className="text-[var(--text-primary)]">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="rounded-lg border border-amber-500/35 bg-amber-500/5 p-6">
      <div className="mb-5 flex items-center gap-3 text-amber-500">
        <TabletSmartphone size={20} />
        <h3 className="text-lg font-medium text-[var(--text-primary)]">
          {t("case_study.ds_lab_android_title")}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        {t("case_study.ds_lab_android_desc")}
      </p>
      <div className="mt-6 grid gap-3">
        {[
          t("case_study.ds_lab_android_sheet"),
          t("case_study.ds_lab_android_snackbar"),
          t("case_study.ds_lab_android_tap"),
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
            <BadgeCheck size={16} className="mt-0.5 shrink-0 text-amber-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const GovernanceTimeline = ({ steps }) => (
  <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
    {steps.map((step, index) => (
      <div
        key={step.title}
        className="grid gap-4 border-b border-[var(--border-color)] p-5 last:border-b-0 md:grid-cols-[92px_1fr]"
      >
        <div className="flex items-center gap-3 font-mono text-xs text-[var(--brand)]">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px flex-1 bg-[var(--brand)]/35 md:hidden" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-[var(--text-primary)]">
            {step.title}
          </h3>
          <ul className="mt-4 grid gap-2">
            {step.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                <ArrowRight size={14} className="mt-1 shrink-0 text-[var(--brand)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const PrototypeFrame = ({ caseData, t }) => {
  if (!caseData?.prototypeUrl) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
      <div className="flex h-12 items-center justify-between gap-4 border-b border-[var(--border-color)] bg-[var(--bg-surface)] px-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/20" />
          <span className="h-3 w-3 rounded-full border border-amber-500/50 bg-amber-500/20" />
          <span className="h-3 w-3 rounded-full border border-emerald-500/50 bg-emerald-500/20" />
        </div>
        <div className="hidden items-center gap-2 font-mono text-xs text-[var(--text-secondary)] sm:flex">
          <MonitorPlay size={14} />
          gada-design-system.local
        </div>
        <a
          href={caseData.prototypeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--brand)]"
        >
          <ExternalLink size={16} />
          <span className="sr-only">{t("case_study.ds_lab_open_docs")}</span>
        </a>
      </div>
      <div className="relative aspect-[4/3] w-full bg-[#fafafa] md:aspect-[16/9] dark:bg-[#09090b]">
        <iframe
          src={caseData.prototypeUrl}
          className="absolute inset-0 h-full w-full border-0"
          title="Design System Prototype"
          loading="lazy"
          allow="fullscreen"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  );
};

const DesignSystemCaseStudy = ({ caseData, t }) => {
  const { isIndonesian } = useLanguage();
  const [activeTokenTab, setActiveTokenTab] = useState("color");

  const metrics = [
    {
      icon: Palette,
      label: t("case_study.ds_stat_brand_colors"),
      value: metricValue(caseData, "Brand Colors", "14 → 1"),
      tone: "brand",
    },
    {
      icon: Box,
      label: t("case_study.ds_stat_components"),
      value: "40+",
      tone: "blue",
    },
    {
      icon: Monitor,
      label: t("case_study.ds_stat_platforms"),
      value: "3",
      tone: "amber",
    },
    {
      icon: Zap,
      label: t("case_study.ds_stat_velocity"),
      value: metricValue(caseData, "Eng. Velocity", "+35%"),
      tone: "green",
    },
  ];

  const auditRows = [
    {
      icon: Palette,
      value: "14",
      label: t("case_study.ds_lab_audit_brand_drift"),
      detail: t("case_study.ds_prob_inconsistency"),
      tone: "red",
    },
    {
      icon: ToggleLeft,
      value: "8",
      label: t("case_study.ds_lab_audit_button_drift"),
      detail: t("case_study.ds_lab_audit_button_detail"),
      tone: "amber",
    },
    {
      icon: MessageSquare,
      value: "3",
      label: t("case_study.ds_lab_audit_language_drift"),
      detail: t("case_study.ds_prob_terminology"),
      tone: "blue",
    },
    {
      icon: GitBranch,
      value: "0",
      label: t("case_study.ds_lab_audit_ssot_gap"),
      detail: t("case_study.ds_prob_fragmented"),
      tone: "red",
    },
  ];

  const objectives = [
    [Target, t("case_study.ds_obj_unified_title"), t("case_study.ds_obj_unified_desc")],
    [Gauge, t("case_study.ds_obj_efficiency_title"), t("case_study.ds_obj_efficiency_desc")],
    [Boxes, t("case_study.ds_obj_scalability_title"), t("case_study.ds_obj_scalability_desc")],
    [Users, t("case_study.ds_obj_vocabulary_title"), t("case_study.ds_obj_vocabulary_desc")],
  ];

  const pillars = [
    {
      icon: Database,
      meta: "Pillar 01",
      title: t("case_study.ds_lab_pillar_tokens_title"),
      desc: t("case_study.ds_lab_pillar_tokens_desc"),
    },
    {
      icon: LibraryBig,
      meta: "Pillar 02",
      title: t("case_study.ds_lab_pillar_core_title"),
      desc: t("case_study.ds_lab_pillar_core_desc"),
    },
    {
      icon: Smartphone,
      meta: "Pillar 03",
      title: t("case_study.ds_lab_pillar_android_title"),
      desc: t("case_study.ds_lab_pillar_android_desc"),
    },
  ];

  const governanceSteps = [
    {
      title: t("case_study.ds_proc_step1_title"),
      items: toList(t("case_study.ds_proc_step1_items")),
    },
    {
      title: t("case_study.ds_proc_step2_title"),
      items: toList(t("case_study.ds_proc_step2_items")),
    },
    {
      title: t("case_study.ds_proc_step3_title"),
      items: toList(t("case_study.ds_proc_step3_items")),
    },
    {
      title: t("case_study.ds_proc_step4_title"),
      items: toList(t("case_study.ds_proc_step4_items")),
    },
  ];

  const adoptionLessons = [
    [Workflow, t("case_study.ds_learn_gov_title"), t("case_study.ds_learn_gov_desc")],
    [ShieldCheck, t("case_study.ds_learn_tokens_title"), t("case_study.ds_learn_tokens_desc")],
    [BookOpen, t("case_study.ds_learn_doc_title"), t("case_study.ds_learn_doc_desc")],
    [Users, t("case_study.ds_learn_align_title"), t("case_study.ds_learn_align_desc")],
  ];

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="absolute inset-0 -z-10 bg-[var(--bg-void)]" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute left-0 top-16 -z-10 h-[360px] w-full bg-[radial-gradient(circle_at_30%_20%,var(--brand),transparent_42%)] opacity-20" />

        <ScrollReveal>
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:items-center">
            <div>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-3 py-2">
                  <img
                    src="/gudangada-logo.png"
                    alt="GudangAda"
                    className="h-7 w-7 object-contain"
                  />
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {t("case_study.ds_tag")}
                  </span>
                </div>
                <span className="rounded-lg border border-[var(--brand)]/35 bg-[var(--brand)]/10 px-3 py-2 font-mono text-xs text-[var(--brand)]">
                  Q1-Q3 2021
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-light leading-[1.02] text-[var(--text-primary)] md:text-7xl md:leading-[0.98]">
                {t("case_study.ds_title_main")}
                <span className="block text-[var(--text-secondary)]">
                  {t("case_study.ds_title_sub")}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-[var(--text-secondary)] md:mt-8 md:text-xl">
                {t("case_study.ds_lab_thesis_body")}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-4">
                {metrics.map((metric) => (
                  <MetricTile key={metric.label} {...metric} />
                ))}
              </div>
            </div>

            <SpecimenHero t={t} />
          </div>
        </ScrollReveal>

        {/* RECRUITER & HIRING MANAGER FAST-BRIEF */}
        <div className="mx-auto max-w-7xl pt-10">
          <RecruiterQuickBrief
            tldr={caseData.tldr || caseData.challenge || t("case_study.ds_lab_thesis_body")}
            context={caseData.context || {
              role: "Design System Lead & Product Designer",
              timeline: "Q1 - Q3 2021",
              team: "Design Ops & Core Engineering",
              client: "GudangAda",
            }}
            stack={caseData.stack || ["Figma", "React", "React Native", "Storybook", "TypeScript", "Design Tokens"]}
            hiringSignals={caseData.hiringSignals || [
              {
                en: "Unified 14 fragmented color palettes and 8 button variations into a single multi-platform design token engine.",
                id: "Menyatukan 14 palet warna terfragmentasi dan 8 variasi tombol ke dalam satu mesin token desain multi-platform.",
              },
              {
                en: "Built single source of truth across 3 platforms (Buyer Web, Merchant App, Internal Ops), accelerating eng velocity by +35%.",
                id: "Membangun sumber kebenaran tunggal di 3 platform, mempercepat kecepatan rilis eng sebesar +35%.",
              },
              {
                en: "Scaled design ops culture from scratch, mentoring 4 junior designers and establishing component governance.",
                id: "Menskalakan budaya design ops dari nol, membimbing 4 desainer junior dan menetapkan tata kelola komponen.",
              },
            ]}
            metrics={caseData.metrics || [
              { label: { en: "Velocity", id: "Kecepatan" }, value: "+35%" },
              { label: { en: "Components", id: "Komponen" }, value: "40+" },
              { label: { en: "Platforms", id: "Platform" }, value: "3" },
              { label: { en: "Color Parity", id: "Paritas Warna" }, value: "14 → 1" },
            ]}
            globalEquivalent="Amazon Business / Shopify Polaris Design System"
            brandColor="var(--brand)"
            isId={isIndonesian}
          />
        </div>
      </section>

      <LabSection
        index={1}
        eyebrow={t("case_study.ds_lab_chapter_thesis")}
        title={t("case_study.ds_sec_overview")}
        body={t("case_study.ds_overview_desc")}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {objectives.map(([Icon, title, desc]) => (
            <div
              key={title}
              className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
            >
              <Icon size={20} className="mb-5 text-[var(--brand)]" />
              <h3 className="text-lg font-medium text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-[var(--brand)]/35 bg-[var(--brand)]/10 p-6">
          <div className="mb-4 flex items-center gap-3 text-[var(--brand)]">
            <ScanLine size={20} />
            <h3 className="text-lg font-medium text-[var(--text-primary)]">
              {t("case_study.ds_lab_design_leader_read")}
            </h3>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
            {caseData?.challenge || t("case_study.ds_lab_thesis_body")}
          </p>
        </div>
      </LabSection>

      <div className="border-t border-[var(--border-color)]" />

      <LabSection
        index={2}
        eyebrow={t("case_study.ds_lab_chapter_audit")}
        title={t("case_study.ds_sec_problem")}
        body={t("case_study.ds_lab_audit_intro")}
      >
        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-5 md:p-7">
          {auditRows.map((row) => (
            <EvidenceRow key={row.label} {...row} />
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            [AlertTriangle, t("case_study.ds_chall_ssot_title"), t("case_study.ds_chall_ssot_desc"), "text-red-500"],
            [MessageSquare, t("case_study.ds_chall_naming_title"), t("case_study.ds_chall_naming_desc"), "text-amber-500"],
            [GitBranch, t("case_study.ds_chall_integ_title"), t("case_study.ds_chall_integ_desc"), "text-blue-500"],
          ].map(([Icon, title, desc, color]) => (
            <div
              key={title}
              className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
            >
              <Icon size={20} className={`mb-5 ${color}`} />
              <h3 className="text-lg font-medium text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </LabSection>

      <div className="border-t border-[var(--border-color)]" />

      <LabSection
        index={3}
        eyebrow={t("case_study.ds_lab_chapter_architecture")}
        title={t("case_study.ds_sec_architecture")}
        body={t("case_study.ds_arch_desc")}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>

        <div className="mt-8">
          <TokenWorkbench
            activeTokenTab={activeTokenTab}
            setActiveTokenTab={setActiveTokenTab}
            t={t}
          />
        </div>

        <div className="mt-8">
          <ComponentAnatomy t={t} />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
            <Monitor size={22} className="mb-5 text-[var(--brand)]" />
            <h3 className="text-lg font-medium text-[var(--text-primary)]">
              {t("case_study.ds_layout_desktop_title")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {t("case_study.ds_layout_desktop_desc")}
            </p>
            <div className="mt-6 grid grid-cols-12 gap-1">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="h-14 rounded bg-[var(--brand)]/20"
                  style={{ opacity: 0.18 + index / 30 }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
            <Smartphone size={22} className="mb-5 text-[var(--brand)]" />
            <h3 className="text-lg font-medium text-[var(--text-primary)]">
              {t("case_study.ds_layout_mobile_title")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {t("case_study.ds_layout_mobile_desc")}
            </p>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-14 rounded bg-[var(--brand)]/20"
                  style={{ opacity: 0.24 + index / 10 }}
                />
              ))}
            </div>
          </div>
        </div>
      </LabSection>

      <div className="border-t border-[var(--border-color)]" />

      <LabSection
        index={4}
        eyebrow={t("case_study.ds_lab_chapter_governance")}
        title={t("case_study.ds_sec_process")}
        body={t("case_study.ds_lab_governance_intro")}
      >
        <GovernanceTimeline steps={governanceSteps} />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {adoptionLessons.map(([Icon, title, desc]) => (
            <div
              key={title}
              className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-6"
            >
              <Icon size={20} className="mb-5 text-[var(--brand)]" />
              <h3 className="text-lg font-medium text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </LabSection>

      <div className="border-t border-[var(--border-color)]" />

      <LabSection
        index={5}
        eyebrow={t("case_study.ds_lab_chapter_docs")}
        title={t("case_study.ds_sec_impact")}
        body={t("case_study.ds_impact_summary")}
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <MetricTile
            icon={FileCode2}
            label={t("case_study.ds_impact_redundancy")}
            value={t("case_study.ds_lab_impact_reduced")}
            tone="brand"
          />
          <MetricTile
            icon={Users}
            label={t("case_study.ds_impact_onboarding")}
            value={t("case_study.ds_lab_impact_faster")}
            tone="blue"
          />
          <MetricTile
            icon={CheckCircle2}
            label={t("case_study.ds_impact_consistency")}
            value={t("case_study.ds_lab_impact_unified")}
            tone="green"
          />
          <MetricTile
            icon={GitBranch}
            label={t("case_study.ds_impact_sync")}
            value={t("case_study.ds_lab_impact_synced")}
            tone="amber"
          />
        </div>

        {caseData?.prototypeUrl && (
          <div className="mt-10">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-2xl font-light text-[var(--text-primary)]">
                  {t("case_study.ds_sec_proto")}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
                  {t("case_study.ds_proto_desc")}
                </p>
              </div>
              <a
                href={caseData.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--text-primary)] transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <ExternalLink size={16} />
                {t("case_study.ds_lab_open_docs")}
              </a>
            </div>
            <PrototypeFrame caseData={caseData} t={t} />
          </div>
        )}

        <div className="mt-12 rounded-lg border border-[var(--brand)]/35 bg-[var(--brand)]/10 p-6 text-center md:p-8">
          <p className="mx-auto max-w-3xl font-serif text-xl leading-relaxed text-[var(--text-primary)] md:text-3xl">
            "{t("case_study.ds_reflection_quote")}"
          </p>
        </div>
      </LabSection>

      <section className="px-6 pb-12 md:pb-16">
        <ScrollReveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[var(--border-color)] pt-8 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <MousePointer2 size={16} className="text-[var(--brand)]" />
              <span>{t("case_study.ds_lab_final_note")}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Tokens", "Core Components", "Android", "Governance"].map((item) => (
                <span key={item} className="rounded-lg border border-[var(--border-color)] px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default DesignSystemCaseStudy;
