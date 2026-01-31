import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { HAND_CONNECTIONS } from '@mediapipe/hands';
import { useHandCursor } from '../context/HandCursorContext';

const HandCursorOverlay = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const { isGestureMode, setCursorPosition, setIsClicking, isClicking } = useHandCursor();
    const [cameraError, setCameraError] = useState(false);
    const [scrollState, setScrollState] = useState(null);
    const [pinchLevel, setPinchLevel] = useState(0);
    const [debugTarget, setDebugTarget] = useState(null);

    // Hover State
    const [isHovering, setIsHovering] = useState(false);

    // Smoothing State
    const lastCursorPos = useRef({ x: 0, y: 0 });
    const scrollReqRef = useRef(null);

    // Click-on-Release State
    const pendingClickRef = useRef(null);

    // Edge Config
    const SCROLL_ZONE_PCT = 0.15;

    // Hover Helper
    const isInteractiveElement = (el) => {
        if (!el) return false;

        // Tags that are clickable
        const interactiveTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL', 'DETAILS', 'SUMMARY'];
        if (interactiveTags.includes(el.tagName)) return true;

        // Roles
        const role = el.getAttribute('role');
        if (role === 'button' || role === 'link' || role === 'menuitem' || role === 'tab') return true;

        // Specific Classes (Tailwind typical)
        if (el.classList.contains('cursor-pointer') || el.classList.contains('hover:cursor-pointer')) return true;

        // Recursively check parents
        let parent = el.parentElement;
        let depth = 0;
        while (parent && depth < 3) {
            if (interactiveTags.includes(parent.tagName)) return true;
            if (parent.getAttribute('role') === 'button') return true;
            parent = parent.parentElement;
            depth++;
        }

        return false;
    };

    useEffect(() => {
        if (!isGestureMode) return;
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

        const scrollLoop = () => {
            if (scrollReqRef.current) {
                if (scrollReqRef.current === 'UP') window.scrollBy(0, -15);
                if (scrollReqRef.current === 'DOWN') window.scrollBy(0, 15);
                requestAnimationFrame(scrollLoop);
            }
        };
        requestAnimationFrame(scrollLoop);

        return () => {
            if (camera) camera.stop();
            hands.close();
            scrollReqRef.current = null;
        };
    }, [isGestureMode]);

    const onResults = (results) => {
        // ... (Canvas Logic) ...
        if (canvasRef.current && webcamRef.current?.video) {
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;
            const canvasCtx = canvasRef.current.getContext('2d');
            canvasCtx.save();
            canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

            if (results.multiHandLandmarks) {
                for (const landmarks of results.multiHandLandmarks) {
                    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, { color: isClicking ? '#FF0000' : '#00FFFF', lineWidth: 2 });
                    drawLandmarks(canvasCtx, landmarks, { color: isClicking ? '#FF0000' : '#00FFFF', lineWidth: 1, radius: 3 });
                    const index = landmarks[8];
                    const thumb = landmarks[4];
                    canvasCtx.fillStyle = '#FFFFFF';
                    canvasCtx.beginPath(); canvasCtx.arc(index.x * videoWidth, index.y * videoHeight, 8, 0, 2 * Math.PI); canvasCtx.fill();
                    canvasCtx.beginPath(); canvasCtx.arc(thumb.x * videoWidth, thumb.y * videoHeight, 8, 0, 2 * Math.PI); canvasCtx.fill();
                }
            }
            canvasCtx.restore();
        }

        if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) return;

        const landmarks = results.multiHandLandmarks[0];
        const indexTip = landmarks[8];
        const thumbTip = landmarks[4];
        const targetX = (1 - indexTip.x) * window.innerWidth;
        const targetY = indexTip.y * window.innerHeight;

        const smoothingFactor = 0.3;
        let smoothX = lastCursorPos.current.x + (targetX - lastCursorPos.current.x) * smoothingFactor;
        let smoothY = lastCursorPos.current.y + (targetY - lastCursorPos.current.y) * smoothingFactor;

        // REMOVED LOCKING LOGIC to prevent "stuck" feeling
        // Cursor will continue to track even when pinched.

        setCursorPosition({ x: smoothX, y: smoothY });
        lastCursorPos.current = { x: smoothX, y: smoothY };

        // Debug & Hover Logic
        // IMPORTANT: overlay elements must have pointer-events-none!
        const el = document.elementFromPoint(smoothX, smoothY);
        let debugText = '';
        if (el) {
            // Hover Check
            const interactive = isInteractiveElement(el);
            setIsHovering(interactive);

            const tagName = el.tagName;
            const id = el.id ? `#${el.id}` : '';
            debugText = `${tagName}${id}`;
        } else {
            setIsHovering(false);
        }
        setDebugTarget(debugText);

        const distance = Math.sqrt(Math.pow(indexTip.x - thumbTip.x, 2) + Math.pow(indexTip.y - thumbTip.y, 2));
        const pinchThreshold = 0.05;
        const pinchMax = 0.15;

        let level = 1 - ((distance - pinchThreshold) / (pinchMax - pinchThreshold));
        level = Math.max(0, Math.min(1, level));
        setPinchLevel(level);

        const isPinching = distance < pinchThreshold;

        // --- CLICK ON RELEASE ---
        if (isPinching) {
            if (!isClicking) {
                setIsClicking(true);
                // Capture the element when pinch STARTS
                const element = document.elementFromPoint(smoothX, smoothY);
                pendingClickRef.current = element;
            }
        } else {
            if (isClicking) {
                setIsClicking(false);
                // Fire click on release
                if (pendingClickRef.current) {
                    const mouseEventInit = { bubbles: true, cancelable: true, view: window, clientX: lastCursorPos.current.x, clientY: lastCursorPos.current.y };
                    pendingClickRef.current.dispatchEvent(new MouseEvent('mousedown', mouseEventInit));
                    pendingClickRef.current.dispatchEvent(new MouseEvent('mouseup', mouseEventInit));
                    pendingClickRef.current.click();
                    try { pendingClickRef.current.focus(); } catch (e) { }
                }
                pendingClickRef.current = null;
            }
        }

        // --- AUTO SCROLL ---
        const viewH = window.innerHeight;
        // Allow scrolling even if pinching? Maybe better to keep logic separate.
        // If not checking "isClicking", then scroll works always. 
        // Let's keep it clean: Scroll zones work unless you are actively pinching (trying to click).
        if (!isClicking) {
            if (smoothY < viewH * SCROLL_ZONE_PCT) {
                if (scrollReqRef.current !== 'UP') { scrollReqRef.current = 'UP'; setScrollState('UP'); }
            } else if (smoothY > viewH * (1 - SCROLL_ZONE_PCT)) {
                if (scrollReqRef.current !== 'DOWN') { scrollReqRef.current = 'DOWN'; setScrollState('DOWN'); }
            } else {
                if (scrollReqRef.current !== null) { scrollReqRef.current = null; setScrollState(null); }
            }
        } else {
            if (scrollReqRef.current !== null) { scrollReqRef.current = null; setScrollState(null); }
        }
    };

    if (!isGestureMode) return null;

    // Visual Styles based on State
    let cursorColor = 'text-cyan-400';
    let ringColor = 'border-cyan-400 bg-cyan-400/20';

    if (isClicking) {
        cursorColor = 'text-red-500';
        ringColor = 'border-red-500 bg-red-500/50';
    } else if (isHovering) {
        cursorColor = 'text-emerald-400';
        ringColor = 'border-emerald-400 bg-emerald-400/40 mix-blend-screen';
    }

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* Scroll Zone Indicators */}
            <div className={`fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-500/20 to-transparent transition-opacity duration-300 pointer-events-none ${scrollState === 'UP' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full text-center mt-4 text-cyan-400 font-mono tracking-widest animate-bounce">SCROLLING UP</div>
            </div>
            <div className={`fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-500/20 to-transparent transition-opacity duration-300 pointer-events-none ${scrollState === 'DOWN' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full text-center mb-4 absolute bottom-0 text-cyan-400 font-mono tracking-widest animate-bounce">SCROLLING DOWN</div>
            </div>

            {/* Hint Overlay */}
            {!scrollState && !isClicking && (
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-500/30 font-mono text-xs pointer-events-none">
                    POINT TO EDGES TO SCROLL • PINCH & RELEASE TO CLICK
                </div>
            )}

            {/* Visible Webcam Preview - Ensure it doesn't block clicks */}
            <div className="fixed bottom-4 left-4 flex flex-col gap-2 items-start z-[110] pointer-events-none">
                <div className="font-mono text-[10px] text-cyan-500 flex flex-col items-start gap-1 opacity-70">
                    <span className="bg-black/80 px-2 py-1 border border-cyan-500/30 rounded">SYS.GESTURE_Control // ACTIVE</span>
                    {isClicking && <span className="text-red-500 font-bold tracking-widest leading-none">CLICK_ENGAGED</span>}
                    {isHovering && !isClicking && <span className="text-emerald-400 font-bold tracking-widest leading-none">INTERACTIVE</span>}
                    {debugTarget && <span className="text-xs text-white bg-black/50 px-1">{debugTarget}</span>}
                </div>
                <div className="w-48 h-36 border-2 border-[var(--accent-cyan)]/50 rounded-lg overflow-hidden bg-black shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
                    <Webcam
                        ref={webcamRef}
                        audio={false} width={192} height={144}
                        videoConstraints={{ facingMode: "user" }}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                        onUserMediaError={() => setCameraError(true)}
                    />
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
                </div>
            </div>

            {/* Cursor Visual - FORCE POINTER EVENTS NONE */}
            <div
                className={`fixed w-6 h-6 border-2 rounded-full transition-all duration-150 flex items-center justify-center mix-blend-screen z-[120] pointer-events-none ${ringColor} ${isHovering ? 'scale-125' : 'scale-100'}`}
                style={{
                    left: 0, top: 0,
                    // Center the 24px cursor by subtracting 12px
                    transform: `translate(${useHandCursor().cursorPosition.x - 12}px, ${useHandCursor().cursorPosition.y - 12}px) scale(${1 - (pinchLevel * 0.3)})`
                }}
            >
                {/* Center Dot */}
                <div className={`w-1 h-1 bg-current rounded-full ${cursorColor}`}></div>
                {/* Extra Hover Ring */}
                {isHovering && !isClicking && (
                    <div className="absolute inset-0 border border-emerald-400 rounded-full animate-ping opacity-50"></div>
                )}
            </div>

            {/* Click Ripple Effect */}
            {isClicking && (
                <div
                    className="fixed rounded-full border border-red-500 animate-ping z-[119] pointer-events-none"
                    style={{
                        left: useHandCursor().cursorPosition.x - 20,
                        top: useHandCursor().cursorPosition.y - 20,
                        width: 40, height: 40
                    }}
                ></div>
            )}
        </div>
    );
};

export default HandCursorOverlay;
