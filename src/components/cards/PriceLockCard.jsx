import React from 'react';
import { Shield, DollarSign } from 'lucide-react';
import Container from './Container';
import SkeletonLine from '../ui/SkeletonLine';

const PriceLockCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="5.5" schematicType="FINANCIAL_ESCROW_WRAPPER">
        <div className="w-full h-full p-12 flex items-center justify-center">
            <div className="w-full bg-white dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group-hover:border-[var(--brand)]/20 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--brand)]/5 -mr-12 -mt-12 rounded-full"></div>
                <div className="flex justify-between items-center mb-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Shield size={16} className="text-[var(--brand)]" />
                            <span className="font-mono text-[9px] tracking-widest text-slate-400">SECURE_AUTH</span>
                        </div>
                        <SkeletonLine width="100px" opacity={0.2} height="4px" />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                        <DollarSign size={20} className="text-[var(--brand)] opacity-40" />
                    </div>
                </div>
                <div className="flex items-center justify-center h-10 border-t border-slate-50 mt-4">
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>)}
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

export default PriceLockCard;
