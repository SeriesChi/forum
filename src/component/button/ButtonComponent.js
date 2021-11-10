import React from 'react';
import Button from '@mui/material/Button';

export default function ButtonComponent(props) {
    return (
        <Button 
        variant={props.variant ? props.variant : "contained"}
        >
            {props.title}
        </Button>
    )
}
