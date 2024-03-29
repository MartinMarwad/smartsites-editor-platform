
// React
import React from "react";
import { Create, Datagrid, Edit, EditButton, List, Resource, ShowButton, SimpleForm, } from "react-admin";
import { TextField, ImageField, EmailField, NumberField, DateField, BooleanField } from "react-admin";
import { TextInput, ImageInput, EmailInput, DateInput, BooleanInput } from "react-admin";

// MUI 
import GroupAddIcon from '@mui/icons-material/GroupAdd';

// Local
// import Layout from '../../layout';


const UserList = (props) => {
    return (
            <List {...props}>
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <BooleanField source="is_staff" />
                    <BooleanField source="is_active" />
                    <DateField source="last_login" />
                    {/* <EditButton /> */}
                    <ShowButton />
                </Datagrid>
            </List>
    );
};

export const UserEdit = (props) => (
        <Edit {...props}>
            <SimpleForm>
                    <TextField source="id" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <BooleanField source="is_staff" />
                    <BooleanField source="is_active" />
                    <DateField source="last_login" />
            </SimpleForm>
        </Edit>
);

export const UserCreate = (props) => (
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
    list: UserList,
    // create: UserCreate,
    edit: UserEdit,
    icon: GroupAddIcon,
};