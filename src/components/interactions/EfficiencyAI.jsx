import React, { useState } from 'react';
// import { motion } from 'framer-motion';
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
        <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm p-8 flex flex-col items-center justify-center font-mono">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
            }}></div>

            {/* Network Visualization */}
            <div className="relative w-full max-w-lg aspect-video mb-8">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    {/* 1. Connections (Paths) */}
                    {connections.map((conn, i) => (
                        <g key={`${conn.from}-${conn.to}`}>
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

                            {/* Moving Particles */}
                            <circle r="1" fill={color}>
                                <animateMotion
                                    dur={optimized ? "2s" : `${4 + i}s`}
                                    repeatCount="indefinite"
                                    path={getPath(conn, optimized)}
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
                            <circle r={node.isHub ? 8 : 4} fill={color} fillOpacity={0.1} />
                            <circle r={node.isHub ? 2.5 : 1.5} fill={color} stroke="none" />
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

            {/* Control Panel */}
            <div className="w-full max-w-xs bg-[var(--bg-card)]/50 p-4 rounded-lg border border-white/10 backdrop-blur-md z-10">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">Operational Heuristics</span>
                        <span className="text-[9px] text-[var(--brand)] opacity-80 font-mono">{optimized ? 'ALGORITHM_ACTIVE' : 'SYSTEM_IDLE'}</span>
                    </div>
                    <button
                        onClick={() => setOptimized(!optimized)}
                        className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${optimized ? 'bg-[var(--brand)]' : 'bg-gray-700/50'}`}
                    >
                        <motion.div
                            animate={{ x: optimized ? 22 : 2 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm"
                        />
                    </button>
                </div>
            </div>

            {/* Technical Metadata */}
            <div className="absolute bottom-4 left-4 text-[10px] text-gray-500 font-mono flex flex-col gap-0.5 pointer-events-none opacity-60">
                <div className="flex items-center gap-2">
                    <span className={`w-1 h-1 rounded-full ${optimized ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></span>
                    <span>LOGISTICS_ENGINE: V3.4.1</span>
                </div>
                <div>NODES: {nodes.length} // ROUTES: {connections.length}</div>
                <div>EFFICIENCY: {optimized ? '98.4%' : '32.1%'}</div>
            </div>
        </div>
    );
};

export default EfficiencyAI;
