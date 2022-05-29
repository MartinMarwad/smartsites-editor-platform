
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MuiButton from '@mui/material/Button';

// Local
import Button from './component';
import Props from './props';
import Settings from './settings';


// Plugin Config
Button.craft = {
    name: "button",
    displayName: "Button",
    description: 'A button component.',
    hidden: false,
    props: Props,
    related: {
        sidebar: Settings,
        canDelete: true,
    },
};

export default Button;
