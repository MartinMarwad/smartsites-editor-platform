

// React
import React from 'react';
import { Element } from '@craftjs/core';

// Plugin Components
import Page from './Page';
import Box from './Box';
import Grid from './Grid';
import Appbar from './Appbar';
import Button from './Button';
import TextBox from './TextBox';
import TextArea from './TextArea';
import Image from './Image';
import Card, { CardPlugin, CardHeader, CardContent, CardMedia, CardFooter } from './Card';
import CarouselPlugin from './Carousel';
import MediaPlayer from './MediaPlayer';

import MUIAppBar from '@mui/material/AppBar';
import MUIToolbar from '@mui/material/Toolbar';
import MUITypography from '@mui/material/Typography';
import MUIButton from '@mui/material/Button';


// Complete list of all plugins. This is used for the Craft.JS resolver. 
const Plugins = {

    // Page
    Page,

    // Grid
    Grid,

    // Box
    Box,

    // Appbar
    Appbar,
    
    // Text: Simple text edit component.
    TextBox,

    // Text Area: Advanced text editor
    TextArea,

    // Button: Simple button component.
    Button,

    // Image: Simple image component.
    Image,

    // Card Components
    Card,
    CardPlugin, 
    CardHeader, 
    CardContent, 
    CardMedia, 
    CardFooter,

    // Carousel Component
    CarouselPlugin,

    // Media Player Plugin
    MediaPlayer,
    

}; export default Plugins;

// Manifest for Plugins and related templates. This is used for the Plugins Panel, to create a sortable list.
const PluginComponents = [

    // Grid
    {
        name: Grid.craft.name,
        displayName: Grid.craft.displayName,
        description: Grid.craft.description,
        component: <Element canvas is={Grid} />,
        templates: [],
    },

    // Box
    {
        name: Box.craft.name,
        displayName: Box.craft.displayName,
        description: Box.craft.description,
        component: <Element canvas is={Box} />,
        templates: [],
    },

    // Appbar
    {
        name: Appbar.craft.name,
        displayName: Appbar.craft.displayName,
        description: Appbar.craft.description,
        component: <Element canvas is={Appbar} />,
        templates: [
            {
                displayName: "Blank",
                component: <Element canvas is={Appbar} />,
            },
            {
                displayName: "Basic App bar",
                component: 
                <Element canvas id="appbar" is={Appbar} sx={{justifyContent: "space-between", }}>
                    <Element canvas id="left" is={Grid} sx={{}}>
                        <Image />
                    </Element>
                    <Element canvas id="right" is={Grid} sx={{}}>
                        <Button><TextBox text="First Button"/></Button>
                        <Button><TextBox text="Second Button"/></Button>
                        <Button><TextBox text="Third Button"/></Button>
                    </Element>
                </Element>,
            }
        ], 
    },

    // TextBox: Simple text edit component.
    {
        name: TextBox.craft.name,
        displayName: TextBox.craft.displayName,
        description: TextBox.craft.description,
        component: <Element canvas is={TextBox} />,
        templates: [],
    },

    // TextArea: Advanced text editor
    {
        name: TextArea.craft.name,
        displayName: TextArea.craft.displayName,
        description: TextArea.craft.description,
        component: <Element canvas is={TextArea} />,
        templates: [],
    },

    // Button: Simple button component.
    {
        name: Button.craft.name,
        displayName: Button.craft.displayName,
        description: Button.craft.description,
        component: 
            <Element canvas is={Button}>
                <TextBox disableNodeStyle/>
            </Element>,
        templates: [
            {
                displayName: "Blank Button",
                component: <Element canvas is={Button}/>
            },
            {
                displayName: "Text Button",
                component: <Element canvas is={Button} disableNodeStyle><TextBox disableNodeStyle/></Element>
            },
            {
                displayName: "Image Button",
                component: <Element canvas is={Button}><Image sx={{width: 150, height: 100,}}/></Element>
            },
        ],
    },

    // Image
    {
        name: Image.craft.name,
        displayName: Image.craft.displayName,
        description: Image.craft.description,
        component: <Element canvas is={Image} />,
        templates: [],
    },

    // Card Component
    {
        name: Card.craft.name,
        displayName: Card.craft.displayName,
        description: Card.craft.description,
        component: <Element canvas is={Card} />,
        templates: [
            // {
            //     displayName: "Blank Card",
            //     component: <Element canvas is={Card} />,
            // },
        ],
    },
    
    // Carousel Component
    {
        name: CarouselPlugin.craft.name,
        displayName: CarouselPlugin.craft.displayName,
        description: CarouselPlugin.craft.description,
        component: <Element canvas is={CarouselPlugin} />,
        templates: [],
    },

    // Media Player Plugin
    {
        name: MediaPlayer.craft.name,
        displayName: MediaPlayer.craft.displayName,
        description: MediaPlayer.craft.description,
        component: <Element canvas is={MediaPlayer} />,
        templates: [],
    },
    

]; export { PluginComponents };
