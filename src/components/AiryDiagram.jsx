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

    // CSS keyframe animation helpers — these bypass framer-motion entirely
    const float = (duration = 4, delay = 0) => ({
        animation: `airyFloat ${duration}s ease-in-out ${delay}s infinite`,
    });
    const pulse = (duration = 3, delay = 0) => ({
        animation: `airyPulse ${duration}s ease-in-out ${delay}s infinite`,
    });
    const breathe = (duration = 3, delay = 0) => ({
        animation: `airyBreathe ${duration}s ease-in-out ${delay}s infinite`,
    });
    const spin = (duration = 40, delay = 0) => ({
        animation: `airySpin ${duration}s linear ${delay}s infinite`,
        transformOrigin: 'center',
    });
    const sway = (duration = 4, delay = 0) => ({
        animation: `airySway ${duration}s ease-in-out ${delay}s infinite`,
    });

    const renderDiagram = () => {
        switch (type) {
            case 'flow':
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                        <motion.path
                            d="M 50 100 L 120 100" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                        <motion.rect
                            x="20" y="80" width="40" height="40" rx="4"
                            fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={float(4, 0)}
                        />
                        <motion.rect
                            x="130" y="70" width="60" height="60" rx="4"
                            fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={breathe(3, 0.4)}
                        />
                        <motion.path
                            d="M 190 100 L 250 100" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                        <motion.circle
                            cx="280" cy="100" r="30"
                            fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={pulse(5, 0.6)}
                        />
                        <motion.path
                            d="M 310 100 L 350 100" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                    </svg>
                );

            case 'cycle':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.circle
                            cx="200" cy="150" r="80"
                            fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="8 8"
                            initial={{ opacity: 0 }} whileInView={{ opacity: opacity }}
                            style={spin(30)}
                        />
                        <motion.circle cx="200" cy="70" r="20" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={pulse(2, 0)}
                        />
                        <motion.circle cx="280" cy="150" r="20" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={pulse(2, 0.5)}
                        />
                        <motion.circle cx="200" cy="230" r="20" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={pulse(2, 1)}
                        />
                        <motion.circle cx="120" cy="150" r="20" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={pulse(2, 1.5)}
                        />
                    </svg>
                );

            case 'hierarchy':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.rect x="175" y="20" width="50" height="30" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={float(4, 0)}
                        />
                        <motion.path
                            d="M 200 50 L 200 100 M 200 100 L 100 100 M 200 100 L 300 100 M 100 100 L 100 130 M 300 100 L 300 130"
                            fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                        <motion.rect x="75" y="130" width="50" height="30" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={float(4, 0.5)}
                        />
                        <motion.rect x="275" y="130" width="50" height="30" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={float(4, 0.7)}
                        />
                        <motion.path
                            d="M 100 160 L 100 200 M 300 160 L 300 200"
                            fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2"
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                    </svg>
                );

            case 'ui':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.rect x="50" y="20" width="300" height="240" rx="8" fill="none" stroke={strokeColor} strokeWidth={strokeWidth * 2}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        />
                        <motion.rect x="70" y="40" width="260" height="40" rx="4" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={breathe(3, 0.2)}
                        />
                        <motion.rect x="70" y="100" width="120" height="120" rx="4" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        />
                        <motion.path
                            d="M 210 110 L 330 110 M 210 140 L 330 140 M 210 170 L 280 170"
                            fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                    </svg>
                );

            case 'data':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.line x1="50" y1="250" x2="350" y2="250" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                        />
                        <motion.line x1="50" y1="250" x2="50" y2="50" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                        />
                        {[1, 2, 3, 4, 5].map((i) => (
                            <motion.rect
                                key={i}
                                x={50 + i * 50} y={250 - (i * 30 + 20)} width="30" height={i * 30 + 20}
                                fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                                initial={{ height: 0, y: 250 }}
                                whileInView={{ height: i * 30 + 20, y: 250 - (i * 30 + 20) }}
                                style={float(3 + i, i * 0.3)}
                            />
                        ))}
                    </svg>
                );

            case 'venn':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.circle cx="150" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={sway(4, 0)}
                        />
                        <motion.circle cx="250" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={sway(4, 2)}
                        />
                        <motion.path d="M 200 110 Q 240 150 200 190 Q 160 150 200 110" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        />
                    </svg>
                );

            case 'kanban':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        {[0, 1, 2].map(i => (
                            <React.Fragment key={i}>
                                <motion.rect x={50 + i * 110} y="50" width="100" height="200" rx="4" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4"
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }}
                                />
                                <motion.rect x={60 + i * 110} y="70" width="80" height="40" rx="2" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                    style={float(3 + i, 0.5 + i * 0.2)}
                                />
                                {i === 1 && (
                                    <motion.rect x={170} y="120" width="80" height="40" rx="2" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                        style={sway(4, 0.9)}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </svg>
                );

            case 'chart':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.line x1="50" y1="250" x2="350" y2="250" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                        />
                        <motion.line x1="50" y1="250" x2="50" y2="50" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                        />
                        <motion.path d="M 50 200 L 100 180 L 150 220 L 200 100 L 250 120 L 300 60 L 350 40" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <motion.circle cx="350" cy="40" r="4" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={pulse(2, 1.5)}
                        />
                    </svg>
                );

            case 'radar':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.path d="M 200 50 L 300 100 L 300 200 L 200 250 L 100 200 L 100 100 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }}
                        />
                        <motion.path d="M 200 80 L 270 120 L 250 190 L 200 220 L 130 180 L 150 110 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth * 1.5}
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            style={pulse(3, 0)}
                        />
                        <motion.circle cx="200" cy="150" r="2" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} />
                    </svg>
                );

            case 'ecosystem':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.circle cx="200" cy="150" r="40" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={pulse(4)}
                        />
                        <motion.circle cx="200" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }}
                            style={spin(40)}
                        />
                        <motion.circle cx="200" cy="150" r="120" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="8 8"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }}
                            style={spin(60, 0)}
                        />
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                            <motion.circle
                                key={i}
                                cx={200 + 120 * Math.cos(deg * Math.PI / 180)}
                                cy={150 + 120 * Math.sin(deg * Math.PI / 180)}
                                r="5" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                style={pulse(2, i * 0.5)}
                            />
                        ))}
                    </svg>
                );

            case 'funnel':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.path
                            d="M 50 50 L 350 50 L 220 250 L 180 250 L 50 50"
                            fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <motion.line x1="100" y1="120" x2="300" y2="120" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={float(3, 0.5)}
                        />
                        <motion.line x1="150" y1="190" x2="250" y2="190" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={float(3, 1.0)}
                        />
                        <motion.circle cx="200" cy="270" r="10" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={pulse(2, 1.5)}
                        />
                    </svg>
                );

            case 'timeline':
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                        <motion.line x1="20" y1="100" x2="380" y2="100" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
                        />
                        {[50, 150, 250, 350].map((x, i) => (
                            <React.Fragment key={i}>
                                <motion.circle cx={x} cy="100" r="6" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                    style={pulse(2, i * 0.2)}
                                />
                                <motion.line x1={x} y1="100" x2={x} y2="60" stroke={strokeColor} strokeWidth={strokeWidth}
                                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                />
                            </React.Fragment>
                        ))}
                    </svg>
                );

            case 'architecture':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.path d="M 100 200 L 200 250 L 300 200 L 200 150 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={float(4, 0)}
                        />
                        <motion.path d="M 100 140 L 200 190 L 300 140 L 200 90 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={float(4, 0.2)}
                        />
                        <motion.path d="M 100 80 L 200 130 L 300 80 L 200 30 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={float(4, 0.4)}
                        />
                        <motion.line x1="200" y1="30" x2="200" y2="250" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4"
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                        />
                    </svg>
                );

            case 'layers':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        {[0, 1, 2].map(i => (
                            <motion.rect
                                key={i}
                                x="100" y={50 + i * 60} width="200" height="40" rx="4"
                                fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                style={sway(4, i * 0.3)}
                            />
                        ))}
                        <motion.path d="M 200 90 L 200 110 M 200 150 L 200 170" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="2 2"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        />
                    </svg>
                );

            default:
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                        <motion.circle cx="200" cy="100" r="10" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={pulse(3)}
                        />
                        <motion.line x1="200" y1="100" x2="100" y2="50" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4"
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                        <motion.line x1="200" y1="100" x2="300" y2="150" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4"
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                        <motion.line x1="200" y1="100" x2="150" y2="180" stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray="4 4"
                            initial="hidden" whileInView="visible" variants={draw}
                        />
                        <motion.circle cx="100" cy="50" r="5" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={breathe(2, 0)}
                        />
                        <motion.circle cx="300" cy="150" r="5" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={breathe(2, 0.5)}
                        />
                        <motion.circle cx="150" cy="180" r="5" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            style={breathe(2, 1)}
                        />
                    </svg>
                );
        }
    };

    return (
        <div className={`w-full h-full flex items-center justify-center opacity-70 ${className} text-gray-500 dark:text-gray-400`}>
            <style>{`
                @keyframes airyFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-3px); }
                }
                @keyframes airyPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.08); }
                }
                @keyframes airyBreathe {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
                @keyframes airySpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes airySway {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(5px); }
                }
            `}</style>
            {renderDiagram()}
        </div>
    );
};

export default AiryDiagram;
