import React from "react";

const ImpactMetrics = ({ caseData, t }) => {
  if (caseData.designProcess || !caseData.metrics || caseData.metrics.length === 0) {
    return null;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="flex items-baseline justify-between mb-16 border-b border-[var(--border-color)] pb-6">
        <h2 className="text-4xl font-serif italic">
          {t("protected.impact_title") || "Impact & Outcomes"}
        </h2>
        <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">
          {t("protected.impact_subtitle") || "Measurable Results"}
        </span>
      </div>

      <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row">
          {caseData.metrics.map((m, i) => (
            <div
              key={i}
              className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-card)] transition-colors group"
            >
              <div className="text-3xl md:text-5xl font-mono font-bold tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--brand)] transition-colors mb-4 break-words max-w-full leading-tight">
                {m.value}
              </div>
              <div className="text-xs md:text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] opacity-70">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
