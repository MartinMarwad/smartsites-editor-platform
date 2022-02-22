
// React
import React from "react";
import { Create, Datagrid, Edit, EditButton, List, Resource, ShowButton, SimpleForm, } from "react-admin";
import { TextField, FileField , NumberField } from "react-admin";
import { TextInput, FileInput } from "react-admin";

// Local


const FileList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="description" />
                <TextField source="file" />
                {/* <FileField source="file" /> */}
                <EditButton />
                <ShowButton />
            </Datagrid>
        </List>
    );
};

export const FileEdit = (props) => (
    <Edit title="Edit an Image" {...props}>
        <SimpleForm>
            <NumberField disabled source="id" />
            <TextInput source="name" />
            <TextInput source="description" label="Alternate text for the image"/>
            <FileField source="file" label="Current file:"/>
            <FileInput source="file" label="Related files">
                <FileField source="file"/>
            </FileInput>
        </SimpleForm>
    </Edit>
);

export const FileCreate = (props) => (
    <Create title="Upload an Image" {...props}>
        <SimpleForm>
            <NumberField source="id" />
            <TextInput source="name" />
            <TextInput source="description" label="Alternate text for the image"/>
            <FileInput source="file" label="Related files">
                <FileField source="file"/>
            </FileInput>
        </SimpleForm>
    </Create>
);

// Export Page API
export default {
    list: FileList,
    create: FileCreate,
    edit: FileEdit,
};