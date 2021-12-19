import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, useTheme } from "@mui/styles";
import { fontSize } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    margin: {
        fontSize: 15
    }
})); 


export default function NcoreButton(props) {
    const classes = useStyles();
    return (
        <div>
            <Button 
                className={classes.margin}
                size="small"
                color="success"
                variant="contained"
                {...props}>
            </Button>
        </div>

    );

}