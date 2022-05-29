
// React
import React from 'react';
import { useNode, useEditor } from '@craftjs/core';
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

    const [editable, setEditable] = React.useState(false);

    return (
        <Button ref={(ref) => connect(drag(ref))} onClick={() => selected && setEditable(true)} {...props}>
            <ContentEditable
                html={props.text}
                disabled={!enabled}
                onChange={(e) => setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')), 500)}
                tagName="p"
                // style={{ fontSize: `${fontSize}px`, textAlign }}
            />
        </Button>
    );
};