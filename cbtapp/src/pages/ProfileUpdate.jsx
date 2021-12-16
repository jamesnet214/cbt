import React from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";

export default function ProfileUpdate(props) {
    const [userInfo, setUserInfo] = React.useState(null); 
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id');
    console.log('ID: ', id);

    let history = useHistory();

    const [name, setName] = React.useState('james');

    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': '*',
            'Access-Control-Allow-Methods': '*',
        }
    };

    React.useEffect(() => {

        const data = {
            "id": id,
            "userName": "string",
            "email": "string",
            "phone": "string",
            "name": "string"
        };
        console.log(data);

        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/getUser', data, requestOptions)
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
                console.log('Users:', userInfo);
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);

    const userNameChanged = (e) => setUserInfo({...userInfo, userName: e.target.value});
    const phoneChanged = (e) => setUserInfo({...userInfo, phone: e.target.value});
    const aboutMeChanged = (e) => setUserInfo({...userInfo, aboutMe: e.target.value});
    const schoolChanged = (e) => setUserInfo({...userInfo, school: e.target.value});
    const gitHubIdChanged = (e) => setUserInfo({...userInfo, gitHubId: e.target.value});
    const blogChanged = (e) => setUserInfo({...userInfo, blog: e.target.value});
    const emailChanged = (e) => setUserInfo({...userInfo, email: e.target.value});

    const saveClick = (e) => {
        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/updateUser', userInfo, requestOptions)
            .then(function (response) {
                const data = response.data;
                setUserInfo({ 
                    userName: userInfo.userName,
                    email: userInfo.email,
                    id: userInfo.id,
                    phone: userInfo.phone,
                    name: userInfo.name,
                });
                console.log('Users:', userInfo);
                history.push(`/profile?id=${userInfo.id}`);   
          })
          .catch(function (error) {
            console.log(error);
          });    
    }

    return (
        <Stack style={{padding: 10, maxWidth: 500, background: "white"}} spacing={1}>
            {userInfo != null ?
                <>
                    <div style={{ fontSize: 20, marginBottom: 0, fontWeight: 'bold'}}>{"사용자 정보변경"}</div>
                    <div style={{ fontSize: 10, marginBottom: 10 }}>{"ID: " + userInfo["id"]}</div>
                    <TextField required
                        helperText="당신의 이름을 입력하세요."
                        size="small"
                        id="outlined-basic"
                        label="Name"
                        inputProps={{ maxLength: 12}}
                        variant="outlined"
                        defaultValue={userInfo["userName"]}
                        onChange={userNameChanged}/>
                        <br/>
                    <TextField required
                        helperText="핸드폰 번호를 입력하세요."
                        size="small"
                        id="outlined-basic"
                        label="Phone"
                        inputProps={{ maxLength: 11 }}
                        variant="outlined"
                        defaultValue={userInfo["phone"]}
                        onChange={phoneChanged}/>
                        <br/>
                     <TextField required
                        helperText="이메일 정보를 입력하세요."
                        size="small"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        defaultValue={userInfo["email"]}
                        onChange={emailChanged}/>
                        <br/>
                    <TextField required
                        helperText="Github ID를 입력하세요."
                        size="small"
                        id="outlined-basic"
                        label="GithubId"
                        variant="outlined"
                        defaultValue={userInfo["gitHubId"]}
                        onChange={gitHubIdChanged}/>
                        <br/>
                    <TextField required
                        helperText="블로그 주소를 입력하세요."
                        size="small"
                        id="outlined-basic"
                        label="Blog"
                        variant="outlined"
                        defaultValue={userInfo["blog"]}
                        onChange={blogChanged}/>
                        <br/>
                    <TextField required
                        helperText="당신의 학교를 입력하세요."
                        size="small"
                        id="outlined-basic"
                        label="School"
                        variant="outlined"
                        defaultValue={userInfo["school"]}
                        onChange={schoolChanged}/>
                        <br/>
                    <TextField required
                        helperText=" "                        
                        size="small"
                        id="outlined-basic"
                        label="aboutMe"
                        variant="outlined"                        
                        multiline
                        rows="3"
                        defaultValue={userInfo["aboutMe"]}
                        onChange={aboutMeChanged}/>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" color="success" onClick={saveClick}>
                            Update Profile
                        </Button>
                    </Stack>
                </>
                : null
            }
        </Stack>
    );
}
