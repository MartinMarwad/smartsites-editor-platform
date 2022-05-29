
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
        canDrag: true,
        canMoveIn: (incomingNodes) => incomingNodes.every((incomingNode) => true),
    },
};

export default GridPlugin;