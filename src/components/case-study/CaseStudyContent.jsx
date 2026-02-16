
import React from 'react';
import { Sun, Moon, ArrowRight, ShieldAlert, Monitor, FileText, ScanEye, Globe, AlertTriangle, Lightbulb, BarChart, Rocket, Search } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useHandCursor } from '../../context/HandCursorContext';
import BackButton from '../BackButton';
import SEO from '../SEO';
import ProjectCard from '../ProjectCard';
import ZoomableImage from '../ZoomableImage';
import AiryDiagram from '../AiryDiagram';
import AIBrainstorm from '../AIBrainstorm';

const CaseStudyContent = ({ project, parentCluster }) => {
    const { t, language, toggleLanguage } = useLanguage();
    const { isDark, setIsDark } = useTheme();
    const { isGestureMode, toggleGestureMode } = useHandCursor();

    // Resolve Case Data (Bilingual)
    const isId = language === 'id';
    const rawCaseData = project.caseStudy || {
        locked: true,
        memo: "CONFIDENTIAL DATA NOT AVAILABLE",
        metrics: []
    };

    const caseData = (isId && project.caseStudy_id) ? project.caseStudy_id : rawCaseData;

    const themeStyles = {
        '--brand': parentCluster.brandColor || 'var(--accent-amber)'
    };

    return (
        <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--brand)] selection:text-white transition-colors duration-500">
            <SEO
                title={isId ? (project.title_id || project.title) : project.title}
                description={caseData.challenge || (isId ? (project.details_id?.problem || project.details.problem) : project.details.problem)}
            />

            {/* AMBIENT MOOD BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
                style={{ background: `radial-gradient(circle at 50% 0%, ${themeStyles['--brand']} 0%, transparent 70%)` }}>
            </div>

            {/* Navbar Mock */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[var(--bg-void)]/80 backdrop-blur-md border-b border-[var(--border-color)] transition-all duration-500">
                <BackButton to={`/work/${parentCluster.id}`} label="Close" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-[var(--brand)] font-mono text-xs tracking-widest hidden md:flex">
                    <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                    CASE_FILE_{project.id.toUpperCase()}
                </div>

                <div className="flex items-center gap-6">

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleGestureMode}
                            className={`transition-colors p-1 ${isGestureMode ? 'text-[var(--brand)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                            title="Toggle Hand Tracking"
                        >
                            <ScanEye size={18} />
                        </button>

                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors p-1"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>

                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            title="Switch Language"
                        >
                            <Globe size={16} />
                            <span className="font-mono text-xs uppercase tracking-widest">{language}</span>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 w-full pb-32">

                {/* 1. HERO: FULL BLEED HOOK */}
                <section className="flex flex-col items-center relative overflow-hidden px-6 text-center pt-24 md:pt-32 pb-20">
                    {/* Technical Illustration Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="w-full h-full opacity-20 grayscale transition-all duration-1000">
                            <ProjectCard type={project.type} expanded={true} id={project.id} showChrome={true} />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-void)] via-[var(--bg-void)]/80 to-[var(--bg-void)]"></div>
                    </div>

                    {/* Content Wrapper */}
                    <div className="relative z-10 w-full flex flex-col items-center">
                        {/* WIP Label for incomplete projects */}
                        {!['stoqo-logistics', 'stoqo-sales'].includes(project.id) && (
                            <div className="mb-6 flex items-center justify-center">
                                <div className="bg-amber-500/10 border border-amber-500/50 text-amber-600 dark:text-amber-400 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
                                    <AlertTriangle size={14} />
                                    <span className="font-mono text-[10px] uppercase tracking-widest">
                                        {t('protected.wip_label') || "Work in Progress"}
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Cinematic Title */}
                        <div className="mb-4">
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--brand)] border-b border-[var(--brand)] pb-2 inline-block">
                                {caseData.snapshot?.tagline || "Confidential Project"}
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-[0.9] tracking-tight max-w-5xl mx-auto">
                            {isId ? (project.title_id || project.title) : project.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto font-light leading-relaxed mb-16">
                            {caseData.challenge || project.details.problem}
                        </p>

                        {/* Hero Visual Hook */}
                        <div className="w-full max-w-6xl aspect-[21/9] bg-black dark:bg-white rounded-2xl border border-[var(--border-color)] shadow-2xl relative overflow-hidden group">
                            <ProjectCard type={project.type} expanded={true} id={project.id} showChrome={true} image={null} priority={true} />
                            <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase text-white dark:text-black bg-black/80 dark:bg-white/80 border border-[var(--border-color)] px-3 py-2 rounded shadow-xl hidden">Fig. 1.0 — System Architecture</div>
                        </div>
                    </div>

                </section>


                {/* 2. CONTEXT STRIP */}
                <section className="bg-[var(--bg-card)] border-y border-[var(--border-color)] py-12 relative overflow-hidden">
                    {/* Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-[10rem] font-black text-black/5 pointer-events-none select-none whitespace-nowrap z-0">
                        TOP SECRET
                    </div>

                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { label: "Client", value: caseData.context?.client || "Confidential" },
                            { label: "Role", value: caseData.context?.role || project.role },
                            { label: "Timeline", value: caseData.context?.timeline || project.timeline },
                            { label: "Team", value: caseData.context?.team || "Product Team" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-2 opacity-70">{item.label}</span>
                                <span className="font-medium text-lg font-serif">{item.value}</span>
                            </div>
                        ))}
                    </div>


                </section>

                {/* 3. UNIFIED DESIGN PROCESS FRAMEWORK */}
                {/* Renders the 5-step process if 'designProcess' data exists. Fallback to legacy layout if not. */}
                {caseData.designProcess ? (
                    <section className="max-w-6xl mx-auto px-6 py-32 space-y-32">

                        {/* Header */}
                        <div className="flex items-baseline justify-between border-b border-[var(--border-color)] pb-6 mb-16">
                            <h2 className="text-4xl font-serif italic">{t('protected.process_title') || "The Process"}</h2>
                            <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t('protected.process_subtitle') || "Evolution of Thought"}</span>
                        </div>

                        {/* Steps Loop */}
                        {caseData.designProcess.map((step, i) => {
                            // Step Configuration based on Type
                            const isOdd = i % 2 !== 0;
                            const stepNumber = `0${i + 1}`;

                            return (
                                <div key={i} className={`relative ${step.type === 'insight' || step.type === 'measure' ? 'max-w-4xl mx-auto' : ''}`}>
                                    {/* Connecting Line (Desktop) */}
                                    {i !== caseData.designProcess.length - 1 && (
                                        <div className={`absolute left-4 md:left-1/2 top-20 bottom-[-128px] w-px bg-gradient-to-b from-[var(--border-color)] to-transparent -translate-x-1/2 z-0 hidden md:block opacity-50`}></div>
                                    )}

                                    {/* RENDER: RESEARCH / SHIP (Standard Text + Image Layout) */}
                                    {(step.type === 'research' || step.type === 'ship' || step.type === 'design') && (
                                        <div className={`flex flex-col md:flex-row gap-12 items-center relative z-10 ${isOdd ? 'md:flex-row-reverse' : ''}`}>

                                            {/* Visual Evidence */}
                                            <div className="w-full md:w-1/2 group">
                                                <div className={`relative bg-[var(--bg-card)] border border-[var(--border-color)] p-2 shadow-2xl transform transition-transform duration-500 hover:scale-[1.01] ${isOdd ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'}`}>
                                                    {/* Tape/Pin */}
                                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--brand)] shadow-lg border-2 border-[var(--bg-card)] z-20 opacity-80"></div>

                                                    <div className="min-h-[250px] bg-[var(--bg-surface)] overflow-hidden relative border border-[var(--border-color)]/50 flex items-center justify-center">
                                                        {step.image && step.image.startsWith('airy:') ? (
                                                            <div className="w-full h-[300px] bg-[var(--bg-surface)] p-4">
                                                                <AiryDiagram type={step.image.split(':')[1]} />
                                                            </div>
                                                        ) : step.image ? (
                                                            <ZoomableImage src={step.image} alt={step.title} className="max-w-full max-h-[400px] object-cover" />
                                                        ) : (
                                                            <div className="p-12 opacity-10">
                                                                {step.type === 'ship' ? <Rocket size={48} /> : <Search size={48} />}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="mt-2 flex justify-between items-center px-2">
                                                        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">{step.type} EVIDENCE</span>
                                                        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] opacity-50">REF: {stepNumber}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Narrative */}
                                            <div className={`w-full md:w-1/2 ${isOdd ? 'text-right md:pr-12' : 'md:pl-12'}`}>
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-[var(--brand)] text-[var(--brand)] flex items-center justify-center font-mono text-xs`}>
                                                        {i + 1}
                                                    </div>
                                                    <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t(`process.steps.${step.type}.title`) || step.type}</span>
                                                </div>
                                                <h3 className="text-3xl font-bold font-serif mb-6">{step.title}</h3>
                                                <div className="prose prose-sm dark:prose-invert font-mono text-[var(--text-secondary)] leading-relaxed">
                                                    {step.desc}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* RENDER: INSIGHT (Highlight Card) */}
                                    {step.type === 'insight' && (
                                        <div className="bg-[var(--bg-card)] border border-[var(--brand)]/30 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center group hover:border-[var(--brand)] transition-colors">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--brand)]"></div>
                                            <Lightbulb size={32} className="mx-auto text-[var(--brand)] mb-6" />
                                            <h3 className="text-2xl md:text-3xl font-serif italic mb-6 leading-tight text-[var(--text-primary)]">
                                                "{step.title}"
                                            </h3>
                                            <p className="text-[var(--text-secondary)] font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                                                {step.desc}
                                            </p>
                                            <div className="mt-8 flex justify-center">
                                                <span className="px-3 py-1 bg-[var(--brand)]/10 text-[var(--brand)] text-[10px] font-mono uppercase tracking-widest rounded-full">
                                                    Key Insight
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* RENDER: MEASURE (Metrics Grid) */}
                                    {step.type === 'measure' && (
                                        <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden">
                                            <div className="p-8 md:p-12 text-center border-b border-[var(--border-color)]">
                                                <div className="max-w-2xl mx-auto">
                                                    <h3 className="text-2xl font-bold font-serif mb-4 flex items-center justify-center gap-3">
                                                        <BarChart size={24} className="text-[var(--accent-red)]" />
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-[var(--text-secondary)] mb-0 leading-relaxed">
                                                        {step.desc}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Render Metrics Grid if data exists */}
                                            {caseData.metrics && caseData.metrics.length > 0 && (
                                                <div className="mx-6 mb-8 md:mx-12 md:mb-12 border border-[var(--border-color)] rounded-lg overflow-hidden flex flex-col md:flex-row bg-[var(--bg-surface)]">
                                                    {caseData.metrics.map((m, i) => (
                                                        <div key={i} className="flex-1 p-6 md:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-card)] transition-colors group">
                                                            <div className="text-2xl md:text-4xl font-mono font-bold tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--brand)] transition-colors mb-2 break-words max-w-full leading-tight">{m.value}</div>
                                                            <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] opacity-70">{m.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                </div>
                            );
                        })}

                    </section>
                ) : (
                    /* LEGACY LAYOUT - Keep existing structure for backward compatibility */
                    <>
                        {/* 3. PROCESS: FILM STRIP */}
                        <section className="max-w-6xl mx-auto px-6 py-32">
                            <div className="flex items-baseline justify-between mb-16 border-b border-[var(--border-color)] pb-6">
                                <h2 className="text-4xl font-serif italic">{t('protected.process_title') || "The Process"}</h2>
                                <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t('protected.process_subtitle') || "Evolution of Thought"}</span>
                            </div>

                            <div className="space-y-24 relative">
                                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)] -translate-x-1/2 hidden md:block z-0"></div>

                                {caseData.process && caseData.process.map((step, i) => (
                                    <div key={i} className={`flex flex-col md:flex-row gap-12 items-center relative z-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="w-full md:w-1/2 relative group">
                                            <div className="relative bg-[var(--bg-card)] border border-[var(--border-color)] p-2 shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] hover:rotate-0 rotate-1">
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500/80 shadow-lg border-2 border-white/20 z-20"></div>
                                                <div className="min-h-[200px] max-h-[400px] bg-[var(--bg-surface)] overflow-hidden relative border border-[var(--border-color)]/50 flex items-center justify-center">
                                                    {step.image && step.image.startsWith('airy:') ? (
                                                        <div className="w-full h-[300px] bg-[var(--bg-surface)] p-4">
                                                            <AiryDiagram type={step.image.split(':')[1]} />
                                                        </div>
                                                    ) : step.image ? (
                                                        <ZoomableImage
                                                            src={step.image}
                                                            alt={step.title}
                                                            className="max-w-full max-h-[380px] object-contain"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-[200px] flex items-center justify-center opacity-20 bg-[var(--bg-card)]">
                                                            <Activity size={48} />
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                                                </div>

                                                <div className="mt-2 flex justify-between items-center px-2">
                                                    <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">{t('protected.evidence') || "EVIDENCE"} #{i + 1}</span>
                                                    <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)] opacity-50">CONFIDENTIAL</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-void)] border border-[var(--brand)] text-[var(--brand)] font-mono text-xs z-20 relative">
                                            {i + 1}
                                        </div>

                                        <div className={`w-full md:w-1/2 ${i % 2 === 1 ? 'text-right md:pr-12' : 'md:pl-12'}`}>
                                            <div className={`inline-block font-mono text-xs text-[var(--brand)] border border-[var(--brand)] px-3 py-1 rounded-full mb-4 opacity-80`}>
                                                {t('protected.step') || "STEP"} 0{i + 1}
                                            </div>
                                            <h3 className="text-3xl font-bold font-serif mb-6">{step.title}</h3>
                                            <div className={`prose prose-sm dark:prose-invert font-mono text-[var(--text-secondary)] leading-relaxed ${i % 2 === 1 ? 'ml-auto' : ''}`}>
                                                {step.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. KEY INSIGHTS (Legacy) */}
                        {caseData.insights && (
                            <section className="bg-[var(--bg-card)] border-y border-[var(--border-color)] py-32 relative overflow-hidden">
                                <div className="absolute -right-20 -top-20 w-96 h-96 bg-[var(--brand)] opacity-5 rounded-full blur-3xl"></div>

                                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                                    <Sun size={32} className="mx-auto text-[var(--brand)] mb-8" />
                                    <h2 className="text-3xl md:text-5xl font-serif italic mb-16 leading-tight">
                                        {t('protected.insights_title') || "\"We realized that clarity was more valuable than features.\""}
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                                        {caseData.insights.map((insight, i) => (
                                            <div key={i} className="border-l-2 border-[var(--brand)] pl-8 py-2">
                                                <h3 className="font-bold uppercase tracking-widest text-xs mb-3 text-[var(--brand)]">{insight.title}</h3>
                                                <p className="text-lg text-[var(--text-primary)] leading-relaxed">{insight.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}
                    </>
                )}

                {/* 5. SOLUTION (Unified - Renders for both layouts) */}
                <section className="max-w-6xl mx-auto px-6 py-32">
                    <div className="flex items-baseline justify-between mb-16">
                        <h2 className="text-4xl font-serif italic">{t('protected.solution_title') || "The Solution"}</h2>
                        <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t('protected.solution_subtitle') || "Interface Design"}</span>
                    </div>

                    <div className="space-y-32">
                        {caseData.solution ? (
                            <>
                                {/* 1. Interactive Prototypes (Grid or Centered) */}
                                {caseData.solution.filter(s => s.componentId).length > 1 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                                        {caseData.solution.filter(s => s.componentId).map((sol, i) => (
                                            <div key={`int-${i}`} className="flex flex-col items-center">
                                                <div className="w-full max-w-[320px] aspect-[9/19] bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] relative shadow-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
                                                    <div className="absolute inset-0 w-full h-full bg-[var(--bg-surface)]">
                                                        <ProjectCard id={sol.componentId} expanded={true} showChrome={true} />
                                                    </div>
                                                </div>
                                                <div className="mt-8 text-center px-4 max-w-[320px]">
                                                    <div className="font-mono text-xs text-[var(--brand)] mb-2 uppercase tracking-widest font-bold">
                                                        {t('protected.live_prototype') || "Interactive Prototype"}
                                                    </div>
                                                    <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                                        {sol.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    /* Single Item Centered Layout */
                                    caseData.solution.filter(s => s.componentId).map((sol, i) => (
                                        <div key={`int-${i}`} className="flex flex-col items-center mb-24 last:mb-12">
                                            <div className="w-full md:w-1/2 aspect-[9/19] max-w-sm mx-auto bg-[var(--bg-card)] rounded-[2.5rem] border border-[var(--border-color)] relative shadow-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
                                                <div className="absolute inset-0 w-full h-full bg-[var(--bg-surface)]">
                                                    <ProjectCard id={sol.componentId} expanded={true} showChrome={true} />
                                                </div>
                                            </div>
                                            <div className="mt-10 text-center max-w-2xl mx-auto px-4">
                                                <div className="font-mono text-xs text-[var(--brand)] mb-4 uppercase tracking-widest font-bold">
                                                    {t('protected.live_prototype') || "Interactive Prototype"}
                                                </div>
                                                <h3 className="text-3xl font-bold mb-4">{sol.title}</h3>
                                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                                    {sol.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )}

                                {/* 2. Static Exhibits (Grid) */}
                                {caseData.solution.filter(s => !s.componentId).length > 0 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16 border-t border-[var(--border-color)] pt-16">
                                        {caseData.solution.filter(s => !s.componentId).map((sol, i) => (
                                            <div key={`static-${i}`} className="flex flex-col group">
                                                <div className="aspect-video bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] relative shadow-lg overflow-hidden mb-6 transition-all duration-300 group-hover:shadow-xl group-hover:border-[var(--brand)]/30">
                                                    {sol.image && sol.image.startsWith('airy:') ? (
                                                        <div className="absolute inset-0 w-full h-full bg-[var(--bg-surface)] p-6">
                                                            <AiryDiagram type={sol.image.split(':')[1]} />
                                                        </div>
                                                    ) : sol.image ? (
                                                        <ZoomableImage
                                                            src={sol.image}
                                                            alt={sol.title}
                                                            containerClassName="absolute inset-0 w-full h-full"
                                                            className="w-full h-full object-contain bg-black/5 dark:bg-black/50"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                                            <Monitor size={48} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-mono text-xs text-[var(--text-secondary)] mb-3 uppercase tracking-widest flex items-center gap-2">
                                                        <span className="w-6 h-[1px] bg-[var(--text-secondary)] opacity-50"></span>
                                                        {t('protected.exhibit') || "Exhibit"} {String.fromCharCode(65 + i)}
                                                    </div>
                                                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--brand)] transition-colors">{sol.title}</h3>
                                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                                        {sol.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="p-12 border border-dashed border-[var(--border-color)] text-center text-[var(--text-secondary)] font-mono">
                                {t('protected.classified_arch') || "[ CLASSIFIED SYSTEM ARCHITECTURE ]"}
                            </div>
                        )}
                    </div>
                </section>

                {/* 6. IMPACT & OUTCOMES - Standardized Lumina Style */}
                {!caseData.designProcess && caseData.metrics && caseData.metrics.length > 0 && (
                    <section className="max-w-6xl mx-auto px-6 py-32">
                        <div className="flex items-baseline justify-between mb-16 border-b border-[var(--border-color)] pb-6">
                            <h2 className="text-4xl font-serif italic">{t('protected.impact_title') || "Impact & Outcomes"}</h2>
                            <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">{t('protected.impact_subtitle') || "Measurable Results"}</span>
                        </div>

                        <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm">
                            <div className="flex flex-col md:flex-row">
                                {caseData.metrics.map((m, i) => (
                                    <div key={i} className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-card)] transition-colors group">
                                        <div className="text-3xl md:text-5xl font-mono font-bold tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--brand)] transition-colors mb-4 break-words max-w-full leading-tight">
                                            {m.value}
                                        </div>
                                        <div className="text-xs md:text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)] opacity-70">
                                            {m.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 7. AI BRAINSTORM (HUMAN + AI COLLABORATION) */}
                {(caseData.aiHypotheses || caseData.aiHypothesis) && (
                    <AIBrainstorm
                        hypotheses={caseData.aiHypotheses || [caseData.aiHypothesis]}
                        t={t}
                    />
                )}

                {/* 8. TAKEAWAYS (ARCHITECT'S NOTE) */}
                <section className="max-w-3xl mx-auto px-6 py-40 text-center">
                    <FileText className="mx-auto text-[var(--text-secondary)] mb-8" size={32} />
                    <h4 className="font-mono text-xs uppercase mb-8 opacity-50 tracking-[0.2em]">{t('protected.architect_debrief') || "// Architect's Debrief"}</h4>
                    <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[var(--text-primary)]">
                        "{caseData.learnings || caseData.memo || "Confidential"}"
                    </p>
                    <div className="mt-12 w-24 h-1 bg-[var(--brand)] mx-auto"></div>
                </section>

                {/* FOOTER */}
                <footer className="border-t border-[var(--border-color)] py-12 text-center opacity-40 hover:opacity-100 transition-opacity">
                    <p className="font-mono text-[10px] uppercase tracking-widest">
                        Human By Design Portfolio · Fadly Uzzaki 🧢 © 2025-2026
                    </p>
                </footer>

            </main>
        </div >
    );

};

export default CaseStudyContent;
