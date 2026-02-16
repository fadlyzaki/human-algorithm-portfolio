import React from 'react';
import { motion } from 'framer-motion';

const MapDiagram = ({ strokeColor, sw, draw }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        {/* Abstract Map Grid */}
        <motion.path d="M 50 150 L 350 150 M 150 50 L 150 250 M 250 50 L 250 250" fill="none" stroke={strokeColor} strokeWidth={sw} strokeOpacity="0.2" initial="hidden" whileInView="visible" variants={draw} />

        {/* River / Flood Path */}
        <motion.path d="M 50 200 Q 150 250 200 150 T 350 100" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />

        {/* Alert Zones (Pulse) */}
        <circle cx="200" cy="150" r="20" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse" />
        <circle cx="200" cy="150" r="10" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-d1" />
        <circle cx="200" cy="150" r="3" fill={strokeColor} className="airy-breathe" />

        {/* Distributed Sensors */}
        <circle cx="100" cy="100" r="4" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float" />
        <circle cx="300" cy="200" r="4" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d2" />
    </svg>
);

export default MapDiagram;
