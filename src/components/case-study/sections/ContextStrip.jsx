import React from "react";

const ContextStrip = ({ project, caseData, isId, t }) => {
  return (
    <section className="bg-[var(--bg-surface)] border-y border-[var(--border-color)] py-12 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-6xl sm:text-8xl md:text-[10rem] font-black text-black/5 pointer-events-none select-none whitespace-nowrap z-0">
        {t("protected.restricted_file") || "RESTRICTED"}
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {[
          {
            label: t("protected.context_client") || "Client",
            value: caseData.context?.client || t("protected.classified_arch") || "Confidential",
          },
          { 
            label: t("protected.context_role") || "Role", 
            value: caseData.context?.role || (isId ? project.role_id || project.role : project.role) 
          },
          {
            label: t("protected.context_timeline") || "Timeline",
            value: caseData.context?.timeline || (isId ? project.timeline_id || project.timeline : project.timeline),
          },
          {
            label: t("protected.context_team") || "Team",
            value: caseData.context?.team || t("protected.context_team") || "Product Team",
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col">
            <span className="font-mono text-[9px] md:text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-1 md:mb-2 opacity-70">
              {item.label}
            </span>
            <span className="font-medium text-base md:text-lg font-serif leading-tight">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContextStrip;
