import React from 'react';

const CycleDiagram = ({ strokeColor, sw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <circle cx="200" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="8 8" opacity="0.6" className="airy-spin" />
        <circle cx="200" cy="70" r="20" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse" />
        <circle cx="280" cy="150" r="20" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-d1" />
        <circle cx="200" cy="230" r="20" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-d2" />
        <circle cx="120" cy="150" r="20" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-d3" />
    </svg>
);

export default CycleDiagram;
