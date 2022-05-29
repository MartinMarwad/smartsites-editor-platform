
// React
import * as React from 'react';

// MUI
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';


export default function AccordionSection({ title, secondary, children, defaultExpanded=false}) {
    return (
        <Accordion defaultExpanded={defaultExpanded} sx={{mx: -1, boxShadow: 0, }}>
            <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls={`${title}-content`}
                id={`${title}-header`}
            >
                <Typography component={'span'} sx={{ flexGrow: 1  }}>
                    {title}
                </Typography>
                <Typography component={'span'} sx={{ color: 'text.secondary' }}>
                    {secondary}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}
