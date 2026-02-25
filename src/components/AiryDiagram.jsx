import React from 'react';
import * as Diagrams from './diagrams';

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
    'map': Diagrams.MapDiagram,
    'face': Diagrams.FaceDiagram,
    'default': Diagrams.DefaultDiagram
};

const AiryDiagram = ({ type = 'flow', className = '' }) => {

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
