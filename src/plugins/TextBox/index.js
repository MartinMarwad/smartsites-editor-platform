
// React
import React from 'react';

// Local
import TextBox from './component';
import Props from './props';
import Settings from './settings';


// Plugin Config
TextBox.craft = {
    name: "text-box",
    displayName: "Text Box",
    description: 'A simple text box component.',
    hidden: false,
    props: Props,
    related: {
        sidebar: Settings,
        canDelete: true,
    },
};

export default TextBox;
