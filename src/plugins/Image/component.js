
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// MUI
import MuiBox from '@mui/material/Box';

// Plugin
import Box from "../Box";

// Local
import Props from './props';


// Plugin Component
export default function Image({ sx, ...props }) {
    const { connectors: { connect, drag }, } = useNode();

    return (
        <Box sx={sx}>
            <MuiBox container {...props} component="img">
                {props.children}
            </MuiBox>
        </Box>
    );
};