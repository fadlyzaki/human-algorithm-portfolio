import React from 'react';

const TimelineDiagram = ({ strokeColor, sw }) => (
    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
        <line x1="20" y1="100" x2="380" y2="100" stroke={strokeColor} strokeWidth={sw} />
        {[50, 150, 250, 350].map((x, i) => (
            <React.Fragment key={i}>
                <circle cx={x} cy="100" r="6" fill="none" stroke={strokeColor} strokeWidth={sw} className={`airy-pulse-d${(i % 5) + 1}`} />
                <line x1={x} y1="100" x2={x} y2="60" stroke={strokeColor} strokeWidth={sw} />
            </React.Fragment>
        ))}
    </svg>
);

export default TimelineDiagram;
