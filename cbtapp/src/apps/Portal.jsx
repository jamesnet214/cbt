
import * as React from 'react';
import { Route } from 'react-router';
// import { makeStyles, useTheme } from "@mui/styles";
import { load } from 'js-yaml';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TopLayer from '../components/portal/TopLayer';
import LeftLayer from '../components/portal/LeftLayer';

import '../design/default.css';

import Cbt from '../pages/Cbt';
import Test from '../pages/Test';
import Dashboard from '../pages/Dashboard';
import Login from './Login.jsx';
import Completed from "./Completed.jsx";
import Profile from "../pages/Profile.jsx";
import ProfileUpdate from "../pages/ProfileUpdate.jsx";
import Users from "../pages/Users.jsx";
import Settings from "../pages/Settings.jsx";

const drawerWidth = 240;

const theme = createTheme({
    palette: {
      // primary: {
      //   // Purple and green play nicely together.
      //   main: '#56dbc5',
      // },
      // secondary: {
      //   // This is green.A700 as hex.
      //   main: '#f5d142',
      // },
    },
  });

export default function Portal(props) {
    const [open, setOpen] = React.useState(false);
    const [titles, setTitles] = React.useState(null);
    
    React.useEffect(() => {
        if (titles == null) {
            fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/titles.yaml')
                .then(res => res.blob())
                .then(blob => blob.text())
                .then(res => {
                    var data = load(res);
                    setTitles(data);
                    console.log('load titles');
                    });
        }
    }, []);

    const openChanged = (changedValue) => {
        setOpen(changedValue);
    }

        
    function getName(id) {
        if(titles != null)
        {
            console.log('getName: ', id);
            return titles.filter(x=>x.id.toString() == id.toString())[0].title;
        }
        return "...";
    }

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
          overflowY: 'hidden',
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

    const getCbt = (cbtId) => {
        return <Cbt cbtId={cbtId} title={getName(cbtId)}/>;
    }

    const getCbtTest = (cbtId) => {
        console.log('getCbtTest');
        return <Test cbtId={cbtId} title={getName(cbtId)}/>;
    }

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
                            <Route path='/login' component={Login}/>       
                            <Route path='/cbt/id=0' render={() => getCbt('0')}/>
                            <Route path='/cbt/id=1' render={() => getCbt('1')}/>
                            <Route path='/cbt/id=2' render={() => getCbt('2')}/>
                            <Route path='/cbt/id=3' render={() => getCbt('3')}/>
                            <Route path='/cbt/id=4' render={() => getCbt('4')}/>
                            <Route path='/cbt/id=5' render={() => getCbt('5')}/>
                            <Route path='/cbt/id=6' render={() => getCbt('6')}/>
                            <Route path='/cbt/id=7' render={() => getCbt('7')}/>
                            <Route path='/cbt/test/id=0' render={() => getCbtTest('0')}/>
                            <Route path='/dashboard' component={Dashboard}/>  
                            <Route exact path='/profile' component={Profile}/>
                            <Route path='/profile/update' component={ProfileUpdate}/>
                            <Route path='/users' component={Users}/>
                            <Route path='/completed' component={Completed}/>
                            <Route path='/settings' component={Settings}/>
                            
                        </Main>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
