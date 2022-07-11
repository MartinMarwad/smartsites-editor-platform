
// React
import React from 'react';
import { useNode } from '@craftjs/core';
import debounce from 'lodash.debounce';

// MUI 
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

// Local
import AccordionGroup from '../../AccordionGroup';
import AccordionSection from '../../AccordionSection';
import AccordionItem, { InputField } from '../../AccordionItem';
import PluginSettings, { getRealValue } from '../../PluginSettings';
import FileSelectorService from '../../fileSelectorUploadService';


// Settings
export default function Settings() {
    const [openFileSelector, setOpenFileSelector] = React.useState(false);

    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>  
            <AccordionGroup title="General">

                {/* src */}
                <AccordionSection title="Source" secondaryChip={props.src} divider description="Change source for the media.">
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
                <AccordionSection title="Alt Text" secondaryChip={props.alt} divider description="Change alt text for the media.">
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Alternate Text"
                            value={props.alt}
                            options={['']}
                            onChange={(event, value) => { setProp((props) => (props.alt = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* component */}
                <AccordionSection title="Component" secondaryChip={props.component} divider description="Change component for the media.">
                    <AccordionItem>
                        <InputField
                            label="Component"
                            value={props.component}
                            options={['img', 'picture', 'video', 'audio', 'iframe']}
                            onChange={(event, value) => { setProp((props) => (props.component = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* width */}
                <AccordionSection title="Width" secondaryChip={props.width} divider description="Change width for the media.">
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Width"
                            value={props.width}
                            options={['auto', '100%', '50%', '33%', '25%', '20%', '16%', '14%', '12%', '10%', '8%', '6%', '4%', '2%', '1%']}
                            onChange={(event, value) => { setProp((props) => (props.width = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* height */}
                <AccordionSection title="Height" secondaryChip={props.height} divider description="Change height for the media.">
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Height"
                            value={props.height}
                            options={['auto', '100%', '50%', '33%', '25%', '20%', '16%', '14%', '12%', '10%', '8%', '6%', '4%', '2%', '1%']}
                            onChange={(event, value) => { setProp((props) => (props.height = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>


            </AccordionGroup>
        </PluginSettings>
    );
};
