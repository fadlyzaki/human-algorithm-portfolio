import React from 'react';
import * as Diagrams from './diagrams';

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

const DIAGRAM_REGISTRY = {
    'flow': Diagrams.FlowDiagram,
    'cycle': Diagrams.CycleDiagram,
    'hierarchy': Diagrams.HierarchyDiagram,
    'ui': Diagrams.UIDiagram,
    'data': Diagrams.DataDiagram,
    'venn': Diagrams.VennDiagram,
    'kanban': Diagrams.KanbanDiagram,
    'chart': Diagrams.ChartDiagram,
    'radar': Diagrams.RadarDiagram,
    'ecosystem': Diagrams.EcosystemDiagram,
    'funnel': Diagrams.FunnelDiagram,
    'timeline': Diagrams.TimelineDiagram,
    'architecture': Diagrams.ArchitectureDiagram,
    'layers': Diagrams.LayersDiagram,
    'default': Diagrams.DefaultDiagram
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

    const DiagramComponent = DIAGRAM_REGISTRY[type] || DIAGRAM_REGISTRY['default'];

    return (
        <div className={`w-full h-full flex items-center justify-center opacity-70 ${className} text-gray-500 dark:text-gray-400`}>
            <DiagramComponent strokeColor={strokeColor} sw={sw} draw={draw} />
        </div>
    );
};

export default AiryDiagram;
