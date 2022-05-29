// React
import React from 'react';

// MUI 
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// Local
// import PluginModal from '../../PluginModal';
import SidebarSettings from './sidebar';

export default function ModalSettings() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', }}>
            <TabContext value={value}>
                <Box sx={{ borderRight: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} sx={{ borderRight: 1, borderColor: 'divider' }} orientation="vertical" variant="scrollable">
                        <Tab label="Settings" value="1" />
                        {/* <Tab label="Settings" value="2" /> */}
                        {/* <Tab label="Item Three" value="3" /> */}
                    </TabList>
                </Box>
                <Box sx={{ width: "100%", }}>
                    <TabPanel value="1">
                        <SidebarSettings />
                    </TabPanel>
                    {/* <TabPanel value="2">
                        <SidebarSettings />
                    </TabPanel> */}
                    {/* <TabPanel value="3">
                        hello 3
                    </TabPanel> */}
                </Box>
            </TabContext>
        </Box>
    );
};