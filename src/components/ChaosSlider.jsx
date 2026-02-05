import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

const ChaosSlider = ({ value, onChange }) => {
    return (
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    {value > 50 ? (
                        <AlertTriangle className="text-[var(--accent-red)] animate-pulse" size={18} />
                    ) : (
                        <ShieldCheck className="text-[var(--accent-green)]" size={18} />
                    )}
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-card)] font-bold">
                        Entropy Control
                    </span>
                </div>
                <span className="font-mono text-xs text-[var(--text-card)] font-bold">
                    {value}% SPLIT
                </span>
            </div>

            <div className="relative h-2 bg-[var(--bg-void)] rounded-full mb-2">
                {/* Track gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-green)] via-[var(--accent-amber)] to-[var(--accent-red)] opacity-20"></div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => onChange(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />

                {/* Custom Thumb */}
                <div
                    className="absolute top-1/2 -mt-2 w-4 h-4 bg-[var(--bg-surface)] border-2 border-[var(--text-card)] rounded-full shadow-lg pointer-events-none transition-all duration-75 z-10"
                    style={{ left: `calc(${value}% - 8px)` }}
                ></div>

                {/* Fill */}
                <div
                    className="absolute top-0 bottom-0 left-0 bg-[var(--text-card)] rounded-l-full opacity-50 pointer-events-none text-[var(--bg-void)]"
                    style={{ width: `${value}%` }}
                ></div>
            </div>

            <div className="flex justify-between text-[10px] uppercase font-mono text-[var(--text-card)] mt-2">
                <span className="opacity-70">Order</span>
                <span className="opacity-70">Chaos</span>
            </div>
        </div>
    );
};

export default ChaosSlider;
