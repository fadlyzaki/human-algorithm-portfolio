import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';

const WorkforceAI = ({ color = '#1AA8B4' }) => {
    const [nodes] = useState(() => {
        const leftNodes = Array.from({ length: 5 }).map((_, i) => ({
            id: `l-${i}`,
            x: 20,
            y: 20 + i * 15,
            type: 'candidate'
        }));
        const rightNodes = Array.from({ length: 5 }).map((_, i) => ({
            id: `r-${i}`,
            x: 80,
            y: 30 + i * 12,
            type: 'job'
        }));
        return [...leftNodes, ...rightNodes];
    });

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        // Simulate matching process loop
        const interval = setInterval(() => {
            // Need to filter nodes from state to be safe, or just re-generate since static logic
            const currentNodes = nodes;
            const leftNodes = currentNodes.filter(n => n.type === 'candidate');
            const rightNodes = currentNodes.filter(n => n.type === 'job');

            if (leftNodes.length === 0 || rightNodes.length === 0) return;

            const matchId = Date.now();
            const startNode = leftNodes[Math.floor(Math.random() * leftNodes.length)];
            const endNode = rightNodes[Math.floor(Math.random() * rightNodes.length)];

            const newMatch = {
                id: matchId,
                x1: startNode.x,
                y1: startNode.y,
                x2: endNode.x,
                y2: endNode.y,
                score: Math.floor(Math.random() * 30) + 70 // 70-100%
            };

            setMatches(prev => [...prev.slice(-4), newMatch]);
        }, 2000);

        return () => clearInterval(interval);
    }, [nodes]);

    return (
        <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center font-mono">
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
            }}></div>

            <div className="relative w-full max-w-lg aspect-video">
                {/* Nodes */}
                {nodes.map(node => (
                    <motion.div
                        key={node.id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute w-3 h-3 rounded-full border-2 bg-[var(--bg-card)]"
                        style={{
                            borderColor: color,
                            left: `${node.x}%`,
                            top: `${node.y}%`
                        }}
                    >
                        <div className={`absolute ${node.type === 'candidate' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] text-gray-500 uppercase tracking-wider`}>
                            {node.type}
                        </div>
                    </motion.div>
                ))}

                {/* Connections */}
                <AnimatePresence>
                    {matches.map(m => (
                        <motion.svg
                            key={m.id}
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.line
                                x1={`${m.x1}%`}
                                y1={`${m.y1}%`}
                                x2={`${m.x2}%`}
                                y2={`${m.y2}%`}
                                stroke={color}
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1 }}
                            />

                            {/* Score Bubble */}
                            <foreignObject x={`${(m.x1 + m.x2) / 2}%`} y={`${(m.y1 + m.y2) / 2}%`} width="40" height="20">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="bg-[var(--bg-card)] text-[10px] px-1 rounded border text-center"
                                    style={{ borderColor: color, color: color }}
                                >
                                    {m.score}%
                                </motion.div>
                            </foreignObject>
                        </motion.svg>
                    ))}
                </AnimatePresence>
            </div>

            <div className="absolute bottom-4 left-4 text-[10px] text-gray-500">
                ALGORITHM: BIPARTITE_MATCHING_V2
                <br />
                LATENCY: 12ms
            </div>
        </div>
    );
};

export default WorkforceAI;
