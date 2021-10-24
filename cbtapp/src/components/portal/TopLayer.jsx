import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import MenuTabs from './MenuTabs.jsx';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    }),
}));

const useStyles = makeStyles((theme) => ({
  
    toolbar: {
        height: '20px'
      }
}));

export default function TopLayer(props) {
    const classes = useStyles();
    const { isOpen, openChanged } = props;
    
    const handleDrawerOpen = () => {
        openChanged(!isOpen);
    };

    return (
        <AppBar 
            aria-setsize=""
            position="fixed" 
            open={isOpen}>
            <Toolbar
                className={classes.toolbar}
                variant="dense">   
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}>
                    <MenuIcon />
                </IconButton>
                <MenuTabs/>
            </Toolbar>
      </AppBar>
    );
}