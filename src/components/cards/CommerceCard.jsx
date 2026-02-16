import React from 'react';
import { Truck } from 'lucide-react';
import Container from './Container';

const CommerceCard = ({ expanded, showChrome, backgroundOnly }) => (
    <Container expanded={expanded} showChrome={showChrome} backgroundOnly={backgroundOnly} figIndex="C.2" schematicType="B2B_SUPPLY_CHAIN">
        <div className="w-full h-full relative flex items-center justify-center">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Flow Chart */}
            <div className="relative z-10 flex items-center gap-12 opacity-100">
                {/* Brand */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 border border-white/30 rounded flex items-center justify-center bg-white/5 backdrop-blur">
                        <div className="w-4 h-4 bg-white/40 rounded-sm"></div>
                    </div>
                    <span className="text-[8px] font-mono text-white/50 tracking-widest">BRAND</span>
                </div>

                {/* Arrow 1 */}
                <div className="w-16 h-px bg-gradient-to-r from-white/10 via-white/40 to-white/10"></div>

                {/* Hub */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 border border-white/50 rounded-full flex items-center justify-center bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <Truck size={20} className="text-white" />
                    </div>
                    <span className="text-[8px] font-mono text-white tracking-widest">MARKETPLACE</span>
                </div>

                {/* Arrow 2 */}
                <div className="w-16 h-px bg-gradient-to-r from-white/10 via-white/40 to-white/10"></div>

                {/* Retail */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 border border-white/30 rounded flex items-center justify-center bg-white/5 backdrop-blur">
                        <div className="w-4 h-4 bg-white/40 rounded-full"></div>
                    </div>
                    <span className="text-[8px] font-mono text-white/50 tracking-widest">SME</span>
                </div>
            </div>
        </div>
    </Container>
);

export default CommerceCard;
