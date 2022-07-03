
// React
import * as React from 'react';

// MUI
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


export default function AccordionSection({ title, secondary, secondaryChip, children, description, defaultExpanded=false, divider=false}) {
    return (
        <>
            <Accordion defaultExpanded={defaultExpanded} sx={{mx: -1, boxShadow: 0, }}>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${title}-content`}
                    id={`${title}-header`}
                >
                    <Typography component={'span'} sx={{ flexGrow: 1  }}>
                        {title}
                    </Typography>

                    { secondary && 
                        <Typography component={'span'} sx={{ color: 'text.secondary' }}>
                            {secondary}
                        </Typography>
                    }

                    { secondaryChip && 
                        <Typography component={'span'} sx={{ color: 'text.secondary' }}>
                            <Chip label={String(secondaryChip)} sx={{maxWidth: 180 }}/>
                        </Typography>
                    }
                </AccordionSummary>
                <AccordionDetails>
                    {description && 
                        <Typography sx={{pb: 2, color: 'gray', }}>
                            {description}
                        </Typography>
                    }
                    {children}
                </AccordionDetails>
            </Accordion>

            { divider && <Divider/> }
        </>
    );
}
