import React from 'react';
import Container from './Container';

const PaperToPaperlessCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="3.0" schematicType="OPTICAL_CHAR_RECOGNITION">
        <div className="w-full h-full p-10 flex flex-col items-center justify-center">
            <div className="relative w-24 h-32 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col p-2 gap-2">
                {/* Document Lines */}
                <div className="w-full h-1 bg-slate-100 mb-1"></div>
                <div className="w-2/3 h-1 bg-slate-100 mb-4"></div>
                <div className="w-full h-1 bg-slate-100"></div>
                <div className="w-full h-1 bg-slate-100"></div>
                <div className="w-3/4 h-1 bg-slate-100"></div>

                {/* Scanning BeamOverlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand)]/20 to-transparent h-1/4 animate-[scan_2s_linear_infinite] border-b border-[var(--brand)]/50"></div>
            </div>
        </div>
    </Container>
);

export default PaperToPaperlessCard;
