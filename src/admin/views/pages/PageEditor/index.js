
// React
import * as React from 'react';
import { EditBase, SimpleForm, useRecordContext } from "react-admin";
import { useStore } from 'react-admin';
import { Editor, Frame, Element, useEditor} from '@craftjs/core';
import { useController } from 'react-hook-form';
import { Labeled, useInput } from 'react-admin';
import { SaveButton, DeleteButton, Toolbar as AdminToolbar } from 'react-admin';

// MUI
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import { useTabContext } from "@mui/lab/TabContext"
import Tooltip from '@mui/material/Tooltip';
import Portal from '@mui/material/Portal';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import CloseIcon from '@mui/icons-material/Close';

// Local
import Sidebar from './Sidebar';
import ToolbarComponent from './toolbar';
import PageSettingsForm from './settings';
import PageEditorForm from './editor';
import Plugins from '../../../../plugins';


// Page Editor Layout
export default function PageEditorLayout() {
    const [tabValue, setTabValue] = useStore('PageEditor.MainTab', '2'); // React.useState("2");
    const [openSidebar, setOpenSidebar] = useStore('PageEditor.Sidebar', true);
    const drawerWidth = 400;
    const AppbarRef = document.getElementById('react-admin-appbar-box'); 
    const AppbarCenterRef = document.getElementById('react-admin-appbar-center');
    const AppbarRightRef = document.getElementById('react-admin-appbar-right');

    // Styles: TabContainer
    const TabContainer = {
        mt: 2,
        transition: (theme) => theme.transitions.create(['all'], { 
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: !!openSidebar ? `${drawerWidth}px` : 0,
    };

    // Styles: TabHeader
    const TabHeader = {
        // border: 1, 
        // borderColor: 'divider', 
        // boxShadow: 2,
        display: 'flex',
        direction: "row",
        alignItems: "center",
        // minWidth: 800,
    };

    // Styles: TabContents
    const TabContents = {
        mt: 5, 
        border: 1, 
        borderColor: 'divider', 
        boxShadow: 8,
    }

    return (
        <EditBase>
            <Editor resolver={Plugins}>
                <Box sx={TabContainer}>
                    <TabContext value={tabValue} >

                        {/* Tab Headers: Rendered in portal to react-admin appbar */}
                        <Portal container={AppbarCenterRef}>
                            <TabList value={tabValue} variant="standard" onChange={(e, v) => { setTabValue(v) }} sx={{ flexGrow: 1 }}>
                                <Tab value="1" label="Settings" />
                                <Tab value="2" label="Edit Page" />
                                {/* <Tab value="3" label="Tab 3" /> */}
                            </TabList>
                        </Portal>

                        <Portal container={AppbarRightRef}>
                            <ToolbarComponent sx={TabHeader} />
                        </Portal>

                        {/* Tab Content */}
                        <Box sx={TabContents}>
                            <TabPanel value="1" sx={{p: 0}}><PageSettingsForm/></TabPanel>
                            <TabPanel value="2" sx={{p: 0}}><PageEditorForm/></TabPanel>
                            <TabPanel value="3" sx={{p: 0}}>Hello</TabPanel>
                        </Box>

                    </TabContext>

                    {/* Sidebar Drawer */}
                    <Drawer variant="persistent" open={openSidebar} anchor="right" sx={{ zIndex: 100 }}>
                        <Box sx={{ pt: 5, width: { xs: '100vW', sm: drawerWidth }, mt: { xs: 2, sm: 1 } }}>
                            <Sidebar />
                        </Box>
                    </Drawer>

                </Box>
            </Editor>
        </EditBase>
    );
}
