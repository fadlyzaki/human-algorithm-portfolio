import React from 'react';
import { useHandCursor } from '../context/HandCursorContext';
import { Map, RotateCcw } from 'lucide-react';

const TreasureProgress = () => {
    const { isGestureMode, foundEggs, totalEggs, resetCollection } = useHandCursor();

    // Only show when gesture mode is active
    if (!isGestureMode) return null;

    const progress = (foundEggs.length / totalEggs) * 100;

    return (
        <div className="bg-amber-500/95 backdrop-blur-xl border-2 border-amber-300 rounded-xl px-4 py-3 shadow-2xl min-w-[160px] pointer-events-auto">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
                <Map size={18} className="text-white" />
                <span className="text-white font-bold text-sm uppercase tracking-wider">Treasure Hunt</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-amber-700/50 rounded-full h-2 mb-2">
                <div
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Counter */}
            <div className="flex items-center justify-between mb-2">
                <span className="text-amber-100 text-xs font-mono">
                    {foundEggs.length}/{totalEggs} Treasures
                </span>
            </div>

            {/* Reset Button */}
            {foundEggs.length > 0 && (
                <button
                    onClick={resetCollection}
                    className="w-full py-1.5 px-3 bg-amber-600/50 hover:bg-amber-600 text-amber-100 hover:text-white border border-amber-400/50 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                    <RotateCcw size={12} />
                    Reset Hunt
                </button>
            )}
        </div>
    );
};

export default TreasureProgress;
