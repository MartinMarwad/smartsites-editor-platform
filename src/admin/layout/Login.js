
// React
import * as React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, required, TextInput, useTranslate, useLogin, useNotify, } from 'react-admin';
import PropTypes from 'prop-types';

// MUI
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CircularProgress from '@mui/material/CircularProgress';
import LockIcon from '@mui/icons-material/Lock';


// Login Component
const Login = () => {
    const [loading, setLoading] = useState(false);
    const translate = useTranslate();
    const notify = useNotify();
    const login = useLogin();
    const location = useLocation();

    const handleSubmit = (auth) => {
        setLoading(true);
        login(auth, location.state ? location.state.nextPathname : '/admin/').catch((error) => {
            setLoading(false);
            notify(typeof error === 'string'
                ? error
                : typeof error === 'undefined' || !error.message
                    ? 'ra.auth.sign_in_error'
                    : error.message, {
                type: 'warning',
                messageArgs: {
                    _: typeof error === 'string'
                        ? error
                        : error && error.message
                            ? error.message
                            : undefined,
                },
            });
        });
    };

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'flex-start',
                background: 'url(https://images.unsplash.com/photo-1656231869720-da7f20280b5f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1ODk4Njg1Mw&ixlib=rb-1.2.1&q=80&w=1600)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <Card sx={{ minWidth: 300, marginTop: '6em' }}>
                    <Box sx={{
                        margin: '1em',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>
                            <LockIcon />
                        </Avatar>
                    </Box>
                    {/* <Box sx={{
                        marginTop: '1em',
                        display: 'flex',
                        justifyContent: 'center',
                        color: theme => theme.palette.grey[500],
                    }}>
                        Hint: demo / demo
                    </Box> */}
                    <Box sx={{ padding: '0 1em 1em 1em' }}>
                        <Box sx={{ marginTop: '1em' }}>
                            <TextInput autoFocus source="username" label={translate('ra.auth.username')} disabled={loading} validate={required()} fullWidth />
                        </Box>
                        <Box sx={{ marginTop: '1em' }}>
                            <TextInput source="password" label={translate('ra.auth.password')} type="password" disabled={loading} validate={required()} fullWidth />
                        </Box>
                    </Box>
                    <CardActions sx={{ padding: '0 1em 1em 1em' }}>
                        <Button variant="contained" type="submit" color="primary" disabled={loading} fullWidth>
                            {loading && (<CircularProgress size={25} thickness={2} />)}
                            {translate('ra.auth.sign_in')}
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Form>
    );
};

Login.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

export default Login;
