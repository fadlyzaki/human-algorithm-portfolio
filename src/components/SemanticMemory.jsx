```
import React, { useState, useEffect, useRef } from 'react';
import { Search, Database, Cpu, Sparkles, Command, Zap, FileText, Share2, AlertCircle, Activity } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const KNOWLEDGE_BASE = [
    {
        id: 'phil_01',
        queries: ['philosophy', 'design style', 'approach', 'what is human algorithm', 'my design philosophy', 'design'],
        answer: "My core philosophy is 'Human-Algorithm Symbiosis'. Systems should be rigorously logical and efficient (The Algorithm), but the interface must be empathetic, forgiving, and organic (The Human). I build tools that feel like extensions of intent, not just hurdles to a goal.",
        confidence: 0.98,
        sources: ['/core/principles.md', '/manifesto/v2.pdf']
    },
    {
        id: 'gap_02',
        queries: ['gap', 'career break', '2023', 'hiatus', 'shutdown', 'why the career gap?'],
        answer: "Retrieving 'Career_Break' node... It wasn't a gap; it was a scheduled system reboot. I spent that time refactoring my core dependencies: mental health, creative purpose, and technical skill. I am now running on a much more resilient kernel.",
        confidence: 0.96,
        sources: ['/logs/system_restore.log']
    },
    {
        id: 'conflict_03',
        queries: ['conflict', 'disagreement', 'team', 'collaboration', 'conflict resolution'],
        answer: "I run a 'Consensus_Protocol'. I assume positive intent, isolate the variable causing friction (usually a misaligned requirement), and patch it with open communication. If that fails, I escalate to a 'Rubber Duck Debugging' session (or just coffee).",
        confidence: 0.92,
        sources: ['/protocols/soft_skills.json']
    },
    {
        id: 'stack_04',
        queries: ['stack', 'tech', 'tools', 'react', 'code', 'tech stack'],
        answer: "My primary dependencies are React, Tailwind, and Node.js. However, I am language-agnostic. Give me documentation and a weekend, and I can compile almost any syntax. I prioritize 'First Principles' over specific frameworks.",
        confidence: 0.99,
        sources: ['/sys/dependencies.lock']
    }
];

const FALLBACK_RESPONSE = {
    answer: "Input parameter not indexed. I am a simulated consciousness with access to specific nodes: 'Philosophy', 'History', and 'Tech Stack'. Please refine your query.",
    confidence: 0.15,
    sources: ['/sys/kernel/null_pointer']
};

const SemanticMemory = () => {
    const { isDark } = useTheme();
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState('idle'); // idle, searching, streaming, done
    const [response, setResponse] = useState('');
    const [activeResult, setActiveResult] = useState(null);
    const responseRef = useRef(null);

    const themeStyles = {
        '--bg-panel': isDark ? '#111' : '#F9FAFB',
        '--border-panel': isDark ? '#333' : '#E5E7EB',
        '--accent-color': isDark ? '#10B981' : '#059669', // Emerald
        '--text-primary': isDark ? '#E5E7EB' : '#1F2937',
        '--text-secondary': isDark ? '#9CA3AF' : '#6B7280',
    };

    const handleSearch = (q) => {
        if (!q.trim()) return;
        setStatus('searching');
        setResponse('');
        setActiveResult(null);

        // Simulate Network/Processing Latency
        setTimeout(() => {
            const lowerQ = q.toLowerCase();
            const match = KNOWLEDGE_BASE.find(k => k.queries.some(key => lowerQ.includes(key))) || FALLBACK_RESPONSE;

            setActiveResult(match);
            setStatus('streaming');
        }, 1200);
    };

    // Streaming Effect
    useEffect(() => {
        if (status === 'streaming' && activeResult) {
            let i = 0;
            const text = activeResult.answer;
            const interval = setInterval(() => {
                setResponse(text.substring(0, i + 1));
                i++;
                if (i === text.length) {
                    clearInterval(interval);
                    setStatus('done');
                }
            }, 30); // Typing speed
            return () => clearInterval(interval);
        }
    }, [status, activeResult]);

    return (
        <div style={themeStyles} className="w-full font-mono text-sm bg-[var(--bg-panel)] border border-[var(--border-panel)] rounded-xl overflow-hidden shadow-2xl relative">

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-panel)] bg-[var(--bg-panel)] z-10 relative">
                <div className="flex items-center gap-3">
                    <div className={`p - 2 rounded - md transition - colors ${ status === 'searching' ? 'bg-[var(--accent-color)] text-white animate-pulse' : 'bg-[var(--border-panel)] text-[var(--text-secondary)]' } `}>
                        <Database size={16} />
                    </div>
                    <div>
                        <h3 className="text-[var(--text-primary)] font-bold tracking-tight flex items-center gap-2">
                            SEMANTIC_MEMORY_CORE
                            {status === 'searching' && <span className="text-[10px] text-[var(--accent-color)] animate-ping">●</span>}
                        </h3>
                        <span className="text-[var(--text-secondary)] text-[10px] uppercase tracking-wider">RAG_Index_v4.2 // Vector_Embeddings</span>
                    </div>
                </div>
                <div className="flex gap-4 text-[10px] text-[var(--text-secondary)]">
                    <span className="flex items-center gap-1"><Cpu size={12} /> IDLE_USAGE: 2%</span>
                    <span className="flex items-center gap-1"><Zap size={12} /> MEM: 128MB</span>
                </div>
            </div>

            {/* MAIN DISPLAY */}
            <div className="p-6 md:p-8 min-h-[300px] flex flex-col relative">

                {/* BACKGROUND ANIMATION (Searching) */}
                {status === 'searching' && (
                    <div className="absolute inset-0 bg-[var(--bg-panel)] z-20 flex flex-col items-center justify-center gap-4">
                        <div className="relative w-16 h-16">
                            <div className="absolute inset-0 border-4 border-[var(--border-panel)] rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-t-[var(--accent-color)] rounded-full animate-spin"></div>
                        </div>
                        <div className="text-[var(--accent-color)] text-xs animate-pulse">Scanning Vector Space...</div>
                        <div className="font-mono text-[10px] text-[var(--text-secondary)] max-w-xs text-center opacity-70">
                            Embedding: [0.02, -0.41, 0.99, ...]<br />
                            Nearest Neighbors: 4 found
                        </div>
                    </div>
                )}

                {/* CONTENT AREA */}
                <div className="flex-1 space-y-8 z-10">

                    {/* 1. QUERY INPUT */}
                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
                            <input
                                type="text"
                                placeholder="Ask me anything... (e.g. 'What is your design philosophy?')"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
                                className="w-full bg-[var(--bg-panel)] border border-[var(--border-panel)] rounded-full py-3 pl-12 pr-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-all placeholder:opacity-50"
                            />
                            <button
                                onClick={() => handleSearch(query)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[var(--border-panel)] rounded-full text-[var(--text-primary)] hover:bg-[var(--accent-color)] hover:text-white transition-colors"
                            >
                                <Command size={14} />
                            </button>
                        </div>

                        {/* SUGGESTED CHIPS */}
                        {status === 'idle' && (
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {["My Design Philosophy", "Why the career gap?", "Tech Stack", "Conflict Resolution"].map(q => (
                                    <button
                                        key={q}
                                        onClick={() => { setQuery(q); handleSearch(q); }}
                                        className="text-xs px-3 py-1.5 border border-[var(--border-panel)] rounded-full text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all hover:bg-[var(--accent-color)]/5"
                                    >
                                        "{q}"
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 2. RESPONSE AREA */}
                    {(status === 'streaming' || status === 'done') && (
                        <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="shrink-0 pt-1">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <Sparkles size={14} className="text-white" />
                                </div>
                            </div>
                            <div className="space-y-4 w-full">
                                <div className="prose prose-invert max-w-none text-[var(--text-primary)] leading-relaxed text-sm md:text-base">
                                    {response}
                                    {status === 'streaming' && <span className="inline-block w-2 h-4 bg-[var(--accent-color)] ml-1 animate-pulse"></span>}
                                </div>

                                {/* METADATA FOOTER */}
                                {status === 'done' && (
                                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border-panel)] mt-4">
                                        <div className="flex items-center gap-2 text-xs text-[var(--accent-color)] bg-[var(--accent-color)]/10 px-2 py-1 rounded">
                                            <Activity size={12} />
                                            Context Score: {(activeResult?.confidence * 100).toFixed(1)}%
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                                            <FileText size={12} />
                                            Sources:
                                            {activeResult?.sources.map(s => (
                                                <span key={s} className="underline decoration-dotted hover:text-[var(--text-primary)] cursor-help" title="Mock source reference">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* DECORATIVE ELEMENTS */}
                <div className="absolute bottom-4 right-4 text-[10px] text-[var(--text-secondary)] opacity-30 pointer-events-none">
                    SYS.MEM <br /> 0x829A
                </div>
            </div>
        </div>
    );
};

export default SemanticMemory;
