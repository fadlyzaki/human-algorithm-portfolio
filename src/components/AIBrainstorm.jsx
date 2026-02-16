import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

/* --- AI BRAINSTORM COMPONENT --- */
/* Redesigned as a Human + AI collaborative dialogue */
const AIBrainstorm = ({ hypotheses, t }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isThinking, setIsThinking] = useState(false);
    const [showSolution, setShowSolution] = useState(true);

    const exploreAnother = () => {
        if (isThinking || hypotheses.length <= 1) return;

        setIsThinking(true);
        setShowSolution(false);

        // Simulate AI "thinking" before revealing new solution
        setTimeout(() => {
            setCurrentIndex(prev => (prev + 1) % hypotheses.length);
            setTimeout(() => {
                setShowSolution(true);
                setIsThinking(false);
            }, 400);
        }, 800);
    };

    const current = hypotheses[currentIndex];


    return (
        <section className="bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white py-24 md:py-32 relative overflow-hidden">
            {/* Subtle neural network background */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="neural-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill="#10B981" />
                            <line x1="30" y1="30" x2="60" y2="0" stroke="#10B981" strokeWidth="0.5" opacity="0.3" />
                            <line x1="30" y1="30" x2="0" y2="60" stroke="#10B981" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#neural-grid)" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
                            {t('protected.brainstorm_session') || "Brainstorm Session"}
                        </span>
                    </div>
                    {hypotheses.length > 1 && (
                        <span className="font-mono text-xs text-gray-600">
                            {t('protected.idea') || "Idea"} {currentIndex + 1} {t('protected.of') || "of"} {hypotheses.length}
                        </span>
                    )}
                </div>

                {/* Chat Dialogue */}
                <div className="space-y-6 mb-10">
                    {/* Human Message */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-end"
                    >
                        <div className="max-w-md">
                            <div className="flex items-center justify-end gap-2 mb-2">
                                <span className="font-mono text-xs text-amber-400/70 uppercase tracking-wider">{t('protected.human_label') || "You"}</span>
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                                    <span className="text-xs font-bold text-black">F</span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 rounded-2xl rounded-tr-sm p-4">
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {t('protected.human_prompt') || "What if we rebuilt this feature with modern AI capabilities? What would that look like?"}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* AI Response */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex justify-start"
                    >
                        <div className="max-w-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                                    <Sparkles size={12} className="text-black" />
                                </div>
                                <span className="font-mono text-xs text-emerald-400/70 uppercase tracking-wider">{t('protected.ai_label') || "AI Collaborator"}</span>
                            </div>
                            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 rounded-2xl rounded-tl-sm p-4">
                                {isThinking ? (
                                    <div className="py-2">
                                        <TypingDots />
                                        <p className="text-gray-500 text-xs mt-2 font-mono">{t('protected.exploring') || "Exploring alternatives..."}</p>
                                    </div>
                                ) : (
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {t('protected.ai_response') || "Analyzing the original problem space... Here's an approach using"}{' '}
                                        <span className="text-emerald-400 font-semibold">{current.tech}</span>.
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Solution Card */}
                <AnimatePresence mode="wait">
                    {showSolution && (
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Glowing border effect */}
                            <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/50 via-cyan-500/50 to-emerald-500/50 rounded-2xl blur-sm opacity-50" />

                            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                                {/* Solution Header */}
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                                                <Sparkles size={16} className="text-black" />
                                            </div>
                                            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
                                                {t('protected.proposed_solution') || "Proposed Solution"}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                            {current.title}
                                        </h3>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                                            <span className="text-xs font-mono text-emerald-400">{current.tech}</span>
                                        </div>
                                    </div>

                                    {/* Impact Badge */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.3, type: "spring" }}
                                        className="flex-shrink-0"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-emerald-400 rounded-xl blur-lg opacity-30 animate-pulse" />
                                            <div className="relative bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl px-4 py-3 text-center">
                                                <div className="text-xs font-mono text-black/70 uppercase tracking-wider mb-1">{t('protected.impact_label') || "Impact"}</div>
                                                <div className="text-lg md:text-xl font-bold text-black">{current.impact}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Description */}
                                <div className="border-l-2 border-emerald-500/50 pl-4 mb-6">
                                    <p className="text-gray-300 leading-relaxed">
                                        {current.desc}
                                    </p>
                                </div>

                                {/* Action Row */}
                                <div className="flex items-center justify-end pt-4 border-t border-white/5">
                                    {/* Explore Another Button */}
                                    {hypotheses.length > 1 && (
                                        <button
                                            onClick={exploreAnother}
                                            disabled={isThinking}
                                            className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${isThinking
                                                ? 'border-emerald-500/30 bg-emerald-500/5 cursor-wait text-gray-500'
                                                : 'border-white/20 hover:border-emerald-400 hover:bg-emerald-500/10 text-white'
                                                }`}
                                        >
                                            <span className="font-mono text-xs uppercase tracking-wider">
                                                {isThinking ? (t('protected.exploring') || 'Thinking...') : (t('protected.explore_another') || 'Explore Another Idea')}
                                            </span>
                                            <ArrowRight
                                                size={14}
                                                className={`transition-transform ${isThinking ? 'opacity-50' : 'group-hover:translate-x-1'}`}
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Thinking state placeholder */}
                {!showSolution && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center py-16"
                    >
                        <div className="flex items-center gap-3 text-gray-500">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles size={20} className="text-emerald-400" />
                            </motion.div>
                            <span className="font-mono text-sm">{t('protected.generating') || "Generating alternative approach..."}</span>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

const TypingDots = () => (
    <div className="flex items-center gap-1 py-2">
        {[0, 1, 2].map(i => (
            <motion.div
                key={i}
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
        ))}
    </div>
);

export default AIBrainstorm;
