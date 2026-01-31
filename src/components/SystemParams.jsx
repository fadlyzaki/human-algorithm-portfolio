import React, { useState } from 'react';
import { Settings, Sliders, Activity, Cpu, Zap, RotateCcw, Copy, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SystemParams = ({ config, setConfig }) => {
    const { isDark } = useTheme();
    const [temperature, setTemperature] = useState(0.7);
    const [topP, setTopP] = useState(0.9);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(config);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const themeStyles = {
        '--bg-panel': isDark ? '#1C1C1C' : '#F9FAFB',
        '--border-panel': isDark ? '#333333' : '#E5E7EB',
        '--text-label': isDark ? '#A1A1AA' : '#6B7280',
        '--text-value': isDark ? '#E5E7EB' : '#1F2937',
        '--accent-color': isDark ? '#10B981' : '#059669', // Emerald
    };

    return (
        <div style={themeStyles} className="w-full font-mono text-sm">

            {/* HEADER: MODEL META */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-[var(--border-panel)] pb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-[var(--accent-color)] bg-opacity-20 rounded-md">
                        <Cpu size={18} className="text-[var(--accent-color)]" />
                    </div>
                    <div>
                        <h3 className="text-[var(--text-value)] font-bold tracking-tight">MODEL_CONFIG_V2.5</h3>
                        <span className="text-[var(--text-label)] text-xs">Human-Algorithm // FadlyZaki-FineTuned</span>
                    </div>
                </div>

                <div className="flex gap-6 text-xs text-[var(--text-label)]">
                    <div className="flex items-center gap-2">
                        <Zap size={14} className="text-yellow-500" />
                        <span>Tokens: 8k ctx</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Activity size={14} className="text-blue-500" />
                        <span>Latency: 42ms</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN: HYPERPARAMETERS */}
                <div className="lg:col-span-1 space-y-6">
                    <div>
                        <div className="flex justify-between mb-2 text-xs">
                            <span className="text-[var(--text-label)]">Temperature (Creativity)</span>
                            <span className="text-[var(--accent-color)]">{temperature.toFixed(1)}</span>
                        </div>
                        <input
                            type="range"
                            min="0" max="1" step="0.1"
                            value={temperature}
                            onChange={(e) => setTemperature(parseFloat(e.target.value))}
                            className="w-full h-1 bg-[var(--border-panel)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-color)]"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2 text-xs">
                            <span className="text-[var(--text-label)]">Top P (Focus)</span>
                            <span className="text-[var(--accent-color)]">{topP.toFixed(1)}</span>
                        </div>
                        <input
                            type="range"
                            min="0" max="1" step="0.1"
                            value={topP}
                            onChange={(e) => setTopP(parseFloat(e.target.value))}
                            className="w-full h-1 bg-[var(--border-panel)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-color)]"
                        />
                    </div>

                    <div className="p-4 bg-[var(--bg-panel)] border border-[var(--border-panel)] rounded-lg space-y-3">
                        <div className="flex items-center gap-2 text-[var(--text-value)] text-xs font-bold uppercase tracking-wider">
                            <Settings size={14} />
                            <span>System Constraints</span>
                        </div>
                        <div className="space-y-2">
                            {['Respect User Context', 'Optimized for Clarity', 'Empathy Layer Active'].map((item) => (
                                <div key={item} className="flex items-center gap-2 text-xs text-[var(--text-label)]">
                                    <span className="w-1.5 h-1.5 bg-[var(--accent-color)] rounded-full"></span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: SYSTEM PROMPT EDITOR */}
                <div className="lg:col-span-2 flex flex-col h-full min-h-[300px] border border-[var(--border-panel)] rounded-lg overflow-hidden bg-[var(--bg-panel)] shadow-sm">
                    {/* Editor Toolbar */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border-panel)] bg-[var(--bg-panel)]">
                        <span className="text-[10px] uppercase tracking-widest text-[var(--text-label)]">System_Prompt.json</span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleCopy}
                                className="p-1.5 text-[var(--text-label)] hover:text-[var(--accent-color)] transition-colors rounded hover:bg-[var(--border-panel)]"
                                title="Copy Config"
                            >
                                {copied ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                            <button
                                onClick={() => setConfig(config)} // Reset function placeholder if needed
                                className="p-1.5 text-[var(--text-label)] hover:text-[var(--text-value)] transition-colors rounded hover:bg-[var(--border-panel)]"
                                title="Reset"
                            >
                                <RotateCcw size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Code Field */}
                    <div className="relative flex-1 group">
                        <div className="absolute top-0 left-0 bottom-0 w-10 border-r border-[var(--border-panel)] bg-[var(--bg-panel)] text-[var(--text-label)] text-[10px] leading-6 flex flex-col items-end pr-2 pt-2 opacity-50 select-none">
                            {Array.from({ length: 12 }).map((_, i) => <div key={i}>{i + 1}</div>)}
                        </div>
                        <textarea
                            value={config}
                            onChange={(e) => setConfig(e.target.value)}
                            className="w-full h-full bg-transparent p-2 pl-12 text-[var(--accent-color)] font-mono text-sm leading-6 resize-none focus:outline-none selection:bg-[var(--accent-color)] selection:text-white"
                            spellCheck="false"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SystemParams;
