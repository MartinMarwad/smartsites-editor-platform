
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// Local
import AccordionGroup from '../AccordionGroup';
import AccordionSection from '../AccordionSection';
import AccordionItem, { InputField } from '../AccordionItem';
import PluginSettings, { getRealValue } from '../PluginSettings';


// Settings
export default function GridSettings() {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>
            <AccordionGroup title="General">

                {/* showHeader */}
                <AccordionSection title="Show Header" secondaryChip={String(props.showheader)} divider description="Show or hide the Header content.">
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Show Header"
                            value={props.showheader}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.showheader = (value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* showMedia */}
                <AccordionSection title="Show Media" secondaryChip={String(props.showmedia)} divider description="Show or hide the Media content.">
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Show Media"
                            value={props.showmedia}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.showmedia = (value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* showContent */}
                <AccordionSection title="Show Content" secondaryChip={String(props.showcontent)} divider description="Show or hide the main content.">
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Show Content"
                            value={props.showcontent}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.showcontent = (value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
            </AccordionGroup>
        </PluginSettings>
    );
};
