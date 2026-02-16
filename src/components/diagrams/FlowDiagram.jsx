import React from 'react';

const FlowDiagram = ({ strokeColor, sw, draw }) => (
    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
        <motion.path d="M 50 100 L 120 100" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
        <rect x="20" y="80" width="40" height="40" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float" />
        <rect x="130" y="70" width="60" height="60" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" className="airy-breathe-d1" />
        <motion.path d="M 190 100 L 250 100" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
        <circle cx="280" cy="100" r="30" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-slow" />
        <motion.path d="M 310 100 L 350 100" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
    </svg>
);

export default FlowDiagram;
