import React from 'react';
import { motion } from 'framer-motion';

// Inject global keyframes once
const AIRY_STYLES_ID = 'airy-diagram-keyframes';

const injectStyles = () => {
    if (typeof document === 'undefined') return;
    if (document.getElementById(AIRY_STYLES_ID)) return;
    const style = document.createElement('style');
    style.id = AIRY_STYLES_ID;
    style.textContent = `
        @keyframes airyFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
        }
        @keyframes airyPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        @keyframes airyBreathe {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.35; }
        }
        @keyframes airySpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes airySway {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(6px); }
        }
        .airy-float { animation: airyFloat 4s ease-in-out infinite; }
        .airy-float-slow { animation: airyFloat 6s ease-in-out infinite; }
        .airy-float-d1 { animation: airyFloat 4s ease-in-out 0.5s infinite; }
        .airy-float-d2 { animation: airyFloat 4s ease-in-out 0.7s infinite; }
        .airy-float-d3 { animation: airyFloat 4s ease-in-out 1s infinite; }
        .airy-float-d4 { animation: airyFloat 5s ease-in-out 1.2s infinite; }
        .airy-float-d5 { animation: airyFloat 5s ease-in-out 0.3s infinite; }
        .airy-pulse { animation: airyPulse 3s ease-in-out infinite; }
        .airy-pulse-fast { animation: airyPulse 2s ease-in-out infinite; }
        .airy-pulse-slow { animation: airyPulse 5s ease-in-out infinite; }
        .airy-pulse-d1 { animation: airyPulse 2s ease-in-out 0.5s infinite; }
        .airy-pulse-d2 { animation: airyPulse 2s ease-in-out 1s infinite; }
        .airy-pulse-d3 { animation: airyPulse 2s ease-in-out 1.5s infinite; }
        .airy-pulse-d4 { animation: airyPulse 3s ease-in-out 0.3s infinite; }
        .airy-pulse-d5 { animation: airyPulse 2.5s ease-in-out 0.7s infinite; }
        .airy-breathe { animation: airyBreathe 3s ease-in-out infinite; }
        .airy-breathe-d1 { animation: airyBreathe 3s ease-in-out 0.4s infinite; }
        .airy-breathe-d2 { animation: airyBreathe 2.5s ease-in-out 1s infinite; }
        .airy-spin { animation: airySpin 40s linear infinite; transform-origin: center; }
        .airy-spin-slow { animation: airySpin 60s linear infinite; transform-origin: center; }
        .airy-sway { animation: airySway 4s ease-in-out infinite; }
        .airy-sway-d1 { animation: airySway 4s ease-in-out 0.3s infinite; }
        .airy-sway-d2 { animation: airySway 5s ease-in-out 0.6s infinite; }
    `;
    document.head.appendChild(style);
};

const AiryDiagram = ({ type = 'flow', className = '' }) => {
    React.useEffect(() => { injectStyles(); }, []);

    const strokeColor = "currentColor";
    const sw = 1.5;

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
            case 'flow':
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                        <motion.path d="M 50 100 L 120 100" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
                        <rect x="20" y="80" width="40" height="40" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float" />
                        <rect x="130" y="70" width="60" height="60" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" className="airy-breathe-d1" />
                        <motion.path d="M 190 100 L 250 100" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
                        <circle cx="280" cy="100" r="30" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-slow" />
                        <motion.path d="M 310 100 L 350 100" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
                    </svg>
                );

            case 'cycle':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <circle cx="200" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="8 8" opacity="0.6" className="airy-spin" />
                        <circle cx="200" cy="70" r="20" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse" />
                        <circle cx="280" cy="150" r="20" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-d1" />
                        <circle cx="200" cy="230" r="20" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-d2" />
                        <circle cx="120" cy="150" r="20" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-d3" />
                    </svg>
                );

            case 'hierarchy':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <rect x="175" y="20" width="50" height="30" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float" />
                        <motion.path d="M 200 50 L 200 100 M 200 100 L 100 100 M 200 100 L 300 100 M 100 100 L 100 130 M 300 100 L 300 130" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
                        <rect x="75" y="130" width="50" height="30" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d1" />
                        <rect x="275" y="130" width="50" height="30" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d2" />
                        <path d="M 100 160 L 100 200 M 300 160 L 300 200" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="2 2" className="airy-breathe" />
                    </svg>
                );

            case 'ui':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <rect x="50" y="20" width="300" height="240" rx="8" fill="none" stroke={strokeColor} strokeWidth={sw * 2} />
                        <rect x="70" y="40" width="260" height="40" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-breathe-d1" />
                        <rect x="70" y="100" width="120" height="120" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-slow" />
                        <motion.path d="M 210 110 L 330 110 M 210 140 L 330 140 M 210 170 L 280 170" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
                    </svg>
                );

            case 'data':
                return (
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

            case 'venn':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <circle cx="150" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-sway" />
                        <circle cx="250" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-sway-d2" />
                        <path d="M 200 110 Q 240 150 200 190 Q 160 150 200 110" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="2 2" className="airy-breathe" />
                    </svg>
                );

            case 'kanban':
                return (
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

            case 'chart':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <line x1="50" y1="250" x2="350" y2="250" stroke={strokeColor} strokeWidth={sw} />
                        <line x1="50" y1="250" x2="50" y2="50" stroke={strokeColor} strokeWidth={sw} />
                        <motion.path d="M 50 200 L 100 180 L 150 220 L 200 100 L 250 120 L 300 60 L 350 40" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
                        <circle cx="350" cy="40" r="4" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-fast" />
                    </svg>
                );

            case 'radar':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <path d="M 200 50 L 300 100 L 300 200 L 200 250 L 100 200 L 100 100 Z" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" opacity="0.3" />
                        <path d="M 200 80 L 270 120 L 250 190 L 200 220 L 130 180 L 150 110 Z" fill="none" stroke={strokeColor} strokeWidth={sw * 1.5} className="airy-pulse" />
                        <circle cx="200" cy="150" r="2" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-breathe" />
                    </svg>
                );

            case 'ecosystem':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <circle cx="200" cy="150" r="40" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse-slow" />
                        <circle cx="200" cy="150" r="80" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" opacity="0.5" className="airy-spin" />
                        <circle cx="200" cy="150" r="120" fill="none" stroke={strokeColor} strokeWidth={sw} strokeDasharray="8 8" opacity="0.3" className="airy-spin-slow" />
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                            <circle
                                key={i}
                                cx={200 + 120 * Math.cos(deg * Math.PI / 180)}
                                cy={150 + 120 * Math.sin(deg * Math.PI / 180)}
                                r="5" fill="none" stroke={strokeColor} strokeWidth={sw}
                                className={`airy-pulse-d${(i % 5) + 1}`}
                            />
                        ))}
                    </svg>
                );

            case 'funnel':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <motion.path d="M 50 50 L 350 50 L 220 250 L 180 250 L 50 50" fill="none" stroke={strokeColor} strokeWidth={sw} initial="hidden" whileInView="visible" variants={draw} />
                        <line x1="100" y1="120" x2="300" y2="120" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" className="airy-float-d1" />
                        <line x1="150" y1="190" x2="250" y2="190" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" className="airy-float-d3" />
                        <circle cx="200" cy="270" r="10" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse" />
                    </svg>
                );

            case 'timeline':
                return (
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

            case 'architecture':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        <path d="M 100 200 L 200 250 L 300 200 L 200 150 Z" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float" />
                        <path d="M 100 140 L 200 190 L 300 140 L 200 90 Z" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d1" />
                        <path d="M 100 80 L 200 130 L 300 80 L 200 30 Z" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-float-d2" />
                        <line x1="200" y1="30" x2="200" y2="250" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" className="airy-breathe" />
                    </svg>
                );

            case 'layers':
                return (
                    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        {[0, 1, 2].map(i => (
                            <rect key={i} x="100" y={50 + i * 60} width="200" height="40" rx="4" fill="none" stroke={strokeColor} strokeWidth={sw} className={`airy-sway-d${i}`} />
                        ))}
                        <path d="M 200 90 L 200 110 M 200 150 L 200 170" stroke={strokeColor} strokeWidth={sw} strokeDasharray="2 2" className="airy-breathe" />
                    </svg>
                );

            default:
                return (
                    <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                        <circle cx="200" cy="100" r="10" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-pulse" />
                        <line x1="200" y1="100" x2="100" y2="50" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" />
                        <line x1="200" y1="100" x2="300" y2="150" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" />
                        <line x1="200" y1="100" x2="150" y2="180" stroke={strokeColor} strokeWidth={sw} strokeDasharray="4 4" />
                        <circle cx="100" cy="50" r="5" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-breathe" />
                        <circle cx="300" cy="150" r="5" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-breathe-d1" />
                        <circle cx="150" cy="180" r="5" fill="none" stroke={strokeColor} strokeWidth={sw} className="airy-breathe-d2" />
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
