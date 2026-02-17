import React, { Suspense, useState } from 'react';
import { Cpu, Scan } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import Treasure from '../Treasure';

const CompanyHero = ({ cluster, t, isId, InteractionComponent, brandColor }) => {
    const [showNarrative, setShowNarrative] = useState(false);

    return (
        <header className="min-h-screen flex flex-col pt-24 md:pt-32 px-6 lg:px-12 relative overflow-hidden border-b border-[var(--border-color)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center flex-grow mb-12">
                {/* Text Content */}
                <ScrollReveal>
                    <div className="relative z-20">
                        {/* Company Logo Space */}
                        <div className="mb-6 h-12 flex items-center">
                            {cluster.logo ? (
                                <img
                                    src={cluster.logo}
                                    alt={`${cluster.company} Logo`}
                                    className="h-full w-auto object-contain"
                                />
                            ) : (
                                <div className="h-10 w-10 rounded bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center opacity-50 border-dashed">
                                    <span className="text-[8px] font-mono text-[var(--text-secondary)]">LOGO</span>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-[var(--brand)]"></div>
                            <span className="text-[var(--brand)] font-mono text-xs uppercase tracking-[0.2em]">
                                {cluster.company} — {cluster.title}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif italic mb-8 leading-[0.9] tracking-tight">
                            {isId ? (cluster.subtitle_id || cluster.subtitle) : cluster.subtitle}
                        </h1>
                        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl font-light leading-relaxed border-l-2 border-[var(--border-color)] pl-6">
                            {isId ? (cluster.hook_id || cluster.hook) : cluster.hook}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Interactive AI Visualization */}
                <ScrollReveal delay={200} className="w-full h-[500px] relative">
                    <Treasure
                        id="company-detail"
                        className="top-4 right-4"
                        type="crown"
                    >
                        KING'S TREASURE!
                    </Treasure>
                    <div className="absolute -inset-4 bg-[var(--brand)] opacity-10 blur-3xl rounded-full"></div>
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl bg-black dark:bg-white">
                        <div className="absolute top-4 left-4 z-40 flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>

                        <div className="absolute top-4 right-4 z-40">
                            <button
                                onClick={() => setShowNarrative(!showNarrative)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 font-mono text-[10px] uppercase tracking-widest ${showNarrative ? 'bg-[var(--brand)] text-white border-[var(--brand)]' : 'bg-black/50 text-white/70 border-white/20 hover:border-white/40'}`}
                            >
                                {showNarrative ? <Cpu size={12} /> : <Scan size={12} />}
                                {showNarrative ? 'System_View' : 'Human_Narrative'}
                            </button>
                        </div>

                        <Suspense fallback={<div className="flex items-center justify-center h-full text-[var(--brand)] animate-pulse">LOADING_SIMULATION...</div>}>
                            <div className={`relative h-full w-full transition-all duration-700 ${showNarrative ? 'blur-xl scale-110 opacity-30 px-12' : 'blur-0 scale-100 opacity-100'}`}>
                                <InteractionComponent color={brandColor} />
                            </div>

                            {showNarrative && (
                                <div className="absolute inset-0 z-30 flex items-center justify-center p-8 md:p-12 animate-in fade-in zoom-in duration-500 overflow-y-auto">
                                    <div className="max-w-md bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-3xl">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-8 h-px bg-[var(--brand)]"></div>
                                            <span className="font-mono text-[10px] text-[var(--brand)] uppercase tracking-[0.3em]">The_Motivation</span>
                                        </div>
                                        <p className="text-lg md:text-xl font-serif italic text-white leading-relaxed mb-6">
                                            "{isId ? (cluster.motivation_id || cluster.motivation) : cluster.motivation}"
                                        </p>
                                        <div className="flex items-center gap-4 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                                            <span>LOG_SOURCE: INTERNAL_MEMO</span>
                                            <span>STATUS: DECLASSIFIED</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Suspense>
                    </div>
                </ScrollReveal>
            </div>
        </header>
    );
};

export default CompanyHero;
