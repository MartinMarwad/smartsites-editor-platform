
// React
import React from 'react';

// Local
import Props from './props';
import Settings from './settings';
import CarouselPlugin from './component';


// Plugin Details
CarouselPlugin.craft = {
    name: "carousel",
    displayName: "Carousel",
    description: 'A carousel slider component.',
    props: Props,
    related: {
        sidebar: Settings,
    },
};

export default CarouselPlugin;