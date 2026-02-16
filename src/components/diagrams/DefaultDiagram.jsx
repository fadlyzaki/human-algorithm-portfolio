import React from 'react';

const DefaultDiagram = ({ strokeColor, sw }) => (
    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
        <circle cx="200" cy="100" r="10" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse" />
        <line x1="200" y1="100" x2="100" y2="50" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" />
        <line x1="200" y1="100" x2="300" y2="150" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" />
        <line x1="200" y1="100" x2="150" y2="180" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" />
        <circle cx="100" cy="50" r="5" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-breathe" />
        <circle cx="300" cy="150" r="5" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-breathe-d1" />
        <circle cx="150" cy="180" r="5" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-breathe-d2" />
    </svg>
);

export default DefaultDiagram;
