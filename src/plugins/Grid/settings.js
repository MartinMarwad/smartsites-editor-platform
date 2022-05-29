
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
import AccordionItem, { ToolbarRadio } from '../AccordionItem';
import PluginSettings from '../PluginSettings';


// Settings
export default function GridSettings() {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>
            <AccordionGroup title="General">
                
                {/* direction */}
                <AccordionSection title="Direction" secondary={<Chip label={props.direction}/>}>
                    <FormControl component="fieldset">
                        <RadioGroup
                            name="component-direction"
                            value={props.direction}
                            onChange={(e) => setProp((props) => (props.direction = e.target.value))}
                            row={false}
                        >
                            <FormControlLabel value="row" control={<Radio />} label="row" />
                            <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse" />
                            <FormControlLabel value="column" control={<Radio />} label="column" />
                            <FormControlLabel value="column-reverse" control={<Radio />} label="column-reverse" />
                        </RadioGroup>
                    </FormControl>
                </AccordionSection>
                <Divider/>

                {/* justifyContent */}
                <AccordionSection title="Justify Content" secondary={<Chip label={props.justifyContent}/>}>
                    <FormControl component="fieldset">
                        <RadioGroup 
                            name="component-justifycontent"
                            value={props.justifyContent}
                            onChange={(e) => setProp((props) => (props.justifyContent = e.target.value))}
                            row={false}
                        >
                            <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                            <FormControlLabel value="center" control={<Radio />} label="center" />
                            <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                            <FormControlLabel value="space-between" control={<Radio />} label="space-between" />
                            <FormControlLabel value="space-around" control={<Radio />} label="space-around" />
                            <FormControlLabel value="space-evenly" control={<Radio />} label="space-evenly" />
                        </RadioGroup>
                    </FormControl>
                </AccordionSection>
                <Divider/>

                {/* alignItems */}
                <AccordionSection title="Align Items" secondary={<Chip label={props.alignItems}/>}>
                    <FormControl component="fieldset">
                        <RadioGroup 
                            name="component-alignitems"
                            value={props.alignItems}
                            onChange={(e) => setProp((props) => (props.alignItems = e.target.value))}
                            row={false}
                        >
                            <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                            <FormControlLabel value="center" control={<Radio />} label="center" />
                            <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                            <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
                            <FormControlLabel value="baseline" control={<Radio />} label="baseline" />
                        </RadioGroup>
                    </FormControl>
                </AccordionSection>
                <Divider/>

                {/* spacing */}
                <AccordionSection title="Spacing" secondary={
                    <><Chip label={`Row: ${props.rowSpacing}`}/><Chip label={`Col: ${props.columnSpacing}`}/></>
                }>

                    {/* rowSpacing */}
                    <Grid container spacing={2} alignItems="center">
                        <Grid item><Typography gutterBottom>Row</Typography></Grid>
                        <Grid item xs>
                            <FormControl component="fieldset">
                                <Slider
                                    value={typeof props.rowSpacing === 'number' ? props.rowSpacing : 0}
                                    onChange={(event, newValue) => setProp((props) => (props.rowSpacing = newValue))}
                                    step={1}
                                    min={0}
                                    max={25}
                                    valueLabelDisplay="auto"
                                    aria-label="Small"
                                    aria-labelledby="grid-settings-general-spacing-rowspacing"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl component="fieldset">
                                <Input
                                    value={props.rowSpacing}
                                    size="small"
                                    onChange={(event) => {
                                        setProp((props) => (props.rowSpacing = Number(event.target.value)))
                                    }}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 25,
                                        type: 'number',
                                        'aria-labelledby': 'grid-settings-general-spacing-rowspacing',
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    {/* columnSpacing */}
                    <Grid container spacing={2} alignItems="center">
                        <Grid item><Typography gutterBottom>Column</Typography></Grid>
                        <Grid item xs>
                            <FormControl component="fieldset">
                                <Slider
                                    value={typeof props.columnSpacing === 'number' ? props.columnSpacing : 0}
                                    onChange={(event, newValue) => setProp((props) => (props.columnSpacing = newValue))}
                                    step={1}
                                    min={0}
                                    max={25}
                                    valueLabelDisplay="auto"
                                    aria-label="Small"
                                    aria-labelledby="grid-settings-general-spacing-columnspacing"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl component="fieldset">
                                <Input
                                    value={props.columnSpacing}
                                    size="small"
                                    onChange={(event) => {
                                        setProp((props) => (props.columnSpacing = Number(event.target.value)))
                                    }}
                                    onBlur={() => {
                                        if (props.columnSpacing < 0) {
                                            setProp((props) => (props.columnSpacing = 0));
                                        } else if (props.columnSpacing > 100) {
                                            setProp((props) => (props.columnSpacing = 100));
                                        }
                                    }}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 25,
                                        type: 'number',
                                        'aria-labelledby': 'grid-settings-general-spacing-columnspacing',
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>


                    
                </AccordionSection>

            </AccordionGroup>
        </PluginSettings>
    );
};
