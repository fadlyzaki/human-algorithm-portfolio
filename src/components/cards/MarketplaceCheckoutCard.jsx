import React from 'react';
import { Truck } from 'lucide-react';
import Container from './Container';

const MarketplaceCheckoutCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="8.0" schematicType="SUPPLY_CHAIN_HUB">
        <div className="w-full h-full p-8 flex items-center justify-center relative">
            {/* Center Hub (Warehouse) */}
            <div className="relative z-10">
                <div className="w-16 h-16 bg-white dark:bg-white/5 border border-[var(--brand)]/30 rounded-full flex items-center justify-center shadow-[0_0_30px_var(--brand)_inset] shadow-[var(--brand)]/5">
                    <div className="w-8 h-8 bg-[var(--brand)] rounded-full flex items-center justify-center animate-pulse">
                        <Truck size={14} className="text-white" />
                    </div>
                </div>
                {/* Orbiting ring */}
                <div className="absolute -inset-3 rounded-full border border-dashed border-[var(--brand)]/20 animate-[spin_12s_linear_infinite]"></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="px-2 py-0.5 bg-[var(--brand)]/10 text-[var(--brand)] text-[8px] font-mono rounded border border-[var(--brand)]/20">CENTRAL_HUB</span>
                </div>
            </div>

            {/* Spokes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 120">
                <line x1="100" y1="60" x2="40" y2="30" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[pulse_2s_ease-in-out_infinite]" />
                <line x1="100" y1="60" x2="160" y2="30" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[pulse_2.5s_ease-in-out_infinite]" />
                <line x1="100" y1="60" x2="40" y2="90" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[pulse_3s_ease-in-out_infinite]" />
                <line x1="100" y1="60" x2="160" y2="90" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[pulse_3.5s_ease-in-out_infinite]" />
            </svg>

            {/* Endpoints (Retailers) */}
            <div className="absolute top-8 left-8 w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm animate-[pulse_2s_ease-in-out_infinite]">
                <div className="w-2 h-2 rounded-full bg-[var(--brand)]/40"></div>
            </div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm animate-[pulse_2.5s_ease-in-out_infinite]">
                <div className="w-2 h-2 rounded-full bg-[var(--brand)]/40"></div>
            </div>
            <div className="absolute bottom-8 left-8 w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm animate-[pulse_3s_ease-in-out_infinite]">
                <div className="w-2 h-2 rounded-full bg-[var(--brand)]/40"></div>
            </div>
            <div className="absolute bottom-8 right-8 w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm animate-[pulse_3.5s_ease-in-out_infinite]">
                <div className="w-2 h-2 rounded-full bg-[var(--brand)]/40"></div>
            </div>
        </div>
    </Container>
);

export default MarketplaceCheckoutCard;
