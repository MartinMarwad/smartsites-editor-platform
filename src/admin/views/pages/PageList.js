
// React
import React from "react";
import { Datagrid, List, Resource, SimpleForm, useRecordContext } from "react-admin";
import { EditButton, ShowButton, CloneButton, DeleteWithConfirmButton, } from "react-admin";
import { TextField, TextInput, UrlField } from "react-admin";
import { ImageField, NumberField } from "react-admin";

// MUI
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';


// Page List
export default function PageList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" label="ID"/>
                <TextField source="title" label="Title" />
                <UrlField source="url" label="URL"/>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', }}>
                    <EditButton />
                    <CloneButton/>
                    <DeleteWithConfirmButton/>
                </Box>
                {/* <ShowButton /> */}
            </Datagrid>
        </List>
    );
}