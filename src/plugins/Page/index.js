
// React
import React from 'react';

// Local
import PagePlugin from './component';
import PageProps from './props';
import PageSettings from './settings';
import PageConfig from './config';


// Plugin Settings
PagePlugin.craft = {
    name: 'page',
    displayName: 'Page',
    description: 'Page component. The base component for any page.',
    hidden: true,
    props: PageProps,
    rules: {
        canDrag: () => false,
    },
    related: {
        sidebar: PageSettings,
        modal: PageConfig,
        canDelete: false,
    },
};

export default PagePlugin;