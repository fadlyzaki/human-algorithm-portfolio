import React from 'react';
import { Users } from 'lucide-react';
import Container from './Container';

const WorkforceCard = ({ expanded, showChrome, backgroundOnly }) => (
    <Container expanded={expanded} showChrome={showChrome} backgroundOnly={backgroundOnly} figIndex="C.1" schematicType="WORKFORCE_ECOSYSTEM">
        <div className="w-full h-full relative flex items-center justify-center opacity-100">
            {/* Central Node */}
            <div className="absolute w-20 h-20 rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center animate-pulse">
                    <Users size={20} className="text-white opacity-100" />
                </div>
            </div>

            {/* Orbital Rings */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
                <ellipse cx="200" cy="100" rx="120" ry="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="text-white/40 animate-[spin_10s_linear_infinite]" />
                <ellipse cx="200" cy="100" rx="80" ry="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="text-white/40 animate-[spin_15s_linear_infinite_reverse]" />
            </svg>

            {/* Satellites */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-8">
                <div className="px-3 py-1 bg-white/10 backdrop-blur rounded border border-white/20 text-white text-[10px] font-mono">SEEKERS</div>
                <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/20 mx-auto"></div>
            </div>
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-8">
                <div className="px-3 py-1 bg-white/10 backdrop-blur rounded border border-white/20 text-white text-[10px] font-mono">EMPLOYERS</div>
                <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/20 mx-auto"></div>
            </div>
        </div>
    </Container>
);

export default WorkforceCard;
