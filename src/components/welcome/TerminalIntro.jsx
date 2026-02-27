import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypewriterText = ({ text, delay, onComplete, speed = 40 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        let typingInterval;

        setDisplayedText(''); // Fix Strict Mode double-render issue

        const startTimeout = setTimeout(() => {
            typingInterval = setInterval(() => {
                // Use a functional state update and ensure we don't exceed length or skip
                setDisplayedText(prev => {
                    if (prev.length < text.length) {
                        return prev + text.charAt(prev.length);
                    }
                    return prev;
                });

                currentIndex++;

                if (currentIndex >= text.length) {
                    clearInterval(typingInterval);
                    if (onComplete) onComplete();
                }
            }, speed);
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            clearInterval(typingInterval);
        };
    }, [text, delay, speed]); // Removed onComplete from dependency array to prevent re-triggering

    return <span>{displayedText}</span>;
};

const TerminalIntro = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [phase, setPhase] = useState('booting_1');
    const [isKeyboardHovered, setIsKeyboardHovered] = useState(false);

    useEffect(() => {
        // Global listener during the 'waiting' phase
        const handleInteraction = () => {
            if (phase === 'waiting') {
                triggerGlitch();
            }
        };

        if (phase === 'waiting') {
            window.addEventListener('keydown', handleInteraction);
            window.addEventListener('click', handleInteraction);
            window.addEventListener('touchstart', handleInteraction);
        }

        return () => {
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
    }, [phase]);

    const triggerGlitch = () => {
        setPhase('glitching');
        localStorage.setItem('hasSeenTerminalIntro', 'true');

        // Trigger fast fade out
        setTimeout(() => {
            setIsVisible(false);

            setTimeout(() => {
                if (onComplete) onComplete(false);
            }, 600); // Wait for AnimatePresence to unmount
        }, 150); // 150ms of fast flash before hiding
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden touch-none font-mono text-green-500"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    onMouseEnter={() => setIsKeyboardHovered(true)}
                    onMouseLeave={() => setIsKeyboardHovered(false)}
                >
                    {/* Terminal Text Screen */}
                    {(phase.includes('booting') || phase === 'waiting') && (
                        <div className="flex flex-col items-start justify-center gap-2 max-w-2xl px-6 md:px-0">

                            {/* Welcome Text 1 */}
                            <h2 className="text-sm md:text-lg text-green-500/80 font-mono tracking-wide flex items-center h-8">
                                <TypewriterText
                                    text="Hello. Welcome to my digital workspace."
                                    delay={200}
                                    speed={25}
                                    onComplete={() => setPhase('booting_2')}
                                />
                                {phase === 'booting_1' && (
                                    <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} className="w-2 md:w-3 h-4 md:h-5 bg-green-500/80 ml-2 inline-block" />
                                )}
                            </h2>

                            {/* Welcome Text 2 */}
                            {phase !== 'booting_1' && (
                                <h2 className="text-sm md:text-[15px] text-green-500/80 font-mono tracking-wide flex items-center h-8 mb-6">
                                    <TypewriterText
                                        text="I design interfaces and write the code that brings them to life."
                                        delay={0}
                                        speed={25}
                                        onComplete={() => setPhase('booting_3')}
                                    />
                                    {phase === 'booting_2' && (
                                        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} className="w-2 md:w-3 h-4 md:h-5 bg-green-500/80 ml-2 inline-block" />
                                    )}
                                </h2>
                            )}

                            {/* Execute Command */}
                            {(phase === 'booting_3' || phase === 'waiting') && (
                                <h1 className="text-xl md:text-3xl text-white font-mono tracking-tight flex items-center">
                                    <span className="mr-3 text-green-500">{">"}</span>
                                    <TypewriterText
                                        text="execute human_algorithm.exe"
                                        delay={200}
                                        speed={40}
                                        onComplete={() => setPhase('waiting')}
                                    />
                                    {phase === 'booting_3' && (
                                        <motion.span
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                            className="w-3 h-6 bg-white ml-2 inline-block"
                                        />
                                    )}
                                </h1>
                            )}

                            {phase === 'waiting' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-8 self-center"
                                >
                                    <motion.p
                                        animate={{ opacity: [1, 0.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="text-xs md:text-sm text-green-500/70 uppercase tracking-[0.3em]"
                                    >
                                        [ Press any key to execute ]
                                    </motion.p>
                                </motion.div>
                            )}
                        </div>
                    )}

                    {/* Fast Glitch Flash & Reveal */}
                    {phase === 'glitching' && (
                        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 1, filter: "brightness(2) contrast(2) hue-rotate(90deg)" }}
                                animate={{ opacity: 1, scale: 1.2, filter: "brightness(1) contrast(1) hue-rotate(0deg)" }}
                                transition={{ duration: 0.15, ease: "easeOut" }}
                                className="w-full h-full mix-blend-screen relative"
                            >
                                <div className="absolute inset-0 bg-white/30 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, transparent 20%, #000 120%)' }}></div>
                                {/* Fast RGB Split */}
                                <motion.div
                                    className="absolute inset-0 opacity-80 mix-blend-color-dodge -z-10 bg-red-500/20"
                                    animate={{ x: [-30, 30, -20, 0], y: [15, -30, 15, 0] }}
                                    transition={{ duration: 0.15 }}
                                />
                                <motion.div
                                    className="absolute inset-0 opacity-80 mix-blend-color-burn -z-10 bg-cyan-500/20"
                                    animate={{ x: [30, -30, 20, 0], y: [-15, 30, -20, 0] }}
                                    transition={{ duration: 0.15 }}
                                />
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TerminalIntro;
