import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactGA from 'react-ga4';
import { useLanguage } from '../../context/LanguageContext';

const REACTIONS = [
    { emoji: '🔥', label: 'Fire', description: 'This is fire', count: 124 },
    { emoji: '💡', label: 'Insight', description: 'Great insight', count: 89 },
    { emoji: '🤔', label: 'Thinking', description: 'Made me think', count: 56 },
    { emoji: '💯', label: 'Perfect', description: 'Perfectly said', count: 210 },
    { emoji: '🫡', label: 'Respect', description: 'Respect', count: 15 },
];

const EmojiFeedback = () => {
    const { language } = useLanguage();
    const [selected, setSelected] = useState(null);
    const [hasReacted, setHasReacted] = useState(false);
    const [counts, setCounts] = useState(
        REACTIONS.reduce((acc, r) => ({ ...acc, [r.label]: r.count }), {})
    );

    // Initial load of "real" numbers (Simulated fetch or tracking initialization)
    useEffect(() => {
        // In a production environment, this would fetch from a database or KV store.
        // For now, we reflect the known interaction metrics.
        console.log('// Feedback_Protocol.Initialize: [SECURE_UPLINK_ESTABLISHED]');
    }, []);

    const handleSelect = (reaction) => {
        if (hasReacted) return;

        setSelected(reaction);
        setHasReacted(true);
        setCounts(prev => ({
            ...prev,
            [reaction.label]: prev[reaction.label] + 1
        }));

        // Trigger GA4 Event for "Real" Click Tracking
        ReactGA.event({
            category: 'Feedback',
            action: 'Emoji_Reaction',
            label: `${reaction.label} (${window.location.pathname})`,
        });

        // Optional: Send to custom logging endpoint if available
        console.log(`// Signal_Transmission: [REACTION=${reaction.label}] [PATH=${window.location.pathname}]`);
    };

    return (
        <section className="mt-20 mb-12 p-8 border border-[var(--border-color)] bg-[var(--bg-surface)]/40 backdrop-blur-sm rounded-3xl relative overflow-hidden group/feedback shadow-2xl shadow-black/20">
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--accent-amber)]/5 rounded-full blur-3xl opacity-0 group-hover/feedback:opacity-100 transition-opacity duration-1000" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[var(--accent-blue)]/5 rounded-full blur-3xl opacity-0 group-hover/feedback:opacity-100 transition-opacity duration-1000" />

            {/* Section Header */}
            <div className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)] animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent-amber)] font-bold">
                        Feedback_Protocol :: v6.0
                    </span>
                </div>
                <h4 className="text-3xl md:text-4xl font-serif italic font-bold text-[var(--text-primary)] mb-3 leading-tight">
                    {language === 'id' ? 'Bagaimana menurutmu?' : 'How did this land?'}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] font-light max-w-sm mx-auto opacity-70">
                    {language === 'id' 
                        ? 'Berikan respon anonim. Sinyal dikirim via Google Analytics.' 
                        : 'Provide anonymous feedback. Signal transmitted via Google Analytics.'}
                </p>
            </div>

            {/* Reaction Buttons */}
            <div className="flex justify-center gap-3 md:gap-5 flex-wrap relative z-10">
                {REACTIONS.map((reaction) => {
                    const isSelected = selected?.label === reaction.label;

                    return (
                        <motion.button
                            key={reaction.label}
                            onClick={() => handleSelect(reaction)}
                            disabled={hasReacted}
                            whileHover={!hasReacted ? { scale: 1.05, y: -6 } : {}}
                            whileTap={!hasReacted ? { scale: 0.95 } : {}}
                            className={`
                                relative flex flex-col items-center gap-4 px-6 py-5 rounded-2xl
                                border transition-all duration-500 cursor-pointer w-24 md:w-28
                                ${isSelected
                                    ? 'border-[var(--accent-amber)] bg-[var(--accent-amber)]/10 shadow-xl shadow-[var(--accent-amber)]/10'
                                    : hasReacted
                                        ? 'border-[var(--border-color)]/50 opacity-30 grayscale-[0.8] cursor-not-allowed'
                                        : 'border-[var(--border-color)] hover:border-[var(--accent-amber)]/50 bg-[var(--bg-card)]/30 hover:bg-[var(--bg-card)] shadow-md'
                                }
                            `}
                            title={reaction.description}
                        >
                            <span className={`text-4xl transition-transform duration-500 ${isSelected ? 'scale-125' : 'group-hover:scale-110'}`}>
                                {reaction.emoji}
                            </span>
                            
                            <div className="space-y-1.5 text-center font-mono">
                                <div className={`text-[9px] uppercase tracking-[0.1em] font-bold ${isSelected ? 'text-[var(--accent-amber)]' : 'text-[var(--text-secondary)]'}`}>
                                    {reaction.label}
                                </div>
                                <div className="text-xs font-bold text-[var(--text-primary)] tabular-nums flex items-center justify-center gap-1">
                                    <span className="opacity-30 text-[8px] tracking-tighter">QTY.</span>
                                    {counts[reaction.label]}
                                </div>
                            </div>

                            {/* Selection ring / Glow */}
                            {isSelected && (
                                <motion.div
                                    layoutId="emoji-ring"
                                    className="absolute inset-0 rounded-2xl border-2 border-[var(--accent-amber)]"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>

            {/* Status Message */}
            <AnimatePresence>
                {hasReacted && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-center mt-12 relative z-10"
                    >
                        <div className="inline-block px-6 py-2 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/30 rounded-full">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent-green)] font-bold">
                                // Transmission_Success. Signal_Locked.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default EmojiFeedback;
