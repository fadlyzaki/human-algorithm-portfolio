import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Database, Server, Wifi } from 'lucide-react';

const SystemMonitor = ({ skills }) => {
    // Simulate "live" resource usage
    const [metrics, setMetrics] = useState(() => {
        // Initialize random values lazily
        const initial = {};
        skills.forEach(skill => {
            initial[skill.name] = Math.floor(Math.random() * 30) + 60; // 60-90%
        });
        return initial;
    });

    useEffect(() => {
        // Update interval
        const interval = setInterval(() => {
            setMetrics(prev => {
                const next = { ...prev };
                Object.keys(next).forEach(key => {
                    // Fluctuate slightly
                    const change = Math.floor(Math.random() * 10) - 5;
                    next[key] = Math.min(99, Math.max(40, next[key] + change));
                });
                return next;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []); // Removed 'skills' dependency as it's only used for initial state

    return (
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-6 font-mono text-xs shadow-xl backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6 border-b border-[var(--border-color)] pb-2">
                <div className="flex items-center gap-2 text-[var(--text-card)]">
                    <Activity size={14} className="animate-pulse text-[var(--accent-green)]" />
                    <span className="uppercase tracking-widest">System Monitor // Skills</span>
                </div>
                <div className="text-[var(--text-card-secondary)]">
                    UPTIME: 99.9%
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2 group">
                        <div className="flex justify-between items-center">
                            <span className="text-[var(--text-card-secondary)] group-hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2">
                                {skill.icon && <skill.icon size={12} />}
                                {skill.url ? (
                                    <a href={skill.url} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-dashed underline-offset-4">
                                        {skill.name}
                                    </a>
                                ) : (
                                    skill.name
                                )}
                            </span>
                            <span className="text-[var(--accent-green)]">
                                {metrics[skill.name]}%
                            </span>
                        </div>
                        {skill.url && <div className="absolute right-0 top-0 w-2 h-2 bg-[var(--accent-blue)] rounded-full animate-pulse opacity-50"></div>}

                        {/* Bar Graph */}
                        <div className="h-2 bg-[var(--bg-void)] rounded-full overflow-hidden border border-[var(--border-color)] relative">

                            <div
                                className="h-full bg-[var(--text-card)] transition-all duration-1000 ease-out relative"
                                style={{ width: `${metrics[skill.name]}%` }}
                            >
                                <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                            </div>
                        </div>

                        {/* Sub-process */}
                        <div className="text-[9px] text-[var(--text-card-secondary)] opacity-50 uppercase tracking-wider flex justify-between">
                            <span>PID: {2048 + idx}</span>
                            <span>MEM: {metrics[skill.name] * 12}MB</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative Footer */}
            <div className="mt-8 pt-4 border-t border-[var(--border-color)] border-dashed flex justify-between opacity-50 text-[var(--text-card-secondary)]">
                <span>/usr/bin/skills</span>
                <span>Allocated: 16GB</span>
            </div>
        </div>
    );
};

export default SystemMonitor;
