// Source: https://github.com/react-page/react-page/tree/master/examples/plugins
// Contains master list of cell plugin components.

// React-Page: Offical Plugins
import background, { ModeEnum } from '@react-page/plugins-background';
import '@react-page/plugins-background/lib/index.css';
// import divider from '@react-page/plugins-divider';
import html5video from '@react-page/plugins-html5-video';
import '@react-page/plugins-html5-video/lib/index.css';
import { imagePlugin } from '@react-page/plugins-image';
import '@react-page/plugins-image/lib/index.css';
import spacer from '@react-page/plugins-spacer';
import '@react-page/plugins-spacer/lib/index.css';
import video from '@react-page/plugins-video';
import '@react-page/plugins-video/lib/index.css';

// Project Plugins
import { defaultSlate, customizedSlate } from './slate';
import AppBar from './layouts/appbar';
import TwitterTimeline from './twitter_timeline.js';
import codeSnippet from './code_snippet.js';
import Divider from './divider';

// Custom Components: For experiment/development
import customContentPlugin from './custom/customContentPlugin.js';
import customContentPluginWithListField from './custom/customContentPluginWithListField.js';
import customLayoutPlugin from './custom/customLayoutPlugin.js';
import customLayoutPluginWithInitialState from './custom/customLayoutPluginWithInitialState.js';
import contactForm from './custom/contactForm.js';


// Image Uploading 
const fakeImageUploadService = (defaultUrl) => (file, reportProgress) => {
    return new Promise((resolve, reject) => {
        let counter = 0;
        const interval = setInterval(() => {
            counter++;
            reportProgress(counter * 10);
            if (counter > 9) {
                clearInterval(interval);
                alert('Image has not actually been uploaded to a server. Check documentation for information on how to provide your own upload function.');
                resolve({ url: URL.createObjectURL(file) });
            }
        }, 100);
    });
};


// Specify master list of enabled components
const cellPlugins = [

    // State component
    defaultSlate,
    customizedSlate, // This is a custom toolbar state, but is not used with default state.

    // ----------------
    // Basic Components
    // ----------------

    // Resizable, horizontal and vertical empty space component.
    spacer,

    // A horizontal divider.
    Divider,

    // An image component
    imagePlugin({ imageUpload: fakeImageUploadService('/images/react.png') }),

    // A video component.
    video,

    // A background component
    background({
        imageUpload: fakeImageUploadService('/images/sea-bg.jpg'),
        enabledModes:
            ModeEnum.COLOR_MODE_FLAG |
            ModeEnum.IMAGE_MODE_FLAG |
            ModeEnum.GRADIENT_MODE_FLAG,
    }),

    // Twitter timeline component
    TwitterTimeline,

    // Code snippet component
    codeSnippet,


    // -----------------
    // Visual Components
    // -----------------
    
    // An Appbar
    AppBar,


    // ------------------------------
    // Custom/Experimental Components
    // ------------------------------
    html5video,
    customContentPlugin,
    customContentPluginWithListField,
    contactForm,    
    customLayoutPlugin,
    customLayoutPluginWithInitialState,

];

export default cellPlugins;