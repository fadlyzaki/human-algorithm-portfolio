import React from 'react';
import { ArrowUpRight, Target, Square, Slash } from 'lucide-react';
import AiryDiagram from '../AiryDiagram';
import ZoomableImage from '../ZoomableImage';

const BrutalistDetail = ({ project, activeContext, activeChallenge, activeProcess, activeInsights, activeSolution, activeMetrics, activeLearnings, InteractionComponent, showLivePreview, setShowLivePreview, t, isIndonesian, activeTitle, activeTldr, activeSnapshot }) => {

    // Aesthetic: Neo-Brutalism, High Contrast, Stark Grids, Thick Borders, #FF3B30 Red Actions

    return (
        <div className="bg-[var(--bg-void)] text-[var(--text-primary)] font-sans min-h-screen selection:bg-[#FF3B30] selection:text-white pb-32">

            <main className="max-w-7xl mx-auto px-6 pt-24 font-mono">

                {/* 1. HERO BANNER */}
                <header className="border-4 border-[var(--text-primary)] p-8 md:p-16 relative bg-[var(--bg-card)] shadow-[16px_16px_0px_0px_#FF3B30] mb-32">

                    <div className="absolute top-0 right-0 p-4 border-l-4 border-b-4 border-[var(--text-primary)] bg-[#FF3B30] text-[var(--bg-void)]">
                        <Target size={32} />
                    </div>

                    <div className="inline-block bg-[var(--text-primary)] text-[var(--bg-void)] px-4 py-2 font-black uppercase text-sm mb-12">
                        {activeSnapshot.tagline} // {project.type}
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.85] tracking-tighter mb-12">
                        {activeTitle}
                    </h1>

                    <p className="text-2xl md:text-3xl font-bold max-w-3xl leading-snug border-l-8 border-[#FF3B30] pl-6 py-2">
                        {activeTldr}
                    </p>

                    <div className="mt-16 pt-8 border-t-4 border-[var(--text-primary)] flex flex-wrap gap-8 items-center text-sm font-black uppercase">
                        <div>
                            <span className="opacity-50 block mb-1">Timeline</span>
                            {activeContext.timeline}
                        </div>
                        <div>
                            <span className="opacity-50 block mb-1">Role</span>
                            {activeContext.role}
                        </div>
                        <div className="flex-1"></div>
                        {project.links.demo && project.links.demo !== '#' && (
                            <a href={project.links.demo} className="flex items-center gap-2 bg-[#FF3B30] text-white px-8 py-4 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-8px_8px_0_0_black] dark:hover:shadow-[-8px_8px_0_0_white] transition-transform">
                                READ_RESEARCH_PAPER <ArrowUpRight />
                            </a>
                        )}
                    </div>
                </header>

                {/* NARRATIVE */}
                <section className="font-sans">

                    {/* The Challenge */}
                    <article className="mb-32 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-6xl font-black uppercase tracking-tighter mb-8 italic">The Problem.</h2>
                            <p className="text-xl md:text-2xl font-bold leading-tight bg-[#FF3B30] text-white p-8 border-4 border-[var(--text-primary)]">
                                {activeChallenge}
                            </p>
                        </div>
                        {activeInsights?.[0]?.image && (
                            <div className="border-4 border-[var(--text-primary)] p-4 h-[400px] bg-[var(--bg-surface)] overflow-hidden">
                                {activeInsights[0].image.startsWith('airy:') ? (
                                    <AiryDiagram type={activeInsights[0].image.split(':')[1]} />
                                ) : (
                                    <ZoomableImage src={activeInsights[0].image} alt="Data" className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-screen" />
                                )}
                            </div>
                        )}
                    </article>

                    {/* The Process Grid */}
                    {activeProcess && (
                        <div className="mb-32">
                            <h2 className="text-6xl font-black uppercase tracking-tighter mb-16 border-b-8 border-[var(--text-primary)] pb-4 inline-block">Methodology.</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {activeProcess.map((step, idx) => (
                                    <article key={idx} className="border-4 border-[var(--text-primary)] bg-[var(--bg-card)] flex flex-col group">
                                        {step.image && (
                                            <div className="h-64 border-b-4 border-[var(--text-primary)] flex items-center justify-center p-8 bg-[var(--bg-surface)] overflow-hidden">
                                                {step.image.startsWith('airy:') ? (
                                                    <AiryDiagram type={step.image.split(':')[1]} />
                                                ) : (
                                                    <ZoomableImage src={step.image} className="h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                                                )}
                                            </div>
                                        )}
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="font-mono text-3xl font-black text-[#FF3B30] mb-4">0{idx + 1}</div>
                                            <h3 className="text-3xl font-black uppercase leading-none mb-4">{step.title}</h3>
                                            <p className="text-lg font-medium leading-snug mt-auto">{step.desc}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Interaction / Demo */}
                    {(project.prototypeLink || InteractionComponent) && (
                        <div className="mb-32 border-4 border-[var(--text-primary)] p-8 md:p-16 bg-[#FF3B30] text-white">
                            <h3 className="text-4xl font-black uppercase mb-12 flex items-center gap-4">
                                <Square /> Widget_Demo
                            </h3>
                            <div className="bg-[var(--bg-surface)] border-4 border-[var(--text-primary)] text-[var(--text-primary)] p-8 shadow-[16px_16px_0px_0px_var(--text-primary)]">
                                {project.prototypeLink ? (
                                    <div className="w-full h-[600px] bg-black">
                                        <iframe src={project.prototypeLink} title={`${activeTitle} Preview`} className="w-full h-full border-0" sandbox="allow-scripts allow-same-origin" />
                                    </div>
                                ) : (
                                    <div className="max-w-md">
                                        <InteractionComponent />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Footer Stats & Learnings */}
                    {(activeMetrics || activeLearnings) && (
                        <div className="grid lg:grid-cols-3 gap-8 border-t-8 border-[var(--text-primary)] pt-16">
                            {activeMetrics && (
                                <div className="space-y-8 lg:col-span-1">
                                    <h4 className="font-mono text-xl uppercase font-black">Data_Output</h4>
                                    {activeMetrics.map((m, i) => (
                                        <div key={i} className="bg-[var(--text-primary)] text-[var(--bg-void)] p-6">
                                            <div className="text-5xl font-black tracking-tighter mb-2">{m.value}</div>
                                            <div className="font-mono text-sm uppercase font-bold">{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeLearnings && (
                                <div className="lg:col-span-2 border-4 border-[var(--text-primary)] p-8 md:p-16 flex flex-col justify-center bg-[var(--bg-surface)]">
                                    <Slash className="text-[#FF3B30] w-16 h-16 mb-8" />
                                    <p className="text-3xl md:text-5xl font-black italic uppercase leading-none text-[var(--text-primary)]">
                                        "{activeLearnings}"
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                </section>
            </main>
        </div>
    );
};

export default BrutalistDetail;
