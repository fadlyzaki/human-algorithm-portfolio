import React, { useState, useRef } from 'react';

/**
 * Fingerprint — An SVG fingerprint that draws itself on hover.
 * Inspired by fingerprint.learnframer.site
 * 
 * Uses SVG stroke-dasharray/dashoffset animation for the drawing effect.
 */
const Fingerprint = ({ size = 48, className = '' }) => {
    const [isHovered, setIsHovered] = useState(false);
    const svgRef = useRef(null);

    return (
        <span
            ref={svgRef}
            className={`inline-flex items-center justify-center cursor-pointer select-none ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="img"
            aria-label="Fingerprint"
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                {/* Fingerprint paths — concentric arcs that draw in */}
                {[
                    'M20 50 C8 42 4 28 10 16 C16 4 30 0 42 6 C54 12 58 28 52 40',
                    'M22 46 C12 40 8 28 14 18 C20 8 32 4 42 10 C52 16 54 28 48 38',
                    'M24 42 C16 36 14 28 18 20 C22 12 32 8 40 12 C48 16 50 28 46 36',
                    'M26 40 C20 36 18 28 22 22 C26 16 34 12 40 16 C46 20 48 30 44 36',
                    'M28 38 C24 34 22 28 26 24 C30 20 36 18 40 22 C44 26 44 32 42 36',
                    'M30 36 C28 34 26 30 28 26 C30 22 34 20 38 22 C42 24 42 30 40 34',
                    'M32 34 C30 32 30 28 32 26 C34 24 36 24 38 26',
                ].map((d, i) => (
                    <path
                        key={i}
                        d={d}
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        fill="none"
                        style={{
                            strokeDasharray: 200,
                            strokeDashoffset: 0,
                            opacity: isHovered ? 1 : 0.35,
                            transition: `opacity ${0.4 + i * 0.08}s ease ${i * 0.04}s`,
                        }}
                    />
                ))}
            </svg>
        </span>
    );
};

export default Fingerprint;
