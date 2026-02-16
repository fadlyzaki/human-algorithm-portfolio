import React from 'react';
import { Cpu } from 'lucide-react';
import Container from './Container';

const HumanAlgorithmCard = ({ expanded, showChrome, backgroundOnly }) => (
    <Container expanded={expanded} showChrome={showChrome} backgroundOnly={backgroundOnly} figIndex="0.0" schematicType="RECURSIVE_AGENT_LOOP">
        <div className="w-full h-full p-8 flex items-center justify-center relative">
            {/* Central Processing Unit */}
            <div className="relative z-10 w-16 h-16 bg-white border border-[var(--brand)]/30 rounded-lg flex items-center justify-center shadow-lg group-hover:border-[var(--brand)] transition-colors duration-500">
                <Cpu size={24} className="text-[var(--brand)] opacity-80" />

                {/* Orbiting Satellite */}
                <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--brand)] rounded-full"></div>
                </div>
            </div>

            {/* Feedback Loops */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 200 120">
                {/* Upper Loop */}
                <path
                    d="M100,60 C130,60 150,40 100,20 C50,40 70,60 100,60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="animate-[pulse_3s_ease-in-out_infinite]"
                />
                {/* Lower Loop */}
                <path
                    d="M100,60 C70,60 50,80 100,100 C150,80 130,60 100,60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="animate-[pulse_3s_ease-in-out_infinite] delay-75"
                />
            </svg>

            {/* Meta Label */}
            {!backgroundOnly && (
                <div className="absolute bottom-6 px-2 py-0.5 border border-slate-100 bg-slate-50 rounded text-[6px] font-mono text-slate-400">
                    SELF_REFERENCE
                </div>
            )}
        </div>
    </Container>
);

export default HumanAlgorithmCard;
