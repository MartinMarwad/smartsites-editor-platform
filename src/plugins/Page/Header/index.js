
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Box from '@mui/material/Box';

// Local
import SidebarSettings from './sidebar';
import ModalSettings from './modal';


// Plugin Props
export const HeaderDefaultProps = {
    // background: '#ffffff',
    // padding: 3,

    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // fillSpace: 'no',
    // padding: [0, 0, 0, 0],
    // margin: [0, 0, 0, 0],
    // background: { r: 255, g: 255, b: 255, a: 1 },
    // color: { r: 0, g: 0, b: 0, a: 1 },
    // shadow: 0,
    // radius: 0,
};

// Plugin Component
export default function Header(props = {...HeaderDefaultProps, ...props, }) {
    const { connectors: { connect, drag }, } = useNode();
    return (
        <Box sx={{
            width: 'auto',
            minHeight: 100,
        }}>
            {props.children}
        </Box>
    );
};

// Plugin Settings
Header.craft = {
    name: 'header',
    displayName: 'Header',
    description: 'Header component. Layout for components such as an appbar across pages.',
    hidden: true,
    props: HeaderDefaultProps,
    related: {
        sidebar: SidebarSettings,
        modal: ModalSettings,
        canDelete: false,
    },
    rules: {
        canDrag: false,
    },
};
