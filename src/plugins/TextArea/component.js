
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
import { Toolbar, getNodeStyle } from '../RenderNode';
import Props from './props';


// Plugin Component
export default function TextArea(props) {
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
        <Box {...props} borderWidth={0}
            ref={(ref) => connect(drag(ref))}
            sx={{...props.sx, ...getNodeStyle(selected, hovered)}} 
            onClick={(event) => {setOpen(true); setAnchorEl(event.currentTarget); }}  
        >
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

            {selected && <Toolbar open={open} anchorEl={anchorEl} /> }
        </Box>
    );
};