
// React
import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom-v6";
import { Helmet } from 'react-helmet'
import { Editor, Frame, Element } from '@craftjs/core';

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'; 

// Plugins 
import Plugins from './plugins';

// Local
import reportWebVitals from './reportWebVitals';
import Admin from './admin';

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// Django-CRA-Helper: Inject Properties
window.component = window.component || 'App';
window.props = window.props || { env: 'Create-React-App' };
window.reactRoot = window.reactRoot || document.getElementById('root');


// Page
function Page({ title, content }) {
    const theme = createTheme({ });
    return (
        <ThemeProvider theme={theme}>
            <Helmet><title>{title}</title></Helmet>
            <CssBaseline />
            <Box container sx={{width: '100%'}}>
                <Editor resolver={Plugins} enabled={false}>
                    <Frame data={content}/>
                </Editor>
            </Box>
        </ThemeProvider>
    );
}

// Router
function Router(props) {
    const [pages, setPages] = useState([]);

    // Fetch Pages
    useEffect(() => {
        fetch('/api/pages/?format=json')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setPages(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    // For api pages = /api/pages/?format=json
    // const TempPage = <Page title={indexPage.title} content={indexPage.content} />

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Page />} /> */}
                {pages.map((page, index) => { 
                    if (page.id == 1) {
                        return <Route key={index.toString()} path="/" element={<Page title={page.title} content={page.content} />} />;
                    }
                    return <Route key={index.toString()} path={page.url} element={<Page title={page.title} content={page.content} />} />
                })}
                <Route path="admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}


// React the component as usual
ReactDOM.render(React.createElement(Router, window.props), window.reactRoot, );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
