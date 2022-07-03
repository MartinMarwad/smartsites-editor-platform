
// React
import React from 'react';

// Local
import TextArea from './component';
import Props from './props';
import Settings from './settings';


// Plugin Config
TextArea.craft = {
    name: "text-area",
    displayName: "Text Area",
    description: 'An advanced text editor component.',
    hidden: false,
    props: Props,
    related: {
        text: 'Click here to edit.',
        sidebar: Settings,
    },
};

export default TextArea;
