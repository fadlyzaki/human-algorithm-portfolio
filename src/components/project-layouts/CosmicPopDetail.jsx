import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Activity, Shield, Star, Rocket, Target, Play } from "lucide-react";
import AiryDiagram from "../AiryDiagram";
import ZoomableImage from "../ZoomableImage";

const CosmicPopDetail = ({
  project,
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
  // Aesthetic: Cosmic Pop, Deep Blues/Purples, Glassmorphism, Floating Particles, Playful Typography
  const [activeTab, setActiveTab] = useState("challenge");
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="text-[var(--text-primary)] font-sans min-h-[100dvh] selection:bg-[var(--accent-sky)]/30 overflow-hidden relative">
      {/* Ambient Nebula Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--accent-sky)]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[var(--accent-purple)]/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 sparkle-bg opacity-30"></div>
      </div>

      <main className="relative z-10 pt-24 pb-32 max-w-6xl mx-auto px-6">
        {/* 1. HERO BANNER */}
        <header className="py-20 flex flex-col items-center text-center space-y-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 rounded-[2rem] bg-gradient-to-tr from-[var(--accent-sky)]/20 to-[var(--accent-purple)]/20 border border-[var(--border-color)] flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(0,194,255,0.2)]"
          >
            <Activity size={40} className="text-[var(--accent-sky)]" />
          </motion.div>

          <nav className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-full backdrop-blur-md">
            <Star size={14} className="text-[var(--accent-sky)]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-sky)]">
              {activeSnapshot.tagline}
            </span>
          </nav>

          <h1 className="text-6xl md:text-8xl font-black italic tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[var(--text-primary)] via-[var(--text-secondary)] to-[var(--accent-sky)] max-w-4xl leading-[1.1]">
            {activeTitle}
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium max-w-2xl leading-relaxed">
            {activeTldr}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {project.links.demo && project.links.demo !== "#" && (
              <a
                href={project.links.demo}
                className="flex items-center gap-2 bg-[var(--accent-sky)] text-[var(--bg-void)] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-all"
              >
                <Play size={16} fill="currentColor" /> {t("project_layouts.play_demo")}
              </a>
            )}
            <div className="flex bg-[var(--bg-surface)] backdrop-blur-xl border border-[var(--border-color)] rounded-full p-1 h-14">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* 3. NARRATIVE TABS BLOCK */}
        <section className="mt-32 space-y-32">
          
          <div className="flex flex-col items-center">
            {/* Pill Tabs */}
            <div className="flex bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-color)] rounded-full p-2 gap-2 mb-12 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
              {[
                { id: "challenge", label: t("project_layouts.the_problem") || "The Challenge" },
                { id: "insights", label: "Insights" },
                { id: "learnings", label: "Learnings" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[var(--accent-sky)] to-[var(--accent-purple)] text-white shadow-lg"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="w-full">
              <AnimatePresence mode="wait">
                {activeTab === "challenge" && (
                  <motion.div
                    key="challenge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-surface)]/80 backdrop-blur-xl border border-blue-500/20 rounded-[3rem] p-12 md:p-16 relative overflow-hidden group shadow-[0_20px_60px_rgba(0,194,255,0.1)]"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-[var(--accent-sky)]/10 to-[var(--accent-purple)]/10 blur-xl group-hover:opacity-100 opacity-50 transition-opacity pointer-events-none" />
                    <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 relative z-10">
                      <Target size={32} className="text-red-400" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold leading-relaxed text-[var(--text-primary)] max-w-4xl relative z-10 italic font-serif">
                      "{activeChallenge}"
                    </h2>
                  </motion.div>
                )}

                {activeTab === "insights" && activeInsights && (
                  <motion.div
                    key="insights"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    {activeInsights.map((insight, idx) => (
                      <div
                        key={idx}
                        className="group p-10 rounded-[3rem] bg-[var(--bg-surface)] border border-blue-500/20 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 transition-all shadow-[0_10px_40px_rgba(139,92,246,0.05)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] hover:-translate-y-2"
                      >
                        <div className="mb-6 w-16 h-16 rounded-2xl bg-[var(--bg-card)] flex items-center justify-center text-[var(--accent-sky)] shadow-inner">
                          <Star size={28} />
                        </div>
                        <h3 className="text-2xl font-black mb-4 text-[var(--text-primary)]">
                          {insight.title}
                        </h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-lg">
                          {insight.desc}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "learnings" && activeLearnings && (
                  <motion.div
                    key="learnings"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gradient-to-r from-[var(--accent-purple)]/20 to-[var(--accent-sky)]/20 rounded-[3rem] p-12 md:p-16 border border-purple-500/30 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center gap-3 mb-6 text-[var(--accent-sky)]">
                        <Shield size={24} />
                        <span className="font-bold uppercase tracking-widest text-sm">
                          {t("project_layouts.lesson_learned")}
                        </span>
                      </div>
                      <p className="text-3xl lg:text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-white to-[var(--accent-sky)] leading-tight">
                        "{activeLearnings}"
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Process Loop (Cosmic) */}
          {activeProcess && (
            <div className="grid lg:grid-cols-12 gap-8 items-start relative">
              
              {/* Floating Orbit Bubbles Selector */}
              <div className="lg:col-span-4 flex flex-col gap-4 sticky top-32">
                {activeProcess.map((step, idx) => {
                  const isActive = activePhase === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePhase(idx)}
                      className={`text-left px-6 py-5 rounded-3xl border transition-all duration-300 flex items-center justify-between group ${
                        isActive
                          ? "bg-gradient-to-r from-[var(--accent-sky)]/20 to-[var(--accent-purple)]/20 border-[var(--accent-sky)]/50 shadow-[0_0_30px_rgba(0,194,255,0.2)]"
                          : "border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-purple-500/30 hover:bg-purple-500/5 text-[var(--text-secondary)]"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex justify-center items-center font-bold text-xs ${isActive ? 'bg-[var(--accent-sky)] text-white shadow-[0_0_15px_rgba(0,194,255,0.4)]' : 'bg-[var(--bg-card)]'}`}>
                          {idx + 1}
                        </div>
                        <span className={`font-bold ${isActive ? 'text-[var(--text-primary)]' : ''}`}>{step.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Cosmic Detail Window */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhase}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.3 }}
                    className="border border-[var(--border-color)] bg-[var(--bg-card)] rounded-[3rem] overflow-hidden shadow-2xl relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-sky)]/5 to-[var(--accent-purple)]/5 pointer-events-none" />
                    
                    {activeProcess[activePhase].image && (
                      <div className="h-64 md:h-[400px] border-b border-[var(--border-color)] flex items-center justify-center p-8 bg-black/40 relative">
                        {activeProcess[activePhase].image.startsWith("airy:") ? (
                          <div className="relative z-0 h-full w-full flex items-center justify-center mix-blend-screen opacity-80">
                            <AiryDiagram type={activeProcess[activePhase].image.split(":")[1]} />
                          </div>
                        ) : (
                          <ZoomableImage
                            src={activeProcess[activePhase].image}
                            className="h-full object-contain mix-blend-screen"
                          />
                        )}
                      </div>
                    )}
                    <div className="p-10 md:p-14 relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--accent-sky)] to-[var(--accent-purple)] text-white flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                          {activePhase + 1}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--accent-sky)] leading-none">
                          {activeProcess[activePhase].title}
                        </h3>
                      </div>
                      <p className="text-xl leading-relaxed text-[var(--text-secondary)] font-medium">
                        {activeProcess[activePhase].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Interaction / Demo */}
          {(project.prototypeLink || InteractionComponent) && (
            <div className="py-24 border-y border-[var(--border-color)] flex flex-col items-center justify-center w-full">
              <h3 className="text-2xl font-black italic text-center mb-12 text-[var(--accent-sky)] flex items-center gap-3">
                <Rocket /> {t("project_layouts.live_arena")}
              </h3>
              <div className="w-full rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,194,255,0.15)] ring-4 ring-[var(--bg-surface)] bg-black">
                {project.prototypeLink ? (
                  <div className="w-full h-[600px]">
                    <iframe
                      src={project.prototypeLink}
                      title={`${activeTitle} Preview`}
                      className="w-full h-full border-0"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                ) : (
                  <div className="max-w-sm mx-auto">
                    <InteractionComponent />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Metrics Footer */}
          {activeMetrics && (
            <div className="bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-card)] rounded-[3rem] p-12 md:p-16 border border-[var(--border-color)] text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
               <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-sky)] mb-12">
                 Mission Telemetry
               </h4>
               <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
                  {activeMetrics.map((m, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="text-5xl md:text-7xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-white to-[var(--accent-purple)] mb-4 drop-shadow-lg">
                        {m.value}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-void)]">
                        {m.label}
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default CosmicPopDetail;
