import React from 'react';
import Container from './Container';
import StoqoApp from '../prototypes/StoqoApp';

const StoqoLiveAppCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="S.0" schematicType="LIVE_PROTOTYPE_SIMULATION">
        <StoqoApp />
    </Container>
);

export default StoqoLiveAppCard;
