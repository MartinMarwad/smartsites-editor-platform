
// React
import React, { useCallback } from 'react';
import { useNode, useEditor } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';
import debounce from 'lodash.debounce';

// MUI
import Typography from '@mui/material/Typography';

// Local
import { Toolbar, getNodeStyle } from '../RenderNode';
import Props from './props';


// Plugin Component
export default function TextBox(props) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { actions, query, enabled, } = useEditor((state, query) => ({
        enabled: state.options.enabled,
    }));
    const { connectors: { connect, drag }, actions: { setProp }, selected, hovered, name } = useNode((node) => ({
        selected: node.events.selected,
        hovered: node.events.hovered,
    }));

    const [editable, setEditable] = React.useState(false);

    React.useEffect(() => { if (selected) return; setEditable(false);}, [selected]);

    return (
        <Typography {...props}
            ref={(ref) => connect(drag(ref))}
            sx={{...props.sx, ...getNodeStyle(selected, hovered)}} 
            onClick={(event) => {
                setOpen(true); setAnchorEl(event.currentTarget); 
                selected && setEditable(true);
            }}
        >
            <ContentEditable 
                tagName="p"
                html={props.text} 
                disabled={!enabled}
                onChange={
                    useCallback(debounce((e, editor) => {setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')));}, 1000), [])
                }
                // onChange={(e) => setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')))}
            />

            {selected && <Toolbar open={open} anchorEl={anchorEl} /> }
        </Typography>
    );
};