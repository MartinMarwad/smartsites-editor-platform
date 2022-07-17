
// React
import React from 'react';
import { Element, useEditor, useNode } from '@craftjs/core';

// MUI
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Local Plugins
import { Toolbar, getNodeStyle } from '../RenderNode';
import Box from '../Box';
import Button from '../Button';
import Grid from '../Grid';
import GridProps from '../Grid/props';

// Local
import Props from './props';


// Plugin Component
export default function AppbarPlugin(props) {
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
        <AppBar {...props}
            ref={(ref) => connect(drag(ref))}
            sx={{...props.sx, ...getNodeStyle(selected, hovered)}} 
            onClick={(event) => {setOpen(true); setAnchorEl(event.currentTarget); }} 
        >
            <MuiToolbar variant={props.variant} sx={props.sx}>
                {props.children}
            </MuiToolbar>
        </AppBar>
    );
};