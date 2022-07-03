
// React
import React from 'react';
import { Element, useNode } from '@craftjs/core';

// MUI
import CardMedia from '@mui/material/CardMedia';


// Plugin Component
export default function CardMediaPlugin({ children, ...props }) {
    const { connectors: { connect }, } = useNode();
    return (
        <CardMedia {...props} />
    );
};