
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// Local
import Props from './props';


// Plugin Component
export default function GridPlugin(props) {
    const { connectors: { connect, drag }, } = useNode();

    return (
        <Grid container ref={connect} {...props}>             
            {props.children}
        </Grid>
    );
};