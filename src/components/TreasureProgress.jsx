import React from 'react';
import { useHandCursor } from '../context/HandCursorContext';
import { Map, Compass } from 'lucide-react';

const TreasureProgress = () => {
    const { isGestureMode, foundEggs, totalEggs } = useHandCursor();

    // Only show when gesture mode is active
    if (!isGestureMode) return null;

    const progress = (foundEggs.length / totalEggs) * 100;

    return (
        <div className="bg-amber-500/95 backdrop-blur-xl border-2 border-amber-300 rounded-xl px-4 py-3 shadow-2xl min-w-[160px]">
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
            <div className="flex items-center justify-between">
                <span className="text-amber-100 text-xs font-mono">
                    {foundEggs.length}/{totalEggs} Treasures
                </span>
                <div className="flex items-center gap-1">
                    <Compass size={12} className="text-amber-100 animate-spin" style={{ animationDuration: '4s' }} />
                </div>
            </div>

            {/* Hint */}
            <div className="mt-2 pt-2 border-t border-amber-400/30">
                <p className="text-amber-100 text-[10px] font-mono leading-relaxed">
                    👆 Move hand to discover treasures
                </p>
            </div>
        </div>
    );
};

export default TreasureProgress;
