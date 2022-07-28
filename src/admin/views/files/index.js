
// React
import React from "react";
import { Create, Datagrid, Edit, EditButton, List, Resource, ShowButton, SimpleForm, } from "react-admin";
import { ImageField, TextField, FileField , NumberField, UrlField } from "react-admin";
import { TextInput, FileInput } from "react-admin";

// MUI
import CloudIcon from '@mui/icons-material/Cloud';

// Local
// import Layout from '../../layout';


const FileList = (props) => {
    return (
            <List {...props}>
                <Datagrid>
                    <TextField source="id" label="ID"/>
                    <TextField source="name" label="File Name"/>
                    <TextField source="description" label="File Description"/>
                    <UrlField source="file" label="File URL"/>
                    <EditButton />
                    <ShowButton />
                </Datagrid>
            </List>
    );
};

export const FileEdit = (props) => (
        <Edit {...props}>
            <SimpleForm>
                <NumberField disabled source="id" />
                <TextInput source="name" />
                <TextInput source="description" label="Alternate text for the image"/>
                <TextField source="file" label="Original File:" />
                <FileInput source="file" label="Related files" placeholder={<p>Drop your file here</p>}>
                    <ImageField source="src" />
                </FileInput>
            </SimpleForm>
        </Edit>
);

export const FileCreate = (props) => (
        <Create {...props}>
            <SimpleForm>
                <NumberField source="id" />
                <TextInput source="name" />
                <TextInput source="description" label="Alternate text for the image"/>
                <FileInput source="file" label="Related files">
                    <FileField source="src" />
                </FileInput>
            </SimpleForm>
        </Create>
);

// Export Page API
export default {
    list: FileList,
    create: FileCreate,
    edit: FileEdit,
    icon: CloudIcon,
};