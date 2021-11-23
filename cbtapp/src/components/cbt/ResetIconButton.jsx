import React from 'react';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function ResetIconButton(props) {
    const icon = <RefreshIcon/>
    return (
        <Button 
            {...props}
            size="small"
            variant="contained"
            children="다시 설정" 
            startIcon={icon}/>
    );
}