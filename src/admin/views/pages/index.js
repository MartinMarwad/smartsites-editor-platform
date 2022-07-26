
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
import Grid from '@mui/material/Grid';

// Local
import PageEditor from './PageEditor';
import Plugins from '../../../plugins';
// import SidePanel from './SidePanel';



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

// const Aside = () => (
//     <Box sx={{ width: '200px', margin: '1em' }}>
//         <Typography variant="h6">Instructions</Typography>
//         <Typography variant="body2">
//             Posts will only be published once an editor approves them
//         </Typography>
//     </Box>
// );

const Aside = () => {
    return (
        <Box width={400} display={{ xs: 'none', lg: 'block' }}>
            <Typography variant="h6">Instructions</Typography>
            <Typography variant="body2">
                Posts will only be published once an editor approves them
            </Typography>
        </Box>
    );
};

// export const PageEdit = (props) => {

//     // Helper function to access the React-Admin context to give to Craft.js
//     const LoadFrame = () => {
//         const record = useRecordContext();
//         if (!record) return null;
//         return <Frame data={record.content}/>
//     }

//     return (
//             <Edit {...props} aside={<SidePanel/>}>
//                 {/* <Grid container width={{ xs: '100%', xl: 800 }} spacing={2}> */}
//                 {/* <Layout title="Edit Page" editor={true}> */}
//                 {/* <Editor resolver={Plugins}> */}
//                     <LoadFrame />
//                 {/* </Editor> */}
                
//                     {/* <Frame><Element canvas is={Plugins.Page}></Element></Frame> */}
//                 {/* </Layout> */}
//                 {/* </Grid> */}
//             </Edit>
//     );
// }

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
    // edit: PageEdit,
    edit: PageEditor,
    icon: ArticleIcon,
};