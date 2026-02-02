import React, { useState } from 'react';
import { useHandCursor } from '../context/HandCursorContext';
import { Sparkles, Scan, Lock, User, Terminal } from 'lucide-react';

const EasterEgg = ({
    children,
    hint = "SIGNAL DETECTED",
    className = "",
    type = "default" // default, glitch, system, secret
}) => {
    const { isGestureMode } = useHandCursor();
    const [isRevealed, setIsRevealed] = useState(false);

    // If gesture mode is OFF, return nothing (hidden)
    if (!isGestureMode) return null;

    // Type specific styles
    const styles = {
        default: "text-[var(--accent-blue)]",
        glitch: "text-[var(--accent-red)] font-mono",
        system: "text-[var(--accent-emerald)] font-mono",
        secret: "text-[var(--accent-amber)] font-serif italic"
    };

    const icons = {
        default: Sparkles,
        glitch: Scan,
        system: Terminal,
        secret: Lock
    };

    const Icon = icons[type] || Sparkles;

    return (
        <div
            className={`absolute z-40 cursor-crosshair transition-all duration-500 group ${className}`}
            onMouseEnter={() => setIsRevealed(true)}
            onMouseLeave={() => setIsRevealed(false)}
        >
            <div className={`relative flex items-center justify-center px-3 py-2 rounded-lg backdrop-blur-md border border-dashed transition-all duration-500 ease-out origin-center
        ${isRevealed
                    ? `bg-black/90 border-white/20 scale-110 shadow-[0_0_40px_rgba(255,255,255,0.15)] rotate-0`
                    : 'bg-transparent border-transparent hover:border-white/10 opacity-40 hover:opacity-100 rotate-2 hover:rotate-0'
                }`}
            >
                {!isRevealed ? (
                    <div className="flex items-center gap-2 animate-pulse text-[var(--text-tertiary)] text-[10px] font-mono tracking-[0.2em] uppercase whitespace-nowrap">
                        <Scan size={12} className="opacity-50" />
                        <span>{hint}</span>
                    </div>
                ) : (
                    <div className={`text-sm animate-in fade-in zoom-in duration-300 flex items-center gap-3 whitespace-nowrap ${styles[type]}`}>
                        <Icon size={14} />
                        <span className="tracking-wide">{children}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EasterEgg;
