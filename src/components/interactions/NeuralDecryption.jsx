import React, { useState, useEffect, useCallback } from 'react';

const NeuralDecryption = ({
    text,
    className = "",
    triggerOnHover = true,
    speed = 40,
    scrambleRounds = 3
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);
    const chars = "!<>-_\\/[]{}—=+*^?#________";

    const scramble = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        let iteration = 0;

        const interval = setInterval(() => {
            setDisplayText(
                text.split("")
                    .map((char, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsAnimating(false);
            }

            iteration += 1 / scrambleRounds;
        }, speed);
    }, [text, isAnimating, scrambleRounds, speed]);

    useEffect(() => {
        setDisplayText(text);
    }, [text]);

    return (
        <span
            className={className}
            onMouseEnter={triggerOnHover ? scramble : undefined}
            style={{ display: 'inline-block' }}
        >
            {displayText}
        </span>
    );
};

export default NeuralDecryption;
