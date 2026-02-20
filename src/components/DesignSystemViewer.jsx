import React, { useState } from 'react';
import {
    Terminal, Type, Grid3X3, Cpu,
    Hash, MoveRight, Layers, Box,
    Activity, ShieldAlert, ShieldCheck,
    Fingerprint, Scale, Zap, Eye, Lock,
    UserCheck, AlertTriangle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SYSTEM_CONFIG = {
    VERSION: 'v3.0.1',
    CODENAME: 'Kernel Update',
    STATUS: 'NOMINAL',
    UPTIME: '99.98%',
    MEM_USAGE: '240MB',
    THREADS: 12,
    COVERAGE: '98%',
    MAINTAINER: 'Fadly Zaki'
};

const DesignSystemViewer = () => {
    const { isDark } = useTheme();
    const [activeSector, setActiveSector] = useState('CHROMATICS');

    const sectors = [
        { id: 'CHROMATICS', label: '01 // CHROMATICS', icon: Hash },
        { id: 'TYPOGRAPHY', label: '02 // TYPOGRAPHY', icon: Type },
        { id: 'COMPONENTS', label: '03 // MODULES', icon: Grid3X3 },
        { id: 'LAYOUT', label: '04 // GRID & MOTION', icon: MoveRight },
        { id: 'BRAND', label: '05 // IDENTITY', icon: Fingerprint },
        { id: 'UX', label: '06 // PRINCIPLES', icon: Scale },
        { id: 'GOVERNANCE', label: '07 // GOVERNANCE', icon: Lock },
    ];

    return (
        <section className="w-full border-t border-[var(--border-color)] bg-[var(--bg-void)] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
                style={{ backgroundImage: `linear-gradient(${isDark ? '#FFF' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#FFF' : '#000'} 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
            </div>

            <div className="max-w-7xl mx-auto border-x border-[var(--border-color)] bg-[var(--bg-void)]/50 backdrop-blur-sm relative z-10">
                {/* Header Terminal */}
                <div className="border-b border-[var(--border-color)] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                        <Grid3X3 size={400} strokeWidth={0.5} />
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] font-mono text-[10px] uppercase tracking-widest font-bold backdrop-blur-md">
                            <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                            <span>System_Diagnostic_Mode_active</span>
                        </div>
                        <div>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--text-primary)] mb-2">
                                DESIGN_KERNEL<span className="text-[var(--accent)]">.SYS</span>
                            </h2>
                            <div className="h-1 w-24 bg-[var(--accent)]"></div>
                        </div>
                        <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest max-w-xl leading-relaxed">
                            &gt; Executing visual language protocols {SYSTEM_CONFIG.VERSION}<br />
                            &gt; Target: Human_Cognition_Optimization<br />
                            &gt; Status: <span className="text-[var(--accent-green)]">{SYSTEM_CONFIG.STATUS}</span>
                        </p>
                    </div>

                    {/* Sector Navigation */}
                    <div className="flex flex-wrap gap-2 w-full lg:w-auto relative z-10" role="tablist" aria-label="System Sectors">
                        {sectors.map((sector) => (
                            <button
                                key={sector.id}
                                onClick={() => setActiveSector(sector.id)}
                                className={`group flex items-center gap-3 px-6 py-4 text-xs font-mono font-bold uppercase tracking-widest transition-all border border-[var(--border-color)] hover:border-[var(--accent)] hover:bg-[var(--bg-card)] ${activeSector === sector.id
                                    ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--accent)] shadow-[0_0_20px_-10px_var(--accent)]'
                                    : 'text-[var(--text-secondary)] bg-[var(--bg-void)]'
                                    }`}
                                role="tab"
                                aria-selected={activeSector === sector.id}
                                aria-controls={`${sector.id.toLowerCase()}-panel`}
                                id={`${sector.id.toLowerCase()}-tab`}
                                tabIndex={activeSector === sector.id ? 0 : -1}
                            >
                                <sector.icon size={14} className={`transition-colors ${activeSector === sector.id ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--accent)]'}`} aria-hidden="true" />
                                {sector.label.split(' // ')[1]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-12 min-h-[800px] relative" role="tabpanel" id={`${activeSector.toLowerCase()}-panel`} aria-labelledby={`${activeSector.toLowerCase()}-tab`}>
                    <div className="absolute top-0 left-8 md:left-12 w-px h-full bg-[var(--border-color)] opacity-50" />
                    <div className="absolute top-0 right-8 md:right-12 w-px h-full bg-[var(--border-color)] opacity-50" />

                    {activeSector === 'CHROMATICS' && <ChromaticsGrid />}
                    {activeSector === 'TYPOGRAPHY' && <TypographyLab />}
                    {activeSector === 'COMPONENTS' && <ComponentForge />}
                    {activeSector === 'LAYOUT' && <LayoutLab />}
                    {activeSector === 'BRAND' && <BrandIdentity />}
                    {activeSector === 'UX' && <UXPrinciples />}
                    {activeSector === 'GOVERNANCE' && <GovernanceLab />}
                </div>

                {/* Footer Data Line */}
                <div className="border-t border-[var(--border-color)] p-6 flex justify-between items-center font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest bg-[var(--bg-surface)]">
                    <div className="flex gap-8">
                        <span>Mem: {SYSTEM_CONFIG.MEM_USAGE} // Threads: {SYSTEM_CONFIG.THREADS}</span>
                        <span>Uptime: {SYSTEM_CONFIG.UPTIME}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                        <span>System {SYSTEM_CONFIG.STATUS}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- SECTORS ---

const ChromaticsGrid = () => (
    <div className="space-y-16 animate-in fade-in zoom-in-95 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ColorCard name="VOID" token="--bg-void" hex="#050505" />
            <ColorCard name="SURFACE" token="--bg-surface" hex="#111111" />
            <ColorCard name="TEXT_PRI" token="--text-primary" hex="#F3F4F6" />
            <ColorCard name="TEXT_SEC" token="--text-secondary" hex="#9CA3AF" />
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
    <div className="group border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-all duration-300 p-1 hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1">
        <div className="h-32 w-full bg-[var(--bg-surface)] relative overflow-hidden" style={{ backgroundColor: `var(${token})` }}>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine" />
            <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
                {hex}
            </div>
        </div>
        <div className="p-5 space-y-3">
            <div className="flex justify-between items-center">
                <h4 className="font-mono text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{name}</h4>
                <div className="w-1.5 h-1.5 rounded-full shadow-sm" style={{ backgroundColor: `var(${token})` }}></div>
            </div>
            <div className="space-y-1.5 border-t border-[var(--border-color)] pt-2">
                <div className="flex justify-between font-mono text-[9px] text-[var(--text-secondary)]">
                    <span className="opacity-40">TOKEN</span>
                    <span className="bg-[var(--bg-surface)] px-1 rounded">{token}</span>
                </div>
                <div className="flex justify-between font-mono text-[9px] text-[var(--text-secondary)]">
                    <span className="opacity-40">HEX</span>
                    <span className="select-all hover:text-[var(--text-primary)] cursor-text">{hex}</span>
                </div>
            </div>
        </div>
    </div>
);

const TypographyLab = () => (
    <div className="space-y-12 animate-in slide-in-from-left-4 duration-500">
        <div className="border border-[var(--border-color)] p-8 md:p-12 relative overflow-hidden bg-[var(--bg-card)] group hover:border-[var(--accent)] transition-colors">
            <div className="absolute top-4 right-4 font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest border border-[var(--text-secondary)] px-2 py-1 rounded flex items-center gap-2">
                <Type size={10} /> Sans-Serif // Inter
            </div>

            <div className="relative">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[var(--text-primary)] mb-8 leading-[0.9]">
                    Human<br />
                    Algorithm<span className="text-[var(--accent)]">.</span>
                </h1>

                {/* Spec Annotations */}
                <div className="absolute -left-6 top-0 h-full w-px bg-[var(--accent)]/30 hidden group-hover:block"></div>
                <div className="absolute top-1/2 -left-12 -translate-y-1/2 font-mono text-[9px] text-[var(--accent)] hidden group-hover:block rotate-[-90deg]">Line-Height: 0.9</div>
            </div>

            <p className="text-xl md:text-3xl font-light text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                The quick brown fox jumps over the lazy dog.
                <span className="text-[var(--text-primary)]"> System architecture requiring resilience vs efficiency.</span>
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[var(--border-color)] p-8 bg-[var(--bg-card)] space-y-4 relative overflow-hidden group hover:border-[var(--accent)] transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                    <Terminal size={120} />
                </div>
                <div className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest border-b border-[var(--border-color)] pb-2 mb-4 flex justify-between">
                    <span>Monospace // JetBrains Mono</span>
                    <span className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">Tracking: 0em</span>
                </div>
                <p className="font-mono text-sm text-[var(--text-primary)] leading-relaxed relative z-10">
                    <span className="text-[var(--accent-purple)]">function</span> <span className="text-[var(--accent-blue)]">initiateSequence</span>() {'{'}<br />
                    &nbsp;&nbsp;<span className="text-[var(--accent-purple)]">const</span> status = <span className="text-[var(--accent-green)]">"{SYSTEM_CONFIG.STATUS}"</span>;<br />
                    &nbsp;&nbsp;<span className="text-[var(--accent-purple)]">return</span> system.<span className="text-[var(--accent-blue)]">boot</span>(status);<br />
                    {'}'}
                </p>
                <div className="flex gap-2 mt-4 pt-4 border-t border-[var(--border-color)] border-dashed">
                    <div className="space-y-1">
                        <div className="text-[8px] font-mono uppercase text-[var(--text-secondary)]">Size</div>
                        <div className="text-xs font-mono font-bold text-[var(--text-primary)]">14px</div>
                    </div>
                    <div className="w-px bg-[var(--border-color)] h-8 mx-2"></div>
                    <div className="space-y-1">
                        <div className="text-[8px] font-mono uppercase text-[var(--text-secondary)]">Weight</div>
                        <div className="text-xs font-mono font-bold text-[var(--text-primary)]">400</div>
                    </div>
                </div>
            </div>

            <div className="border border-[var(--border-color)] p-8 bg-[var(--bg-card)] flex flex-col justify-center space-y-6">
                <div className="w-full font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest border-b border-[var(--border-color)] pb-2 mb-2">
                    Metric Display // H1-Variable
                </div>

                <div className="space-y-2">
                    <div className="text-6xl font-bold tracking-tighter text-[var(--text-primary)]">
                        98.4<span className="text-3xl text-[var(--accent)]">%</span>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] block">
                        System Efficiency
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-[9px] font-mono text-[var(--text-secondary)] pt-4 border-t border-[var(--border-color)]">
                    <div>
                        <span className="block opacity-50">Letter Spacing</span>
                        <span className="text-[var(--text-primary)]">-0.05em</span>
                    </div>
                    <div>
                        <span className="block opacity-50">Font Selection</span>
                        <span className="text-[var(--text-primary)]">Inter Tight</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ComponentForge = () => {
    const [isConfirmingDestructive, setIsConfirmingDestructive] = useState(false);

    return (
        <div className="space-y-16 animate-in slide-in-from-right-4 duration-500">

            {/* SECTION 1: INTERFACE CONTROLS */}
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
                        <Layers size={14} /> Interface Controls
                    </h3>

                    <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] space-y-8">
                        {/* Primary Actions */}
                        <div className="space-y-4">
                            <label className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">Primary_Directives</label>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-[var(--text-primary)] text-[var(--bg-void)] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                                    Primary Action
                                </button>
                                <button className="px-4 py-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--text-secondary)]/10 rounded transition-all duration-300 border border-transparent hover:border-[var(--border-color)]">
                                    Nav_Link
                                </button>
                                <button className="text-[var(--accent-blue)] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
                                    Data_Link <MoveRight size={12} />
                                </button>
                            </div>
                        </div>

                        {/* Inputs */}
                        <div className="space-y-4">
                            <label className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">Terminal_Input</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[var(--accent)] text-xs">&gt;</span>
                                <input
                                    type="text"
                                    placeholder="Awaiting command..."
                                    className="w-full bg-[var(--bg-void)] border border-[var(--border-color)] p-3 pl-8 font-mono text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-secondary)]/50"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
                        <Box size={14} /> Status Indicators
                    </h3>

                    <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] space-y-6">
                        {/* Status Badges */}
                        <div className="space-y-4">
                            <label className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">System_States</label>
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--accent-green)]/10 text-[var(--accent-green)] border border-[var(--accent-green)]/20 font-mono text-[10px] uppercase tracking-widest">
                                    <ShieldCheck size={10} /> Operational
                                </span>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)]">
                                    <div className="relative flex h-2 w-2">
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                                        Open to Work
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--accent-red)]/10 text-[var(--accent-red)] border border-[var(--accent-red)]/20 font-mono text-[10px] uppercase tracking-widest">
                                    <AlertTriangle size={10} /> Critical
                                </span>
                            </div>
                        </div>

                        {/* Progress Bars */}
                        <div className="space-y-3">
                            <label className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">Load_Sequence</label>
                            <div className="flex justify-between font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">
                                <span>Compiling Assets</span>
                                <span className="text-[var(--accent)]">84%</span>
                            </div>
                            <div className="h-1 w-full bg-[var(--bg-void)] overflow-hidden">
                                <div className="h-full bg-[var(--accent)] w-[84%] relative animate-pulse">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: CONTAINERS & CARDS */}
            <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
                    <Grid3X3 size={14} /> Structural Units
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Standard Card */}
                    <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-card)]">
                        <div className="w-8 h-8 bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center mb-4 text-[var(--text-secondary)]">
                            <Box size={16} />
                        </div>
                        <h4 className="font-bold text-sm text-[var(--text-primary)] mb-2">Standard Module</h4>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            Default container for content blocks. Uses <code className="bg-[var(--bg-surface)] px-1">--bg-card</code> token.
                        </p>
                    </div>

                    {/* Feature Card */}
                    <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors group">
                        <div className="w-8 h-8 bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mb-4 text-[var(--accent)]">
                            <Zap size={16} />
                        </div>
                        <h4 className="font-bold text-sm text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">Interactive Unit</h4>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            Responsive container with hover states. Used for clickable features.
                        </p>
                    </div>

                    {/* System Message */}
                    <div className="p-6 border border-[var(--accent)]/30 bg-[var(--accent)]/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                            <Activity size={64} />
                        </div>
                        <h4 className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-2">System Notification</h4>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            High-priority alerts using accent color overlays.
                        </p>
                    </div>
                </div>

                {/* Bento Grid Pattern */}
                <div className="p-6 border border-black/5 dark:border-white/10 bg-[var(--bg-card)] rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="flex flex-col h-full justify-between relative z-10">
                        <div className="w-12 h-12 rounded-full bg-[var(--bg-surface)] flex items-center justify-center mb-4">
                            <Grid3X3 size={20} className="text-[var(--text-primary)]" />
                        </div>
                        <div>
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] mb-2 px-1.5 py-0.5 rounded border text-[var(--accent-blue)] border-[var(--accent-blue)]/30 inline-block">
                                Featured
                            </span>
                            <h4 className="font-bold text-sm text-[var(--text-primary)]">Bento Card Module</h4>
                        </div>
                    </div>
                    {/* Hover Reveal */}
                    <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-[var(--text-primary)] text-[var(--bg-void)] px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                            View <MoveRight size={12} />
                        </div>
                    </div>
                </div>
            </div>

            {/* USAGE GUIDELINES - PRINCIPAL LEVEL ADDITION */}
            <div className="border-t border-[var(--border-color)] pt-12">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 mb-8">
                    <AlertTriangle size={14} /> Usage Protocols
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* DO */}
                    <div className="space-y-4">
                        <div className="p-1 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 text-[var(--accent-green)] font-mono text-[10px] uppercase tracking-widest text-center">
                            Correct Usage
                        </div>
                        <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col items-center gap-4">
                            <button className="bg-[var(--text-primary)] text-[var(--bg-void)] px-6 py-3 text-xs font-bold uppercase tracking-widest">
                                Initialize
                            </button>
                            <p className="text-xs text-[var(--text-secondary)] text-center">
                                Use solid fill for primary "happy path" actions only.
                            </p>
                        </div>
                    </div>

                    {/* DON'T */}
                    <div className="space-y-4">
                        <div className="p-1 bg-[var(--accent-red)]/10 border border-[var(--accent-red)]/20 text-[var(--accent-red)] font-mono text-[10px] uppercase tracking-widest text-center">
                            Violations
                        </div>
                        <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col items-center gap-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[var(--bg-void)]/80 flex items-center justify-center z-10">
                                <AlertTriangle size={32} className="text-[var(--accent-red)]" />
                            </div>
                            <button className="bg-[var(--accent-red)] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-xl" tabIndex={-1}>
                                Initialize
                            </button>
                            <p className="text-xs text-[var(--text-secondary)] text-center blur-sm">
                                Never use semantic system colors for primary actions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESTRUCTIVE ACTION GUARDRAILS */}
            <div className="border-t border-[var(--border-color)] pt-12">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-red)] flex items-center gap-2 mb-8">
                    <ShieldAlert size={14} /> Destructive Action Guardrails
                </h3>

                <div className="p-8 border border-[var(--accent-red)]/20 bg-[var(--bg-card)] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                        <ShieldAlert size={120} className="text-[var(--accent-red)]" />
                    </div>
                    <div className="space-y-2 relative z-10 max-w-sm">
                        <h4 className="font-bold text-sm text-[var(--text-primary)]">Purge Instance Data</h4>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            Irreversible operation. Requires double-confirmation friction pattern.
                        </p>
                    </div>

                    <div className="relative z-10 w-full md:w-auto">
                        {!isConfirmingDestructive ? (
                            <button
                                onClick={() => setIsConfirmingDestructive(true)}
                                className="w-full md:w-auto border border-[var(--accent-red)]/30 text-[var(--accent-red)] hover:bg-[var(--accent-red)]/10 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                            >
                                <AlertTriangle size={14} /> Initiate Purge
                            </button>
                        ) : (
                            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto animate-in slide-in-from-right-4 duration-300">
                                <input
                                    type="text"
                                    placeholder="Type 'PURGE' to confirm"
                                    className="bg-[var(--bg-void)] border border-[var(--accent-red)]/50 p-3 font-mono text-xs text-[var(--accent-red)] focus:outline-none focus:border-[var(--accent-red)] transition-colors placeholder:text-[var(--accent-red)]/50"
                                />
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-[var(--accent-red)] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap">
                                        Confirm
                                    </button>
                                    <button
                                        onClick={() => setIsConfirmingDestructive(false)}
                                        className="px-4 py-3 text-xs font-mono uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DesignSystemViewer;

const BrandIdentity = () => (
    <div className="space-y-16 animate-in slide-in-from-bottom-8 duration-500">
        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
                    <Fingerprint size={14} /> Persona Architecture
                </h3>
                <div className="space-y-4">
                    <PersonaCard
                        role="The Architect"
                        icon={Cpu}
                        color="var(--accent-red)"
                        desc="Enforces system scalability and data integrity. Veto power over schema changes."
                        quote="Adding this state to Root will trigger a re-render. Blocked."
                    />
                    <PersonaCard
                        role="The Warden"
                        icon={ShieldAlert}
                        color="var(--accent-red)"
                        desc="Platform integrity and security. Zero-trust policy on instance isolation."
                        quote="This resolver bypasses the Default Deny policy. Essential breach."
                    />
                    <PersonaCard
                        role="Linus"
                        icon={Terminal}
                        color="var(--accent-green)"
                        desc="Curator of code purity. Anti-entropy agent."
                        quote="This abstraction is a solution looking for a problem."
                    />
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
                    <UserCheck size={14} /> Visual Identity
                </h3>
                <div className="p-8 border border-[var(--border-color)] bg-[var(--bg-card)] space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Fingerprint size={120} />
                    </div>

                    <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">Logomark</span>
                        <div className="text-4xl mt-2">🧢 Fadlyzaki</div>
                    </div>

                    <div className="space-y-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">ID Card Data</span>
                        <div className="font-mono text-xs text-[var(--text-primary)] leading-relaxed p-4 bg-[var(--bg-void)] border border-[var(--border-color)]">
                            ROOT_ACCESS<br />
                            HUMAN BY DESIGN<br />
                            UZZAKI, FADLY 🧢<br />
                            Product Designer // System Thinker<br />
                            ID_NO: 1407-1995
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const UXPrinciples = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in zoom-in-95 duration-500">
        <PrincipleCard
            num="01"
            title="Privacy First"
            icon={Lock}
            desc="All processing is local. Hand tracking uses MediaPipe on-device. No data leaves the client."
        />
        <PrincipleCard
            num="02"
            title="Graceful Degradation"
            icon={Activity}
            desc="Features fall back safely. If WebGL fails, we show static images. If cameras fail, we use mouse."
        />
        <PrincipleCard
            num="03"
            title="Accessible Defaults"
            icon={UserCheck}
            desc="ESC to close. Keyboard navigation first. High contrast text ratios enforced."
        />
        <PrincipleCard
            num="04"
            title="Performance"
            icon={Zap}
            desc="Lazy loading everywhere. Lite models for AI. 0ms layout shift targets."
        />
        <PrincipleCard
            num="05"
            title="Human-Centered"
            icon={Eye}
            desc="Built for users at their limit. Minimal cognitive load. No unnecessary motion."
        />
        <div className="border border-[var(--border-color)] bg-[var(--bg-card)] p-6 flex flex-col justify-center items-center text-center opacity-50">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
                More principles compiling...
            </span>
        </div>
    </div>
);

const PersonaCard = ({ role, icon: Icon, color, desc, quote }) => (
    <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-all duration-300 group hover:shadow-lg hover:-translate-x-1">
        <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-3">
                <div className="p-2 rounded bg-[var(--bg-void)] border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors">
                    <Icon size={16} style={{ color }} />
                </div>
                {role}
            </h4>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }}></div>
        </div>
        <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed h-12">
            {desc}
        </p>
        <div className="pl-4 border-l-2 border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors bg-[var(--bg-void)] p-3 italic rounded-r-lg">
            <p className="font-mono text-[10px] text-[var(--text-secondary)]">
                "{quote}"
            </p>
        </div>
    </div>
);

const PrincipleCard = ({ num, title, icon: Icon, desc }) => (
    <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-card)] hover:translate-y-[-2px] transition-transform duration-300">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-[var(--bg-surface)] rounded-lg border border-[var(--border-color)] text-[var(--accent)]">
                <Icon size={20} />
            </div>
            <span className="font-mono text-4xl font-bold text-[var(--bg-surface)] text-stroke">
                {num}
            </span>
        </div>
        <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2">{title}</h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {desc}
        </p>
    </div>
);

const LayoutLab = () => (
    <div className="space-y-16 animate-in slide-in-from-bottom-8 duration-500">
        {/* GRID SYSTEM */}
        <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
                <Grid3X3 size={14} /> 12-Column Grid System
            </h3>

            <div className="relative border border-[var(--border-color)] bg-[var(--bg-surface)] h-48 overflow-hidden">
                {/* Visual Grid Layer */}
                <div className="absolute inset-0 grid grid-cols-12 gap-4 px-4 md:px-12 pointer-events-none opacity-20">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-full bg-[var(--accent-red)]/20 border-x border-[var(--accent-red)]/30 flex flex-col justify-between py-2 items-center">
                            <span className="text-[6px] font-mono text-[var(--accent-red)]">{i + 1}</span>
                        </div>
                    ))}
                </div>

                {/* Content Simulation */}
                <div className="absolute inset-0 grid grid-cols-12 gap-4 px-4 md:px-12 items-center">
                    <div className="col-span-12 md:col-span-3 h-24 bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center font-mono text-xs text-[var(--text-secondary)]">Sidebar</div>
                    <div className="col-span-12 md:col-span-9 h-24 bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center font-mono text-xs text-[var(--text-secondary)]">Main Content Area</div>
                </div>

                {/* Measurements */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[var(--text-secondary)] bg-[var(--bg-void)] px-2 border border-[var(--border-color)] rounded">
                    Max-Width: 1280px // Class: max-w-7xl
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
                    <span className="block font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-widest mb-2">Gutters</span>
                    <div className="text-xl font-bold text-[var(--text-primary)]">24px</div>
                    <code className="text-xs text-[var(--accent)]">gap-6</code>
                </div>
                <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)]">
                    <span className="block font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-widest mb-2">Margins</span>
                    <div className="text-xl font-bold text-[var(--text-primary)]">48px</div>
                    <code className="text-xs text-[var(--accent)]">px-12</code>
                </div>
            </div>
        </div>

        {/* MOTION CURVES */}
        <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
                <Activity size={14} /> Motion Physics
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Curve 1: Default */}
                <div className="space-y-4 group cursor-pointer">
                    <div className="h-32 border border-[var(--border-color)] bg-[var(--bg-card)] relative overflow-hidden flex items-center justify-center">
                        <div className="w-8 h-8 bg-[var(--accent-blue)] rounded shadow-lg group-hover:translate-x-32 transition-transform duration-500 ease-out"></div>
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
                            <path d="M0,128 C50,128 50,0 200,0" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-[var(--text-primary)]">Soft Out</h4>
                        <code className="text-xs text-[var(--text-secondary)]">ease-out // 500ms</code>
                    </div>
                </div>

                {/* Curve 2: Elastic */}
                <div className="space-y-4 group cursor-pointer">
                    <div className="h-32 border border-[var(--border-color)] bg-[var(--bg-card)] relative overflow-hidden flex items-center justify-center">
                        <div className="w-8 h-8 bg-[var(--accent-green)] rounded shadow-lg group-hover:scale-150 transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-[var(--text-primary)]">Elastic Pop</h4>
                        <code className="text-xs text-[var(--text-secondary)]">cubic-bezier(.34,1.56,...)</code>
                    </div>
                </div>

                {/* Curve 3: Linear/Glitch */}
                <div className="space-y-4 group cursor-pointer">
                    <div className="h-32 border border-[var(--border-color)] bg-[var(--bg-card)] relative overflow-hidden flex items-center justify-center">
                        <div className="w-full h-1 bg-[var(--accent-red)] group-hover:opacity-0 animate-pulse"></div>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-[var(--text-primary)]">Signal Pulse</h4>
                        <code className="text-xs text-[var(--text-secondary)]">linear // infinite</code>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const GovernanceLab = () => (
    <div className="space-y-16 animate-in slide-in-from-right-4 duration-500">
        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
                    <Activity size={14} /> System Health
                </h3>

                <div className="border border-[var(--border-color)] bg-[var(--bg-card)] p-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-sm text-[var(--text-primary)]">Current Version</h4>
                            <p className="text-xs text-[var(--text-secondary)]">{SYSTEM_CONFIG.VERSION} ({SYSTEM_CONFIG.CODENAME})</p>
                        </div>
                        <div className="px-3 py-1 bg-[var(--accent-green)]/10 text-[var(--accent-green)] border border-[var(--accent-green)]/20 font-mono text-[10px] uppercase tracking-widest rounded-full">
                            Stable
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                            <span>Coverage</span>
                            <span>{SYSTEM_CONFIG.COVERAGE}</span>
                        </div>
                        <div className="h-1 w-full bg-[var(--bg-surface)]">
                            <div className="h-full bg-[var(--accent)] w-[98%]"></div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-[var(--border-color)] flex gap-4">
                        <div className="flex-1">
                            <span className="block font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-widest mb-1">Maintainer</span>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-[var(--text-primary)]"></div>
                                <span className="text-xs font-bold text-[var(--text-primary)]">{SYSTEM_CONFIG.MAINTAINER}</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <span className="block font-mono text-[9px] text-[var(--text-secondary)] uppercase tracking-widest mb-1">Last Deploy</span>
                            <div className="text-xs font-bold text-[var(--text-primary)]">Today, 19:23</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
                    <Lock size={14} /> Contribution Protocol
                </h3>

                <div className="space-y-4">
                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start">
                            <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)]">RFC Process</h4>
                            <MoveRight size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)]" />
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            All token changes require a Request for Comment document.
                        </p>
                    </div>

                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start">
                            <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)]">Token Naming</h4>
                            <MoveRight size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)]" />
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            Follows <code>category-property-variant</code> BEM-style syntax.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="border border-[var(--border-color)] bg-[var(--bg-surface)] p-8 text-center space-y-4">
            <h4 className="text-sm font-bold text-[var(--text-primary)]">Design System Roadmap</h4>
            <div className="flex justify-center gap-12 font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                <span className="text-[var(--text-primary)]">Q1: Modules</span>
                <span>Q2: Accessibility</span>
                <span>Q3: Dark Mode v2</span>
                <span>Q4: Mobile Patterns</span>
            </div>
        </div>
    </div>
);
