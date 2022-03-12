
// React
import React from "react";
import { useRecordContext } from "react-admin";
import { Create, Datagrid, Edit, EditButton, List, Resource, ShowButton, SimpleForm, TextField, TextInput, ImageField, NumberField } from "react-admin";
import { Editor, Frame, Element } from '@craftjs/core';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Local
import Layout from '../../layout';

const theme = createTheme();

const PageList = (props) => {
    return (
        <Layout title="Pages">
                <List {...props}>
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="title" />
                        <TextField source="url" />
                        <EditButton />
                        {/* <ShowButton /> */}
                    </Datagrid>
                </List>
        </Layout>
    );
};

const LoadFrame = () => {
    const record = useRecordContext();
    if (!record) return null;
    return <Frame data={record.content} />
}

export const PageEdit = (props) => (
    <Edit {...props}>
        <Layout title="Edit Page" editor={true}>
            <LoadFrame/>
            {/* <Frame></Frame> */}
        </Layout>
    </Edit>
);

export const PageCreate = (props) => (
    <Layout title="Create Page">
        <Create  {...props}>
            <SimpleForm label="summary">
                <NumberField source="id" />
                <TextInput source="title" label="Title of the page."/>
                <TextInput source="url" label="Relative URL of the page."/>
                {/* <RaReactPageInput source="content" label="Content of the page." cellPlugins={Plugins} /> */}
            </SimpleForm>
        </Create>
    </Layout>
);

// Export Page API
export default {
    list: PageList,
    create: PageCreate,
    edit: PageEdit,
};