
// React
import React from "react";
import { useRecordContext } from "react-admin";
import { Create, Datagrid, Edit, EditButton, List, Resource, ShowButton, SimpleForm, TextField, TextInput, ImageField, NumberField } from "react-admin";
import { Editor, Frame, Element } from '@craftjs/core';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArticleIcon from '@mui/icons-material/Article';

// Local
import Plugins from '../../../plugins';
import SidePanel from './SidePanel';



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

const Aside = () => (
    <Box sx={{ width: '200px', margin: '1em' }}>
        <Typography variant="h6">Instructions</Typography>
        <Typography variant="body2">
            Posts will only be published once an editor approves them
        </Typography>
    </Box>
);

export const PageEdit = (props) => {

    // Helper function to access the React-Admin context to give to Craft.js
    const LoadFrame = () => {
        const record = useRecordContext();
        if (!record) return null;
        return <Frame data={record.content}/>
    }

    return (
        <Editor resolver={Plugins}>
            <Edit {...props} aside={<SidePanel/>}>
                {/* <Layout title="Edit Page" editor={true}> */}
                {/* <Editor resolver={Plugins}> */}
                    <LoadFrame />
                {/* </Editor> */}
                
                    {/* <Frame><Element canvas is={Plugins.Page}></Element></Frame> */}
                {/* </Layout> */}
            </Edit>
        </Editor>
    );
}

export const PageCreate = (props) => (
    <Create  {...props}>
        <SimpleForm label="summary">
            <NumberField source="id" />
            <TextInput source="title" label="Title of the page."/>
            <TextInput source="url" label="Relative URL of the page."/>
            {/* <RaReactPageInput source="content" label="Content of the page." cellPlugins={Plugins} /> */}
        </SimpleForm>
    </Create>
);

// Export Page API
export default {
    list: PageList,
    create: PageCreate,
    edit: PageEdit,
    icon: ArticleIcon,
};