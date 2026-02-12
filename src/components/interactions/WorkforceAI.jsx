import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { User, Briefcase, CheckCircle2, Search, Zap } from 'lucide-react';

const WorkforceAI = ({ color = '#1AA8B4' }) => {
    // Static Nodes Data
    const candidates = [
        { id: 'c1', role: 'Forklift Driver', exp: '3y', status: 'idle' },
        { id: 'c2', role: 'Warehouse Admin', exp: '5y', status: 'idle' },
        { id: 'c3', role: 'Packer', exp: '1y', status: 'idle' },
        { id: 'c4', role: 'Logistic Coord', exp: '4y', status: 'idle' },
    ];

    const jobs = [
        { id: 'j1', title: 'PT. Logistik', type: 'Driver', status: 'open' },
        { id: 'j2', title: 'Gudang Damai', type: 'Admin', status: 'open' },
        { id: 'j3', title: 'Express Corp', type: 'Packer', status: 'open' },
        { id: 'j4', title: 'Cargo X', type: 'Coord', status: 'open' },
    ];

    const [scanLineY, setScanLineY] = useState(0);
    const [matches, setMatches] = useState([]);

    // Simulate Scanning & Matching
    useEffect(() => {
        const interval = setInterval(() => {
            // Random match generation
            const candidateIdx = Math.floor(Math.random() * candidates.length);
            const jobIdx = Math.floor(Math.random() * jobs.length);

            const newMatch = {
                id: Date.now(),
                cIdx: candidateIdx,
                jIdx: jobIdx,
                score: Math.floor(Math.random() * 15) + 85 // High match score
            };

            setMatches(prev => [...prev.slice(-3), newMatch]);
        }, 1500); // New match every 1.5s

        return () => clearInterval(interval);
    }, []);

    // Animation for Scan Line
    useEffect(() => {
        const scanInterval = setInterval(() => {
            setScanLineY(prev => (prev === 100 ? 0 : 100)); // Toggle scan line
        }, 2000);
        return () => clearInterval(scanInterval);
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center font-mono select-none">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                backgroundImage: `linear-gradient(0deg, ${color} 1px, transparent 1px)`,
                backgroundSize: '100% 20px'
            }}></div>

            {/* Central "Airy" Split Container */}
            <div className="relative w-full max-w-2xl h-[300px] flex justify-between items-center px-4 md:px-12">

                {/* LEFT COLUMN: CANDIDATES */}
                <div className="flex flex-col gap-4 relative z-10 w-1/3">
                    <div className="mb-2 text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-1 flex justify-between">
                        <span>Candidate_Pool</span>
                        <span>N={candidates.length}</span>
                    </div>
                    {candidates.map((c, i) => (
                        <div key={c.id} className="relative group">
                            <div className="flex items-center gap-3 p-2 rounded-lg border border-white/5 bg-black/20 backdrop-blur-sm hover:border-white/20 transition-all">
                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                                    <User size={14} className="text-white/70" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-white/90 font-bold">{c.role}</span>
                                    <span className="text-[8px] text-white/50">{c.exp} Experience</span>
                                </div>
                            </div>
                            {/* Connector Point Left */}
                            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        </div>
                    ))}

                    {/* Scan Line Overlay (Left) */}
                    <div
                        className="absolute inset-0 border-y border-[var(--brand)]/30 pointer-events-none transition-all duration-[2000ms] ease-in-out bg-gradient-to-b from-transparent via-[var(--brand)]/5 to-transparent"
                        style={{ top: `${scanLineY === 100 ? '90%' : '0%'}`, height: '10%' }}
                    ></div>
                </div>

                {/* CENTER: MATCHING ENGINE */}
                <div className="flex-1 h-full mx-4 relative">
                    {/* Central Synapse Node */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center"></div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[var(--brand)]/10 rounded-full flex items-center justify-center shadow-[0_0_20px_var(--brand)] animate-pulse">
                        <Zap size={14} style={{ color: color }} />
                    </div>

                    {/* Dynamic Connections SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <AnimatePresence>
                            {matches.map(m => {
                                // Calculate approximated positions based on index (assuming fixed height rows)
                                // Left Col Rows: ~44px + gap 16px -> center y approx matches index
                                const rowHeight = 60; // Approximate
                                const startY = (m.cIdx * rowHeight) + 30; // + offset
                                const endY = (m.jIdx * rowHeight) + 30;

                                return (
                                    <g key={m.id}>
                                        {/* The Beam */}
                                        <motion.path
                                            d={`M 0,${startY} C 50,${startY} 50,${endY} 100,${endY}`} // Simple Bezier
                                            fill="none"
                                            stroke={color}
                                            strokeWidth="1.5"
                                            strokeOpacity="0.4"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            style={{ vectorEffect: 'non-scaling-stroke' }} // Attempt to keep stroke const
                                        // Note: SVG coord space is tricky here without absolute pixels. 
                                        // We'll use percentages for simplicity in this constrained view.
                                        />

                                        {/* Traveling Packet */}
                                        <motion.circle
                                            r="3"
                                            fill="#fff"
                                            initial={{ offsetDistance: "0%" }}
                                            animate={{ offsetDistance: "100%" }}
                                            transition={{ duration: 0.8, ease: "linear" }}
                                            style={{
                                                offsetPath: `path("M 0,${startY} C 150,${startY} 150,${endY} 300,${endY}")` // Approx width of center gap is ~200-300px
                                            }}
                                        />

                                        {/* Match Badge (Center) */}
                                        <motion.foreignObject
                                            x="35%" y="40%" width="30%" height="20%"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <div className="flex justify-center items-center h-full">
                                                <div className="px-2 py-0.5 bg-[var(--brand)] text-white text-[9px] font-mono rounded shadow-lg border border-white/20">
                                                    Match: {m.score}%
                                                </div>
                                            </div>
                                        </motion.foreignObject>
                                    </g>
                                );
                            })}
                        </AnimatePresence>

                        {/* Connection Lines Logic for SVG props above needs real coords. 
                            Instead, let's use simple CSS absolute positioning lines for robustness if SVG is complex.
                            Actually, Framer Motion SVG is best. Let's precise the coords. 
                            The container is flex. Let's assume standard spacing.
                        */}
                    </svg>

                    {/* Alternative: Simple localized match lines using standard divs if SVG aligns poorly.
                        But let's stick to the SVG layer, but simplified.
                     */}
                    {matches.map(m => (
                        <div key={`line-${m.id}`} className="absolute inset-0 pointer-events-none">
                            {/* CSS-based line via clip-path or transform is hard for bezier. 
                                 Let's use a simpler distinct visualization:
                                 Just draw the connection from Left Node to Right Node using absolute spans.
                             */}
                        </div>
                    ))}
                </div>

                {/* RIGHT COLUMN: JOBS */}
                <div className="flex flex-col gap-4 relative z-10 w-1/3 items-end text-right">
                    <div className="mb-2 text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-1 flex justify-between w-full">
                        <span>Open_Reqs</span>
                        <span>Job_Queue</span>
                    </div>
                    {jobs.map((j, i) => (
                        <div key={j.id} className="relative group w-full flex justify-end">
                            {/* Connector Point Right */}
                            <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20"></div>

                            <div className="flex items-center gap-3 p-2 rounded-lg border border-white/5 bg-black/20 backdrop-blur-sm hover:border-white/20 transition-all w-full flex-row-reverse">
                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                                    <Briefcase size={14} className="text-white/70" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-white/90 font-bold">{j.title}</span>
                                    <span className="text-[8px] text-white/50">{j.type} Required</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Dynamic SVG Layer for Matches (Overlaying the whole container) */}
            {/* We render this separate to ensure coordinates align with the 33% columns */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {matches.map(m => {
                    // Approximate Y locations based on index (assuming nicely stacked 4 items)
                    // H=300px. 4 items -> ~75px each. Center ~37px.
                    // Start X ~ 33%, End X ~ 66%.
                    const rowH = 300 / 4;
                    const y1 = (m.cIdx * rowH) + (rowH / 2) + 20; // +20 padding offset
                    const y2 = (m.jIdx * rowH) + (rowH / 2) + 20;

                    return (
                        <motion.path
                            key={m.id}
                            d={`M 33% ${y1} C 45% ${y1}, 55% ${y2}, 66% ${y2}`}
                            fill="none"
                            stroke={color}
                            strokeWidth="1.5"
                            strokeOpacity="0.6"
                            initial={{ pathLength: 0, opacity: 0.5 }}
                            animate={{ pathLength: 1, opacity: [0.5, 1, 0] }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            onAnimationComplete={() => setMatches(prev => prev.filter(p => p.id !== m.id))}
                        />
                    );
                })}
            </svg>

            {/* Footer Metadata */}
            <div className="absolute bottom-4 left-4 text-[9px] text-gray-500 font-mono tracking-widest flex items-center gap-3">
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] animate-pulse"></div>
                    ALGORITHM: BIPARTITE_MATCHING_V2
                </div>
                <span className="opacity-50">|</span>
                <span className="opacity-70">LATENCY: 12ms</span>
            </div>
        </div>
    );
};

export default WorkforceAI;
