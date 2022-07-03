
// React
import React from 'react';

// Local
import ImagePlugin from './component';
import Props from './props';
import settings from './settings';


// Plugin Config
ImagePlugin.craft = {
    name: 'image',
    displayName: 'Image',
    description: 'Image Component. Use for inserting images.',
    props: Props,
    related: {
        sidebar: settings,
        canDelete: true,
    },
};

export default ImagePlugin;