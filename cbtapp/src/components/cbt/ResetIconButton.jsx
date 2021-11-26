import React from 'react';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton } from '@mui/material';

export default function ResetIconButton(props) {
    const icon = <RefreshIcon/>
    return (
        <IconButton 
            {...props}
            size="small"
            children={icon}/>
    );
}