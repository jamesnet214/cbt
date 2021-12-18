import React from "react";
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

export default function Duplicate(props) {
    const location = useLocation();
    const history = useHistory();
    const [userInfo, setUserInfo] = React.useState({});
    const [externals, setExternals] = React.useState([]);
    const [stepCompleted, setStepCompleted] = React.useState(false);
    let id = new URLSearchParams(location.search).get('id');

    const handleLogin = () => {
        history.push("/login");
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

    const useStyles = makeStyles({
        google: {
            backgroundImage: '/public/images/login_google.png',
        }
    });

    const classes = useStyles();

    React.useEffect(() => {

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': '*',
                'Access-Control-Allow-Methods': '*',
            }
        };

        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/GetTempUser', id, requestOptions)
            .then(function (response) {
                const userData = response.data;
                setUserInfo({
                    id: userData.id,
                    userName: userData.userName,
                    userId: userData.UserId,
                    email: userData.email,
                    phone: userData.phone,
                    name: userData.name,
                    school: userData.school,
                    gitHubId: userData.gitHubId,
                    blog: userData.blog,
                    aboutMe: userData.aboutMe,
                });

                let _externals = userData.externals.map( ext => {
                    return {
                        loginProvider: ext.loginProvider,
                        providerKey: ext.providerKey
                    }
                })

                setExternals(_externals);
                console.log("여기", userData);
          })
          .catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <div style={{margin: '10px'}}>   
              {!stepCompleted ? 
              <div >
                    <div ><span style={{color: '#BF412E'}}>{userInfo.email}</span> 해당 이메일로 이미 가입이 되었습니다.</div>
                    <Button sx={{ mt: 1, mr: 1 }} variant="contained" onClick={handleLogin}>로그인 하기</Button>
               </div>
                
            : null}
        </div>
    );
}