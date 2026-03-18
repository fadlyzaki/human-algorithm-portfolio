import React from "react";
import { Sun } from "lucide-react";

const KeyInsights = ({ caseData, t }) => {
  if (!caseData.insights) return null;

  return (
    <section className="bg-[var(--bg-card)] border-y border-[var(--border-color)] py-32 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[var(--brand)] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Sun size={32} className="mx-auto text-[var(--brand)] mb-8" />
        <h2 className="text-3xl md:text-5xl font-serif italic mb-16 leading-tight">
          {t("protected.insights_title") ||
            '"We realized that clarity was more valuable than features."'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {caseData.insights.map((insight, i) => (
            <div
              key={i}
              className="border-l-2 border-[var(--brand)] pl-8 py-2"
            >
              <h3 className="font-bold uppercase tracking-widest text-xs mb-3 text-[var(--brand)]">
                {insight.title}
              </h3>
              <p className="text-lg text-[var(--text-primary)] leading-relaxed">
                {insight.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyInsights;
