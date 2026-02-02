import React from 'react';
import { Map, Crown, Gem, RotateCcw, X } from 'lucide-react';
import { useHandCursor } from '../context/HandCursorContext';

const TreasureCongrats = () => {
    const { showCongratsModal, setShowCongratsModal, resetCollection } = useHandCursor();

    if (!showCongratsModal) return null;

    const handleReset = () => {
        resetCollection();
    };

    const handleClose = () => {
        setShowCongratsModal(false);
    };

    return (
        <div className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-500">
            <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 border-4 border-amber-400 rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-500">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-amber-300 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Treasure Chest Icon */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="w-24 h-24 bg-amber-500 rounded-2xl flex items-center justify-center animate-bounce shadow-2xl border-4 border-amber-300"
                            style={{
                                boxShadow: '0 0 60px rgba(245, 158, 11, 0.6), 0 0 120px rgba(245, 158, 11, 0.4)'
                            }}
                        >
                            <Crown size={48} className="text-white" />
                        </div>
                        {/* Floating gems */}
                        <Gem className="absolute -top-4 -left-4 text-purple-400 animate-ping" size={24} />
                        <Gem className="absolute -top-4 -right-4 text-blue-400 animate-ping" size={20} style={{ animationDelay: '200ms' }} />
                        <Gem className="absolute -bottom-4 -left-4 text-green-400 animate-ping" size={20} style={{ animationDelay: '400ms' }} />
                        <Gem className="absolute -bottom-4 -right-4 text-red-400 animate-ping" size={24} style={{ animationDelay: '600ms' }} />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl font-serif italic text-amber-200 mb-4 text-center">
                    Treasure Found!
                </h2>

                {/* Message */}
                <p className="text-amber-100 text-center mb-6 leading-relaxed">
                    You've discovered all <span className="text-amber-300 font-bold">8 hidden treasures</span>!
                    Your exploration skills are legendary! 🏴‍☠️
                </p>

                {/* Achievement Badge */}
                <div className="flex justify-center mb-8">
                    <div className="bg-amber-600/30 border-2 border-amber-400 rounded-full px-6 py-2 flex items-center gap-3">
                        <Map size={20} className="text-amber-300" />
                        <span className="text-amber-200 font-mono text-sm uppercase tracking-widest">Master Explorer</span>
                        <Map size={20} className="text-amber-300" />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={handleClose}
                        className="flex-1 px-6 py-3 border-2 border-amber-400 text-amber-200 hover:bg-amber-800/50 transition-all rounded-xl font-mono text-sm uppercase tracking-wider"
                    >
                        Keep Exploring
                    </button>
                    <button
                        onClick={handleReset}
                        className="flex-1 px-6 py-3 bg-amber-500 text-white hover:bg-amber-400 transition-all rounded-xl font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 font-bold"
                    >
                        <RotateCcw size={16} />
                        Hunt Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TreasureCongrats;
