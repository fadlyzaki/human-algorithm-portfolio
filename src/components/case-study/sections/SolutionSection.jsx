import React from "react";
import { Monitor } from "lucide-react";
import ProjectCard from "../../ProjectCard";
import AiryDiagram from "../../AiryDiagram";
import ZoomableImage from "../../ZoomableImage";

const SolutionSection = ({ caseData, t }) => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12 md:16 gap-4">
        <h2 className="text-3xl md:text-4xl font-serif italic">
          {t("protected.solution_title") || "The Solution"}
        </h2>
        <span className="font-mono text-[10px] md:text-xs text-[var(--text-secondary)] uppercase tracking-widest">
          {t("protected.solution_subtitle") || "Interface Design"}
        </span>
      </div>

      <div className="space-y-32">
        {caseData.solution ? (
          <>
            {/* 1. Interactive Prototypes (Grid or Centered) */}
            {caseData.solution.filter((s) => s.componentId).length > 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {caseData.solution
                  .filter((s) => s.componentId)
                  .map((sol, i) => (
                    <div
                      key={`int-${i}`}
                      className="flex flex-col items-center"
                    >
                      <div className="w-full max-w-[320px] aspect-[9/19] bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] relative shadow-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 w-full h-full bg-[var(--bg-surface)]">
                          <ProjectCard
                            id={sol.componentId}
                            expanded={true}
                            showChrome={true}
                          />
                        </div>
                      </div>
                      <div className="mt-8 text-center px-4 max-w-[320px]">
                        <div className="font-mono text-xs text-[var(--brand)] mb-2 uppercase tracking-widest font-bold">
                          {t("protected.live_prototype") ||
                            "Interactive Prototype"}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {sol.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {sol.desc}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              /* Single Item Centered Layout */
              caseData.solution
                .filter((s) => s.componentId)
                .map((sol, i) => (
                  <div
                    key={`int-${i}`}
                    className="flex flex-col items-center mb-24 last:mb-12"
                  >
                    <div className="w-full md:w-1/2 aspect-[9/19] max-w-sm mx-auto bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] relative shadow-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
                      <div className="absolute inset-0 w-full h-full bg-[var(--bg-surface)]">
                        <ProjectCard
                          id={sol.componentId}
                          expanded={true}
                          showChrome={true}
                        />
                      </div>
                    </div>
                    <div className="mt-10 text-center max-w-2xl mx-auto px-4">
                      <div className="font-mono text-xs text-[var(--brand)] mb-4 uppercase tracking-widest font-bold">
                        {t("protected.live_prototype") ||
                          "Interactive Prototype"}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">
                        {sol.title}
                      </h3>
                      <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                        {sol.desc}
                      </p>
                    </div>
                  </div>
                ))
            )}

            {/* 2. Static Exhibits (Grid) */}
            {caseData.solution.filter((s) => !s.componentId).length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16 border-t border-[var(--border-color)] pt-16">
                {caseData.solution
                  .filter((s) => !s.componentId)
                  .map((sol, i) => (
                    <div
                      key={`static-${i}`}
                      className="flex flex-col group"
                    >
                      <div className="aspect-video bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] relative shadow-lg overflow-hidden mb-6 transition-all duration-300 group-hover:shadow-xl group-hover:border-[var(--brand)]/30">
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
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Monitor size={48} />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-mono text-xs text-[var(--text-secondary)] mb-3 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-6 h-[1px] bg-[var(--text-secondary)] opacity-50"></span>
                          {t("protected.exhibit") || "Exhibit"}{" "}
                          {String.fromCharCode(65 + i)}
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--brand)] transition-colors">
                          {sol.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {sol.desc}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </>
        ) : (
          <div className="p-12 border border-dashed border-[var(--border-color)] text-center text-[var(--text-secondary)] font-mono">
            {t("protected.classified_arch") ||
              "[ CLASSIFIED SYSTEM ARCHITECTURE ]"}
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionSection;
