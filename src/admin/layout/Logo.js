
// React
import * as React from 'react';
import { Link } from 'react-router-dom';

// MUI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Logo = (props) => {
    const theme = useTheme();
    return (
        <Button color="inherit" component={Link} to='/admin/'>
            <Typography variant="h6" sx={{}}>
                SmartSites Editor Platform
            </Typography>
        </Button>
    );
};
export default Logo;
