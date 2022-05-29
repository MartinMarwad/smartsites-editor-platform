
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Box from '@mui/material/Box';

import { Slider } from '@material-ui/core';
import { Paper, FormControl, FormLabel } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';

// Local
// import PluginBase from './Plugin';

import FooterSettings from './FooterSettings';


// Plugin Props
export const FooterDefaultProps = {
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
export default function Footer(props = {...FooterDefaultProps, ...props, }) {
    const { connectors: { connect, drag }, } = useNode();
    return (
        <Box ref={(ref) => connect(drag(ref))} sx={{
            width: 'auto',
            minHeight: 200,
        }}>
            {props.children}
        </Box>
    );
};

// Plugin Settings
Footer.craft = {
    name: "footer",
    displayName: "Footer",
    description: 'Footer',
    hidden: true,
    props: FooterDefaultProps,
    related: {
        sidebar: FooterSettings,
        canDelete: false,
    },
    rules: {
        canDrag: false,
    },
};
