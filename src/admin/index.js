
// React
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { Notification } from 'react-admin';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';
import { Helmet } from 'react-helmet'
import { Route } from 'react-router-dom';

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";

// Layout
// import Layout from './layout';
import Dashboard from './dashboard';

// Resource Data Views
import pages from './views/page';
import files from './views/file';
import users from './views/user';
import notifications from './views/notification';


// Theme
const baseTheme = createTheme();

// Create an empty shell page, so that individual pages can render their own custom layouts
const EmptyLayout = ({themeOld, title, children}) => {
    return (
        <ThemeProvider theme={baseTheme}>
            <CssBaseline />
                <main id="main-content">
                    {children}
                </main>
            <Notification />
        </ThemeProvider>
    );
};

// React Admin Component
export default function ReactAdmin() {
    const authProvider = jwtTokenAuthProvider({obtainAuthTokenUrl: "/api/token/"});
    const dataProvider = drfProvider("/api", fetchJsonWithAuthJWTToken);

    const dash = () => (
        <EmptyLayout>
            <Dashboard/>
        </EmptyLayout>
    )

    return(
        <Admin title="Admin" 
            // theme={defaultTheme}
            dashboard={Dashboard}
            layout={EmptyLayout}
            authProvider={authProvider} 
            dataProvider={dataProvider} 
            customRoutes={[
                <Route exact path="/" component={dash} />,
                <Route exact path="/bar" component={Dashboard} />,
            ]} 
            disableTelemetry
        >
            <Helmet><title>React Admin</title></Helmet>
            <Resource name="pages" {...pages} />
            <Resource name="files" {...files} />
            <Resource name="users" {...users} />
            <Resource name="notifications" {...notifications}/>
        </Admin>
    );
}
