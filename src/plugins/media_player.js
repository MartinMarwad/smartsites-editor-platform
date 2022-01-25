
// React
import React from 'react';
import ReactPlayer from 'react-player'
import { ImageUpload, ColorPickerField } from '@react-page/editor';

// Material 
import Box from '@mui/material/Box';


const MediaPlayerComponent = (props) => {
    return (
        <Box sx={{
            mx: "auto",
            my: "auto",
            width: (props?.data?.width + 'px') || '100%',
            hieght: (props?.data?.hieght + 'px') || '100%',
            p: props?.data?.padding || 0,
        }}>
            <ReactPlayer 
                url={props?.data?.url}
                controls={true}
                width='100%'
                hieght='100%'
            />
        </Box>
    );
};


const MediaPlayerForm = {

    // Component 
    Renderer: (props) => (
        <MediaPlayerComponent {...props} />
    ),

    // Component Controls
    id: 'smartsites-media-player',
    title: 'Media Player',
    description: "A Video or Audio player plugin.",
    version: 1,
    cellStyle: {
        padding: 0,
    },
    controls: [
        {
            title: 'Settings',
            controls: {
                type: 'autoform',
                columnCount: 2,
                schema: {
                    type: 'object',
                    required: [],
                    properties: {
                        url: {
                            title: 'URL',
                            type: 'string',
                            default: 'Enter a video or audio link...',
                            uniforms: {
                            },
                        },
                        // width: {
                        //     title: 'Width',
                        //     description: 'The width of the element.',
                        //     type: 'number',
                        //     default: '',
                        // },
                        // hieght: {
                        //     title: 'Hieght',
                        //     description: 'The hieght of the element.',
                        //     type: 'number',
                        //     default: '',
                        // },
                        // padding: {
                        //     title: 'Padding',
                        //     description: 'The padding around image.',
                        //     type: 'number',
                        //     default: '',
                        // },
                    },
                },
            },
        },

    ],
};

export default MediaPlayerForm;
