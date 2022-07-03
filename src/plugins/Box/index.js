
// React
import React from 'react';

// Local
import BoxPlugin from './component';
import Props from './props';
import settings from './settings';


// Plugin Config
BoxPlugin.craft = {
    name: 'box',
    displayName: 'Box',
    description: 'Box Component. Layout for components.',
    hidden: false,
    props: Props,
    related: {
        sidebar: settings,
        canDelete: true,
    },
    // rules: {
    //     canDrag: () => true,
    //     canDrop: () => true,
    //     canMoveIn: () => true,
    //     canMoveOut: () => true,
    // },
};

export default BoxPlugin;