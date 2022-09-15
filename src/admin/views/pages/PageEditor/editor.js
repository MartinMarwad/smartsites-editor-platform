
// React
import React from "react";
import { SimpleForm, SaveButton, DeleteButton, Toolbar, useInput } from 'react-admin';
import { useStore, useNotify, useUpdate, useRecordContext, useRedirect } from 'react-admin';
import { Frame, useEditor} from '@craftjs/core';
import { useController } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";

// MUI
import Box from '@mui/material/Box';


// Custom Page Edit Input Component
const PageEditInput = ({ source, ...props }) => {
    const { field } = useController({ name: source });
    return (
        <Frame data={field.value}/>
    );
}

// Custom toolbar component for simple form
const EditorToolbar = props => (
    <Toolbar {...props} >
        <SaveButton alwaysEnable/>
        <Box sx={{ flexGrow: 1}}/>
        <DeleteButton sx={{ p: 2}}/>
    </Toolbar>
);

// EditorForm
export default function EditorForm() {
    const [update, { isLoading, error }] = useUpdate();
    const record = useRecordContext(); 
    const notify = useNotify();
    const navigate = useNavigate();
    const { actions, query, } = useEditor();
    const onSubmit = () => {
        // Construct Data
        const data = { title: record.title, url: record.url, content: query.serialize(), }

        // Update
        update('pages', { id: record.id, data: data }, 
            { onSuccess: () => { 
                notify('Page updated!', { type: 'success' });
                navigate('/admin/pages'); } 
            }
        );

    };
    if (!record) return null;

    return (
        <SimpleForm toolbar={<EditorToolbar />} onSubmit={onSubmit}>
            <PageEditInput source="content"/>
        </SimpleForm>
    );
}