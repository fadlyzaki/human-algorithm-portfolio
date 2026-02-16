import React from 'react';
import Container from './Container';
import AiryDiagram from '../AiryDiagram';

const DefaultCard = ({ type, expanded, image, showChrome, backgroundOnly }) => (
    <Container expanded={expanded} showChrome={showChrome} backgroundOnly={backgroundOnly} schematicType="SYSTEM_DIAGRAM">
        {image ? (
            <img src={image} alt={type} className="w-full h-full object-cover" />
        ) : (
            <div className="w-full h-full flex items-center justify-center">
                <AiryDiagram type="default" />
            </div>
        )}
    </Container>
);

export default DefaultCard;
