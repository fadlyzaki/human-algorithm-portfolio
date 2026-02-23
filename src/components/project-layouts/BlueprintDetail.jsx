import React from 'react';
import { BookOpen, Layers, Maximize, GitMerge, FileText, ArrowRight } from 'lucide-react';
import AiryDiagram from '../AiryDiagram';
import ZoomableImage from '../ZoomableImage';

const BlueprintDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeSolution, activeMetrics, activeLearnings, InteractionComponent, showLivePreview, setShowLivePreview, t, isIndonesian, activeTitle, activeTldr, activeSnapshot }) => {

    // Aesthetic: Civil/Architectural Blueprint, Blue Graph Paper, Precise Lines, Technical Fonts

    return (
        <div className="bg-[#F0F7FF] dark:bg-[#060F2B] text-[#0A2540] dark:text-[#E0EFFF] font-mono min-h-screen selection:bg-blue-300/40 relative overflow-hidden pb-32">

            {/* Grid Background */}
            <div className="absolute inset-0 blueprint-grid opacity-30 dark:opacity-20 pointer-events-none z-0"></div>

            {/* Global Construction Lines */}
            <div className="fixed left-8 md:left-16 top-0 bottom-0 w-px bg-blue-500/20 z-0 hidden lg:block"></div>
            <div className="fixed right-8 md:right-16 top-0 bottom-0 w-px bg-blue-500/20 z-0 hidden lg:block"></div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 pt-24">

                {/* 1. BLUEPRINT HEADER */}
                <header className="border-2 border-blue-900/20 dark:border-blue-300/20 bg-white/50 dark:bg-black/20 backdrop-blur-sm p-8 md:p-16 mb-24 relative">

                    {/* Corner Marks */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-600 dark:border-blue-400 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-600 dark:border-blue-400 translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-600 dark:border-blue-400 -translate-x-1/2 translate-y-1/2 bg-white dark:bg-black"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-600 dark:border-blue-400 translate-x-1/2 translate-y-1/2 bg-white dark:bg-black"></div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b-2 border-blue-900/10 dark:border-blue-300/10 pb-8">
                        <div>
                            <div className="flex items-center gap-4 text-blue-600 dark:text-blue-400 mb-6">
                                <BookOpen size={24} />
                                <h1 className="text-4xl md:text-6xl font-serif italic tracking-tight text-[#0A2540] dark:text-[#E0EFFF]">{activeTitle}</h1>
                            </div>
                            <p className="text-xl md:text-2xl font-light text-blue-800/70 dark:text-blue-200/70 max-w-3xl leading-relaxed">
                                {activeTldr}
                            </p>
                        </div>

                        {/* Title Block Specs */}
                        <div className="border border-blue-900/20 dark:border-blue-300/20 p-4 text-[10px] uppercase tracking-widest grid grid-cols-2 gap-4 w-full md:w-auto shrink-0 bg-blue-50/50 dark:bg-blue-950/50">
                            <div>
                                <span className="text-blue-500/60 block mb-1">Project_Type</span>
                                <strong>{project.type}</strong>
                            </div>
                            <div>
                                <span className="text-blue-500/60 block mb-1">Drawn_Date</span>
                                <strong>{activeContext.timeline}</strong>
                            </div>
                            <div>
                                <span className="text-blue-500/60 block mb-1">Scale</span>
                                <strong>1:1</strong>
                            </div>
                            <div>
                                <span className="text-blue-500/60 block mb-1">Approval</span>
                                <strong>{activeContext.role}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-xs text-blue-800 dark:text-blue-200 uppercase font-bold tracking-widest">
                        {project.links.demo && project.links.demo !== '#' && (
                            <a href={project.links.demo} className="flex items-center gap-2 border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors">
                                Access_Demo_Site <ArrowRight size={14} />
                            </a>
                        )}
                        <span className="flex items-center gap-2"><Layers size={14} /> {project.stack.join(' + ')}</span>
                    </div>
                </header>

                <div className="grid lg:grid-cols-12 gap-16">

                    {/* LEFT COLUMN: Narrative & Process */}
                    <div className="lg:col-span-8 space-y-24">

                        <section>
                            <div className="text-[10px] text-blue-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                                <Maximize size={12} /> SEC_01 // Problem_Space
                            </div>
                            <p className="font-sans text-2xl md:text-3xl leading-snug font-light border-l-2 border-blue-600/30 pl-6 dark:border-blue-400/30">
                                {activeChallenge}
                            </p>
                        </section>

                        {activeProcess && (
                            <section>
                                <div className="text-[10px] text-blue-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                                    <GitMerge size={12} /> SEC_02 // Assembly_Instructions
                                </div>
                                <div className="space-y-16">
                                    {activeProcess.map((step, idx) => (
                                        <div key={idx} className="relative">
                                            {/* Connecting node line */}
                                            {idx !== activeProcess.length - 1 && (
                                                <div className="absolute left-[31px] top-16 bottom-[-64px] w-px border-l-2 border-dashed border-blue-900/10 dark:border-blue-300/10"></div>
                                            )}

                                            <div className="flex gap-8">
                                                {/* Node */}
                                                <div className="w-16 h-16 shrink-0 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-[#060F2B] flex items-center justify-center text-xl font-serif italic text-blue-600 dark:text-blue-400 z-10 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                                                    {idx + 1}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 pt-4">
                                                    <h3 className="font-sans text-2xl font-bold mb-4">{step.title}</h3>
                                                    <p className="font-sans text-lg text-blue-900/60 dark:text-blue-100/60 leading-relaxed mb-6">{step.desc}</p>

                                                    {step.image && (
                                                        <div className="border border-blue-900/20 dark:border-blue-300/20 bg-blue-50/50 dark:bg-blue-950/30 p-4 relative">
                                                            <div className="absolute top-2 left-2 text-[8px] uppercase tracking-widest text-blue-500">FIG_{idx + 1}.dwg</div>
                                                            {step.image.startsWith('airy:') ? (
                                                                <div className="h-48 mt-4"><AiryDiagram type={step.image.split(':')[1]} /></div>
                                                            ) : (
                                                                <ZoomableImage src={step.image} className="w-full h-auto mt-4 mix-blend-multiply dark:mix-blend-screen opacity-80 hover:opacity-100 transition-opacity" />
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Interaction Demo Box */}
                        {InteractionComponent && (
                            <section className="border-2 border-blue-600 p-8 shadow-[8px_8px_0_rgba(37,99,235,0.2)] bg-white dark:bg-[#060F2B]">
                                <h3 className="text-xl font-bold mb-8 uppercase flex items-center gap-3"><BookOpen /> User_Testing_Interface</h3>
                                <InteractionComponent />
                            </section>
                        )}

                    </div>

                    {/* RIGHT COLUMN: Sidebar Stats & Learnings */}
                    <aside className="lg:col-span-4 space-y-12 shrink-0">

                        {(activeMetrics || activeInsights) && (
                            <div className="border-2 border-blue-900/20 dark:border-blue-300/20 p-8 bg-white/50 dark:bg-black/20 backdrop-blur-sm sticky top-32">
                                <h4 className="text-[10px] text-blue-500 uppercase tracking-[0.2em] mb-8 pb-4 border-b border-blue-900/10 dark:border-blue-300/10">Specification_Data</h4>

                                {activeMetrics && (
                                    <div className="space-y-6 mb-12">
                                        {activeMetrics.map((m, i) => (
                                            <div key={i}>
                                                <div className="font-sans text-4xl font-bold text-blue-900 dark:text-white mb-1">{m.value}</div>
                                                <div className="text-[10px] uppercase font-bold text-blue-500/70">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeInsights && (
                                    <div className="space-y-8 border-t border-blue-900/10 dark:border-blue-300/10 pt-8">
                                        <h4 className="text-[10px] text-blue-500 uppercase tracking-[0.2em] mb-6">Planned_Features</h4>
                                        {activeInsights.map((insight, idx) => (
                                            <div key={idx}>
                                                <h5 className="font-bold text-sm mb-2 font-sans">{insight.title}</h5>
                                                <p className="text-xs text-blue-900/60 dark:text-blue-100/60 font-sans leading-relaxed">{insight.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeLearnings && (
                            <div className="bg-blue-600 text-white p-8">
                                <FileText className="mb-6 opacity-50" />
                                <h4 className="text-[10px] uppercase tracking-[0.2em] mb-4 opacity-70">Architect's Note</h4>
                                <p className="font-serif italic text-xl leading-relaxed">
                                    "{activeLearnings}"
                                </p>
                            </div>
                        )}

                    </aside>

                </div>
            </main>
        </div>
    );
};

export default BlueprintDetail;
