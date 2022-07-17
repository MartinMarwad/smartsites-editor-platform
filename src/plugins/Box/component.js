
// React
import React from 'react';
import { Element, useEditor, useNode } from '@craftjs/core';

// MUI
import Box from '@mui/material/Box';

// Plugin
import Grid from "../Grid";

// Local
import Props from './props';
import { Toolbar, getNodeStyle } from '../RenderNode';


// Plugin Component
export default function BoxPlugin(props) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { actions, query, enabled, } = useEditor((state, query) => ({
        enabled: state.options.enabled,
    }));
    const { connectors: { connect, drag }, actions: { setProp }, selected, hovered, name } = useNode((node) => ({
        selected: node.events.selected,
        hovered: node.events.hovered,
    }));

    return (
        <Box container {...props}
            ref={(ref) => connect(drag(ref))}
            sx={{...props.sx, ...getNodeStyle(selected, hovered)}} 
            onClick={(event) => {setOpen(true); setAnchorEl(event.currentTarget); }} 
        >
            {props.children}

            {selected && <Toolbar open={open} anchorEl={anchorEl} /> }
        </Box>
    );
};