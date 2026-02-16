import React from 'react';
import Container from './Container';

const AppNavigationCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="8.8" schematicType="INFORMATION_ARCHITECTURE">
        <div className="w-full h-full p-12 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-12 border border-[var(--brand)] bg-[var(--brand)]/5 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-1 bg-[var(--brand)]/20 rounded-full"></div>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="flex gap-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex flex-col items-center gap-4">
                            <div className="w-px h-4 bg-slate-200"></div>
                            <div className="w-16 h-10 border border-slate-100 dark:border-white/10 bg-white dark:bg-white/5 rounded-lg"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Container>
);

export default AppNavigationCard;
