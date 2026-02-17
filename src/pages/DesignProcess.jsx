import React, { useState } from 'react';
import {
    Search, Lightbulb, PenTool, Rocket, BarChart,
    ArrowRight, ArrowLeft, ScanEye, Sun, Moon, Globe,
    ChevronDown, GitBranch, Cpu, Database, Network,
    Layers, Command, Zap, Target, FileText, MousePointer2,
    CheckCircle, AlertTriangle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import ScrollProgressBar from '../components/ScrollProgressBar';
import AiryDiagram from '../components/AiryDiagram';

const DesignProcess = () => {
    const { isDark, setIsDark } = useTheme();
    const themeStyles = useThemeStyles();
    const { t, language, toggleLanguage } = useLanguage();
    const { isGestureMode, toggleGestureMode } = useHandCursor();

    // --- DATA: SYSTEMATIC DESIGN FRAMEWORK ---
    const processSteps = [
        {
            id: '01',
            phase: 'Discovery & Deconstruction',
            objective: 'Minimize ambiguity and map the problem space.',
            icon: Search,
            airyType: 'radar',
            color: 'text-[var(--accent-blue)]',
            bg: 'bg-[var(--accent-blue)]',
            border: 'border-[var(--accent-blue)]',
            inputs: [
                'Business Strategy',
                'Historical Analytics',
                'Competitor landscape',
                'Stakeholder Interviews'
            ],
            outputs: [
                'Problem Statement',
                'User Personas & Archetypes',
                'Current-State Journey Map',
                'Success Metrics (KPIs)'
            ],
            risk: 'Solving the wrong problem due to assumption bias.',
            tools: ['Mixpanel', 'Dovetail', 'Figma Jam']
        },
        {
            id: '02',
            phase: 'Synthesis & Strategy',
            objective: 'Define the architectural direction and functional requirements.',
            icon: Lightbulb,
            airyType: 'venn',
            color: 'text-[var(--accent-amber)]',
            bg: 'bg-[var(--accent-amber)]',
            border: 'border-[var(--accent-amber)]',
            inputs: [
                'Raw User Data',
                'Technical Constraints',
                'Market Trends'
            ],
            outputs: [
                'Information Architecture',
                'User Flow Diagrams',
                'Low-Fidelity Wireframes',
                'Design Principles'
            ],
            risk: 'Scope creep and feature bloat.',
            tools: ['Notion', 'Whimsical', 'Linear']
        },
        {
            id: '03',
            phase: 'Interaction & Craft',
            objective: 'Translate logic into intuitive, accessible interfaces.',
            icon: PenTool,
            airyType: 'architecture',
            color: 'text-[var(--accent-purple)]',
            bg: 'bg-[var(--accent-purple)]',
            border: 'border-[var(--accent-purple)]',
            inputs: [
                'Wireframes',
                'Design System Tokens',
                'Accessibility Guidelines'
            ],
            outputs: [
                'High-Fidelity Prototypes',
                'Motion Choreography',
                'Component Documentation',
                'Micro-Interaction Specs'
            ],
            risk: 'Usability friction and cognitive overload.',
            tools: ['Figma', 'Protopie', 'Rive']
        },
        {
            id: '04',
            phase: 'Validation & Iteration',
            objective: 'Verify hypotheses through rigorous testing.',
            icon: Target,
            airyType: 'chart',
            color: 'text-[var(--accent-red)]',
            bg: 'bg-[var(--accent-red)]',
            border: 'border-[var(--accent-red)]',
            inputs: [
                'Interactive Prototypes',
                'Test Scenarios'
            ],
            outputs: [
                'Usability Reports',
                'Heatmaps',
                'Iteration Backlog',
                'Go/No-Go Decision'
            ],
            risk: 'Confirmation bias in testing results.',
            tools: ['Maze', 'UserTesting', 'Hotjar']
        },
        {
            id: '05',
            phase: 'Delivery & Systems',
            objective: 'Standardize and scale the solution.',
            icon: Rocket,
            airyType: 'flow',
            color: 'text-[var(--accent-green)]',
            bg: 'bg-[var(--accent-green)]',
            border: 'border-[var(--accent-green)]',
            inputs: [
                'Final Visuals',
                'QA Feedback'
            ],
            outputs: [
                'Design Tokens (JSON)',
                'React Component Specs',
                'Storybook Documentation',
                'Release Notes'
            ],
            risk: 'Design drift during implementation.',
            tools: ['Storybook', 'Vercel', 'GitHub']
        }
    ];

    return (
        <div
            style={themeStyles}
            className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-blue)] selection:text-[#F4F4F5] transition-colors duration-500 overflow-x-hidden"
        >
            <SEO
                title="The Human Algorithm | System"
                description="A systematic approach to product design: From ambiguity to scalable systems."
            />

            <ScrollProgressBar />

            {/* HEADER */}
            <div className="fixed top-0 left-0 w-full z-50">
                <header className="relative flex justify-between items-center px-6 py-6 bg-[var(--bg-void)]/95 backdrop-blur border-b border-[var(--border-color)]">
                    <BackButton to="/" label="Main Terminal" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] hidden md:block opacity-70">
                        // OPERATING_MANUAL
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={toggleGestureMode} className={`transition-colors ${isGestureMode ? 'text-[var(--accent-red)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'}`}>
                            <ScanEye size={18} />
                        </button>
                        <button onClick={() => setIsDark(!isDark)} className="text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors">
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </header>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 min-h-screen">

                {/* HERO */}
                <section className="mb-32 pt-12">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-[1px] bg-[var(--accent-blue)]"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-blue)]">
                                System V2.1
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-[var(--text-primary)] uppercase leading-[0.9] mb-10 tracking-tighter">
                            Systematic<br />
                            <span className="text-[var(--text-secondary)]">Design Framework</span>
                        </h1>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                                Design is not just visual polish; it is the rigorous architecture of value.
                                My process is a recursive loop of deconstruction, synthesis, interaction, and validation—
                                calibrated to reduce risk and maximize user agency.
                            </p>

                            <div className="font-mono text-xs text-[var(--text-secondary)] space-y-4 border-l border-[var(--border-color)] pl-6">
                                <div className="flex justify-between">
                                    <span className="uppercase tracking-widest">Methodology</span>
                                    <span className="text-[var(--text-primary)]">Human-Centered / Systems-First</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="uppercase tracking-widest">Architecture</span>
                                    <span className="text-[var(--text-primary)]">Atomic Design</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="uppercase tracking-widest">Output</span>
                                    <span className="text-[var(--text-primary)]">Scalable & Accessible</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* THE SYSTEM STACK */}
                <section className="space-y-4">
                    {processSteps.map((step, index) => (
                        <ScrollReveal key={step.id} delay={index * 100}>
                            <div className="group relative bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--text-primary)] transition-all duration-500 rounded-2xl overflow-hidden">

                                {/* Hover Gradient */}
                                <div className={`absolute top-0 left-0 w-1 h-full ${step.bg} transition-all duration-500 group-hover:w-2`}></div>

                                <div className="flex flex-col lg:flex-row">
                                    {/* COL 1: ID & VISUAL */}
                                    <div className="lg:w-1/3 p-8 border-b lg:border-b-0 lg:border-r border-[var(--border-color)] flex flex-col justify-between relative overflow-hidden">
                                        <div className="relative z-10">
                                            <span className={`font-mono text-xs font-bold ${step.color} mb-4 block`}>PHASE_{step.id}</span>
                                            <h3 className="text-3xl font-bold leading-none mb-2">{step.phase}</h3>
                                            <p className="text-[var(--text-secondary)] text-sm">{step.objective}</p>
                                        </div>

                                        <div className="mt-8 relative h-48 w-full bg-[var(--bg-void)]/50 rounded-xl border border-[var(--border-color)]/50 overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center opacity-80 scale-75 group-hover:scale-90 transition-transform duration-700">
                                                <AiryDiagram type={step.airyType} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* COL 2: LOGIC GATE (INPUTS/OUTPUTS) */}
                                    <div className="lg:w-2/3 grid md:grid-cols-2">

                                        {/* INPUTS */}
                                        <div className="p-8 border-b md:border-b-0 md:border-r border-[var(--border-color)]">
                                            <div className="flex items-center gap-2 mb-6 opacity-60">
                                                <Database size={14} />
                                                <span className="font-mono text-[10px] uppercase tracking-widest">System Inputs</span>
                                            </div>
                                            <ul className="space-y-3">
                                                {step.inputs.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--text-secondary)] shrink-0"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
                                                <div className="flex items-center gap-2 mb-2 opacity-60 text-[var(--accent-red)]">
                                                    <AlertTriangle size={14} />
                                                    <span className="font-mono text-[10px] uppercase tracking-widest">Risk Mitigation</span>
                                                </div>
                                                <p className="text-xs font-medium text-[var(--text-primary)] italic">"{step.risk}"</p>
                                            </div>
                                        </div>

                                        {/* OUTPUTS */}
                                        <div className="p-8 bg-[var(--bg-card)]/50">
                                            <div className="flex items-center gap-2 mb-6 opacity-60">
                                                <CheckCircle size={14} />
                                                <span className="font-mono text-[10px] uppercase tracking-widest">Deliverable Outputs</span>
                                            </div>
                                            <ul className="space-y-3">
                                                {step.outputs.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-primary)] font-medium">
                                                        <ArrowRight size={14} className={`mt-0.5 ${step.color} opacity-80`} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-8 flex flex-wrap gap-2">
                                                {step.tools.map((tool, tIdx) => (
                                                    <span key={tIdx} className="px-2 py-1 text-[10px] font-mono border border-[var(--border-color)] rounded text-[var(--text-secondary)] bg-[var(--bg-void)]">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </section>

                {/* FOOTER NOTE */}
                <section className="mt-32 text-center">
                    <ScrollReveal>
                        <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-[0.2em] mb-4">
                            // END_PROTOCOL
                        </p>
                        <h3 className="text-2xl font-serif italic text-[var(--text-primary)]">
                            "The system is the product."
                        </h3>
                    </ScrollReveal>
                </section>

                <section className="mt-20 border-t border-[var(--border-color)] pt-12">
                    <Footer />
                </section>

            </main>
        </div>
    );
};

export default DesignProcess;
