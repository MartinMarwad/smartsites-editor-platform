
// React
import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { makeStyles } from '@material-ui/core';

// Layout
import { SettingsPanel } from './SettingsPanel';
import { Toolbox } from './Toolbox';
import { Topbar } from './Header';
import Header from './Header';

// Plugins
import { Button } from '../plugins/Button';
import { Card, CardBottom, CardTop } from '../plugins/Card';
import { Container } from '../plugins/Container';
import { Text } from '../plugins/Text';

const useStyles = makeStyles(() => ({
    root: {
        padding: 0,
        background: 'rgb(252, 253, 253)',
    },
}));

export default function App() {
    const classes = useStyles();
    return (
        <Box>
            <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom, }}> 
            <Header />
            <Typography style={{ margin: '20px 0' }} variant="h5" align="center">
                Basic Page Editor
            </Typography>
                <Topbar />
                <Grid container spacing={5} style={{ paddingTop: '10px' }}>
                    <Grid item xs>
                        <Frame>
                            <Element
                                canvas
                                is={Container}
                                padding={5}
                                background="#eeeeee"
                                data-cy="root-container"
                            >
                                <Card data-cy="frame-card" />
                                <Button text="Click me" size="small" data-cy="frame-button" />
                                <Text fontSize={20} text="Hi world!" data-cy="frame-text" />
                                <Element
                                    canvas
                                    is={Container}
                                    padding={6}
                                    background="#999999"
                                    data-cy="frame-container"
                                >
                                    <Text
                                        size="small"
                                        text="It's me again!"
                                        data-cy="frame-container-text"
                                    />
                                </Element>
                            </Element>
                        </Frame>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.root}>
                            <Toolbox />
                            <SettingsPanel />
                        </Paper>
                    </Grid>
                </Grid>
            </Editor>
        </Box>
    );
}
