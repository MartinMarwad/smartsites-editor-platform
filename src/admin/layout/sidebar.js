
// React
import React, { useState } from "react";
// import { ReactTreeList } from '@bartaxyz/react-tree-list';
import { Link } from 'react-router-dom';

// Treasury
import { SidebarContent } from "@mui-treasury/layout";

// MUI
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Snackbar from '@mui/material/Snackbar';

// MUI Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import CloudIcon from '@mui/icons-material/Cloud';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';


// A Treeview for Pages. It could be built in to the sidebar.
// const PageTreeview = () => {
//     const blockIcon = (
//         <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M7.23442 17.8482L7.61748 16.9245C7.734 16.9728 7.86257 17 8 17H9V18H8C7.72882 18 7.47024 17.946 7.23442 17.8482ZM15 18V17H16C16.1374 17 16.266 16.9728 16.3825 16.9245L16.7656 17.8482C16.5298 17.946 16.2712 18 16 18H15ZM18 9H17V8C17 7.86257 16.9728 7.734 16.9245 7.61748L17.8482 7.23442C17.946 7.47024 18 7.72882 18 8V9ZM9 6H8C7.72882 6 7.47024 6.05397 7.23442 6.15176L7.61748 7.07549C7.734 7.02717 7.86257 7 8 7H9V6ZM6 15H7V16C7 16.1374 7.02717 16.266 7.07549 16.3825L6.15176 16.7656C6.05397 16.5298 6 16.2712 6 16V15ZM6 13H7V11H6V13ZM6 9H7V8C7 7.86257 7.02717 7.734 7.07549 7.61748L6.15176 7.23442C6.05397 7.47024 6 7.72882 6 8V9ZM11 6V7H13V6H11ZM15 6V7H16C16.1374 7 16.266 7.02717 16.3825 7.07549L16.7656 6.15176C16.5298 6.05397 16.2712 6 16 6H15ZM18 11H17V13H18V11ZM18 15H17V16C17 16.1374 16.9728 16.266 16.9245 16.3825L17.8482 16.7656C17.946 16.5298 18 16.2712 18 16V15ZM13 18V17H11V18H13Z"
//                 fill="black"
//                 fillOpacity="0.5"
//             />
//         </svg>
//     );

//     const textIcon = (
//         <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <path
//                 d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8Z"
//                 fill="black"
//                 fillOpacity="0.1"
//             />
//             <path
//                 d="M10.184 9.896H12.052V15H12.796V9.896H14.56V9.216H10.184V9.896Z"
//                 fill="black"
//             />
//         </svg>
//     );

//     const divLabel = (
//         <span style={{ fontFamily: "Arial", fontSize: 12 }}>Div</span>
//     );
//     const spanLabel = (
//         <span style={{ fontFamily: "Arial", fontSize: 12 }}>Span</span>
//     );

//     const [data, setData] = useState([
//         {
//             label: divLabel,
//             open: true,
//             children: [
//                 {
//                     label: divLabel,
//                     open: true,
//                     children: [
//                         {
//                             label: divLabel,
//                             children: [{ label: spanLabel, icon: textIcon }],
//                         },
//                     ],
//                 },
//                 { label: spanLabel, icon: textIcon },
//                 {
//                     label: divLabel,
//                     children: [
//                         {
//                             label: divLabel,
//                             children: [{ label: divLabel }],
//                         },
//                     ],
//                 },
//                 {
//                     label: divLabel,
//                     open: true,
//                 },
//                 { label: divLabel },
//                 { label: divLabel },
//             ],
//         },
//     ]);

//     const onChange = (data) => {
//         setData(data);
//         console.log(data);
//     };

//     return (
//         <Box sx={{ ml: 4 }}>
//             <ReactTreeList
//                 data={data}
//                 onChange={onChange}
//                 itemDefaults={{
//                     open: false,
//                     arrow: (
//                         <svg
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M9 18L15 12L9 6"
//                                 stroke="black"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             />
//                         </svg>
//                     ),
//                     // icon: blockIcon,
//                 }}
//             />
//         </Box>
//     );
// }

export default function Sidebar() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <SidebarContent sx={{ }}>

            <List component="nav" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {/* Dashboard/Home Link */}
                <ListItemButton component={Link} to={{ pathname: '/' }}>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>

                {/* Pages Link */}
                <ListItemButton component={Link} to={{ pathname: '/pages' }}>
                    <ListItemIcon><ArticleIcon /></ListItemIcon>
                    <ListItemText primary="Pages" />
                </ListItemButton>
                {/* <ListItemButton onClick={handleClick}>
                    <ListItemIcon><ArticleIcon /></ListItemIcon>
                    <ListItemText primary="Inbox" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <PageTreeview />
                    </List>
                </Collapse> */}

                {/* Files Link */}
                <ListItemButton component={Link} to={{ pathname: '/files' }}>
                    <ListItemIcon><CloudIcon /></ListItemIcon>
                    <ListItemText primary="Files" />
                </ListItemButton>

                {/* Users Link */}
                <ListItemButton component={Link} to={{ pathname: '/users' }}>
                    <ListItemIcon><GroupAddIcon /></ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItemButton>

                {/* Notifications */}
                <ListItemButton component={Link} to={{ pathname: '/notifications' }}>
                    <ListItemIcon><NotificationsIcon /></ListItemIcon>
                    <ListItemText primary="Notifications" />
                </ListItemButton>

                {/* Settings */}
                <ListItemButton>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>
                
            </List>
        </SidebarContent>
    );
}