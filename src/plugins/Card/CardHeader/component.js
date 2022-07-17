
// React
import React from 'react';
import { Element, useNode, useEditor } from '@craftjs/core';

// MUI
import CardHeader from '@mui/material/CardHeader';

// Plugins
import { Toolbar, getNodeStyle } from '../../RenderNode';
import Box from '../../Box';


// Plugin Component
export default function CardHeaderPlugin({ children, ...props }) {
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
        <Box sx={{}}>
            <CardHeader {...props} />
        </Box>
    );
};