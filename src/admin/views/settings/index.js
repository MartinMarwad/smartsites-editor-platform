
// React
import * as React from 'react';
import { useTranslate, useLocaleState, useTheme, Title } from 'react-admin';

// MUI
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Local
import { darkTheme, lightTheme } from '../../themes';


// Settings Component
export default function SettingsConfiguration(props) {
    const [locale, setLocale] = useLocaleState();
    const [theme, setTheme] = useTheme();
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const AccordionStyles = {
        boxShadow: 2,
    };

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
            <Grid item xs={10}>
                <Title title="Settings" />

                {/* General Settings */}
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={AccordionStyles}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            General settings
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Global Application Settings</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>


                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={AccordionStyles}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            You are currently not an owner
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                            laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={AccordionStyles}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Advanced settings
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Filtering has been entirely disabled for whole web server
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={AccordionStyles}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>

    );
};

//   <CardContent>
                
//                 <Box sx={{ width: '10em', display: 'inline-block' }}>
//                     Change Color Theme:
//                 </Box>
//                 <Button variant="contained" sx={{ margin: '1em' }} color={theme?.palette?.mode === 'light'
//                     ? 'primary'
//                     : 'secondary'} onClick={() => setTheme(lightTheme)}>
//                     Light Theme
//                 </Button>
//                 <Button variant="contained" sx={{ margin: '1em' }} color={theme?.palette?.mode === 'dark'
//                     ? 'primary'
//                     : 'secondary'} onClick={() => setTheme(darkTheme)}>
//                     Dark Theme
//                 </Button>
//             </CardContent> 