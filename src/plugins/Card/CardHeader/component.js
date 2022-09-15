
// React
import React from 'react';
import { Element, useNode, useEditor } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';

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
            <CardHeader {...props}
                title={
                    <ContentEditable
                        tagName="p"
                        html={props.title}
                        disabled={!enabled}
                        onChange={(e) => setProp((props) => (props.title = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')))}
                    />
                }
                subheader={
                    <ContentEditable
                        tagName="p"
                        html={props.subheader}
                        disabled={!enabled}
                        onChange={(e) => setProp((props) => (props.subheader = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')))}
                    />
                }
            />
        </Box>
    );
};