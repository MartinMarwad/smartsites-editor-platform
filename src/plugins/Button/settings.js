
// React
import React from 'react';
import { useNode } from '@craftjs/core';
import debounce from 'lodash.debounce';

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
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddLinkIcon from '@mui/icons-material/AddLink';

// Local
import AccordionGroup from '../AccordionGroup';
import AccordionSection from '../AccordionSection';
import AccordionItem, { InputField } from '../AccordionItem';
import PluginSettings, { getRealValue } from '../PluginSettings';


// Settings
export default function ButtonSettings() {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>
            
            <AccordionGroup title="General">
                
                {/* text */}
                {/* <AccordionSection title="Text" secondaryChip={props.text} divider description="Edit the button text.">
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Button Text"
                            value={props.text}
                            options={['']}
                            onChange={(event, value) => { setProp((props) => (props.text = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection> */}

                {/* link */}
                <AccordionSection title="Link" secondaryChip={props.link} divider description="The button link if URL is provided.">
                    <AccordionItem direction="row">
                        <Tooltip title="Select Link">
                            <IconButton aria-label="edit" size="large" >
                                <AddLinkIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                        <InputField hideRadioGroup
                            sx={{width: '100%'}}
                            label="Button Link"
                            value={props.link}
                            options={['']}
                            onChange={(event, value) => { setProp((props) => (props.link = getRealValue(value)))}}
                        />
                    </AccordionItem>
                    {/* <AccordionItem >
                        <FormControlLabel 
                            label="Open Link in New Tab"
                            control={<Checkbox defaultChecked />} 
                            checked={props.open_link_new_tab}
                            onChange={(event, value) => { setProp((props) => (props.open_link_new_tab = getRealValue(value)))}}
                        />
                    </AccordionItem> */}
                </AccordionSection>

                {/* variant */}
                <AccordionSection title="Variant" secondaryChip={props.variant} divider description="The variant to use.">
                    <AccordionItem>
                        <InputField hideTextField
                            label="Variant"
                            value={props.variant}
                            options={['text', 'contained', 'outlined']}
                            onChange={(event, value) => { setProp((props) => (props.variant = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* size */}
                <AccordionSection title="Size" secondaryChip={props.size} divider
                    description="The size of the component. small is equivalent to the dense button styling."
                >
                    <AccordionItem>
                        <InputField hideTextField
                            label="Variant"
                            value={props.size}
                            options={['small', 'medium', 'large']}
                            onChange={(event, value) => { setProp((props) => (props.size = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* color */}
                <AccordionSection title="Color Theme" secondaryChip={props.color} divider
                    description="The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Color Theme"
                            value={props.color}
                            options={['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']}
                            onChange={(event, value) => { setProp((props) => (props.color = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* fullWidth */}
                <AccordionSection title="Full Width" secondaryChip={String(props.fullWidth)} divider
                    description="If true, the button will take up the full width of its container."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue rowRadioGroup
                            label="Full Width"
                            value={props.fullWidth}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.fullWidth = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* disabled */}
                <AccordionSection title="Disabled" secondaryChip={String(props.disabled)} divider
                    description="If true, the component is disabled."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue rowRadioGroup
                            label="Disabled"
                            value={props.disabled}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.disabled = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* disableElevation */}
                <AccordionSection title="Disable Elevation" secondaryChip={String(props.disableElevation)} divider
                    description="If true, no elevation is used."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue rowRadioGroup
                            label="Disable Elevation"
                            value={props.disableElevation}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.disableElevation = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* disableFocusRipple */}
                <AccordionSection title="Disable Focus Ripple" secondaryChip={String(props.disableFocusRipple)} divider
                    description="If true, the keyboard focus ripple is disabled."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue rowRadioGroup
                            label="Disable Focus Ripple"
                            value={props.disableFocusRipple}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.disableFocusRipple = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* disableRipple */}
                <AccordionSection title="Disable Ripple" secondaryChip={String(props.disableRipple)} 
                    description="If true, the ripple effect is disabled."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue rowRadioGroup
                            label="Disable Ripple"
                            value={props.disableRipple}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.disableRipple = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

            </AccordionGroup>
        </PluginSettings>
    );
};
