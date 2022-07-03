
// React
import React from 'react';
import { Element, useNode, useEditor } from '@craftjs/core';

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Plugin
import BoxPlugin from "../Box";

// Local
import Props from './props';


// Plugin Component
export default function PagePlugin(props) {
    const { actions, query, enabled, } = useEditor((state, query) => ({
        enabled: state.options.enabled,
    }));
    const { connectors: { connect, drag }, } = useNode();

    // Page Theme. TODO: Allow user to customize theme per page(s) 
    const theme = createTheme({ });

    return (
        <ThemeProvider  theme={theme}>
            <CssBaseline />
            <Box container {...props}>
                {props.children}
            </Box>
        </ThemeProvider>
    );
};
