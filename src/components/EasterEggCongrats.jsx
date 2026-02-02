import React from 'react';
import { Trophy, Sparkles, Star, RotateCcw, X } from 'lucide-react';
import { useHandCursor } from '../context/HandCursorContext';

const EasterEggCongrats = () => {
    const { showCongratsModal, setShowCongratsModal, resetCollection, foundEggs, totalEggs } = useHandCursor();

    if (!showCongratsModal) return null;

    return (
        <div className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-500">
            <div className="relative bg-gradient-to-br from-amber-500/20 via-purple-500/20 to-blue-500/20 border-2 border-amber-400 rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-in zoom-in-95 duration-700"
                style={{
                    boxShadow: '0 0 60px rgba(251, 191, 36, 0.4), inset 0 0 40px rgba(251, 191, 36, 0.1)'
                }}
            >
                {/* Close Button */}
                <button
                    onClick={() => setShowCongratsModal(false)}
                    className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                {/* Particle Effects */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <Trophy size={64} className="text-amber-400 animate-bounce" style={{ animationDuration: '2s' }} />
                </div>
                <Sparkles className="absolute top-4 left-4 text-yellow-300 animate-ping" size={32} />
                <Sparkles className="absolute top-4 right-16 text-pink-300 animate-ping" size={24} style={{ animationDelay: '200ms' }} />
                <Sparkles className="absolute bottom-4 left-16 text-blue-300 animate-ping" size={28} style={{ animationDelay: '400ms' }} />
                <Sparkles className="absolute bottom-4 right-4 text-purple-300 animate-ping" size={20} style={{ animationDelay: '600ms' }} />
                <Star className="absolute top-1/2 left-4 text-amber-300 animate-spin" size={16} style={{ animationDuration: '4s' }} />
                <Star className="absolute top-1/2 right-4 text-amber-300 animate-spin" size={16} style={{ animationDuration: '3s', animationDirection: 'reverse' }} />

                {/* Content */}
                <div className="text-center mt-12 mb-8">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-amber-400 mb-4 animate-in slide-in-from-bottom duration-700"
                        style={{
                            textShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
                        }}
                    >
                        Congratulations!
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">
                        You've discovered all <span className="font-bold text-amber-400">{totalEggs}</span> Easter Eggs!
                    </p>
                    <p className="text-sm text-white/60 font-mono mb-6">
                        ACHIEVEMENT_UNLOCKED: Master Decoder
                    </p>

                    {/* Achievement Badge */}
                    <div className="inline-flex items-center gap-3 bg-black/40 border border-amber-400/50 rounded-full px-6 py-3 mb-8">
                        <Trophy size={24} className="text-amber-400" />
                        <span className="text-amber-400 font-mono text-sm tracking-wider">
                            {foundEggs.length}/{totalEggs} SECRETS REVEALED
                        </span>
                        <Trophy size={24} className="text-amber-400" />
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                        You've uncovered every hidden secret in the portfolio. Your dedication to exploration is admirable.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={resetCollection}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all rounded-lg font-mono text-sm uppercase tracking-wider"
                    >
                        <RotateCcw size={16} />
                        Reset Collection
                    </button>
                    <button
                        onClick={() => setShowCongratsModal(false)}
                        className="flex-1 px-6 py-3 bg-amber-500 text-black hover:bg-amber-400 transition-all rounded-lg font-mono text-sm uppercase tracking-wider shadow-lg hover:shadow-xl font-bold"
                    >
                        Continue Exploring
                    </button>
                </div>

                {/* Footer Note */}
                <p className="text-[10px] font-mono text-white/40 text-center mt-6">
                    YOUR PROGRESS IS SAVED · RETURN ANYTIME
                </p>
            </div>
        </div>
    );
};

export default EasterEggCongrats;
