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

// ─── Tracking Node (Section Header) ───
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

// ─── Dispatch Log (Content Container) ───
const DispatchLog = ({ children, className = "" }) => (
  <ScrollReveal>
    <section className={`relative max-w-6xl mx-auto px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  </ScrollReveal>
);

// ─── Waypoint Card ───
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

const StoqoLogisticsCaseStudy = ({ caseData, project, t }) => {
  const assetPath = "/case-studies/stoqo-logistics";

  return (
    <LogisticsThemeWrapper>
      {/* ═══════ HEADER (ROUTING INITIATED) ═══════ */}
      <section className="relative max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-48 md:pb-24 border-b border-[var(--border-color)]">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="px-3 py-1 bg-[var(--brand)]/10 border border-[var(--brand)]/30 rounded-full flex items-center gap-2">
                  <Truck size={12} style={{ color: "var(--brand)" }} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--brand)" }}>
                    End-To-End Experience
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-[0.1em]">
                  {project.date || "2018 - 2019"}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6">
                Transforming Delivery for Small F&B Businesses
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed">
                A Customer-Centric Solution.
              </p>
            </div>
            
            {/* Quick Metrics / Manifest container */}
            <div className="bg-[var(--bg-surface)] p-6 md:p-8 rounded-2xl border border-[var(--border-color)]">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-6 border-b border-[var(--border-color)] pb-3">
                Manifest Data
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)] mb-1">Company</p>
                  <p className="font-medium text-[var(--text-primary)]">STOQO</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)] mb-1">Role</p>
                  <p className="font-medium text-[var(--text-primary)]">Product Designer</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)] mb-1">Core Focus</p>
                  <p className="font-medium text-[var(--text-primary)]">Delivery Operations, Customer Experience, Supply Chain Tracking</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════ OVERVIEW ═══════ */}
      <DispatchLog>
        <TrackingNode nodeId="01" title="Overview" icon={Package} status="DISPATCH_INITIATED" />
        <div className="grid md:grid-cols-2 gap-12 items-start pl-16 md:pl-20">
          <div className="space-y-6 md:col-span-2 max-w-4xl">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] italic leading-relaxed border-l-4 border-[var(--brand)] pl-4">
              Imagine you're running a bustling 24-hour food business in the heart of the city. Every single morning, while most people are still sleeping, you navigate through the quiet streets on your motorcycle to reach the wet market between 4-6 am.
            </h3>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Rain or shine, this daily journey is an unavoidable part of your routine - carefully selecting fresh ingredients and essential stocks that will keep your business running smoothly throughout the day. This time-consuming process has become your daily ritual, though not necessarily by choice.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              When a salesman introduces you to STOQO, you try it, hoping it might finally free you from those early morning runs. Initially, everything is smooth. However, your optimism is suddenly challenged when you begin experiencing late deliveries, forcing you to return to your old routine of early morning market visits, disrupting your carefully planned schedule.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-medium mt-4">
              This compelling narrative represents an actual experience from one of STOQO's valued customers, and it became the catalyst for this comprehensive case study.
            </p>
          </div>
        </div>
      </DispatchLog>

      {/* ═══════ CONTEXT ═══════ */}
      <DispatchLog className="bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <TrackingNode nodeId="02" title="Context" icon={Clock} status="OPERATIONAL_MAPPING" />
        <div className="pl-16 md:pl-20 space-y-8 max-w-4xl">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            STOQO operates a sophisticated dual-delivery system tailored to different product categories.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <WaypointCard 
              title="Fresh Goods" 
              desc="Perishable items like vegetables and fresh produce, delivered during the crucial early morning window from dawn until 11 am to ensure maximum freshness." 
            />
            <WaypointCard 
              title="Dry Goods" 
              desc={'Essential household items "Sembako" (rice, bottled water) scheduled for afternoon delivery between 2 pm and 4 pm.'}
              delay={0.1}
            />
          </div>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            To maintain operational efficiency and ensure next-day delivery service, STOQO implements a strict cut-off time of 7 pm for all orders.
          </p>
        </div>
      </DispatchLog>

      {/* ═══════ RESEARCH & FIELD WORK ═══════ */}
      <DispatchLog>
        <TrackingNode nodeId="03" title="Ground Truth" icon={Search} status="FIELD_SYNTHESIS" />
        
        <div className="pl-16 md:pl-20 space-y-16">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl">
            Our Product Management team identified an increasing frequency of delivery-related complaints. Despite ongoing efforts to address operational inefficiencies, we needed deeper insights into how delivery challenges were affecting customers' daily operations.
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl italic border-l-4 border-[var(--brand)] pl-4">
            "Biasanya nyampe jam 4 atau jam 5, mas. Kemaren nyampe jam 8. Saya jadi terpaksa ke pasar buat beli barang lagi" — Warteg F (Customer)
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-[var(--bg-surface)] rounded-xl border border-[var(--border-color)] overflow-hidden shadow-lg p-2">
                <ZoomableImage 
                  src={`${assetPath}/research-analysis.jpg`} 
                  alt="Research Analysis Wall" 
                  className="w-full h-full object-cover rounded-lg bg-black/5 dark:bg-white/5"
                />
              </div>
              <p className="font-mono text-sm uppercase tracking-widest text-[var(--text-secondary)] flex items-center justify-between">
                <span>Research Synthesis</span>
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
                <span>Ideation Workshop</span>
                <span className="opacity-50">ARCHIVE_C2</span>
              </p>
            </div>
          </div>

        </div>
      </DispatchLog>

      {/* ═══════ ANALYSIS ═══════ */}
      <DispatchLog className="bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <TrackingNode nodeId="04" title="Analysis" icon={HeartPulse} status="DATA_DIAGNOSTICS" />
        <div className="pl-16 md:pl-20 space-y-8 max-w-4xl">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
            Through our detailed analysis and contextual interviews, we identified four significant and recurring pain points that consistently emerged in our users' delivery experiences:
          </p>
          <div className="grid gap-4">
            <WaypointCard 
              title="Premature Arrival" 
              desc="Drivers arriving ahead of schedule, causing disruption to customers' preparation routines and daily operations." 
              warning
            />
            <WaypointCard 
              title="Arrival Uncertainty" 
              desc="Customers experiencing uncertainty regarding the anticipated arrival time of their goods, leading to difficulties in planning their business activities." 
              warning
            />
            <WaypointCard 
              title="Communication Blackout" 
              desc="Customers requiring more transparent communication about potential delivery delays to better manage their inventory and operations." 
              warning
            />
            <WaypointCard 
              title="Real-time Blindspot" 
              desc="Customers lacking real-time awareness of driver arrival times, resulting in missed deliveries and operational inefficiencies." 
              warning
            />
          </div>
        </div>
      </DispatchLog>

      {/* ═══════ IDEATION ═══════ */}
      <DispatchLog>
        <TrackingNode nodeId="05" title="Ideation" icon={Lightbulb} status="SOLUTION_MAPPING" />
        
        <div className="pl-16 md:pl-20 space-y-12">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl">
            To facilitate the ideation process, I organized an intensive collaborative workshop. We carefully crafted "How Might We" (HMW) Questions that directly corresponded to the key insights we uncovered.
          </p>
          
          <div className="bg-[var(--bg-surface)] p-8 rounded-2xl border-l-4 border-[var(--brand)] max-w-4xl">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-[var(--text-primary)]">
              <Zap size={20} className="text-[var(--brand)]" />
              Core HMW Question
            </h4>
            <p className="text-xl md:text-2xl font-serif italic text-[var(--accent-amber)] leading-relaxed">
              "How might we manage user anxiety due to risk exposure from uncertain delivery time?"
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
        <TrackingNode nodeId="06" title="Design System" icon={Layers} status="ASSEMBLY" />
        
        <div className="pl-16 md:pl-20 space-y-16">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl">
            After thorough deliberation and voting, we selected a comprehensive delivery status tracking system with real-time in-app push notifications as our primary solution.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">Comprehensive Delivery Status Tracking</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                A detailed status system that informs customers at every delivery stage, from order confirmation to final delivery. This includes status indicators, estimated preparation times, and delivery progress updates.
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
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">Intelligent System Integration</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Previously, STOQO operated separate systems for drivers and customers. We unified these systems to create seamless information flow.
              </p>
             <ul className="space-y-4 mt-4 font-mono text-sm pl-2">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[var(--brand)]" /> Real-time ETA calculations
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[var(--brand)]" /> Push notification system framework
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[var(--brand)]" /> SMS and WhatsApp fail-safes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DispatchLog>

      {/* ═══════ OUTCOMES ═══════ */}
      <DispatchLog>
        <TrackingNode nodeId="07" title="Validation & Impact" icon={BarChart2} status="COMPLETED" />
        
        <div className="pl-16 md:pl-20">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl mb-12">
            The most significant learning experience emerged from the intricate process of analyzing and synthesizing the research data. As my first major user research undertaking... the process of mapping complex user behaviors helped develop my analytical capabilities and strengthened my approach to user-centered design methodology.
          </p>

          <div className="p-8 md:p-12 bg-gradient-to-br from-[var(--brand)] to-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl shadow-xl relative overflow-hidden">
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Substantial Measurable Impact</h3>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-[var(--text-secondary)]">
                Customers experienced significantly improved visibility into their delivery timing, enabling them to plan their operations more effectively and reduce uncertainty in their daily workflows. This enhancement in service transparency manifested tangibly in our metrics, with a notable decrease in delivery-related inquiries to our Customer Service team, indicating that customers felt more informed and confident about their deliveries.
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
