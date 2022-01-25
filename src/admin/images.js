
// React
import React from "react";
import { Create, Datagrid, Edit, EditButton, List, Resource, ShowButton, SimpleForm, } from "react-admin";
import { TextField, ImageField, NumberField } from "react-admin";
import { TextInput, ImageInput } from "react-admin";

// Local


const ImageList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="alt" />
                <ImageField source="image" />
                <EditButton />
                <ShowButton />
            </Datagrid>
        </List>
    );
};

export const ImageEdit = (props) => (
    <Edit title="Edit an Image" {...props}>
        <SimpleForm>
            <NumberField disabled source="id" />
            <TextInput source="name" />
            <TextInput source="alt" label="Alternate text for the image"/>
            <ImageField source="image" label="Current image:"/>
            <ImageInput source="image" label="Or select new image:" accept="image/*">
                <ImageField source="image" src="image" title="name"  />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const ImageCreate = (props) => (
    <Create title="Upload an Image" {...props}>
        <SimpleForm>
            <NumberField source="id" />
            <TextInput source="name" />
            <TextInput source="alt" label="Alternate text for the image"/>
            <ImageInput source="image" label="Select image:" accept="image/*">
                <ImageField source="image" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

// Export Page API
export default {
    list: ImageList,
    create: ImageCreate,
    edit: ImageEdit,
};