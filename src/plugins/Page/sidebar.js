
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Divider from '@mui/material/Divider';

import { Paper, FormControl, FormLabel, Slider } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';

// Local
import AccordionGroup from '../AccordionGroup';
import AccordionSection from '../AccordionSection';
// import AccordionItem, { ToolbarRadio } from '../AccordionItem';

// Settings
export default function PageSidebarSettings() {
    
    return (
        <div>
            <AccordionSection title="ID"></AccordionSection>
                <Divider/>
                <AccordionSection title="Title"></AccordionSection>
            <AccordionGroup title="General">
                <AccordionSection title="Width"></AccordionSection>
                <Divider/>
                <AccordionSection title="Height"></AccordionSection>
            </AccordionGroup>
            <AccordionGroup title="Dimensions">
                <AccordionSection title="ID"></AccordionSection>
                <Divider/>
                <AccordionSection title="Title"></AccordionSection>
            </AccordionGroup>
            <AccordionGroup title="Typography">
                <AccordionSection title="Font family"></AccordionSection>
                <Divider/>
                <AccordionSection title="Font Size"></AccordionSection>
                <Divider/>
                <AccordionSection title="Font Size"></AccordionSection>
                <Divider/>
                <AccordionSection title="Font Size"></AccordionSection>
                <Divider/>
                <AccordionSection title="Font Size"></AccordionSection>
                <Divider/>
                <AccordionSection title="Font Size"></AccordionSection>
            </AccordionGroup>
            
        </div>
    );
};