
// React
import * as React from "react";
import { EditBase, SimpleForm, TextInput, SelectInput, useRecordContext } from "react-admin";
import ReactJson from 'react-json-view'

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function PageSettingsForm() {
    const record = useRecordContext();
    const style = {
        padding: '10px',
        borderRadius: '3px',
        margin: '10px 0px'
    };
    return (
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="url" />
            {/* <TextInput source="content" /> */}
            <Box>
                <Accordion sx={{width: "100%" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography>View Code</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        { record && 
                            <ReactJson 
                                src={JSON.parse(record.content)} 
                                collapsed={true}
                                style={style}
                                onEdit={true}
                            />}
                    </AccordionDetails>
                </Accordion>
            </Box>
        </SimpleForm>
    );
}