import React from 'react';
import Axios from "axios";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Cookies from 'universal-cookie';
import Toolbar from '@mui/material/Toolbar';
import MenuButton from './MenuButton';
import MenuTabs from './MenuTabs.jsx';
import AccountPopover from "./AccountPopover";

export default function TopLayer(props) {
    const [userInfo, setUserInfo] = React.useState(null); 
    const { open, openChanged } = props;
    const cookies = new Cookies();
    const token = cookies.get('.cbt.devncore.org.authentication.session');

    console.log('toplayer tkoen:', token);

    function menuClick() {
        openChanged(!open);
    }

    React.useEffect(() => {

        if(token != null)
        {
            console.log('exists login token: ', token);
            const data = {
                "token": token
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

            Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/Get/User/Login', data, requestOptions)
                .then(function (response) {
                    const data = response.data;

                    if (data.isError == false) {
                        const result = data.result;
                        setUserInfo({
                                id: result.id,
                                userName: result.userName,
                                userId: result.UserId,
                                email: result.email,
                                phone: result.phone,
                                name: result.name,
                                school: result.school,
                                gitHubId: result.gitHubId,
                                blog: result.blog,
                                aboutMe: result.aboutMe
                        });
                        console.log('loginUserInfo: ', userInfo);
                    }
                    else {
                    }
                })
                .catch(function (error) {
                console.log(error);
                });
        }
    }, [token]);

    return (
        <AppBar position={'relative'} elevation={1} sx={{ zIndex: 10000 }}>
            <Toolbar variant="dense">
                <MenuButton menuClick={menuClick}/>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}/>
                <MenuTabs/>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}/>
                <AccountPopover userInfo={userInfo}
                loginSwitch={props.loginSwitch}
                    dialogOpen={props.dialogOpen}
                />
            </Toolbar>
        </AppBar>
    );
}