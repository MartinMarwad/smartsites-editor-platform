
// React
import React from 'react';

// Local
import CardHeader from './component';
import Props from './props';
import Settings from './settings';


// Plugin Details
CardHeader.craft = {
    name: "cardHeader",
    displayName: "Card Header",
    description: 'Components that are allowed in the Card Header.',
    props: Props,
    related: {
        sidebar: Settings,
    },
    rules: {
        // canMoveIn: (incomingNodes) => incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
    },
};

export default CardHeader;