import React from 'react';
import { makeStyles, useTheme } from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuButton from './MenuButton';

import MenuTabs from './MenuTabs.jsx';

export default function(props) {
    const { isOpen } = props;
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({ }));
    const classes = useStyles();

    function menuClick() {
        props.isOpenChanged(!isOpen);
    }

    return (
        <AppBar position={'relative'} {...props} elevation="1">
            <Toolbar variant="dense">
                <MenuButton menuClick={menuClick}/>
                <MenuTabs/>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {/* <MailButton/>
                    <NotificationButton/>
                    <AccountButton/> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}