import React from 'react';
import Container from './Container';

const StoqoSalesCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="5.5" schematicType="TARGET_ACQUISITION_HUD">
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            {/* Background Grid - Wide */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: 'linear-gradient(90deg, transparent 49%, var(--brand) 50%, transparent 51%)', backgroundSize: '100% 100%' }}>
            </div>
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            {/* Left Data Block (Context) */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2 opacity-40">
                {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[var(--brand)] rounded-full"></div>
                        <div className="w-12 h-0.5 bg-slate-400/30 rounded"></div>
                    </div>
                ))}
            </div>

            {/* Right Data Block (Metrics) */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2 opacity-40 items-end">
                {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="w-12 h-0.5 bg-slate-400/30 rounded"></div>
                        <div className="w-1 h-1 bg-[var(--brand)] rounded-full"></div>
                    </div>
                ))}
            </div>

            {/* Central Target Scope (Focus/Clarity) */}
            <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Rotating Rings */}
                <div className="absolute inset-0 rounded-full border border-[var(--brand)]/20 border-dashed animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-8 rounded-full border border-[var(--brand)]/40 border-t-transparent border-b-transparent animate-[spin_10s_linear_infinite_reverse]"></div>

                {/* Core "Commitment" Button */}
                <div className="w-20 h-20 bg-[var(--brand)]/10 backdrop-blur-md rounded-full border border-[var(--brand)] flex items-center justify-center shadow-[0_0_30px_var(--brand)_inset] relative group-hover:scale-105 transition-transform duration-500">
                    <div className="w-2 h-2 bg-[var(--brand)] rounded-full animate-pulse shadow-[0_0_10px_var(--brand)]"></div>

                    {/* Crosshairs */}
                    <div className="absolute top-0 bottom-0 w-px bg-[var(--brand)]/50"></div>
                    <div className="absolute left-0 right-0 h-px bg-[var(--brand)]/50"></div>
                </div>

                {/* Floating Labels */}
                <div className="absolute -top-6 bg-white dark:bg-black px-2 py-0.5 border border-[var(--brand)]/30 rounded text-[8px] font-mono text-[var(--brand)] uppercase tracking-widest">
                    MISSION_LOCK
                </div>
                <div className="absolute -bottom-6 flex gap-4">
                    <div className="px-2 py-0.5 bg-[var(--brand)] text-white rounded text-[6px] font-mono tracking-widest shadow-lg">
                        KPI_DETECTED
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

export default StoqoSalesCard;
