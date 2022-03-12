
// React
import React from 'react';
import { Layers } from '@craftjs/layers';

// MUI 
import Box from '@mui/material/Box';


// LayersPanel: A Panel to edit and view the layers.
export default function LayersPanel() {
    return (
        <Box sx={{
            // width: 300,
            // height: 300,
            // backgroundColor: 'primary.dark',
            // '&:hover': {
            //     backgroundColor: 'primary.main',
            //     opacity: [0.9, 0.8, 0.7],
            // },
        }}>
            <Layers/>
        </Box>
    );
}
