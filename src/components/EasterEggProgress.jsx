import React from 'react';
import { Sparkles } from 'lucide-react';
import { useHandCursor } from '../context/HandCursorContext';

const EasterEggProgress = () => {
    const { isGestureMode, foundEggs, totalEggs } = useHandCursor();

    // Only show when gesture mode is active
    if (!isGestureMode) return null;

    const progress = (foundEggs.length / totalEggs) * 100;

    return (
        <div className="fixed bottom-8 right-8 z-[100] bg-gradient-to-br from-amber-500/90 to-yellow-500/90 backdrop-blur-xl border-2 border-amber-300 rounded-2xl px-6 py-4 shadow-2xl animate-in slide-in-from-bottom duration-500"
            style={{
                boxShadow: '0 0 40px rgba(251, 191, 36, 0.5), 0 10px 30px rgba(0, 0, 0, 0.5)'
            }}
        >
            <div className="flex items-center gap-4">
                <Sparkles size={24} className="text-white animate-pulse" />
                <div>
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl font-black text-white">{foundEggs.length}</span>
                        <span className="text-lg font-medium text-amber-100">/ {totalEggs}</span>
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-amber-100 opacity-90">
                        Easter Eggs
                    </div>
                </div>
                <div className="w-32 h-3 bg-white/30 rounded-full overflow-hidden ml-2">
                    <div
                        className="h-full bg-white rounded-full transition-all duration-500 ease-out shadow-inner"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EasterEggProgress;
