
// React
import React from 'react';
import { Element, useNode, useEditor } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';

// MUI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// Local
import Props from './props';


// Plugin Component
export default function ButtonPlugin(props) {
    const { enabled } = useEditor((state, query) => ({enabled: state.options.enabled,}));
    const { connectors: { connect, drag }, isClicked, selected, actions: { setProp } } = useNode((node) => ({
        isClicked: node.events.selected,
        selected: node.events.selected,
    }));
    // const [editable, setEditable] = React.useState(false);

    return (
        <Button {...props}
            onClick={() => {
                // selected && setEditable(true);
                !enabled && window.open(props.link, "_self"); // open_link_new_tabm ? "_blank" : "_self");
            }}
        >
            {props.children}
        </Button>
    );
};