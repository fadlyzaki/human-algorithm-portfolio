import React from 'react';
import { motion } from 'framer-motion';

const AiryDiagram = ({ type = 'flow', className = '' }) => {
    const strokeColor = "currentColor";
    const strokeWidth = 1.5;
    const opacity = 0.6;

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { type: "spring", duration: 2, bounce: 0 },
                opacity: { duration: 0.01 }
            }
        }
    };

    const renderDiagram = () => {
        switch (type) {
            case 'flow': // Left to right process
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                        <motion.path
                            d="M 50 100 L 120 100"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial="hidden"
                            whileInView="visible"
                            variants={draw}
                        />
                        <motion.rect
                            x="20" y="80" width="40" height="40" rx="4"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ y: [0, -2, 0] }}
                            transition={{
                                opacity: { delay: 0.2 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                        <motion.rect
                            x="130" y="70" width="60" height="60" rx="4"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            strokeDasharray="4 4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{
                                opacity: {
                                    delay: 0.4,
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        />
                        <motion.path
                            d="M 190 100 L 250 100"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial="hidden"
                            whileInView="visible"
                            variants={draw}
                            transition={{ delay: 0.5 }}
                        />
                        <motion.circle
                            cx="280" cy="100" r="30"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{
                                opacity: { delay: 0.6 },
                                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                        <motion.path
                            d="M 310 100 L 350 100"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial="hidden"
                            whileInView="visible"
                            variants={draw}
                            transition={{ delay: 0.7 }}
                        />
                    </svg>
                );

            case 'cycle': // Circular loop
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.circle
                            cx="200" cy="150" r="80"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            strokeDasharray="8 8"
                            initial={{ opacity: 0, rotate: -90 }}
                            whileInView={{ opacity: opacity, rotate: 0 }}
                            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                        />
                        <motion.circle
                            cx="200" cy="70" r="20"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                default: { delay: 0.2 },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }
                            }}
                        />
                        <motion.circle
                            cx="280" cy="150" r="20"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                default: { delay: 0.4 },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                            }}
                        />
                        <motion.circle
                            cx="200" cy="230" r="20"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                default: { delay: 0.6 },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
                            }}
                        />
                        <motion.circle
                            cx="120" cy="150" r="20"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                default: { delay: 0.8 },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                            }}
                        />
                    </svg>
                );

            case 'hierarchy': // Tree
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.rect
                            x="175" y="20" width="50" height="30"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M 200 50 L 200 100 M 200 100 L 100 100 M 200 100 L 300 100 M 100 100 L 100 130 M 300 100 L 300 130"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial="hidden"
                            whileInView="visible"
                            variants={draw}
                        />
                        <motion.rect
                            x="75" y="130" width="50" height="30"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ y: [0, 2, 0] }}
                            transition={{
                                default: { delay: 0.4 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                            }}
                        />
                        <motion.rect
                            x="275" y="130" width="50" height="30"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ y: [0, 2, 0] }}
                            transition={{
                                default: { delay: 0.4 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
                            }}
                        />
                        <motion.path
                            d="M 100 160 L 100 200 M 300 160 L 300 200"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            strokeDasharray="2 2"
                            initial="hidden"
                            whileInView="visible"
                            variants={draw}
                            transition={{ delay: 0.6 }}
                        />
                    </svg>
                );

            case 'ui': // Wireframe
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.rect
                            x="50" y="20" width="300" height="240" rx="8"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth * 2}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        />
                        <motion.rect
                            x="70" y="40" width="260" height="40" rx="4"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{
                                default: { delay: 0.2 },
                                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                        <motion.rect
                            x="70" y="100" width="120" height="120" rx="4"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        />
                        <motion.path
                            d="M 210 110 L 330 110 M 210 140 L 330 140 M 210 170 L 280 170"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial="hidden"
                            whileInView="visible"
                            variants={draw}
                            transition={{ delay: 0.6 }}
                        />
                    </svg>
                );

            case 'data': // Bar chart / Data
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.line
                            x1="50" y1="250" x2="350" y2="250"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                        />
                        <motion.line
                            x1="50" y1="250" x2="50" y2="50"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                        />
                        {[1, 2, 3, 4, 5].map((i) => (
                            <motion.rect
                                key={i}
                                x={50 + i * 50}
                                y={250 - (i * 30 + Math.random() * 50)}
                                width="30"
                                height={i * 30 + Math.random() * 50}
                                fill="none"
                                stroke={strokeColor}
                                strokeWidth={strokeWidth}
                                initial={{ height: 0, y: 250 }}
                                whileInView={{ height: i * 30 + 20, y: 250 - (i * 30 + 20) }}
                                animate={{ height: [i * 30 + 20, i * 30 + 30, i * 30 + 20], y: [250 - (i * 30 + 20), 250 - (i * 30 + 30), 250 - (i * 30 + 20)] }}
                                transition={{
                                    default: { delay: i * 0.1, duration: 0.5 },
                                    height: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                                    y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                        ))}
                    </svg>
                );

            case 'venn': // Intersection
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.circle cx="150" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} animate={{ x: [0, -5, 0] }}
                            transition={{
                                default: { duration: 1 },
                                x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                            }}
                        />
                        <motion.circle cx="250" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} animate={{ x: [0, 5, 0] }}
                            transition={{
                                default: { duration: 1 },
                                x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                            }}
                        />
                        <motion.path d="M 200 110 Q 240 150 200 190 Q 160 150 200 110" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} />
                    </svg>
                );

            case 'kanban': // Columns
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        {[0, 1, 2].map(i => (
                            <React.Fragment key={i}>
                                <motion.rect x={50 + i * 110} y="50" width="100" height="200" rx="4" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4" initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} transition={{ delay: i * 0.2 }} />
                                <motion.rect x={60 + i * 110} y="70" width="80" height="40" rx="2" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} animate={{ y: [0, 5, 0] }}
                                    transition={{
                                        default: { delay: 0.5 + i * 0.2 },
                                        y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                />
                                {i === 1 && <motion.rect x={170} y="120" width="80" height="40" rx="2" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} animate={{ x: [170, 180, 170] }}
                                    transition={{
                                        default: { delay: 0.9 },
                                        x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                />}
                            </React.Fragment>
                        ))}
                    </svg>
                );

            case 'chart': // Line Chart
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.line x1="50" y1="250" x2="350" y2="250" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
                        <motion.line x1="50" y1="250" x2="50" y2="50" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
                        <motion.path d="M 50 200 L 100 180 L 150 220 L 200 100 L 250 120 L 300 60 L 350 40" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
                        <motion.circle cx="350" cy="40" r="4" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ scale: 0 }} whileInView={{ scale: 1 }} animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{
                                default: { delay: 1.5 },
                                scale: { duration: 2, repeat: Infinity },
                                opacity: { duration: 2, repeat: Infinity }
                            }}
                        />
                    </svg>
                );

            case 'radar': // Spider Chart
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.path d="M 200 50 L 300 100 L 300 200 L 200 250 L 100 200 L 100 100 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4" initial={{ opacity: 0, rotate: 180 }} whileInView={{ opacity: 0.3, rotate: 0 }} transition={{ duration: 1 }} />
                        <motion.path d="M 200 80 L 270 120 L 250 190 L 200 220 L 130 180 L 150 110 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth * 1.5} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} animate={{ scale: [1, 1.05, 1] }}
                            transition={{
                                default: { duration: 1.5, delay: 0.5 },
                                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                        <motion.circle cx="200" cy="150" r="2" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} />
                    </svg>
                );

            case 'ecosystem': // Concentric/Network
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.circle cx="200" cy="150" r="40" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} />
                        <motion.circle cx="200" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 0.5, scale: 1 }} animate={{ rotate: 360 }}
                            transition={{
                                default: { duration: 1 },
                                rotate: { duration: 40, repeat: Infinity, ease: "linear" }
                            }}
                        />
                        <motion.circle cx="200" cy="150" r="120" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="8 8" initial={{ opacity: 0, rotate: 0 }} whileInView={{ opacity: 0.3, rotate: 180 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                            <motion.circle
                                key={i}
                                cx={200 + 120 * Math.cos(deg * Math.PI / 180)}
                                cy={150 + 120 * Math.sin(deg * Math.PI / 180)}
                                r="5"
                                fill="none"
                                stroke={strokeColor}
                                strokeWidth={strokeWidth}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                transition={{
                                    default: { delay: i * 0.1 },
                                    scale: { duration: 2, delay: i * 0.5, repeat: Infinity },
                                    opacity: { duration: 2, delay: i * 0.5, repeat: Infinity }
                                }}
                            />
                        ))}
                    </svg>
                );

            case 'funnel': // Funnel shape
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.path
                            d="M 50 50 L 350 50 L 220 250 L 180 250 L 50 50"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <motion.line x1="100" y1="120" x2="300" y2="120" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} animate={{ y: [0, 5, 0] }}
                            transition={{
                                default: { delay: 0.5 },
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                        <motion.line x1="150" y1="190" x2="250" y2="190" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} animate={{ y: [0, 5, 0] }}
                            transition={{
                                default: { delay: 1.0 },
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                            }}
                        />
                        <motion.circle cx="200" cy="270" r="10" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ y: [0, 10, 0] }}
                            transition={{
                                default: { delay: 1.5 },
                                y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
                            }}
                        />
                    </svg>
                );

            case 'timeline': // Horizontal dots
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                        <motion.line x1="20" y1="100" x2="380" y2="100" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                        {[50, 150, 250, 350].map((x, i) => (
                            <React.Fragment key={i}>
                                <motion.circle cx={x} cy="100" r="6" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ scale: 0 }} whileInView={{ scale: 1 }} animate={{ scale: [1, 1.2, 1] }}
                                    transition={{
                                        default: { delay: i * 0.2 },
                                        scale: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                                    }}
                                />
                                <motion.line x1={x} y1="100" x2={x} y2="60" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 + i * 0.1 }} />
                            </React.Fragment>
                        ))}
                    </svg>
                );

            case 'architecture': // Isometric blocks
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.path d="M 100 200 L 200 250 L 300 200 L 200 150 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ y: [0, 5, 0] }}
                            transition={{
                                default: { duration: 0.5 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                        <motion.path d="M 100 140 L 200 190 L 300 140 L 200 90 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ y: [0, 5, 0] }}
                            transition={{
                                default: { duration: 0.5, delay: 0.2 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                            }}
                        />
                        <motion.path d="M 100 80 L 200 130 L 300 80 L 200 30 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ y: [0, 5, 0] }}
                            transition={{
                                default: { duration: 0.5, delay: 0.4 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                            }}
                        />
                        <motion.line x1="200" y1="30" x2="200" y2="250" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
                    </svg>
                );

            case 'layers': // Stacked planes
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        {[0, 1, 2].map(i => (
                            <motion.rect
                                key={i}
                                x="100" y={50 + i * 60} width="200" height="40" rx="4"
                                fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    default: { delay: i * 0.2 },
                                    x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
                                }}
                            />
                        ))}
                        <motion.path d="M 200 90 L 200 110 M 200 150 L 200 170" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} />
                    </svg>
                );

            default: // Generic Network
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                        <motion.circle
                            cx="200" cy="100" r="10"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                                default: { duration: 0 },
                                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                        <motion.line
                            x1="200" y1="100" x2="100" y2="50"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            strokeDasharray="4 4"
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                        <motion.line
                            x1="200" y1="100" x2="300" y2="150"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            strokeDasharray="4 4"
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                        <motion.line
                            x1="200" y1="100" x2="150" y2="180"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            strokeDasharray="4 4"
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                        <motion.circle
                            cx="100" cy="50" r="5" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{
                                default: { delay: 0.3 },
                                opacity: { duration: 2, repeat: Infinity }
                            }}
                        />
                        <motion.circle
                            cx="300" cy="150" r="5" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{
                                default: { delay: 0.3 },
                                opacity: { duration: 2, repeat: Infinity, delay: 0.5 }
                            }}
                        />
                        <motion.circle
                            cx="150" cy="180" r="5" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{
                                default: { delay: 0.3 },
                                opacity: { duration: 2, repeat: Infinity, delay: 1 }
                            }}
                        />
                    </svg>
                );
        }
    };

    return (
        <div className={`w-full h-full flex items-center justify-center opacity-70 ${className} text-gray-500 dark:text-gray-400`}>
            {renderDiagram()}
        </div>
    );
};

export default AiryDiagram;
