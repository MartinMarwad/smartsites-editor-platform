
// React
import * as React from 'react';
import { Layout } from 'react-admin';

// Local
import AppBar from './AppBar';
import Menu from './Menu';


// Export Layout
export default (props) => {
    return <Layout {...props} appBar={AppBar} menu={Menu}/>;
};
