import React from 'react';
import Container from './Container';

const BrandOfficialStoreCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="9.9" schematicType="BRAND_MICROSERVICE">
        <div className="w-full h-full p-12 flex flex-col gap-4">
            <div className="w-full h-24 border border-[var(--brand)]/30 rounded-lg relative overflow-hidden bg-[var(--brand)]/5">
                <div className="absolute inset-0 grid grid-cols-12 gap-1 p-1 opacity-20">
                    {[...Array(36)].map((_, i) => <div key={i} className="bg-[var(--brand)]"></div>)}
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="w-8 h-8 bg-white rounded border border-[var(--brand)]/20"></div>
                    <div className="flex flex-col justify-center gap-1">
                        <div className="w-16 h-2 bg-[var(--brand)]/20 rounded"></div>
                        <div className="w-8 h-1 bg-[var(--brand)]/10 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

export default BrandOfficialStoreCard;
