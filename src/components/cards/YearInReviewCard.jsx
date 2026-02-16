import React from 'react';
import Container from './Container';

const YearInReviewCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="6.2" schematicType="TIMELINE_SPIRAL">
        <div className="w-full h-full p-8 flex items-center justify-center relative overflow-hidden">
            {/* Vertical Timeline */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[var(--brand)]/30 to-transparent"></div>

            {/* Event Nodes */}
            <div className="flex flex-col gap-6 w-full items-center z-10">
                <div className="flex items-center gap-4 translate-x-8">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand)] shadow-[0_0_10px_var(--brand)]"></div>
                    <div className="text-[6px] uppercase tracking-widest text-slate-400 font-mono">Q1_START</div>
                </div>
                <div className="flex items-center gap-4 -translate-x-8">
                    <div className="text-[6px] uppercase tracking-widest text-slate-400 font-mono">MILESTONE_A</div>
                    <div className="w-2 h-2 rounded-full bg-white border border-[var(--brand)]"></div>
                </div>
                <div className="flex items-center gap-4 translate-x-6">
                    <div className="w-3 h-3 rounded-full bg-[var(--brand)]/10 border border-[var(--brand)] flex items-center justify-center">
                        <div className="w-1 h-1 bg-[var(--brand)] rounded-full"></div>
                    </div>
                    <div className="text-[6px] uppercase tracking-widest text-slate-400 font-mono">Q3_PEAK</div>
                </div>
            </div>

            {/* Background Spirals */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 200 120">
                <path d="M100,0 Q150,30 100,60 T100,120" fill="none" stroke="currentColor" strokeWidth="20" />
            </svg>
        </div>
    </Container>
);

export default YearInReviewCard;
