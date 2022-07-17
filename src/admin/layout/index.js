
// React
import React from "react";
import { Editor, Frame, Element } from '@craftjs/core';
import { SnackbarProvider } from 'notistack';
import { Helmet } from 'react-helmet'
// import "@fontsource/fira-sans"
import { defaultTheme } from 'react-admin';

// Treasury
import { Root } from "@mui-treasury/layout";
import { Header } from "@mui-treasury/layout";
import { TopHeader } from "@mui-treasury/layout";
import { Subheader } from "@mui-treasury/layout";
import { EdgeSidebar } from "@mui-treasury/layout";
import { SidebarContent } from "@mui-treasury/layout";
import { EdgeTrigger } from "@mui-treasury/layout";
import { Content } from "@mui-treasury/layout";
import { InsetContainer } from "@mui-treasury/layout";
import { InsetSidebar } from "@mui-treasury/layout";

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from '@mui/material/Paper';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grow from '@mui/material/Grow';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Close from "@mui/icons-material/Close";

// Local
import Appbar from './appbar';
import Sidebar from './sidebar';
import RightSideToolbar from './toolbar';
import RenderNode from '../../plugins/PluginNode';

// Plugins
import Plugins from '../../plugins';
// import { Button } from '../../plugins/Button';
// import { Card, CardBottom, CardTop } from '../../plugins/Card';
// import { Container } from '../../plugins/Container';
// import { Text } from '../../plugins/Text';
// import { Page } from '../../plugins/Layouts/Page';

// Theme
const theme = createTheme({
    typography: {
        // "fontFamily": `"Fira Sans", "Roboto", "Helvetica", sans-serif, "Arial"`,
        // "fontSize": 14,
    }
});


// Main Layout
export default function Layout({ title="[Title Not Set]", editor=false, children }) {

    // MUI Treasury Scheme for the Page Layout
    const scheme = {
        header: {
            config: {
                xs: {
                    position: "fixed",
                    height: 56,
                    clipped: true,
                },
                md: {
                    position: "fixed",
                    height: 64,
                    clipped: true,
                },
            },
        },
        leftEdgeSidebar: {
            config: {
                md: {
                    variant: "permanent",
                    width: 250,
                    collapsible: true,
                    collapsedWidth: 60,
                    uncollapsedOnHover: true,
                    // headerMagnetEnabled: true,
                },
            },
        },
    };

    return (
        <Root scheme={scheme}>
            <Helmet><title>{title}</title></Helmet>
            <SnackbarProvider maxSnack={10} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }} TransitionComponent={Grow}>
                <Editor
                    // resolver={{ Card, Button, Text, Container, CardTop, CardBottom, Page }}
                    resolver={Plugins}
                    // onRender={RenderNode}
                >
        
                    <Header>
                        <Appbar title={title} editor={editor} />
                    </Header>

                    <EdgeSidebar anchor="left">
                        <Sidebar editor={editor} />
                    </EdgeSidebar>

                    <Content sx={{ 
                        p: 3, 
                        bgcolor: '#f1f3f4', 
                        minHeight: '93vh', 

                        pt: editor ? 9 : 4, 
                        mt: editor ? -2 : 0,
                    }}>
                        {children}
                    </Content>

                    {editor && RightSideToolbar(scheme)}

                </Editor>
            </SnackbarProvider>
        </Root>
    );
};
