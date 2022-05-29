
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

import Grid from '@mui/material/Grid'; 

// Local
// import { Container, ContainerSettings, ContainerDefaultProps, } from '../Layouts/Container';
import { Text } from '../Text';
import Button from '../Button';


{/* <div {...props} style={{ padding: '10px 0' }} ref={connect}>
 </di   */}
export const CardBottom = ({ children, ...props }) => {
    const {
        connectors: { connect },
    } = useNode();
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            // alignItems="center"
            ref={connect}
            {...props}
        >
            {children}
    </Grid>
    );
};

CardBottom.craft = {
    name: "cardBottom",
    displayName: "Card Bottom",
    description: '',
    hidden: true,
    rules: {
        canMoveIn: (incomingNodes) =>
            incomingNodes.every((incomingNode) => incomingNode.data.type === Button),
    },
};
