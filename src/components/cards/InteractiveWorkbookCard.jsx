import React from 'react';
import { BookOpen } from 'lucide-react';
import Container from './Container';
import SkeletonLine from '../ui/SkeletonLine';

const InteractiveWorkbookCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="4.0" schematicType="PEDAGOGICAL_STRUCTURE">
        <div className="w-full h-full p-10 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className={`p-4 bg-white dark:bg-white/5 border ${i % 2 === 0 ? 'border-[var(--brand)]/30 shadow-md' : 'border-slate-100 dark:border-white/10'} rounded-xl flex flex-col gap-3 group/item`}>
                    <div className="flex justify-between items-center">
                        <BookOpen size={14} className={i % 2 === 0 ? 'text-[var(--brand)]' : 'text-slate-200'} />
                        <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-[var(--brand)]' : 'bg-slate-100'}`}></div>
                    </div>
                    <SkeletonLine width="80%" opacity={0.1} />
                </div>
            ))}
        </div>
    </Container>
);

export default InteractiveWorkbookCard;
