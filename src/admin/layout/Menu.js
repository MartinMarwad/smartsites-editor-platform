
// React
import * as React from 'react';
import { useState } from 'react';
import { useTranslate, DashboardMenuItem, MenuItemLink, useSidebarState, } from 'react-admin';

// MUI
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';
import SettingsIcon from '@mui/icons-material/Settings';

// Local: Components
import SubMenu from './SubMenu';

// Local: Resource views
import PageViews from '../views/pages';
import FileViews from '../views/files';
import UserViews from '../views/users';
import NotificationViews from '../views/notifications';

// import visitors from '../views/OLD/visitors';
// import orders from '../views/OLD/orders';
// import invoices from '../views/invoices';
// import products from '../views/products';
// import categories from '../views/OLD/categories';
// import reviews from '../views/OLD/reviews';

const Menu = ({ dense = false }) => {
    const [open] = useSidebarState();

    const menuStyles = {
        py: 2,
    };

    return (
        <Box sx={{
            width: open ? 200 : 50,
            marginTop: 1,
            marginBottom: 1,
            transition: theme => theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        }}>

            {/* Dashboard */}
            <DashboardMenuItem sx={menuStyles}/>

            {/* Page */}
            <MenuItemLink 
                to="pages" 
                state={{ _scrollToTop: true }} 
                primaryText={"Pages"} 
                leftIcon={<PageViews.icon/>} 
                dense={dense} 
                sx={menuStyles}
            />

            {/* Files */}
            <MenuItemLink
                to="files"
                state={{ _scrollToTop: true }}
                primaryText={"Files"}
                leftIcon={<FileViews.icon/>}
                dense={dense}
                sx={menuStyles}
            />

            {/* Users */}
            <MenuItemLink
                to="users"
                state={{ _scrollToTop: true }}
                primaryText={"Users"}
                leftIcon={<UserViews.icon/>}
                dense={dense}
                sx={menuStyles}
            />

            {/* Notifications */}
            <MenuItemLink
                to="notifications"
                state={{ _scrollToTop: true }}
                primaryText={"Notifications"}
                leftIcon={<NotificationViews.icon/>}
                dense={dense}
                sx={menuStyles}
            />

            {/* Settings */}
            <MenuItemLink
                to="settings"
                state={{ _scrollToTop: true }}
                primaryText={"Settings"}
                leftIcon={<SettingsIcon/>}
                dense={dense}
                sx={menuStyles}
            />


            {/* <SubMenu handleToggle={() => handleToggle('menuSales')} isOpen={state.menuSales} name="pos.menu.sales" icon={<orders.icon />} dense={dense}>
                <MenuItemLink to="/commands" state={{ _scrollToTop: true }} primaryText={translate(`resources.commands.name`, {
                    smart_count: 2,
                })} leftIcon={<orders.icon />} dense={dense} />
                <MenuItemLink to="/invoices" state={{ _scrollToTop: true }} primaryText={translate(`resources.invoices.name`, {
                    smart_count: 2,
                })} leftIcon={<invoices.icon />} dense={dense} />
            </SubMenu>
            <SubMenu handleToggle={() => handleToggle('menuCatalog')} isOpen={state.menuCatalog} name="pos.menu.catalog" icon={<products.icon />} dense={dense}>
                <MenuItemLink to="/products" state={{ _scrollToTop: true }} primaryText={translate(`resources.products.name`, {
                    smart_count: 2,
                })} leftIcon={<products.icon />} dense={dense} />
                <MenuItemLink to="/categories" state={{ _scrollToTop: true }} primaryText={translate(`resources.categories.name`, {
                    smart_count: 2,
                })} leftIcon={<categories.icon />} dense={dense} />
            </SubMenu>
            <SubMenu handleToggle={() => handleToggle('menuCustomers')} isOpen={state.menuCustomers} name="pos.menu.customers" icon={<visitors.icon />} dense={dense}>
                <MenuItemLink to="/customers" state={{ _scrollToTop: true }} primaryText={translate(`resources.customers.name`, {
                    smart_count: 2,
                })} leftIcon={<visitors.icon />} dense={dense} />
                <MenuItemLink to="/segments" state={{ _scrollToTop: true }} primaryText={translate(`resources.segments.name`, {
                    smart_count: 2,
                })} leftIcon={<LabelIcon />} dense={dense} />
            </SubMenu>
            <MenuItemLink to="/reviews" state={{ _scrollToTop: true }} primaryText={translate(`resources.reviews.name`, {
                smart_count: 2,
            })} leftIcon={<reviews.icon />} dense={dense} /> */}
        </Box>
    );
};
export default Menu;
