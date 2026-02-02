import React from 'react';
import { useHandCursor } from '../context/HandCursorContext';

const EasterEggProgress = () => {
    const { isGestureMode, foundEggs, totalEggs } = useHandCursor();

    // Only show when gesture mode is active
    if (!isGestureMode) return null;

    const progress = (foundEggs.length / totalEggs) * 100;

    return (
        <div className="fixed bottom-6 right-6 z-50 bg-black/80 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-3 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="flex items-center gap-3">
                <div className="text-white/90 font-mono text-xs">
                    <span className="text-amber-400 font-bold">{foundEggs.length}</span>
                    <span className="text-white/60">/{totalEggs}</span>
                </div>
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EasterEggProgress;
