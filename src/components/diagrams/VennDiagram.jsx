import React from 'react';

const VennDiagram = ({ strokeColor, sw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <circle cx="150" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-sway" />
        <circle cx="250" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-sway-d2" />
        <path d="M 200 110 Q 240 150 200 190 Q 160 150 200 110" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="2 2" className="airy-breathe" />
    </svg>
);

export default VennDiagram;
