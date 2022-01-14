
// React
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// React Extensions
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom-latest";
import { Helmet } from 'react-helmet'
import Editor from '@react-page/editor';

// React Material 
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// Project
import Plugins from './plugins';
import Toolbar from './plugins/toolbar';
import Admin from './admin';
import reportWebVitals from './reportWebVitals';

// Stylesheets
import '@react-page/editor/lib/index.css';
import '@react-page/plugins-background/lib/index.css';
import '@react-page/plugins-html5-video/lib/index.css';
import '@react-page/plugins-spacer/lib/index.css';
import '@react-page/plugins-video/lib/index.css';
import '@react-page/plugins-image/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import 'katex/dist/katex.min.css';
import './styles/styles.css';
import './styles/index.css';


/**
 * If Django hasn't injected these properties into the HTML, then we're viewing it via the create-react-app liveserver
 */
window.component = window.component || 'App';
window.props = window.props || { env: 'Create-React-App' };
window.reactRoot = window.reactRoot || document.getElementById('root');

/**
 * Maintain a simple map of React components to make it easier for Django to reference individual components.
 * - We're not using this at the moment, but we could possibly make an ecosystem of extendible components... 
 */
 const pages = {
    Admin,
}
// const Page = pages[window.component];


// General Page Renderer
function Page(props) {
    const [value, setValue] = useState(true);
    const components = ({ BottomToolbar: Toolbar }); // ({ BottomToolbar: Toolbar }; components={components}
    return (
        <>
            <Helmet><title>{props.title}</title></Helmet>
            <Editor cellPlugins={Plugins} value={props.content} readOnly={false}/>
        </>
    );
}

// Error page (this may soon be a )
function ErrorPage(props) {
    return (
        <>
            <Helmet><title>Error 404</title></Helmet>
            Error 404. We're sorry, but we can't find this page. ¯\_(ツ)_/¯
        </>
    );
}

// Master Client Side Router
function Router(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pages, setPages] = useState([]);
  
    // Fetch the latest pages from the public API
    useEffect(() => {
        fetch("/api/pages/?format=json").then(res => res.json()).then( 
            (response) => {
                setIsLoaded(true);
                setPages(response.results);
            }, 
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    // If API Request failed
    if (error) {
        console.log("Fatal error, could not load pages via API request.", error.message);
        return <div>Error: {error.message}</div>;
    } 

    // If still loading
    else if (!isLoaded) {
        return <div>React Loading...</div>;
    } 

    // Finally if API request succeeded 
    else {

        // Using embedded data
        const routeComponents = pages.map((page, key) =>
            <Route path={page.url} element={<Page title={page.title} content={page.content}/>} key={key} />
        );

        return (
            <BrowserRouter>
                <CssBaseline />
                <Routes>
                    {routeComponents}
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<ErrorPage/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

/**
 * React the component as usual
 */
ReactDOM.render(React.createElement(Router, window.props), window.reactRoot, );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
