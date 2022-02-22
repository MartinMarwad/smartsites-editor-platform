
// React
import React from 'react';
import { Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';
import { Helmet } from 'react-helmet'
import { Route } from 'react-router-dom';

// Layout
import Editor from '../editor';
import Layout from './layout';

// Data views
import pages from './views/pages';
import images from './views/images';
import files from './views/files';
import users from './views/users';

import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});



// React Admin Component
export default function ReactAdmin() {
    const authProvider = jwtTokenAuthProvider({obtainAuthTokenUrl: "/api/token/"});
    const dataProvider = drfProvider("/api", fetchJsonWithAuthJWTToken);

    // authProvider={authProvider}
    // layout={Layout} 
    return(
        <Admin layout={Layout}  authProvider={authProvider} dataProvider={dataProvider} title="AdminX" disableTelemetry>
            <Helmet><title>React Admin</title></Helmet>
            <Resource name="pages" {...pages} />
            <Resource name="images" {...images} />
            <Resource name="files" {...files} />
            <Resource name="users" {...users} />
        </Admin>
    );
}
