import React from 'react';
import Container from './Container';

const DesignSystemCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="9.1" schematicType="ATOMIC_COMPONENT_LIBRARY">
        <div className="w-full h-full p-12 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[200px]">
                <div className="p-3 border border-slate-100 dark:border-white/10 rounded-lg flex flex-col gap-2 bg-white dark:bg-white/5 shadow-sm">
                    <span className="text-[6px] font-mono text-slate-300 uppercase">ATOM_BTN</span>
                    <div className="h-6 w-full rounded bg-[var(--brand)] flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]"></div>
                </div>
                <div className="col-span-2 p-3 border border-[var(--brand)]/20 rounded-lg flex flex-col gap-2 bg-[var(--brand)]/5 animate-[pulse_4s_ease-in-out_infinite]">
                    <span className="text-[6px] font-mono text-[var(--brand)] uppercase">MOL_CARD</span>
                </div>
            </div>
        </div>
    </Container>
);

export default DesignSystemCard;
