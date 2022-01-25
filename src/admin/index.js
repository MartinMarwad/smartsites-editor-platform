
// React
import React from 'react';
import { Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';
import { Helmet } from 'react-helmet'

// Local
import pages from './pages';
import images from './images';
import files from './files';
import users from './users';

// React Admin Component
export default function ReactAdmin() {

    const authProvider = jwtTokenAuthProvider({obtainAuthTokenUrl: "/api/token/"});
    const dataProvider = drfProvider("/api", fetchJsonWithAuthJWTToken);
    // const dataProvider = simpleRestProvider('/api');

    // authProvider={authProvider}
    
    return(
        <Admin authProvider={authProvider} dataProvider={dataProvider} title="Admin">
            <Helmet><title>React Admin</title></Helmet>
            <Resource name="pages" {...pages} />
            <Resource name="images" {...images} />
            <Resource name="files" {...files} />
            <Resource name="users" {...users} />
        </Admin>
    );
}
