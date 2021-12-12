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
                    userName: data.userName,
                    email: data.email,
                    id: data.id,
                    phone: data.phone,
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
          })
          .catch(function (error) {
            console.log(error);
          });

        
        history.push(`/profile?id=${userInfo.id}`);
    }

    return (
        <Stack style={{padding: 20, maxWidth: 600}} spacing={1}>
            {userInfo != null ?
                <>
                    변경정보
                    <div>{"아이디: " + userInfo["id"]}</div>
                    <div>{"이메일: " + userInfo["email"]}</div>
                    <TextField required
                        size="small"
                        id="outlined-basic"
                        label="Name"
                        inputProps={{ maxLength: 12 }}
                        variant="outlined"
                        defaultValue={userInfo["name"]}
                        onChange={userNameChanged}/>
                    <TextField required
                        size="small"
                        id="outlined-basic"
                        label="Phone"
                        inputProps={{ maxLength: 12 }}
                        variant="outlined"
                        defaultValue={userInfo["phone"]}
                        onChange={userNameChanged}/>
                    <TextField required
                        size="small"
                        id="outlined-basic"
                        label="GithubId"
                        variant="outlined"
                        defaultValue={userInfo["gitHubId"]}
                        onChange={phoneChanged}/>
                    <TextField required
                        size="small"
                        id="outlined-basic"
                        label="Blog"
                        variant="outlined"
                        defaultValue={userInfo["blog"]}
                        onChange={phoneChanged}/>
                    <TextField required
                        size="small"
                        id="outlined-basic"
                        label="School"
                        variant="outlined"
                        defaultValue={userInfo["school"]}
                        onChange={phoneChanged}/>
                    <TextField required
                        size="small"
                        id="outlined-basic"
                        label="aboutMe"
                        variant="outlined"
                        multiline
                        rows="4"
                        defaultValue={userInfo["aboutMe"]}
                        onChange={aboutMeChanged}/>
                    <Button children="저장" onClick={saveClick}/>
                </>
                : null
            }
        </Stack>
    );
}
