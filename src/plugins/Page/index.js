
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// MUI
import Box from '@mui/material/Box';

import { Slider } from '@material-ui/core';
import { Paper, FormControl, FormLabel } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';

// Plugins
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

// Local
import PageSidebarSettings from './sidebar';
import PageModalSettings from './modal';


// Plugin Props
export const PageDefaultProps = {
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
export default function Page(props = {...PageDefaultProps, ...props, }) {
    const { connectors: { connect, drag }, } = useNode();
    return (
        <Box ref={(ref) => connect(drag(ref))} sx={{
            width: 'auto',
            // minHeight: '90vh',
            boxShadow: 10,
            bgcolor: 'background.default',
        }}>
            <Element canvas id="header" is={Header} custom={{ canDelete: false }}>
            </Element>
            <Element canvas id="container" is={Container} custom={{ canDelete: false }}>
            </Element>
            <Element canvas id="footer" is={Footer} custom={{ canDelete: false }}>
            </Element>
        </Box>
    );
};

// Plugin Settings
Page.craft = {
    name: 'page',
    displayName: 'Page',
    description: 'Page component. The base component for any page.',
    hidden: true,     
    rules: {
        canDrag: false,
    },
    related: {
        sidebar: PageSidebarSettings,
        modal: PageModalSettings,
        canDelete: false,
    },
};
