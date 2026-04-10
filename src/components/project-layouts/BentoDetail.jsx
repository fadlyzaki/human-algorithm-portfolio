import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Calendar, Hash, Music, Layout, ArrowUpRight, CheckCircle2 } from "lucide-react";
import AiryDiagram from "../AiryDiagram";
import ZoomableImage from "../ZoomableImage";

const BentoDetail = ({
  project,
  activeChallenge,
  activeProcess,
  activeMetrics,
  activeLearnings,
  InteractionComponent,
  activeTitle,
  activeTldr,
  activeSnapshot,
  t,
}) => {
  // Aesthetic: Bento Grid, Magazine Editorial, Pastel Gradients, Rounded Corners, Sticker Tags
  const [activeTab, setActiveTab] = useState("challenge");
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="text-[var(--text-primary)] font-sans min-h-[100dvh] selection:bg-pink-300/50 pb-32">
      <main className="max-w-6xl mx-auto px-4 md:px-8 pt-24">
        {/* 1. HERO BENTO SECTION */}
        <header className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Main Title Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 rounded-[2rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Decorative Sticker */}
            <div className="absolute top-8 right-8 rotate-12 bg-white dark:bg-[var(--bg-surface)] text-black dark:text-white px-4 py-2 rounded-full shadow-lg font-mono text-xs font-bold uppercase border border-[var(--border-color)] flex items-center gap-2">
              <Calendar size={14} /> {t("project_layouts.wrapped")}
            </div>

            <h1 className="text-6xl md:text-8xl font-serif italic mb-6 leading-[1.1] text-[var(--text-primary)] relative z-10">
              {activeTitle}
            </h1>
            <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] max-w-lg leading-relaxed relative z-10">
              {activeTldr}
            </p>
          </motion.div>

          {/* Stats/Action Block */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 bg-[var(--bg-card)] rounded-[2rem] p-8 border border-[var(--border-color)] shadow-sm flex flex-col justify-between">
              <div className="font-mono text-xs uppercase text-[var(--text-secondary)] mb-4">
                {activeSnapshot.tagline}
              </div>
              {project.stack.slice(0, 3).map((tech, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <div
                    className={`w - 3 h - 3 rounded - full ${i === 0 ? "bg-pink-400" : i === 1 ? "bg-orange-400" : "bg-yellow-400"} `}
                  ></div>
                  <span className="font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
            {project.links.demo && project.links.demo !== "#" && (
              <a
                href={project.links.demo}
                className="h-32 bg-[var(--text-primary)] text-[var(--bg-void)] rounded-[2rem] p-8 hover:scale-[1.02] transition-transform flex items-center justify-between group"
              >
                <span className="text-xl font-bold font-serif italic">
                  {t("project_layouts.open_generator")}
                </span>
                <div className="p-3 bg-[var(--bg-void)] opacity-20 rounded-full group-hover:rotate-45 transition-transform">
                  <ArrowUpRight />
                </div>
              </a>
            )}
          </div>
        </header>

        {/* THE NARRATIVE BENTO BLOCKS (Tabs) */}
        <section className="mb-24">
           {/* Pill Tabs */}
           <div className="flex gap-4 mb-8 overflow-x-auto hide-scrollbar pb-2">
             {[
               { id: "challenge", label: t("project_layouts.the_problem") || "The Narrative" },
               { id: "insights", label: "Core Insights" },
               { id: "learnings", label: t("project_layouts.lesson_learned") || "Post Mortem" },
             ].map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={`px-8 py-4 rounded-full font-serif italic text-xl transition-all whitespace-nowrap ${
                   activeTab === tab.id
                     ? "bg-[var(--text-primary)] text-[var(--bg-void)] shadow-lg"
                     : "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:shadow-md"
                 }`}
               >
                 {tab.label}
               </button>
             ))}
           </div>
           
           <div className="bg-[var(--bg-card)] rounded-[3rem] border border-[var(--border-color)] p-8 md:p-16 min-h-[350px] flex items-center justify-center shadow-sm">
             <AnimatePresence mode="wait">
                {activeTab === "challenge" && (
                  <motion.div
                    key="challenge"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full"
                  >
                    <p className="text-2xl md:text-4xl font-light leading-snug text-[var(--text-primary)] text-center max-w-4xl mx-auto italic font-serif">
                      "{activeChallenge}"
                    </p>
                  </motion.div>
                )}

                {activeTab === "insights" && activeInsights && (
                  <motion.div
                    key="insights"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                     {activeInsights.map((insight, idx) => (
                        <div key={idx} className="bg-[var(--bg-surface)] p-8 rounded-[2rem] border border-[var(--border-color)]">
                           <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-500 flex items-center justify-center mb-6">
                              <CheckCircle2 size={24} />
                           </div>
                           <h3 className="text-2xl font-bold mb-4 font-serif italic">{insight.title}</h3>
                           <p className="text-[var(--text-secondary)] leading-relaxed">{insight.desc}</p>
                        </div>
                     ))}
                  </motion.div>
                )}

                {activeTab === "learnings" && activeLearnings && (
                  <motion.div
                    key="learnings"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full bg-[var(--text-primary)] text-[var(--bg-void)] rounded-[2rem] p-12 md:p-16 flex flex-col justify-center relative overflow-hidden"
                  >
                    <Music className="absolute -bottom-8 -right-8 w-48 h-48 opacity-10" />
                    <div className="font-mono text-xs uppercase tracking-widest opacity-50 mb-8 border border-[var(--bg-void)] opacity-20 inline-block px-3 py-1 rounded-full w-max">
                      {t("project_layouts.lesson_learned")}
                    </div>
                    <p className="text-2xl md:text-3xl font-serif italic leading-relaxed relative z-10 flex-1 flex items-center">
                      "{activeLearnings}"
                    </p>
                  </motion.div>
                )}
             </AnimatePresence>
           </div>
        </section>

        {/* THE PROCESS (Interactive Bento Slider) */}
        {activeProcess && (
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-10 pl-4">
              <Layout className="text-pink-400" />
              <h2 className="text-2xl font-serif italic">{t("project_layouts.methodology") || "Execution Canvas"}</h2>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-8 items-stretch h-full">
               {/* Left Axis: Process Nav Bento */}
               <div className="lg:col-span-4 flex flex-col gap-4">
                 {activeProcess.map((step, idx) => {
                   const isActive = activePhase === idx;
                   return (
                     <button
                       key={idx}
                       onClick={() => setActivePhase(idx)}
                       className={`flex-1 min-h-[90px] text-left px-8 py-6 rounded-[2rem] border transition-all flex items-center justify-between group ${
                         isActive
                           ? "bg-gradient-to-r from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 border-transparent shadow-sm"
                           : "bg-[var(--bg-card)] border-[var(--border-color)] hover:shadow-md"
                       }`}
                     >
                       <span className={`font-serif italic text-xl ${isActive ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-secondary)]'}`}>
                         {step.title}
                       </span>
                       <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isActive ? 'bg-white/50 dark:bg-black/50 text-[var(--text-primary)]' : 'bg-[var(--bg-surface)] text-[var(--text-secondary)]'}`}>
                         {idx + 1}
                       </span>
                     </button>
                   );
                 })}
               </div>

               {/* Right Axis: Featured Active Bento Container */}
               <div className="lg:col-span-8">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={activePhase}
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0 }}
                     className="h-full min-h-[500px] bg-[var(--bg-card)] rounded-[3rem] border border-[var(--border-color)] overflow-hidden flex flex-col"
                   >
                      {activeProcess[activePhase].image && (
                        <div className="h-64 md:h-[350px] bg-[var(--bg-surface)] flex items-center justify-center p-8 border-b border-[var(--border-color)] relative">
                           {activeProcess[activePhase].image.startsWith("airy:") ? (
                             <AiryDiagram type={activeProcess[activePhase].image.split(":")[1]} />
                           ) : (
                             <ZoomableImage
                               src={activeProcess[activePhase].image}
                               className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen"
                             />
                           )}
                           {/* Little Bento Tag */}
                           <div className="absolute top-6 left-6 bg-[var(--text-primary)] text-[var(--bg-void)] px-4 py-2 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider">
                              Phase_{activePhase + 1}
                           </div>
                        </div>
                      )}
                      
                      <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
                         <h3 className="text-3xl md:text-4xl font-serif italic font-bold mb-6 text-[var(--text-primary)]">
                           {activeProcess[activePhase].title}
                         </h3>
                         <p className="text-xl leading-relaxed text-[var(--text-secondary)]">
                           {activeProcess[activePhase].desc}
                         </p>
                      </div>
                   </motion.div>
                 </AnimatePresence>
               </div>
            </div>
          </section>
        )}

        {/* INTERACTION / PROTOTYPE */}
        {(project.prototypeLink || InteractionComponent) && (
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-10 pl-4">
              <Layout className="text-pink-400" />
              <h2 className="text-2xl font-serif italic">{t("project_layouts.live_preview")}</h2>
            </div>
            <div className="bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-color)] overflow-hidden p-8 hover:shadow-xl transition-shadow duration-500">
              {project.prototypeLink ? (
                <div className="w-full h-[600px] rounded-[1rem] overflow-hidden border border-[var(--border-color)]">
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
          </section>
        )}

        {/* METRICS */}
        {activeMetrics && (
          <section className="pb-12 h-full min-h-[300px]">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-full min-h-[300px]">
                {activeMetrics.map((m, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-[2rem] p-8 flex flex-col justify-center h-full w-full border border-purple-500/10 shadow-sm hover:-translate-y-2 transition-transform"
                  >
                    <Hash className="text-purple-400 mb-4 opacity-50" />
                    <div className="text-4xl lg:text-5xl font-bold mb-2 text-[var(--text-primary)]">
                      {m.value}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)] uppercase tracking-widest font-mono">
                      {m.label}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default BentoDetail;
