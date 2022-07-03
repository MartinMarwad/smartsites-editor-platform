
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// Local
import Text from '../TextBox';


// Plugin Component
export const CardTop = ({ children, ...props }) => {
    const {
        connectors: { connect },
    } = useNode();
    return (
        <div
            {...props}
            ref={connect}
            className="text-only"
            style={{
                padding: '10px',
                marginBottom: '10px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}
        >
            {children}
        </div>
    );
};


// Plugin Details
CardTop.craft = {
    name: "cardTop",
    displayName: "Card Top",
    description: 'Text',
    hidden: true,
    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
    },
};
