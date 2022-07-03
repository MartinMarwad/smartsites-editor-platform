
import PluginDefaultProps from '../PluginProps';

// Plugin Props
export const BoxProps = {

    // The component used for the root node. Either a string to use a HTML element or a component.
    // TYPE: string
    // DEFAULT: div
    component: 'div',

    // Stylesheet
    sx: {
        // ...PluginDefaultProps,
        
        minHeight: 100,
        minWidth: 100,
        pt: 1,
        pb: 1,
        pr: 1,
        pl: 1,
        mt: 1,
        mb: 1,
        mr: 1,
        ml: 1,
    }
};

export default BoxProps;