import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NexusAI = ({ color = '#3B82F6' }) => {
    const containerRef = useRef(null);
    const [points, setPoints] = useState([]);
    const [connections, setConnections] = useState([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Initialize random points
    useEffect(() => {
        const initialPoints = Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10,
            size: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            type: Math.random() > 0.5 ? 'core' : 'node'
        }));
        setPoints(initialPoints);
    }, []);

    // Animation loop for movement
    useEffect(() => {
        let frame;
        const move = () => {
            setPoints(prev => prev.map(p => {
                let nextX = p.x + p.vx;
                let nextY = p.y + p.vy;

                // Bounce
                let nextVx = p.vx;
                let nextVy = p.vy;
                if (nextX < 5 || nextX > 95) nextVx *= -1;
                if (nextY < 5 || nextY > 95) nextVy *= -1;

                return { ...p, x: nextX, y: nextY, vx: nextVx, vy: nextVy };
            }));

            // Generate connections trial
            setConnections(() => {
                const newConns = [];
                // Only a few active connections at a time
                if (Math.random() > 0.95) {
                    const p1 = Math.floor(Math.random() * 12);
                    const p2 = Math.floor(Math.random() * 12);
                    if (p1 !== p2) {
                        newConns.push({ id: Date.now(), from: p1, to: p2 });
                    }
                }
                return newConns;
            });

            frame = requestAnimationFrame(move);
        };
        frame = requestAnimationFrame(move);
        return () => cancelAnimationFrame(frame);
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="w-full h-full relative overflow-hidden bg-transparent flex items-center justify-center font-mono"
        >
            {/* Ambient Pulse */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-[40vw] h-[40vw] rounded-full blur-[100px]"
                    style={{ background: color }}
                />
            </div>

            <div className="relative w-full h-full max-w-4xl aspect-video">
                {/* SVG Connections Layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    <AnimatePresence>
                        {points.map((p1, i) => {
                            // Find nearby points to draw subtle lines
                            return points.slice(i + 1).map(p2 => {
                                const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                                if (dist < 25) {
                                    return (
                                        <motion.line
                                            key={`${p1.id}-${p2.id}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: (1 - dist / 25) * 0.2 }}
                                            x1={`${p1.x}%`}
                                            y1={`${p1.y}%`}
                                            x2={`${p2.x}%`}
                                            y2={`${p2.y}%`}
                                            stroke={color}
                                            strokeWidth="0.5"
                                        />
                                    );
                                }
                                return null;
                            });
                        })}
                    </AnimatePresence>

                    {/* Mouse Proximity Lines */}
                    {points.map(p => {
                        const dist = Math.hypot(p.x - mousePos.x, p.y - mousePos.y);
                        if (dist < 15) {
                            return (
                                <line
                                    key={`mouse-${p.id}`}
                                    x1={`${p.x}%`} y1={`${p.y}%`}
                                    x2={`${mousePos.x}%`} y2={`${mousePos.y}%`}
                                    stroke={color}
                                    strokeWidth="1"
                                    opacity={(1 - dist / 15) * 0.4}
                                />
                            );
                        }
                        return null;
                    })}
                </svg>

                {/* Nodes Layer */}
                {points.map(point => (
                    <motion.div
                        key={point.id}
                        className="absolute rounded-full z-20"
                        style={{
                            left: `${point.x}%`,
                            top: `${point.y}%`,
                            width: point.size * 4,
                            height: point.size * 4,
                            backgroundColor: color,
                            boxShadow: `0 0 ${point.size * 10}px ${color}`,
                            opacity: point.type === 'core' ? 0.8 : 0.4
                        }}
                        animate={{
                            scale: point.type === 'core' ? [1, 1.2, 1] : 1
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: point.id * 0.2
                        }}
                    >
                        {point.type === 'core' && (
                            <div className="absolute inset-[-4px] border border-white/20 rounded-full animate-ping opacity-20" />
                        )}
                    </motion.div>
                ))}

                {/* Dynamic Data Bursts */}
                <div className="absolute bottom-10 right-10 flex flex-col items-end gap-1 opacity-40">
                    <div className="text-[10px] uppercase tracking-tighter">SYNTHESIS_ACTIVE</div>
                    <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-1/2 h-full"
                            style={{ background: color }}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Left Label */}
            <div className="absolute bottom-8 left-8 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] opacity-50">Experimental_Node_v0.1</span>
                </div>
                <div className="text-[12px] font-mono opacity-30">
                    IDEATION: RECURSIVE
                </div>
            </div>
        </div>
    );
};

export default NexusAI;
