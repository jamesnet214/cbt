import React from "react";
import Axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { margin, padding, textAlign } from "@mui/system";
import { Container, Divider, Stack, Typography } from "@mui/material";

export default function Profile(props) {
    const [userInfo, setUserInfo] = React.useState({}); 
    const [examResult, SetExamResult] = React.useState({});
    const location = useLocation();
    const history = useHistory();
    let id = new URLSearchParams(location.search).get('id');

    React.useEffect(() => {
        id = new URLSearchParams(location.search).get('id');
        console.log('profileId:', id);

        const data = {
            "id": id,
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

        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/GetUser', data, requestOptions)
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
            console.log('datas');
          })
          .catch(function (error) {
            console.log(error);
        });
          
    }, []);

    return (
        <div className={"hstyle"}>
            <div >
                <Stack spacing={1}>
                    <div className={"stylestxt1"}>User Profile</div>
                    <div className={"stylestxt2"}>아이디</div>
                    <div className={"stylestxt3"}>{userInfo.id}</div>
                    <div className={"stylestxt2"}>{"이름"}</div>
                    <div className={"stylestxt3"}>{userInfo.userName}</div>
                    <div className={"stylestxt2"}>{"핸드폰"}</div>
                    <div className={"stylestxt3"}>{userInfo.phone}</div>
                    <div className={"stylestxt2"}>{"이메일"}</div>
                    <div className={"stylestxt3"}>{userInfo.email}</div>
                    <div className={"stylestxt2"}>{"학교"}</div>
                    <div className={"stylestxt3"}>{userInfo.school}</div>
                    <Typography variant="caption">
                        학교는 중복으로 추가할 수 있습니다.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"깃허브"}</div>
                    <div className={"stylestxt3"}>{userInfo.gitHubId}</div>
                    <div className={"stylestxt2"}>{"블로그"}</div>
                    <div className={"stylestxt3"}>{userInfo.blog}</div>
                    <div className={"stylestxt2"}>{"AboutMe"}</div>
                    <div className={"stylestxt3"}>{userInfo.aboutMe}</div>
                </Stack>
            </div>
        </div>
    );
}