import React from "react";
import Axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { margin, textAlign } from "@mui/system";
import { Container } from "@mui/material";

export default function Profile(props) {
    const [userInfo, setUserInfo] = React.useState({}); 
    const [examResult, SetExamResult] = React.useState({});
    const location = useLocation();
    const history = useHistory();
    let id = new URLSearchParams(location.search).get('id');

    const hstyle = {
        color: "black",
        backgroundColor: "white",
        fontFamily: "Arial",
        display: "flex",
        justifyContent: "center",
        padding: "50px"
    };

    const stylestxt1 = {
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 30,
        textAlign: "center"
    }

    const stylestxt2 = {
        margin: 10,
        fontSize: 18,
        color: "gray" 
    }

    const stylestxt3 = {
        margin: 10,
        fontSize: 15
        
    }

    const stylesbtn = {
        lineHeight: 2,
        
    }

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
        <div style={hstyle}>
            <div >
                <div>
                    <div style={stylestxt1}>사용자 정보</div>
                    <div style={stylestxt2}>아이디</div>
                    <div style={stylestxt3}>{userInfo.id}</div>
                    <div style={stylestxt2}>{"이름: "}</div>
                    <div style={stylestxt3}>{userInfo.userName}</div>
                    <div style={stylestxt2}>{"핸드폰"}</div>
                    <div style={stylestxt3}>{userInfo.phone}</div>
                    <div style={stylestxt2}>{"이메일"}</div>
                    <div style={stylestxt3}>{userInfo.email}</div>
                    <div style={stylestxt2}>{"학교"}</div>
                    <div style={stylestxt3}>{userInfo.school}</div>
                    <div style={stylestxt2}>{"깃허브"}</div>
                    <div style={stylestxt3}>{userInfo.gitHubId}</div>
                    <div style={stylestxt2}>{"블로그"}</div>
                    <div style={stylestxt3}>{userInfo.blog}</div>
                    <div style={stylestxt2}>{"AboutMe"}</div>
                    <div style={stylestxt3}>{userInfo.aboutMe}</div>
                </div>
            <Button style={stylesbtn} size="small"  variant="outlined"  onClick={editClick}>정보수정</Button>
            </div>
        </div>
     </Container>
    );
}