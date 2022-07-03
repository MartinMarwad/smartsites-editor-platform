/* 
Source:
- https://github.com/CookPete/react-player
*/


// Plugin Props
export const Props = {

    // The url of a video or song to play. Can be an array or MediaStream object
    url: "https://www.youtube.com/watch?v=BmrUJhY9teE",

    // Set to true or false to pause or play the media	
    playing: false,

    // Set to true or false to loop the media
    loop: false,

    // Set to true or false to display native player controls. For Vimeo videos, hiding controls must be enabled by the video owner.
    controls: true,

    // Set to true to show just the video thumbnail, which loads the full player on click. Pass in an image URL to override the preview image
    light: false,

    // Set the volume of the player, between 0 and 1. null uses default volume on all players #357
    volume: null,

    // Mutes the player. Only works if volume is set.
    muted: false,

    // Set the playback rate of the player. Only supported by YouTube, Wistia, and file paths
    playbackRate: 1,

    // Set the width of the player	
    width: "100%",

    // Set the height of the player	
    height: "100%",

    // The time between onProgress callbacks, in milliseconds	
    progressInterval: 1000,

    // Applies the playsinline attribute where supported	
    playsinline: false,

    // Set to true or false to enable or disable picture-in-picture mode. Only available when playing file URLs in certain browsers.
    pip: false,

    // If you are using pip you may want to use stopOnUnmount={false} to continue playing in picture-in-picture mode even after ReactPlayer unmounts
    stopOnUnmount: true,

    // Element or component to use as a fallback if you are using lazy loading.
    fallback: null,

    // Element or component to use as the container element	
    wrapper: "div",

    // Set the tab index to be used on light mode
    previewTabIndex: 0,
    

    // Stylesheet
    sx: { 
        // width: "640px",
        // height: "360px",
    }
};

export default Props;
