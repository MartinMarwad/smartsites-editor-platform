
// React
import React from 'react';
import { ColorPickerField } from '@react-page/editor';

// Material 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


// const data.buttons = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AppBarComponent = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); };
    const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget); };
    const handleCloseNavMenu = () => { setAnchorElNav(null); };
    const handleCloseUserMenu = () => { setAnchorElUser(null); };

    // Our data 
    const data = props.data;

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        {props.data.logo}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* {data.buttons && data.buttons.map((button, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{button.texts}</Typography>
                                </MenuItem>
                            ))} */}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {props.data.buttons && props.data.buttons.map((button, index) => (
                            <Button
                                key={index}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href={button.link}
                            >
                                {button.text}
                            </Button>
                        ))}
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};


const AppBarForm = {

    // Component 
    Renderer: (props) => (
        <AppBarComponent {...props} />
    ),

    // Component Controls
    id: 'material-app-bar',
    title: 'App Bar',
    description: "The top App Bar provides content and actions related to the current screen. It's used for branding, screen titles, navigation, and actions.",
    version: 1,
    cellStyle: {
        padding: 0,
    },
    controls: [
        {
            title: 'User Interface',
            controls: {
                type: 'autoform',
                columnCount: 1,
                schema: {
                    properties: {
                        logo: {
                            type: 'string',
                            default: 'Example Logo',
                        },
                        buttons: {
                            type: 'array',
                            items: {
                                type: 'object',
                                required: [],
                                default: {
                                    text: 'Menu button',
                                    link: "/link",
                                },
                                properties: {
                                    text: {
                                        type: 'string',
                                    },
                                    link: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        {
            title: 'Styling',
            controls: {
                type: 'autoform',
                schema: {
                    type: 'object',
                    required: [],
                    properties: {
                        style: {
                            type: 'object',
                            required: [],
                            properties: {
                                backgroundColor: {
                                    type: 'string',
                                    default: 'white',
                                    uniforms: {
                                        component: ColorPickerField,
                                    },
                                },
                                textColor: {
                                    type: 'string',
                                    default: 'black',
                                    uniforms: {
                                        component: ColorPickerField,
                                    },
                                },
                                padding: {
                                    type: 'number',
                                    default: 10,
                                },
                            },
                        },
                    },
                },
            },
        },

    ],
};

export default AppBarForm;
