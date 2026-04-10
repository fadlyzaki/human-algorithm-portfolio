import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Terminal,
  FileCode2,
  ListTree,
  Activity,
  Box,
  Cpu,
  ArrowRight,
  ExternalLink,
  Presentation,
} from "lucide-react";
import AiryDiagram from "../AiryDiagram";

const AgenticDetail = ({
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
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("challenge");
  const [activePhase, setActivePhase] = useState(0);
  const accentColor = "var(--accent-purple, #8b5cf6)";

  return (
    <div
      ref={containerRef}
      className="text-[var(--text-primary)] font-sans min-h-[100dvh] pt-24 pb-32 px-4 md:px-8 selection:bg-[var(--accent-purple)] selection:text-white"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* IDE SHELL CONTAINER */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-void)] overflow-hidden shadow-2xl flex flex-col min-h-[85vh]">
          
          {/* 1. IDE TOP BAR */}
          <div className="h-12 bg-[var(--bg-surface)] border-b border-[var(--border-color)] flex items-center px-4 justify-between shrink-0">
            <div className="flex items-center gap-2 w-1/3">
              <div className="w-3 h-3 rounded-full bg-red-400 opacity-80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 opacity-80"></div>
            </div>
            
            <div className="w-1/3 text-center opacity-60">
              <div className="inline-flex items-center justify-center gap-2 px-6 py-1 bg-[var(--bg-card)] rounded-md border border-[var(--border-color)] text-[10px] font-mono tracking-widest text-[var(--accent-purple)] truncate">
                <Activity size={12} />
                HUMAN_ALGORITHM_OS // {project.id}_workspace
              </div>
            </div>

            <div className="w-1/3 flex justify-end">
               {/* Decorative dots */}
               <div className="flex gap-1 opacity-20">
                 <div className="w-1 h-1 rounded-full bg-current"></div>
                 <div className="w-1 h-1 rounded-full bg-current"></div>
                 <div className="w-1 h-1 rounded-full bg-current"></div>
               </div>
            </div>
          </div>

          {/* 2. IDE WORKSPACE SPLIT */}
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
            
            {/* -- LEFT PANE: EXPLORER / CONTEXT -- */}
            <div className="w-full lg:w-64 shrink-0 border-r border-[var(--border-color)] bg-[var(--bg-surface)] overflow-y-auto">
              {/* Explorer Header */}
              <div className="p-4 border-b border-[var(--border-color)] text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2">
                <ListTree size={12} /> EXPLORER
              </div>
              
              <div className="p-4 font-mono text-xs">
                 <div className="mb-6">
                   <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold mb-3 cursor-pointer">
                     <span className="opacity-50">▾</span> metadata.json
                   </div>
                   <div className="pl-4 space-y-3 border-l border-[var(--border-color)] ml-1">
                     <div>
                       <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">Type</div>
                       <div className="text-[var(--accent-purple)]">{project.type}</div>
                     </div>
                     <div>
                       <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">Role</div>
                       <div className="text-[var(--accent-purple)]">{activeContext.role}</div>
                     </div>
                     <div>
                       <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">Timeline</div>
                       <div className="text-[var(--accent-purple)]">{activeContext.timeline}</div>
                     </div>
                     {activeContext.event && (
                       <div>
                         <div className="text-[var(--text-secondary)] opacity-60 uppercase text-[9px] tracking-wider mb-1">Hackathon_Event</div>
                         <a 
                           href={activeContext.event_url} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-[var(--accent-purple)] hover:text-white transition-colors underline decoration-[var(--border-color)] underline-offset-4"
                         >
                           {activeContext.event}
                         </a>
                       </div>
                     )}
                   </div>
                 </div>

                 <div className="mb-6">
                   <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold mb-3 cursor-pointer">
                     <span className="opacity-50">▾</span> dependencies.lock
                   </div>
                   <div className="pl-4 border-l border-[var(--border-color)] ml-1 flex flex-col gap-2">
                     {project.stack.map(tech => (
                        <div key={tech} className="text-[#ce9178] before:content-['>'] before:opacity-30 before:mr-2">
                           {tech}
                        </div>
                     ))}
                   </div>
                 </div>

                 {activeMetrics && activeMetrics.length > 0 && (
                   <div className="mb-6">
                     <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold mb-3 cursor-pointer">
                       <span className="opacity-50">▾</span> signals.log
                     </div>
                     <div className="pl-4 border-l border-[var(--border-color)] ml-1 space-y-4">
                       {activeMetrics.map((m, i) => (
                         <div key={i}>
                           <div className="text-xl font-bold tracking-tight text-[var(--text-primary)]">{m.value}</div>
                           <div className="text-[8px] uppercase tracking-wider text-[var(--text-secondary)] mt-1">{m.label}</div>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
              </div>
            </div>

            {/* -- CENTER PANE: EDITOR (NARRATIVE) -- */}
            <div className="flex-1 flex flex-col bg-[var(--bg-card)] overflow-y-auto relative">
              {/* Editor Tabs bar */}
              <div className="flex bg-[var(--bg-surface)] border-b border-[var(--border-color)] overflow-x-auto hide-scrollbar sticky top-0 z-20">
                <div className="px-6 py-2.5 bg-[var(--bg-card)] border-t-2 border-[var(--accent-purple)] border-r border-[var(--border-color)] text-xs font-mono flex items-center gap-2 text-[var(--text-primary)] shrink-0">
                  <FileCode2 size={14} className="text-[var(--accent-purple)]" /> Readme.md
                </div>
                <div className="px-6 py-2.5 bg-transparent border-t-2 border-transparent border-r border-[var(--border-color)] text-xs font-mono flex items-center gap-2 text-[var(--text-secondary)] opacity-60 shrink-0">
                  <Terminal size={14} /> console.sh
                </div>
              </div>

              {/* Editor Content Area (Human readable!) */}
              <div className="p-8 lg:p-12 max-w-4xl pt-16">
                 {/* Hero Title injected as a markdown H1 */}
                 <div className="mb-16">
                    <div className="text-[var(--accent-purple)] font-mono text-sm mb-4"># {project.id}</div>
                    <h1 className="text-4xl lg:text-5xl font-serif italic font-bold mb-6 text-[var(--text-primary)] leading-[1.1]">
                      {activeTitle}
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] leading-relaxed">
                      {activeTldr}
                    </p>
                 </div>

                 {/* Interactive Tabs Terminal */}
                 <div className="mb-16">
                    <div className="flex border-b border-[var(--border-color)] mb-8 overflow-x-auto hide-scrollbar">
                      {[
                        { id: "challenge",  label: "README.md" },
                        { id: "insights",   label: "architecture-insights.json" },
                        { id: "learnings",  label: "post-mortem.log" },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors border-b-2 -mb-px shrink-0 ${
                            activeTab === tab.id
                              ? "border-[var(--accent-purple)] text-[var(--accent-purple)]"
                              : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="prose prose-lg max-w-none text-[var(--text-primary)]"
                        >
                          <p className="text-xl leading-relaxed font-light border-l-2 border-[var(--accent-purple)] pl-6">
                            {activeChallenge}
                          </p>
                        </motion.div>
                      )}

                      {activeTab === "insights" && activeInsights && (
                        <motion.div
                          key="insights"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                          {activeInsights.map((insight, i) => (
                            <div key={i} className="p-6 border border-[var(--border-color)] bg-[var(--bg-void)] rounded-lg font-mono relative group">
                               <div className="absolute top-0 right-0 px-2 py-0.5 bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-[10px] rounded-bl-lg">
                                  insight_{i+1}.sys
                               </div>
                               <h3 className="font-bold text-sm mb-3 mt-2 text-[var(--text-primary)]">&gt; {insight.title}</h3>
                               <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{insight.desc}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {activeTab === "learnings" && activeLearnings && (
                        <motion.div
                          key="learnings"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="p-6 bg-[var(--bg-void)] border border-[var(--border-color)] font-mono text-sm leading-relaxed text-[var(--text-secondary)]"
                        >
                          <div className="text-[var(--accent-purple)] mb-2">root@system:~# cat post_mortem.log</div>
                          {activeLearnings}
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>

                 {/* Interactive Execution Flow (The Process) */}
                 {activeProcess && (
                   <div className="mb-20">
                      <div className="text-[var(--accent-purple)] font-mono text-sm mb-8 flex items-center gap-2">
                         <span>## execution_loop_stdout</span>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
                        {/* Phase Selector (Left Axis) */}
                        <div className="lg:col-span-4 space-y-2 sticky top-20">
                          {activeProcess.map((step, idx) => {
                            const isActive = activePhase === idx;
                            return (
                              <button
                                key={idx}
                                onClick={() => setActivePhase(idx)}
                                className={`w-full text-left px-4 py-3 rounded border transition-all duration-200 flex items-center gap-3 font-mono text-xs group ${
                                  isActive
                                    ? "border-[var(--accent-purple)] bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] shadow-[inset_2px_0_0_var(--accent-purple)]"
                                    : "border-[var(--border-color)] bg-[var(--bg-void)] hover:border-[var(--accent-purple)]/30 text-[var(--text-secondary)]"
                                }`}
                              >
                                <span>{String(idx + 1).padStart(2, "0")}</span>
                                <span className="truncate flex-1">{step.title}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Phase Detail Viewer (Right Axis) */}
                        <div className="lg:col-span-8">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activePhase}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.2 }}
                              className="border border-[var(--border-color)] bg-[var(--bg-void)] p-8 relative overflow-hidden"
                            >
                               <div className="font-mono text-[9px] uppercase text-[var(--text-secondary)] mb-6 border-b border-[var(--border-color)] pb-2 flex justify-between">
                                  <span>Step_{String(activePhase + 1).padStart(2, "0")}.exe</span>
                                  <span className="text-[var(--accent-purple)]">STATUS: RUNNING</span>
                               </div>
                               <h3 className="text-xl font-bold mb-4 font-mono text-[var(--text-primary)]">
                                  {activeProcess[activePhase].title}
                               </h3>
                               <p className="text-sm font-mono leading-relaxed text-[var(--text-secondary)] mb-6">
                                  {activeProcess[activePhase].desc}
                               </p>
                               {activeProcess[activePhase].image && (
                                  <div className="border border-[var(--border-color)] bg-[#0d0d0d] p-4 flex justify-center items-center h-48 relative overflow-hidden group">
                                     <div className="absolute inset-0 bg-[var(--accent-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:block hidden"></div>
                                     <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(10,1fr)] opacity-5 md:block hidden">
                                       {Array.from({length: 200}).map((_, i) => <div key={i} className="border-r border-b border-white mix-blend-overlay"></div>)}
                                     </div>
                                     {activeProcess[activePhase].image.startsWith("airy:") ? (
                                       <div className="relative z-10 w-full h-full flex items-center justify-center">
                                          <AiryDiagram type={activeProcess[activePhase].image.split(":")[1]} />
                                       </div>
                                     ) : (
                                       <img loading="lazy" decoding="async" src={activeProcess[activePhase].image} alt="diagram" className="max-h-full rounded z-10 relative" />
                                     )}
                                  </div>
                               )}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                   </div>
                 )}
              </div>
            </div>

            {/* -- RIGHT PANE: PREVIEW / RUNTIME TERMINAL -- */}
            {InteractionComponent && (
              <div className="w-full lg:w-96 shrink-0 border-l border-[var(--border-color)] flex flex-col bg-[var(--bg-void)]">
                {/* Terminal Header */}
                <div className="p-4 border-b border-[var(--border-color)] text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 shrink-0">
                  <Terminal size={12} /> RUNTIME_ENVIRONMENT
                </div>

                <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
                   <div className="sticky top-0 mb-6">
                      <div className="text-[10px] font-mono text-emerald-500 mb-2">
                         $ pnpm run start:agent --watch
                      </div>
                      <div className="text-[10px] font-mono text-[var(--text-secondary)] opacity-60">
                         Starting live interaction environment...
                      </div>
                   </div>

                   {/* The Actual Component mounted right inside the terminal pane! */}
                   <div className="w-full h-[500px] border border-[var(--accent-purple)]/20 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.05)] bg-[var(--bg-card)]">
                      <InteractionComponent />
                   </div>
                </div>
              </div>
            )}
            
          </div>
          
          {/* 3. IDE BOTTOM STATUS BAR */}
          <div className="h-6 bg-[#007acc] dark:bg-[var(--accent-purple)] text-white flex items-center justify-between px-4 text-[9px] font-mono uppercase tracking-widest shrink-0">
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><Cpu size={10}/> STATUS: 200 OK</span>
              <span className="hidden sm:inline">UTF-8</span>
              <span className="hidden sm:inline">React/ADK</span>
            </div>
            <div className="flex gap-4">
               {project.links?.pitch_deck && (
                 <a href={project.links.pitch_deck} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 flex items-center gap-1.5 px-3 py-0.5 bg-yellow-500/10 text-yellow-500 rounded border border-yellow-500/20">
                   Pitch Deck <Presentation size={10} />
                 </a>
               )}
               {project.links?.demo && (
                 <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 flex items-center gap-1.5 px-3 py-0.5 bg-emerald-500/10 text-emerald-500 rounded border border-emerald-500/20">
                   Live Prototype <ExternalLink size={10} />
                 </a>
               )}
               {project.links?.repo && (
                 <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 flex items-center gap-1">
                   Source <ArrowRight size={10} />
                 </a>
               )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AgenticDetail;
