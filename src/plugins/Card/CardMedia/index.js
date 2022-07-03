
// React
import React from 'react';

// Local
import CardFooter from './component';
import Props from './props';
import Settings from './settings';


// Plugin Details
CardFooter.craft = {
    name: "cardFooter",
    displayName: "Card Footer",
    description: 'Components that are allowed in the Card Footer.',
    props: Props,
    related: {
        sidebar: Settings,
    },
    rules: {
        // canMoveIn: (incomingNodes) => incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
    },
};

export default CardFooter;