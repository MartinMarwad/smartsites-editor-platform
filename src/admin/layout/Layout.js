
// React
import * as React from 'react';
import { Layout } from 'react-admin';
import { Editor, Frame, Element } from '@craftjs/core';

// Local
import AppBar from './AppBar';
import Menu from './Menu';
import Plugins from '../../plugins';


// Export Layout
export default (props) => {

    return <Layout {...props} appBar={AppBar} menu={Menu}/>;

    return (
        <Editor resolver={Plugins}>
            <Layout {...props} appBar={AppBar} menu={Menu}/>
        </Editor>
    );
};
