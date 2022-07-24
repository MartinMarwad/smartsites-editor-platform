
// React
import * as React from 'react';
import { Link } from 'react-router-dom';

// MUI
import { AppBar, Logout, UserMenu, useTranslate } from 'react-admin';
import { Box, MenuItem, ListItemIcon, ListItemText, Typography, useMediaQuery, } from '@mui/material';
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

    return (
        <AppBar {...props} color="secondary" elevation={1} userMenu={<CustomUserMenu />}>
            <Typography variant="h6" color="inherit" id="react-admin-title" sx={{
                flex: 1,
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
            }}/>
            {isLargeEnough && <Logo />}
            {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
        </AppBar>
    );
};
