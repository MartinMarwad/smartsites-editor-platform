
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// MUI
import Grid from '@mui/material/Grid';

// Plugins
import { Toolbar, getNodeStyle } from '../RenderNode';
import Box from '../Box';

// Local
import Props from './props';


// Plugin Component
export default function GridPlugin(props) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { connectors: { connect, drag }, actions: { setProp }, selected, hovered, name } = useNode((node) => ({
        selected: node.events.selected,
        hovered: node.events.hovered,
    }));

    return (
        <Grid container {...props}
            ref={(ref) => connect(drag(ref))}
            sx={{...props.sx, ...getNodeStyle(selected, hovered)}} 
            onClick={(event) => {setOpen(true); setAnchorEl(event.currentTarget); }} 
        >
            {props.children}

            {selected && <Toolbar open={open} anchorEl={anchorEl} /> }
        </Grid>
    );
};