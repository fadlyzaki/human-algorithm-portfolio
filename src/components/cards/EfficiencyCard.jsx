import React from 'react';
import { Clock } from 'lucide-react';
import Container from './Container';

const EfficiencyCard = ({ expanded, showChrome, backgroundOnly }) => (
    <Container expanded={expanded} showChrome={showChrome} backgroundOnly={backgroundOnly} figIndex="C.3" schematicType="LOGISTICS_OPS">
        <div className="w-full h-full relative" style={{ perspective: '1000px' }}>
            {/* 3D Plane */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateX(60deg) scale(1.5)' }}>
                <div className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                    <div className="absolute top-0 w-2 h-2 bg-white/60 rounded-full shadow-[0_0_10px_white]"></div>
                    <div className="w-full h-px bg-white/10"></div>
                    <div className="h-full w-px bg-white/10"></div>
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <Clock size={40} className="text-white opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                </div>
            </div>

            <div className="absolute bottom-10 w-full text-center">
                <div className="inline-block px-2 py-1 bg-black/20 backdrop-blur rounded border border-white/10 text-[8px] font-mono text-white/70">
                    JUST-IN-TIME DELIVERY
                </div>
            </div>
        </div>
    </Container>
);

export default EfficiencyCard;
