import React from 'react';

const RadarDiagram = ({ strokeColor, sw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <path d="M 200 50 L 300 100 L 300 200 L 200 250 L 100 200 L 100 100 Z" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" opacity="0.3" />
        <path d="M 200 80 L 270 120 L 250 190 L 200 220 L 130 180 L 150 110 Z" fill="none" stroke={strokeColor} strokeWidth={sw * 1.5} className="airy-pulse" />
        <circle cx="200" cy="150" r="2" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-breathe" />
    </svg>
);

export default RadarDiagram;
