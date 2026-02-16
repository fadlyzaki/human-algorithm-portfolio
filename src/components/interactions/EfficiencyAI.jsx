import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Clock, Leaf } from 'lucide-react';

const EfficiencyAI = ({ color = '#FA6130' }) => {
    // JIT State
    const [cycle, setCycle] = useState(0);
    const [orders, setOrders] = useState([]);

    // Nodes Data
    const suppliers = [
        { id: 's1', label: 'ORG_FARM_A', type: 'farm', x: 15, y: 25 },
        { id: 's2', label: 'HYDROPONIC_B', type: 'farm', x: 15, y: 50 },
        { id: 's3', label: 'IMPORT_HUB', type: 'farm', x: 15, y: 75 },
    ];

    const hub = { id: 'hub', label: 'JIT_OPTIMIZER', x: 50, y: 50 };

    const kitchens = [
        { id: 'k1', label: 'KITCHEN_01', x: 85, y: 30 },
        { id: 'k2', label: 'KITCHEN_02', x: 85, y: 70 },
    ];

    // Simulation Loop
    useEffect(() => {
        const interval = setInterval(() => {
            setCycle(c => c + 1);

            // Generate new order flow
            const newOrder = {
                id: Date.now(),
                supplierIdx: Math.floor(Math.random() * 3),
                kitchenIdx: Math.floor(Math.random() * 2),
                status: 'processing'
            };

            setOrders(prev => [...prev.slice(-4), newOrder]);

        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center font-mono select-none">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, ${color} 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
            }}></div>

            {/* Content Container */}
            <div className="relative w-full max-w-3xl h-[300px] flex justify-between items-center px-4 md:px-12">

                {/* SVG Layer for Dynamic Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    <defs>
                        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={color} stopOpacity="0" />
                            <stop offset="50%" stopColor={color} stopOpacity="0.5" />
                            <stop offset="100%" stopColor={color} stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Static Lines: Suppliers -> Hub */}
                    {suppliers.map((s, i) => (
                        <motion.path
                            key={`line-s-${i}`}
                            d={`M ${s.x}% ${s.y}% L ${hub.x}% ${hub.y}%`}
                            stroke={color}
                            strokeWidth="1"
                            strokeOpacity="0.1"
                            strokeDasharray="4 4"
                            fill="none"
                        />
                    ))}

                    {/* Static Lines: Hub -> Kitchens */}
                    {kitchens.map((k, i) => (
                        <motion.path
                            key={`line-k-${i}`}
                            d={`M ${hub.x}% ${hub.y}% L ${k.x}% ${k.y}%`}
                            stroke={color}
                            strokeWidth="1"
                            strokeOpacity="0.1"
                            strokeDasharray="4 4"
                            fill="none"
                        />
                    ))}

                    {/* Active Order Flows */}
                    <AnimatePresence>
                        {orders.map(o => {
                            const s = suppliers[o.supplierIdx];
                            const k = kitchens[o.kitchenIdx];

                            // Path: Supplier -> Hub -> Kitchen
                            // We animate two segments sequentially or one curve.
                            // Let's use a Quadratic Bezier through the Hub coords

                            return (
                                <g key={o.id}>
                                    {/* Segment 1: Supplier -> Hub */}
                                    <motion.circle r="3" fill={color}>
                                        <animateMotion
                                            dur="0.8s"
                                            begin="0s"
                                            fill="freeze"
                                            path={`M ${s.x}% ${s.y}% L ${hub.x}% ${hub.y}%`}
                                        />
                                        <animate attributeName="opacity" values="0;1;0" dur="0.8s" fill="freeze" />
                                    </motion.circle>

                                    {/* Segment 2: Hub -> Kitchen (Delayed) */}
                                    <motion.circle r="3" fill="#fff">
                                        <animateMotion
                                            dur="0.8s"
                                            begin="0.8s"
                                            fill="freeze"
                                            path={`M ${hub.x}% ${hub.y}% L ${k.x}% ${k.y}%`}
                                        />
                                        <animate attributeName="opacity" values="0;1;0" dur="0.8s" begin="0.8s" fill="freeze" />
                                    </motion.circle>
                                </g>
                            );
                        })}
                    </AnimatePresence>
                </svg>


                {/* LEFT: SUPPLIERS */}
                <div className="flex flex-col gap-6 relative z-10">
                    {suppliers.map(s => (
                        <div key={s.id} className="group relative">
                            <div className="flex items-center gap-3 p-2 pr-4 rounded-r-full border-y border-r border-white/5 bg-black/20 backdrop-blur-sm hover:border-[var(--brand)]/30 transition-all">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[var(--brand)]/50 transition-colors">
                                    <Leaf size={14} className="text-[var(--brand)] opacity-80" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] text-white/50 tracking-widest uppercase">SUPPLY</span>
                                    <span className="text-[10px] text-white/90 font-bold">{s.label}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CENTER: JIT HUB */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                    {/* Rotating Timer Ring */}
                    <div className="absolute inset-0 rounded-full border border-[var(--brand)]/20 border-dashed animate-[spin_10s_linear_infinite]"></div>

                    <div className="w-24 h-24 bg-black/50 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(250,97,48,0.1)] relative group">
                        <div className="absolute inset-0 rounded-full border border-[var(--brand)] opacity-20 animate-ping"></div>

                        <div className="flex flex-col items-center gap-1">
                            <Clock size={24} className="text-[var(--brand)]" />
                            <span className="text-[8px] font-mono text-[var(--brand)] tracking-widest mt-1">JIT_SYNC</span>
                            <span className="text-[12px] font-bold text-white">00:{String(cycle % 60).padStart(2, '0')}</span>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-2">
                        <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[8px] text-white/50 backdrop-blur">
                            INVENTORY: LOW
                        </div>
                        <div className="px-2 py-1 rounded bg-[var(--brand)]/10 border border-[var(--brand)]/20 text-[8px] text-[var(--brand)] backdrop-blur">
                            TURN_RATE: HIGH
                        </div>
                    </div>
                </div>

                {/* RIGHT: KITCHENS */}
                <div className="flex flex-col gap-12 relative z-10">
                    {kitchens.map(k => (
                        <div key={k.id} className="group relative">
                            <div className="flex flex-row-reverse items-center gap-3 p-2 pl-4 rounded-l-full border-y border-l border-white/5 bg-black/20 backdrop-blur-sm hover:border-[var(--brand)]/30 transition-all text-right">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[var(--brand)]/10 transition-colors">
                                    <ChefHat size={18} className="text-white/80" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] text-white/50 tracking-widest uppercase">DEMAND</span>
                                    <span className="text-[10px] text-white/90 font-bold">{k.label}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Footer Metadata */}
            <div className="absolute bottom-4 left-4 text-[9px] text-gray-500 font-mono tracking-widest flex items-center gap-3">
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] animate-pulse"></div>
                    MODULE: JIT_LOGISTICS_OPTIMIZER
                </div>
                <span className="opacity-50">|</span>
                <span className="opacity-70">ZERO_WASTE_PROTOCOL</span>
            </div>
        </div>
    );
};

export default EfficiencyAI;
