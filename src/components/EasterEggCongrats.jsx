import React from 'react';
import { Trophy, Sparkles, Star, RotateCcw, X } from 'lucide-react';
import { useHandCursor } from '../context/HandCursorContext';

const EasterEggCongrats = () => {
    const { showCongratsModal, setShowCongratsModal, resetCollection, foundEggs, totalEggs } = useHandCursor();

    if (!showCongratsModal) return null;

    return (
        <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-500">
            <div className="relative bg-gradient-to-br from-amber-900/40 via-purple-900/40 to-blue-900/40 border-2 border-amber-500 rounded-2xl shadow-2xl max-w-lg w-full p-10 animate-in zoom-in-95 duration-700"
                style={{
                    backgroundColor: '#1a1a1a',
                    boxShadow: '0 0 80px rgba(251, 191, 36, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.5)'
                }}
            >
                {/* Close Button */}
                <button
                    onClick={() => setShowCongratsModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1"
                    aria-label="Close"
                >
                    <X size={28} />
                </button>

                {/* Particle Effects */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <Trophy size={72} className="text-amber-400 animate-bounce drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]" style={{ animationDuration: '2s' }} />
                </div>
                <Sparkles className="absolute top-6 left-6 text-yellow-300 animate-ping" size={32} />
                <Sparkles className="absolute top-6 right-20 text-pink-300 animate-ping" size={24} style={{ animationDelay: '200ms' }} />
                <Sparkles className="absolute bottom-6 left-20 text-blue-300 animate-ping" size={28} style={{ animationDelay: '400ms' }} />
                <Sparkles className="absolute bottom-6 right-6 text-purple-300 animate-ping" size={20} style={{ animationDelay: '600ms' }} />

                {/* Content */}
                <div className="text-center mt-16 mb-8">
                    <h2 className="text-5xl md:text-6xl font-serif italic text-amber-400 mb-6 animate-in slide-in-from-bottom duration-700 leading-tight"
                        style={{
                            textShadow: '0 0 30px rgba(251, 191, 36, 0.5), 0 4px 20px rgba(0, 0, 0, 0.8)'
                        }}
                    >
                        Congratulations!
                    </h2>
                    <p className="text-2xl md:text-3xl text-white mb-3 font-light leading-tight">
                        You've discovered all <span className="font-bold text-amber-400">{totalEggs}</span> Easter Eggs!
                    </p>
                    <p className="text-base text-gray-400 font-mono mb-8 tracking-wide">
                        ACHIEVEMENT_UNLOCKED: Master Decoder
                    </p>

                    {/* Achievement Badge */}
                    <div className="inline-flex items-center gap-4 bg-black/60 border-2 border-amber-500/60 rounded-full px-8 py-4 mb-10">
                        <Trophy size={28} className="text-amber-400" />
                        <span className="text-amber-400 font-mono text-lg tracking-wider font-bold">
                            {foundEggs.length}/{totalEggs} SECRETS REVEALED
                        </span>
                        <Trophy size={28} className="text-amber-400" />
                    </div>

                    <p className="text-white/80 text-base leading-relaxed max-w-md mx-auto mb-10">
                        You've uncovered every hidden secret in the portfolio. Your dedication to exploration is truly admirable!
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={resetCollection}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-600 text-white hover:border-gray-400 hover:bg-gray-800 transition-all rounded-xl font-mono text-sm uppercase tracking-wider font-medium"
                    >
                        <RotateCcw size={18} />
                        Reset Collection
                    </button>
                    <button
                        onClick={() => setShowCongratsModal(false)}
                        className="flex-1 px-6 py-4 bg-amber-500 text-black hover:bg-amber-400 transition-all rounded-xl font-mono text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl font-black"
                    >
                        Continue Exploring
                    </button>
                </div>

                {/* Footer Note */}
                <p className="text-xs font-mono text-gray-600 text-center mt-6 tracking-wide">
                    YOUR PROGRESS IS SAVED · RETURN ANYTIME
                </p>
            </div>
        </div>
    );
};

export default EasterEggCongrats;
