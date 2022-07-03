
// React
import React from 'react';

// Local
import CardContent from './component';
import Props from './props';
import Settings from './settings';


// Plugin Details
CardContent.craft = {
    name: "cardContent",
    displayName: "Card Content",
    description: 'Components that are allowed in the Card Content.',
    props: Props,
    related: {
        sidebar: Settings,
    },
    rules: {
        // canMoveIn: (incomingNodes) => incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
    },
};

export default CardContent;