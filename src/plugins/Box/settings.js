
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
export default function BoxSettings() {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>
            <AccordionGroup title="General">

                {/* component */}
                <AccordionSection title="Component" secondaryChip={props.component}>
                    <Typography sx={{ pb: 2, color: 'gray', }}>
                        The component used for the root node. Either a string to use a HTML element or a component.
                    </Typography>
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Component"
                            value={props.component}
                            options={['div']}
                            onChange={(event, value) => { setProp((props) => (props.component = getRealValue(value))) }}
                        />
                    </AccordionItem>

                </AccordionSection>
            </AccordionGroup>
        </PluginSettings>
    );
};
