/* 
Source:
- https://github.com/Learus/react-material-ui-carousel
*/


// Plugin Props
export const Props = {

    // Total number of slide items in the carousel
    items: 4,
   
    // Defines the carousel's height in px. If this is not set, the carousel's height will be the height 
    // of its children. If it is not set, the carousel's height will be the same as the current active child.
    // TYPE: number | string
    height: undefined,

    // Defines which child (assuming there are more than 1 children) will be displayed. Next and Previous 
    // Buttons as well as Indicators will work normally after the first render. When this prop is updated the 
    // carousel will display the chosen child. Use this prop to programmatically set the active child. If
    // (index > children.length) then if (strictIndexing) index = last element. index
    // TYPE: number
    index: 0,

    // Defines whether index can be bigger than children length
    // TYPE: boolean
    strictIndexing: true,

    // Defines if the component will auto scroll between children
    // TYPE: boolean
    autoPlay: true,

    // Defines if auto scrolling will continue while mousing over carousel
    // TYPE: boolean
    stopAutoPlayOnHover: true,

    // Defines the interval in ms between active child changes (autoPlay)
    // TYPE: number
    interval: 4000,

    // Defines the animation style of the Carousel
    // TYPE: "fade" | "slide"	
    animation: "fade",

    // Defines the duration of the animations.
    // TYPE: number
    duration: 500,

    // Defines if swiping left and right (in touch devices) triggers next and prev behaviour
    // TYPE: boolean
    swipe: true,

    // Defines the existence of bullet indicators
    // TYPE: boolean
    indicators: true,
    
    // Defines if the next/previous buttons will always be visible or not
    // TYPE: boolean
    navButtonsAlwaysVisible: true,

    // Defines if the next/previous buttons will always be invisible or not
    // TYPE: boolean
    navButtonsAlwaysInvisible: false,

    // Defines if the next button will be visible on the last slide, and the previous button on the first slide. 
    // Auto-play also stops on the last slide. Indicators continue to work normally.
    // TYPE: boolean
    cycleNavigation: true,

    // Defines if the the next/previous button wrappers will cover the full height of the Item element 
    // and show buttons on full height hover.
    // TYPE: boolean
    fullHeightHover: true,


    // Stylesheet
    sx: {
        width: "auto",
        height: 400,
    }
};

export default Props;
