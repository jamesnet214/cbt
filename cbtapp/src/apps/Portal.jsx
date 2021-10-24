
import * as React from 'react';
import { Route } from 'react-router';
import { makeStyles, useTheme } from "@mui/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TopLayer from '../components/portal/TopLayer';
import LeftLayer from '../components/portal/LeftLayer';

import '../design/default.css';

import Cbt from '../pages/Cbt';

const drawerWidth = 240;

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#34568B',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#f5d142',
      },
    },
  });

export default function Portal(props) {
    const [isOpen, setIsOpen] = React.useState(false);

    const isOpenChanged = (changedValue) => {
        setIsOpen(changedValue);
    }
    const useStyles = makeStyles((theme) => ({ 
        content: {
            flexGrow: 1,
            padding: "20px",
        }
    }));
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={'root'}>
                <div className={'drawerDiv'}>
                    <TopLayer isOpen={isOpen} isOpenChanged={isOpenChanged} style={{ zIndex: 1 }}/>    
                    <div className={'frame'}>
                        <LeftLayer isOpen={isOpen}/>
                        <main className={classes.content}>
                            <Route path='/cbt' component={Cbt}/>
                        </main>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}