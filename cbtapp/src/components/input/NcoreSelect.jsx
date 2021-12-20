import React from "react";
import { alpha, styled } from '@mui/material/styles';
import { makeStyles, useTheme } from "@mui/styles";
import Select from '@mui/material/Select';
import Stack from "@mui/material/Stack";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";

const useStyles = makeStyles((theme) => ({ 
    title: {
        margin: "2px 0px 2px 0px"
    }
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F6F8FA' : '#F6F8FA',
      border: '1px solid #ced4da',
      fontSize: 14,
      lineHeight: "28px",
      height: "28px",
      padding: '0px 26px 0px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
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
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));



export default function NcoreSelect(props) {
    const classes = useStyles();
    return (
        <Stack>
            <Typography
                variant="body1"
                style={{fontWeight: "normal", marginTop: 8, marginBottom: 6}}
                className={classes.title}
                children={props.title}/>
            <Select
                {...props}
                input={<BootstrapInput />}>
            </Select>
        </Stack>
    );
}