import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, useTheme } from "@mui/styles";
import { fontSize } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    margin: {
        marginRight: "auto"
    }
})); 


export default function NcoreButton(props) {
    const classes = useStyles();
    return (
        <div>
            <Button 
                className={classes.margin}
                {...props}>
            </Button>
        </div>

    );

}