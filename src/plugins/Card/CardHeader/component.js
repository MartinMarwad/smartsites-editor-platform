
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// MUI
import CardHeader from '@mui/material/CardHeader';


// Plugin Component
export default function CardHeaderPlugin({ children, ...props }) {
    const { connectors: { connect }, } = useNode();
    return (
        <CardHeader {...props} />
    );
};