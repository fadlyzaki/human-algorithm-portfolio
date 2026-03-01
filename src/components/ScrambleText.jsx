import React, { useState, useRef, useCallback, useEffect } from 'react';

// Use only characters with similar visual width to minimize layout shift
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@&%';

/**
 * ScrambleText — A text component that scrambles its characters on hover/view,
 * then resolves back to the original text character by character.
 *
 * Each character is rendered in a fixed-width inline-block span to prevent
 * layout reflow during scramble — eliminating visual jank.
 *
 * @param {string} text - The original text to display
 * @param {string} className - CSS classes to apply
 * @param {string} as - HTML element to render as (default: 'span')
 * @param {number} speed - Milliseconds between each character resolve (default: 30)
 * @param {number} scrambleSpeed - Milliseconds between scramble ticks (default: 50)
 * @param {boolean} triggerOnView - If true, scramble triggers on scroll into view instead of hover
 */
const ScrambleText = ({
    text = '',
    className = '',
    as: Tag = 'span',
    speed = 30,
    scrambleSpeed = 50,
    triggerOnView = false,
}) => {
    const [chars, setChars] = useState(() => Array.from(text));
    const [scrambledIndices, setScrambledIndices] = useState(new Set());
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef(null);
    const hasTriggeredRef = useRef(false);
    const elementRef = useRef(null);
    const originalChars = useRef(Array.from(text));

    // Update original chars when text prop changes
    useEffect(() => {
        originalChars.current = Array.from(text);
        if (!isScrambling) {
            setChars(Array.from(text));
            setScrambledIndices(new Set());
        }
    }, [text, isScrambling]);

    const scramble = useCallback(() => {
        if (isScrambling) return;
        setIsScrambling(true);

        const original = originalChars.current;
        const totalChars = original.length;
        let resolvedCount = 0;
        let scrambleTicks = 0;
        const maxScrambleTicks = Math.min(6, Math.max(3, Math.floor(totalChars * 0.08)));

        // Resolve multiple characters per tick for long texts
        const charsPerTick = Math.max(1, Math.floor(totalChars / 40));

        intervalRef.current = setInterval(() => {
            scrambleTicks++;

            if (scrambleTicks <= maxScrambleTicks) {
                // Full scramble phase — all non-space characters randomize
                const scrambled = original.map((char) =>
                    char === ' ' || char === '\n' ? char : CHARS[Math.floor(Math.random() * CHARS.length)]
                );
                const indices = new Set(
                    original.map((c, i) => (c !== ' ' && c !== '\n' ? i : -1)).filter((i) => i >= 0)
                );
                setChars(scrambled);
                setScrambledIndices(indices);
            } else {
                // Resolve phase — progressively reveal original characters
                resolvedCount = Math.min(resolvedCount + charsPerTick, totalChars);

                const mixed = original.map((char, i) => {
                    if (i < resolvedCount) return char;
                    if (char === ' ' || char === '\n') return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                });

                const indices = new Set();
                for (let i = resolvedCount; i < totalChars; i++) {
                    if (original[i] !== ' ' && original[i] !== '\n') indices.add(i);
                }

                setChars(mixed);
                setScrambledIndices(indices);

                if (resolvedCount >= totalChars) {
                    clearInterval(intervalRef.current);
                    setChars([...original]);
                    setScrambledIndices(new Set());
                    setIsScrambling(false);
                }
            }
        }, scrambleTicks <= maxScrambleTicks ? scrambleSpeed : speed);
    }, [text, speed, scrambleSpeed, isScrambling]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    // Intersection Observer for triggerOnView
    useEffect(() => {
        if (!triggerOnView || !elementRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTriggeredRef.current) {
                        hasTriggeredRef.current = true;
                        setTimeout(() => scramble(), 300);
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [triggerOnView, scramble]);

    const handleMouseEnter = () => {
        if (!triggerOnView) scramble();
    };

    return (
        <Tag
            ref={elementRef}
            className={className}
            onMouseEnter={handleMouseEnter}
            style={{ cursor: triggerOnView ? 'default' : 'pointer' }}
        >
            {chars.map((char, i) => (
                <span
                    key={i}
                    style={{
                        display: 'inline',
                        opacity: scrambledIndices.has(i) ? 0.4 : 1,
                        transition: 'opacity 0.15s ease',
                        fontFamily: scrambledIndices.has(i) ? "'SF Mono', 'Fira Code', 'Courier New', monospace" : 'inherit',
                    }}
                >
                    {char}
                </span>
            ))}
        </Tag>
    );
};

export default ScrambleText;
