
// React
import * as React from 'react';
import { Element, useNode } from '@craftjs/core';
import Carousel from 'react-material-ui-carousel';

// Plugins
import Box from '../Box';
import TextBox from '../TextBox';
import Button from '../Button';

import {
    Paper,
    // Button,
    Typography,
} from '@mui/material'

function Project({item, thing}: ProjectProps) {
    return (
        <Element canvas id={thing.toString()} is={Box} >
            <TextBox text={item.name} variant='h5' component='span'/>
            <TextBox text={item.description} component='span'/>
            <Button className="CheckButton" component='a' href={item.href} target='_blank' rel='noreferrer'>
                <TextBox text="Check it out!" variant='h5' />
            </Button>
        </Element>
    )
}

const items: Item[] = [
    {
        name: "Lear Music Reader",
        description: "A PDF Reader specially designed for musicians.",
        color: "#64ACC8",
        href: 'https://github.com/Learus/Lear-Music-Reader'
    },
    {
        name: "Hash Code 2019",
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        color: "#7D85B1",
        href: 'https://github.com/Learus/HashCode2019'
    },
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78",
        href: 'https://play.google.com/store/apps/details?id=com.Brewery.Terrio'
    },
    {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using material ui.",
        color: "#C9A27E",
        href: 'https://github.com/Learus/react-material-ui-carousel'
    }
]

const item = {
    name: "React Carousel",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
    href: 'https://github.com/Learus/react-material-ui-carousel'
};


// Component
export default function CarouselPlugin({ items, ...props }) {
    return (
        <Carousel {...props}>
            {Array(items).fill(1).map((el, index) =>
                <Element canvas id={index.toString()} is={Box} key={index}>
                    <TextBox text={item.name} variant='h5' component='span' />
                    <TextBox text={item.description} component='span' />
                    <Button className="CheckButton" component='a' href={item.href} target='_blank' rel='noreferrer'>
                        <TextBox text="Check it out!" variant='h5' />
                    </Button>
                </Element>
            )}
        </Carousel>
    );
}
