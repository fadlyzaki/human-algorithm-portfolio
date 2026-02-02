import React, { useState, useEffect, useRef } from 'react';
import { useHandCursor } from '../context/HandCursorContext';
import { Gem, Coins, Crown, Anchor, MapPin, Plus, Check } from 'lucide-react';

const Treasure = ({
    id, // Unique ID for tracking
    children,
    hint = "TREASURE DETECTED",
    className = "",
    type = "gem" // gem, coins, crown, anchor
}) => {
    const { isGestureMode, collectEgg, foundEggs, cursorPosition, resetTrigger } = useHandCursor();
    const [isRevealed, setIsRevealed] = useState(false);
    const [showCollectedFeedback, setShowCollectedFeedback] = useState(false);
    const [randomPosition, setRandomPosition] = useState({ top: 0, left: 0 });
    const treasureRef = useRef(null);

    const isFound = foundEggs.includes(id);

    // Generate random position when gesture mode is activated OR when reset is triggered
    useEffect(() => {
        if (isGestureMode) {
            // Random position within safe bounds (avoid edges)
            const top = Math.random() * 60 + 10; // 10% to 70% from top
            const left = Math.random() * 60 + 10; // 10% to 70% from left

            setRandomPosition({ top, left });
        }
    }, [isGestureMode, id, resetTrigger]); // Re-randomize when gesture mode changes OR reset triggered

    // Check collision with hand cursor
    useEffect(() => {
        if (!isGestureMode || !treasureRef.current) return;

        const checkCollision = () => {
            const rect = treasureRef.current.getBoundingClientRect();
            const cursorX = cursorPosition.x;
            const cursorY = cursorPosition.y;

            // Check if cursor is within the treasure's bounds
            const isHovering =
                cursorX >= rect.left &&
                cursorX <= rect.right &&
                cursorY >= rect.top &&
                cursorY <= rect.bottom;

            if (isHovering) {
                setIsRevealed(true);
                if (!isFound) {
                    collectEgg(id);
                    // Show collection feedback
                    setShowCollectedFeedback(true);
                    setTimeout(() => setShowCollectedFeedback(false), 2000);
                }
            } else {
                setIsRevealed(false);
            }
        };

        // Check collision on every cursor move
        checkCollision();
    }, [cursorPosition, isGestureMode, isFound, collectEgg, id]);

    // If gesture mode is OFF, return nothing (hidden)
    if (!isGestureMode) return null;

    // Type specific colors and icons - Treasure themed
    const config = {
        gem: {
            color: '#8B5CF6', // Purple for gems
            glow: 'rgba(139, 92, 246, 0.6)',
            Icon: Gem,
            label: 'GEM'
        },
        coins: {
            color: '#F59E0B', // Gold for coins
            glow: 'rgba(245, 158, 11, 0.6)',
            Icon: Coins,
            label: 'COINS'
        },
        crown: {
            color: '#EF4444', // Red for crown
            glow: 'rgba(239, 68, 68, 0.6)',
            Icon: Crown,
            label: 'CROWN'
        },
        anchor: {
            color: '#3B82F6', // Blue for anchor
            glow: 'rgba(59, 130, 246, 0.6)',
            Icon: Anchor,
            label: 'RELIC'
        }
    };

    const { color, glow, Icon, label } = config[type] || config.gem;

    return (
        <div
            ref={treasureRef}
            className={`fixed z-40 pointer-events-none ${className}`}
            style={{
                top: `${randomPosition.top}%`,
                left: `${randomPosition.left}%`,
            }}
        >
            {/* Collection Feedback Animation */}
            {showCollectedFeedback && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom fade-in duration-500">
                    <div className="bg-amber-500 text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 whitespace-nowrap">
                        <Plus size={16} className="font-bold" />
                        <span className="font-bold text-sm">{label} FOUND!</span>
                        <Icon size={16} />
                    </div>
                </div>
            )}

            {!isRevealed ? (
                // UNREVEALED STATE - Glowing Treasure Orb
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
                        className={`relative w-10 h-10 rounded-full flex items-center justify-center ${isFound ? 'opacity-60' : ''}`}
                        style={{
                            backgroundColor: isFound ? '#10B981' : color,
                            boxShadow: isFound
                                ? '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.6)'
                                : `0 0 20px ${glow}, 0 0 40px ${glow}`,
                        }}
                    >
                        {isFound ? (
                            <Check size={18} className="text-white" />
                        ) : (
                            <Icon size={18} className="text-white animate-pulse" />
                        )}
                    </div>

                    {/* Sparkle/Shimmer Effect - Only if not found */}
                    {!isFound && (
                        <div className="absolute inset-0 overflow-hidden rounded-full">
                            <div
                                className="absolute w-full h-1 animate-scan opacity-40"
                                style={{ backgroundColor: 'white' }}
                            />
                        </div>
                    )}

                    {/* COLLECTED Badge */}
                    {isFound && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white shadow-2xl flex items-center justify-center animate-bounce"
                            style={{
                                boxShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 4px 12px rgba(0, 0, 0, 0.6)'
                            }}
                        >
                            <MapPin size={14} className="text-white" />
                        </div>
                    )}

                    {/* "COLLECTED" Label */}
                    {isFound && (
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                            ✓ Collected
                        </div>
                    )}
                </div>
            ) : (
                // REVEALED STATE - Treasure Chest Message
                <div className="relative px-6 py-4 rounded-xl backdrop-blur-xl border-2 animate-in zoom-in-50 duration-500"
                    style={{
                        backgroundColor: isFound ? 'rgba(16, 185, 129, 0.2)' : `${color}20`,
                        borderColor: isFound ? '#10B981' : color,
                        boxShadow: isFound
                            ? '0 0 40px rgba(16, 185, 129, 0.6), inset 0 0 20px rgba(16, 185, 129, 0.6)'
                            : `0 0 40px ${glow}, inset 0 0 20px ${glow}`
                    }}
                >
                    {/* Sparkle Burst */}
                    {!isFound && (
                        <>
                            <Gem className="absolute -top-4 -left-4 text-purple-300 animate-ping" size={16} />
                            <Coins className="absolute -top-4 -right-4 text-amber-300 animate-ping" size={16} style={{ animationDelay: '100ms' }} />
                            <Crown className="absolute -bottom-4 -left-4 text-red-300 animate-ping" size={16} style={{ animationDelay: '200ms' }} />
                            <Anchor className="absolute -bottom-4 -right-4 text-blue-300 animate-ping" size={16} style={{ animationDelay: '300ms' }} />
                        </>
                    )}

                    {/* Message Content */}
                    <div className="flex items-center gap-3">
                        <Icon
                            size={24}
                            className="animate-bounce flex-shrink-0"
                            style={{
                                color: isFound ? '#10B981' : color
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
                            className="animate-bounce flex-shrink-0"
                            style={{
                                color: isFound ? '#10B981' : color,
                                animationDelay: '200ms'
                            }}
                        />
                    </div>

                    {/* Shimmer Overlay */}
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

export default Treasure;
