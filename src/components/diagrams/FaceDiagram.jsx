import React from 'react';
import { motion } from 'framer-motion';

const FaceDiagram = ({ strokeColor, sw, draw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        {/* Abstract Face Outline */}
        <motion.path d="M 140 100 Q 200 50 260 100 Q 280 180 200 240 Q 120 180 140 100" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />

        {/* Eyes */}
        <motion.path d="M 170 140 Q 180 130 190 140 M 210 140 Q 220 130 230 140" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />

        {/* AR Scan Mesh Overlay */}
        <motion.path d="M 140 100 L 260 100 M 140 120 L 260 120 M 150 140 L 250 140 M 160 160 L 240 160 M 170 180 L 230 180" fill="none" stroke={strokeColor} strokeWidth={sw * 0.5} strokeDasharray="2 4" className="airy-breathe" initial="hidden" whileInView="visible" variants={draw} />

        {/* Sparkles / Filters */}
        <path d="M 270 90 L 275 80 L 280 90 L 290 95 L 280 100 L 275 110 L 270 100 L 260 95 Z" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-spin" style={{ transformOrigin: '275px 95px' }} />
        <path d="M 120 180 L 125 170 L 130 180 L 140 185 L 130 190 L 125 200 L 120 190 L 110 185 Z" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-spin-slow" style={{ transformOrigin: '125px 185px' }} />

    </svg>
);

export default FaceDiagram;
