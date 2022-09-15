
// React
import * as React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Logout, UserMenu, useTranslate } from 'react-admin';
import { SidebarToggleButton, LoadingIndicator } from 'react-admin';

// MUI
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import MuiAppbar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';

// Local
import Logo from './Logo';


// Custom User Menu
function CustomUserMenu() {

    // Settings
    const SettingsMenu = React.forwardRef((props, ref) => {
        return (
            <MenuItem component={Link} ref={ref} {...props} to="settings">
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                <ListItemText>Settings</ListItemText>
            </MenuItem>
        );
    });

    return (
        <UserMenu>
            <SettingsMenu />
            <Logout />
        </UserMenu>
    );
}

// Custom Appbar
export default function CustomAppBar(props) {
    const isLargeEnough = useMediaQuery(theme => theme.breakpoints.up('sm'));

    // Styles: Appbar
    const AppbarStyles = {
        boxShadow: 'none',
        border: '1px solid #e0e0e3',
        backgroundClip: 'padding-box',
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    // Styles: Boxes
    const BoxStyles = {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    return (
        <MuiAppbar {...props} color="secondary" elevation={1} sx={AppbarStyles}>

            {/* Left */}
            <Box sx={{ ml: 1, flexGrow: 1, ...BoxStyles }}>
                <SidebarToggleButton />
                <Typography variant="h6" color="inherit" id="react-admin-title" sx={{
                    ml: 2, 
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }} />
                <Box id="react-admin-appbar-left"></Box>
            </Box>

            {/* Center */}
            <Box sx={{ flexGrow: 1, ...BoxStyles }}>
                <Box id="react-admin-appbar-box"></Box>
                <Box id="react-admin-appbar-center"></Box>
            </Box>

            {/* Right */}
            <Box sx={{ ...BoxStyles, mr: 2 }}>
                <Box id="react-admin-appbar-right"></Box>
                <LoadingIndicator />
                <CustomUserMenu />
            </Box>
            {/* {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />} */}
            {/* {isLargeEnough && <Logo />} */}
        </MuiAppbar>
    );
};
