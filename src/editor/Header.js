
// React
import React, { useState } from 'react';
import { useEditor } from '@craftjs/core';
import copy from 'copy-to-clipboard';
import lz from 'lzutf8';

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';

import {
    FormControlLabel,
    Switch,
    Grid,
    Button as MaterialButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Snackbar,
} from '@material-ui/core';


export default function Appbar() {
    const { actions, query, enabled, canUndo, canRedo } = useEditor(
        (state, query) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
        })
    );
    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState();
    const [stateToLoad, setStateToLoad] = useState(null);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">

                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                        Smartsites Editor Platform
                    </Typography>
                    
                    <FormControlLabel
                        control={
                            <Switch
                                checked={enabled}
                                onChange={(_, value) =>
                                    actions.setOptions((options) => (options.enabled = value))
                                }
                            />
                        }
                        label="Enable"
                    />

                    <MaterialButton
                        size="small"
                        variant="outlined"
                        color="secondary"
                        disabled={!canUndo}
                        onClick={() => actions.history.undo()}
                        style={{ marginRight: '10px' }}
                    >
                        Undo
                    </MaterialButton>

                    <MaterialButton
                        className="copy-state-btn"
                        size="small"
                        variant="outlined"
                        color="secondary"
                        disabled={!canRedo}
                        onClick={() => actions.history.redo()}
                        style={{ marginRight: '10px' }}
                    >
                        Redo
                    </MaterialButton>

                </Toolbar>
            </AppBar>
        </Box>
    );
}


export const Topbar = () => {
    const { actions, query, enabled, canUndo, canRedo } = useEditor(
        (state, query) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
        })
    );

    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState();

    const [stateToLoad, setStateToLoad] = useState(null);

    return (
        <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
            <Grid container alignItems="center">
                <Grid item xs>
                    <FormControlLabel
                        className="enable-disable-toggle"
                        control={
                            <Switch
                                checked={enabled}
                                onChange={(_, value) =>
                                    actions.setOptions((options) => (options.enabled = value))
                                }
                            />
                        }
                        label="Enable"
                    />
                    <MaterialButton
                        className="copy-state-btn"
                        size="small"
                        variant="outlined"
                        color="secondary"
                        disabled={!canUndo}
                        onClick={() => actions.history.undo()}
                        style={{ marginRight: '10px' }}
                    >
                        Undo
                    </MaterialButton>
                    <MaterialButton
                        className="copy-state-btn"
                        size="small"
                        variant="outlined"
                        color="secondary"
                        disabled={!canRedo}
                        onClick={() => actions.history.redo()}
                        style={{ marginRight: '10px' }}
                    >
                        Redo
                    </MaterialButton>
                </Grid>
                <Grid item>
                    <MaterialButton
                        className="copy-state-btn"
                        size="small"
                        variant="outlined"
                        color="secondary"
                        onClick={() => {
                            const json = query.serialize();
                            copy(lz.encodeBase64(lz.compress(json)));
                            setSnackbarMessage('State copied to clipboard');
                        }}
                        style={{ marginRight: '10px' }}
                    >
                        Copy current state
                    </MaterialButton>
                    <MaterialButton
                        className="load-state-btn"
                        size="small"
                        variant="outlined"
                        color="secondary"
                        onClick={() => setDialogOpen(true)}
                    >
                        Load
                    </MaterialButton>
                    <Dialog
                        open={dialogOpen}
                        onClose={() => setDialogOpen(false)}
                        fullWidth
                        maxWidth="md"
                    >
                        <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
                        <DialogContent>
                            <TextField
                                multiline
                                fullWidth
                                placeholder='Paste the contents that was copied from the "Copy Current State" button'
                                size="small"
                                value={stateToLoad || ''}
                                onChange={(e) => setStateToLoad(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <MaterialButton
                                onClick={() => setDialogOpen(false)}
                                color="primary"
                            >
                                Cancel
                            </MaterialButton>
                            <MaterialButton
                                onClick={() => {
                                    setDialogOpen(false);
                                    const json = lz.decompress(lz.decodeBase64(stateToLoad));
                                    actions.deserialize(json);
                                    setSnackbarMessage('State loaded');
                                }}
                                color="primary"
                                autoFocus
                            >
                                Load
                            </MaterialButton>
                        </DialogActions>
                    </Dialog>
                    <Snackbar
                        autoHideDuration={1000}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={!!snackbarMessage}
                        onClose={() => setSnackbarMessage(null)}
                        message={<span>{snackbarMessage}</span>}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
