import React from 'react';

const DataDiagram = ({ strokeColor, sw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <line x1="50" y1="250" x2="350" y2="250" stroke={strokeColor} strokeWidth={sw} />
        <line x1="50" y1="250" x2="50" y2="50" stroke={strokeColor} strokeWidth={sw} />
        <rect x="100" y="200" width="30" height="50" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float" />
        <rect x="150" y="160" width="30" height="90" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d1" />
        <rect x="200" y="120" width="30" height="130" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d2" />
        <rect x="250" y="90" width="30" height="160" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d3" />
        <rect x="300" y="60" width="30" height="190" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d4" />
    </svg>
);

export default DataDiagram;
