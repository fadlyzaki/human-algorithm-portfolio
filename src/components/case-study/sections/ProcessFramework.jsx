import React from "react";
import { AlertTriangle, Rocket, ScanEye, Activity } from "lucide-react";
import AiryDiagram from "../../AiryDiagram";
import ZoomableImage from "../../ZoomableImage";
import { DESIGN_PROCESS_STEPS } from "../../../data/processSteps";

const ProcessFramework = ({ caseData, t }) => {
  if (caseData.designProcess) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-32 space-y-32">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-baseline justify-between border-b border-[var(--border-color)] pb-4 md:pb-6 mb-12 md:16 gap-4">
          <h2 className="text-3xl md:text-4xl font-serif italic">
            {t("protected.process_title") || "The Process"}
          </h2>
          <span className="font-mono text-[10px] md:text-xs text-[var(--text-secondary)] uppercase tracking-widest">
            {t("protected.process_subtitle") || "Evolution of Thought"}
          </span>
        </div>

        {/* Steps Loop - SYSTEM STACK IMPLEMENTATION */}
        {DESIGN_PROCESS_STEPS.map((globalStep, i) => {
          // Match global framework step with local project data
          const localStep =
            caseData.designProcess && caseData.designProcess[i];

          // If no local data for this step, skip it (or render placeholder if needed)
          if (!localStep) return null;

          return (
            <div key={globalStep.id} className="relative group">
              {/* Connecting Line */}
              {i !== DESIGN_PROCESS_STEPS.length - 1 && (
                <div className="absolute left-8 top-24 bottom-[-128px] w-px bg-gradient-to-b from-[var(--border-color)] to-transparent z-0 hidden md:block opacity-50 border-l border-dashed border-[var(--border-color)]"></div>
              )}

              <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
                {/* HEADER: GLOBAL FRAMEWORK CONTEXT */}
                <div className="border-b border-[var(--border-color)] p-6 md:p-8 bg-[var(--bg-void)]/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg ${globalStep.bg} flex items-center justify-center text-[var(--bg-void)] shadow-lg`}
                    >
                      <globalStep.icon size={20} />
                    </div>
                    <div>
                      <div
                        className={`font-mono text-[10px] uppercase tracking-widest ${globalStep.color} font-bold mb-1`}
                      >
                        PHASE_{globalStep.id} // {globalStep.phase}
                      </div>
                      <div className="text-sm text-[var(--text-secondary)]">
                        {globalStep.objective}
                      </div>
                    </div>
                  </div>

                  {/* Risk Indicator (Right Side) */}
                  <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded bg-[var(--bg-card)] border border-[var(--border-color)]">
                    <AlertTriangle
                      size={12}
                      className="text-[var(--accent-red)]"
                    />
                    <span className="font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-wider">
                      RISK: {globalStep.risk.substring(0, 30)}...
                    </span>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row">
                  {/* LEFT COL: THE EXECUTION (Local Story) */}
                  <div className="lg:w-2/3 p-6 md:p-8 lg:p-10 lg:border-r border-[var(--border-color)]">
                    <div className="flex items-start gap-4 mb-6">
                      <span className="font-serif italic text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                        {localStep.title}
                      </span>
                    </div>

                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 prose prose-invert max-w-none">
                      {localStep.desc}
                    </p>

                    {/* Visual Evidence Area */}
                    <div className="relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] overflow-hidden">
                      {localStep.image &&
                        localStep.image.startsWith("airy:") ? (
                        <div className="w-full h-[250px] md:h-[350px] bg-[var(--bg-surface)] p-6 flex items-center justify-center">
                          <div className="w-full h-full max-w-lg mx-auto">
                            <AiryDiagram
                              type={localStep.image.split(":")[1]}
                            />
                          </div>
                        </div>
                      ) : localStep.image ? (
                        <ZoomableImage
                          src={localStep.image}
                          alt={localStep.title}
                          className="w-full h-auto max-h-[500px] object-cover"
                        />
                      ) : (
                        <div className="w-full h-[200px] flex items-center justify-center opacity-10">
                          <globalStep.icon size={48} />
                        </div>
                      )}

                      {/* Evidence Tag */}
                      <div className="absolute bottom-4 right-4 bg-[var(--bg-void)]/90 backdrop-blur border border-[var(--border-color)] px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                        <ScanEye size={12} className={globalStep.color} />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-primary)]">
                          Evidence_Log_0{i + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COL: SYSTEM SPECS (Global Framework) */}
                  <div className="lg:w-1/3 bg-[var(--bg-card)]/30">
                    <div className="p-6 md:p-8 border-b border-[var(--border-color)]">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                        <globalStep.icon size={12} /> Input Vectors
                      </div>
                      <ul className="space-y-3">
                        {globalStep.inputs.slice(0, 3).map((input, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[var(--text-secondary)] flex items-start gap-2"
                          >
                            <span className="mt-1 w-1 h-1 bg-[var(--text-secondary)] rounded-full shrink-0 opacity-50"></span>
                            {input}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                        <Rocket size={12} /> System Outputs
                      </div>
                      <ul className="space-y-3">
                        {globalStep.outputs
                          .slice(0, 3)
                          .map((output, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-[var(--text-primary)] font-medium flex items-start gap-2"
                            >
                              <span
                                className={`mt-0.5 ${globalStep.color} shrink-0 text-xs font-mono`}
                              >
                                {">"}
                              </span>
                              {output}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  } else {
    /* LEGACY LAYOUT - Keep existing structure for backward compatibility */
    return (
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex items-baseline justify-between mb-16 border-b border-[var(--border-color)] pb-6">
          <h2 className="text-4xl font-serif italic">
            {t("protected.process_title") || "The Process"}
          </h2>
          <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">
            {t("protected.process_subtitle") || "Evolution of Thought"}
          </span>
        </div>

        <div className="space-y-24 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)] -translate-x-1/2 hidden md:block z-0"></div>

          {caseData.process &&
            caseData.process.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-12 items-center relative z-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2 relative group">
                  <div className="relative bg-[var(--bg-card)] border border-[var(--border-color)] p-2 shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] hover:rotate-0 rotate-1">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500/80 shadow-lg border-2 border-white/20 z-20"></div>
                    <div className="min-h-[200px] max-h-[400px] bg-[var(--bg-surface)] overflow-hidden relative border border-[var(--border-color)]/50 flex items-center justify-center">
                      {step.image && step.image.startsWith("airy:") ? (
                        <div className="w-full h-[300px] bg-[var(--bg-surface)] p-4">
                          <AiryDiagram type={step.image.split(":")[1]} />
                        </div>
                      ) : step.image ? (
                        <ZoomableImage
                          src={step.image}
                          alt={step.title}
                          className="max-w-full max-h-[380px] object-contain"
                        />
                      ) : (
                        <div className="w-full h-[200px] flex items-center justify-center opacity-20 bg-[var(--bg-card)]">
                          <Activity size={48} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                    </div>

                    <div className="mt-2 flex justify-between items-center px-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
                        {t("protected.evidence") || "EVIDENCE"} #{i + 1}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] opacity-50">
                        CONFIDENTIAL
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-void)] border border-[var(--brand)] text-[var(--brand)] font-mono text-xs z-20 relative">
                  {i + 1}
                </div>

                <div
                  className={`w-full md:w-1/2 ${i % 2 === 1 ? "text-right md:pr-12" : "md:pl-12"}`}
                >
                  <div
                    className={`inline-block font-mono text-xs text-[var(--brand)] border border-[var(--brand)] px-3 py-1 rounded-full mb-4 opacity-80`}
                  >
                    {t("protected.step") || "STEP"} 0{i + 1}
                  </div>
                  <h3 className="text-3xl font-bold font-serif mb-6">
                    {step.title}
                  </h3>
                  <div
                    className={`prose prose-sm dark:prose-invert font-mono text-[var(--text-secondary)] leading-relaxed ${i % 2 === 1 ? "ml-auto" : ""}`}
                  >
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  }
};

export default ProcessFramework;
