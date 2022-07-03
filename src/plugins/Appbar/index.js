
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// Local
import AppbarPlugin from './component';
import Props from './props';
import Settings from './settings';
import Config from './config';


// Plugin Settings
AppbarPlugin.craft = {
    name: 'appbar',
    displayName: 'App Bar',
    description: 'App Bar component for header layout.',
    hidden: false,
    props: Props,
    related: {
        sidebar: Settings,
        modal: Config,
        canDelete: true,
    },
    rules: {
        canDrag: () => true,
        canDrop: () => true,
        canMoveIn: () => true,
        canMoveOut: () => true,
    },
};

export default AppbarPlugin;
