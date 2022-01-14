
// React
import React from "react";
import { Create, Datagrid, Edit, EditButton, List, Resource, ShowButton, SimpleForm, TextField, TextInput, ImageField, NumberField } from "react-admin";
import { RaReactPageInput, RaSelectReferenceInputField, } from "@react-page/react-admin";

// Local
import Plugins from "../plugins";


const PageList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="url" />
                <EditButton />
                {/* <ShowButton /> */}
            </Datagrid>
        </List>
    );
};

export const PageEdit = (props) => (
    <Edit title="Edit a Page" {...props}>
        <SimpleForm label="summary">
            <NumberField disabled source="id" />
            <TextInput source="title" label="Title of the page." />
            <TextInput source="url" label="Relative URL of the page."/>
            <RaReactPageInput source="content" label="Content of the page." cellPlugins={Plugins} />
        </SimpleForm>
    </Edit>
);

export const PageCreate = (props) => (
    <Create title="Create a new Page" {...props}>
        <SimpleForm label="summary">
            <NumberField source="id" />
            <TextInput source="title" label="Title of the page."/>
            <TextInput source="url" label="Relative URL of the page."/>
            <RaReactPageInput source="content" label="Content of the page." cellPlugins={Plugins} />
        </SimpleForm>
    </Create>
);

// Export Page API
export default {
    list: PageList,
    create: PageCreate,
    edit: PageEdit,
};