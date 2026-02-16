import React from 'react';
import Container from './Container';

const FilterMeCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="7.1" schematicType="COMPUTER_VISION_NODE_MESH">
        <div className="w-full h-full flex items-center justify-center p-8">
            <div className="relative w-48 h-48">
                {/* Face Mesh Topology */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                    {/* Jawline */}
                    <path d="M20,40 Q50,90 80,40" fill="none" stroke="var(--brand)" strokeWidth="0.5" />
                    {/* Eyes */}
                    <ellipse cx="35" cy="40" rx="8" ry="4" fill="none" stroke="var(--brand)" strokeWidth="0.5" />
                    <ellipse cx="65" cy="40" rx="8" ry="4" fill="none" stroke="var(--brand)" strokeWidth="0.5" />
                    {/* Nodes */}
                    {[20, 30, 40, 50, 60, 70, 80].map(x => (
                        <circle key={x} cx={x} cy={40 + Math.sin(x / 10) * 5} r="1" fill="var(--brand)" />
                    ))}
                    <path d="M50,40 L50,60" fill="none" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>

                {/* Scanner Line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand)]/5 to-transparent animate-scan" style={{ height: '20%' }}></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="px-3 py-1 bg-white ring-1 ring-slate-100 rounded-full shadow-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-[8px] font-mono whitespace-nowrap text-slate-500">MESH_TRACKING_ACTIVE</span>
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

export default FilterMeCard;
