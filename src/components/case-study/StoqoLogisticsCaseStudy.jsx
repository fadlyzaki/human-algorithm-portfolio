import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  MapPin,
  Navigation,
  Truck,
  Zap,
  AlertTriangle,
  FileText,
  Box,
  Clock,
  Layers,
  BarChart2,
  CheckCircle2,
  Activity,
  HeartPulse,
  Lightbulb,
  Search
} from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import ZoomableImage from "../ZoomableImage";

/* ═══════════════════════════════════════════════════════
   STOQO LOGISTICS — CUSTOM EDITORIAL CASE STUDY
   Brand: "Supply Chain / Logistics Delivery Tracker" Metaphor
   Vocabulary: waypoint, shipment_log, dispatch, routing
   ═══════════════════════════════════════════════════════ */

const LogisticsThemeWrapper = ({ children }) => (
  <div className="logistics-theme" style={{ "--brand": "var(--accent-amber)" }}>
    {children}
  </div>
);

const TrackingNode = ({ nodeId, title, status = "IN_TRANSIT", icon: Icon = Package }) => (
  <div className="flex items-start gap-4 md:gap-6 mb-12">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-2 border-[var(--brand)] bg-[var(--bg-void)] flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(var(--accent-amber-rgb),0.3)]">
        <Icon size={20} style={{ color: "var(--brand)" }} />
      </div>
      <div className="w-1 h-32 bg-gradient-to-b from-[var(--brand)] to-transparent mt-2 -mb-32" />
    </div>
    <div className="pt-2">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand)] opacity-80">
          NODE_{nodeId}
        </span>
        <span className="text-[var(--border-color)]">|</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text-secondary)] opacity-50 flex items-center gap-1">
          <Activity size={10} className="animate-pulse text-[var(--accent-amber)]" /> STATUS: {status}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
    </div>
  </div>
);

const DispatchLog = ({ children, className = "" }) => (
  <ScrollReveal>
    <section className={`relative max-w-6xl mx-auto px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  </ScrollReveal>
);

const WaypointCard = ({ title, desc, delay = 0, warning = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`p-6 md:p-8 rounded-xl border ${
      warning ? "border-[var(--accent-amber)] bg-[var(--accent-amber)]/5" : "border-[var(--border-color)] bg-[var(--bg-surface)]"
    } relative overflow-hidden group hover:border-[var(--brand)] transition-colors`}
  >
    {warning && (
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <AlertTriangle size={64} style={{ color: "var(--accent-amber)" }} />
      </div>
    )}
    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)] relative z-10">
      {title}
    </h3>
    <p className="text-[var(--text-secondary)] leading-relaxed relative z-10 whitespace-pre-line">
      {desc}
    </p>
  </motion.div>
);

const StoqoLogisticsCaseStudy = ({ project, t }) => {
  const assetPath = "/case-studies/stoqo-logistics";

  return (
    <LogisticsThemeWrapper>
      {/* ═══════ HEADER (ROUTING INITIATED) ═══════ */}
      <section className="relative max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-48 md:pb-24 border-b border-[var(--border-color)]">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[var(--bg-card)] border border-[var(--brand)]/40 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--brand)] animate-pulse shrink-0" />
                  <Truck size={13} style={{ color: "var(--brand)" }} className="opacity-80" />
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: "var(--brand)" }}>
                    {t("case_study.st_logistics_tag")}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-[0.1em]">
                  {project.date || "2018 - 2019"}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6">
                {t("case_study.st_logistics_title")}
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed">
                {t("case_study.st_logistics_subtitle")}
              </p>
            </div>
            
            {/* Quick Metrics / Manifest container */}
            <div className="bg-[var(--bg-surface)] p-6 md:p-8 rounded-2xl border border-[var(--border-color)]">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-6 border-b border-[var(--border-color)] pb-3">
                {t("case_study.st_logistics_manifest")}
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)] mb-1">{t("case_study.st_logistics_context_client")}</p>
                  <p className="font-medium text-[var(--text-primary)]">STOQO</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)] mb-1">{t("case_study.st_logistics_context_role")}</p>
                  <p className="font-medium text-[var(--text-primary)]">Product Designer</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)] mb-1">{t("case_study.st_logistics_context_focus")}</p>
                  <p className="font-medium text-[var(--text-primary)]">{t("case_study.st_logistics_focus_val")}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════ OVERVIEW ═══════ */}
      <DispatchLog>
        <TrackingNode nodeId="01" title={t("case_study.st_logistics_sec_overview")} icon={Package} status="DISPATCH_INITIATED" />
        <div className="grid md:grid-cols-2 gap-12 items-start pl-16 md:pl-20">
          <div className="space-y-6 md:col-span-2 max-w-4xl">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] italic leading-relaxed border-l-4 border-[var(--brand)] pl-4">
              {t("case_study.st_logistics_overview_p1")}
            </h3>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              {t("case_study.st_logistics_overview_p2")}
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              {t("case_study.st_logistics_overview_p3")}
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-medium mt-4">
              {t("case_study.st_logistics_overview_p4")}
            </p>
          </div>
        </div>
      </DispatchLog>

      {/* ═══════ CONTEXT ═══════ */}
      <DispatchLog className="bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <TrackingNode nodeId="02" title={t("case_study.st_logistics_sec_context")} icon={Clock} status="OPERATIONAL_MAPPING" />
        <div className="pl-16 md:pl-20 space-y-8 max-w-4xl">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            {t("case_study.st_logistics_context_p1")}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <WaypointCard 
              title={t("case_study.st_logistics_fresh_title")} 
              desc={t("case_study.st_logistics_fresh_desc")} 
            />
            <WaypointCard 
              title={t("case_study.st_logistics_dry_title")} 
              desc={t("case_study.st_logistics_dry_desc")}
              delay={0.1}
            />
          </div>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            {t("case_study.st_logistics_context_p2")}
          </p>
        </div>
      </DispatchLog>

      {/* ═══════ RESEARCH & FIELD WORK ═══════ */}
      <DispatchLog>
        <TrackingNode nodeId="03" title={t("case_study.st_logistics_sec_ground")} icon={Search} status="FIELD_SYNTHESIS" />
        
        <div className="pl-16 md:pl-20 space-y-16">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl">
            {t("case_study.st_logistics_ground_p1")}
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl italic border-l-4 border-[var(--brand)] pl-4">
            {t("case_study.st_logistics_ground_quote")}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-[var(--bg-surface)] rounded-xl border border-[var(--border-color)] overflow-hidden shadow-lg p-2">
                <ZoomableImage 
                  src={`${assetPath}/user-interview.png`} 
                  alt="Customer Interview Session" 
                  className="w-full h-full object-cover rounded-lg bg-black/5 dark:bg-white/5"
                />
              </div>
              <p className="font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] flex items-center justify-between">
                <span>{t("case_study.st_logistics_label_interview")}</span>
                <span className="opacity-50">ARCHIVE_C0</span>
              </p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-[var(--bg-surface)] rounded-xl border border-[var(--border-color)] overflow-hidden shadow-lg p-2">
                <ZoomableImage 
                  src={`${assetPath}/research-analysis.jpg`} 
                  alt="Research Analysis Wall" 
                  className="w-full h-full object-cover rounded-lg bg-black/5 dark:bg-white/5"
                />
              </div>
              <p className="font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] flex items-center justify-between">
                <span>{t("case_study.st_logistics_label_synthesis")}</span>
                <span className="opacity-50">ARCHIVE_C1</span>
              </p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-[var(--bg-surface)] rounded-xl border border-[var(--border-color)] overflow-hidden shadow-lg p-2">
                <ZoomableImage 
                  src={`${assetPath}/ideation-workshop.jpg`} 
                  alt="Ideation Workshop with Stakeholders" 
                  className="w-full h-full object-cover rounded-lg bg-black/5 dark:bg-white/5"
                />
              </div>
              <p className="font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] flex items-center justify-between">
                <span>{t("case_study.st_logistics_label_workshop")}</span>
                <span className="opacity-50">ARCHIVE_C2</span>
              </p>
            </div>
          </div>

        </div>
      </DispatchLog>

      {/* ═══════ ANALYSIS ═══════ */}
      <DispatchLog className="bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <TrackingNode nodeId="04" title={t("case_study.st_logistics_sec_analysis")} icon={HeartPulse} status="DATA_DIAGNOSTICS" />
        <div className="pl-16 md:pl-20 space-y-8 max-w-4xl">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
            {t("case_study.st_logistics_analysis_p1")}
          </p>
          <div className="grid gap-4">
            <WaypointCard 
              title={t("case_study.st_logistics_pain_early_title")} 
              desc={t("case_study.st_logistics_pain_early_desc")} 
              warning
            />
            <WaypointCard 
              title={t("case_study.st_logistics_pain_uncertain_title")} 
              desc={t("case_study.st_logistics_pain_uncertain_desc")} 
              warning
            />
            <WaypointCard 
              title={t("case_study.st_logistics_pain_blackout_title")} 
              desc={t("case_study.st_logistics_pain_blackout_desc")} 
              warning
            />
            <WaypointCard 
              title={t("case_study.st_logistics_pain_blindspot_title")} 
              desc={t("case_study.st_logistics_pain_blindspot_desc")} 
              warning
            />
          </div>
        </div>
      </DispatchLog>

      {/* ═══════ IDEATION ═══════ */}
      <DispatchLog>
        <TrackingNode nodeId="05" title={t("case_study.st_logistics_sec_ideation")} icon={Lightbulb} status="SOLUTION_MAPPING" />
        
        <div className="pl-16 md:pl-20 space-y-12">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl">
            {t("case_study.st_logistics_ideation_p1")}
          </p>
          
          <div className="bg-[var(--bg-surface)] p-8 rounded-2xl border-l-4 border-[var(--brand)] max-w-4xl">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-[var(--text-primary)]">
              <Zap size={20} className="text-[var(--brand)]" />
              {t("case_study.st_logistics_hmw_label")}
            </h4>
            <p className="text-xl md:text-2xl font-serif italic text-[var(--accent-amber)] leading-relaxed">
              {t("case_study.st_logistics_hmw_quote")}
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto aspect-[16/9] md:aspect-[21/9] bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-xl p-4">
             <ZoomableImage 
                src={`${assetPath}/ideation-notes.jpg`} 
                alt="Ideation Notes and Rough Sketches" 
                className="w-full h-full object-cover rounded-xl"
              />
          </div>
        </div>
      </DispatchLog>

      {/* ═══════ SOLUTION & DESIGN ═══════ */}
      <DispatchLog className="bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <TrackingNode nodeId="06" title={t("case_study.st_logistics_sec_design")} icon={Layers} status="ASSEMBLY" />
        
        <div className="pl-16 md:pl-20 space-y-16">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl">
            {t("case_study.st_logistics_design_p1")}
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">{t("case_study.st_logistics_feat_track_title")}</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                {t("case_study.st_logistics_feat_track_desc")}
              </p>
            </div>
            <div className="bg-[var(--bg-surface)] p-8 rounded-[2rem] border border-[var(--border-color)] shadow-2xl flex justify-center items-center">
               <ZoomableImage 
                  src={`${assetPath}/delivery-experience-1.png`} 
                  alt="Delivery Tracking Interface" 
                  className="w-full max-w-[280px] h-auto object-contain drop-shadow-2xl"
                />
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] border-dashed opacity-50" />

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="bg-[var(--bg-surface)] p-8 rounded-[2rem] border border-[var(--border-color)] shadow-2xl flex justify-center items-center md:order-1 order-2">
               <ZoomableImage 
                  src={`${assetPath}/delivery-experience-2.png`} 
                  alt="Intelligent Push Notification Map Tracking" 
                  className="w-full max-w-[280px] h-auto object-contain drop-shadow-2xl"
                />
            </div>
            <div className="flex flex-col gap-6 md:order-2 order-1">
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">{t("case_study.st_logistics_feat_integ_title")}</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                {t("case_study.st_logistics_feat_integ_desc")}
              </p>
             <ul className="space-y-4 mt-4 font-mono text-sm pl-2">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[var(--brand)]" /> {t("case_study.st_logistics_feat_eta")}
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[var(--brand)]" /> {t("case_study.st_logistics_feat_push")}
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[var(--brand)]" /> {t("case_study.st_logistics_feat_fail")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DispatchLog>

      {/* ═══════ USER & DESIGN FEEDBACK ═══════ */}
      <DispatchLog>
        <TrackingNode nodeId="07" title={t("case_study.st_logistics_sec_testing")} icon={Search} status="QC_IN_PROGRESS" />
        
        <div className="pl-16 md:pl-20 space-y-16">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl">
            {t("case_study.st_logistics_testing_p1")}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-xl p-2 relative group">
              <ZoomableImage 
                src={`${assetPath}/usability-testing.png`} 
                alt="Usability Testing Session" 
                className="w-full h-full object-cover rounded-xl bg-black/5 dark:bg-white/5"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 bg-[var(--brand)] rounded-full animate-pulse" />
                <span className="font-mono text-[10px] font-bold text-[var(--bg-void)] bg-[var(--brand)] px-2 py-0.5 rounded uppercase tracking-wider">FIELD TESTING</span>
              </div>
            </div>
            <div className="aspect-video bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-xl p-2 relative group">
              <ZoomableImage 
                src={`${assetPath}/usability-testing-1.png`} 
                alt="Usability Testing Session Feed" 
                className="w-full h-full object-cover rounded-xl bg-black/5 dark:bg-white/5"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 bg-[var(--brand)] rounded-full animate-pulse" />
                <span className="font-mono text-[10px] font-bold text-[var(--bg-void)] bg-[var(--brand)] px-2 py-0.5 rounded uppercase tracking-wider">USER OBSERVATION</span>
              </div>
            </div>
          </div>
        </div>
      </DispatchLog>

      {/* ═══════ OUTCOMES ═══════ */}
      <DispatchLog className="bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <TrackingNode nodeId="08" title={t("case_study.st_logistics_sec_impact")} icon={BarChart2} status="COMPLETED" />
        
        <div className="pl-16 md:pl-20">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl mb-12">
            {t("case_study.st_logistics_impact_p1")}
          </p>

          <div className="p-8 md:p-12 bg-gradient-to-br from-[var(--brand)] to-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl shadow-xl relative overflow-hidden">
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6">{t("case_study.st_logistics_impact_header")}</h3>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-[var(--text-secondary)]">
                {t("case_study.st_logistics_impact_desc")}
              </p>
            </div>
          </div>
        </div>
      </DispatchLog>
      <div className="pb-20" />
    </LogisticsThemeWrapper>
  );
};

export default StoqoLogisticsCaseStudy;
