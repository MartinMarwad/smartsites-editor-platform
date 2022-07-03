
// React
import React, { useCallback } from 'react';
import { useNode, useEditor } from '@craftjs/core';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from "@ckeditor/ckeditor5-build-inline";
import debounce from 'lodash.debounce';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Local
import Props from './props';


// Plugin Component
export default function TextArea(props) {
    const { actions, enabled } = useEditor((state, query) => ({
        enabled: state.options.enabled,
    }));
    const {actions: { setProp, setCustom }, connectors: { connect, drag }, selected, text, } = useNode((state) => ({
        selected: state.events.selected,
        dragged: state.events.dragged,
    }));

    return (
        <Box {...props} borderWidth={0} >
            <Box sx={{ mt: (selected && enabled) ? 5 : 0, borderWidth: 0,}}>
                <CKEditor
                    editor={Editor}
                    data={props.text}
                    disabled={!enabled}
                    onChange={
                        useCallback(debounce((event, editor) => {setProp((props) => (props.text = editor.getData()));}, 2000), [])
                    }
                />
            </Box>
        </Box>
    );
};