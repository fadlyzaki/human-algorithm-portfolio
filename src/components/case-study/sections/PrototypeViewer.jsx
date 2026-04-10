import React from "react";
import { MonitorPlay, ExternalLink, Maximize2 } from "lucide-react";
import ScrollReveal from "../../ScrollReveal";

const PrototypeViewer = ({ caseData, t }) => {
  if (!caseData.prototypeUrl) return null;

  return (
    <section className="relative px-6 py-24 border-y border-[var(--border-color)] bg-[var(--bg-void)]">
      <div className="absolute inset-x-0 inset-y-0 opacity-[0.03] pointer-events-none mix-blend-overlay blueprint-grid z-0" />
      
      <ScrollReveal className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4 opacity-50 font-mono text-xs uppercase tracking-widest">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand)]"></span>
              </span>
              {t?.("protected.prototype_live") || "Live Prototype Viewer"}
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-[var(--text-primary)]">
              Interactive Documentation
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] font-mono text-sm leading-relaxed border-l border-[var(--brand)] pl-4">
              Explore the fully-built design system prototype component library. Built with Vite, Radix UI, and Tailwind.
            </p>
          </div>
          
          <a
            href={caseData.prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-none items-center gap-2 px-6 py-3 border border-[var(--border-color)] hover:border-[var(--brand)] text-[var(--text-secondary)] hover:text-[var(--brand)] font-mono text-xs uppercase tracking-widest transition-all rounded-lg bg-[var(--bg-card)] shadow-lg"
          >
            <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
            Launch Fullscreen
          </a>
        </div>

        {/* Prototype MacOS Wrapper */}
        <div className="relative rounded-xl overflow-hidden border border-[var(--border-color)] shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[var(--bg-card)]">
          {/* MacOS Chrome Header */}
          <div className="h-10 border-b border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center px-4 justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="font-mono text-[10px] text-[var(--text-secondary)] flex items-center gap-2 opacity-50">
              <MonitorPlay size={12} />
              design_system_preview.exe
            </div>
            <div className="w-12"></div> {/* Spacer for center alignment */}
          </div>
          
          {/* Iframe Viewport */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#fafafa] dark:bg-[#09090b]">
            <iframe
              src={caseData.prototypeUrl}
              className="absolute inset-0 w-full h-full border-0"
              title="Design System Prototype"
              loading="lazy" /* CRUCIAL: Safeguards LCP/INP scores */
              allow="fullscreen"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default PrototypeViewer;
