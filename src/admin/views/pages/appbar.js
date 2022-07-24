
// React
import * as React from 'react';
import { useLogout, useRefresh, useUpdate, useRecordContext } from 'react-admin';
import { useEditor } from '@craftjs/core';
import copy from 'copy-to-clipboard';
import { useSnackbar } from 'notistack';

// Treasury
import { EdgeTrigger } from "@mui-treasury/layout";

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// MUI Icons
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import RefreshIcon from '@mui/icons-material/Refresh';
import NotificationsIcon from '@mui/icons-material/Notifications';


export default function MenuAppBar({ title, editor }) {

    // Variables
    const record = useRecordContext();
    const [update_record, { loading, error }] = useUpdate();
    const [pageTitle, setPageTitle] = React.useState( ( record ? record.title : ""  ) );
    const logout = useLogout();
    const refresh = useRefresh();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [optionsMenu, setOptionsMenu] = React.useState(null);
    const { actions, query, enabled, canUndo, canRedo } = useEditor(
        (state, query) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
        })
    );
    const [stateToLoad, setStateToLoad] = React.useState(null);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [preview, setPreview] = React.useState(false);
    const leftSidebarButton = React.useRef(null);
    const rightSidebarButton = React.useRef(null);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    // Handlers
    const handleLogout = () => logout();    
    const handleMenu = (event) => {setAnchorEl(event.currentTarget);};
    const handleOptionsMenu = (event) => {setOptionsMenu(event.currentTarget);};
    const handleOptionsMenuClose = () => {setOptionsMenu(null);};
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAnchorEl(null);
    };

    // Handle function to create preview of the page.
    const handlePreview = () => {
        setPreview(!preview);
        actions.setOptions((options) => (options.enabled = preview))
        // This is not my preferred method for toggling both sidebars... but I see no other way to connect to an EdgeTrigger.
        rightSidebarButton.current.click();
        // leftSidebarButton.current.click();
    };

    // Handle function to save and update the data on the page.
    const handleSave = () => {

        // Construct Data
        const data = {
            title: pageTitle,
            url: record.url,
            content: query.serialize(),
        }

        // Update Record
        update_record('pages', record.id, data, record);

        // If Error:
        if (loading) { 
            if (error) { 
                console.log(`Error trying to save page: ${error}`, data);
                enqueueSnackbar(`Error: ${error}`, { variant: 'error' });
            }
        }

        // Else, Success
        else {
            console.log("Page Saved Successfully", data);
            enqueueSnackbar('Saved Successfully', { variant: 'success' });
        }

    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                bgcolor: 'background.paper',
                boxShadow: 0,
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderBottomColor: 'divider',
            }}>
                <Toolbar>

                    {/* Menu button to toggle sidebar */}
                    <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
                        {(collapsed, setCollapsed) => ( 
                            <Tooltip title="Toggle Sidebar">
                                <IconButton 
                                    size="large"
                                    edge="start"
                                    // color="secondary"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={() => setCollapsed(!collapsed)}
                                    ref={leftSidebarButton}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            </Tooltip>
                        )}
                    </EdgeTrigger>

                    {/* Left Aligned */}
                    <Box sx={{ flexGrow: 1 }}>

                        {/* Title */}
                        <Typography variant="h6" component="div" sx={{
                            color: 'gray',
                        }}>
                            {title}
                        </Typography>
                    </Box>
                    

                    {/* Centered Aligned */}
                    <Box sx={{ flexGrow: 1 }}>

                        {/* Editable Page Title */}
                        { editor &&
                            <Tooltip title="Page Title">
                                <TextField
                                    id="page-title"
                                    // label="Page Title" 
                                    variant="outlined"
                                    size="small"
                                    defaultValue={record.title}
                                    InputProps={{ style: { fontSize: 20 } }}
                                    onChange={(event) => {setPageTitle(event.target.value)}} 
                                    sx={{
                                        // ml: -20,
                                        width: "50%",
                                    }}
                                />
                            </Tooltip>
                        }
                    </Box>

                    {/* Craft.JS Editor Toolbox (only shows in editor mode) */}
                    {editor &&
                        <Box>

                            {/* Undo button */}
                            <Tooltip title="Undo">
                                <span>
                                    <IconButton
                                        size="large"
                                        disabled={!canUndo}
                                        onClick={() => actions.history.undo()}
                                    >
                                        <UndoIcon />
                                    </IconButton>
                                </span>
                            </Tooltip>

                            {/* Redo button */}
                            <Tooltip title="Redo">
                                <span>
                                    <IconButton
                                        size="large"
                                        disabled={!canRedo}
                                        onClick={() => actions.history.redo()}
                                    >
                                        <RedoIcon />
                                    </IconButton>
                                </span>
                            </Tooltip>

                            {/* Preview button */}
                            <Tooltip title="Preview">
                                <IconButton
                                    size="large"
                                    aria-haspopup="true"
                                    onClick={handlePreview}
                                >
                                    {preview ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </Tooltip>
                            
                            {/* More Options button */}
                            <Tooltip title="More Options">
                                <span>
                                    <IconButton
                                        size="large"
                                        aria-haspopup="true"
                                        aria-controls="appbar-options-menu"
                                        onClick={handleOptionsMenu}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                </span>
                            </Tooltip>
                            <Menu
                                id="appbar-options-menu"
                                anchorEl={optionsMenu}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(optionsMenu)}
                                onClose={handleOptionsMenuClose}
                            >
                                <MenuItem onClick={() => {
                                    const json = query.serialize();
                                    // copy(lz.encodeBase64(lz.compress(json)));
                                    copy(json);
                                    // setSnackbarMessage('State copied to clipboard');
                                    enqueueSnackbar('State copied to clipboard', { variant: 'success' });
                                }}>
                                    <ListItemText primary="Copy Current State" />
                                </MenuItem>
                                <MenuItem onClick={() => setDialogOpen(true)}>
                                    <ListItemText primary="Load Current State" />
                                </MenuItem>                                
                            </Menu>

                            {/* Save button */}
                            <Button variant="outlined" onClick={handleSave} disabled={loading}>Save</Button>

                            {/* Store hidden components at bottom */}

                            <Dialog
                                open={dialogOpen}
                                onClose={() => setDialogOpen(false)}
                                fullWidth
                                maxWidth="md"
                            >
                                <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Paste the contents that was copied from the "Copy Current State" button. 
                                        This will replace the data on the page with the data entered here.
                                    </DialogContentText>
                                    <TextField
                                        multiline
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        // label="State"
                                        fullWidth
                                        variant="outlined"
                                        value={stateToLoad || ''}
                                        onChange={(e) => setStateToLoad(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="outlined" onClick={() => setDialogOpen(false)} color="primary">
                                        Cancel
                                    </Button>
                                    <Button variant="outlined" autoFocus color="primary" onClick={() => {
                                        setDialogOpen(false);
                                        // const json = lz.decompress(lz.decodeBase64(stateToLoad));
                                        const json = stateToLoad;
                                        actions.deserialize(json);
                                        // setSnackbarMessage('State loaded');
                                        enqueueSnackbar('State loaded', { variant: 'success' });
                                    }}>
                                        Load
                                    </Button>
                                </DialogActions>
                            </Dialog>

                        </Box>
                    }

                    {/* Refresh */}
                    <Tooltip title="Refresh">
                        <IconButton
                            size="large"
                            // aria-label="account of current user"
                            // aria-controls="appbar-account-menu"
                            // aria-haspopup="true"
                            onClick={() => {refresh();}}
                            sx={{ ml: 1 }}
                        >
                            <RefreshIcon />
                        </IconButton>
                    </Tooltip>

                    {/* Notification */}
                    <Tooltip title="Notifications">
                        <IconButton
                            size="large"
                            // aria-label="account of current user"
                            // aria-controls="appbar-account-menu"
                            // aria-haspopup="true"
                            // onClick={handleMenu}
                            sx={{ ml: 1 }}
                        >
                            <NotificationsIcon />
                        </IconButton>
                    </Tooltip>

                    {/* Account Button */}
                    <Tooltip title="Show Account">
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="appbar-account-menu"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            sx={{ ml: 1 }}
                        >
                            <AccountCircle />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="appbar-account-menu"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon><PowerSettingsNewIcon /></ListItemIcon>
                            <ListItemText primary="Logout" />
                        </MenuItem>
                    </Menu>

                    {/* Right Sidebar Toggle Button */}
                    {editor &&
                        <EdgeTrigger target={{ anchor: "right", field: "collapsed" }}>
                            {(collapsed, setCollapsed) => (
                                <Tooltip title="Toggle Right Sidebar">
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        // color="secondary"
                                        aria-label="menu"
                                        sx={{ display: "none" }}
                                        onClick={() => setCollapsed(!collapsed)}
                                        ref={rightSidebarButton}
                                    >
                                        <FormatAlignRightIcon />
                                    </IconButton>
                                </Tooltip>
                            )}
                        </EdgeTrigger>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}