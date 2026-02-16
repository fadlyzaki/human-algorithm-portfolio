import React from 'react';
import { motion } from 'framer-motion';

const ChartDiagram = ({ strokeColor, sw, draw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <line x1="50" y1="250" x2="350" y2="250" stroke={strokeColor} strokeWidth={sw} />
        <line x1="50" y1="250" x2="50" y2="50" stroke={strokeColor} strokeWidth={sw} />
        <motion.path d="M 50 200 L 100 180 L 150 220 L 200 100 L 250 120 L 300 60 L 350 40" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
        <circle cx="350" cy="40" r="4" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-fast" />
    </svg>
);

export default ChartDiagram;
