
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
export default function ButtonSettings() {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>
            <Grid container spacing={2} sx={{p: 2}}>

                {/* text */}
                <Grid item xs={12} >
                    <TextField
                        id="props-text"
                        label="Text"
                        variant="outlined"
                        value={props.text}
                        onChange={(event) => {
                            setProp((props) => (props.text = event.target.value))
                        }}
                        sx={{ width: '100%'}}/>
                </Grid>
            </Grid>
            <AccordionGroup title="General">
                
                {/* variant */}
                <AccordionSection title="Variant" secondary={<Chip label={props.variant}/>}>
                    <FormControl component="fieldset">
                        <RadioGroup 
                            name="component-variant"
                            value={props.variant}
                            onChange={(e) => setProp((props) => (props.variant = e.target.value))}
                            row={false}
                        >
                            <FormControlLabel value="text" control={<Radio />} label="Text" />
                            <FormControlLabel value="contained" control={<Radio />} label="Contained" />
                            <FormControlLabel value="outlined" control={<Radio />} label="Outlined" />
                        </RadioGroup>
                    </FormControl>
                </AccordionSection>
                <Divider/>

                {/* size */}
                <AccordionSection title="Size" secondary={<Chip label={props.size}/>}>
                    <FormControl component="fieldset">
                        <RadioGroup 
                            name="component-size"
                            value={props.size}
                            onChange={(e) => setProp((props) => (props.size = e.target.value))}
                            row={false}
                        >
                            <FormControlLabel value="small" control={<Radio />} label="Small" />
                            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                            <FormControlLabel value="large" control={<Radio />} label="Large" />
                        </RadioGroup>
                    </FormControl>
                </AccordionSection>
                <Divider/>

                {/* color */}
                <AccordionSection title="Color" secondary={<Chip label={props.color}/>}>
                    <Typography sx={{pb: 2, color: 'gray', }}>
                        The color of the component. It supports both default and custom theme colors, which can be 
                        added as shown in the palette customization guide.
                    </Typography>
                    <FormControl component="fieldset">
                        <RadioGroup 
                            name="component-color"
                            value={props.color}
                            onChange={(e) => setProp((props) => (props.color = e.target.value))}
                            row={false}
                        >
                            <FormControlLabel value="inherit" control={<Radio />} label="Inherit" />
                            <FormControlLabel value="primary" control={<Radio />} label="Primary" />
                            <FormControlLabel value="secondary" control={<Radio />} label="Secondary" />
                            <FormControlLabel value="success" control={<Radio />} label="Success" />
                            <FormControlLabel value="error" control={<Radio />} label="Error" />
                            <FormControlLabel value="info" control={<Radio />} label="Info" />
                            <FormControlLabel value="warning" control={<Radio />} label="Warning" />
                        </RadioGroup>
                    </FormControl>
                </AccordionSection>

            </AccordionGroup>
        </PluginSettings>
    );
};
