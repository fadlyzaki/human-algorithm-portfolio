import React, { useState, useEffect } from 'react';
import { useHandCursor } from '../context/HandCursorContext';
import { Sparkles, Zap, Star, Terminal, Trophy, Plus, Check } from 'lucide-react';

const EasterEgg = ({
    id, // Unique ID for tracking
    children,
    hint = "SIGNAL DETECTED",
    className = "",
    type = "default" // default, glitch, system, secret
}) => {
    const { isGestureMode, collectEgg, foundEggs } = useHandCursor();
    const [isRevealed, setIsRevealed] = useState(false);
    const [showCollectedFeedback, setShowCollectedFeedback] = useState(false);

    const isFound = foundEggs.includes(id);

    // If gesture mode is OFF, return nothing (hidden)
    if (!isGestureMode) return null;

    const handleReveal = () => {
        setIsRevealed(true);
        if (!isFound) {
            collectEgg(id);
            // Show collection feedback
            setShowCollectedFeedback(true);
            setTimeout(() => setShowCollectedFeedback(false), 2000);
        }
    };

    // Type specific colors and icons
    const config = {
        default: {
            color: '#3B82F6',
            glow: 'rgba(59, 130, 246, 0.6)',
            Icon: Sparkles
        },
        glitch: {
            color: '#EF4444',
            glow: 'rgba(239, 68, 68, 0.6)',
            Icon: Zap
        },
        system: {
            color: '#10B981',
            glow: 'rgba(16, 185, 129, 0.6)',
            Icon: Terminal
        },
        secret: {
            color: '#F59E0B',
            glow: 'rgba(245, 158, 11, 0.6)',
            Icon: Star
        }
    };

    const { color, glow, Icon } = config[type] || config.default;

    return (
        <div
            className={`absolute z-40 cursor-crosshair ${className}`}
            onMouseEnter={handleReveal}
            onMouseLeave={() => setIsRevealed(false)}
        >
            {/* Collection Feedback Animation */}
            {showCollectedFeedback && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom fade-in duration-500">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 whitespace-nowrap">
                        <Plus size={16} className="font-bold" />
                        <span className="font-bold text-sm">COLLECTED!</span>
                        <Trophy size={16} />
                    </div>
                </div>
            )}

            {!isRevealed ? (
                // UNREVEALED STATE - Glowing Orb Anomaly
                <div className="relative w-16 h-16 flex items-center justify-center">
                    {/* Pulsing Glow Rings - Different style if already found */}
                    <div
                        className={isFound ? "absolute inset-0 rounded-full opacity-20" : "absolute inset-0 rounded-full animate-ping"}
                        style={{
                            backgroundColor: isFound ? '#10B981' : color,
                            opacity: isFound ? 0.3 : 0.2
                        }}
                    />
                    <div
                        className="absolute inset-2 rounded-full animate-pulse"
                        style={{
                            backgroundColor: isFound ? '#10B981' : color,
                            opacity: isFound ? 0.4 : 0.3,
                            animationDuration: '2s'
                        }}
                    />

                    {/* Center Orb - Green if found, original color if not */}
                    <div
                        className={`relative w-8 h-8 rounded-full flex items-center justify-center ${isFound ? 'opacity-60' : ''}`}
                        style={{
                            backgroundColor: isFound ? '#10B981' : color,
                            boxShadow: isFound
                                ? '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.6)'
                                : `0 0 20px ${glow}, 0 0 40px ${glow}`,
                        }}
                    >
                        {isFound ? (
                            <Check size={16} className="text-white" />
                        ) : (
                            <Icon size={14} className="text-white animate-pulse" />
                        )}
                    </div>

                    {/* Scan Lines Effect - Only if not found */}
                    {!isFound && (
                        <div className="absolute inset-0 overflow-hidden rounded-full opacity-30">
                            <div
                                className="absolute w-full h-0.5 animate-scan"
                                style={{ backgroundColor: color }}
                            />
                        </div>
                    )}

                    {/* FOUND Badge - Much More Prominent */}
                    {isFound && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white shadow-2xl flex items-center justify-center animate-bounce"
                            style={{
                                boxShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 4px 12px rgba(0, 0, 0, 0.6)'
                            }}
                        >
                            <Trophy size={14} className="text-white" />
                        </div>
                    )}

                    {/* "FOUND" Label */}
                    {isFound && (
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                            ✓ Found
                        </div>
                    )}
                </div>
            ) : (
                // REVEALED STATE - Holographic Message
                <div className="relative px-6 py-4 rounded-xl backdrop-blur-xl border-2 animate-in zoom-in-50 duration-500"
                    style={{
                        backgroundColor: isFound ? 'rgba(16, 185, 129, 0.2)' : `${color}20`,
                        borderColor: isFound ? '#10B981' : color,
                        boxShadow: isFound
                            ? '0 0 40px rgba(16, 185, 129, 0.6), inset 0 0 20px rgba(16, 185, 129, 0.6)'
                            : `0 0 40px ${glow}, inset 0 0 20px ${glow}`
                    }}
                >
                    {/* Particle Burst */}
                    {isFound && (
                        <>
                            <Sparkles className="absolute -top-4 -left-4 text-yellow-300 animate-ping" size={20} />
                            <Sparkles className="absolute -top-4 -right-4 text-pink-300 animate-ping" size={16} style={{ animationDelay: '100ms' }} />
                            <Sparkles className="absolute -bottom-4 -left-4 text-blue-300 animate-ping" size={16} style={{ animationDelay: '200ms' }} />
                            <Sparkles className="absolute -bottom-4 -right-4 text-purple-300 animate-ping" size={20} style={{ animationDelay: '300ms' }} />
                        </>
                    )}

                    {/* Message Content */}
                    <div className="flex items-center gap-3">
                        <Icon
                            size={24}
                            className="animate-spin flex-shrink-0"
                            style={{
                                color: isFound ? '#10B981' : color,
                                animationDuration: '3s'
                            }}
                        />
                        <span
                            className="text-base md:text-lg font-bold font-mono tracking-wider whitespace-nowrap"
                            style={{
                                color: isFound ? '#10B981' : color,
                                textShadow: isFound
                                    ? '0 0 10px rgba(16, 185, 129, 0.6)'
                                    : `0 0 10px ${glow}`
                            }}
                        >
                            {children}
                        </span>
                        <Icon
                            size={24}
                            className="animate-spin flex-shrink-0"
                            style={{
                                color: isFound ? '#10B981' : color,
                                animationDuration: '3s',
                                animationDirection: 'reverse'
                            }}
                        />
                    </div>

                    {/* Glitch Overlay */}
                    <div
                        className="absolute inset-0 -skew-x-12 animate-pulse opacity-20 rounded-xl"
                        style={{
                            background: isFound
                                ? 'linear-gradient(90deg, transparent, #10B981, transparent)'
                                : `linear-gradient(90deg, transparent, ${color}, transparent)`
                        }}
                    />
                </div>
            )}

            <style jsx>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default EasterEgg;
