// Reference: https://mui.com/material-ui/api/button/

// React
import React from 'react';
import PluginDefaultProps from '../PluginProps';


// Plugin Props
export const ButtonProps = {

    text: 'Click me',
    link: '',
    // open_link_new_tab: false,
    

    // The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.
    // TYPE: string
    // OPTIONS: inherit, primary, secondary, success, error, info, warning
    color: 'primary',

    // The component used for the root node. Either a string to use a HTML element or a component.
    // TYPE: elementType
    // component: '',

    // If true, the component is disabled.
    // TYPE: bool
    disabled: false,

    // If true, no elevation is used.
    // TYPE: bool
    disableElevation: false,

    // If true, the keyboard focus ripple is disabled.
    // TYPE: bool
    disableFocusRipple: false,

    // If true, the ripple effect is disabled.
    // TYPE: bool
    disableRipple: false,

    // Element placed after the children.
    // TYPE: node
    // endIcon: '',

    // If true, the button will take up the full width of its container.
    // TYPE: bool
    fullWidth: false,

    // The size of the component. small is equivalent to the dense button styling.
    // TYPE: string
    // OPTIONS: small, medium, large
    size: 'small',

    // The variant to use.
    // TYPE: string
    // OPTIONS: contained, outlined, text
    variant: 'contained',


    // Stylesheet
    sx: {
        // ...PluginDefaultProps,
        // pt: 1,
        // pb: 1,
        // pr: 1,
        // pl: 1,
        mt: 1,
        mb: 1,
        mr: 1,
        ml: 1,
    }
};

export default ButtonProps;