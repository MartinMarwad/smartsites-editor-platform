
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// MUI
import CardContent from '@mui/material/CardContent';


// Plugin Component
export default function CardContentPlugin({ children, ...props }) {
    const { connectors: { connect }, } = useNode();
    return (
        <CardContent {...props}>
            {children}
        </CardContent>
    );
};