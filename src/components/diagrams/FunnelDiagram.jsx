import React from 'react';

const FunnelDiagram = ({ strokeColor, sw, draw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <motion.path d="M 50 50 L 350 50 L 220 250 L 180 250 L 50 50" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
        <line x1="100" y1="120" x2="300" y2="120" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" className="airy-float-d1" />
        <line x1="150" y1="190" x2="250" y2="190" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" className="airy-float-d3" />
        <circle cx="200" cy="270" r="10" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse" />
    </svg>
);

export default FunnelDiagram;
