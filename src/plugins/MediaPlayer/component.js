
// React
import * as React from 'react';
import { Element, useNode } from '@craftjs/core';
import ReactPlayer from 'react-player'

// MUI
import Box from '@mui/material/Box';


// Component
export default function MediaPlayer({ sx, ...props }) {

    return (
        <Box sx={sx}>
            <ReactPlayer {...props}/>
        </Box>
    );
}
