import React, { useRef } from 'react';
import { Sparkles, Cpu, TestTube, Lightbulb, TrendingUp, Compass, ArrowRight } from 'lucide-react';
import AiryDiagram from '../AiryDiagram';
import ZoomableImage from '../ZoomableImage';

const PrototypeDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeMetrics, activeLearnings, InteractionComponent, activeTitle, activeTldr }) => {

    const containerRef = useRef(null);

    // Default brand color fallback
    const accentColor = project.brandColor || 'var(--brand)';

    // Helper to generate a soft glow background 
    const glowStyle = {
        background: `radial-gradient(circle at 50% 0%, ${accentColor}15 0%, transparent 60%)`,
    };

    return (
        <div ref={containerRef} className="bg-[var(--bg-void)] text-[var(--text-primary)] font-sans min-h-screen selection:bg-[var(--accent)] selection:text-white pb-32 relative overflow-hidden" style={{ '--local-accent': accentColor }}>

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={glowStyle}></div>

            {/* Subtle Grid overlay for 'Lab' feel */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
                style={{ backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            <main className="relative z-10 max-w-[1400px] mx-auto pt-24 px-6 md:px-12">

                {/* 1. HERO SECTION */}
                <header className="mb-24 flex flex-col md:flex-row gap-12 items-end pt-12 border-b border-[var(--border-color)] pb-16">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur-md text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-8">
                            <Sparkles size={12} style={{ color: accentColor }} />
                            Experimental Prototype
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-[var(--text-primary)]">
                            {activeTitle}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                            {activeTldr}
                        </p>
                    </div>

                    <div className="w-full md:w-auto shrink-0 flex flex-col gap-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
                            <div>
                                <span className="text-xs text-[var(--text-secondary)] block mb-1 uppercase tracking-wider">Type</span>
                                <span className="font-semibold">{project.type}</span>
                            </div>
                            <div>
                                <span className="text-xs text-[var(--text-secondary)] block mb-1 uppercase tracking-wider">Timeline</span>
                                <span className="font-semibold">{activeContext.timeline}</span>
                            </div>
                            <div>
                                <span className="text-xs text-[var(--text-secondary)] block mb-1 uppercase tracking-wider">Role</span>
                                <span className="font-semibold">{activeContext.role}</span>
                            </div>
                            <div>
                                <span className="text-xs text-[var(--text-secondary)] block mb-1 uppercase tracking-wider">Team</span>
                                <span className="font-semibold">{activeContext.team}</span>
                            </div>
                        </div>
                        <div className="flex justify-end pt-2">
                            <span className="text-xs text-[var(--text-secondary)] flex items-center gap-2">
                                Stack <ArrowRight size={12} /> {project.stack.join(' · ')}
                            </span>
                        </div>
                    </div>
                </header>

                {/* 2. THE TESTING GROUND (Prototype/Interaction) */}
                {(project.prototypeLink || InteractionComponent) && (
                    <section className="mb-32 relative">
                        <div className="absolute -inset-4 bg-gradient-to-b from-[var(--bg-card)] to-transparent rounded-[2.5rem] -z-10 blur-xl opacity-50"></div>
                        <div className="rounded-[2rem] border border-[var(--border-color)] overflow-hidden bg-[var(--bg-card)] shadow-lg relative">
                            {/* Decorative Top Bar */}
                            <div className="h-12 border-b border-[var(--border-color)] flex items-center px-6 gap-2 bg-[var(--bg-surface)]">
                                <div className="w-3 h-3 rounded-full bg-[var(--text-secondary)] opacity-30"></div>
                                <div className="w-3 h-3 rounded-full bg-[var(--text-secondary)] opacity-30"></div>
                                <div className="w-3 h-3 rounded-full bg-[var(--text-secondary)] opacity-30"></div>
                                <div className="ml-4 text-xs font-mono text-[var(--text-secondary)] lowercase tracking-widest">{project.id}.test_env</div>
                            </div>

                            <div className="p-0">
                                {project.prototypeLink ? (
                                    <div className="w-full h-[70vh] min-h-[600px] bg-black">
                                        <iframe src={project.prototypeLink} title={`${activeTitle} Preview`} className="w-full h-full border-0" sandbox="allow-scripts allow-same-origin allow-popups" />
                                    </div>
                                ) : (
                                    <div className="w-full bg-[var(--bg-void)]">
                                        <InteractionComponent />
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* 3. NARRATIVE LAYOUT (Sticky Sidebar + Scrolling Content) */}
                <div className="grid lg:grid-cols-12 gap-16 pb-24 items-start">

                    {/* LEFT COLUMN: Scrolling Content */}
                    <div className="lg:col-span-8 space-y-32">

                        {/* The Problem Space */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                                    <TestTube size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold">The Hypothesis</h3>
                            </div>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-primary)] font-light border-l border-[var(--local-accent)] pl-6">
                                    {activeChallenge}
                                </p>
                            </div>
                        </section>

                        {/* Development Process / Experiments */}
                        {activeProcess && (
                            <section>
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                                        <Cpu size={24} />
                                    </div>
                                    <h3 className="text-2xl font-semibold">Evolution</h3>
                                </div>

                                <div className="space-y-24">
                                    {activeProcess.map((step, idx) => (
                                        <div key={idx} className="group flex flex-col md:flex-row gap-8 lg:gap-12">
                                            <div className="md:w-1/3 shrink-0">
                                                <div className="text-sm font-mono mb-3" style={{ color: accentColor }}>0{idx + 1}.</div>
                                                <h4 className="text-xl font-medium mb-4">{step.title}</h4>
                                                <p className="text-[var(--text-secondary)] leading-relaxed text-sm lg:text-base">{step.desc}</p>
                                            </div>
                                            <div className="md:w-2/3">
                                                {step.image && (
                                                    <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 overflow-hidden transition-all duration-500 group-hover:border-[var(--local-accent)] group-hover:shadow-lg">
                                                        {step.image.startsWith('airy:') ? (
                                                            <div className="h-64 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                                                                <AiryDiagram type={step.image.split(':')[1]} />
                                                            </div>
                                                        ) : (
                                                            <div className="rounded-xl overflow-hidden aspect-video relative">
                                                                <ZoomableImage src={step.image} className="absolute inset-0 w-full h-full object-cover" />
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>

                    {/* RIGHT COLUMN: Sticky Sidebar for Specs & Learnings */}
                    <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">

                        {(activeMetrics || activeInsights || activeLearnings) && (
                            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm overflow-hidden relative">
                                {/* Subtle decorative glow in card */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-[50px] rounded-full" style={{ backgroundColor: accentColor }}></div>

                                {activeMetrics && activeMetrics.length > 0 && (
                                    <div className="mb-10 relative z-10">
                                        <h4 className="text-xs uppercase tracking-widest flex items-center gap-2 mb-6" style={{ color: accentColor }}>
                                            <TrendingUp size={14} /> Signals
                                        </h4>
                                        <div className="grid grid-cols-2 gap-6">
                                            {activeMetrics.map((m, i) => (
                                                <div key={i}>
                                                    <div className="text-3xl font-bold mb-1 tracking-tight">{m.value}</div>
                                                    <div className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">{m.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeInsights && activeInsights.length > 0 && (
                                    <div className="mb-10 relative z-10 border-t border-[var(--border-color)] pt-8">
                                        <h4 className="text-xs uppercase tracking-widest flex items-center gap-2 mb-6" style={{ color: accentColor }}>
                                            <Compass size={14} /> Trajectory
                                        </h4>
                                        <div className="space-y-6">
                                            {activeInsights.map((insight, idx) => (
                                                <div key={idx}>
                                                    <h5 className="font-semibold text-sm mb-2">{insight.title}</h5>
                                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{insight.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeLearnings && (
                                    <div className="relative z-10 border-t border-[var(--border-color)] pt-8 mt-10">
                                        <h4 className="text-xs uppercase tracking-widest flex items-center gap-2 mb-6" style={{ color: accentColor }}>
                                            <Lightbulb size={14} /> Synthesis
                                        </h4>
                                        <p className="text-lg italic font-light text-[var(--text-secondary)] leading-relaxed">
                                            "{activeLearnings}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                    </aside>
                </div>
            </main>
        </div>
    );
};

export default PrototypeDetail;
