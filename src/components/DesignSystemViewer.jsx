import React, { useState } from 'react';
import {
    Terminal, Type, Grid3X3, Cpu,
    Hash, MoveRight, Layers, Box,
    Activity, ShieldAlert, ShieldCheck
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const DesignSystemViewer = () => {
    const { isDark } = useTheme();
    const [activeSector, setActiveSector] = useState('CHROMATICS');

    const sectors = [
        { id: 'CHROMATICS', label: '01 // CHROMATICS', icon: Hash },
        { id: 'TYPOGRAPHY', label: '02 // TYPOGRAPHY', icon: Type },
        { id: 'COMPONENTS', label: '03 // MODULES', icon: Grid3X3 },
    ];

    return (
        <section className="w-full border-t border-[var(--border-color)] bg-[var(--bg-void)] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
                style={{ backgroundImage: `linear-gradient(${isDark ? '#FFF' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#FFF' : '#000'} 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
            </div>

            <div className="max-w-7xl mx-auto border-x border-[var(--border-color)] bg-[var(--bg-void)]/50 backdrop-blur-sm relative z-10">
                {/* Header Terminal */}
                <div className="border-b border-[var(--border-color)] p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--accent)] text-[var(--bg-void)] font-mono text-[10px] uppercase tracking-widest font-bold">
                            <Terminal size={12} />
                            <span>System_Diagnostic_Mode</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--text-primary)]">
                            DESIGN_KERNEL<span className="text-[var(--accent)]">.SYS</span>
                        </h2>
                        <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest max-w-md">
                            Executing visual language protocols. v3.0.1<br />
                            Target: Human_Cognition_Optimization
                        </p>
                    </div>

                    {/* Sector Navigation */}
                    <div className="flex flex-col sm:flex-row border border-[var(--border-color)] bg-[var(--bg-card)]">
                        {sectors.map((sector) => (
                            <button
                                key={sector.id}
                                onClick={() => setActiveSector(sector.id)}
                                className={`flex items-center gap-3 px-6 py-4 text-xs font-mono font-bold uppercase tracking-widest transition-all border-b sm:border-b-0 sm:border-r border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-surface)] ${activeSector === sector.id
                                    ? 'bg-[var(--bg-surface)] text-[var(--accent)] box-shadow-inner'
                                    : 'text-[var(--text-secondary)] grayscale'
                                    }`}
                            >
                                <sector.icon size={14} />
                                {sector.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-12 min-h-[600px]">
                    {activeSector === 'CHROMATICS' && <ChromaticsGrid />}
                    {activeSector === 'TYPOGRAPHY' && <TypographyLab />}
                    {activeSector === 'COMPONENTS' && <ComponentForge />}
                </div>

                {/* Footer Data Line */}
                <div className="border-t border-[var(--border-color)] p-4 flex justify-between items-center font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">
                    <span>Mem: 240MB // Threads: 12</span>
                    <span>Status: Nominal</span>
                </div>
            </div>
        </section>
    );
};

// --- SECTORS ---

const ChromaticsGrid = () => (
    <div className="space-y-16 animate-in fade-in zoom-in-95 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ColorCard name="VOID" token="--bg-void" hex="#111111" />
            <ColorCard name="SURFACE" token="--bg-surface" hex="#1F1F1F" />
            <ColorCard name="TEXT_PRI" token="--text-primary" hex="#F4F4F5" />
            <ColorCard name="TEXT_SEC" token="--text-secondary" hex="#A1A1AA" />
        </div>

        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-8">
                <div className="h-px bg-[var(--border-color)] flex-grow"></div>
                <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">Signal_Processing</span>
                <div className="h-px bg-[var(--border-color)] flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ColorCard name="SYS_BLUE" token="--accent-blue" hex="#3B82F6" />
                <ColorCard name="SYS_GREEN" token="--accent-green" hex="#10B981" />
                <ColorCard name="SYS_AMBER" token="--accent-amber" hex="#F59E0B" />
                <ColorCard name="SYS_RED" token="--accent-red" hex="#EF4444" />
            </div>
        </div>
    </div>
);

const ColorCard = ({ name, token, hex }) => (
    <div className="group border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors p-1">
        <div className="h-24 w-full bg-[var(--bg-surface)] relative overflow-hidden" style={{ backgroundColor: `var(${token})` }}>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shine" />
        </div>
        <div className="p-4 space-y-2">
            <div className="flex justify-between items-baseline">
                <h4 className="font-mono text-xs font-bold text-[var(--text-primary)]">{name}</h4>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `var(${token})` }}></div>
            </div>
            <div className="space-y-1">
                <div className="flex justify-between font-mono text-[10px] text-[var(--text-secondary)]">
                    <span className="opacity-50">TOKEN</span>
                    <span>{token}</span>
                </div>
                <div className="flex justify-between font-mono text-[10px] text-[var(--text-secondary)]">
                    <span className="opacity-50">HEX</span>
                    <span>{hex}</span>
                </div>
            </div>
        </div>
    </div>
);

const TypographyLab = () => (
    <div className="space-y-12 animate-in slide-in-from-left-4 duration-500">
        <div className="border border-[var(--border-color)] p-8 md:p-12 relative overflow-hidden bg-[var(--bg-card)]">
            <div className="absolute top-4 right-4 font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest border border-[var(--text-secondary)] px-2 py-1 rounded">
                Sans-Serif // Inter
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[var(--text-primary)] mb-8 leading-[0.9]">
                Human<br />
                Algorithm<span className="text-[var(--accent)]">.</span>
            </h1>
            <p className="text-xl md:text-3xl font-light text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                The quick brown fox jumps over the lazy dog.
                <span className="text-[var(--text-primary)]"> System architecture requiring resilience vs efficiency.</span>
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[var(--border-color)] p-8 bg-[var(--bg-card)] space-y-4">
                <div className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest border-b border-[var(--border-color)] pb-2 mb-4">
                    Monospace // JetBrains Mono
                </div>
                <p className="font-mono text-sm text-[var(--text-primary)] leading-relaxed">
                    function initiateSequence() {'{'}<br />
                    &nbsp;&nbsp;const status = "NOMINAL";<br />
                    &nbsp;&nbsp;return system.boot(status);<br />
                    {'}'}
                </p>
                <div className="flex gap-2 mt-4">
                    <span className="px-2 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                        Label_01
                    </span>
                    <span className="px-2 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                        Label_02
                    </span>
                </div>
            </div>

            <div className="border border-[var(--border-color)] p-8 bg-[var(--bg-card)] flex flex-col justify-center items-center text-center space-y-4">
                <div className="w-full font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest border-b border-[var(--border-color)] pb-2 mb-4 text-left">
                    Stats & Metrics
                </div>
                <div className="text-6xl font-bold tracking-tighter text-[var(--text-primary)]">
                    98.4<span className="text-3xl text-[var(--accent)]">%</span>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
                    System Efficiency
                </span>
            </div>
        </div>
    </div>
);

const ComponentForge = () => (
    <div className="grid md:grid-cols-2 gap-12 animate-in slide-in-from-right-4 duration-500">
        <div className="space-y-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2">
                <Layers size={14} /> UI Primitives
            </h3>

            <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] space-y-8">
                {/* Buttons */}
                <div className="space-y-4">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">Action_Control_V1</label>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[var(--text-primary)] text-[var(--bg-void)] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                            Execute
                        </button>
                        <button className="border border-[var(--border-color)] text-[var(--text-primary)] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[var(--bg-surface)] transition-colors">
                            Refactor
                        </button>
                        <button className="text-[var(--accent-blue)] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
                            Hyperlink <MoveRight size={12} />
                        </button>
                    </div>
                </div>

                {/* Inputs */}
                <div className="space-y-4">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">Data_Entry_Point</label>
                    <input
                        type="text"
                        placeholder="Enter system command..."
                        className="w-full bg-[var(--bg-void)] border border-[var(--border-color)] p-3 px-4 font-mono text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                        readOnly
                    />
                </div>
            </div>
        </div>

        <div className="space-y-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2">
                <Box size={14} /> Status Protocols
            </h3>

            <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] space-y-6">
                {/* Status Row */}
                {[
                    { label: 'System_Ready', color: 'var(--accent-green)', icon: ShieldCheck },
                    { label: 'Warning_01', color: 'var(--accent-amber)', icon: ShieldAlert },
                    { label: 'Critical_Fail', color: 'var(--accent-red)', icon: Activity }
                ].map((status, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border border-[var(--border-color)] bg-[var(--bg-surface)]">
                        <div className="flex items-center gap-3">
                            <status.icon size={14} style={{ color: status.color }} />
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                                {status.label}
                            </span>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-1 h-3 bg-[var(--border-color)]" style={{ backgroundColor: i === 2 ? status.color : undefined, opacity: i === 2 ? 1 : 0.3 }}></div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Progress */}
                <div className="space-y-2 mt-8">
                    <div className="flex justify-between font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">
                        <span>Compilation</span>
                        <span>84%</span>
                    </div>
                    <div className="h-1 w-full bg-[var(--bg-void)]">
                        <div className="h-full bg-[var(--accent)] w-[84%] relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DesignSystemViewer;
