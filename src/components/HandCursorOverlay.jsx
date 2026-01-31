import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { HAND_CONNECTIONS } from '@mediapipe/hands';
import { useHandCursor } from '../context/HandCursorContext';

const HandCursorOverlay = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null); // Canvas for overlay
    const { isGestureMode, setCursorPosition, setIsClicking, isClicking } = useHandCursor();
    const [cameraError, setCameraError] = useState(false);

    // Smoothing State
    const lastCursorPos = useRef({ x: 0, y: 0 });
    const targetCursorPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!isGestureMode) return;

        const hands = new Hands({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
        });

        hands.setOptions({
            maxNumHands: 1,
            modelComplexity: 0, // Lite model for speed (reduce lag)
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

        return () => {
            if (camera) camera.stop();
            hands.close();
        };
    }, [isGestureMode]);

    const onResults = (results) => {
        // 1. Draw Skeleton on Canvas
        if (canvasRef.current && webcamRef.current?.video) {
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const canvasCtx = canvasRef.current.getContext('2d');
            canvasCtx.save();
            canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

            // Re-draw video frame (optional, but webcam is behind) 
            // We just draw the overlay ON TOP of the webcam video component.

            if (results.multiHandLandmarks) {
                for (const landmarks of results.multiHandLandmarks) {
                    // Draw Connectors (Bones)
                    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
                        color: isClicking ? '#FF0000' : '#00FFFF', // Red on click, Cyan normally
                        lineWidth: 2
                    });

                    // Draw Landmarks (Joints)
                    drawLandmarks(canvasCtx, landmarks, {
                        color: isClicking ? '#FF0000' : '#00FFFF',
                        lineWidth: 1,
                        radius: 3
                    });

                    // Highlight Interaction Points (Index & Thumb)
                    // Index Tip (8)
                    const index = landmarks[8];
                    canvasCtx.beginPath();
                    canvasCtx.arc(index.x * videoWidth, index.y * videoHeight, 8, 0, 2 * Math.PI);
                    canvasCtx.fillStyle = '#FFFFFF';
                    canvasCtx.fill();

                    // Thumb Tip (4)
                    const thumb = landmarks[4];
                    canvasCtx.beginPath();
                    canvasCtx.arc(thumb.x * videoWidth, thumb.y * videoHeight, 8, 0, 2 * Math.PI);
                    canvasCtx.fillStyle = '#FFFFFF';
                    canvasCtx.fill();
                }
            }
            canvasCtx.restore();
        }

        if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) return;

        const landmarks = results.multiHandLandmarks[0];
        const indexTip = landmarks[8];
        const thumbTip = landmarks[4];

        // Screen mapping (flipped X because webcam is mirrored)
        const targetX = (1 - indexTip.x) * window.innerWidth;
        const targetY = indexTip.y * window.innerHeight;

        // Smoothing (Lerp)
        const smoothingFactor = 0.2; // Adjust: lower = smoother/slower, higher = responsive/jittery
        const smoothX = lastCursorPos.current.x + (targetX - lastCursorPos.current.x) * smoothingFactor;
        const smoothY = lastCursorPos.current.y + (targetY - lastCursorPos.current.y) * smoothingFactor;

        setCursorPosition({ x: smoothX, y: smoothY });
        lastCursorPos.current = { x: smoothX, y: smoothY };


        // Pinch Detection
        const distance = Math.sqrt(
            Math.pow(indexTip.x - thumbTip.x, 2) + Math.pow(indexTip.y - thumbTip.y, 2)
        );

        const isPinching = distance < 0.05;
        setIsClicking(isPinching);

        // --- INTERACTION LOGIC ---
        if (isPinching) {
            // SCROLL LOGIC
            const deltaY = smoothY - targetCursorPos.current.y; // check against previous frame's smoothed pos? 
            // Actually, we need delta from PREVIOUS SMOOTH POS to CURRENT SMOOTH POS
            // Or just use velocity from the raw movement?
            // Let's stick to simple delta from previous update

            // Note: window.scrollBy doesn't like sub-pixels well, but browsers handle it.
            if (Math.abs(deltaY) > 1) { // reduced threshold due to smoothing
                window.scrollBy(0, -deltaY * 2.0); // Boost multiplier slightly
            }
        }

        targetCursorPos.current = { x: smoothX, y: smoothY };
    };

    if (!isGestureMode) return null;

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* Visible Webcam Preview (PIP) */}
            <div className="fixed bottom-4 left-4 flex flex-col gap-2 items-start">
                {/* Status Indicator */}
                <div className="font-mono text-[10px] text-cyan-500 flex flex-col items-start gap-1 opacity-70">
                    <span className="bg-black/80 px-2 py-1 border border-cyan-500/30 rounded">SYS.GESTURE_Control // ACTIVE</span>
                    {isClicking && <span className="text-red-500 font-bold tracking-widest leading-none">DRAG_ENGAGED</span>}
                </div>

                <div className="w-48 h-36 border-2 border-[var(--accent-cyan)]/50 rounded-lg overflow-hidden bg-black shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
                    <Webcam
                        ref={webcamRef}
                        audio={false}
                        width={192} // 48 * 4
                        height={144} // 36 * 4
                        videoConstraints={{ facingMode: "user" }}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                        onUserMediaError={() => setCameraError(true)}
                    />
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Tech Overlay on Camera */}
                    <div className="absolute inset-0 border border-[var(--accent-cyan)]/20 pointer-events-none">
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--accent-cyan)]"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--accent-cyan)]"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--accent-cyan)]"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--accent-cyan)]"></div>
                    </div>
                </div>
            </div>

            {/* Cursor Visual */}
            <div
                className={`fixed w-6 h-6 border-2 rounded-full transition-all duration-75 flex items-center justify-center mix-blend-difference ${isClicking ? 'border-red-500 scale-75 bg-red-500/50' : 'border-cyan-400 bg-cyan-400/20'}`}
                style={{
                    left: 0,
                    top: 0,
                    transform: `translate(${useHandCursor().cursorPosition.x}px, ${useHandCursor().cursorPosition.y}px)`
                }}
            >
                <div className={`w-1 h-1 bg-current rounded-full ${isClicking ? 'text-red-500' : 'text-cyan-400'}`}></div>
            </div>
        </div>
    );
};

export default HandCursorOverlay;
