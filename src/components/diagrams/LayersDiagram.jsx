import React from 'react';

const LayersDiagram = ({ strokeColor, sw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        {[0, 1, 2].map(i => (
            <rect key={i} x="100" y={50 + i * 60} width="200" height="40" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} className={`airy-sway-d${i}`} />
        ))}
        <path d="M 200 90 L 200 110 M 200 150 L 200 170" stroke={strokeColor} strokeWidth={sw} strokeDasharray="2 2" className="airy-breathe" />
    </svg>
);

export default LayersDiagram;
