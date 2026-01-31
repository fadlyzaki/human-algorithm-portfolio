import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import { useHandCursor } from '../context/HandCursorContext';

const HandCursorOverlay = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const { isGestureMode, setCursorPosition, cursorPosition, setIsGestureMode } = useHandCursor();
    const [cameraError, setCameraError] = useState(false);

    // Smoothing State
    const lastCursorPos = useRef({ x: 0, y: 0 });

    // --- KEYBOARD SHORTCUT (ESC) ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isGestureMode && e.key === 'Escape') {
                setIsGestureMode(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isGestureMode, setIsGestureMode]);

    useEffect(() => {
        if (!isGestureMode) {
            // Reset cursor to center or hide when mode is off
            document.documentElement.style.setProperty('--cursor-x', '-1000px');
            document.documentElement.style.setProperty('--cursor-y', '-1000px');
            return;
        }

        const hands = new Hands({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
        });
        hands.setOptions({
            maxNumHands: 1,
            modelComplexity: 0,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        });
        hands.onResults(onResults);

        let camera = null;
        if (webcamRef.current && webcamRef.current.video) {
            camera = new Camera(webcamRef.current.video, {
                onFrame: async () => {
                    if (webcamRef.current && webcamRef.current.video) {
                        await hands.send({ image: webcamRef.current.video });
                    }
                },
                width: 640,
                height: 480,
            });
            camera.start();
        }

        // Initialize "Encrypted" state
        document.documentElement.classList.add('encrypted-mode');

        return () => {
            if (camera) camera.stop();
            hands.close();
            document.documentElement.classList.remove('encrypted-mode');
        };
    }, [isGestureMode]);

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

            {/* 1. VISUAL LENS RETICLE */}
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

            {/* 2. WEBCAM PREVIEW (Mini HUD) */}
            <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-2">
                <div className="font-mono text-[9px] text-emerald-500 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    SENSOR_ACTIVE
                </div>
                <div className="w-32 h-24 border border-emerald-500/20 rounded bg-black/90 relative overflow-hidden">
                    <Webcam
                        ref={webcamRef}
                        audio={false} width={128} height={96}
                        videoConstraints={{ facingMode: "user" }}
                        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                        onUserMediaError={() => setCameraError(true)}
                    />
                    {/* Grid Overlay */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                </div>
            </div>

        </div>
    );
};

export default HandCursorOverlay;
