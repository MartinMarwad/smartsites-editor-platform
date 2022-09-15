
// React
import * as React from "react";
import { EditBase, SimpleForm, TextInput, SelectInput, useRecordContext, useInput } from "react-admin";
import { useGetOne, useUpdate, Title, EditContextProvider } from "react-admin";
import { useParams, useNavigate } from "react-router-dom";
import ReactJson from 'react-json-view'
import { useController } from 'react-hook-form';

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Alert from '@mui/material/Alert';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// Custom JSON Input Component
const ContentInput = ({ source, ...props }) => {
    const { field } = useController({ name: source });
    return (
        <Accordion sx={{ width: "100%" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>View JSON Data</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Alert severity="warning">
                    Warning: This is a raw JSON view. Feel free to explore it, but editing this and clicking save will update
                    the page content and can result in data loss or corruption. Only edit this if you know what you are doing.
                </Alert>
                <ReactJson
                    src={(typeof(field.value) === 'string') ? JSON.parse(field.value) : field.value}
                    name={false}
                    collapsed={true}
                    style={{ padding: '10px', borderRadius: '3px', margin: '10px 0px' }}
                    onEdit={({ updated_src }) => { 
                        field.onChange(JSON.stringify(updated_src)) // data send back to hook form
                    }}
                />
            </AccordionDetails>
        </Accordion>
    );
}

// PageEditor Settings Form
export default function PageSettingsForm() {
    const record = useRecordContext();
    if (!record) return null;
    return (
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="url" />
            <ContentInput source="content" />
        </SimpleForm>
    );
}