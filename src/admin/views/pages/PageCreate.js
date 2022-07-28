
// React
import React from "react";
import { Create, Datagrid, Edit, EditButton, List, Resource, ShowButton, SimpleForm, CloneButton, useRecordContext } from "react-admin";
import { TextField, TextInput, SelectInput } from "react-admin";
import { ImageField, NumberField, SelectField  } from "react-admin";
import { Editor, Frame, Element } from '@craftjs/core';
// import { useController } from 'react-hook-form';

// MUI
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const DEFAULT = { "ROOT": { "type": { "resolvedName": "Page" }, "isCanvas": true, "props": { "sx": { "minHeight": 800, "bgcolor": "background.default", "width": "auto" } }, "displayName": "Page", "custom": {}, "hidden": false, "nodes": [], "linkedNodes": {} } };

// RadioInput
// function RadioInput({ }) {
//     const content = useController({ name: 'content' });
//     return (
//         <RadioGroup {...content.field}>
//             <FormControlLabel value={DEFAULT} control={<Radio />} label="Default" />
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//             <FormControlLabel value="other" control={<Radio />} label="Other" />
//         </RadioGroup>
//     );
// }

// Page Create
export default function PageCreate(props) {
    return (
        <Create {...props}>
            <SimpleForm>
                {/* <TextInput disabled source="id" /> */}
                <TextInput source="title" />
                <TextInput source="url" />
                <TextInput disabled source="content" multiline defaultValue={JSON.stringify(DEFAULT)} sx={{display: 'none'}}/>
                {/* <SelectInput source="content" choices={[
                    { id: DEFAULT, name: 'Default' },
                ]} /> */}
            </SimpleForm>
        </Create>
    );
}