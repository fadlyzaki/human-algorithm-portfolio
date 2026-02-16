import React from 'react';
import { MessageCircle } from 'lucide-react';
import Container from './Container';

const WorkforceChatCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="3.2" schematicType="UNIFIED_STREAM_TOPOLOGY">
        <div className="w-full h-full p-8 flex items-center justify-center">
            <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Incoming fragmented sources */}
                <div className="absolute top-0 w-full flex justify-between px-8 opacity-40">
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-px h-8 bg-slate-300"></div>
                        <span className="text-[6px] font-mono">SMS</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-px h-8 bg-[var(--brand)]"></div>
                        <span className="text-[6px] font-mono text-[var(--brand)]">WA</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-px h-8 bg-slate-300"></div>
                        <span className="text-[6px] font-mono">IN-APP</span>
                    </div>
                </div>

                {/* Merging Point (Funnel) */}
                <div className="w-16 h-16 rounded-full border border-dashed border-slate-200 flex items-center justify-center mt-4 bg-white z-10 relative">
                    <div className="absolute inset-0 rounded-full border border-[var(--brand)]/20 animate-ping opacity-20"></div>
                    <MessageCircle size={16} className="text-[var(--brand)]" />
                </div>

                {/* Unified Output Stream */}
                <div className="w-px h-16 bg-gradient-to-b from-slate-200 to-[var(--brand)] mt-0 relative">
                    <div className="absolute top-1/2 -left-3 px-2 py-1 bg-[var(--brand)] text-white text-[8px] font-mono rounded shadow-lg whitespace-nowrap">
                        UNIFIED_THREAD_ID
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

export default WorkforceChatCard;
