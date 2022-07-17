
// React
import * as React from 'react';
import { Element, useNode } from '@craftjs/core';
import ReactPlayer from 'react-player'

// Plugins
import { Toolbar, getNodeStyle } from '../RenderNode';
import Box from '../Box';


// Component
export default function MediaPlayer({ sx, ...props }) {
    return (
        <Box sx={sx}>
            <ReactPlayer {...props}/>
        </Box>
    );
}
