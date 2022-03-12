
// React
import React from "react";
import { Create, Datagrid, Edit, EditButton, List, Resource, ShowButton, SimpleForm, } from "react-admin";
import { TextField, ImageField, EmailField, NumberField, DateField, BooleanField } from "react-admin";
import { TextInput, ImageInput, EmailInput, DateInput, BooleanInput } from "react-admin";

// Local
import Layout from '../../layout';


const NotificationList = (props) => {
    return (
        <Layout title="Notification">
            <List {...props}>
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="logger_name" />
                    <NumberField source="level" />
                    <TextField source="msg" />
                    <TextField source="trace" />
                    <DateField source="create_datetime" />
                    {/* <EditButton /> */}
                    <ShowButton />
                </Datagrid>
            </List>
        </Layout>
    );
};

export const NotificationEdit = (props) => (
    <Layout title="Edit Notification">
        <Edit {...props}>
            <SimpleForm>
                    <TextField source="id" />
                    <TextField source="logger_name" />
                    <NumberField source="level" />
                    <TextField source="msg" />
                    <TextField source="trace" />
                    <DateField source="create_datetime" />
            </SimpleForm>
        </Edit>
    </Layout>
);

// export const NotificationCreate = (props) => (
//     <Layout title="Add User">
//         <Create title="Upload an Image" {...props}>
//             <SimpleForm>
//                 <NumberField source="id" />
//                 <TextInput source="name" />
//                 <TextInput source="alt" label="Alternate text for the image"/>
//                 <ImageInput source="image" label="Select image:" accept="image/*">
//                     <ImageField source="image" />
//                 </ImageInput>
//             </SimpleForm>
//         </Create>
//     </Layout>
// );

// Export Page API
export default {
    list: NotificationList,
    // create: NotificationCreate,
    edit: NotificationEdit,
};