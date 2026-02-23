import React from 'react';
import { Activity, Shield, Star, Rocket, Target, Play } from 'lucide-react';
import AiryDiagram from '../AiryDiagram';
import ZoomableImage from '../ZoomableImage';
import { motion } from 'framer-motion';

const CosmicPopDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeSolution, activeMetrics, activeLearnings, InteractionComponent, showLivePreview, setShowLivePreview, t, isIndonesian, activeTitle, activeTldr, activeSnapshot }) => {

    // Aesthetic: Cosmic Pop, Deep Blues/Purples, Glassmorphism, Floating Particles, Playful Typography

    return (
        <div className="bg-[var(--bg-void)] text-[var(--text-primary)] font-sans min-h-screen selection:bg-[#00C2FF]/30 overflow-hidden relative">

            {/* Ambient Nebula Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#00C2FF]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#6B46C1]/10 rounded-full blur-[150px]"></div>
                <div className="absolute inset-0 sparkle-bg opacity-30"></div>
            </div>

            <main className="relative z-10 pt-24 pb-32 max-w-6xl mx-auto px-6">

                {/* 1. HERO BANNER */}
                <header className="py-20 flex flex-col items-center text-center space-y-10">

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-24 h-24 rounded-[2rem] bg-gradient-to-tr from-[#00C2FF]/20 to-[#6B46C1]/20 border border-[var(--border-color)] flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(0,194,255,0.2)]"
                    >
                        <Activity size={40} className="text-[#00C2FF]" />
                    </motion.div>

                    <nav className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-full backdrop-blur-md">
                        <Star size={14} className="text-[#00C2FF]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">
                            {activeSnapshot.tagline}
                        </span>
                    </nav>

                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[var(--text-primary)] via-[var(--text-secondary)] to-[#00C2FF] max-w-4xl leading-[1.1]">
                        {activeTitle}
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium max-w-2xl leading-relaxed">
                        {activeTldr}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-8">
                        {project.links.demo && project.links.demo !== '#' && (
                            <a href={project.links.demo} className="flex items-center gap-2 bg-[#00C2FF] text-[var(--bg-void)] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-all">
                                <Play size={16} fill="currentColor" /> Play Demo
                            </a>
                        )}
                        <div className="flex bg-[var(--bg-surface)] backdrop-blur-xl border border-[var(--border-color)] rounded-full p-1 h-14">
                            {project.stack.slice(0, 3).map(tech => (
                                <span key={tech} className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </header>

                {/* 3. NARRATIVE BLOCKS */}
                <section className="mt-32 space-y-32">

                    {/* The Challenge */}
                    <article className="bg-gradient-to-br from-[var(--bg-surface)] to-transparent border border-[var(--border-color)] rounded-[3rem] p-12 md:p-16 relative overflow-hidden group">
                        <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8">
                            <Target size={32} className="text-red-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-relaxed text-[var(--text-primary)] max-w-3xl">
                            "{activeChallenge}"
                        </h2>
                    </article>

                    {/* The Process */}
                    {activeProcess && (
                        <div className="grid md:grid-cols-2 gap-8">
                            {activeProcess.map((step, idx) => (
                                <article key={idx} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[2rem] overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-500">
                                    {step.image && (
                                        <div className="h-64 bg-black/30 w-full overflow-hidden p-8 flex items-center justify-center">
                                            {step.image.startsWith('airy:') ? (
                                                <AiryDiagram type={step.image.split(':')[1]} />
                                            ) : (
                                                <ZoomableImage src={step.image} alt={step.title} className="w-full h-full object-contain mix-blend-screen" />
                                            )}
                                        </div>
                                    )}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-[#00C2FF]/20 text-[#00C2FF] flex items-center justify-center font-bold">{idx + 1}</div>
                                            <h3 className="text-2xl font-bold text-[var(--text-primary)]">{step.title}</h3>
                                        </div>
                                        <p className="text-[var(--text-secondary)] leading-relaxed font-medium">
                                            {step.desc}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* Interaction / Demo */}
                    {(project.prototypeLink || InteractionComponent) && (
                        <div className="py-24 border-y border-[var(--border-color)] flex flex-col items-center justify-center w-full">
                            <h3 className="text-2xl font-black italic text-center mb-12 text-[#00C2FF] flex items-center gap-3">
                                <Rocket /> LIVE ARENA
                            </h3>
                            <div className="w-full rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,194,255,0.15)] ring-4 ring-[var(--bg-surface)] bg-black">
                                {project.prototypeLink ? (
                                    <div className="w-full h-[600px]">
                                        <iframe src={project.prototypeLink} title={`${activeTitle} Preview`} className="w-full h-full border-0" sandbox="allow-scripts allow-same-origin" />
                                    </div>
                                ) : (
                                    <div className="max-w-sm mx-auto">
                                        <InteractionComponent />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Insights */}
                    {activeInsights && activeInsights.length > 0 && (
                        <div className="grid md:grid-cols-2 gap-8">
                            {activeInsights.map((insight, idx) => (
                                <div key={idx} className="group p-8 rounded-3xl bg-[var(--bg-surface)] border border-blue-500/20 hover:bg-blue-500/10 transition-colors">
                                    <div className="mb-6 w-12 h-12 rounded-xl bg-[var(--bg-card)] flex items-center justify-center text-[#00C2FF]">
                                        <Star size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{insight.title}</h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed font-medium">{insight.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Metrics Footer */}
                    {(activeMetrics || activeLearnings) && (
                        <div className="bg-gradient-to-r from-[#6B46C1]/20 to-[#00C2FF]/20 rounded-[3rem] p-12 md:p-16 border border-[var(--border-color)] flex flex-col md:flex-row items-center gap-16">
                            {activeLearnings && (
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-6 text-[#00C2FF]">
                                        <Shield size={20} />
                                        <span className="font-bold uppercase tracking-wider text-sm">Founder's Note</span>
                                    </div>
                                    <p className="text-2xl font-black italic text-[var(--text-primary)] leading-relaxed">
                                        "{activeLearnings}"
                                    </p>
                                </div>
                            )}
                            {activeMetrics && (
                                <div className="flex gap-8 border-l border-[var(--border-color)] pl-16">
                                    {activeMetrics.map((m, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[var(--text-primary)] to-[#00C2FF] mb-2">{m.value}</div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                </section>
            </main>
        </div>
    );
};

export default CosmicPopDetail;
