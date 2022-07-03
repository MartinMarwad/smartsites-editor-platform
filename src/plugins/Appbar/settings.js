
// React
import React from 'react';
import { useNode } from '@craftjs/core';
import { SketchPicker } from 'react-color'

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

                {/* color */}
                <AccordionSection title="Color Theme" secondaryChip={props.color} divider
                    description="The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Color Theme"
                            value={props.color}
                            options={['inherit', 'default', 'primary', 'secondary', 'transparent', ]}
                            onChange={(event, value) => { setProp((props) => (props.color = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* elevation */}
                <AccordionSection title="Elevation" secondaryChip={props.elevation} divider
                    description="Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Elevation"
                            value={props.elevation}
                            options={['']}
                            onChange={(event, value) => { setProp((props) => (props.elevation = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* enableColorOnDark */}
                <AccordionSection title="Enable Color On Dark" secondaryChip={String(props.enableColorOnDark)} divider
                    description="If true, the `color` prop is applied in dark mode."
                >
                    <AccordionItem>
                        <InputField hideTextField rowRadioGroup hideUndefinedValue
                            label="Enable Color On Dark"
                            value={props.enableColorOnDark}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.enableColorOnDark = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* position */}
                <AccordionSection title="Position" secondaryChip={props.position} divider
                    description="The positioning type. The behavior of the different options is described in the MDN web docs. Note: sticky is not universally supported and will fall back to static when unavailable."
                >
                    <AccordionItem>
                        <InputField hideTextField
                            label="Position"
                            value={props.position}
                            options={['absolute', 'fixed', 'relative', 'static', 'sticky']}
                            onChange={(event, value) => { setProp((props) => (props.position = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* square */}
                <AccordionSection title="Square" secondaryChip={String(props.square)} divider
                    description="If true, rounded corners are disabled."
                >
                    <AccordionItem>
                        <InputField hideTextField rowRadioGroup hideUndefinedValue
                            label="Square"
                            value={props.square}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.square = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* variant */}
                <AccordionSection title="Variant" secondaryChip={String(props.variant)} divider
                    description="The variant to use."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Variant"
                            value={props.variant}
                            options={['regular', 'dense']}
                            onChange={(event, value) => { setProp((props) => (props.variant = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

            </AccordionGroup>
        </PluginSettings>
    );
};
