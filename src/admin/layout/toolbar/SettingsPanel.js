
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


// import { ToolbarItem } from './accordian/ToolbarItem';
// import { ToolbarSection } from './accordian/ToolbarSection';


const CardMessage = () => (
    <div>
        <Card variant="outlined" sx={{ m: 3, }}>
            <CardContent>
                <Typography sx={{ fontSize: 18, }} color="text.secondary" gutterBottom>
                    Click on a component to start editing.
                </Typography>
            </CardContent>
        </Card>
        <div>
            {/* <ToolbarSection
                title="Typography"
                props={['fontSize', 'fontWeight', 'textAlign']}
                summary={({ fontSize, fontWeight, textAlign }) => {
                    return `0px, 0px, 0px`;
                }}
            ></ToolbarSection> */}
        </div>
    </div>
);

// Settings Panel: Panel to manage plugin settings.
export default function SettingsPanel() {
    const { actions, selected, isEnabled } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings:
                    state.nodes[currentNodeId].related &&
                    state.nodes[currentNodeId].related.settings,
                isDeletable: query.node(currentNodeId).isDeletable(),
            };
        }

        return {
            selected,
            isEnabled: state.options.enabled,
        };
    });

    return isEnabled && selected ? (
        <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
            <Grid container direction="column" spacing={0}>
                <Grid item>
                    <Box pb={2}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography variant="subtitle1">Selected</Typography>
                            </Grid>
                            <Grid item>
                                <Chip
                                    size="small"
                                    color="primary"
                                    label={selected.name}
                                    data-cy="chip-selected"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <div data-cy="settings-panel">
                    {selected.settings && React.createElement(selected.settings)}
                </div>
                <div>
                    {selected.isDeletable ? (
                        <Button
                            variant="outlined"
                            onClick={() => {
                                actions.delete(selected.id);
                            }}
                        >
                            Delete
                        </Button>
                    ) : null}
                </div>
            </Grid>
        </Box>
    ) : <CardMessage/>;
};