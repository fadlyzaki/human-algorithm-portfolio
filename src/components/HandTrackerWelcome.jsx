import React from 'react';
import { X, Camera, Sparkles, ScanEye, Zap } from 'lucide-react';
import { useHandCursor } from '../context/HandCursorContext';

const HandTrackerWelcome = () => {
    const { showWelcomeModal, closeWelcomeModal, activateGestureMode } = useHandCursor();

    if (!showWelcomeModal) return null;

    const handleActivate = () => {
        activateGestureMode();
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--accent-blue)] rounded-xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-300">
                {/* Close Button */}
                <button
                    onClick={closeWelcomeModal}
                    className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <ScanEye size={48} className="text-[var(--accent-blue)] animate-pulse" />
                        <Sparkles className="absolute -top-2 -right-2 text-[var(--accent-amber)] animate-ping" size={20} />
                        <Zap className="absolute -bottom-1 -left-1 text-[var(--accent-red)] animate-pulse" size={16} />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-serif italic text-[var(--text-primary)] mb-4 text-center">
                    Activate Decryption Lens?
                </h2>

                {/* Content */}
                <div className="space-y-4 text-[var(--text-secondary)] mb-6">
                    <div className="flex items-start gap-3 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-lg p-3">
                        <Camera size={20} className="text-[var(--accent-blue)] mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                            <p className="font-medium text-[var(--text-primary)] mb-1">Camera Access Required</p>
                            <p className="text-xs leading-relaxed">
                                Hand tracking uses your camera to detect gestures. Your video is processed locally and never uploaded.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-[var(--accent-amber)]/30 rounded-lg p-3">
                        <Sparkles size={20} className="text-[var(--accent-amber)] mt-0.5 flex-shrink-0 animate-pulse" />
                        <div className="text-sm">
                            <p className="font-medium text-[var(--text-primary)] mb-1">🎁 8 Hidden Secrets</p>
                            <p className="text-xs leading-relaxed">
                                Scan the site with your hand to discover <span className="text-[var(--accent-amber)] font-mono">Easter Eggs</span> hidden in plain sight.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={closeWelcomeModal}
                        className="flex-1 px-4 py-3 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all rounded-lg font-mono text-sm uppercase tracking-wider"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleActivate}
                        className="flex-1 px-4 py-3 bg-[var(--accent-blue)] text-white hover:bg-[var(--accent-blue)]/90 transition-all rounded-lg font-mono text-sm uppercase tracking-wider shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                        <ScanEye size={16} />
                        Activate
                    </button>
                </div>

                {/* Footer Note */}
                <p className="text-[10px] font-mono text-[var(--text-secondary)] text-center mt-4 opacity-60">
                    EXPERIMENTAL FEATURE · PRIVACY FIRST
                </p>
            </div>
        </div>
    );
};

export default HandTrackerWelcome;
