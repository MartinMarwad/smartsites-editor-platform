/* 
Source:
- https://mui.com/api/typography/
*/

// React
import React from 'react';
import PluginDefaultProps from '../PluginProps';

// Plugin Props
export const Props = {

    // Component Variables
    text: 'Edit me',

    // Set the text-align on the component.
    // TYPE: string
    // OPTIONS: inherit, center, justify, left, right
    align: 'inherit',

    // The component used for the root node. Either a string to use a HTML element or a component.
    // TYPE: string
    // OPTIONS: div, etc. ?
    component: 'div', 

    // If true, the text will have a bottom margin.
    // TYPE: bool
    // Default: false
    gutterBottom: false, 

    // If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
    // Note that text overflow can only happen with block or inline-block level elements (the element 
    // needs to have a width in order to overflow).
    // TYPE: bool
    // Default: false
    noWrap: false,

    // If true, the element will be a paragraph element.
    // TYPE: bool
    // Default: false
    paragraph: false,

    // Applies the theme typography styles.
    // TYPE: string
    // OPTIONS: body1, body2, button, caption, h1, h2, h3, h4, h5, h6, inherit, overline, subtitle1, subtitle2
    variant: 'body1',

    // Stylesheet
    sx: {
        // ...PluginDefaultProps,
        // pt: 0.5,
        // pb: 0.5,
        // pr: 0.5,
        // pl: 0.5,
        // mt: 0.5,
        // mb: 0.5,
        // mr: 0.5,
        // ml: 0.5,
    }
};

export default Props;