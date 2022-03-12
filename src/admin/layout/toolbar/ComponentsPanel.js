
// React
import React from 'react';
import { useEditor } from '@craftjs/core';

// MUI 
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

// Plugins
import Plugins from '../../../plugins';


// ComponentsPanel: Panel to manage drag-n-drop components.
export default function ComponentsPanel() {
    const { connectors } = useEditor();
    const [pluginsList, setPluginsList] = React.useState(Plugins);

    const ListPluginItem = ({ name, component }) => (
        <ListItemButton
            ref={(ref) => connectors.create(ref, component)}
            data-cy={`toolbox-${name.toLowerCase()}`}
            key={name.toLowerCase()}
        >
            <ListItemIcon><Avatar>{name.charAt(0)}</Avatar></ListItemIcon>
            <ListItemText primary={name} />
        </ListItemButton>
    );

    // Sort based on filter input
    function sortPluginList(filter_text) {

        // If input
        if ( filter_text ) {
            const newList = pluginsList.filter((plugin) => 
                plugin.name.toLowerCase().indexOf(filter_text.toLowerCase()) > -1
            );
            setPluginsList(newList);
        }

        // If no input, reset to original list
        else {
            setPluginsList(Plugins);
        }
    }

    return (
        <Box >
            <TextField variant="filled" size="small" sx={{ width: '100%' }} 
                label="Drag to add or type here to search." 
                onChange={(event) => {sortPluginList(event.target.value)}}
            />
            <List component="nav" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {pluginsList.map((plugin, index) => 
                    <ListPluginItem key={index} name={plugin.name} component={plugin.component}/>
                )}
            </List>
        </Box>
    );
};
