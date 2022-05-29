
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Divider from '@mui/material/Divider';

import { Paper, FormControl, FormLabel, Slider } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';

// Local
import AccordionGroup from '../../AccordionGroup';
import AccordionSection from '../../AccordionSection';
import AccordionItem, { ToolbarRadio } from '../../AccordionItem';

// Settings
export default function ContainerSettings() {
    const { 
        flexDirection, 
        alignItems, 
        justifyContent, 
        fillSpace, 
        padding, 
        margin, 
        background, 
        color, 
        shadow, 
        radius, 
        actions: { setProp }, } = useNode((node) => ({
            // background: node.data.props.background,
            // padding: node.data.props.padding,
            flexDirection: node.data.props.flexDirection,
            alignItems: node.data.props.alignItems,
            justifyContent: node.data.props.justifyContent,
            fillSpace: node.data.props.fillSpace,
            padding: node.data.props.padding,
            margin: node.data.props.margin,
            background: node.data.props.background,
            color: node.data.props.color,
            shadow: node.data.props.shadow,
            radius: node.data.props.radius,
    }));

    return (
        <div>
            <AccordionGroup title="General">

                {/* Colors */}
                <AccordionSection title="Colors" secondary="">
                    <AccordionItem
                        full={true}
                        propKey="background"
                        type="bg"
                        label="Background"
                    />
                </AccordionSection>
                <Divider/>

                {/* Margin */}
                <AccordionSection title="Margin" 
                    secondary={`${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${margin[3] || 0}px`}
                >
                    <AccordionItem propKey="margin" index={0} type="slider" label="Top" />
                    <AccordionItem propKey="margin" index={1} type="slider" label="Right" />
                    <AccordionItem propKey="margin" index={2} type="slider" label="Bottom" />
                    <AccordionItem propKey="margin" index={3} type="slider" label="Left" />
                </AccordionSection>
                <Divider/>

                {/* Padding */}
                <AccordionSection title="Padding" 
                    secondary={`${padding[0] || 0}px ${padding[1] || 0}px ${padding[2] || 0}px ${padding[3] || 0}px`}
                >
                    <AccordionItem propKey="padding" index={0} type="slider" label="Top" />
                    <AccordionItem propKey="padding" index={1} type="slider" label="Right" />
                    <AccordionItem propKey="padding" index={2} type="slider" label="Bottom" />
                    <AccordionItem propKey="padding" index={3} type="slider" label="Left" />
                </AccordionSection>
                <Divider/>

                {/* Decoration */}
                <AccordionSection title="Decoration">
                    <AccordionItem
                        full={true}
                        propKey="radius"
                        type="slider"
                        label="Radius"
                    />
                    <AccordionItem
                        full={true}
                        propKey="shadow"
                        type="slider"
                        label="Shadow"
                    />
                </AccordionSection>
                <Divider/>

                {/* Alignment */}
                <AccordionSection title="Alignment">
                    <AccordionItem
                        propKey="flexDirection"
                        type="radio"
                        label="Flex Direction"
                    >
                        <ToolbarRadio value="row" label="Row" />
                        <ToolbarRadio value="column" label="Column" />
                    </AccordionItem>
                    <AccordionItem propKey="fillSpace" type="radio" label="Fill space">
                        <ToolbarRadio value="yes" label="Yes" />
                        <ToolbarRadio value="no" label="No" />
                    </AccordionItem>
                    <AccordionItem propKey="alignItems" type="radio" label="Align Items">
                        <ToolbarRadio value="flex-start" label="Flex start" />
                        <ToolbarRadio value="center" label="Center" />
                        <ToolbarRadio value="flex-end" label="Flex end" />
                    </AccordionItem>
                    <AccordionItem propKey="justifyContent" type="radio" label="Justify Content">
                        <ToolbarRadio value="flex-start" label="Flex start" />
                        <ToolbarRadio value="center" label="Center" />
                        <ToolbarRadio value="flex-end" label="Flex end" />
                    </AccordionItem>
                </AccordionSection>

            </AccordionGroup>
        </div>
    );
};