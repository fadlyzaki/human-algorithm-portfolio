import React from 'react';
import { Users } from 'lucide-react';
import Container from './Container';

const AtsDashboardCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="1.4" schematicType="RECRUITMENT_PIPELINE">
        <div className="w-full h-full p-12 flex flex-col">
            <div className="flex justify-between items-center mb-10">
                {[1, 2, 3, 4].map(i => (
                    <React.Fragment key={i}>
                        <div className={`w-8 h-8 rounded-full border-2 ${i === 1 ? 'border-[var(--brand)] bg-[var(--brand)]/5' : 'border-slate-100 dark:border-white/10 bg-white dark:bg-white/5'} flex items-center justify-center`}>
                            <Users size={12} className={i === 1 ? 'text-[var(--brand)]' : 'text-slate-300'} />
                        </div>
                        {i < 4 && <div className="flex-1 h-px bg-slate-100 mx-2 border-t-2 border-dashed border-slate-100"></div>}
                    </React.Fragment>
                ))}
            </div>
            <div className="flex-1 flex gap-4 pr-12">
                <div className="w-full h-24 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl shadow-sm p-4 flex flex-col gap-3">
                    <div className="mt-auto flex justify-end">
                        <div className="h-5 w-16 bg-[var(--brand)]/10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

export default AtsDashboardCard;
