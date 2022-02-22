// Custom toolbar for React-Page


import { Typography } from '@material-ui/core';
import { BottomToolbar, usePluginOfCell } from '@react-page/editor';
import React from 'react';

import { Tooltip } from '@material-ui/core';
import IconCollapse from '@material-ui/icons/KeyboardArrowDown';
import IconRestore from '@material-ui/icons/KeyboardArrowUp';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import MaximizeIcon from '@mui/icons-material/Maximize';


// interface CollapseButtonProps {
//     collapsed: boolean;
//     setCollapsed: (c: boolean) => void;
// }

const CollapseButton = ({collapsed, setCollapsed,}) => {
    const toggleCollapsed = React.useCallback(() => { setCollapsed(!collapsed); }, [collapsed, setCollapsed]);
    return (
        <Tooltip title={collapsed ? 'Restore Panel' : 'Collapse Panel'}>
            <IconButton onClick={toggleCollapsed} aria-label="delete" color="default" fontSize="small" >
                {collapsed ? <IconRestore /> : <IconCollapse />}
            </IconButton>
        </Tooltip>
    );
};


/**
 * This is an example on how you could customize the Bottom Toolbar.
 * We provide most of the default components as exports, so you can also create a custom one
 * and use the existing pieces that you need. Check the source code for BottomToolbar
 */
const ExampleCustomBottomToolbar = React.memo(({ pluginControls, ...props }) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const plugin = usePluginOfCell(props.nodeId);

    return (
        <BottomToolbar
            {...props}
            style={{
                borderRadius: 10,
                display: 'flow-root',
            }}
            pluginControls={collapsed ? null : pluginControls}
            // open={true}
            // actionsLeft={[
            //     <CollapseButton key="collapse button" collapsed={collapsed} setCollapsed={setCollapsed} />,
            // ]}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                // bgcolor: 'background.paper',
                borderRadius: 1,
            }} >
                <Typography>Edit: {plugin?.title}</Typography>
                <CollapseButton key="collapse button" collapsed={collapsed} setCollapsed={setCollapsed} />
            </Box>
        </BottomToolbar>
    );
});

export default ExampleCustomBottomToolbar;