
// React
import React from 'react';

// Treasury
import { EdgeSidebar } from "@mui-treasury/layout";
import { SidebarContent } from "@mui-treasury/layout";

// MUI 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// Local
import ComponentsPanel from './ComponentsPanel';
import SettingsPanel from './SettingsPanel';
import LayersPanel from './LayersPanel';


// Main Sidebar
export default function RightSideToolbar(scheme) {

    // Vars
    const [value, setValue] = React.useState('2');

    // Handlers
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{  }}> 
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="toolbar-tabs" centered>
                        <Tab label="Layers" value="1" />
                        <Tab label="Settings" value="2" />
                        <Tab label="Components" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ p: 0, }}>
                    <LayersPanel />
                </TabPanel>
                <TabPanel value="2" sx={{ p: 0, }}>
                    <SettingsPanel />
                </TabPanel>
                <TabPanel value="3" sx={{ p: 0, }}>
                    <ComponentsPanel />
                </TabPanel>
            </TabContext>
        </Box>
    );
}