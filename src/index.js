
// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom-v6";
import { Helmet } from 'react-helmet'

// React Material 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Project
import reportWebVitals from './reportWebVitals';
// import './index.css'
import Admin from './admin';
// import App from './editor';

// Django-CRA-Helper: Inject Properties
window.component = window.component || 'App';
window.props = window.props || { env: 'Create-React-App' };
window.reactRoot = window.reactRoot || document.getElementById('root');


// Page
function Page(props) {
    return (
        <div>
            <Helmet><title>{props.title}</title></Helmet>
            <div>{props.content}</div>
        </div>
    );
}

// Router
function Router(props) {

    // For api pages = /api/pages/?format=json
    const TempPage = <Page title="Blank title" content="Blank content" />

    return (
        <BrowserRouter>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<div>Hello from a new blank page!</div>} />
                <Route path="admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}


// React the component as usual
ReactDOM.render(React.createElement(Admin, window.props), window.reactRoot, );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
