
// React
import React from 'react';
import { Element, useEditor } from '@craftjs/core';

// MUI 
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

// Plugins
import Plugins, { PluginComponents } from '../../../../../plugins';


// Plugin Template Item
function PluginTemplateItem({ primary, _ref, ...props}) {
    return (
        <ListItemButton ref={_ref} sx={{ pl: 8 }}>
            <ListItemText primary={primary} />
        </ListItemButton>
    );
}

// Plugin Item
function PluginItem({ primary, secondary, _ref, defaultOpen=false, children, ...props}) {
    const [open, setOpen] = React.useState(defaultOpen);
    let showArrow = true; if (children.length === 0) showArrow = false;
    return (
        <>
            <ListItemButton ref={_ref} onClick={() => { setOpen(!open); }}>
                <ListItemIcon><Avatar>{String(primary).charAt(0)}</Avatar></ListItemIcon>
                <ListItemText primary={primary} secondary={secondary} />
                {showArrow && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                    {children}
                </List>
            </Collapse>
        </>
    );
}

// ComponentsPanel: Panel to manage drag-n-drop components.
export default function ComponentsPanel() {
    const { connectors } = useEditor();
    const [PluginComponentsList, setPluginComponentsList] = React.useState(PluginComponents);
    const [open, setOpen] = React.useState(true);


    // Sort function to filter PluginComponents array from search input
    function sortPluginList(filter_text) {

        // If input
        if ( filter_text ) {
            const newList = PluginComponentsList.filter((plugin) => 
                plugin.displayName.toLowerCase().indexOf(filter_text.toLowerCase()) > -1
            );
            setPluginComponentsList(newList);
        }

        // If no input, reset to original list
        else setPluginComponentsList(PluginComponents);
    }

    return (
        <Box>
            <TextField variant="outlined" size="small" sx={{ m: 2, width: '90%'  }}
                label="Drag to add or type here to search."
                onChange={(event) => sortPluginList(event.target.value)}
            />
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {PluginComponentsList.map((plugin, index) =>
                    <PluginItem
                        key={index}
                        primary={plugin.displayName}
                        secondary={plugin.description}
                        _ref={(ref) => connectors.create(ref, plugin.component)}
                    >
                        {plugin.templates.map((template, t_index) =>
                            <PluginTemplateItem
                                key={t_index}
                                primary={template.displayName}
                                _ref={(ref) => connectors.create(ref, template.component)} />
                        )}
                    </PluginItem>
                )}
            </List>
        </Box>
    );
}




// LEGACY CODE: MARKED FOR DELETION
function OldComponentsPanel() {
    const { connectors } = useEditor();
    const [pluginsList, setPluginsList] = React.useState(Plugins);
    const [open, setOpen] = React.useState(true);

    const ListPluginItem = ({ plugin }) => (
        <ListItemButton
            ref={(ref) => connectors.create(ref, <Element is={plugin}/>)}
            data-cy={`toolbox-${plugin.craft.displayName.toLowerCase()}`}
            key={plugin.craft.displayName.toLowerCase()}
        >
            <ListItemIcon><Avatar>{plugin.craft.displayName.charAt(0)}</Avatar></ListItemIcon>
            <ListItemText primary={plugin.craft.displayName} secondary={plugin.craft.description}/>
        </ListItemButton>
    );

    // Sort based on filter input
    function sortPluginList(filter_text) {

        // If input
        if ( filter_text ) {
            const newList = pluginsList.filter((plugin) => 
                plugin.craft.displayName.toLowerCase().indexOf(filter_text.toLowerCase()) > -1
            );
            setPluginsList(newList);
        }

        // If no input, reset to original list
        else {
            setPluginsList(Plugins);
        }
    }

    // temp1
    return (
        <Box sx={{ p: 2, }} >
            <TextField variant="outlined" size="small" sx={{ width: '100%' }} 
                label="Drag to add or type here to search." 
                onChange={(event) => {sortPluginList(event.target.value)}}
            />
            <List component="nav" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {/* Appbar */}
                <ListItemButton ref={(ref) => connectors.create(ref, <Element canvas is={Plugins.Appbar} />)} >
                    <ListItemIcon><Avatar>{Plugins.Appbar.craft.displayName.charAt(0)}</Avatar></ListItemIcon>
                    <ListItemText primary={Plugins.Appbar.craft.displayName} secondary={Plugins.Appbar.craft.description} />
                </ListItemButton>

                {/* Box */}
                <ListItemButton ref={(ref) => connectors.create(ref, <Element canvas is={Plugins.Box}  />)} >
                    <ListItemIcon><Avatar>{Plugins.Box.craft.displayName.charAt(0)}</Avatar></ListItemIcon>
                    <ListItemText primary={Plugins.Box.craft.displayName} secondary={Plugins.Box.craft.description} />
                </ListItemButton>

                {/* Grid */}
                <ListItemButton ref={(ref) => connectors.create(ref, <Element canvas is={Plugins.Grid} />)} >
                    <ListItemIcon><Avatar>{Plugins.Grid.craft.displayName.charAt(0)}</Avatar></ListItemIcon>
                    <ListItemText primary={Plugins.Grid.craft.displayName} secondary={Plugins.Grid.craft.description} />
                </ListItemButton>
                
                {/* Button */}
                <ListItemButton ref={(ref) => connectors.create(ref, <Plugins.Button/>)} >
                    <ListItemIcon><Avatar>{Plugins.Button.craft.displayName.charAt(0)}</Avatar></ListItemIcon>
                    <ListItemText primary={Plugins.Button.craft.displayName} secondary={Plugins.Button.craft.description} />
                </ListItemButton>

                {/* Card */}
                <ListItemButton ref={(ref) => connectors.create(ref, <Plugins.Card/>)} >
                    <ListItemIcon><Avatar>{Plugins.Card.craft.displayName.charAt(0)}</Avatar></ListItemIcon>
                    <ListItemText primary={Plugins.Card.craft.displayName} secondary={Plugins.Card.craft.description} />
                </ListItemButton>

                {/* TextBox */}
                <ListItemButton ref={(ref) => connectors.create(ref, <Plugins.TextBox/>)} >
                    <ListItemIcon><Avatar>{Plugins.TextBox.craft.displayName.charAt(0)}</Avatar></ListItemIcon>
                    <ListItemText primary={Plugins.TextBox.craft.displayName} secondary={Plugins.TextBox.craft.description} />
                </ListItemButton>

                {/* TextArea */}
                <ListItemButton ref={(ref) => connectors.create(ref, <Plugins.TextArea/>)} >
                    <ListItemIcon><Avatar>{Plugins.TextArea.craft.displayName.charAt(0)}</Avatar></ListItemIcon>
                    <ListItemText primary={Plugins.TextArea.craft.displayName} secondary={Plugins.TextArea.craft.description} />
                </ListItemButton>

            </List>
        </Box>
    );

    return (
        <Box sx={{ p: 2, }} >
            <TextField variant="outlined" size="small" sx={{ width: '100%' }} 
                label="Drag to add or type here to search." 
                onChange={(event) => {sortPluginList(event.target.value)}}
            />
            <List component="nav" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {Object.entries(pluginsList).map((key, index) => 
                    !key[1].craft.hidden && <ListPluginItem key={index} plugin={key[1]}/>
                )}
            </List>
        </Box>
    );
};
