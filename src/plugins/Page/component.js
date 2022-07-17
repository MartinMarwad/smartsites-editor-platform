
// React
import React from 'react';
import { Element, useNode, useEditor } from '@craftjs/core';

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Plugin
import { Toolbar, getNodeStyle } from '../RenderNode';
import BoxPlugin from "../Box";

// Local
import Props from './props';


// Plugin Component
export default function PagePlugin(props) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { actions, query, enabled, } = useEditor((state, query) => ({
        enabled: state.options.enabled,
    }));
    const { connectors: { connect, drag }, actions: { setProp }, selected, hovered, name } = useNode((node) => ({
        selected: node.events.selected,
        hovered: node.events.hovered,
    }));

    // Page Theme. TODO: Allow user to customize theme per page(s) 
    const theme = createTheme({ });

    return (
        <ThemeProvider  theme={theme}>
            <CssBaseline />
            <Box container {...props}
                ref={(ref) => connect(drag(ref))}
                sx={{...props.sx, ...getNodeStyle(selected, hovered)}} 
                onClick={(event) => {setOpen(true); setAnchorEl(event.currentTarget); }} 
            >
                {props.children}

                {selected && <Toolbar open={open} anchorEl={anchorEl} /> }
            </Box>
        </ThemeProvider>
    );
};
