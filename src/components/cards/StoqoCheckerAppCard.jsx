import React from 'react';
import Container from './Container';
import StoqoCheckerApp from '../prototypes/StoqoCheckerApp';

const StoqoCheckerAppCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="S.3" schematicType="QUALITY_CONTROL">
        <StoqoCheckerApp />
    </Container>
);

export default StoqoCheckerAppCard;
