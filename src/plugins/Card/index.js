
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// Local
import Container, { ContainerSettings, ContainerDefaultProps, } from '../Page/Container';
import { Text } from '../Text';
import Button from '../Button';
import { CardTop } from './CardTop';
import { CardBottom } from './CardBottom';
export { CardTop, CardBottom };

// Plugin Component
export const Card = ({ background, padding = 20, ...props }) => {
    return (
        <Container {...props} background={background} padding={padding}>
            <Element canvas id="text" is={CardTop} data-cy="card-top">
                <Text text="Only texts" fontSize={20} data-cy="card-top-text-1" />
                <Text
                    text="are allowed up here"
                    fontSize={15}
                    data-cy="card-top-text-2"
                />
            </Element>
            <Element canvas id="buttons" is={CardBottom} data-cy="card-bottom">
                <Button
                    size="small"
                    text="Only buttons down here"
                    data-cy="card-bottom-button"
                />
            </Element>
        </Container>
    );
};


// Plugin Details
Card.craft = {
    name: "card",
    displayName: "Card",
    description: 'A Card component.',
    hidden: false,
    props: ContainerDefaultProps,
    related: {
        settings: ContainerSettings,
    },
};
