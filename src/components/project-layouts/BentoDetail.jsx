import React from 'react';
import { Calendar, Hash, Music, Layout, ArrowUpRight } from 'lucide-react';
import AiryDiagram from '../AiryDiagram';
import ZoomableImage from '../ZoomableImage';
import { motion } from 'framer-motion';

const BentoDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeSolution, activeMetrics, activeLearnings, InteractionComponent, showLivePreview, setShowLivePreview, t, isIndonesian, activeTitle, activeTldr, activeSnapshot }) => {

    // Aesthetic: Bento Grid, Magazine Editorial, Pastel Gradients, Rounded Corners, Sticker Tags

    return (
        <div className="bg-[var(--bg-void)] text-[var(--text-primary)] font-sans min-h-screen selection:bg-pink-300/50 pb-32">

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
                        <div className="absolute top-8 right-8 rotate-12 bg-white dark:bg-[#111] text-black dark:text-white px-4 py-2 rounded-full shadow-lg font-mono text-xs font-bold uppercase border border-[var(--border-color)] flex items-center gap-2">
                            <Calendar size={14} /> WRAPPED
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
                            <div className="font-mono text-xs uppercase text-[var(--text-secondary)] mb-4">{activeSnapshot.tagline}</div>
                            {project.stack.slice(0, 3).map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 mb-3">
                                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-pink-400' : i === 1 ? 'bg-orange-400' : 'bg-yellow-400'}`}></div>
                                    <span className="font-medium text-sm">{tech}</span>
                                </div>
                            ))}
                        </div>
                        {project.links.demo && project.links.demo !== '#' && (
                            <a href={project.links.demo} className="h-32 bg-[var(--text-primary)] text-[var(--bg-void)] rounded-[2rem] p-8 hover:scale-[1.02] transition-transform flex items-center justify-between group">
                                <span className="text-xl font-bold font-serif italic">Open Generator</span>
                                <div className="p-3 bg-[var(--bg-void)] opacity-20 rounded-full group-hover:rotate-45 transition-transform">
                                    <ArrowUpRight />
                                </div>
                            </a>
                        )}
                    </div>
                </header>

                {/* THE CHALLENGE INLAY */}
                <section className="mb-24 px-8 md:px-16 border-l-4 border-pink-200 dark:border-pink-900/50">
                    <p className="text-xl md:text-3xl font-light leading-snug max-w-4xl text-[var(--text-primary)] opacity-80">
                        {activeChallenge}
                    </p>
                </section>

                {/* THE PROCESS (Bento Style Grid) */}
                {activeProcess && (
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-10 pl-4">
                            <Layout className="text-pink-400" />
                            <h2 className="text-2xl font-serif italic">Methodology</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {activeProcess.map((step, idx) => (
                                <article key={idx} className={`bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-color)] overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-500
                                    ${idx === 0 ? 'md:col-span-2' : ''}
                                `}>
                                    {step.image && (
                                        <div className={`overflow-hidden bg-black/5 dark:bg-white/5 flex items-center justify-center p-6 border-b border-[var(--border-color)] ${idx === 0 ? 'h-[280px]' : 'h-[200px]'}`}>
                                            {step.image.startsWith('airy:') ? (
                                                <AiryDiagram type={step.image.split(':')[1]} />
                                            ) : (
                                                <ZoomableImage src={step.image} className="w-full h-full object-contain" />
                                            )}
                                        </div>
                                    )}
                                    <div className="p-8 flex-1 flex flex-col justify-center">
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-sm text-[var(--text-secondary)] line-clamp-3">{step.desc}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* INTERACTION / PROTOTYPE */}
                {(project.prototypeLink || InteractionComponent) && (
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-10 pl-4">
                            <Layout className="text-pink-400" />
                            <h2 className="text-2xl font-serif italic">Live Preview</h2>
                        </div>
                        <div className="bg-[var(--bg-card)] rounded-[2rem] border border-[var(--border-color)] overflow-hidden p-8 hover:shadow-xl transition-shadow duration-500">
                            {project.prototypeLink ? (
                                <div className="w-full h-[600px] rounded-[1rem] overflow-hidden border border-[var(--border-color)]">
                                    <iframe src={project.prototypeLink} title={`${activeTitle} Preview`} className="w-full h-full border-0" sandbox="allow-scripts allow-same-origin" />
                                </div>
                            ) : (
                                <InteractionComponent />
                            )}
                        </div>
                    </section>
                )}

                {/* METRICS & LEARNINGS */}
                {(activeMetrics || activeLearnings) && (
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 items-stretch">
                        {activeLearnings && (
                            <div className="bg-[var(--text-primary)] text-[var(--bg-void)] rounded-[2rem] p-12 md:p-16 flex flex-col justify-center relative overflow-hidden h-full min-h-[300px]">
                                <Music className="absolute -bottom-8 -right-8 w-48 h-48 opacity-10" />
                                <div className="font-mono text-xs uppercase tracking-widest opacity-50 mb-8 border border-[var(--bg-void)] opacity-20 inline-block px-3 py-1 rounded-full w-max">
                                    Developer Note
                                </div>
                                <p className="text-2xl md:text-3xl font-serif italic leading-relaxed relative z-10 flex-1 flex items-center">
                                    "{activeLearnings}"
                                </p>
                            </div>
                        )}
                        {activeMetrics && (
                            <div className="grid grid-cols-2 gap-6 h-full min-h-[300px]">
                                {activeMetrics.map((m, i) => (
                                    <div key={i} className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-[2rem] p-8 flex flex-col justify-center h-full w-full">
                                        <Hash className="text-purple-400 mb-4 opacity-50" />
                                        <div className="text-4xl lg:text-5xl font-bold mb-2 text-[var(--text-primary)]">{m.value}</div>
                                        <div className="text-sm text-[var(--text-secondary)] uppercase tracking-widest font-mono">{m.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}

            </main>
        </div>
    );
};

export default BentoDetail;
