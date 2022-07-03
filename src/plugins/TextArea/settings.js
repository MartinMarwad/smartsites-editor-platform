
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
            <AccordionGroup title="General">

                <Typography sx={{pb: 2, color: 'gray', }}>
                    Applies the theme typography styles.
                </Typography>
                
                {/* text */}
                {/* <TextField
                    id="props-text"
                    label="Button Text"
                    variant="outlined"
                    value={props.text}
                    onChange={(event) => { setProp((props) => (props.text = event.target.value), 500) }}
                    sx={{ width: '100%', my: 2 }} 
                /> */}

            </AccordionGroup>
        </PluginSettings>
    );
};
