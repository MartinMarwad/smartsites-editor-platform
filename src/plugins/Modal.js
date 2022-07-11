// Source: https://mui.com/components/dialogs/#customization

// React
import * as React from 'react';
import PropTypes from 'prop-types';

// MUI
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


export default function CustomModal({ title, children, BottomActions, open, onClose, fullWidth, maxWidth }) {

    return (
        <Dialog
            onClose={onClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
        >

            {/* Header (title) */}
            <DialogTitle sx={{ m: 0, p: 2 }}>
                {title}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>

            {/* Content (children) */}
            <DialogContent dividers>
                {children}
            </DialogContent>

            {/* Footer (bottom_actions) */}
            <DialogActions>
                { BottomActions ? {BottomActions} : (
                    <Button autoFocus onClick={onClose}>
                        Save changes
                    </Button>
                )}
            </DialogActions>

        </Dialog>
    );
}
