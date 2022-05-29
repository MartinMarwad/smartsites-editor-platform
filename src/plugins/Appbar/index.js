
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// MUI
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Button from '../Button';
import Container from '../Page/Container';
import Grid from '../Grid';

// Local
// import PluginBase from './Plugin';

import SidebarSettings from './sidebar';
import ModalSettings from './modal';


// Plugin Props
export const AppbarPluginDefaultProps = {
    // background: '#ffffff',
    // padding: 3,

    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fillSpace: 'no',
    padding: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    background: { r: 255, g: 255, b: 255, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    shadow: 0,
    radius: 0,
};

// Plugin Component
export default function AppbarPlugin(props = {...AppbarPluginDefaultProps, ...props, }) {
    const { connectors: { connect, drag }, } = useNode();
    return (
        <Box {...props}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                    <Element canvas id="buttons" is={Grid} data-cy="card-bottom">
                        <Button
                            size="small"
                            text="Only buttons down here"
                            data-cy="card-bottom-button"
                        />
                    </Element>
                </Toolbar>
            </AppBar>
            <Element id="lower-buttons" canvas is={Grid} sx={{minWidth: 500, minHeight: 100,}}>
                <Button
                    size="small"
                    text="Some buttons down here"
                />
            </Element>
        </Box>
    );
};

// Plugin Settings
AppbarPlugin.craft = {
    name: 'appbar',
    displayName: 'App Bar',
    description: 'App Bar component for header layout.',
    hidden: false,
    props: AppbarPluginDefaultProps,
    related: {
        sidebar: SidebarSettings,
        modal: ModalSettings,
        canDelete: true,
    },
    rules: {
        canDrag: () => true,
        canDrop: () => true,
        canMoveIn: () => true,
        canMoveOut: () => true,
        // canDrag: true,
        // canDrop: true,
        // canMoveIn: false,
        // canMoveOut: false,
        
    },
};
