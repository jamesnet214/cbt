import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, useTheme } from "@mui/styles";
import { fontSize } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    button: {
        lineHeight: "28px",
        height: "28px",
        padding: '0px 12px 0px 12px',
        fontSize: 14,
        minWidth: 50,
        textTransform: "none"
    }
})); 


export default function NcoreButton(props) {
    const classes = useStyles();
    return (
        <div>
            <Button 
                className={classes.button}
                size="small"
                color="success"
                variant="contained"
                {...props}>
            </Button>
        </div>

    );

}