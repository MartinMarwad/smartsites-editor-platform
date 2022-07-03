
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// MUI
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Local Plugins
import Button from '../Button';
import Grid from '../Grid';
import GridProps from '../Grid/props';

// Local
import Props from './props';


// Plugin Component
export default function AppbarPlugin(props) {
    const { connectors: { connect, drag }, } = useNode();
    return (
        <AppBar {...props}>
            <Toolbar variant={props.variant} sx={props.sx}>
                {props.children}
            </Toolbar>
        </AppBar>
    );
};