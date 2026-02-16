import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Factory, Store, Truck, Package, ShoppingBag } from 'lucide-react';

// Supply Chain Nodes
const hubs = [
    // Source: Brand Principals / Suppliers (Left Side)
    { id: 'sup1', type: 'supplier', x: 15, y: 30, label: 'PRINCIPAL_A' },
    { id: 'sup2', type: 'supplier', x: 15, y: 70, label: 'PRINCIPAL_B' },

    // Center: GudangAda Smart Warehouse (Center)
    { id: 'hub_main', type: 'hub', x: 50, y: 50, label: 'SMART_WAREHOUSE' },

    // Destination: SME Retailers (Right Side)
    { id: 'ret1', type: 'retailer', x: 85, y: 20, label: 'TOKO_ALI' },
    { id: 'ret2', type: 'retailer', x: 85, y: 50, label: 'WARUNG_BU_DE' },
    { id: 'ret3', type: 'retailer', x: 85, y: 80, label: 'SANTOSO_CORP' },
];

const connections = [
    // Inbound: Suppliers -> Hub
    { from: 'sup1', to: 'hub_main' },
    { from: 'sup2', to: 'hub_main' },
    // Outbound: Hub -> Retailers
    { from: 'hub_main', to: 'ret1' },
    { from: 'hub_main', to: 'ret2' },
    { from: 'hub_main', to: 'ret3' },
];

const CommerceAI = ({ color = '#00D1C7' }) => {
    const [pulses, setPulses] = useState([]);
    const [demand, setDemand] = useState(50); // 0-100

    useEffect(() => {
        // Generate traffic based on "Demand" slider
        // Logic: 
        // 1. Pick a random Supplier -> Hub
        // 2. Then Hub -> Pick a random Retailer

        const frequency = 1200 - (demand * 10); // Higher demand = faster
        const interval = setInterval(() => {

            // Determine Flow Direction based on simple randomization for visual variety
            const isInbound = Math.random() > 0.4; // 60% chance of outbound to fill the screen more

            let path;
            if (isInbound) {
                // Supplier -> Hub
                path = connections.slice(0, 2)[Math.floor(Math.random() * 2)];
            } else {
                // Hub -> Retailer
                path = connections.slice(2)[Math.floor(Math.random() * 3)];
            }

            const fromHub = hubs.find(h => h.id === path.from);
            const toHub = hubs.find(h => h.id === path.to);

            const newPulse = {
                id: Date.now(),
                x1: fromHub.x,
                y1: fromHub.y,
                x2: toHub.x,
                y2: toHub.y,
                type: isInbound ? 'inbound' : 'outbound'
            };

            setPulses(prev => [...prev.slice(-15), newPulse]);
        }, Math.max(150, frequency));

        return () => clearInterval(interval);
    }, [demand]);

    return (
        <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm p-4 md:p-8 flex flex-col items-center justify-center font-mono select-none">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: `linear-gradient(90deg, ${color} 1px, transparent 1px), linear-gradient(0deg, ${color} 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                backgroundPosition: 'center center'
            }}></div>

            {/* Diagonal overlay for "Airy" feel */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] pointer-events-none mix-blend-overlay"></div>

            {/* Network Visualization Container */}
            <div className="relative w-full max-w-3xl aspect-[2/1] mb-8">

                {/* SVG Layer for Lines & Pulses */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                            <polygon points="0 0, 6 2, 0 4" fill={color} fillOpacity="0.3" />
                        </marker>
                    </defs>

                    {/* Static Connections */}
                    {connections.map((c, i) => {
                        const from = hubs.find(h => h.id === c.from);
                        const to = hubs.find(h => h.id === c.to);
                        return (
                            <g key={i}>
                                {/* Base Line */}
                                <line
                                    x1={`${from.x}%`}
                                    y1={`${from.y}%`}
                                    x2={`${to.x}%`}
                                    y2={`${to.y}%`}
                                    stroke={color}
                                    strokeOpacity="0.1"
                                    strokeWidth="1"
                                    strokeDasharray="4 4"
                                />
                                {/* Animated flow line (subtle) */}
                                <motion.line
                                    x1={`${from.x}%`}
                                    y1={`${from.y}%`}
                                    x2={`${to.x}%`}
                                    y2={`${to.y}%`}
                                    stroke={color}
                                    strokeOpacity="0.1"
                                    strokeWidth="1"
                                    strokeDasharray="4 4"
                                    animate={{ strokeDashoffset: [0, -8] }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                            </g>
                        );
                    })}

                    {/* Active Pulses (Packets) */}
                    {pulses.map(p => (
                        <motion.circle
                            key={p.id}
                            r="3"
                            fill={color}
                            initial={{ cx: `${p.x1}%`, cy: `${p.y1}%`, opacity: 0 }}
                            animate={{
                                cx: [`${p.x1}%`, `${p.x2}%`],
                                cy: [`${p.y1}%`, `${p.y2}%`],
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            onAnimationComplete={() => setPulses(prev => prev.filter(item => item.id !== p.id))}
                        />
                    ))}
                </svg>

                {/* Nodes (HTML/React Layer) */}
                {hubs.map(hub => (
                    <div
                        key={hub.id}
                        className="absolute flex flex-col items-center gap-2 group cursor-default"
                        style={{
                            left: `${hub.x}%`,
                            top: `${hub.y}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        {/* Icon Container */}
                        <div
                            className={`
                                relative flex items-center justify-center rounded-lg border border-white/10 bg-black/40 backdrop-blur-md shadow-xl transition-all duration-500
                                ${hub.type === 'hub' ? 'w-20 h-20 border-white/30' : 'w-12 h-12'}
                                ${hub.type === 'hub' ? 'group-hover:border-[var(--brand)]' : 'group-hover:border-white/30'}
                            `}
                            style={hub.type === 'hub' ? { borderColor: `${color}60`, boxShadow: `0 0 30px ${color}20` } : {}}
                        >
                            {/* Inner Glow for Hub */}
                            {hub.type === 'hub' && (
                                <div className="absolute inset-0 bg-[var(--brand)] opacity-10 animate-pulse rounded-lg"></div>
                            )}

                            {/* Icons */}
                            {hub.type === 'supplier' && <Factory size={20} className="text-white/60" />}
                            {hub.type === 'hub' && <Truck size={32} style={{ color: color }} />}
                            {hub.type === 'retailer' && <Store size={18} className="text-white/60" />}

                            {/* Status Dot */}
                            <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${demand > 20 ? 'bg-green-500' : 'bg-yellow-500'} border border-black`}></div>
                        </div>

                        {/* Label */}
                        <div className={`
                            px-2 py-0.5 rounded border border-white/10 bg-black/50 backdrop-blur text-[8px] font-mono tracking-widest text-white/50 uppercase whitespace-nowrap
                            transition-colors duration-300 group-hover:text-white group-hover:border-white/30
                        `}>
                            {hub.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Control Panel */}
            <div className="w-full max-w-sm bg-black/40 p-4 rounded-xl border border-white/10 backdrop-blur-md z-10 flex items-center gap-4">
                <div className="flex flex-col gap-1 min-w-[80px]">
                    <span className="text-[9px] uppercase tracking-widest text-white/50">Market Demand</span>
                    <span className="text-xl font-mono text-white leading-none">{demand}%</span>
                </div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={demand}
                    onChange={(e) => setDemand(parseInt(e.target.value))}
                    className="flex-1 h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer hover:bg-white/20 transition-colors"
                />
            </div>

            {/* Footer Label */}
            <div className="absolute bottom-4 left-4 text-[9px] text-white/20 font-mono tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] animate-pulse"></div>
                MODULE: SUPPLY_CHAIN_NERVOUS_SYSTEM_V4
            </div>
        </div>
    );
};

export default CommerceAI;
