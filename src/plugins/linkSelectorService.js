// Source: https://mui.com/components/dialogs/#customization

// React
import * as React from 'react';

// MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CommentIcon from '@mui/icons-material/Comment';
import CloseIcon from '@mui/icons-material/Close';
import FileIcon from '@mui/icons-material/InsertDriveFile';

// Local
import Modal from './Modal';


// Link Selector Upload Service
export default function LinkSelectorUploaderService({ open, onClose, onSubmit }) {
    const [checked, setChecked] = React.useState([]);
    const [links, setLinks] = React.useState([]);
    const [sortedLinks, setSortedLinks] = React.useState([]);

    // Fetch Pages
    React.useEffect(() => {
        fetch('/api/pages/?format=json')
            .then((response) => response.json())
            .then((data) => { setLinks(data.results); setSortedLinks(data.results); })
            .catch((err) => { console.log(err.message); });
    }, []);

    // Submit
    const handleSubmit = () => {
        console.log('Submitted');
        onSubmit(links[checked[0]]);
        onClose();
    }

    // Handle checkbox change
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    // Sort function to filter array from search input
    function sortLinks(filter_text) {

        // If input
        if ( filter_text ) {
            const newList = sortedLinks.filter((file) => 
                file.name.toLowerCase().indexOf(filter_text.toLowerCase()) > -1
            );
            setSortedLinks(newList);
        }

        // If no input, reset to original list
        else setSortedLinks(links);
    }


    return (
        <Dialog
            onClose={onClose}
            open={open}
            fullWidth={true}
            maxWidth="md"
        >
            {/* Header (title) */}
            <DialogTitle sx={{ m: 0, p: 2 }}>
                <Box>Select Link</Box>
                <IconButton aria-label="close" onClick={onClose}
                    sx={{
                        position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            {/* Content (children) */}
            <DialogContent dividers>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    {/* <Grid item xs>
                        <Tooltip title="Upload File">
                            <IconButton size="large" sx={{fontSize: 30,}}>
                                <AddCircleRoundedIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                    </Grid> */}
                    <Grid item xs={11}>
                        <TextField 
                            variant="outlined" 
                            size="small"
                            label="Type to search"
                            onChange={(event) => sortLinks(event.target.value)}
                            sx={{ width: '100%'  }}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <List sx={{ width: '100%', minHeight: 500, bgcolor: 'background.paper' }}>
                            {sortedLinks.map((page, index) => {
                                const labelId = `checkbox-list-label-${index}`;

                                return (
                                    <ListItem
                                        key={index}
                                        // secondaryAction={
                                        //     <Chip label={isMedia(file.file) ? "Media" : "File" } color="primary" variant="outlined" />
                                        // }
                                    >
                                        <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={checked.indexOf(index) !== -1}
                                                    tabIndex={0}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemIcon>
                                            <ListItemAvatar>
                                                <Avatar
                                                    // variant="square"
                                                    sx={{ width: 60, height: 60, mr: 2 }}
                                                >
                                                    <FileIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText id={labelId} primary={page.title} secondary={page.id} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
            </DialogContent>

            {/* Footer (bottom_actions) */}
            <DialogActions>
                <Button autoFocus onClick={onClose}>
                    Cancel
                </Button>
                <Button autoFocus variant="outlined" onClick={handleSubmit}>
                    Select File
                </Button>
            </DialogActions>
        </Dialog>
    );
}
