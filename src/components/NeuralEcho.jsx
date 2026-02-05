import React, { useState, useEffect, useMemo } from 'react';
import { RefreshCw, Zap, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const NeuralEcho = () => {
    const { t } = useLanguage();
    const insights = useMemo(() => t('about.neural_echo.insights') || [], [t]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (!insights.length) return;

        let i = 0;
        setDisplayText('');
        setIsTyping(true);

        const fullText = insights[currentIndex];
        const timer = setInterval(() => {
            setDisplayText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(timer);
                setIsTyping(false);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [currentIndex, insights]);

    const handleRefresh = () => {
        if (isTyping) return;
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * insights.length);
        } while (nextIndex === currentIndex && insights.length > 1);
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="relative group min-h-[160px] flex flex-col justify-between p-6 bg-[var(--bg-void)]/30 rounded-xl border border-[var(--border-color)]/20 hover:border-[var(--accent-blue)]/50 transition-all duration-700 overflow-hidden">
            {/* Neural Pattern Background Overlay */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-blue)]/20 to-transparent"></div>

            {/* Header / Subtitle */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Cpu size={14} className="text-[var(--accent-blue)]" />
                        <motion.div
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--accent-blue)] rounded-full blur-[2px]"
                        ></motion.div>
                    </div>
                    <span className="font-mono text-[10px] text-[var(--text-card-secondary)] uppercase tracking-[0.3em] font-bold">
                        {t('about.neural_echo.subtitle')}
                    </span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[var(--accent-blue)]/10 rounded-full border border-[var(--accent-blue)]/20">
                    <div className="flex gap-0.5">
                        {[1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                animate={{ height: [4, 8, 4] }}
                                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                className="w-0.5 bg-[var(--accent-blue)] rounded-full"
                            />
                        ))}
                    </div>
                    <span className="font-mono text-[8px] text-[var(--accent-blue)] uppercase tracking-tighter">Live Signal</span>
                </div>
            </div>

            {/* Main Echo Display */}
            <div className="relative flex-grow flex items-center py-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="font-mono text-base md:text-lg text-[var(--text-card)] leading-relaxed max-w-2xl border-l border-[var(--accent-blue)]/30 pl-4 py-1"
                    >
                        <span className="text-[var(--accent-blue)]/50 mr-2 opacity-50 select-none">DEBUG_LOG_0{currentIndex + 1}:</span>
                        {displayText}
                        {isTyping && (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-1.5 h-4 bg-[var(--accent-blue)] ml-1 align-middle shadow-[0_0_8px_var(--accent-blue)]"
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-[var(--border-color)]/10">
                <button
                    onClick={handleRefresh}
                    disabled={isTyping}
                    className={`flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest transition-all px-4 py-2 rounded-lg border border-transparent
                        ${isTyping ? 'opacity-20 cursor-not-allowed' : 'text-[var(--text-card-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/5 hover:border-[var(--accent-blue)]/20'}`}
                >
                    <RefreshCw size={12} className={isTyping ? '' : 'group-hover:rotate-180 transition-transform duration-700'} />
                    {t('about.neural_echo.refresh')}
                </button>

                <div className="flex items-center gap-4 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                    <div className="flex items-center gap-2">
                        <div className={`h-1.5 w-1.5 rounded-full ${isTyping ? 'bg-[var(--accent-blue)] animate-pulse' : 'bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]'}`}></div>
                        <span className="font-mono text-[8px] tracking-[0.1em]">SYSTEM_READY</span>
                    </div>
                    <span className="font-mono text-[8px] border-l border-[var(--border-color)] pl-4">HASH_0x{currentIndex.toString(16).toUpperCase()}</span>
                </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-[var(--accent-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 pointer-events-none"></div>
        </div>
    );
};

export default NeuralEcho;
