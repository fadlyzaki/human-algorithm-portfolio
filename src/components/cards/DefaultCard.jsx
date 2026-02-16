import React from 'react';
import Container from './Container';
import AiryDiagram from '../AiryDiagram';

const DefaultCard = ({ type, expanded, image, showChrome, backgroundOnly }) => (
    <Container expanded={expanded} showChrome={showChrome} backgroundOnly={backgroundOnly} schematicType="SYSTEM_DIAGRAM">
        {image && image.startsWith('airy:') ? (
            <div className="w-full h-full p-8 flex items-center justify-center">
                <AiryDiagram type={image.split(':')[1]} />
            </div>
        ) : image ? (
            <img src={image} alt={type} className="w-full h-full object-cover" />
        ) : (
            <div className="w-full h-full flex items-center justify-center">
                <AiryDiagram type="default" />
            </div>
        )}
    </Container>
);

export default DefaultCard;
