
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// MUI
import Box from '@mui/material/Box';

// Plugin
import Grid from "../Grid";

// Local
import Props from './props';


// Plugin Component
export default function BoxPlugin(props) {
    const { connectors: { connect, drag }, } = useNode();

    return (
        <Box container {...props} component="img">
            {props.children}
        </Box>
    );
};