import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fcfcfc'
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 5,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 0,
  },
});

export default function LeftMenuHeader(props) {
    return (
        <FireNav component="nav" disablePadding>
          <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}><PlaylistAddCheckIcon/></ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="필기시험 기출문제 목록"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
        </FireNav>
    );
}