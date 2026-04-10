import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Cpu,
  Terminal,
  Layers,
  Box,
  ArrowUpRight,
  Code,
  ArrowLeft,
} from "lucide-react";
import AiryDiagram from "../AiryDiagram";
import ZoomableImage from "../ZoomableImage";
import { useRecruiterMode } from "../../context/RecruiterModeContext";

const SystemCoreDetail = ({
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
  // Aesthetic: Terminal Data, Scanning Lines, Dark Void, High Contrast Blue/Green Monospace
  const [activeTab, setActiveTab] = useState("challenge");
  const [activePhase, setActivePhase] = useState(0);

  // Fix purity warning by generating predictable pseudo-random tokens instead of Math.random
  const randomTokens = React.useMemo(() => {
    return Array.from({ length: 150 }).map((_, idx) => {
      return `0x${((idx * 1337) % 0xffffff).toString(16).padStart(6, "0")}`;
    });
  }, []);

  const { isRecruiterMode } = useRecruiterMode();

  return (
    <div className="text-[var(--text-primary)] font-sans min-h-[100dvh] selection:bg-blue-500/30">
      {/* Terminal Grid Background - Removed when not in Hero, or dynamically suppressed in recruiter mode */}
      {!isRecruiterMode && (
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      )}

      {/* Ambient Shadow */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-void)_120%)]"></div>

      <main className="relative z-10 pt-24 pb-32">
        {/* 1. HERO BANNER */}
        <header className="relative border-b border-[var(--border-color)] overflow-hidden min-h-[70vh] flex flex-col justify-center px-6 text-center">
          {/* Scanning Line */}
          {!isRecruiterMode && (
            <motion.div
              className="absolute left-0 right-0 h-px bg-blue-500/50 z-20 pointer-events-none"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          )}

          {/* Terminal Background Flow */}
          <div className={`absolute inset-0 font-mono text-[10px] sm:text-[12px] leading-none pointer-events-none select-none overflow-hidden p-4 text-justify custom-scrollbar ${isRecruiterMode ? "opacity-0" : "opacity-5"}`}>
            {randomTokens.map((token, i) => (
              <span key={i} className="mr-2 text-blue-400">
                {`INIT_SYS >> PORTFOLIO_V3.5 >> AGENT_${i} >> DATA_STREAM=${token} `}
              </span>
            ))}
          </div>

          <div className="max-w-[1072px] mx-auto relative z-30 space-y-8 backdrop-blur-sm p-8 border border-[var(--border-color)] bg-[var(--bg-surface)] opacity-95">
            <div className={`inline-flex items-center gap-3 px-4 py-2 border bg-[var(--bg-void)] ${isRecruiterMode ? "border-[var(--border-color)]" : "border-blue-500/30"}`}>
              <Cpu size={14} className={`text-blue-400 ${!isRecruiterMode && "animate-pulse"}`} />
              <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400 text-shadow-glow">
                {activeSnapshot.tagline} // {t("project_layouts.system_protocol")}
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif italic text-[var(--text-primary)] drop-shadow-[0_0_15px_rgba(var(--bg-surface-rgb), 0.3)]">
              {activeTitle}
            </h1>

            <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed border-l-2 border-blue-500/50 pl-6 text-left">
              {activeTldr}
            </p>
          </div>
        </header>

        {/* 2. SPECS TERMINAL */}
        <section className="border-b border-[var(--border-color)] bg-[var(--bg-surface)] relative z-20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[10px] md:text-xs">
            <div className="flex flex-wrap items-center gap-4">
              {project.links.demo && project.links.demo !== "#" && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 transition-colors uppercase tracking-widest"
                >
                  {t("project_layouts.execute_demo")} <ArrowUpRight size={14} />
                </a>
              )}
              {project.links.repo && project.links.repo !== "#" && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-blue-500/30 bg-[var(--bg-void)] px-4 py-2 text-blue-400 hover:bg-blue-500/10 transition-colors uppercase tracking-widest"
                >
                  <Code size={14} /> {t("project_layouts.source_code")}
                </a>
              )}
              <Link
                to="/design-system"
                className="flex items-center gap-2 border border-emerald-500/30 bg-[var(--bg-void)] px-4 py-2 text-emerald-400 hover:bg-emerald-500/10 transition-colors uppercase tracking-widest"
              >
                <Cpu size={14} /> System UI Data
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-[var(--text-secondary)]">
              <div className="flex flex-col">
                <span className="opacity-50 mb-1">{t("project_layouts.role_assignment")}</span>
                <span className="text-[var(--text-primary)]">
                  {activeContext.role}
                </span>
              </div>
              <div className="hidden md:block w-px h-6 bg-[var(--border-color)]"></div>
              <div className="flex flex-col">
                <span className="opacity-50 mb-1">{t("project_layouts.temp_marker")}</span>
                <span className="text-[var(--text-primary)]">
                  {activeContext.timeline}
                </span>
              </div>
              <div className="hidden md:block w-px h-6 bg-[var(--border-color)]"></div>
              <div className="flex flex-col">
                <span className="opacity-50 mb-1">{t("project_layouts.loaded_modules")}</span>
                <span className="text-[var(--text-primary)]">
                  {project.stack.slice(0, 3).join(" / ")}
                </span>
              </div>
              {project.humanImpact && (
                <>
                  <div className="hidden md:block w-px h-6 bg-[var(--border-color)]"></div>
                  <div className="flex flex-col">
                    <span className="opacity-50 mb-1 text-purple-400">Human_Impact</span>
                    <span className="text-[var(--text-primary)] max-w-xs truncate" title={typeof project.humanImpact === 'object' ? project.humanImpact.en : project.humanImpact}>
                      {typeof project.humanImpact === 'object' ? project.humanImpact.en : project.humanImpact}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* 3. NARRATIVE TABS BLOCK */}
        <section className="max-w-4xl mx-auto px-6 py-24 space-y-32">
          
          <div className="border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl relative overflow-hidden">
            {/* Tab Navigation (CLI Headers) */}
            <div className="flex overflow-x-auto hide-scrollbar bg-[var(--bg-surface)] border-b border-[var(--border-color)]">
              {[
                { id: "challenge", label: "INIT_REQ.sys" },
                { id: "insights", label: "DATA_EXTRACTION.log" },
                { id: "learnings", label: "DEBUG_POSTMORTEM.txt" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-mono text-xs tracking-widest transition-colors flex items-center gap-3 shrink-0 ${
                    activeTab === tab.id
                      ? "bg-[var(--bg-card)] text-blue-400 border-t-2 border-t-blue-500 shadow-[inset_0_20px_20px_-20px_rgba(59,130,246,0.1)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-void)] border-t-2 border-t-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-8 md:p-12 min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === "challenge" && (
                  <motion.div
                    key="challenge"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
                    <div className="flex items-center gap-4">
                      <Terminal size={16} className="text-red-400" />
                      <span className="font-mono text-xs uppercase tracking-widest text-red-400">
                        {t("project_layouts.the_challenge") || "KERNEL_PANIC"}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-sans font-medium text-[var(--text-primary)] leading-tight">
                      {activeChallenge}
                    </h2>
                  </motion.div>
                )}

                {activeTab === "insights" && activeInsights && (
                  <motion.div
                    key="insights"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    {activeInsights.map((insight, idx) => (
                      <div
                        key={idx}
                        className="bg-[var(--bg-void)] border border-[var(--border-color)] p-6 relative hover:border-purple-500/50 transition-colors"
                      >
                        <div className="absolute top-2 right-2 text-purple-500/20 font-mono text-2xl font-bold">
                          0{idx + 1}
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-[var(--text-primary)] font-mono">
                          &gt; {insight.title}
                        </h3>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10 font-mono">
                          {insight.desc}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "learnings" && activeLearnings && (
                  <motion.div
                    key="learnings"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="bg-[var(--text-primary)] text-[var(--bg-void)] p-8 font-serif italic text-xl leading-relaxed relative">
                      <div className="absolute -top-3 -left-3 bg-blue-500 text-[var(--bg-void)] font-mono text-[10px] px-2 py-1 uppercase font-bold">
                        Lesson_Learned
                      </div>
                      "{activeLearnings}"
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Process List */}
          {activeProcess && (
            <div className="space-y-12 bg-[var(--bg-surface)]/80 backdrop-blur-xl border border-[var(--border-color)] shadow-xl relative mt-24">
              <div className="p-8 border-b border-[var(--border-color)] flex items-center gap-4">
                <Layers size={16} className="text-blue-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
                  {t("project_layouts.execution_flow")}
                </span>
              </div>
              
              <div className="grid lg:grid-cols-12 items-start relative pb-8">
                 {/* Left Side: Sequence Nav */}
                 <div className="lg:col-span-4 border-r border-[var(--border-color)] flex flex-col sticky top-24">
                   {activeProcess.map((step, idx) => {
                     const isActive = activePhase === idx;
                     return (
                       <button
                         key={idx}
                         onClick={() => setActivePhase(idx)}
                         className={`text-left px-8 py-5 border-b border-[var(--border-color)] font-mono text-xs tracking-widest flex items-center justify-between group transition-colors ${
                           isActive 
                             ? "bg-blue-500/10 text-blue-400 shadow-[inset_3px_0_0_#3b82f6]" 
                             : "text-[var(--text-secondary)] hover:bg-[var(--bg-void)] hover:text-[var(--text-primary)]"
                         }`}
                       >
                         <span className="truncate">{step.title}</span>
                         <span className="opacity-50">_0{idx+1}</span>
                       </button>
                     );
                   })}
                 </div>

                 {/* Right Side: Process Data Component */}
                 <div className="lg:col-span-8 p-8 md:p-12 min-h-[500px]">
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={activePhase}
                       initial={{ opacity: 0, scale: 0.98 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0 }}
                       className="space-y-6"
                     >
                        <div className="font-mono text-[10px] text-[var(--text-secondary)] mb-4">
                          ROOT/EXE &gt; ./run_step_0{activePhase + 1}.sh
                        </div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] border-l-2 border-blue-500 pl-4">
                          {activeProcess[activePhase].title}
                        </h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                          {activeProcess[activePhase].desc}
                        </p>
                        
                        {activeProcess[activePhase].image && (
                          <div className="mt-8 border border-[var(--border-color)] bg-[var(--bg-void)] p-1 group relative">
                            <div className="absolute inset-0 bg-blue-500/30 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity"></div>
                            {activeProcess[activePhase].image.startsWith("airy:") ? (
                              <div className="w-full h-[300px] bg-black/50">
                                <AiryDiagram type={activeProcess[activePhase].image.split(":")[1]} />
                              </div>
                            ) : (
                              <ZoomableImage
                                src={activeProcess[activePhase].image}
                                alt={activeProcess[activePhase].title}
                                className="w-full opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 relative z-10"
                              />
                            )}
                          </div>
                        )}
                     </motion.div>
                   </AnimatePresence>
                 </div>
              </div>
            </div>
          )}

          {/* Diagnostics / Interaction */}
          {(project.prototypeLink || InteractionComponent) && (
            <div className="bg-blue-900/10 border border-blue-500/20 p-8 rounded-sm animate-pulse-slow">
              <div className="flex items-center justify-between mb-8 border-b border-blue-500/20 pb-4">
                <h3 className="font-mono text-xs text-blue-400 uppercase tracking-widest">
                  Interactive_Console
                </h3>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                </div>
              </div>
              {project.prototypeLink ? (
                <div className="w-full h-[600px] border border-blue-500/30 bg-[var(--bg-void)]">
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
            </div>
          )}

          {/* Metrics Footer */}
          {activeMetrics && (
            <div className="border-t border-[var(--border-color)] pt-16">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-8">
                Telemetry_Output
              </h4>
              <div className="space-y-6">
                {activeMetrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row md:justify-between items-start md:items-end border-b border-[var(--border-color)] pb-2 gap-2"
                  >
                    <span className="text-sm text-[var(--text-secondary)] uppercase tracking-wide font-mono">
                      {m.label}
                    </span>
                    <span className="text-2xl font-bold text-[var(--text-primary)] font-mono text-blue-400">
                      {m.value}
                    </span>
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

export default SystemCoreDetail;
