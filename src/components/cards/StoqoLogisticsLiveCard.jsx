import React from 'react';
import Container from './Container';
import StoqoLogisticsApp from '../prototypes/StoqoLogisticsApp';

const StoqoLogisticsLiveCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="S.1" schematicType="LIVE_LOGISTICS_SIMULATION">
        <StoqoLogisticsApp />
    </Container>
);

export default StoqoLogisticsLiveCard;
