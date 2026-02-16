import React from 'react';
import { Truck } from 'lucide-react';
import Container from './Container';

const ProjectKinshipCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="1.2" schematicType="SOCIAL_LOGISTICS_PATH">
        <div className="w-full h-full p-12">
            <svg className="w-full h-full" viewBox="0 0 100 60">
                {/* Dashed Path */}
                <path
                    d="M20,40 C35,40 45,20 60,25 C75,30 85,15 90,10"
                    fill="none"
                    stroke="var(--brand)"
                    strokeWidth="3"
                    strokeDasharray="6 8"
                    strokeLinecap="round"
                    className="opacity-20"
                />
                <circle cx="20" cy="40" r="4" className="fill-[var(--brand)] opacity-20" />
                <circle cx="90" cy="10" r="4" className="fill-[var(--brand)]" />
            </svg>
            {/* Floating Detail Card */}
            <div className="absolute bottom-10 right-10 w-48 bg-white border border-slate-100 rounded-lg p-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                    <Truck size={10} className="text-orange-500" />
                    <span className="font-mono text-[8px] uppercase tracking-widest text-orange-500 font-bold">LAST_MILE_NODE</span>
                </div>
                <div className="h-px w-full bg-slate-200"></div>
                <div className="flex items-center justify-between">
                    <div className="w-12 h-1 bg-slate-100 rounded-full"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-slate-200"></div>
                </div>
            </div>
        </div>
    </Container>
);

export default ProjectKinshipCard;
