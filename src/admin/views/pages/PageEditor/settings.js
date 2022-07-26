
// React
import * as React from "react";
import { EditBase, SimpleForm, TextInput, SelectInput } from "react-admin";

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";



export default function PageSettingsForm() {

    return (
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="url" />
            <TextInput source="content" />
        </SimpleForm>
    );
}