import React from 'react';

const ArchitectureDiagram = ({ strokeColor, sw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <path d="M 100 200 L 200 250 L 300 200 L 200 150 Z" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float" />
        <path d="M 100 140 L 200 190 L 300 140 L 200 90 Z" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d1" />
        <path d="M 100 80 L 200 130 L 300 80 L 200 30 Z" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d2" />
        <line x1="200" y1="30" x2="200" y2="250" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" className="airy-breathe" />
    </svg>
);

export default ArchitectureDiagram;
