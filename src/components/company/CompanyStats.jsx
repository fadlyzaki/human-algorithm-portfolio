import React from 'react';

const CompanyStats = ({ cluster, t }) => {
    return (
        <div className="border-t border-[var(--border-color)] relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-30"></div>
            <div className="py-6 grid grid-cols-3 md:grid-cols-5 gap-y-5 gap-x-6">
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
                        <div key={i} className={`flex flex-col ${i > 0 ? 'md:border-l md:border-[var(--border-color)] md:pl-6' : ''}`}>
                            <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-1.5">{labelMap[stat.label] || stat.label}</span>
                            <span className="font-medium text-sm text-[var(--text-primary)]">{stat.value}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CompanyStats;
