import React from 'react';
import { makeStyles, useTheme } from "@mui/styles";
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import MenuTreeView from './MenuTreeView.jsx';
import LeftMenuHeader from './LeftMenuHeader.jsx';

const drawerWidth = 240;

export default function LeftLayer(props) {
    const { isOpen } = props;


    return (
        <Drawer sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              position: 'absolute',
                },
            }}
            variant="persistent"
            anchor="left"
            open={isOpen}>
                <LeftMenuHeader/>
                <Divider />
                <MenuTreeView/>
        </Drawer>
    );
}