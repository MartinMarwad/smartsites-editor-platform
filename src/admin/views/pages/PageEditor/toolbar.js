
// React
import * as React from 'react';
import { useStore, useNotify, useUpdate, useRecordContext, useRedirect } from 'react-admin';
import { useEditor } from '@craftjs/core';
import copy from 'copy-to-clipboard';

// MUI
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// MUI Icons
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



// Toolbar Component
export default function ToolbarComponent({ children, ...props }) {
    const [openSidebar, setOpenSidebar] = useStore('PageEditor.Sidebar', true);
    const [stateToLoad, setStateToLoad] = React.useState(null);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [preview, setPreview] = React.useState(false);
    const [optionsMenu, setOptionsMenu] = React.useState(null);
    const notify = useNotify();
    const record = useRecordContext(); 
    const redirect = useRedirect();
    const [update, { isLoading, error }] = useUpdate();
    const { actions, query, enabled, canUndo, canRedo } = useEditor(
        (state, query) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
        })
    );
    
    // Handle Saving
    const handleSave = () => {

        // Construct Data
        const data = {
            title: record.title,
            url: record.url,
            content: query.serialize(),
        }

        // Update
        update('pages', { id: record.id, data: data, previousData: record })

        // Handle Success/Failure
        if (error) {
            notify(`Failed to save page`, { type: 'warning' });
        } else {
            notify('Page updated', { type: 'success' });
        }

    }

    return (
        <Box {...props}>

            {/* Button */}
            <Box sx={{ flexGrow: 1, p: 1, }}>
                <Tooltip title="Save">
                    <span>
                        <Button variant="outlined" disabled={!canUndo} onClick={handleSave}>Save</Button>
                    </span>
                </Tooltip>
            </Box>

            {/* Tabs */}
            { children }

            {/* Toolbar */}
            <Toolbar>

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
                        onClick={() => {
                            setPreview(!preview); 
                            actions.setOptions((options) => (options.enabled = preview))
                        }}
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
                            onClick={(event) => {setOptionsMenu(event.currentTarget);}}
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
                    onClose={() => { setOptionsMenu(null); }}
                >
                    <MenuItem onClick={() => {
                        const json = query.serialize();
                        // copy(lz.encodeBase64(lz.compress(json)));
                        copy(json);
                        // setSnackbarMessage('State copied to clipboard');
                        // enqueueSnackbar('State copied to clipboard', { variant: 'success' });
                        notify('State copied to clipboard', { type: 'success' });
                    }}>
                        <ListItemText primary="Copy Current State" />
                    </MenuItem>
                    <MenuItem onClick={() => setDialogOpen(true)}>
                        <ListItemText primary="Load Current State" />
                    </MenuItem>
                </Menu>

                {/* Dialog */}
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
                            // enqueueSnackbar('State loaded', { variant: 'success' });
                            notify('State loaded', { type: 'success' });
                        }}>
                            Load
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Sidebar Toggle Button */}
                <Tooltip title="Toggle Sidebar">
                    <span>
                        <IconButton
                            size="large"
                            onClick={() => { openSidebar ? setOpenSidebar(false) : setOpenSidebar(true) }}
                        >
                            <FormatAlignRightOutlinedIcon />
                        </IconButton>
                    </span>
                </Tooltip>

            </Toolbar>
        </Box>
    );
}