import React from 'react';

const KanbanDiagram = ({ strokeColor, sw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <rect x="50" y="50" width="100" height="200" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" opacity="0.5" />
        <rect x="160" y="50" width="100" height="200" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" opacity="0.5" />
        <rect x="270" y="50" width="100" height="200" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" opacity="0.5" />
        <rect x="60" y="70" width="80" height="40" rx="2" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float" />
        <rect x="170" y="70" width="80" height="40" rx="2" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d1" />
        <rect x="170" y="120" width="80" height="40" rx="2" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-sway" />
        <rect x="280" y="70" width="80" height="40" rx="2" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d2" />
    </svg>
);

export default KanbanDiagram;
