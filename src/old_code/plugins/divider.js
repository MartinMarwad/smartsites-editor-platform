
// React
import React from 'react';
import { ColorPickerField } from '@react-page/editor';

// Material 
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';


const DividerComponent = (props) => {
    return (
        <List sx={{
            // width: '100%',
            px: props?.data?.style?.padding || 2, 
        }}>
            <Divider 
                sx={{ 
                    borderBottomWidth: props?.data?.style?.width || 3, 
                    borderRightWidth: props?.data?.style?.width || 3,
                    bgcolor: props?.data?.style?.backgroundColor || '#9e9e9e', 
                }}
                textAlign={props?.data?.style?.text_align}
                orientation={props?.data?.style?.orientation}
                flexItem
            >
                {props?.data?.style?.text}
                {/* <Chip label={props?.data?.style?.text} /> */}
            </Divider>
        </List>
    );
};


const DividerForm = {

    // Component 
    Renderer: (props) => (
        <DividerComponent {...props} />
    ),

    // Component Controls
    id: 'smartsites-divider',
    title: 'Divider',
    description: "A vertical and horizontal divider.",
    version: 1,
    cellStyle: {
        padding: 0,
    },
    controls: [
        {
            title: 'Styling',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    required: [],
                    properties: {
                        style: {
                            type: 'object',
                            required: [],
                            properties: {
                                orientation: {
                                    title: 'Orientation',
                                    description: 'Change the orientation of the divider.',
                                    type: 'string',
                                    default: 'horizontal',
                                    uniforms: {
                                        allowedValues: ['vertical', 'horizontal', ],
                                        description: 'Change the orientation of the divider.',
                                    },
                                },
                                text: {
                                    title: 'Text',
                                    description: 'Optional text in the divider.',
                                    type: 'string',
                                    default: '',
                                },
                                text_align: {
                                    title: 'Text Alignment',
                                    description: 'Change the text alignment of the divider.',
                                    type: 'string',
                                    default: 'center',
                                    uniforms: {
                                        allowedValues: ['left', 'center', 'right', ],
                                    },
                                },
                                width: {
                                    title: 'Thickness',
                                    description: 'The thickness of the divider.',
                                    type: 'number',
                                    default: 3,
                                },
                                padding: {
                                    title: 'Padding',
                                    description: 'The thickness of the divider.',
                                    type: 'number',
                                    default: 2,
                                },
                                backgroundColor: {
                                    title: 'Background Color',
                                    type: 'string',
                                    default: '#9e9e9e',
                                    uniforms: {
                                        component: ColorPickerField,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },

    ],
};

export default DividerForm;
