import { useRef, useEffect, useState, useCallback } from 'react';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import { useHandCursor } from '../context/HandCursorContext';

/**
 * useHandTracker - Encapsulates MediaPipe Hands logic.
 * Optimizes performance by using direct DOM updates for the cursor lens.
 */
export const useHandTracker = () => {
    const webcamRef = useRef(null);
    const lensRef = useRef(null);
    const { isGestureMode, setIsGestureMode, isPreloading } = useHandCursor();

    const [isModelLoading, setIsModelLoading] = useState(false);
    const [modelReady, setModelReady] = useState(false);
    const [loadError, setLoadError] = useState(null);
    const [showFallbackNotice, setShowFallbackNotice] = useState(false);

    // Persistence Refs
    const handsRef = useRef(null);
    const cameraRef = useRef(null);
    const lastCursorPos = useRef({ x: 0, y: 0 });
    const loadingTimeoutRef = useRef(null);
    const loadingRef = useRef(false);
    const lastStateUpdate = useRef(0);

    // --- 1. HANDLE RESULTS ---
    const onResults = useCallback((results) => {
        if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) return;

        const landmarks = results.multiHandLandmarks[0];
        const indexTip = landmarks[8];

        // Mirrored mapping
        const targetX = (1 - indexTip.x) * window.innerWidth;
        const targetY = indexTip.y * window.innerHeight;

        const smoothingFactor = 0.2;
        let smoothX = lastCursorPos.current.x + (targetX - lastCursorPos.current.x) * smoothingFactor;
        let smoothY = lastCursorPos.current.y + (targetY - lastCursorPos.current.y) * smoothingFactor;

        lastCursorPos.current = { x: smoothX, y: smoothY };

        // VISUAL UPDATE (No React Render)
        if (lensRef.current) {
            lensRef.current.style.left = `${smoothX}px`;
            lensRef.current.style.top = `${smoothY}px`;
        }

        document.documentElement.style.setProperty('--cursor-x', `${smoothX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${smoothY}px`);

        // Throttled Custom Event for collisions
        const now = Date.now();
        if (now - lastStateUpdate.current > 50) {
            window.dispatchEvent(new CustomEvent('handCursorMove', { detail: { x: smoothX, y: smoothY } }));
            lastStateUpdate.current = now;
        }
    }, []);

    // --- 2. INITIALIZE MODEL ---
    useEffect(() => {
        if (handsRef.current) return;

        // Trigger if either gesture mode is active OR preloading is active
        if ((isGestureMode || isPreloading) && !modelReady && !loadingRef.current) {
            loadingRef.current = true;

            // Only show model loading UI if we are actually in gesture mode
            // If just preloading, we do it silently in the background
            if (isGestureMode) {
                setTimeout(() => {
                    setIsModelLoading(true);
                    setLoadError(null);
                }, 0);
            }

            loadingTimeoutRef.current = setTimeout(() => {
                if (!modelReady) {
                    if (isGestureMode) {
                        setLoadError('Connection timeout. Please check your internet connection.');
                        setIsModelLoading(false);
                        setShowFallbackNotice(true);
                        setTimeout(() => {
                            setShowFallbackNotice(false);
                            setIsGestureMode(false);
                        }, 5000);
                    }
                }
            }, 15000);

            const HANDS_VERSION = '0.4.1675469240';

            try {
                const handsInstance = new Hands({
                    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${HANDS_VERSION}/${file}`,
                });

                handsInstance.setOptions({
                    maxNumHands: 1,
                    modelComplexity: 0,
                    minDetectionConfidence: 0.5,
                    minTrackingConfidence: 0.5,
                });

                handsInstance.onResults(onResults);
                handsRef.current = handsInstance;

                handsInstance.initialize()
                    .then(() => {
                        clearTimeout(loadingTimeoutRef.current);
                        setModelReady(true);
                        setIsModelLoading(false);
                        setLoadError(null);
                        // console.log("MediaPipe Hands Preloaded/Initialized");
                    })
                    .catch((error) => {
                        clearTimeout(loadingTimeoutRef.current);
                        if (isGestureMode) {
                            setLoadError('Failed to load hand tracking. Using regular cursor.');
                            setIsModelLoading(false);
                            setShowFallbackNotice(true);
                            setTimeout(() => {
                                setShowFallbackNotice(false);
                                setIsGestureMode(false);
                            }, 5000);
                        }
                    });
            } catch (error) {
                clearTimeout(loadingTimeoutRef.current);
                if (isGestureMode) {
                    setTimeout(() => {
                        setLoadError('Hand tracking unavailable. Using regular cursor.');
                        setIsModelLoading(false);
                        setShowFallbackNotice(true);
                    }, 0);
                    setTimeout(() => {
                        setShowFallbackNotice(false);
                        setIsGestureMode(false);
                    }, 5000);
                }
            }
        }

        return () => {
            if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
        };
    }, [isGestureMode, isPreloading, modelReady, setIsGestureMode, onResults]);

    // --- 3. KEYBOARD SHORTCUT ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isGestureMode && e.key === 'Escape') setIsGestureMode(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isGestureMode, setIsGestureMode]);

    // --- 4. CAMERA LIFECYCLE ---
    useEffect(() => {
        if (!isGestureMode || !modelReady || !webcamRef.current?.video) {
            if (!isGestureMode && cameraRef.current) {
                cameraRef.current.stop();
                cameraRef.current = null;
                document.documentElement.classList.remove('encrypted-mode');
                document.documentElement.style.setProperty('--cursor-x', '-1000px');
                document.documentElement.style.setProperty('--cursor-y', '-1000px');
            }
            return;
        }

        const videoElement = webcamRef.current.video;
        const camera = new Camera(videoElement, {
            onFrame: async () => {
                if (handsRef.current) {
                    try {
                        await handsRef.current.send({ image: videoElement });
                    } catch (_) { }
                }
            },
            width: 640,
            height: 480,
        });

        camera.start();
        cameraRef.current = camera;
        document.documentElement.classList.add('encrypted-mode');

        return () => {
            if (cameraRef.current) {
                cameraRef.current.stop();
                cameraRef.current = null;
            }
            if (webcamRef.current?.video?.srcObject) {
                webcamRef.current.video.srcObject.getTracks().forEach(track => track.stop());
                webcamRef.current.video.srcObject = null;
            }
            document.documentElement.classList.remove('encrypted-mode');
            document.documentElement.style.setProperty('--cursor-x', '-1000px');
            document.documentElement.style.setProperty('--cursor-y', '-1000px');
        };
    }, [isGestureMode, modelReady]);

    const handleVideoReady = useCallback(() => { }, []);

    return {
        webcamRef,
        lensRef,
        isModelLoading,
        modelReady,
        loadError,
        showFallbackNotice,
        handleVideoReady,
        setIsGestureMode
    };
};
