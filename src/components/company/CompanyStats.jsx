import React from 'react';

const CompanyStats = ({ cluster, t }) => {
    return (
        <div className="border-t border-[var(--border-color)] relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-30"></div>
            <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-12">
                {(cluster.stats || [
                    { label: 'Role', value: 'Lead Product Designer' },
                    { label: 'Timeline', value: '2020 - 2023' },
                    { label: 'Impact', value: 'Workforce Accessibility' },
                    { label: 'Platform', value: 'Mobile Apps & Website' }
                ]).map((stat, i) => {
                    const labelMap = {
                        'Role': t('company.role'),
                        'Teams': t('company.teams') || 'Teams',
                        'Timeline': t('company.period'),
                        'Impact': t('company.impact'),
                        'Platform': t('company.platform')
                    };
                    return (
                        <div key={i} className={`flex flex-col relative ${i > 0 ? 'pl-0' : ''}`}>
                            {i > 0 && <div className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 w-px h-8 bg-[var(--border-color)] hidden md:block"></div>}
                            <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-2 opacity-70">{labelMap[stat.label] || stat.label}</span>
                            <span className="font-serif italic text-lg text-[var(--text-primary)] leading-tight">{stat.value}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CompanyStats;
