import React, { useState } from 'react';
import { useHandCursor } from '../context/HandCursorContext';
import { Sparkles, Scan, Lock, User, Terminal, Zap, Star } from 'lucide-react';

const EasterEgg = ({
    children,
    hint = "SIGNAL DETECTED",
    className = "",
    type = "default" // default, glitch, system, secret
}) => {
    const { isGestureMode } = useHandCursor();
    const [isRevealed, setIsRevealed] = useState(false);
    const [hasBeenFound, setHasBeenFound] = useState(false);

    // If gesture mode is OFF, return nothing (hidden)
    if (!isGestureMode) return null;

    const handleReveal = () => {
        setIsRevealed(true);
        if (!hasBeenFound) {
            setHasBeenFound(true);
        }
    };

    // Type specific styles
    const styles = {
        default: "text-[var(--accent-blue)] bg-gradient-to-r from-blue-500/20 to-purple-500/20",
        glitch: "text-[var(--accent-red)] bg-gradient-to-r from-red-500/20 to-pink-500/20 font-mono",
        system: "text-[var(--accent-emerald)] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 font-mono",
        secret: "text-[var(--accent-amber)] bg-gradient-to-r from-amber-500/20 to-yellow-500/20 font-serif italic"
    };

    const icons = {
        default: Sparkles,
        glitch: Zap,
        system: Terminal,
        secret: Star
    };

    const Icon = icons[type] || Sparkles;

    return (
        <div
            className={`absolute z-40 cursor-crosshair transition-all duration-300 ${className}`}
            onMouseEnter={handleReveal}
            onMouseLeave={() => setIsRevealed(false)}
        >
            {/* Ripple Effect when in Gesture Mode */}
            {!isRevealed && (
                <div className="absolute inset-0 -m-4">
                    <div className="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse"></div>
                </div>
            )}

            <div className={`relative flex items-center justify-center px-4 py-3 rounded-xl backdrop-blur-xl border-2 transition-all duration-300 ease-out origin-center shadow-2xl
        ${isRevealed
                    ? `${styles[type]} border-white/40 scale-125 shadow-[0_0_60px_rgba(255,255,255,0.3)] rotate-0 animate-in zoom-in-50 duration-500`
                    : 'bg-black/40 border-white/20 hover:border-white/40 opacity-70 hover:opacity-100 scale-100 hover:scale-110 rotate-1 hover:rotate-0'
                }`}
            >
                {!isRevealed ? (
                    // HINT STATE - More obvious pulsing
                    <div className="flex items-center gap-2 text-white/90 text-xs font-mono tracking-[0.15em] uppercase whitespace-nowrap">
                        <Scan size={16} className="animate-pulse" />
                        <span className="animate-pulse font-bold">{hint}</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-1 h-1 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-1 h-1 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                    </div>
                ) : (
                    // REVEALED STATE - Celebration!
                    <div className="relative">
                        {/* Particle Burst Animation */}
                        {hasBeenFound && (
                            <>
                                <Sparkles className="absolute -top-6 -left-6 text-yellow-300 animate-ping" size={20} />
                                <Sparkles className="absolute -top-6 -right-6 text-pink-300 animate-ping" size={16} style={{ animationDelay: '100ms' }} />
                                <Sparkles className="absolute -bottom-6 -left-6 text-blue-300 animate-ping" size={16} style={{ animationDelay: '200ms' }} />
                                <Sparkles className="absolute -bottom-6 -right-6 text-purple-300 animate-ping" size={20} style={{ animationDelay: '300ms' }} />
                            </>
                        )}

                        <div className={`text-base md:text-lg font-bold animate-in zoom-in duration-300 flex items-center gap-3 whitespace-nowrap tracking-wide`}>
                            <Icon size={20} className="animate-spin" style={{ animationDuration: '2s' }} />
                            <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{children}</span>
                            <Icon size={20} className="animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                        </div>

                        {/* Glitch lines for effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                    </div>
                )}
            </div>

            {/* Found Badge */}
            {hasBeenFound && !isRevealed && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-bounce">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                </div>
            )}
        </div>
    );
};

export default EasterEgg;
