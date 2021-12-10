import React from 'react';
// import { makeStyles, useTheme } from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuButton from './MenuButton';

import MenuTabs from './MenuTabs.jsx';

export default function TopLayer(props) {
    const { open, openChanged } = props;

    function menuClick() {
        openChanged(!open);
    }

    return (
        <AppBar position={'relative'} elevation={1} sx={{ zIndex: 10000 }}>
            <Toolbar variant="dense">
                <MenuButton menuClick={menuClick}/>
                <MenuTabs/>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                </Box>
            </Toolbar>
        </AppBar>
    );
}