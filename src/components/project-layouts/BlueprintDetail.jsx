import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
  BookOpen,
  Layers,
  Maximize,
  GitMerge,
  FileText,
  ArrowRight,
} from "lucide-react";
import AiryDiagram from "../AiryDiagram";
import ZoomableImage from "../ZoomableImage";

const BlueprintDetail = ({
  project,
  activeContext,
  activeChallenge,
  activeProcess,
  activeInsights,
  activeMetrics,
  activeLearnings,
  InteractionComponent,
  activeTitle,
  activeTldr,
  t,
}) => {
  // Aesthetic: Civil/Architectural Blueprint, Blue Graph Paper, Precise Lines, Technical Fonts
  const [activeTab, setActiveTab] = useState("challenge");
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="text-[var(--text-primary)] font-mono min-h-[100dvh] selection:bg-blue-300/40 relative overflow-hidden pb-32">
      {/* Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-30 dark:opacity-20 pointer-events-none z-0"></div>

      {/* Global Construction Lines */}
      <div className="fixed left-8 md:left-16 top-0 bottom-0 w-px bg-blue-500/20 z-0 hidden lg:block"></div>
      <div className="fixed right-8 md:right-16 top-0 bottom-0 w-px bg-blue-500/20 z-0 hidden lg:block"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 pt-24">
        {/* 1. BLUEPRINT HEADER */}
        <header className="border-2 border-blue-900/20 dark:border-blue-300/20 bg-[var(--bg-card)] backdrop-blur-sm p-8 md:p-16 mb-24 relative">
          {/* Corner Marks */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-600 dark:border-blue-400 -translate-x-1/2 -translate-y-1/2 bg-[var(--bg-surface)]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-600 dark:border-blue-400 translate-x-1/2 -translate-y-1/2 bg-[var(--bg-surface)]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-600 dark:border-blue-400 -translate-x-1/2 translate-y-1/2 bg-[var(--bg-surface)]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-600 dark:border-blue-400 translate-x-1/2 translate-y-1/2 bg-[var(--bg-surface)]"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b-2 border-[var(--border-color)] pb-8">
            <div>
              <div className="flex items-center gap-4 text-blue-600 dark:text-blue-400 mb-6">
                <BookOpen size={24} />
                <h1 className="text-4xl md:text-6xl font-serif italic tracking-tight text-[var(--text-primary)]">
                  {activeTitle}
                </h1>
              </div>
              <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                {activeTldr}
              </p>
            </div>

            {/* Title Block Specs */}
            <div className="border border-[var(--border-color)] p-4 text-[10px] uppercase tracking-widest grid grid-cols-2 gap-4 w-full md:w-auto shrink-0 bg-[var(--bg-void)]">
              <div>
                <span className="text-blue-500/60 block mb-1">
                  {t("project_layouts.project_type")}
                </span>
                <strong>{project.type}</strong>
              </div>
              <div>
                <span className="text-blue-500/60 block mb-1">{t("project_layouts.drawn_date")}</span>
                <strong>{activeContext.timeline}</strong>
              </div>
              <div>
                <span className="text-blue-500/60 block mb-1">{t("project_layouts.scale")}</span>
                <strong>1:1</strong>
              </div>
              <div>
                <span className="text-blue-500/60 block mb-1">{t("project_layouts.approval")}</span>
                <strong>{activeContext.role}</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-blue-800 dark:text-blue-200 uppercase font-bold tracking-widest">
            {project.links.demo && project.links.demo !== "#" && (
              <a
                href={project.links.demo}
                className="flex items-center gap-2 border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors"
              >
                {t("project_layouts.access_demo_site")} <ArrowRight size={14} />
              </a>
            )}
            <span className="flex items-center gap-2">
              <Layers size={14} /> {project.stack.join(" + ")}
            </span>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* LEFT COLUMN: Narrative & Process */}
          <div className="lg:col-span-8 space-y-24">
            {/* 3. NARRATIVE TABS BLOCK */}
            <section className="mb-24">
              {/* Tab Navigation */}
              <div className="flex border-b-2 border-blue-900/20 dark:border-blue-300/20 mb-8 overflow-x-auto hide-scrollbar">
                {[
                  { id: "challenge", label: t("project_layouts.problem_space") || "Problem Space" },
                  { id: "insights", label: "Planned Features" },
                  { id: "learnings", label: t("project_layouts.lesson_learned") || "Post Mortem" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-8 py-4 font-mono text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-3 shrink-0 ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-inner"
                        : "text-blue-500 hover:bg-blue-50 hover:dark:bg-blue-950/30"
                    }`}
                  >
                    {activeTab === tab.id && <Maximize size={12} />} {tab.label}
                  </button>
                ))}
              </div>

              <div className="bg-[var(--bg-surface)]/95 backdrop-blur-xl border-2 border-blue-900/20 dark:border-blue-300/20 shadow-sm relative min-h-[300px]">
                 <div className="absolute top-2 right-2 text-[8px] uppercase tracking-widest text-blue-500">SCHEMATIC_VIEW.dwg</div>
                 <AnimatePresence mode="wait">
                    {activeTab === "challenge" && (
                      <motion.div
                        key="challenge"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="p-8 md:p-12 text-2xl md:text-3xl leading-relaxed font-light border-l-2 border-blue-600/30 pl-6 dark:border-blue-400/30 font-sans"
                      >
                        {activeChallenge}
                      </motion.div>
                    )}

                    {activeTab === "insights" && activeInsights && (
                      <motion.div
                        key="insights"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="p-8 grid md:grid-cols-2 gap-8"
                      >
                        {activeInsights.map((insight, idx) => (
                          <div key={idx} className="border border-blue-900/10 dark:border-blue-300/10 p-6 bg-[var(--bg-card)]">
                            <h5 className="font-bold text-lg mb-2 text-[var(--text-primary)]">
                              FIG 0{idx + 1} // {insight.title}
                            </h5>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                              {insight.desc}
                            </p>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === "learnings" && activeLearnings && (
                      <motion.div
                        key="learnings"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="p-8 md:p-12"
                      >
                         <p className="font-serif italic text-2xl leading-relaxed text-blue-800 dark:text-blue-200">
                           "{activeLearnings}"
                         </p>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>
            </section>

            {/* Interactive Assembly Slider */}
            {activeProcess && (
              <section className="mb-24">
                <div className="text-[10px] text-blue-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                  <GitMerge size={12} /> {t("project_layouts.assembly_instructions")}
                </div>
                
                <div className="grid lg:grid-cols-12 gap-8 items-start relative">
                   {/* Left Axis: Process Nav */}
                   <div className="lg:col-span-4 sticky top-24 border-l-2 border-dashed border-blue-600/30 dark:border-blue-400/30 pl-6 space-y-6">
                      {activeProcess.map((step, idx) => {
                        const isActive = activePhase === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setActivePhase(idx)}
                            className={`w-full text-left relative flex items-center gap-4 group transition-all`}
                          >
                            <div className={`absolute -left-[35px] w-4 h-4 rounded-full border-2 bg-[var(--bg-card)] transition-colors ${isActive ? "border-blue-600 border-[6px]" : "border-blue-400/50 group-hover:border-blue-600"}`}></div>
                            <span className={`font-mono text-[10px] tracking-widest ${isActive ? "text-blue-600 font-bold" : "text-[var(--text-secondary)]"}`}>SEC_0{idx+1}</span>
                            <span className={`truncate font-bold font-sans ${isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}>{step.title}</span>
                          </button>
                        );
                      })}
                   </div>

                   {/* Right Axis: Details Content Window */}
                   <div className="lg:col-span-8">
                     <AnimatePresence mode="wait">
                       <motion.div
                         key={activePhase}
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         className="flex-1 pt-8 pb-8 pr-8 pl-10 bg-[var(--bg-surface)]/95 backdrop-blur-xl border-2 border-blue-900/20 dark:border-blue-300/20 shadow-sm relative overflow-hidden"
                       >
                         <h3 className="font-sans text-3xl font-bold mb-4 text-[var(--text-primary)] relative z-10">
                           {activeProcess[activePhase].title}
                         </h3>
                         <p className="font-sans text-xl text-[var(--text-secondary)] leading-relaxed mb-6 font-light relative z-10">
                           {activeProcess[activePhase].desc}
                         </p>

                         {activeProcess[activePhase].image && (
                           <div className="border border-blue-900/20 dark:border-blue-300/20 bg-blue-50/50 dark:bg-blue-950/30 p-4 relative h-64 md:h-[400px]">
                             <div className="absolute top-2 left-2 text-[8px] uppercase tracking-widest text-blue-500">
                               FIG_{activePhase + 1}.dwg
                             </div>
                             {activeProcess[activePhase].image.startsWith("airy:") ? (
                               <div className="h-full w-full flex items-center justify-center scale-110">
                                 <AiryDiagram
                                   type={activeProcess[activePhase].image.split(":")[1]}
                                 />
                               </div>
                             ) : (
                               <ZoomableImage
                                 src={activeProcess[activePhase].image}
                                 className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen opacity-80 hover:opacity-100 transition-opacity"
                               />
                             )}
                           </div>
                         )}
                       </motion.div>
                     </AnimatePresence>
                   </div>
                </div>
              </section>
            )}

            {/* Interaction Demo Box */}
            {(project.prototypeLink || InteractionComponent) && (
              <section className="border-2 border-blue-600 p-8 shadow-[8px_8px_0_rgba(37,99,235,0.2)] bg-[var(--bg-card)]">
                <h3 className="text-xl font-bold mb-8 uppercase flex items-center gap-3">
                  <BookOpen /> {t("project_layouts.user_testing_interface")}
                </h3>
                {project.prototypeLink ? (
                  <div className="w-full h-[600px] border-2 border-[var(--border-color)] bg-[var(--bg-void)]">
                    <iframe
                      src={project.prototypeLink}
                      title={`${activeTitle} Preview`}
                      className="w-full h-full border-0"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                ) : (
                  <InteractionComponent />
                )}
              </section>
            )}
          </div>

          {/* Sidebar Stats (Metrics only now, Learns & Insights moved to Tabs) */}
          <aside className="lg:col-span-4 space-y-12 shrink-0">
            {activeMetrics && (
              <div className="border border-[var(--border-color)] p-8 bg-[var(--bg-card)] backdrop-blur-sm sticky top-32 shadow-sm">
                <h4 className="text-[10px] text-blue-500 uppercase tracking-[0.2em] mb-8 pb-4 border-b border-[var(--border-color)]">
                  {t("project_layouts.specification_data")}
                </h4>

                <div className="space-y-6 mb-12">
                  {activeMetrics.map((m, i) => (
                    <div key={i}>
                      <div className="font-sans text-4xl font-bold text-[var(--text-primary)] mb-1">
                        {m.value}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlueprintDetail;
