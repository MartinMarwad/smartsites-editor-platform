
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Box from '@mui/material/Box';

// Local
import ModalSettings from './modal';
import ContainerSettings from './sidebar';
export { ContainerSettings };


// Plugin Props
export const ContainerDefaultProps = {
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
export default function Container(props = {...ContainerDefaultProps, ...props, }) {
    const { connectors: { connect, drag }, } = useNode();
    return (
        <Box
            {...props}
            ref={(ref) => connect(drag(ref))}
            sx={{
                justifyContent: props.justifyContent,
                flexDirection: props.flexDirection,
                alignItems: props.alignItems,
                background: `rgba(${Object.values(props.background)})`,
                color: `rgba(${Object.values(props.color)})`,
                padding: `${props.padding[0]}px ${props.padding[1]}px ${props.padding[2]}px ${props.padding[3]}px`,
                margin: `${props.margin[0]}px ${props.margin[1]}px ${props.margin[2]}px ${props.margin[3]}px`,
                boxShadow:
                    props.shadow === 0
                        ? 'none'
                        : `0px 3px 100px ${props.shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${props.radius}px`,
                flex: props.fillSpace === 'yes' ? 1 : 'unset',

                minHeight: 500,
            }}
        >
            {props.children}
        </Box>
        // <Paper
        //     {...props}
        //     ref={(ref) => connect(drag(ref))}
        //     style={{ margin: '5px 0', background, padding: `${padding}px` }}
        // >
        //     {children}
        // </Paper>
    );
};

// Plugin Settings
Container.craft = {
    name: "container",
    displayName: "Container",
    description: 'Container',
    hidden: true,
    props: ContainerDefaultProps,
    rules: {
        canDrag: false,
    },
    related: {
        sidebar: ContainerSettings,
        modal: ModalSettings,
        canDelete: true,
    },
};
