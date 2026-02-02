import React from 'react';
import { X, Camera, Map, ScanEye, Compass } from 'lucide-react';
import { useHandCursor } from '../context/HandCursorContext';

const HandTrackerWelcome = () => {
    const { showWelcomeModal, closeWelcomeModal, activateGestureMode } = useHandCursor();

    if (!showWelcomeModal) return null;

    const handleActivate = () => {
        activateGestureMode();
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-[#1a1a1a] border-2 border-amber-500 rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-300">
                {/* Close Button */}
                <button
                    onClick={closeWelcomeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <ScanEye size={56} className="text-amber-500 animate-pulse" />
                        <Map className="absolute -top-2 -right-2 text-amber-400 animate-bounce" size={20} />
                        <Compass className="absolute -bottom-1 -left-1 text-amber-300 animate-spin" size={16} style={{ animationDuration: '3s' }} />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-serif italic text-white mb-6 text-center leading-tight">
                    Start Treasure Hunt?
                </h2>

                {/* Content */}
                <div className="space-y-4 mb-8">
                    {/* Camera Permission Card */}
                    <div className="flex items-start gap-4 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                        <Camera size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-white mb-2 text-base">Camera Access Required</p>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Hand tracking uses your camera to detect gestures. Your video is processed locally and never uploaded.
                            </p>
                        </div>
                    </div>

                    {/* Treasure Hunt Discovery Card */}
                    <div className="flex items-start gap-4 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                        <Map size={24} className="text-amber-400 mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-white mb-2 text-base">🗺️ 8 Hidden Treasures</p>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Explore the site with your hand to discover <span className="text-amber-400 font-bold">hidden treasures</span> scattered across different pages.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <button
                        onClick={closeWelcomeModal}
                        className="flex-1 px-6 py-3.5 border-2 border-gray-600 text-white hover:border-gray-400 hover:bg-gray-800 transition-all rounded-xl font-mono text-sm uppercase tracking-wider font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleActivate}
                        className="flex-1 px-6 py-3.5 bg-amber-600 text-white hover:bg-amber-500 transition-all rounded-xl font-mono text-sm uppercase tracking-wider shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-bold"
                    >
                        <Compass size={18} />
                        Start Hunt
                    </button>
                </div>

                {/* Control Hints */}
                <div className="text-center text-gray-500 text-xs font-mono">
                    <p>👆 Move your hand to discover treasures</p>
                </div>
            </div>
        </div>
    );
};

export default HandTrackerWelcome;
