import React from 'react';

const EcosystemDiagram = ({ strokeColor, sw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <circle cx="200" cy="150" r="40" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-slow" />
        <circle cx="200" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" opacity="0.5" className="airy-spin" />
        <circle cx="200" cy="150" r="120" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="8 8" opacity="0.3" className="airy-spin-slow" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <circle
                key={i}
                cx={200 + 120 * Math.cos(deg * Math.PI / 180)}
                cy={150 + 120 * Math.sin(deg * Math.PI / 180)}
                r="5" fill="none" stroke={strokeColor} strokeWidth={sw}
                className={`airy-pulse-d${(i % 5) + 1}`}
            />
        ))}
    </svg>
);

export default EcosystemDiagram;
