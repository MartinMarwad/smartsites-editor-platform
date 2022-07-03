
// React
import React, { useCallback } from 'react';
import { useNode, useEditor } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';
import debounce from 'lodash.debounce';

// MUI
import Typography from '@mui/material/Typography';

// Local
import Props from './props';


// Plugin Component
export default function TextBox(props) {
    const { enabled } = useEditor((state, query) => ({enabled: state.options.enabled,}));
    const {connectors: { connect, drag }, selected, actions: { setProp },} = useNode((state) => ({
        selected: state.events.selected,
        dragged: state.events.dragged,
    }));

    const [editable, setEditable] = React.useState(false);

    React.useEffect(() => { if (selected) return; setEditable(false);}, [selected]);

    return (
        <Typography onClick={() => selected && setEditable(true)} {...props}>
            <ContentEditable 
                tagName="p"
                html={props.text} 
                disabled={!enabled}
                onChange={
                    useCallback(debounce((e, editor) => {setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')));}, 1000), [])
                }
                // onChange={(e) => setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')))}
            />
        </Typography>
    );
};