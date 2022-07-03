
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// Local
import AccordionGroup from '../../AccordionGroup';
import AccordionSection from '../../AccordionSection';
import AccordionItem, { InputField } from '../../AccordionItem';
import PluginSettings, { getRealValue } from '../../PluginSettings';

import Box from '../../Box';
import Text from '../../TextBox';

// Props
const Props = {
    
};

// Plugin Component
export default function CardHeader({ children, ...props }) {
    const { connectors: { connect }, } = useNode();
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

// Settings
function Settings() {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>
            <AccordionGroup title="General">
                
            </AccordionGroup>
        </PluginSettings>
    );
};

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
