import React from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import Divider from "@mui/material/Divider";

export default function Settings(props) {
    const [userInfo, setUserInfo] = React.useState(null); 
    const [externals, setExternals] = React.useState([]);

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
            "id": id
        };
        console.log(data);

        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/getUserExternals', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                setUserInfo({ 
                        id: data.id,
                        userName: data.userName,
                        email: data.email,
                        phone: data.phone,
                        userId: data.UserId,
                        aboutMe: data.aboutMe,
                        blog: data.blog,
                        gitHubId: data.gitHubId,
                        school: data.school,
                        certificate: data.certificate
                });

                let _externals = data.externals.map( ext => {
                    return {
                        loginProvider: ext.loginProvider,
                        providerKey: ext.providerKey
                    }
                })

                setExternals(_externals);
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
    const certificateChanged = (e) => setUserInfo({...userInfo,  certificate: e.target.value});

    const saveClick = (e) => {
        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/updateUser', userInfo, requestOptions)
            .then(function (response) {
                const data = response.data;
                setUserInfo({ 
                    id: userInfo.id,
                    userName: userInfo.userName,
                    phone: userInfo.phone,
                    aboutMe: userInfo.aboutMe,
                    blog: userInfo.blog,
                    gitHubId: userInfo.gitHubId,
                    school: userInfo.school,
                    certificate: userInfo.certificate
                });
                console.log('Users:', userInfo);
                history.push(`/profile?id=${userInfo.id}`);   
          })
          .catch(function (error) {
            console.log(error);
          });    
    }

    return (
        <Stack style={{padding: 50, maxWidth: 480, background: "white"}} spacing={1}>
            {userInfo != null ?
                <>
                    <div style={{ display: "flex", justifyContent: 'flex-end', fontSize: 25, marginBottom: 0, fontWeight: 'bold'}}>{"사용자 정보변경"}
                        <Button style={{ marginLeft: "auto" }} variant="contained" size="small" color="success" onClick={saveClick}>
                            Update
                        </Button>
                    </div>
                    <div style={{ fontSize: 12 }}>{"ID: " + userInfo["id"]} </div>
                    <div style={{ fontSize: 12, marginBottom: 10 }}>{"Email: " + userInfo["email"] }</div>
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="Name"
                        inputProps={{ maxLength: 12}}
                        variant="outlined"
                        defaultValue={userInfo["userName"]}
                        onChange={userNameChanged}/>
                        <br/>
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="Phone"
                        inputProps={{ maxLength: 11 }}
                        variant="outlined"
                        defaultValue={userInfo["phone"]}
                        onChange={phoneChanged}/>
                        <br/>
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="GithubId"
                        variant="outlined"
                        defaultValue={userInfo["gitHubId"]}
                        onChange={gitHubIdChanged}/>
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="Blog"
                        variant="outlined"
                        defaultValue={userInfo["blog"]}
                        onChange={blogChanged}/>
                        <br/>
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="Education"
                        variant="outlined"
                        defaultValue={userInfo["school"]}
                        onChange={schoolChanged}/>
                        <br/>
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="Certificate"
                        variant="outlined"
                        defaultValue={userInfo["certificate"]}
                        onChange={certificateChanged}/>
                        <br/>
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="aboutMe" 
                        variant="outlined"                        
                        multiline
                        rows="4"
                        defaultValue={userInfo["aboutMe"]}
                        onChange={aboutMeChanged}/>
                    <div>{externals.map( ext => {
                        return (
                            <div>
                                <div>{ext.loginProvider}</div>
                                <div>{ext.providerKey}</div>
                            </div>
                        );
                        
                    })}</div> 
                    
                    <Stack direction="row" spacing={1}>
                    
                    </Stack>
                </>
                : null
            }
        </Stack>
    );
}
