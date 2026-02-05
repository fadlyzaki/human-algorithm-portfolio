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
        <div className="relative group min-h-[160px] flex flex-col justify-center">
            {/* Header / Subtitle */}
            <div className="flex items-center gap-2 mb-4 group-hover:text-[var(--accent-blue)] transition-colors duration-500">
                <Cpu size={14} className="text-[var(--accent-blue)]" />
                <span className="font-mono text-[10px] text-[var(--text-card-secondary)] uppercase tracking-[0.2em] font-bold">
                    {t('about.neural_echo.subtitle')}
                </span>
            </div>

            {/* Main Echo Display */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 5 }}
                        className="font-mono text-lg md:text-xl text-[var(--text-card)] leading-tight max-w-3xl"
                    >
                        <span className="text-[var(--accent-blue)] mr-2">{'>'}</span>
                        {displayText}
                        {isTyping && (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2 h-5 bg-[var(--accent-blue)] ml-1 align-middle"
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center gap-6">
                <button
                    onClick={handleRefresh}
                    disabled={isTyping}
                    className={`flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest transition-all
                        ${isTyping ? 'opacity-20 cursor-not-allowed' : 'text-[var(--text-card-secondary)] hover:text-[var(--accent-blue)]'}`}
                >
                    <RefreshCw size={12} className={isTyping ? '' : 'group-hover:rotate-180 transition-transform duration-500'} />
                    {t('about.neural_echo.refresh')}
                </button>

                <div className="h-[1px] flex-grow bg-gradient-to-r from-[var(--border-color)] to-transparent opacity-30"></div>

                <div className="flex items-center gap-2 opacity-20">
                    <div className={`h-1 w-1 rounded-full ${isTyping ? 'bg-[var(--accent-blue)] animate-pulse' : 'bg-green-500'}`}></div>
                    <span className="font-mono text-[8px]">CORE_V1.0.4</span>
                </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-[var(--accent-blue)]/5 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
        </div>
    );
};

export default NeuralEcho;
