import React from "react";
import Axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { margin, padding, textAlign } from "@mui/system";
import { Container } from "@mui/material";

export default function Profile(props) {
    const [userInfo, setUserInfo] = React.useState({}); 
    const [examResult, SetExamResult] = React.useState({});
    const location = useLocation();
    const history = useHistory();
    let id = new URLSearchParams(location.search).get('id');

    React.useEffect(() => {
        id = new URLSearchParams(location.search).get('id');
        console.log('^^^^^^^^^profileId:', id);

        const data = {
            "id": id,
            "userName": "string",
            "email": "string",
            "blog": "string",
            "gitHubId": "string",
            "school": "string",
            "name": "string",
            "userId": "string"
            
        };

        const data2 = {
            "seq": 0,
            "userId": id,
            "subject": "string",
            "ining": 0,
            "elective": "string",
            "problemCount": 0,
            "resultCount": 0,
            "created": "2021-12-05T13:43:14.151Z"
        }

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

    const editClick = (e) => {
        history.push(`/profile/update?id=${id}`);
    }

    return (
        <Container>
        <div className={"hstyle"}>
            <div >
                <div>
                    <div className={"stylestxt1"}>사용자 정보</div>
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
                    <div className={"stylestxt2"}>{"깃허브"}</div>
                    <div className={"stylestxt3"}>{userInfo.gitHubId}</div>
                    <div className={"stylestxt2"}>{"블로그"}</div>
                    <div className={"stylestxt3"}>{userInfo.blog}</div>
                    <div className={"stylestxt2"}>{"AboutMe"}</div>
                    <div className={"stylestxt3"}>{userInfo.aboutMe}</div>
                </div>
            <Button className={"stylesbtn"} size="small"  variant="outlined"  onClick={editClick}>정보수정</Button>
            </div>
        </div>
     </Container>
    );
}