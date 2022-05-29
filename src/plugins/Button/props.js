
// React
import React from 'react';
import PluginProps from '../PluginProps';

// Plugin Props
export const ButtonProps = {
    text: 'Click me',

    // Component
    variant: 'contained',
    size: 'small',
    color: 'primary',
    disabled: false,
    disableElevation: false,

    // Stylesheet
    sx: {
        ...PluginProps,
        p: 0.5,
        m: 0.5,
    }
};

export default ButtonProps;