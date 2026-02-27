import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimation, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Camera, ChevronRight, Fingerprint, Lock } from 'lucide-react';
import DraggablePhoto from '../DraggablePhoto';

const BlueprintScene = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isAssembled, setIsAssembled] = useState(false);
    const containerRef = useRef(null);
    const dragControls = useAnimation();

    // Motion values for the drag slider (0 to 100 progress)
    const dragX = useMotionValue(0);
    const maxDragDistance = 200; // Pixels the handle can be dragged

    // Convert drag pixel position to a 0-1 progress value
    const progress = useTransform(dragX, [0, maxDragDistance], [0, 1]);

    // When progress hits 1 (100%), trigger assembly completion
    useEffect(() => {
        const unsubscribe = progress.onChange((latest) => {
            if (latest >= 0.98 && !isAssembled) {
                handleAssemblyComplete();
            }
        });
        return unsubscribe;
    }, [progress, isAssembled]);

    const handleAssemblyComplete = () => {
        setIsAssembled(true);
        localStorage.setItem('hasSeenBlueprintIntro', 'true');

        // Trigger exit animation after a short delay showing the assembled state
        setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                if (onComplete) onComplete(false); // Tell parent it finished naturally
            }, 800); // Wait for exit animation to finish
        }, 1500); // How long to show the assembled "flash" state
    };

    // --- Transform mappings for the floating pieces ---
    // The idea: at progress = 0, pieces are scattered. At progress = 1, they are at {x:0, y:0, z:0, rotate:0}

    // Piece 1: The ID Card Base (Background Layer)
    const baseZ = useTransform(progress, [0, 1], [-800, 0]);
    const baseRotateY = useTransform(progress, [0, 1], [-45, 0]);
    const baseRotateX = useTransform(progress, [0, 1], [30, 0]);
    const baseOpacity = useTransform(progress, [0, 0.5, 1], [0.1, 0.5, 1]);

    // Piece 2: Profile Photo Frame (Flies in from top left)
    const photoX = useTransform(progress, [0, 1], [-400, 0]);
    const photoY = useTransform(progress, [0, 1], [-300, 0]);
    const photoZ = useTransform(progress, [0, 1], [400, 0]);
    const photoRotateZ = useTransform(progress, [0, 1], [-20, 0]);

    // Piece 3: Name & Typography (Flies in from bottom right)
    const textX = useTransform(progress, [0, 1], [300, 0]);
    const textY = useTransform(progress, [0, 1], [300, 0]);
    const textZ = useTransform(progress, [0, 1], [600, 0]);

    // Piece 4: Barcode / Footer Details (Flies in from bottom)
    const footerY = useTransform(progress, [0, 1], [400, 0]);
    const footerZ = useTransform(progress, [0, 1], [300, 0]);

    // UI state styles based on assembly phase
    const gridOpacity = isAssembled ? 0 : 0.4;
    const finalFlashOpacity = isAssembled ? 1 : 0;

    // Slider background fill mapping
    const progressFillRight = useTransform(progress, [0, 1], ['100%', '0%']);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-[#0a0f16] flex flex-col items-center justify-center overflow-hidden touch-none"
                    style={{ perspective: 1500 }}
                >
                    {/* Blueprint Grid Background */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        animate={{ opacity: gridOpacity }}
                        transition={{ duration: 1 }}
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Radial Glow Setup */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0f16_90%)] pointer-events-none" />

                    {/* The 3D Composition Area */}
                    <div className="relative w-full max-w-sm aspect-[1/1.5] -translate-y-8 flex items-center justify-center transform-style-3d">

                        {/* 1. Base Wireframe Card */}
                        <motion.div
                            className={`absolute inset-0 rounded-2xl border-2 ${isAssembled ? 'border-transparent bg-white shadow-2xl' : 'border-blue-500/50 border-dashed bg-blue-500/5 shadow-[0_0_30px_rgba(59,130,246,0.1)]'}`}
                            style={{
                                z: baseZ,
                                rotateY: baseRotateY,
                                rotateX: baseRotateX,
                                opacity: baseOpacity,
                                transformStyle: 'preserve-3d',
                                transition: isAssembled ? "all 0.5s ease" : "none"
                            }}
                        >
                            {/* Flash Overlay when snapped */}
                            <motion.div
                                className="absolute inset-0 bg-white rounded-2xl z-50 pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isAssembled ? [0, 1, 0] : 0 }}
                                transition={{ duration: 0.6, times: [0, 0.2, 1] }}
                            />

                            {/* Real Card Contents (Hidden until assembled) */}
                            <motion.div
                                className="absolute inset-x-0 inset-y-0 flex items-center justify-center pointer-events-auto"
                                style={{ opacity: finalFlashOpacity }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: finalFlashOpacity }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="w-full h-full scale-[1.05] flex items-center justify-center pt-8">
                                    <DraggablePhoto />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* 2. Photo Frame Wireframe */}
                        <motion.div
                            className="absolute top-12 w-32 h-32 border border-blue-400/80 bg-blue-900/20 backdrop-blur-sm flex items-center justify-center p-2"
                            style={{ x: photoX, y: photoY, z: photoZ, rotateZ: photoRotateZ, opacity: isAssembled ? 0 : 1 }}
                        >
                            <div className="w-full h-full border border-dashed border-blue-400/50 flex flex-col items-center justify-center text-blue-400/60">
                                <Camera size={24} className="mb-2" />
                                <span className="text-[8px] font-mono tracking-widest uppercase">Visual_Data</span>
                            </div>

                            {/* Alignment crosshairs */}
                            <div className="absolute -top-4 left-1/2 w-px h-2 bg-blue-500/50"></div>
                            <div className="absolute -bottom-4 left-1/2 w-px h-2 bg-blue-500/50"></div>
                            <div className="absolute top-1/2 -left-4 h-px w-2 bg-blue-500/50"></div>
                            <div className="absolute top-1/2 -right-4 h-px w-2 bg-blue-500/50"></div>
                        </motion.div>

                        {/* 3. Typography Wireframe */}
                        <motion.div
                            className="absolute mt-24 flex flex-col items-center"
                            style={{ x: textX, y: textY, z: textZ, opacity: isAssembled ? 0 : 1 }}
                        >
                            <div className="border border-blue-400/50 px-6 py-2 bg-blue-900/10 backdrop-blur-sm mb-3">
                                <span className="font-mono text-xl tracking-[0.2em] text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]">IDENTIFIER_X</span>
                            </div>
                            <div className="border border-dashed border-blue-500/40 px-4 py-1">
                                <span className="font-mono text-xs text-blue-400/70 tracking-widest uppercase">Role // Vector</span>
                            </div>
                        </motion.div>

                        {/* 4. Footer/Barcode Wireframe */}
                        <motion.div
                            className="absolute bottom-8 w-[80%] h-12 border-t border-b border-blue-500/40 flex items-center justify-between px-4 bg-blue-900/5 backdrop-blur-sm"
                            style={{ y: footerY, z: footerZ, opacity: isAssembled ? 0 : 1 }}
                        >
                            <Fingerprint size={20} className="text-blue-400/60" />
                            <div className="flex-1 mx-4 flex justify-between">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className={`h-6 w-1 ${i % 3 === 0 ? 'bg-blue-400/80' : 'bg-blue-400/30'}`}></div>
                                ))}
                            </div>
                            <Lock size={16} className="text-blue-400/60" />
                        </motion.div>

                    </div>

                    {/* Drag Interaction UI */}
                    <AnimatePresence>
                        {!isAssembled && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute bottom-16 w-full max-w-xs px-6"
                            >
                                <div className="text-center mb-6 flex flex-col items-center gap-2">
                                    <motion.h2
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                        className="text-white font-serif text-3xl md:text-4xl tracking-wide font-light"
                                    >
                                        Welcome
                                    </motion.h2>
                                    <span className="font-mono text-[10px] text-blue-400/60 tracking-[0.4em] uppercase">Initialize Identity System</span>
                                </div>

                                {/* Slider Track */}
                                <div className="relative h-14 bg-blue-950/40 rounded-full border border-blue-500/30 overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] backdrop-blur-md">
                                    {/* Progress fill */}
                                    <motion.div
                                        className="absolute left-0 top-0 bottom-0 bg-blue-500/20 pointer-events-none"
                                        style={{ right: progressFillRight }}
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                                        <span className="font-mono text-[10px] text-blue-400/40 tracking-widest pl-12">DRAG TO ASSEMBLE</span>
                                    </div>

                                    {/* Draggable Handle */}
                                    <motion.div
                                        className="absolute left-1 top-1 bottom-1 w-12 rounded-full bg-blue-500 flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10"
                                        drag="x"
                                        dragConstraints={{ left: 0, right: maxDragDistance }}
                                        dragElastic={0.05}
                                        dragMomentum={false}
                                        style={{ x: dragX }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ChevronRight size={20} className="text-white" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const BlueprintIntro = ({ onComplete }) => {
    const [hasSeen, setHasSeen] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem('hasSeenBlueprintIntro');
        setHasSeen(stored === 'true');
    }, []);

    // If they have seen it, tell the parent immediately so it can restore scroll state, and render nothing.
    useEffect(() => {
        if (hasSeen && onComplete) {
            onComplete(true);
        }
    }, [hasSeen, onComplete]);

    if (hasSeen) return null;

    return <BlueprintScene onComplete={onComplete} />;
};

export default BlueprintIntro;
