
// React
import React from 'react';
import { Element, useNode, useEditor } from '@craftjs/core';
import { ROOT_NODE } from '@craftjs/utils';
import ContentEditable from 'react-contenteditable';
import { Link as RouterLink, LinkProps as RouterLinkProps, MemoryRouter, } from 'react-router-dom';
  
// MUI
import Button from '@mui/material/Button';

// Plugins
import { Toolbar, getNodeStyle } from '../RenderNode';
import Box from '../Box';

// Local
import Props from './props';


const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} {...props} role={undefined} />
));


// Plugin Component
export default function ButtonPlugin({ disableNodeStyle=false, ...props }) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { actions, query, enabled, } = useEditor((state, query) => ({
        enabled: state.options.enabled,
    }));
    const { connectors: { connect, drag }, actions: { setProp }, selected, hovered, name } = useNode((node) => ({
        selected: node.events.selected,
        hovered: node.events.hovered,
    }));

    // Allow buttons to disable the node styling
    let styles = {};
    if (!disableNodeStyle) {
        styles = getNodeStyle(selected, hovered);
    }

    return (
        <Button {...props} 
            ref={(ref) => connect(drag(ref))}
            sx={{...props.sx, ...styles}} 
            // component={RouterLink} to={props.link} // TODO: Change buttons to use React Router links instead of browser page reload
            onClick={(event) => {
                setOpen(true); setAnchorEl(event.currentTarget);

                // selected && setEditable(true);
                !enabled && window.open(props.link, "_self"); // open_link_new_tabm ? "_blank" : "_self");
            }}
        >
            {props.children}

            {selected && <Toolbar open={open} anchorEl={anchorEl} /> }
        </Button>
    );
};