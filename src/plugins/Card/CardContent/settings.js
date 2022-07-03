
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


// Settings
export default function Settings() {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>  
            <AccordionGroup title="General">

            </AccordionGroup>
        </PluginSettings>
    );
};
