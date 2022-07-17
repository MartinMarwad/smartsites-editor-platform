
// React
import React from 'react';
import { Element, useNode, useEditor } from '@craftjs/core';

// MUI
import CardContent from '@mui/material/CardContent';

// Plugins
import { Toolbar, getNodeStyle } from '../../RenderNode';


// Plugin Component
export default function CardContentPlugin({ children, ...props }) {
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
        <CardContent {...props}
            ref={(ref) => connect(drag(ref))}
            sx={{...props.sx, ...getNodeStyle(selected, hovered)}} 
            onClick={(event) => {setOpen(true); setAnchorEl(event.currentTarget); }} 
        >
            {children}

            {selected && <Toolbar open={open} anchorEl={anchorEl} /> }
        </CardContent>
    );
};