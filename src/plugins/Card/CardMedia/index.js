
// React
import React from 'react';

// Local
import CardFooter from './component';
import Props from './props';
import Settings from './settings';


// Plugin Details
CardFooter.craft = {
    name: "cardMedia",
    displayName: "Card Media",
    description: 'Components that are allowed in the Card Media.',
    props: Props,
    related: {
        sidebar: Settings,
    },
    rules: {
        // canMoveIn: (incomingNodes) => incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
    },
};

export default CardFooter;