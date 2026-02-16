import React from 'react';
import Container from './Container';
import StoqoPickerApp from '../prototypes/StoqoPickerApp';

const StoqoPickerAppCard = ({ expanded, showChrome }) => (
    <Container expanded={expanded} showChrome={showChrome} figIndex="S.2" schematicType="WAREHOUSE_EXECUTION">
        <StoqoPickerApp />
    </Container>
);

export default StoqoPickerAppCard;
