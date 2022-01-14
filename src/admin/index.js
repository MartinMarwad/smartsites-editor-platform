
// React
import React from 'react';
import { Admin, Resource} from 'react-admin';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';
import { Helmet } from 'react-helmet'

// Local
import pages from './pages';
import images from './images';

// React Admin Component
export default function ReactAdmin() {

    const authProvider = jwtTokenAuthProvider({obtainAuthTokenUrl: "/api/token/"});
    const dataProvider = drfProvider("/api", fetchJsonWithAuthJWTToken);
    
    return(
        <Admin authProvider={authProvider} dataProvider={dataProvider} title="Admin">
            <Helmet><title>React Admin</title></Helmet>
            <Resource name="pages" {...pages} />
            <Resource name="images" {...images} />
        </Admin>
    );
}
