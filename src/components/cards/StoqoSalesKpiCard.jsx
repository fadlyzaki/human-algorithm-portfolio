import React from 'react';
import Container from './Container';

const StoqoSalesKpiCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="S.2" schematicType="SIGNAL_TO_NOISE_FILTER">
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-8">
            {/* Filter Stream */}
            <div className="flex gap-2">
                {/* Noise Item */}
                <div className="w-16 h-12 border border-[var(--kpi-border)] bg-[var(--kpi-bg)] rounded flex flex-col justify-center items-center opacity-30">
                    <div className="w-8 h-1 bg-slate-300 rounded mb-1"></div>
                    <div className="w-4 h-1 bg-slate-200 rounded"></div>
                </div>
                {/* SIGNAL Item (KPI) */}
                <div className="w-16 h-12 border border-[var(--brand)] bg-white dark:bg-white/10 rounded flex flex-col justify-center items-center shadow-[var(--kpi-shadow)] relative overflow-hidden group-hover:-translate-y-1 transition-transform">
                    <div className="absolute top-0 right-0 w-4 h-4 bg-[var(--brand)] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div className="w-8 h-1 bg-[var(--brand)] rounded mb-1 opacity-80"></div>
                    <div className="w-4 h-1 bg-[var(--brand)] rounded opacity-50"></div>
                </div>
                {/* Noise Item */}
                <div className="w-16 h-12 border border-[var(--kpi-border)] bg-[var(--kpi-bg)] rounded flex flex-col justify-center items-center opacity-30">
                    <div className="w-8 h-1 bg-slate-300 rounded mb-1"></div>
                    <div className="w-4 h-1 bg-slate-200 rounded"></div>
                </div>
            </div>

            {/* The Filter Mechanism */}
            <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-50 my-2"></div>
            <div className="text-[8px] font-mono text-[var(--brand)] uppercase tracking-[0.2em] animate-pulse">
                ATTENTION_SIEVE_ACTIVE
            </div>
        </div>
    </Container>
);

export default StoqoSalesKpiCard;
