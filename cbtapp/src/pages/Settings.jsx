import React from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { Chip } from "@mui/material";
import Cookies from 'universal-cookie';

export default function Settings(props) {
    const [userInfo, setUserInfo] = React.useState(null); 
    const [externals, setExternals] = React.useState([]);
    const [educations, setEducations] = React.useState([]);
    const [education, setEducation] = React.useState("");
    const [certificates, setCertificates] = React.useState([]);
    const [certificate, setCertificate] = React.useState("");

    const cookies = new Cookies();
    const token = cookies.get('.cbt.devncore.org.authentication.session');

    console.log('ID: ', token);
    let history = useHistory();
    
    const constExternals = [
        'Google',
        'Facebook',
        'GitHub'
    ]

    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': '*',
            'Access-Control-Allow-Methods': '*',
        }
    };

    const handleExternal = () => {
        // alert('테스트')
        // history.push("https://localhost:7073//Manage/ExternalLogins");
        // window.location.href = "https://localhost:7073/Identity/Account/Manage/ExternalLogins";
        window.location.href = "https://localhost:7073/Identity/Account/OAuthLogin?Provider=GitHub&ReturnUrl=~%2Fcbt#_=_";
    }

    React.useEffect(() => {
        getUserExternals();
        getEducations();
        getCertificates();
    }, []);

    const userNameChanged = (e) => setUserInfo({...userInfo, userName: e.target.value});
    const phoneChanged = (e) => setUserInfo({...userInfo, phone: e.target.value});
    const aboutMeChanged = (e) => setUserInfo({...userInfo, aboutMe: e.target.value});
    const gitHubIdChanged = (e) => setUserInfo({...userInfo, gitHubId: e.target.value});
    const blogChanged = (e) => setUserInfo({...userInfo, blog: e.target.value});    
    const educationChanged = (e) => setEducation(e.target.value);
    const certificateChanged = (e) => setCertificate(e.target.value);


    const getUserExternals = () => {
        const data = {
            "id": token
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
    };

    const getCertificates = () => {
        const data = {
            "id": token
        };
        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/certificate/getCertificates', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                setCertificates(data.map(cer => {
                    return ({
                        seq: cer.seq,
                        userId: cer.userId,
                        name: cer.name,
                    });
                }));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getEducations = () => {
        const data = {
            "id": token
        };
        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/education/getEducations', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                setEducations(data.map(edu => {
                    return ({ 
                        seq: edu.seq,
                        userId: edu.userId,
                        name: edu.name,
                    });
                }));
            })
            .catch(function (error) {
                console.log(error);
        });
    }

    const addCertificateClick = (e) => {
        const data = {
            token: token,
            name: certificate
        }
        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/certificate/addCertificate', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                if (data == "1"){
                    getCertificates();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    
    const addEducationClick = (e) => {
        const data = {
            token: token,
            name: education
        }
        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/education/addEducation', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                console.log('completed:', data);
                if (data == "1") {
                    getEducations();
                }
          })
          .catch(function (error) {
            console.log(error);
          });    
    }  

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

    const deleteCertificate = (seq) => {
        const data = {
            seq: seq,
            token: token,
        }
        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/certificate/deleteCertificate', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                console.log('completed:', data);
                if (data == "1") {
                    getCertificates();
                }
          })
          .catch(function (error) {
            console.log(error);
          });    
    }  

    const deleteEducation = (seq) => {
        const data = {
            seq: seq,
            token: token,
        }
        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/education/deleteEducation', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                console.log('completed:', data);
                if (data == "1") {
                    getEducations();
                }
          })
          .catch(function (error) {
            console.log(error);
          });    
    }  

    const cerChipClick = () => {
    };

    const eduChipClick = () => {
    };

    const cerChipDelete = (e, seq) => {
        deleteCertificate(seq);
    }
    
    const eduChipDelete = (e, seq) => {
        deleteEducation(seq);
    };

    return (
        <Stack style={{padding: 50, maxWidth: 480, background: "white"}} spacing={1}>
            {userInfo != null ?
                <>
                    <div style={{ display: "flex", justifyContent: 'flex-start', fontSize: 25, marginBottom: 0, fontWeight: 'bold'}}>{"사용자 정보변경"}</div>                    
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
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="Phone"
                        inputProps={{ maxLength: 11 }}
                        variant="outlined"
                        defaultValue={userInfo["phone"]}
                        onChange={phoneChanged}/>
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
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="aboutMe" 
                        variant="outlined"                        
                        multiline
                        rows="4"
                        defaultValue={userInfo["aboutMe"]}
                        onChange={aboutMeChanged}/>
                    <div>
                        <Button style={{ marginLeft: "auto" }} 
                            variant="contained"
                            size="small"
                            color="success"
                            onClick={saveClick}
                            children="Update"/>
                    </div>
                    <br/>
                    <Stack direction="row" spacing={1}>
                        {educations.map(edu => {
                            return (
                                <Chip
                                    label={edu.name}
                                    onClick={eduChipClick}
                                    onDelete={(e) => eduChipDelete(e, edu.seq)}/>
                            );
                        })}
                    </Stack>
                    <br/>
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="Education"
                        variant="outlined"
                        defaultValue={education}
                        onChange={educationChanged}/>
                    <Button style={{ marginLeft: "auto" }} 
                        variant="contained"
                        size="small"
                        color="success"
                        onClick={addEducationClick}
                        children="학교 추가"/>
                    <br/>
                    <Stack direction="row" spacing={1}>
                        
                        {certificates.map(cer => {
                            return (
                                <Chip
                                    label={cer.name}
                                    onClick={cerChipClick}
                                    onDelete={(e) => cerChipDelete(e, cer.seq)}/>
                            );
                        })}
                    </Stack>
                    <br/>
                    <TextField required
                        size="small"
                        id="outlined-size-small"
                        label="Certificate"
                        variant="outlined"
                        defaultValue={certificate}
                        onChange={certificateChanged}/>
                    <Button style={{ marginLeft: "auto" }} 
                        variant="contained"
                        size="small"
                        color="success"
                        onClick={addCertificateClick}
                        children="자격증 추가"/>
                    <br/>
                    <div style={{padding: '0 0 10px 0', borderBottom: '1px solid #eeeeee', display: 'flex', alignItems: 'center'}}>
                        <div style={{fontWeight: 'bold',fontSize: '18px',}}>
                            연결된 계정
                        </div>
                        <Button sx={{ ml: 5}} variant="contained" color="success" onClick={handleExternal}>다른 계정 추가</Button>
                    </div>
                    <div>{constExternals.map( ext=>{
                        if (externals.some(v => v.loginProvider == ext))
                        {
                            return (
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 10px 0'}}>
                                    <div style={{display: 'flex'}}>
                                        <div style={{width: '100px'}}>{ext}</div>
                                        <div>{userInfo["email"]}</div>
                                    </div>
                                    <Button sx={{ ml: 5}} variant="contained" color="error">삭제</Button>
                                </div>
                            );
                        }
                            // else
                            // {
                            //     return (
                            //         <div style={{display: 'flex', alignItems: 'center',margin: '0 0 10px 0px'}}>
                            //             <div style={{width: '100px'}}>{ext}</div>
                            //             <Button sx={{ mt: 1, mr: 1 }} variant="contained" color="success" onClick={() => handleExternal(ext)}>연결</Button>
                            //         </div>
                            //     );
                            // }
                    })}</div>
                        
                    {/* <div>{externals.map( ext => {
                        return (
                            <div>
                                <div>{ext.loginProvider}</div>
                                <div>{ext.providerKey}</div>
                            </div>
                        );
                        
                    })}</div>  */}

                    <Stack direction="row" spacing={1}>
                    
                    </Stack>
                </>
                : null
            }
        </Stack>
    );
}
