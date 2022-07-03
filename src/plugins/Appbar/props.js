/* 
Source:
- https://mui.com/material-ui/api/app-bar/
- https://mui.com/material-ui/api/paper/
*/

import PluginDefaultProps from '../PluginProps';


// Plugin Props
export const AppbarProps = {

    // The color of the component. It supports both default and custom theme colors, which can be 
    // added as shown in the palette customization guide.
    // TYPE: string
    // OPTIONS: default, inherit, primary, secondary, transparent
    color: 'primary',

    // Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.
    // TYPE: integer
    elevation: 1,

    // If true, the `color` prop is applied in dark mode.
    // TYPE: bool
    enableColorOnDark: false, 

    // The positioning type. The behavior of the different options is described in the MDN web docs. Note: sticky is not universally supported and will fall back to static when unavailable.
    // TYPE: string
    // OPTIONS: absolute, fixed, relative, static, sticky
    position: 'static', 

    // If true, rounded corners are disabled.
    // TYPE: bool
    square: false,

    // The variant to use.
    // TYPE: string
    // OPTIONS: regular, dense
    variant: 'regular',

    // Stylesheet
    sx: {
        // ...PluginDefaultProps,
        // minHeight: 100,
    }
};

export default AppbarProps;