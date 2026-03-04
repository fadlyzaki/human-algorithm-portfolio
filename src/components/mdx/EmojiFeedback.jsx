/**
 * EmojiFeedback — Interactive emoji reaction component for MDX posts
 *
 * Embeddable in MDX files via <EmojiFeedback /> at the end of a thought.
 * Tracks user selection in local state with a thank-you animation.
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const REACTIONS = [
    { emoji: '🔥', label: 'Fire', description: 'This is fire', count: 124 },
    { emoji: '💡', label: 'Insight', description: 'Great insight', count: 89 },
    { emoji: '🤔', label: 'Thinking', description: 'Made me think', count: 56 },
    { emoji: '💯', label: 'Perfect', description: 'Perfectly said', count: 210 },
    { emoji: '🫡', label: 'Respect', description: 'Respect', count: 15 },
];

const EmojiFeedback = () => {
    const [selected, setSelected] = useState(null);
    const [hasReacted, setHasReacted] = useState(false);
    const [counts, setCounts] = useState(
        REACTIONS.reduce((acc, r) => ({ ...acc, [r.label]: r.count }), {})
    );

    const handleSelect = (reaction) => {
        setSelected(reaction);
        setHasReacted(true);
        setCounts(prev => ({
            ...prev,
            [reaction.label]: prev[reaction.label] + 1
        }));
    };

    return (
        <div className="mt-16 mb-8 pt-12 border-t border-[var(--border-color)]">
            {/* Section Header */}
            <div className="text-center mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] block mb-2">
          // feedback protocol
                </span>
                <h4 className="text-lg font-sans font-medium text-[var(--text-primary)]">
                    How did this land?
                </h4>
            </div>

            {/* Reaction Buttons */}
            <div className="flex justify-center gap-3 flex-wrap">
                {REACTIONS.map((reaction) => {
                    const isSelected = selected?.label === reaction.label;

                    return (
                        <motion.button
                            key={reaction.label}
                            onClick={() => handleSelect(reaction)}
                            disabled={hasReacted}
                            whileHover={!hasReacted ? { scale: 1.15, y: -4 } : {}}
                            whileTap={!hasReacted ? { scale: 0.9 } : {}}
                            className={`
                relative flex flex-col items-center gap-1.5 px-5 py-4 rounded-xl
                border transition-all duration-300 cursor-pointer
                ${isSelected
                                    ? 'border-[var(--accent-amber)] bg-[var(--accent-amber)]/10 shadow-lg shadow-[var(--accent-amber)]/10'
                                    : hasReacted
                                        ? 'border-[var(--border-color)] opacity-40 cursor-not-allowed'
                                        : 'border-[var(--border-color)] hover:border-[var(--text-secondary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-card)]'
                                }
              `}
                            title={reaction.description}
                        >
                            <span className={`text-2xl transition-transform duration-200 ${isSelected ? 'scale-110' : ''}`}>
                                {reaction.emoji}
                            </span>
                            <div className="flex items-center gap-1.5 mt-1">
                                <span className={`font-mono text-[9px] uppercase tracking-widest ${isSelected ? 'text-[var(--accent-amber)]' : 'text-[var(--text-secondary)]'
                                    }`}>
                                    {reaction.label}
                                </span>
                                <span className="text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--bg-void)] px-1.5 py-0.5 rounded-sm opacity-80">
                                    {counts[reaction.label]}
                                </span>
                            </div>

                            {/* Selection ring */}
                            {isSelected && (
                                <motion.div
                                    layoutId="emoji-ring"
                                    className="absolute inset-0 rounded-xl border-2 border-[var(--accent-amber)]"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>

            {/* Thank You Message */}
            <AnimatePresence>
                {hasReacted && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-center mt-6"
                    >
                        <p className="font-mono text-xs text-[var(--text-secondary)] tracking-wider">
                            <span className="text-[var(--accent-green)]">✓</span>{' '}
                            Signal received. Thank you for the feedback.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EmojiFeedback;
