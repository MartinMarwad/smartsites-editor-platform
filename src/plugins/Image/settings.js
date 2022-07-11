
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
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

// Local
import AccordionGroup from '../AccordionGroup';
import AccordionSection from '../AccordionSection';
import AccordionItem, { InputField } from '../AccordionItem';
import PluginSettings, { getRealValue } from '../PluginSettings';
import FileSelectorService from '../fileSelectorUploadService';


// Settings
export default function BoxSettings() {
    const [openFileSelector, setOpenFileSelector] = React.useState(false);

    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>
            <AccordionGroup title="General">

                {/* src */}
                <AccordionSection title="Source" secondaryChip={props.src} divider>
                    <Typography sx={{pb: 2, color: 'gray', }}>
                        Change the image.
                    </Typography>
                     <AccordionItem direction='row'>
                        <Box sx={{ boxShadow: 0, }}>
                            <Tooltip title="Upload Image">
                                <IconButton aria-label="edit" size="large" onClick={() => { setOpenFileSelector(true); }}>
                                    <AddPhotoAlternateIcon fontSize="inherit" />
                                </IconButton>
                            </Tooltip>
                            <FileSelectorService 
                                open={openFileSelector} 
                                onClose={() => setOpenFileSelector(false)} 
                                onSubmit={(file) => {
                                    setProp((props) => {
                                        props.src = getRealValue(file.file);
                                        props.alt = getRealValue(file.description);
                                    }, 2000);
                                }}
                            />
                        </Box>
                        <InputField 
                            hideRadioGroup
                            sx={{width: '100%'}}
                            label="Image URL"
                            value={props.src}
                            options={['']}
                            onChange={(event, value) => { setProp((props) => (props.src = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* alt */}
                <AccordionSection title="Alternate Text" secondaryChip={"Text"}>
                    <Typography sx={{pb: 2, color: 'gray', }}>
                        Set the alternate text description for the image.
                    </Typography>
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Alternate Text"
                            value={props.alt}
                            options={['']}
                            onChange={(event, value) => { setProp((props) => (props.alt = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
            </AccordionGroup>
        </PluginSettings>
    );
};
