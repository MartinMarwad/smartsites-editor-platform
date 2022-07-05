
// React
import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { ROOT_NODE } from '@craftjs/utils';
import { useNode, useEditor } from '@craftjs/core';
import { getRandomId } from "@craftjs/utils";

// MUI
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Popover from "@material-ui/core/Popover";
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';

// MUI Icons
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Local
import PluginModal from './PluginModal';


const RenderNode = ({ render }) => {
    const { id } = useNode();
    const currentRef = useRef();

    // Note to self: Use this approach over the one below.
    const { actions, query, plugin, isActive, isEnabled } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();
        let plugin;

        if (currentNodeId) {
            plugin = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                displayName: state.nodes[currentNodeId].data.displayName,
                selected: state.nodes[currentNodeId].events.selected,
                hovered: state.nodes[currentNodeId].events.hovered,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.sidebar,
                modal: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.modal,
                deletable: query.node(currentNodeId).isDeletable(),
                moveable: query.node(currentNodeId).isDraggable(),
            };
        }

        return {
            plugin,
            isActive: query.getEvent('selected').contains(id),
            isEnabled: state.options.enabled,
        };
    });

    // Note to self: Move away from this approach and use one above.
    const { connectors: { connect, drag }, selected, hovered, dom, name, moveable, deletable, parent, props, data } = useNode((node) => ({
        selected: node.events.selected,
        data: node.data.custom,
        hovered: node.events.hovered,
        dom: node.dom,
        name: node.data.custom.displayName || node.data.displayName,
        moveable: query.node(node.id).isDraggable(),
        deletable: query.node(node.id).isDeletable(),
        parent: node.data.parent,
        props: node.data.props,
    }));

    // This function controls the selected outline on hover/active for all other components:
    useEffect(() => {
        if (dom) {
            if ( isActive ) {
                dom.style.borderStyle = 'solid';
                dom.style.borderColor = '#4285f4';
                dom.style.borderWidth = "2px";
                dom.style.cursor = "move";
                // dom.style.filter = 'drop-shadow(8px 8px 10px gray)';
                dom.style.boxShadow = '0px 0px 10px 5px #BFBFBF';
            } else if ( hovered ) {
                dom.style.borderStyle = 'dashed';
                dom.style.borderColor = '#4285f4';
                dom.style.borderWidth = "1px";
                dom.style.cursor = "move";
                // dom.style.filter = 'drop-shadow(8px 8px 10px gray)';
                dom.style.boxShadow = '0px 0px 5px 5px #BFBFBF';
            } else {
                dom.style.borderStyle = 'unset';
                dom.style.cursor = "auto";
                // dom.style.borderWidth = "0px";
                // dom.style.filter = 'unset';
                dom.style.boxShadow = 'unset';
            }
        }
    }, [dom, isActive, hovered]);

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        if (!selected) {
            setOpen(false);
        }
    };

    const handleMouseUp = (event) => {

        setOpen(true);
        setAnchorEl(event.currentTarget);
                
    };

    // demonstrate modal
    const [openModal, setOpenModal] = React.useState(false);
    const modalHandleOpen = () => setOpenModal(true);
    const modalHandleClose = () => setOpenModal(false);

    // demonstrate tabs in modal
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // Function to clone a component's node tree: https://github.com/prevwong/craft.js/issues/209#issuecomment-795221484
    const getCloneTree = useCallback((idToClone) => {
        const tree = query.node(idToClone).toNodeTree();
        const newNodes = {};

        const changeNodeId = (node, newParentId) => {
            const newNodeId = getRandomId();
            const childNodes = node.data.nodes.map((childId) => changeNodeId(tree.nodes[childId], newNodeId));
            const linkedNodes = Object.keys(node.data.linkedNodes).reduce((accum, id) => {
                const _newNodeId = changeNodeId(tree.nodes[node.data.linkedNodes[id]], newNodeId,);
                return { ...accum, [id]: _newNodeId, };
            }, {});

            let tmpNode = {
                ...node,
                id: newNodeId,
                data: {
                    ...node.data,
                    parent: newParentId || node.data.parent,
                    nodes: childNodes,
                    linkedNodes,
                },
            };
            let freshnode = query.parseFreshNode(tmpNode).toNode();
            newNodes[newNodeId] = freshnode;
            return newNodeId;
        };

        const rootNodeId = changeNodeId(tree.nodes[tree.rootNodeId]);
        return { rootNodeId, nodes: newNodes, };
    }, []);


    return (
        <Box ref={(ref) => connect(drag(ref))} onClick={handleMouseUp} onBlur={handleClose} sx={{ }}>

            {render}
            
            {selected &&
                <Popper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    transition
                    placement="top-start"
                    modifiers={[
                        {
                            name: 'flip',
                            enabled: true,
                            options: {
                                altBoundary: true,
                                rootBoundary: 'viewport',
                                padding: 8,
                            },
                        },
                        {
                            name: 'preventOverflow',
                            enabled: true,
                            options: {
                                altAxis: true,
                                altBoundary: true,
                                tether: true,
                                rootBoundary: 'viewport',
                                padding: 8,
                            },
                        },
                    ]}

                >
                    {({ TransitionProps }) => (
                        <Zoom {...TransitionProps} timeout={200}>
                            <Card sx={{ boxShadow: 5, mb: 1, borderRadius: 2,}}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: 'fit-content',
                                    border: (theme) => `1px solid ${theme.palette.divider}`,
                                    bgcolor: 'background.paper',
                                    color: 'text.secondary',
                                    '& svg': {
                                        m: 1,
                                    },
                                    '& hr': {
                                        mx: 0.5,
                                    },
                                }}>
                                    {/* <Tooltip title="Drag Component"> */}
                                        <ListItemButton ref={drag} sx={{ cursor: 'move'}}>
                                            <ListItemText primary={
                                                <Typography variant="h6" component="div">
                                                    {name}
                                                </Typography>
                                            }/>
                                        </ListItemButton>
                                    {/* </Tooltip> */}

                                    { (plugin.modal || plugin.deletable || (plugin.id!==ROOT_NODE) ) && 
                                    <Divider orientation="vertical" flexItem />}

                                    {/* {moveable &&
                                        <Tooltip title="Move Up">
                                            <IconButton size="small">
                                                <KeyboardArrowUpOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    }

                                    {moveable &&
                                        <Tooltip title="Move Down">
                                            <IconButton size="small">
                                                <KeyboardArrowDownOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    }

                                    {moveable &&
                                        <Tooltip title="Duplicate">
                                            <IconButton size="small">
                                                <ContentCopyOutlinedIcon />
                                            </IconButton>
                                        </Tooltip> ContentCopyIcon
                                    } */}

                                    {/* Select Parent */}
                                    { (plugin.id !== ROOT_NODE) && 
                                    <Tooltip title="Select Parent">
                                        <IconButton onClick={() => { actions.selectNode(parent); }} size="small" aria-label="delete">
                                            <ArrowUpwardOutlinedIcon />
                                        </IconButton>
                                    </Tooltip>}

                                    {/* Duplicate */}
                                    { plugin.deletable &&
                                    <Tooltip title="Duplicate">
                                        <IconButton size="small" aria-label="delete" onClick={() => { 
                                            actions.history.throttle().addNodeTree(getCloneTree(id), query.node(id).get().data.parent);
                                        }}>
                                            <ContentCopyOutlinedIcon />
                                        </IconButton>
                                    </Tooltip>}

                                    {/* Edit/Settings */}
                                    {/* { plugin.modal && 
                                    <Tooltip title="Edit Component">
                                        <IconButton onClick={modalHandleOpen} size="small">
                                            <SettingsIcon />
                                        </IconButton>
                                    </Tooltip>} */}

                                    {/* { (plugin.modal || plugin.deletable || (plugin.id!==ROOT_NODE) ) && 
                                    <Divider orientation="vertical" flexItem />} */}

                                    {/* Delete */}
                                    { plugin.deletable && 
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() => { actions.delete(id); }} size="small" aria-label="delete">
                                            <DeleteOutlineOutlinedIcon />
                                        </IconButton>
                                    </Tooltip>}
                                    
                                </Box>

                            </Card>
                        </Zoom>
                    )}
                </Popper>
            }
            
            {(selected) && plugin.modal &&
            <PluginModal title={`${plugin.displayName}: Edit Plugin Settings`} open={openModal} onClose={modalHandleClose}>
                {React.createElement(plugin.modal)}
            </PluginModal>}
            

        </Box>        
    );

};

export default RenderNode;