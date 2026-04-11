import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Target, Square, Slash } from "lucide-react";
import AiryDiagram from "../AiryDiagram";
import ZoomableImage from "../ZoomableImage";

const BrutalistDetail = ({
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
  activeSnapshot,
  t,
}) => {
  // Aesthetic: Neo-Brutalism, High Contrast, Stark Grids, Thick Borders, var(--accent-red) Red Actions
  const [activeTab, setActiveTab] = useState("challenge");
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="text-[var(--text-primary)] font-sans min-h-[100dvh] selection:bg-[var(--accent-red)] selection:text-white pb-32">
      <main className="max-w-7xl mx-auto px-6 pt-24 font-mono">
        {/* 1. HERO BANNER */}
        <header className="border-4 border-[var(--text-primary)] p-8 md:p-16 relative bg-[var(--bg-card)] shadow-[16px_16px_0px_0px_var(--accent-red)] mb-32">
          <div className="absolute top-0 right-0 p-4 border-l-4 border-b-4 border-[var(--text-primary)] bg-[var(--accent-red)] text-[var(--bg-void)]">
            <Target size={32} />
          </div>

          <div className="inline-block bg-[var(--text-primary)] text-[var(--bg-void)] px-4 py-2 font-black uppercase text-sm mb-12">
            {activeSnapshot.tagline} // {project.type}
          </div>

          <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.85] tracking-tighter mb-12">
            {activeTitle}
          </h1>

          <p className="text-2xl md:text-3xl font-bold max-w-3xl leading-snug border-l-8 border-[var(--accent-red)] pl-6 py-2">
            {activeTldr}
          </p>

          <div className="mt-16 pt-8 border-t-4 border-[var(--text-primary)] flex flex-wrap gap-8 items-center text-sm font-black uppercase">
            <div>
              <span className="opacity-50 block mb-1">{t("project_layouts.timeline")}</span>
              {activeContext.timeline}
            </div>
            <div>
              <span className="opacity-50 block mb-1">{t("project_layouts.role")}</span>
              {activeContext.role}
            </div>
            <div className="flex-1"></div>
            {project.links.demo && project.links.demo !== "#" && (
              <a
                href={project.links.demo}
                className="flex items-center gap-2 bg-[var(--accent-red)] text-white px-8 py-4 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-8px_8px_0_0_black] dark:hover:shadow-[-8px_8px_0_0_white] transition-transform"
              >
                {t("project_layouts.read_research_paper")} <ArrowUpRight />
              </a>
            )}
          </div>
        </header>

        {/* NARRATIVE TABS */}
        <section className="mb-32 max-w-7xl mx-auto space-y-12">
          {/* TAB BUTTONS - Brutalist Style */}
          <div className="flex flex-wrap border-4 border-[var(--text-primary)] w-full font-black uppercase text-xl">
            {[
              { id: "challenge", label: t("project_layouts.the_problem") || "The Problem" },
              { id: "insights", label: "Core Insights" },
              { id: "learnings", label: t("project_layouts.lesson_learned") || "Post Mortem" },
            ].map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[200px] border-r-4 last:border-r-0 border-b-4 lg:border-b-0 border-[var(--text-primary)] py-6 transition-transform active:translate-y-1 active:translate-x-1 ${
                  activeTab === tab.id
                    ? "bg-[var(--accent-red)] text-white shadow-[8px_8px_0_0_var(--text-primary)] -translate-y-2 -translate-x-2 z-10"
                    : "bg-[var(--bg-card)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-void)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "challenge" && (
              <motion.div
                key="challenge"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="border-4 border-[var(--text-primary)] p-12 md:p-24 bg-[var(--text-primary)] text-[var(--bg-void)] shadow-[16px_16px_0_0_var(--accent-red)] flex gap-8 items-start">
                  <Slash size={64} className="shrink-0 hidden md:block text-[var(--accent-red)]" strokeWidth={3} />
                  <p className="text-2xl md:text-3xl font-black uppercase italic leading-[1.1]">
                    {activeChallenge}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "insights" && activeInsights && (
              <motion.div
                key="insights"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {activeInsights.map((insight, i) => (
                  <div key={i} className="border-4 border-[var(--text-primary)] p-8 bg-[var(--bg-surface)] hover:-translate-y-2 hover:shadow-[16px_16px_0_0_var(--accent-red)] transition-all">
                    <div className="font-black text-5xl text-[var(--accent-red)] mb-4 italic">
                      #{i + 1}
                    </div>
                    <h3 className="text-3xl font-black uppercase mb-4 leading-none">{insight.title}</h3>
                    <p className="text-xl font-bold leading-snug">{insight.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "learnings" && activeLearnings && (
              <motion.div
                key="learnings"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="border-4 border-[var(--text-primary)] p-12 md:p-24 bg-[var(--accent-red)] text-white shadow-[16px_16px_0_0_var(--text-primary)] flex gap-8 items-start">
                  <Slash size={64} className="shrink-0 hidden md:block" strokeWidth={3} />
                  <p className="text-2xl md:text-3xl font-black uppercase italic leading-[1.1]">
                    "{activeLearnings}"
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* INTERACTIVE PROCESS SLIDER - Brutalist Variant */}
        {activeProcess && (
          <section className="mb-32">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 inline-block bg-[var(--text-primary)] text-[var(--bg-void)] px-6 py-4">
              {t("project_layouts.methodology") || "Execution Loop"}
            </h2>
            
            <div className="grid lg:grid-cols-12 gap-12 items-start relative">
              {/* Aggressive Radio List */}
              <div className="lg:col-span-4 flex flex-col gap-4 sticky top-24">
                {activeProcess.map((step, idx) => {
                  const isActive = activePhase === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePhase(idx)}
                      className={`text-left border-4 border-[var(--text-primary)] px-6 py-4 font-black uppercase text-xl flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-[var(--accent-red)] text-white translate-x-4 shadow-[-8px_8px_0_0_var(--text-primary)]"
                          : "bg-[var(--bg-surface)] hover:bg-[var(--text-primary)] hover:text-black"
                      }`}
                    >
                      <span className="truncate pr-4">{step.title}</span>
                      <span className="text-3xl opacity-50 block shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                    </button>
                  );
                })}
              </div>

              {/* Massive Content Detail Block */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhase}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-8 border-[var(--text-primary)] bg-[var(--bg-card)] shadow-[16px_16px_0_0_var(--text-primary)] overflow-hidden"
                  >
                    {activeProcess[activePhase].image && (
                      <div className="h-64 md:h-[400px] border-b-8 border-[var(--text-primary)] flex items-center justify-center p-8 bg-[var(--bg-surface)] overflow-hidden relative group">
                        <div className="absolute inset-0 bg-[var(--accent-red)] mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                        {activeProcess[activePhase].image.startsWith("airy:") ? (
                          <div className="relative z-0 h-full w-full flex items-center justify-center scale-150 grayscale">
                            <AiryDiagram type={activeProcess[activePhase].image.split(":")[1]} />
                          </div>
                        ) : (
                          <ZoomableImage
                            src={activeProcess[activePhase].image}
                            className="h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        )}
                      </div>
                    )}
                    <div className="p-8 md:p-12 h-full flex flex-col justify-center bg-[var(--bg-surface)]">
                      <div className="font-mono text-4xl font-black text-[var(--accent-red)] mb-4 border-b-4 border-[var(--accent-red)] pb-2 inline-block">
                        PHASE_0{activePhase + 1}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black uppercase leading-none mb-8 italic text-[var(--text-primary)]">
                        {activeProcess[activePhase].title}
                      </h3>
                      <p className="text-xl md:text-2xl font-bold leading-snug">
                        {activeProcess[activePhase].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>
        )}

        {/* Interaction / Demo */}
        {(project.prototypeLink || InteractionComponent) && (
          <div className="mb-32 border-4 border-[var(--text-primary)] p-8 md:p-16 bg-[var(--accent-red)] text-white">
            <h3 className="text-4xl font-black uppercase mb-12 flex items-center gap-4">
              <Square /> {t("project_layouts.widget_demo")}
            </h3>
            <div className="bg-[var(--bg-surface)] border-4 border-[var(--text-primary)] text-[var(--text-primary)] p-8 shadow-[16px_16px_0px_0px_var(--text-primary)]">
              {project.prototypeLink ? (
                <div className="w-full h-[600px] bg-black">
                  <iframe
                    src={project.prototypeLink}
                    title={`${activeTitle} Preview`}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              ) : (
                <div className="max-w-md">
                  <InteractionComponent />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer Stats Only */}
        {activeMetrics && (
          <div className="grid lg:grid-cols-4 gap-8 border-t-8 border-[var(--text-primary)] pt-16">
            <div className="lg:col-span-4 block">
              <h4 className="font-mono text-3xl uppercase font-black bg-[var(--accent-red)] text-white px-4 py-2 inline-block">
                {t("project_layouts.data_output") || "SYSTEM METRICS"}
              </h4>
            </div>
            {activeMetrics.map((m, i) => (
              <div
                key={i}
                className="border-4 border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-void)] p-8 shadow-[8px_8px_0_0_var(--accent-red)]"
              >
                <div className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                  {m.value}
                </div>
                <div className="font-mono text-sm uppercase font-bold text-[var(--bg-surface)]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default BrutalistDetail;
