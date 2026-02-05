import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SignalAI = ({ color = '#3B82F6', manualPing = 0 }) => {
    const containerRef = useRef(null);
    const [waves, setWaves] = useState([]);
    const [packets, setPackets] = useState([]);

    // Respond to manual pings
    useEffect(() => {
        if (manualPing > 0) {
            setWaves(prev => [
                ...prev.slice(-4),
                { id: `manual-${Date.now()}`, scale: 0, opacity: 0.8 }
            ]);
        }
    }, [manualPing]);

    // Generate signal waves periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setWaves(prev => [
                ...prev.slice(-4), // Keep last 5 waves
                { id: Date.now(), scale: 0, opacity: 0.3 }
            ]);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Generate data packets
    useEffect(() => {
        const interval = setInterval(() => {
            setPackets(prev => [
                ...prev.slice(-15), // Keep last 15 packets
                {
                    id: Math.random(),
                    x: Math.random() * 100,
                    y: 110,
                    size: Math.random() * 3 + 1,
                    speed: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.2
                }
            ]);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-transparent flex items-center justify-center pointer-events-none">
            {/* AMBIENT GLOW */}
            <motion.div
                animate={{
                    opacity: [0.05, 0.1, 0.05],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[60vw] h-[60vw] rounded-full blur-[120px]"
                style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
            />

            {/* CONCENTRIC SIGNAL WAVES */}
            {waves.map(wave => (
                <motion.div
                    key={wave.id}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 8, ease: "easeOut" }}
                    className="absolute border border-current rounded-full"
                    style={{
                        width: '40vw',
                        height: '40vw',
                        color: color,
                        borderWidth: '1.5px'
                    }}
                />
            ))}

            {/* DATA PACKETS (Ascending) */}
            {packets.map(p => (
                <motion.div
                    key={p.id}
                    initial={{ y: '110%', x: `${p.x}%`, opacity: p.opacity }}
                    animate={{ y: '-10%' }}
                    transition={{ duration: p.speed, ease: "linear" }}
                    className="absolute w-px h-8"
                    style={{
                        backgroundColor: color,
                        boxShadow: `0 0 8px ${color}`
                    }}
                />
            ))}

            {/* TECHNICAL DECORATIONS */}
            <div className="absolute inset-0 flex flex-col justify-between p-12 opacity-30 font-mono text-[10px] uppercase tracking-[0.3em]">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>PROTOCOL: HANDSHAKE</span>
                        </div>
                        <div className="pl-3.5 opacity-50">ENCRYPTION: AES-256</div>
                    </div>
                    <div className="text-right">
                        <div>FREQUENCY: 2.4GHZ_INIT</div>
                        <div className="opacity-50">TX_BUFFER: READY</div>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <span className="opacity-50">SIGNAL:</span>
                            <span className="text-[var(--brand)]">STABLE</span>
                        </div>
                        <div className="h-8 w-px bg-current" />
                        <div className="flex flex-col">
                            <span className="opacity-50">UPLINK:</span>
                            <span>ACTIVE</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: ['0%', '100%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="h-full"
                                style={{ backgroundColor: color }}
                            />
                        </div>
                        <span>LINK_ESTABLISHED</span>
                    </div>
                </div>
            </div>

            {/* RADAR SWEEP EFFECT */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
                style={{
                    background: `conic-gradient(from 0deg, ${color} 0deg, transparent 90deg)`
                }}
            />
        </div>
    );
};

export default SignalAI;
