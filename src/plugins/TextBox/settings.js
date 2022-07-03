
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
                <TextField
                    id="props-text"
                    label="Button Text"
                    variant="outlined"
                    value={props.text}
                    onChange={
                        React.useCallback(debounce((event, value) => {setProp((props) => (props.text = value));}, 1000), [])
                    }
                    
                    sx={{ width: '100%', my: 2 }} 
                />

                {/* variant */}
                <AccordionSection title="Variant" secondaryChip={props.variant} divider>
                    <Typography sx={{pb: 2, color: 'gray', }}>Applies the theme typography styles.</Typography>
                    <RadioGroup
                        name="component-variant"
                        value={props.variant}
                        onChange={(e) => setProp((props) => (props.variant = e.target.value))}
                        row={false}
                    >
                        <FormControlLabel value="body1" control={<Radio />} label="body1" />
                        <FormControlLabel value="body2" control={<Radio />} label="body2" />
                        <FormControlLabel value="button" control={<Radio />} label="button" />
                        <FormControlLabel value="caption" control={<Radio />} label="caption" />
                        <FormControlLabel value="h1" control={<Radio />} label="h1" />
                        <FormControlLabel value="h2" control={<Radio />} label="h2" />
                        <FormControlLabel value="h3" control={<Radio />} label="h3" />
                        <FormControlLabel value="h4" control={<Radio />} label="h4" />
                        <FormControlLabel value="h5" control={<Radio />} label="h5" />
                        <FormControlLabel value="h6" control={<Radio />} label="h6" />
                        <FormControlLabel value="inherit" control={<Radio />} label="inherit" />
                        <FormControlLabel value="overline" control={<Radio />} label="overline" />
                        <FormControlLabel value="subtitle1" control={<Radio />} label="subtitle1" />
                        <FormControlLabel value="subtitle2" control={<Radio />} label="subtitle2" />
                    </RadioGroup>
                </AccordionSection>

                {/* align */}
                <AccordionSection title="Align" secondaryChip={props.align} divider>
                    <AccordionItem>
                        <Typography sx={{pb: 2, color: 'gray', }}>
                            Set the text-align on the component.
                        </Typography>
                        <RadioGroup
                            name="component-align"
                            value={props.align}
                            onChange={(e) => setProp((props) => (props.align = e.target.value))}
                            row={false}
                        >
                            <FormControlLabel value="inherit" control={<Radio />} label="Inherit" />
                            <FormControlLabel value="center" control={<Radio />} label="Center" />
                            <FormControlLabel value="justify" control={<Radio />} label="Justify" />
                            <FormControlLabel value="left" control={<Radio />} label="Left" />
                            <FormControlLabel value="right" control={<Radio />} label="Right" />
                        </RadioGroup>
                    </AccordionItem>
                </AccordionSection>

                {/* component */}
                <AccordionSection title="Component" secondaryChip={props.component} divider>
                    <Typography sx={{pb: 2, color: 'gray', }}>
                        The component used for the root node. Either a string to use a HTML element or a component.
                    </Typography>
                    <AccordionItem>
                        <InputField
                            label="Component"
                            value={props.component}
                            options={['div']}
                            onChange={(event, value) => { setProp((props) => (props.component = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* gutterBottom */}
                <AccordionSection title="Gutter Bottom" secondaryChip={String(props.gutterBottom)} divider>
                    <AccordionItem>
                        <Typography sx={{ pb: 2, color: 'gray', }}>
                            If true, the text will have a bottom margin.
                        </Typography>
                        <RadioGroup
                            name="component-gutterBottom"
                            value={String(props.gutterBottom)}
                            onChange={(e) => setProp((props) => (props.gutterBottom = getRealValue(e.target.value)))}
                            row={true}
                        >
                            <FormControlLabel value={true} control={<Radio />} label="True" />
                            <FormControlLabel value={false} control={<Radio />} label="False" />
                        </RadioGroup>
                    </AccordionItem>
                </AccordionSection>

                {/* noWrap */}
                <AccordionSection title="No Wrap" secondaryChip={String(props.noWrap)} divider>
                    <AccordionItem>
                        <Typography sx={{ pb: 2, color: 'gray', }}>
                            If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
                        </Typography>
                        <RadioGroup
                            name="component-noWrap"
                            value={String(props.noWrap)}
                            onChange={(e) => setProp((props) => (props.noWrap = getRealValue(e.target.value)))}
                            row={true}
                        >
                            <FormControlLabel value={true} control={<Radio />} label="True" />
                            <FormControlLabel value={false} control={<Radio />} label="False" />
                        </RadioGroup>
                    </AccordionItem>
                </AccordionSection>

                {/* paragraph */}
                <AccordionSection title="paragraph" secondaryChip={String(props.paragraph)}>
                    <AccordionItem>
                        <Typography sx={{ pb: 2, color: 'gray', }}>
                            If true, the element will be a paragraph element.
                        </Typography>
                        <RadioGroup
                            name="component-noWrap"
                            value={String(props.paragraph)}
                            onChange={(e) => setProp((props) => (props.paragraph = getRealValue(e.target.value)))}
                            row={true}
                        >
                            <FormControlLabel value={true} control={<Radio />} label="True" />
                            <FormControlLabel value={false} control={<Radio />} label="False" />
                        </RadioGroup>
                    </AccordionItem>
                </AccordionSection>

            </AccordionGroup>
        </PluginSettings>
    );
};
