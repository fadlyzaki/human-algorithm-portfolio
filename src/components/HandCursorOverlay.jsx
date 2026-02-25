import React from 'react';
import Webcam from 'react-webcam';
import { useHandCursor } from '../context/HandCursorContext';
import { useHandTracker } from '../hooks/useHandTracker';
import TreasureProgress from './TreasureProgress';
import { AlertTriangle } from 'lucide-react';

/* --- SUB-COMPONENTS (Clean View) --- */

const LoadingHUD = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[10001]">
        <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <div className="font-mono text-emerald-500 text-sm tracking-widest animate-pulse">INITIALIZING NEURAL NET...</div>
            <div className="font-mono text-gray-400 text-xs">This may take a few seconds</div>
        </div>
    </div>
);

const ErrorNotice = ({ error }) => (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[10002] max-w-md animate-in slide-in-from-top duration-500">
        <div className="bg-amber-500/95 backdrop-blur-xl border-2 border-amber-300 rounded-xl px-6 py-4 shadow-2xl">
            <div className="flex items-start gap-3">
                <AlertTriangle size={24} className="text-white flex-shrink-0 mt-0.5" />
                <div>
                    <p className="font-bold text-white text-sm mb-1">Hand Tracking Unavailable</p>
                    <p className="text-amber-50 text-xs leading-relaxed mb-2">{error}</p>
                    <p className="text-amber-100 text-[10px] font-mono">Reverting to regular cursor in 5s...</p>
                </div>
            </div>
        </div>
    </div>
);

const LensReticle = React.forwardRef((props, ref) => (
    <div
        ref={ref}
        className="fixed w-32 h-32 border border-emerald-500/50 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-screen pointer-events-none"
        style={{ left: -1000, top: -1000, boxShadow: '0 0 40px rgba(16, 185, 129, 0.2)' }}
    >
        <div className="absolute w-full h-[1px] bg-emerald-500/30"></div>
        <div className="absolute h-full w-[1px] bg-emerald-500/30"></div>
        <div className="absolute inset-2 border-t border-b border-emerald-400/80 rounded-full animate-spin-slow"></div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-emerald-400 tracking-widest whitespace-nowrap bg-black/80 px-2 py-0.5 rounded border border-emerald-500/20">
            DECRYPTING...
        </div>
    </div>
));

const WebcamHUD = ({ webcamRef, modelReady, onExit, onVideoReady }) => (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-2 pointer-events-auto">
        <button
            onClick={onExit}
            className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50 px-3 py-1.5 rounded-lg font-mono text-[10px] tracking-widest backdrop-blur-md transition-all flex items-center justify-center gap-2"
        >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            EXIT HUNT (ESC)
        </button>
        <div className="font-mono text-[9px] text-emerald-500 flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${modelReady ? 'bg-emerald-500 animate-pulse' : 'bg-yellow-500'}`}></div>
            {modelReady ? 'SENSOR_ACTIVE' : 'SENSOR_LOADING'}
        </div>
        <div className="w-32 h-24 border border-emerald-500/20 rounded bg-black/90 relative overflow-hidden">
            <Webcam
                ref={webcamRef}
                audio={false} width={128} height={96}
                videoConstraints={{ facingMode: "user" }}
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                onUserMedia={onVideoReady}
            />
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
        </div>
    </div>
);

/* --- MAIN COMPONENT --- */

const HandCursorOverlay = () => {
    const { isGestureMode } = useHandCursor();
    const {
        webcamRef,
        lensRef,
        isModelLoading,
        modelReady,
        loadError,
        showFallbackNotice,
        handleVideoReady,
        setIsGestureMode
    } = useHandTracker();

    if (!isGestureMode) return null;

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
            {isModelLoading && <LoadingHUD />}
            {showFallbackNotice && loadError && <ErrorNotice error={loadError} />}
            {modelReady && <LensReticle ref={lensRef} />}

            <WebcamHUD
                webcamRef={webcamRef}
                modelReady={modelReady}
                onExit={() => setIsGestureMode(false)}
                onVideoReady={handleVideoReady}
            />

            <div className="fixed top-24 left-6 z-[100]">
                <TreasureProgress />
            </div>
        </div>
    );
};

export default HandCursorOverlay;
