
// React
import * as React from 'react';
import { Element, useNode } from '@craftjs/core';
import Carousel from 'react-material-ui-carousel';

// Plugins
import Box from '../Box';
import TextBox from '../TextBox';
import Button from '../Button';


// Component
export default function CarouselPlugin({ items, ...props }) {

    const item = {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using material ui.",
        color: "#C9A27E",
        href: 'https://github.com/Learus/react-material-ui-carousel'
    };

    return (
        <Box sx={{}}>
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
        </Box>
    );
}
