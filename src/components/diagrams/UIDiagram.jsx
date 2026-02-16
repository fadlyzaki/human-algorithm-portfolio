import React from 'react';
import { motion } from 'framer-motion';

const UIDiagram = ({ strokeColor, sw, draw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <rect x="50" y="20" width="300" height="240" rx="8" fill="none" stroke={strokeColor} strokeWidth={sw * 2} />
        <rect x="70" y="40" width="260" height="40" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-breathe-d1" />
        <rect x="70" y="100" width="120" height="120" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-slow" />
        <motion.path d="M 210 110 L 330 110 M 210 140 L 330 140 M 210 170 L 280 170" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
    </svg>
);

export default UIDiagram;
