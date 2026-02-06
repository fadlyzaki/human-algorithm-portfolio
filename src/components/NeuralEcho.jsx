import React, { useState, useEffect, useMemo } from 'react';
import { RefreshCw, Zap, Cpu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
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
        <div className="relative group min-h-[180px] flex flex-col justify-between p-8 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] transition-all duration-700 overflow-hidden shadow-2xl">
            {/* Neural Pattern Background Overlay */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-blue)]/30 to-transparent"></div>

            {/* Header / Subtitle */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Cpu size={16} className="text-[var(--accent-blue)]" />
                        <motion.div
                            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--accent-blue)] rounded-full blur-[2px]"
                        ></motion.div>
                    </div>
                    <span className="font-mono text-[10px] text-[var(--text-card-secondary)] uppercase tracking-[0.4em] font-bold">
                        {t('about.neural_echo.subtitle')}
                    </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 bg-[var(--accent-blue)]/10 rounded-full border border-[var(--accent-blue)]/20">
                    <div className="flex gap-1 items-end h-2">
                        {[1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                animate={{ height: [2, 8, 4, 6, 2] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                className="w-0.5 bg-[var(--accent-blue)] rounded-full"
                            />
                        ))}
                    </div>
                    <span className="font-mono text-[8px] text-[var(--accent-blue)] uppercase tracking-widest font-bold">Signal_Active</span>
                </div>
            </div>

            {/* Main Echo Display */}
            <div className="relative flex-grow flex items-start py-2">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="font-mono text-base md:text-[1.1rem] text-[var(--text-card)] leading-relaxed max-w-2xl border-l-2 border-[var(--accent-blue)]/20 pl-6 py-1"
                    >
                        <div className="text-[10px] text-[var(--accent-blue)] mb-2 uppercase tracking-tighter opacity-70 select-none flex items-center gap-2 font-bold">
                            <span className="w-4 h-[1px] bg-[var(--accent-blue)]/40"></span>
                            PROTOCOL_0x{currentIndex.toString(16).padStart(2, '0').toUpperCase()}
                        </div>
                        <div className="relative inline">
                            {displayText}
                            {isTyping && (
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-2 h-5 bg-[var(--accent-blue)] ml-2 align-middle shadow-[0_0_12px_var(--accent-blue)]"
                                />
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-between pt-6 border-t border-[var(--border-color)]/5">
                <button
                    onClick={handleRefresh}
                    disabled={isTyping}
                    className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-all px-5 py-2.5 rounded-xl border
                        ${isTyping
                            ? 'opacity-20 cursor-not-allowed border-transparent'
                            : 'text-[var(--text-card-secondary)] hover:text-[var(--accent-blue)] bg-[var(--bg-void)]/10 border-[var(--border-color)]/20 hover:border-[var(--accent-blue)]/50 hover:bg-[var(--accent-blue)]/5 hover:shadow-lg hover:shadow-[var(--accent-blue)]/5'}`}
                >
                    <RefreshCw size={14} className={isTyping ? '' : 'group-hover:rotate-180 transition-transform duration-1000'} />
                    {t('about.neural_echo.refresh')}
                </button>

                <div className="flex items-center gap-6 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="flex items-center gap-2.5">
                        <div className={`h-1.5 w-1.5 rounded-full ${isTyping ? 'bg-[var(--accent-blue)] animate-pulse' : 'bg-[var(--accent-green)] shadow-[0_0_8px_var(--accent-green)]'}`}></div>
                        <span className="font-mono text-[9px] tracking-[0.15em] font-bold uppercase text-[var(--text-card-secondary)]">Neural_Synapse_OK</span>
                    </div>
                    <div className="hidden sm:block h-4 w-[1px] bg-[var(--border-color)]/20"></div>
                    <span className="hidden sm:block font-mono text-[9px] tracking-widest text-[var(--accent-blue)] font-bold uppercase">Kernel_v2.5.0</span>
                </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-[var(--accent-blue)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms] -z-10 pointer-events-none"></div>
        </div>
    );
};

export default NeuralEcho;
