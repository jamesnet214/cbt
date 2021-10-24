import React from 'react';
import { makeStyles, useTheme } from "@mui/styles";
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';

const drawerWidth = 250;

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
              zIndex: 0
            },
          }}
          variant="persistent"
          anchor="left"
          open={isOpen}>
              <h1>sadf</h1>
              <h1>sadf</h1>
              <Button variant="contained" color="secondary">sadf</Button>
        </Drawer>
    );
}