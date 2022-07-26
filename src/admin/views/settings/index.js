
// React
import * as React from 'react';
import { useTranslate, useLocaleState, useTheme, Title } from 'react-admin';

// MUI
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

// Local
import { darkTheme, lightTheme } from '../../layout/themes';


// Settings
export default function SettingsConfiguration(props) {
    const [locale, setLocale] = useLocaleState();
    const [theme, setTheme] = useTheme();

    return (
        <Card sx={{mt: 5}}>
            <Title title="Settings" />
            <CardContent>
                <Box sx={{ width: '10em', display: 'inline-block' }}>
                    Change Color Theme:
                </Box>
                <Button variant="contained" sx={{ margin: '1em' }} color={theme?.palette?.mode === 'light'
                    ? 'primary'
                    : 'secondary'} onClick={() => setTheme(lightTheme)}>
                    Light Theme
                </Button>
                <Button variant="contained" sx={{ margin: '1em' }} color={theme?.palette?.mode === 'dark'
                    ? 'primary'
                    : 'secondary'} onClick={() => setTheme(darkTheme)}>
                    Dark Theme
                </Button>
            </CardContent>
        </Card>
    );
};
