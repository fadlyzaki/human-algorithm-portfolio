import React from 'react';
import Container from './Container';

const StoqoSalesContextCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="S.3" schematicType="PERSISTENT_DATA_LAYER">
        <div className="w-full h-full relative overflow-hidden flex flex-col bg-slate-50 dark:bg-white/5">
            {/* Sticky Header */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-white dark:bg-black/80 backdrop-blur-md border-b border-[var(--brand)]/30 z-20 flex items-center px-6 justify-between shadow-sm">
                <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand)] animate-pulse"></div>
                    <div className="w-16 h-2 bg-slate-200 dark:bg-white/20 rounded"></div>
                </div>
                <div className="w-8 h-4 border border-slate-200 dark:border-white/20 rounded"></div>
            </div>

            {/* Scrolling Content */}
            <div className="w-full h-full pt-20 px-6 flex flex-col gap-3 opacity-50 animate-[translate-y_3s_linear_infinite]">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-full h-12 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded"></div>
                ))}
            </div>

            {/* Pin Icon */}
            <div className="absolute top-6 right-6 z-30 text-[var(--brand)]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M12 2v20M2 12h20" /> {/* Abstract fix symbol */}
                </svg>
            </div>
        </div>
    </Container>
);

export default StoqoSalesContextCard;
