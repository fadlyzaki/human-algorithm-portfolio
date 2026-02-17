
import {
    Search, Lightbulb, PenTool, Rocket, BarChart, Target
} from 'lucide-react';

export const DESIGN_PROCESS_STEPS = [
    {
        id: '01',
        phase: 'Research & Deconstruction',
        objective: 'Quantify ambiguity. Map the problem space to business levers.',
        icon: Search,
        airyType: 'radar',
        color: 'text-[var(--accent-blue)]',
        bg: 'bg-[var(--accent-blue)]',
        border: 'border-[var(--accent-blue)]',
        inputs: [
            'Business Strategy & OKRs',
            'Historical Analytics (SQL/Mixpanel)',
            'Competitor Unit Economics',
            'Stakeholder Constraints'
        ],
        outputs: [
            'Problem Definition Document',
            'Opportunity Impact Sizing',
            'Behavioral Archetypes',
            'Heuristic Evaluation Report'
        ],
        risk: 'Solving a low-value problem due to lack of diverse data.',
        tools: ['User Interviews', 'Data Mining', 'Competitor Analysis']
    },
    {
        id: '02',
        phase: 'Insight & Strategy',
        objective: 'Synthesize noise into directive architecture.',
        icon: Lightbulb,
        airyType: 'venn',
        color: 'text-[var(--accent-amber)]',
        bg: 'bg-[var(--accent-amber)]',
        border: 'border-[var(--accent-amber)]',
        inputs: [
            'Raw User Research Data',
            'Technical Feasibility Audit',
            'Market Trend Analysis'
        ],
        outputs: [
            'Product Requirements (PRD) Contribution',
            'Information Architecture Maps',
            'Strategic Journey Blueprints',
            'Value Prop Definition'
        ],
        risk: 'Misalignment between user needs and business viability.',
        tools: ['Synthesis', 'Problem Definition', 'Journey Mapping']
    },
    {
        id: '03',
        phase: 'Design & Craft',
        objective: 'Architect scalable systems that embody the solution.',
        icon: PenTool,
        airyType: 'architecture',
        color: 'text-[var(--accent-purple)]',
        bg: 'bg-[var(--accent-purple)]',
        border: 'border-[var(--accent-purple)]',
        inputs: [
            'Strategic Blueprints',
            'Design System Tokens (v2.0)',
            'Accessibility Standards (WCAG Isomorphic)'
        ],
        outputs: [
            'High-Fidelity Component Systems',
            'Interactive Prototypes (State-Aware)',
            'Motion Choreography Specs',
            'accessibility-manifest.json'
        ],
        risk: 'Incurring design debt through ad-hoc patterns.',
        tools: ['Wireframing', 'Prototyping', 'Design Systems']
    },
    {
        id: '04',
        phase: 'Ship & Systems',
        objective: 'Orchestrate a zero-defect handoff and release.',
        icon: Rocket,
        airyType: 'flow',
        color: 'text-[var(--accent-green)]',
        bg: 'bg-[var(--accent-green)]',
        border: 'border-[var(--accent-green)]',
        inputs: [
            'Final Visuals',
            'Engineering constraints'
        ],
        outputs: [
            'Production-Ready Assets',
            'Component Documentation (Storybook)',
            'QA Test Plans',
            'Phased Rollout Strategy'
        ],
        risk: 'Implementation drift degrading user experience.',
        tools: ['Hand-off', 'QA Tuning', 'Release Strategy']
    },
    {
        id: '05',
        phase: 'Measure & Iterate',
        objective: 'Close the loop. Validate impact against business goals.',
        icon: BarChart,
        airyType: 'chart',
        color: 'text-[var(--accent-red)]',
        bg: 'bg-[var(--accent-red)]',
        border: 'border-[var(--accent-red)]',
        inputs: [
            'Live User Telemetry',
            'Support Ticket Analysis'
        ],
        outputs: [
            'Post-Mortem Analysis',
            'Conversion Rate Optimization (CRO)',
            'Retention Cohort Reports',
            'Next-Cycle Roadmap'
        ],
        risk: 'Optimizing for local maxima rather than system health.',
        tools: ['Analytics', 'A/B Testing', 'Feedback Loops']
    }
];
