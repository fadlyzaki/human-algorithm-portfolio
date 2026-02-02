import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import { useHandCursor } from '../context/HandCursorContext';
import TreasureProgress from './TreasureProgress';
import { AlertTriangle } from 'lucide-react';

const HandCursorOverlay = () => {
    const webcamRef = useRef(null);
    const { isGestureMode, setCursorPosition, cursorPosition, setIsGestureMode } = useHandCursor();
    const [isModelLoading, setIsModelLoading] = useState(false);
    const [modelReady, setModelReady] = useState(false);
    const [loadError, setLoadError] = useState(null);
    const [showFallbackNotice, setShowFallbackNotice] = useState(false);

    // Refs for persistence
    const handsRef = useRef(null);
    const cameraRef = useRef(null);
    const lastCursorPos = useRef({ x: 0, y: 0 });
    const loadingTimeoutRef = useRef(null);

    // --- 1. INITIALIZE MODEL (Once or Lazy) WITH ERROR HANDLING ---
    useEffect(() => {
        // Only initialize if we haven't already
        if (handsRef.current) return;

        // Start loading only when first activated to save resources on initial page load
        if (isGestureMode && !modelReady && !isModelLoading) {
            setIsModelLoading(true);
            setLoadError(null);

            // Set timeout for loading (15 seconds)
            loadingTimeoutRef.current = setTimeout(() => {
                if (!modelReady) {
                    console.error('Hand tracker loading timeout');
                    setLoadError('Connection timeout. Please check your internet connection.');
                    setIsModelLoading(false);
                    setShowFallbackNotice(true);
                    // Auto-dismiss after 5 seconds
                    setTimeout(() => {
                        setShowFallbackNotice(false);
                        setIsGestureMode(false);
                    }, 5000);
                }
            }, 15000);

            const HANDS_VERSION = '0.4.1675469240';

            try {
                const handsInstance = new Hands({
                    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${HANDS_VERSION}/${file}`,
                });

                handsInstance.setOptions({
                    maxNumHands: 1,
                    modelComplexity: 0, // Lite model for speed
                    minDetectionConfidence: 0.5,
                    minTrackingConfidence: 0.5,
                });

                handsInstance.onResults(onResults);

                // Store instance
                handsRef.current = handsInstance;

                // Mark as ready (simulated micro-delay to ensure WASM initializes)
                handsInstance.initialize()
                    .then(() => {
                        clearTimeout(loadingTimeoutRef.current);
                        setModelReady(true);
                        setIsModelLoading(false);
                        setLoadError(null);
                        console.log("MediaPipe Hands Initialized (Persisted)");
                    })
                    .catch((error) => {
                        clearTimeout(loadingTimeoutRef.current);
                        console.error('Hand tracker initialization error:', error);
                        setLoadError('Failed to load hand tracking. Using regular cursor.');
                        setIsModelLoading(false);
                        setShowFallbackNotice(true);
                        setTimeout(() => {
                            setShowFallbackNotice(false);
                            setIsGestureMode(false);
                        }, 5000);
                    });
            } catch (error) {
                clearTimeout(loadingTimeoutRef.current);
                console.error('Hand tracker creation error:', error);
                setLoadError('Hand tracking unavailable. Using regular cursor.');
                setIsModelLoading(false);
                setShowFallbackNotice(true);
                setTimeout(() => {
                    setShowFallbackNotice(false);
                    setIsGestureMode(false);
                }, 5000);
            }
        }

        return () => {
            if (loadingTimeoutRef.current) {
                clearTimeout(loadingTimeoutRef.current);
            }
        };
    }, [isGestureMode, modelReady, isModelLoading, setIsGestureMode]);


    // --- 2. HANDLE RESULTS ---
    const onResults = (results) => {
        if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) return;

        const landmarks = results.multiHandLandmarks[0];
        const indexTip = landmarks[8];

        // Mirrored mapping for webcam
        const targetX = (1 - indexTip.x) * window.innerWidth;
        const targetY = indexTip.y * window.innerHeight;

        const smoothingFactor = 0.2; // smoother for visual effect
        let smoothX = lastCursorPos.current.x + (targetX - lastCursorPos.current.x) * smoothingFactor;
        let smoothY = lastCursorPos.current.y + (targetY - lastCursorPos.current.y) * smoothingFactor;

        // Update Context (if needed elsewhere) and Ref
        setCursorPosition({ x: smoothX, y: smoothY });
        lastCursorPos.current = { x: smoothX, y: smoothY };

        // DIRECT CSS UPDATE for performance (avoids React re-renders)
        document.documentElement.style.setProperty('--cursor-x', `${smoothX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${smoothY}px`);
    };

    // --- 3. KEYBOARD SHORTCUT (ESC) ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isGestureMode && e.key === 'Escape') {
                setIsGestureMode(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isGestureMode, setIsGestureMode]);


    // --- 4. CAMERA LIFECYCLE (Starts/Stops on Toggle) ---
    useEffect(() => {
        if (!isGestureMode || !modelReady || !webcamRef.current?.video) {
            // Stop camera if mode is off
            if (!isGestureMode && cameraRef.current) {
                cameraRef.current.stop();
                cameraRef.current = null;
                // Clean up visual state
                document.documentElement.classList.remove('encrypted-mode');
                document.documentElement.style.setProperty('--cursor-x', '-1000px');
                document.documentElement.style.setProperty('--cursor-y', '-1000px');
            }
            return;
        }

        // Start Camera
        const videoElement = webcamRef.current.video;
        const camera = new Camera(videoElement, {
            onFrame: async () => {
                if (handsRef.current) {
                    try {
                        await handsRef.current.send({ image: videoElement });
                    } catch (err) {
                        // Ignore internal pipe errors during rapid toggles
                    }
                }
            },
            width: 640,
            height: 480,
        });

        camera.start();
        cameraRef.current = camera;
        document.documentElement.classList.add('encrypted-mode');

        // Cleanup on unmount or toggle off handled by logic above/below
        return () => {
            // We rely on the if(!isGestureMode) block to stop it, 
            // but technically this cleanup runs on re-render too. 
            // Ideally we only stop if isGestureMode becomes false.
        };
    }, [isGestureMode, modelReady]);


    // Prevent rendering validation issues
    const handleVideoReady = () => {
        // Just a trigger, logic handled in effect
    };


    if (!isGestureMode) return null;

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">

            {/* 0. EXIT BUTTON (Interactive) */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 pointer-events-auto z-[10000]">
                <button
                    onClick={() => setIsGestureMode(false)}
                    className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 px-4 py-2 rounded-full font-mono text-xs tracking-widest backdrop-blur-md transition-all flex items-center gap-2 group"
                >
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    EXIT DECRYPTION (ESC)
                </button>
            </div>

            {/* LOADING STATE */}
            {isModelLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[10001]">
                    <div className="text-center space-y-4">
                        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <div className="font-mono text-emerald-500 text-sm tracking-widest animate-pulse">INITIALIZING NEURAL NET...</div>
                        <div className="font-mono text-gray-400 text-xs">This may take a few seconds</div>
                    </div>
                </div>
            )}

            {/* FALLBACK ERROR NOTICE */}
            {showFallbackNotice && loadError && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[10002] max-w-md animate-in slide-in-from-top duration-500">
                    <div className="bg-amber-500/95 backdrop-blur-xl border-2 border-amber-300 rounded-xl px-6 py-4 shadow-2xl">
                        <div className="flex items-start gap-3">
                            <AlertTriangle size={24} className="text-white flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-white text-sm mb-1">Hand Tracking Unavailable</p>
                                <p className="text-amber-50 text-xs leading-relaxed mb-2">{loadError}</p>
                                <p className="text-amber-100 text-[10px] font-mono">Reverting to regular cursor in 5s...</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 1. VISUAL LENS RETICLE (Only show when ready) */}
            {modelReady && (
                <div
                    className="fixed w-32 h-32 border border-emerald-500/50 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-screen"
                    style={{
                        left: cursorPosition.x,
                        top: cursorPosition.y,
                        boxShadow: '0 0 40px rgba(16, 185, 129, 0.2)'
                    }}
                >
                    {/* Inner Crosshair */}
                    <div className="absolute w-full h-[1px] bg-emerald-500/30"></div>
                    <div className="absolute h-full w-[1px] bg-emerald-500/30"></div>

                    {/* Rotating Ring */}
                    <div className="absolute inset-2 border-t border-b border-emerald-400/80 rounded-full animate-spin-slow"></div>

                    {/* Data readout */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-emerald-400 tracking-widest whitespace-nowrap bg-black/80 px-2 py-0.5 rounded border border-emerald-500/20">
                        DECRYPTING...
                    </div>
                </div>
            )}

            {/* 2. WEBCAM PREVIEW (Mini HUD) */}
            <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-2">
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
                        onUserMedia={handleVideoReady}
                    />
                    {/* Grid Overlay */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                </div>
            </div>

            {/* 3. EASTER EGG PROGRESS - Top Left */}
            <div className="fixed top-24 left-6 z-[100]">
                <TreasureProgress />
            </div>

        </div>
    );
};

export default HandCursorOverlay;
