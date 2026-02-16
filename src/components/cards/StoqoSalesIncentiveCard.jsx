import React from 'react';
import Container from './Container';

const StoqoSalesIncentiveCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="S.1" schematicType="BEHAVIORAL_COMMITMENT_LOCK">
        <div className="w-full h-full flex items-center justify-center p-8">
            <div className="relative w-40 h-40 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.05)_inset]">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 dark:border-white/20 animate-[spin_10s_linear_infinite]"></div>

                {/* The Button */}
                <div className="w-24 h-24 rounded-full bg-[var(--brand)]/10 border border-[var(--brand)] flex items-center justify-center relative cursor-not-allowed group-hover:scale-95 transition-transform duration-500">
                    {/* Fingerprint / Touch ID */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--brand)] animate-pulse">
                        <path d="M12 4.5v15m7.5-7.5h-15" opacity="0.5" />
                        <path d="M12 12m-2-2a3 3 0 0 1 4 4" strokeLinecap="round" />
                    </svg>

                    {/* Confirmed State Ripple */}
                    <div className="absolute inset-0 rounded-full border border-[var(--brand)] opacity-0 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                </div>

                {/* Label */}
                <div className="absolute bottom-8 px-3 py-1 bg-white dark:bg-black border border-[var(--brand)]/30 rounded text-[8px] font-mono text-[var(--brand)] uppercase tracking-widest shadow-lg translate-y-8">
                    COMMITMENT_VERIFIED
                </div>
            </div>
        </div>
    </Container>
);

export default StoqoSalesIncentiveCard;
