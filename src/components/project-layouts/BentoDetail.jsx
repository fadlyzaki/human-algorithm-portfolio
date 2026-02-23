import React from 'react';
import { Calendar, Hash, Music, Layout, ArrowUpRight } from 'lucide-react';
import AiryDiagram from '../AiryDiagram';
import ZoomableImage from '../ZoomableImage';
import { motion } from 'framer-motion';

const BentoDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeSolution, activeMetrics, activeLearnings, InteractionComponent, showLivePreview, setShowLivePreview, t, isIndonesian, activeTitle, activeTldr, activeSnapshot }) => {

    // Aesthetic: Bento Grid, Magazine Editorial, Pastel Gradients, Rounded Corners, Sticker Tags

    return (
        <div className="bg-[#FAF9F6] dark:bg-[#0F0F0F] text-[#2D2D2D] dark:text-[#EAEAEA] font-sans min-h-screen selection:bg-pink-300/50 pb-32">

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
                        <div className="absolute top-8 right-8 rotate-12 bg-white dark:bg-[#111] text-black dark:text-white px-4 py-2 rounded-full shadow-lg font-mono text-xs font-bold uppercase border border-black/10 dark:border-white/10 flex items-center gap-2">
                            <Calendar size={14} /> WRAPPED
                        </div>

                        <h1 className="text-6xl md:text-8xl font-serif italic mb-6 leading-[1.1] text-black dark:text-white relative z-10">
                            {activeTitle}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-black/70 dark:text-white/70 max-w-lg leading-relaxed relative z-10">
                            {activeTldr}
                        </p>
                    </motion.div>

                    {/* Stats/Action Block */}
                    <div className="flex flex-col gap-6">
                        <div className="flex-1 bg-white dark:bg-[#1A1A1A] rounded-[2rem] p-8 border border-black/5 dark:border-white/5 shadow-sm flex flex-col justify-between">
                            <div className="font-mono text-xs uppercase text-gray-400 mb-4">{activeSnapshot.tagline}</div>
                            {project.stack.slice(0, 3).map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 mb-3">
                                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-pink-400' : i === 1 ? 'bg-orange-400' : 'bg-yellow-400'}`}></div>
                                    <span className="font-medium text-sm">{tech}</span>
                                </div>
                            ))}
                        </div>
                        {project.links.demo && project.links.demo !== '#' && (
                            <a href={project.links.demo} className="h-32 bg-[#2D2D2D] dark:bg-[#EAEAEA] text-white dark:text-black rounded-[2rem] p-8 hover:scale-[1.02] transition-transform flex items-center justify-between group">
                                <span className="text-xl font-bold font-serif italic">Open Generator</span>
                                <div className="p-3 bg-white/20 dark:bg-black/10 rounded-full group-hover:rotate-45 transition-transform">
                                    <ArrowUpRight />
                                </div>
                            </a>
                        )}
                    </div>
                </header>

                {/* THE CHALLENGE INLAY */}
                <section className="mb-24 px-8 md:px-16 border-l-4 border-pink-200 dark:border-pink-900/50">
                    <p className="text-2xl md:text-4xl font-light leading-snug max-w-4xl text-black/80 dark:text-white/80">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
                            {activeProcess.map((step, idx) => (
                                <article key={idx} className={`bg-white dark:bg-[#1A1A1A] rounded-[2rem] border border-black/5 dark:border-white/5 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-500
                                    ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}
                                `}>
                                    {step.image && (
                                        <div className="flex-1 overflow-hidden bg-gray-50 dark:bg-black/20 flex items-center justify-center p-6 border-b border-black/5 dark:border-white/5">
                                            {step.image.startsWith('airy:') ? (
                                                <AiryDiagram type={step.image.split(':')[1]} />
                                            ) : (
                                                <ZoomableImage src={step.image} className="w-full h-full object-contain" />
                                            )}
                                        </div>
                                    )}
                                    <div className="p-8 h-[160px] flex flex-col justify-center">
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{step.desc}</p>
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
                        <div className="bg-white dark:bg-[#1A1A1A] rounded-[2rem] border border-black/5 dark:border-white/5 overflow-hidden p-8 hover:shadow-xl transition-shadow duration-500">
                            {project.prototypeLink ? (
                                <div className="w-full h-[600px] rounded-[1rem] overflow-hidden border border-black/10 dark:border-white/10">
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
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                        {activeLearnings && (
                            <div className="bg-[#2D2D2D] text-[#FAF9F6] rounded-[2rem] p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
                                <Music className="absolute -bottom-8 -right-8 w-48 h-48 opacity-10 text-white" />
                                <div className="font-mono text-xs uppercase tracking-widest text-white/50 mb-8 border border-white/20 inline-block px-3 py-1 rounded-full w-max">
                                    Developer Note
                                </div>
                                <p className="text-2xl md:text-3xl font-serif italic leading-relaxed relative z-10">
                                    "{activeLearnings}"
                                </p>
                            </div>
                        )}
                        {activeMetrics && (
                            <div className="grid grid-cols-2 gap-6 content-start">
                                {activeMetrics.map((m, i) => (
                                    <div key={i} className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-[2rem] p-8 flex flex-col justify-center aspect-square">
                                        <Hash className="text-purple-400 mb-4 opacity-50" />
                                        <div className="text-4xl lg:text-5xl font-bold mb-2 text-black dark:text-white">{m.value}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-widest font-mono">{m.label}</div>
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
