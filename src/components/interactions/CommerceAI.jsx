import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Hubs (Static nodes)
const hubs = [
    { id: 'h1', x: 20, y: 50, size: 24 }, // Supplier
    { id: 'h2', x: 50, y: 30, size: 32 }, // Warehouse
    { id: 'h3', x: 50, y: 70, size: 32 }, // Dist Center
    { id: 'h4', x: 80, y: 50, size: 20 }, // Retailer
];

const connections = [
    { from: 'h1', to: 'h2' },
    { from: 'h1', to: 'h3' },
    { from: 'h2', to: 'h4' },
    { from: 'h3', to: 'h4' },
];

const CommerceAI = ({ color = '#00D1C7' }) => {
    const [pulses, setPulses] = useState([]);
    const [demand, setDemand] = useState(50); // 0-100

    useEffect(() => {
        // Generate traffic based on "Demand" slider
        const frequency = 1000 - (demand * 8); // Higher demand = faster
        const interval = setInterval(() => {
            const path = connections[Math.floor(Math.random() * connections.length)];
            const fromHub = hubs.find(h => h.id === path.from);
            const toHub = hubs.find(h => h.id === path.to);

            const newPulse = {
                id: Date.now(),
                x1: fromHub.x,
                y1: fromHub.y,
                x2: toHub.x,
                y2: toHub.y
            };
            setPulses(prev => [...prev.slice(-10), newPulse]);
        }, Math.max(100, frequency));

        return () => clearInterval(interval);
    }, [demand]);

    return (
        <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm p-8 flex flex-col items-center justify-center font-mono">
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear - gradient(45deg, ${color} 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
            }}></div>

            {/* Network Visualization */}
            <div className="relative w-full max-w-lg aspect-video mb-8">
                {/* Connections (Static Lines) */}
                {connections.map((c, i) => {
                    const from = hubs.find(h => h.id === c.from);
                    const to = hubs.find(h => h.id === c.to);
                    return (
                        <line key={i} x1={`${from.x}% `} y1={`${from.y}% `} x2={`${to.x}% `} y2={`${to.y}% `} stroke="white" strokeOpacity="0.1" strokeWidth="2" className="absolute top-0 left-0 w-full h-full" /> // SVG needed here really, using div approximation below
                    );
                })}

                {/* SVG Layer for lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {connections.map((c, i) => {
                        const from = hubs.find(h => h.id === c.from);
                        const to = hubs.find(h => h.id === c.to);
                        return <line key={i} x1={`${from.x}% `} y1={`${from.y}% `} x2={`${to.x}% `} y2={`${to.y}% `} stroke={color} strokeOpacity="0.2" strokeWidth="1" />;
                    })}

                    {/* Pulsing Packets */}
                    {pulses.map(p => (
                        <motion.circle
                            key={p.id}
                            r="4"
                            fill={color}
                            initial={{ cx: `${p.x1}% `, cy: `${p.y1}% ` }}
                            animate={{ cx: `${p.x2}% `, cy: `${p.y2}% ` }}
                            transition={{ duration: 1, ease: "linear" }}
                            onAnimationComplete={() => setPulses(prev => prev.filter(item => item.id !== p.id))}
                        />
                    ))}
                </svg>

                {/* Hubs */}
                {hubs.map(hub => (
                    <motion.div
                        key={hub.id}
                        className="absolute rounded-full border-2 bg-[var(--bg-card)] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                        style={{
                            borderColor: color,
                            width: hub.size,
                            height: hub.size,
                            left: `${hub.x}% `,
                            top: `${hub.y}% `,
                            transform: 'translate(-50%, -50%)' // Center anchor
                        }}
                    >
                        <div className="w-1/2 h-1/2 bg-current rounded-full opacity-50" style={{ color: color }}></div>
                    </motion.div>
                ))}
            </div>

            {/* Control Panel */}
            <div className="w-full max-w-xs bg-[var(--bg-card)]/50 p-4 rounded-lg border border-white/10 backdrop-blur-md z-10">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                    <span>Market Demand</span>
                    <span>{demand}%</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={demand}
                    onChange={(e) => setDemand(parseInt(e.target.value))}
                    className="w-full h-1 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer accent-[var(--brand)]"
                    style={{ accentColor: color }}
                />
            </div>

            <div className="absolute bottom-4 left-4 text-[10px] text-gray-500">
                MODULE: SUPPLY_CHAIN_NERVOUS_SYSTEM_V4
            </div>
        </div>
    );
};

export default CommerceAI;
