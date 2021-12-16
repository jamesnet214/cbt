import React from 'react';
import Axios from "axios";
// import { makeStyles, useTheme } from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuButton from './MenuButton';

import MenuTabs from './MenuTabs.jsx';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cookies from 'universal-cookie';

import { useHistory } from "react-router-dom";
import { textAlign } from '@mui/system';

export default function TopLayer(props) {
    const [userInfo, setUserInfo] = React.useState({}); 
    const { open, openChanged } = props;
    const cookies = new Cookies();
    const token = cookies.get('.cbt.devncore.org.authentication.session');

    let history = useHistory();

    function menuClick() {
        openChanged(!open);
    }
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signInClick = (event) => {
        history.push('/login');
    };
    
    const signOutClick = (event) => {

        console.log(userInfo.id);
    };

    const settingClick = (event) => {
        // history.push(`/settings?id=${userInfo.id}`);
        history.push(`/profile/update?id=${userInfo.id}`);
        console.log(userInfo.id);
    };

    React.useEffect(() => {

        if(token != null)
        {
            console.log('exists login token: ', token);
            const data = {
                "id": token
            };

            const requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': '*',
                    'Access-Control-Allow-Methods': '*',
                }
            };

            Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/getLoginUser', data, requestOptions)
                .then(function (response) {
                    const data = response.data;
                    setUserInfo({
                            id: data.id,
                            userName: data.userName,
                            userId: data.UserId,
                            email: data.email,
                            phone: data.phone,
                            name: data.name,
                            school: data.school,
                            gitHubId: data.gitHubId,
                            blog: data.blog,
                            aboutMe: data.aboutMe
                    });
                    console.log('loginUserInfo: ', userInfo);
                })
                .catch(function (error) {
                console.log(error);
                });
        }
    }, [token]);

    const open1 = Boolean(anchorEl);
    const id = open1 ? 'simple-popover' : undefined;

    return (
        <AppBar position={'relative'} elevation={1} sx={{ zIndex: 10000 }}>
            <Toolbar variant="dense">
                <MenuButton menuClick={menuClick}/>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                </Box>
                <MenuTabs/>

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                </Box>
                <IconButton onClick={handleClick}>
                    <AccountCircleIcon/>
                </IconButton>
                <Popover
                    id={id}
                    open={open1}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    >
                    <Typography sx={{ p: 3 }}>Signed in as <br/> {userInfo.userName}</Typography>
                    
                    
                    <Button onClick={settingClick}>Settings</Button>
                    <br/>
                    <Button style={{ textAlign: 'right'}} onClick={signInClick}>Sign In</Button>
                    <br/>
                    <Button style={{ textAlign: 'right'}} onClick={signOutClick}>Sign Out</Button>
                    
                </Popover>
                
            </Toolbar>
        </AppBar>
    );
}