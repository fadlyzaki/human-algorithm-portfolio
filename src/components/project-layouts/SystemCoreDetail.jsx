import React from 'react';
import { Cpu, Terminal, Layers, Box, ArrowUpRight, Code, ArrowLeft } from 'lucide-react';
import AiryDiagram from '../AiryDiagram';
import ZoomableImage from '../ZoomableImage';
import { motion } from 'framer-motion';

const SystemCoreDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeSolution, activeMetrics, activeLearnings, InteractionComponent, showLivePreview, setShowLivePreview, t, isIndonesian, activeTitle, activeTldr, activeSnapshot }) => {

    // Aesthetic: Terminal Data, Scanning Lines, Dark Void, High Contrast Blue/Green Monospace

    return (
        <div className="bg-[#050505] text-white font-sans min-h-screen selection:bg-blue-500/30">

            {/* Terminal Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-10"
                style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            {/* Ambient Shadow */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_120%)]"></div>

            <main className="relative z-10 pt-24 pb-32">

                {/* 1. HERO BANNER */}
                <header className="relative border-b border-white/10 overflow-hidden min-h-[70vh] flex flex-col justify-center px-6 text-center">

                    {/* Scanning Line */}
                    <motion.div
                        className="absolute left-0 right-0 h-px bg-blue-500/50 z-20 pointer-events-none"
                        animate={{ top: ['0%', '100%'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Terminal Background Flow */}
                    <div className="absolute inset-0 opacity-5 font-mono text-[10px] sm:text-[12px] leading-none pointer-events-none select-none overflow-hidden p-4 text-justify custom-scrollbar">
                        {Array.from({ length: 150 }).map((_, i) => (
                            <span key={i} className="mr-2 text-blue-400">
                                {`INIT_SYS >> PORTFOLIO_V2.9 >> AGENT_${i} >> DATA_STREAM=${Math.random().toString(36).substring(2, 8)} `}
                            </span>
                        ))}
                    </div>

                    <div className="max-w-5xl mx-auto relative z-30 space-y-8 backdrop-blur-sm p-8 border border-white/5 bg-black/40">
                        <div className="inline-flex items-center gap-3 px-4 py-2 border border-blue-500/30 bg-blue-500/10">
                            <Cpu size={14} className="text-blue-400 animate-pulse" />
                            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400 text-shadow-glow">
                                {activeSnapshot.tagline} // SYSTEM PROTOCOL
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif italic text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            {activeTitle}
                        </h1>

                        <p className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed border-l-2 border-blue-500/50 pl-6 text-left">
                            {activeTldr}
                        </p>
                    </div>
                </header>

                {/* 2. SPECS TERMINAL */}
                <section className="border-b border-white/10 bg-black/80 relative z-20">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[10px] md:text-xs">

                        <div className="flex items-center gap-4">
                            {project.links.demo && project.links.demo !== '#' && (
                                <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 transition-colors uppercase tracking-widest">
                                    [ EXECUTE_DEMO ] <ArrowUpRight size={14} />
                                </a>
                            )}
                            {project.links.repo && project.links.repo !== '#' && (
                                <a href={project.links.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-blue-500/30 px-4 py-2 text-blue-400 hover:bg-blue-500/10 transition-colors uppercase tracking-widest">
                                    <Code size={14} /> SOURCE_CODE
                                </a>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-8 text-gray-400">
                            <div className="flex flex-col">
                                <span className="opacity-50 mb-1">ROLE_ASSIGNMENT</span>
                                <span className="text-white">{activeContext.role}</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-white/20"></div>
                            <div className="flex flex-col">
                                <span className="opacity-50 mb-1">TEMP_MARKER</span>
                                <span className="text-white">{activeContext.timeline}</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-white/20"></div>
                            <div className="flex flex-col">
                                <span className="opacity-50 mb-1">LOADED_MODULES</span>
                                <span className="text-white">{project.stack.slice(0, 3).join(' / ')}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CORE LOGIC (Narrative) */}
                <section className="max-w-4xl mx-auto px-6 py-24 space-y-32">

                    {/* The Challenge */}
                    <article className="border border-white/10 p-8 md:p-12 bg-[#0A0A0A] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
                        <div className="flex items-center gap-4 mb-8">
                            <Terminal size={16} className="text-red-400" />
                            <span className="font-mono text-xs uppercase tracking-widest text-red-400">System.Err // The Challenge</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-sans font-medium text-gray-200 leading-tight">
                            {activeChallenge}
                        </h2>
                    </article>

                    {/* The Process */}
                    {activeProcess && (
                        <div className="space-y-12">
                            <div className="flex items-center gap-4 mb-12">
                                <Layers size={16} className="text-blue-400" />
                                <span className="font-mono text-xs uppercase tracking-widest text-blue-400">Execution_Flow</span>
                            </div>
                            {activeProcess.map((step, idx) => (
                                <article key={idx} className="grid md:grid-cols-5 gap-8 items-start">
                                    <div className="md:col-span-2 space-y-4">
                                        <div className="font-mono text-[10px] text-gray-500">STEP_0{idx + 1}</div>
                                        <h3 className="text-xl font-bold text-white border-l-2 border-blue-500 pl-4">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <div className="md:col-span-3 space-y-6">
                                        <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                                        {step.image && (
                                            <div className="border border-white/10 bg-black p-4">
                                                {step.image.startsWith('airy:') ? (
                                                    <div className="w-full h-[250px]"><AiryDiagram type={step.image.split(':')[1]} /></div>
                                                ) : (
                                                    <ZoomableImage src={step.image} alt={step.title} className="w-full opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* Insights */}
                    {activeInsights && activeInsights.length > 0 && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="md:col-span-2 flex items-center gap-4 mb-4">
                                <Box size={16} className="text-purple-400" />
                                <span className="font-mono text-xs uppercase tracking-widest text-purple-400">Data_Extraction</span>
                            </div>
                            {activeInsights.map((insight, idx) => (
                                <div key={idx} className="bg-[#111] border border-white/5 p-8 relative">
                                    <div className="absolute top-4 right-4 text-purple-500/20 font-mono text-4xl font-bold">0{idx + 1}</div>
                                    <h3 className="text-xl font-bold mb-4 text-white">{insight.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed relative z-10">{insight.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Diagnostics / Interaction */}
                    {InteractionComponent && (
                        <div className="bg-blue-900/10 border border-blue-500/20 p-8 rounded-sm animate-pulse-slow">
                            <div className="flex items-center justify-between mb-8 border-b border-blue-500/20 pb-4">
                                <h3 className="font-mono text-xs text-blue-400 uppercase tracking-widest">Interactive_Console</h3>
                                <div className="flex gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                </div>
                            </div>
                            <InteractionComponent />
                        </div>
                    )}

                    {/* Metrics Footer */}
                    {(activeMetrics || activeLearnings) && (
                        <div className="border-t border-white/10 pt-16 grid md:grid-cols-2 gap-16">
                            {activeMetrics && (
                                <div>
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-8">Telemetry_Output</h4>
                                    <div className="space-y-6">
                                        {activeMetrics.map((m, i) => (
                                            <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                                                <span className="text-sm text-gray-400 uppercase tracking-wide font-mono">{m.label}</span>
                                                <span className="text-2xl font-bold text-white font-mono">{m.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeLearnings && (
                                <div className="bg-white text-black p-8 font-serif italic text-xl leading-relaxed relative">
                                    <div className="absolute -top-3 -left-3 bg-blue-500 text-white font-mono text-[10px] px-2 py-1 uppercase font-bold">Human_Input</div>
                                    "{activeLearnings}"
                                </div>
                            )}
                        </div>
                    )}

                </section>
            </main>
        </div>
    );
};

export default SystemCoreDetail;
