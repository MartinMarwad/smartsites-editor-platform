
// React
import React from 'react';
import { useEditor } from '@craftjs/core';

// MUI 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

// Local
// import AccordionGroup from '../../../../plugins/AccordionGroup';
// import AccordionSection from '../../../../plugins/AccordionSection';


const CardMessage = () => {
    return (
        <div>
            <Card variant="outlined" sx={{ m: 3, borderRadius: 5, }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18, }} color="text.secondary" gutterBottom>
                        Click on a component to start editing.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
};

// Settings Panel: Panel to manage plugin settings.
export default function SettingsPanel() {
    const { actions, selected, isEnabled } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.sidebar,
                isDeletable: query.node(currentNodeId).isDeletable(),
            };
        }

        return {
            selected,
            isEnabled: state.options.enabled,
        };
    });

    return isEnabled && selected ? (
        <Box>
            <Grid container direction="column" spacing={0}>
                {selected.settings && React.createElement(selected.settings)}
            </Grid>
        </Box>
    ) : <CardMessage />;
};