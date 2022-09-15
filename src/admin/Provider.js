// React-Admin data/auth provider for Django REST
// Extremely helpful: https://stackoverflow.com/questions/59267434/multi-part-form-data-in-react-admin

// React
import React from 'react';
import { fetchUtils } from 'react-admin';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';


// Constants
const API_URL = "/api";
const API_TOKEN = "/api/token/";

// Helper: Create httpClient request object 
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Authorization', `Bearer ${localStorage.getItem('access')}`);
    return fetchUtils.fetchJson(url, options);
};

// Auth Provider
const JWTauthProvider = jwtTokenAuthProvider({ obtainAuthTokenUrl: API_TOKEN });
const authProvider = {
    ...JWTauthProvider,

    // Override login: https://github.com/bmihelac/ra-data-django-rest-framework/blob/master/src/jwtTokenAuthProvider.ts#L13
    login: async ({ username, password }) => {
        const status = JWTauthProvider.login({ username, password });
        localStorage.setItem('username', username);
        return status;
    },

    // Override logout:
    logout: async () => {
        const status = JWTauthProvider.logout();
        localStorage.removeItem('username');
        return status;
    },

    // Override the get current user method
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: localStorage.getItem('username'),
            avatar: '/static/DefaultAvatar.png',
        }),
};
export { authProvider };


// Data Provider
const DRFProvider = drfProvider(API_URL, fetchJsonWithAuthJWTToken);
const dataProvider = {
    ...DRFProvider,

    // Override the create record method, to catch files. 
    create: (resource, params) => {

        // If "files" resource
        if (resource === "files" && params.data.file) {

            // Create FormData
            let formData = new FormData();
            formData.append('id', params.data.id);
            formData.append('name', params.data.name);
            formData.append('description', params.data.description);
            formData.append('file', params.data.file.rawFile);

            // Push response
            return httpClient(`${API_URL}/${resource}/`, {
                method: 'POST',
                body: formData,
            }).then(({ json }) => ({ data: { ...params.data, id: json.id } }));
        }

        // Otherwise use DRF implementation
        return DRFProvider.create(resource, params);
    },

    // Override the update record method, to catch files.
    update: (resource, params) => {

        // If "files" resource
        if (resource === "files" && params.data.file) {

            // Create FormData
            let formData = new FormData();
            formData.append('id', params.data.id);
            formData.append('name', params.data.name);
            formData.append('description', params.data.description);
            formData.append('file', params.data.file.rawFile);

            // Push response
            return httpClient(`${API_URL}/${resource}/${params.id}/`, {
                method: 'PATCH',
                body: formData,
            }).then(({ json }) => ({ data: { ...params.data, id: json.id } }));
        }

        // Otherwise use DRF implementation
        return DRFProvider.update(resource, params);
    },
};
export { dataProvider };
