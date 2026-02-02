import React from 'react';
import { Sparkles, CheckCircle2, Hand } from 'lucide-react';
import { useHandCursor } from '../context/HandCursorContext';

const EasterEggProgress = () => {
    const { isGestureMode, foundEggs, totalEggs } = useHandCursor();

    // Only show when gesture mode is active
    if (!isGestureMode) return null;

    const progress = (foundEggs.length / totalEggs) * 100;
    const isComplete = foundEggs.length === totalEggs;

    return (
        <div className="space-y-3">
            {/* Progress Card */}
            <div className="bg-gradient-to-br from-amber-500/95 to-yellow-500/95 backdrop-blur-xl border-2 border-amber-300 rounded-xl px-5 py-3 shadow-2xl"
                style={{
                    boxShadow: '0 0 30px rgba(251, 191, 36, 0.4), 0 8px 20px rgba(0, 0, 0, 0.4)'
                }}
            >
                <div className="flex items-center gap-3 mb-2">
                    <Sparkles size={20} className="text-white animate-pulse" />
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-white">{foundEggs.length}</span>
                        <span className="text-sm font-medium text-amber-100">/ {totalEggs}</span>
                    </div>
                    {isComplete && <CheckCircle2 size={20} className="text-green-300 animate-bounce" />}
                </div>

                <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden mb-1">
                    <div
                        className="h-full bg-white rounded-full transition-all duration-500 ease-out shadow-inner"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="text-[9px] font-mono uppercase tracking-wider text-white/90 font-medium">
                    Easter Eggs Found
                </div>
            </div>

            {/* Hand Tracker Instructions */}
            <div className="bg-blue-500/95 backdrop-blur-xl border-2 border-blue-300 rounded-xl px-4 py-2.5 shadow-xl">
                <div className="flex items-start gap-2">
                    <Hand size={18} className="text-white mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-white text-xs font-semibold mb-1">Using Hand Tracker</p>
                        <p className="text-blue-100 text-[10px] leading-relaxed">
                            Point with <span className="font-bold text-white">index finger</span> to move cursor.
                            Pinch <span className="font-bold text-white">thumb + index</span> to click.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasterEggProgress;
