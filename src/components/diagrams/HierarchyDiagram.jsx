import React from 'react';

const HierarchyDiagram = ({ strokeColor, sw, draw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <rect x="175" y="20" width="50" height="30" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float" />
        <motion.path d="M 200 50 L 200 100 M 200 100 L 100 100 M 200 100 L 300 100 M 100 100 L 100 130 M 300 100 L 300 130" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
        <rect x="75" y="130" width="50" height="30" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d1" />
        <rect x="275" y="130" width="50" height="30" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d2" />
        <path d="M 100 160 L 100 200 M 300 160 L 300 200" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="2 2" className="airy-breathe" />
    </svg>
);

export default HierarchyDiagram;
