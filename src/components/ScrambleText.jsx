import React, { useState, useRef, useCallback, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

/**
 * ScrambleText — A text component that scrambles its characters on hover,
 * then resolves back to the original text character by character.
 * 
 * Inspired by https://scramble-area.learnframer.site/
 * 
 * @param {string} text - The original text to display
 * @param {string} className - CSS classes to apply
 * @param {string} as - HTML element to render as (default: 'span')
 * @param {number} speed - Milliseconds between each character resolve (default: 30)
 * @param {number} scrambleSpeed - Milliseconds between scramble ticks (default: 40)
 * @param {boolean} triggerOnView - If true, scramble triggers on scroll into view instead of hover
 */
const ScrambleText = ({
    text = '',
    className = '',
    as: Tag = 'span',
    speed = 30,
    scrambleSpeed = 40,
    triggerOnView = false,
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef(null);
    const resolveTimeoutRef = useRef(null);
    const hasTriggeredRef = useRef(false);
    const elementRef = useRef(null);

    const scramble = useCallback(() => {
        if (isScrambling) return;
        setIsScrambling(true);

        let resolvedCount = 0;
        const originalChars = Array.from(text);
        const totalChars = originalChars.length;

        // Phase 1: Pure scramble for a brief moment
        let scrambleTicks = 0;
        const maxScrambleTicks = Math.max(3, Math.floor(totalChars * 0.15));

        intervalRef.current = setInterval(() => {
            scrambleTicks++;

            if (scrambleTicks <= maxScrambleTicks) {
                // Full scramble phase
                const scrambled = originalChars.map((char) =>
                    char === ' ' || char === '\n'
                        ? char
                        : CHARS[Math.floor(Math.random() * CHARS.length)]
                );
                setDisplayText(scrambled.join(''));
            } else {
                // Resolve phase: progressively reveal original characters
                resolvedCount = Math.min(resolvedCount + 1, totalChars);

                const mixed = originalChars.map((char, i) => {
                    if (i < resolvedCount) return char;
                    if (char === ' ' || char === '\n') return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                });

                setDisplayText(mixed.join(''));

                if (resolvedCount >= totalChars) {
                    clearInterval(intervalRef.current);
                    setDisplayText(text);
                    setIsScrambling(false);
                }
            }
        }, scrambleTicks <= maxScrambleTicks ? scrambleSpeed : speed);
    }, [text, speed, scrambleSpeed, isScrambling]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (resolveTimeoutRef.current) clearTimeout(resolveTimeoutRef.current);
        };
    }, []);

    // Update display text when prop changes
    useEffect(() => {
        if (!isScrambling) {
            setDisplayText(text);
        }
    }, [text, isScrambling]);

    // Intersection Observer for triggerOnView
    useEffect(() => {
        if (!triggerOnView || !elementRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTriggeredRef.current) {
                        hasTriggeredRef.current = true;
                        // Small delay for dramatic effect
                        setTimeout(() => scramble(), 200);
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [triggerOnView, scramble]);

    const handleMouseEnter = () => {
        if (!triggerOnView) {
            scramble();
        }
    };

    return (
        <Tag
            ref={elementRef}
            className={`${className} ${isScrambling ? 'scrambling' : ''}`}
            onMouseEnter={handleMouseEnter}
            style={{ cursor: triggerOnView ? 'default' : 'pointer' }}
        >
            {displayText}
        </Tag>
    );
};

export default ScrambleText;
