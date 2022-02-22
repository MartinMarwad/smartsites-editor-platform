import { Layout } from 'react-admin';
import AppBar from './appbar';
// import MySidebar from './MySidebar';
// import MyMenu from './MyMenu';
// import MyNotification from './MyNotification';

const MyLayout = props => 
    <Layout {...props}
        appBar={AppBar}
        // sidebar={MySidebar}
        // menu={MyMenu}
        // notification={MyNotification}
    />;

export default MyLayout;
