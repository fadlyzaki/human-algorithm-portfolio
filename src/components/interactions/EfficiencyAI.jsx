import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Shuffle, CheckCircle2 } from 'lucide-react';

const EfficiencyAI = ({ color = '#FA6130' }) => {
    const [optimized, setOptimized] = useState(false);

    // Initial chaotic paths
    const chaosPaths = [
        "M10,10 Q50,90 90,10",
        "M10,50 Q50,10 90,50",
        "M10,90 Q50,10 90,90",
        "M50,10 L50,90"
    ];

    // Optimized Clean Grid
    const orderPaths = [
        "M10,20 L90,20",
        "M10,40 L90,40",
        "M10,60 L90,60",
        "M10,80 L90,80"
    ];

    return (
        <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-black/5 rounded-xl border border-white/10 backdrop-blur-sm p-8 flex flex-col items-center justify-center font-mono">
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear-gradient(90deg, ${color} 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}></div>

            <div className="relative w-full max-w-lg aspect-video mb-8 border border-white/5 bg-[var(--bg-card)]/30 rounded-lg overflow-hidden">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    {chaosPaths.map((path, i) => (
                        <motion.path
                            key={i}
                            d={optimized ? orderPaths[i] : path}
                            stroke={color}
                            strokeWidth="1"
                            fill="none"
                            initial={false}
                            animate={{
                                d: optimized ? orderPaths[i] : path,
                                strokeOpacity: optimized ? 0.8 : 0.4
                            }}
                            transition={{ type: "spring", stiffness: 40, damping: 10 }}
                        />
                    ))}

                    {/* Nodes appearing on optimization */}
                    {optimized && [10, 30, 50, 70, 90].map((x, i) => (
                        <motion.circle
                            key={`n-${i}`}
                            cx={x} cy={50} r="1.5"
                            fill={color}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                        />
                    ))}
                </svg>
            </div>

            <button
                onClick={() => setOptimized(!optimized)}
                className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-[var(--bg-card)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-void)] transition-all uppercase text-xs tracking-widest"
                style={{
                    color: optimized ? 'var(--bg-void)' : color,
                    backgroundColor: optimized ? color : 'var(--bg-card)'
                }}
            >
                {optimized ? (
                    <>
                        <CheckCircle2 size={16} /> SYSTEM_OPTIMIZED
                    </>
                ) : (
                    <>
                        <Shuffle size={16} /> RUN_OPTIMIZER
                    </>
                )}
            </button>

            <div className="absolute bottom-4 left-4 text-[10px] text-gray-500">
                STATUS: {optimized ? 'O(n) Log Linear' : 'O(n^2) Quadratic Chaos'}
            </div>
        </div>
    );
};

export default EfficiencyAI;
