
import * as React from 'react';
import { Route } from 'react-router';
// import { makeStyles, useTheme } from "@mui/styles";
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TopLayer from '../components/portal/TopLayer';
import LeftLayer from '../components/portal/LeftLayer';

import '../design/default.css';

import Cbt from '../pages/Cbt';
import Dashboard from '../pages/Dashboard';

const drawerWidth = 240;

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#56dbc5',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#f5d142',
      },
    },
  });

export default function Portal(props) {
    const [open, setOpen] = React.useState(false);

    const openChanged = (changedValue) => {
        setOpen(changedValue);
    }

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
          overflowY: 'scroll',
          flexGrow: 1,
          padding: theme.spacing(0),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-${drawerWidth}px`,
          ...(open && {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }),
      );

    return (
        <ThemeProvider theme={theme}>
            <div className={'root'}>
                <div className={'drawerDiv'}>
                    <TopLayer open={open} 
                              openChanged={openChanged} 
                              style={{ zIndex: 9999 }}/>    
                    <div className={'frame'}>
                        <LeftLayer open={open}/>
                        <Main open={open}>
                            <Route path='/test' component={Cbt}/>
                            <Route path='/dashboard' component={Dashboard}/>
                        </Main>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
