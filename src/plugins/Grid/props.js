/* 
Source:
- https://mui.com/material-ui/api/grid/
*/

import PluginDefaultProps from '../PluginProps';


// Plugin Props
export const GridProps = {

    // TYPE: string
    justifyContent: 'flex-start',

    // TYPE: string
    alignItems: 'center',

    // The number of columns.
    // TYPE: Array<number>
    columns: 12, 

    // Defines the horizontal space between the type item components. It overrides the value of the spacing prop.
    // TYPE: Array<number|string>
    columnSpacing: 0,

    // If true, the component will have the flex container behavior. You should be wrapping items with a container.
    // TYPE: bool
    container: true,

    // Defines the flex-direction style property. It is applied for all screen sizes.
    // TYPE: string
    // OPTIONS: column-reverse, column, row-reverse, row, column, row-reverse, row
    direction: 'row',

    // If true, the component will have the flex item behavior. You should be wrapping items with a container.
    // TYPE: bool
    item: false,

    // Defines the vertical space between the type item components. It overrides the value of the spacing prop.
    // TYPE: <number>?
    rowSpacing: 0,

    // Defines the space between the type item components. It can only be used on a type container component.
    // TYPE: <number>
    spacing: 0,

    // Defines the flex-wrap style property. It's applied for all screen sizes.
    // TYPE: string
    // OPTIONS: nowrap, wrap-reverse, wrap
    wrap: 'nowrap', 

    // // If true, it sets min-width: 0 on the item. 
    // // TYPE: bool
    // zeroMinWidth: false,  

    
    // // // If a number, it sets the number of columns the grid item uses. It can't be greater than the total
    // // number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. 
    // // If false, the prop is ignored. If true, the grid item's width grows to use the space available
    // // in the grid container. The value is applied for all the screen sizes with the lowest priority.
    // xs: 'auto',

    // // If a number, it sets the number of columns the grid item uses. It can't be greater than the total 
    // // number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. 
    // // If false, the prop is ignored. If true, the grid item's width grows to use the space available in 
    // // the grid container. The value is applied for the sm breakpoint and wider screens if not overridden.
    // // TYPE: <number>?
    // sm: 'auto', 

    // // If a number, it sets the number of columns the grid item uses. It can't be greater than the total 
    // // number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. 
    // // If false, the prop is ignored. If true, the grid item's width grows to use the space available 
    // // in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.
    // // TYPE: <number>, <bool>
    // md: 'auto',

    // // If a number, it sets the number of columns the grid item uses. It can't be greater than the total 
    // // number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. 
    // // If false, the prop is ignored. If true, the grid item's width grows to use the space available 
    // // in the grid container. The value is applied for the lg breakpoint and wider screens if not overridden.
    // // TYPE: <number>, <bool>
    // lg: 'auto',

    // // If a number, it sets the number of columns the grid item uses. It can't be greater than the total 
    // // number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. 
    // // If false, the prop is ignored. If true, the grid item's width grows to use the space available 
    // // in the grid container. The value is applied for the xl breakpoint and wider screens if not overridden.
    // xl: 'auto',


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

export default GridProps;
