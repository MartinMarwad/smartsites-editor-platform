
// React
import React from 'react';

// Local
import GridPlugin from './component';
import Props from './props';
import settings from './settings';
import configuration from './config';


// Plugin Config
GridPlugin.craft = {
    name: 'grid',
    displayName: 'Grid',
    description: 'Grid Component. Layout for components.',
    hidden: false,
    props: Props,
    related: {
        sidebar: settings,
        modal: configuration,
        canDelete: true,
    },
    rules: {
        canDrag: () => true,
        canDrop: () => true,
        canMoveIn: () => true,
        canMoveOut: () => true,
    },
};

export default GridPlugin;