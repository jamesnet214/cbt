import React from "react";
import Axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { margin, padding, textAlign } from "@mui/system";
import { Container, Divider, Stack, Typography } from "@mui/material";
import Cookies from 'universal-cookie';
import NcoreSelect from "../components/input/NcoreSelect";
import { MenuItem } from "@mui/material";

export default function Profile(props) {
    const cookies = new Cookies();
    const token = cookies.get('.cbt.devncore.org.authentication.session');
    const [userInfo, setUserInfo] = React.useState({}); 
    const [examResult, SetExamResult] = React.useState({});
    const location = useLocation();
    const history = useHistory();
    let id = new URLSearchParams(location.search).get('id');

    React.useEffect(() => {
        id = new URLSearchParams(location.search).get('id');
        console.log('profileId:', id);

        const data = {
            "userId": id,
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

        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/GET/User', data, requestOptions)
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
                        aboutMe: data.aboutMe,
                        certificate: data.certificate 
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
                    <Typography variant="caption">
                        ID 정보입니다.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"이름"}</div>
                    <div className={"stylestxt3"}>{userInfo.userName}</div>
                    <Typography variant="caption">
                        당신의 이름 입니다.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"핸드폰"}</div>
                    <div className={"stylestxt3"}>{userInfo.phone}</div>
                    <Typography variant="caption">
                        핸드폰 번호입니다.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"이메일"}</div>
                    <div className={"stylestxt3"}>{userInfo.email}</div>
                    <Typography variant="caption">
                        이메일 주소입니다.
                    </Typography>
                    <Divider/>
                    <NcoreSelect 
                        enabled
                        title="학교 List" 
                        defaultValue={userInfo.school}>
                        <MenuItem value={userInfo.school}>{userInfo.school}</MenuItem>
                    </NcoreSelect>
                    <Typography variant="caption">
                        학교는 중복으로 추가할 수 있습니다.
                    </Typography>
                    <Divider/>
                    <NcoreSelect 
                        enabled
                        title="자격증 List" 
                        defaultValue={userInfo.certificate}>
                        <MenuItem value={userInfo.certificate}>{userInfo.certificate}</MenuItem>
                    </NcoreSelect>
                    <Typography variant="caption">
                        자격증은 중복으로 추가할 수 있습니다.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"깃허브"}</div>
                    <div className={"stylestxt3"}>{userInfo.gitHubId}</div>
                    <Typography variant="caption">
                        Github 아이디 정보 입니다.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"블로그"}</div>
                    <div className={"stylestxt3"}>{userInfo.blog}</div>
                    <Typography variant="caption">
                        블로그 주소입니다.
                    </Typography>
                    <Divider/>
                    <div className={"stylestxt2"}>{"AboutMe"}</div>
                    <div className={"stylestxt3"}>{userInfo.aboutMe}</div>
                    <Typography variant="caption">
                        자기소개 정보입니다.
                    </Typography>
                    <Divider/>
                </Stack>
            </div>
        </div>
    );
}