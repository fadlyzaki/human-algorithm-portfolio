import React, { useState } from 'react';
import { useHandCursor } from '../context/HandCursorContext';
import { Sparkles, Zap, Star, Terminal } from 'lucide-react';

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
            {!isRevealed ? (
                // UNREVEALED STATE - Glowing Orb Anomaly
                <div className="relative w-16 h-16 flex items-center justify-center">
                    {/* Pulsing Glow Rings */}
                    <div
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{
                            backgroundColor: color,
                            opacity: 0.2
                        }}
                    />
                    <div
                        className="absolute inset-2 rounded-full animate-pulse"
                        style={{
                            backgroundColor: color,
                            opacity: 0.3,
                            animationDuration: '2s'
                        }}
                    />

                    {/* Center Orb */}
                    <div
                        className="relative w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                            backgroundColor: color,
                            boxShadow: `0 0 20px ${glow}, 0 0 40px ${glow}`,
                        }}
                    >
                        <Icon size={14} className="text-white animate-pulse" />
                    </div>

                    {/* Scan Lines Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-full opacity-30">
                        <div
                            className="absolute w-full h-0.5 animate-scan"
                            style={{ backgroundColor: color }}
                        />
                    </div>

                    {/* Found Badge */}
                    {hasBeenFound && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg">
                            <div className="absolute inset-0 bg-green-300 rounded-full animate-ping" />
                        </div>
                    )}
                </div>
            ) : (
                // REVEALED STATE - Holographic Message
                <div className="relative px-6 py-4 rounded-xl backdrop-blur-xl border-2 animate-in zoom-in-50 duration-500"
                    style={{
                        backgroundColor: `${color}20`,
                        borderColor: color,
                        boxShadow: `0 0 40px ${glow}, inset 0 0 20px ${glow}`
                    }}
                >
                    {/* Particle Burst */}
                    {hasBeenFound && (
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
                                color: color,
                                animationDuration: '3s'
                            }}
                        />
                        <span
                            className="text-base md:text-lg font-bold font-mono tracking-wider whitespace-nowrap"
                            style={{
                                color: color,
                                textShadow: `0 0 10px ${glow}`
                            }}
                        >
                            {children}
                        </span>
                        <Icon
                            size={24}
                            className="animate-spin flex-shrink-0"
                            style={{
                                color: color,
                                animationDuration: '3s',
                                animationDirection: 'reverse'
                            }}
                        />
                    </div>

                    {/* Glitch Overlay */}
                    <div
                        className="absolute inset-0 -skew-x-12 animate-pulse opacity-20 rounded-xl"
                        style={{
                            background: `linear-gradient(90deg, transparent, ${color}, transparent)`
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
