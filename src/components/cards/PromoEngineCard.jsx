import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Container from './Container';

const PromoEngineCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="10.4" schematicType="DECISION_TREE_LOGIC">
        <div className="w-full h-full p-8 flex flex-col items-center justify-start pt-12">
            {/* Root Node */}
            <div className="w-24 h-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 rounded flex items-center justify-center text-[8px] font-mono text-slate-400 mb-2">
                CART_TOTAL &gt; 50k
            </div>
            <div className="h-4 w-px bg-slate-300"></div>

            {/* Decision Diamond */}
            <div className="w-8 h-8 rotate-45 border border-[var(--brand)] bg-[var(--brand)]/5 flex items-center justify-center mb-2 z-10 relative animate-[pulse_2s_ease-in-out_infinite]">
                <div className="w-1 h-1 bg-[var(--brand)] -rotate-45"></div>
            </div>

            {/* Branches */}
            <div className="flex gap-16 w-full justify-center relative">
                {/* Connecting Lines */}
                <svg className="absolute -top-2 left-0 w-full h-8 pointer-events-none" style={{ overflow: 'visible' }}>
                    <path d="M100,0 L100,6 L150,6 L150,20" fill="none" stroke="var(--brand)" strokeWidth="1" opacity="0.5" />
                    <path d="M100,0 L100,6 L50,6 L50,20" fill="none" stroke="currentColor" className="text-slate-200" strokeWidth="1" />
                </svg>

                {/* No Path */}
                <div className="flex flex-col items-center pt-6 gap-2 opacity-40">
                    <div className="w-12 h-6 border border-slate-200 bg-slate-50 rounded flex items-center justify-center text-[6px]">
                        REJECT
                    </div>
                </div>

                {/* Yes Path */}
                <div className="flex flex-col items-center pt-6 gap-2">
                    <div className="px-3 py-1 bg-[var(--brand)] text-white rounded shadow-md text-[8px] font-mono flex items-center gap-1 relative">
                        <CheckCircle2 size={8} /> APPLY_DISC
                        <div className="absolute inset-0 rounded bg-[var(--brand)] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20"></div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

export default PromoEngineCard;
