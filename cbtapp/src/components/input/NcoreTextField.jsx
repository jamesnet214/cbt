import React from "react";
import { alpha, styled } from '@mui/material/styles';
import { makeStyles, useTheme } from "@mui/styles";
import InputBase from '@mui/material/InputBase';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({ 
    title: {
        margin: "2px 0px 2px 0px"
    }
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(1),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F6F8FA' : '#F6F8FA',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '500px',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));



export default function NcoreTextField(props) {
    const classes = useStyles();
    return (
        <Stack>
            <Typography
                variant="caption"
                className={classes.title}
                children={props.title}/>
            <BootstrapInput {...props}/>
        </Stack>
    );
}