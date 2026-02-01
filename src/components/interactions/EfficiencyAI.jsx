import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, TrendingUp } from 'lucide-react';

const EfficiencyAI = ({ color = '#FA6130' }) => {
    const [optimized, setOptimized] = useState(false);

    // Node Definitions
    // Chaos: Random scattered positions
    // Order: Organized Columns (Suppliers -> Hub -> Retailers)
    const nodes = [
        // Suppliers (Left)
        { id: 's1', chaos: { x: 10, y: 20 }, order: { x: 20, y: 20 } },
        { id: 's2', chaos: { x: 30, y: 90 }, order: { x: 20, y: 50 } },
        { id: 's3', chaos: { x: 15, y: 60 }, order: { x: 20, y: 80 } },

        // Hub (Center)
        { id: 'h1', chaos: { x: 55, y: 45 }, order: { x: 50, y: 50 }, isHub: true },

        // Retailers (Right)
        { id: 'r1', chaos: { x: 85, y: 15 }, order: { x: 80, y: 20 } },
        { id: 'r2', chaos: { x: 70, y: 80 }, order: { x: 80, y: 50 } },
        { id: 'r3', chaos: { x: 90, y: 50 }, order: { x: 80, y: 80 } },
    ];

    // Connectivity: Suppliers -> Hub, Hub -> Retailers
    const connections = [
        { from: 's1', to: 'h1' }, { from: 's2', to: 'h1' }, { from: 's3', to: 'h1' },
        { from: 'h1', to: 'r1' }, { from: 'h1', to: 'r2' }, { from: 'h1', to: 'r3' }
    ];

    // Helper to calculate path d attribute
    const getPath = (conn, isOptimized) => {
        const start = isOptimized
            ? nodes.find(n => n.id === conn.from).order
            : nodes.find(n => n.id === conn.from).chaos;

        const end = isOptimized
            ? nodes.find(n => n.id === conn.to).order
            : nodes.find(n => n.id === conn.to).chaos;

        if (isOptimized) {
            // Straight efficient lines
            return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
        } else {
            // Messy, tangled cubic bezier curves
            // Deterministic pseudo-random control points based on IDs
            const seed = conn.from.charCodeAt(1) + conn.to.charCodeAt(1);
            const cp1x = start.x + Math.sin(seed) * 40;
            const cp1y = start.y + Math.cos(seed) * 40;
            const cp2x = end.x - Math.cos(seed) * 40;
            const cp2y = end.y - Math.sin(seed) * 40;

            return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
        }
    };

    return (
        <div className="w-full h-full min-h-[400px] relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] overflow-hidden flex flex-col items-center justify-center shadow-2xl">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Main Viz Area */}
            <div className="relative w-full max-w-lg aspect-video mb-8 select-none">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">

                    {/* 1. Connections (Paths) */}
                    {connections.map((conn, i) => (
                        <g key={`${conn.from}-${conn.to}`}>
                            {/* The Line Itself */}
                            <motion.path
                                d={getPath(conn, optimized)}
                                stroke={color}
                                strokeWidth={optimized ? 0.5 : 0.2}
                                strokeOpacity={optimized ? 0.2 : 0.4}
                                fill="none"
                                strokeDasharray={optimized ? "0 0" : "2 2"}
                                initial={false}
                                animate={{
                                    d: getPath(conn, optimized),
                                    strokeWidth: optimized ? 0.5 : 0.2,
                                    strokeOpacity: optimized ? 0.2 : 0.4,
                                    strokeDasharray: optimized ? "0 0" : "2 2"
                                }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                            />

                            {/* Moving Particles (Simulating Goods/Data) */}
                            <circle r="1" fill={color}>
                                <animateMotion
                                    dur={optimized ? "2s" : `${4 + i}s`}
                                    repeatCount="indefinite"
                                    path={getPath(conn, optimized)}
                                    // Key to force restart anim on path change:
                                    key={optimized ? 'opt' : 'chaos'}
                                />
                            </circle>
                        </g>
                    ))}

                    {/* 2. Nodes */}
                    {nodes.map(node => (
                        <motion.g
                            key={node.id}
                            initial={false}
                            animate={{
                                x: optimized ? node.order.x : node.chaos.x,
                                y: optimized ? node.order.y : node.chaos.y
                            }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                        >
                            {/* Node Glow */}
                            <circle r={node.isHub ? 8 : 4} fill={color} fillOpacity={0.1} />

                            {/* Core Node */}
                            <circle r={node.isHub ? 2.5 : 1.5} fill={color} stroke="none" />

                            {/* Label (Only visible when optimized) */}
                            <motion.text
                                y={node.isHub ? 6 : 4}
                                textAnchor="middle"
                                fontSize="3"
                                fill={color}
                                fontFamily="monospace"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: optimized ? 0.7 : 0 }}
                            >
                                {node.isHub ? 'HUB' : (node.id.startsWith('s') ? 'SUP' : 'SME')}
                            </motion.text>
                        </motion.g>
                    ))}
                </svg>
            </div>

            {/* Control Interface */}
            <div className="flex flex-col items-center gap-4 z-10">
                <button
                    onClick={() => setOptimized(!optimized)}
                    className="group relative px-8 py-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--brand)] transition-all overflow-hidden shadow-lg hover:shadow-[var(--brand)]/20"
                >
                    <div className={`absolute inset-0 bg-[var(--brand)] transition-opacity duration-500 ${optimized ? 'opacity-10' : 'opacity-0'}`} />

                    <div className="flex items-center gap-3 font-mono text-xs font-bold text-[var(--text-primary)] uppercase tracking-widest relative">
                        {optimized ? (
                            <>
                                <Network size={16} className="text-[var(--brand)]" />
                                <span>Network_Optimized</span>
                            </>
                        ) : (
                            <>
                                <Zap size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--brand)] transition-colors" />
                                <span>Optimize_Supply_Chain</span>
                            </>
                        )}
                    </div>
                </button>

                <div className="font-mono text-[10px] text-[var(--text-secondary)] flex gap-4 opacity-70">
                    <span>NODES: {nodes.length}</span>
                    <span>ROUTES: {connections.length}</span>
                    <span>EFFICIENCY: {optimized ? '98.4%' : '32.1%'}</span>
                </div>
            </div>
        </div>
    );
};

export default EfficiencyAI;
