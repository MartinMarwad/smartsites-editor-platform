
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// Plugins
import Grid from '../Grid';
import Text from '../TextBox';
import Button from '../Button';

// Local
import Props from './props';
import Settings from './settings';
import CardPlugin from './component';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardMedia from './CardMedia';
import CardFooter from './CardFooter/CardFooter';
export { CardPlugin, CardHeader, CardContent, CardMedia, CardFooter };


// Plugin Details
CardPlugin.craft = {
    name: "card",
    displayName: "Card",
    description: 'A Card component.',
    props: Props,
    related: {
        sidebar: Settings,
    },
};

export default CardPlugin;