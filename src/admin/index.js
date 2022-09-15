
// React
import * as React from 'react';
import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Route } from 'react-router';

// React Admin Configuration 
// import authProvider from './authProvider';
// import dataProviderFactory from './dataProvider';
import { dataProvider, authProvider } from './Provider';
import { Login, Layout } from './layout';
import { lightTheme } from './themes';

// Resource Views
import Dashboard from './views/dashboard';
import Settings from './views/settings';
import Pages from './views/pages';
import Files from './views/files';
import Users from './views/users';
import Notifications from './views/notifications';

// import { Dashboard } from './views/dashboard';
// import visitors from './views/OLD/visitors';
// import orders from './views/OLD/orders';
// import products from './views/products';
// import invoices from './views/invoices';
// import categories from './views/OLD/categories';
// import reviews from './views/OLD/reviews';
// import Configuration from './views/OLD/configuration/Configuration';
// import Segments from './views/OLD/segments/Segments';


// Main React Admin Application
export default function App(props) {
    return (
        <Admin 
            basename="/admin" 
            title="" 
            dataProvider={dataProvider} 
            authProvider={authProvider} 
            dashboard={Dashboard} 
            loginPage={Login} 
            layout={Layout} 
            theme={lightTheme}
            requireAuth
            disableTelemetry
        >
            <CustomRoutes>
                <Route path="settings" element={<Settings />}/>
            </CustomRoutes>

            <Resource name="pages" {...Pages}/>
            <Resource name="files" {...Files}/>
            <Resource name="users" {...Users}/>
            <Resource name="notifications" {...Notifications}/>

            {/* <Resource name="customers" {...visitors}/>
            <Resource name="commands" {...orders} options={{ label: 'Orders' }}/>
            <Resource name="invoices" {...invoices}/>
            <Resource name="products" {...products}/>
            <Resource name="categories" {...categories}/>
            <Resource name="reviews" {...reviews}/> */}
        </Admin>);
};
