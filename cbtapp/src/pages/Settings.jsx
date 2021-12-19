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
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

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

    const handleExternal = (ext) => {
        // alert('테스트')
        // history.push("https://localhost:7073//Manage/ExternalLogins");
        // window.location.href = "https://localhost:7073/Identity/Account/Manage/ExternalLogins";
        window.location.href = `https://localhost:7073/Identity/Account/OAuthLogin?Provider=${ext}&ReturnUrl=~%2Fcbt#_=_`;
    }

    const handleDeleteExternal = (ext) => {
        if (externals.length < 2)
        {
            window.alert("하나의 계정은 연결되어 있어야 합니다");
            return;
        }
        if (window.confirm("삭제하시겠습니까?"))
        {
            const data = {
                token: token,
                provider: ext
            }
            Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/account/deleteProvider', data, requestOptions)
                .then(function (response) {
                    const data = response.data;
                    if (data == "1"){
                        getUserExternals();
                    }
                    else
                    {
                        alert('실패');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
       
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
            "token": token
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
            "token": token
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
            "token": token
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
                    email: userInfo.email,
                    userName: userInfo.userName,
                    phone: userInfo.phone,
                    aboutMe: userInfo.aboutMe,
                    blog: userInfo.blog,
                    gitHubId: userInfo.gitHubId,
                    school: userInfo.school,
                    certificate: userInfo.certificate
                });
                getUserExternals();
                console.log('Users:', userInfo);
                // history.push(`/settings`);   
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

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
        marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '500px',
        padding: '10px 12px',
        transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
        },
    },
    }));

    return (
        <Stack style={{padding: 50, maxWidth: 480, background: "white"}} spacing={1}>
            {userInfo != null ?
                <>
                    <div style={{ display: "flex", justifyContent: 'flex-start', fontSize: 25, marginBottom: 0, fontWeight: 'bold'}}>{"사용자 정보변경"}</div>                    
                    <div style={{ fontSize: 12 }}>{"ID: " + userInfo["id"]} </div>
                    <div style={{ fontSize: 12, marginBottom: 10 }}>{"Email: " + userInfo["email"] }</div>

                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: 20}}>
                            Name
                        </InputLabel>
                        <BootstrapInput defaultValue={userInfo["userName"]} id="bootstrap-input" inputProps={{ maxLength: 12}} onChange={userNameChanged}/>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: 20}}>
                            Phone
                        </InputLabel>
                        <BootstrapInput defaultValue={userInfo["phone"]} id="bootstrap-input" inputProps={{ maxLength: 11}} onChange={phoneChanged}/>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: 20}}>
                            GithubId
                        </InputLabel>
                        <BootstrapInput defaultValue={userInfo["gitHubId"]} id="bootstrap-input" onChange={gitHubIdChanged}/>
                    </FormControl>
                 
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: 20}}>
                            Blog
                        </InputLabel>
                        <BootstrapInput defaultValue={userInfo["blog"]} id="bootstrap-input" onChange={blogChanged}/>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: 20}}>
                            aboutMe
                        </InputLabel>
                        <BootstrapInput defaultValue={userInfo["aboutMe"]} id="bootstrap-input" rows="4" multiline onChange={aboutMeChanged}/>
                    </FormControl>
                  
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
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: 20}}>
                            Education
                        </InputLabel>
                        <BootstrapInput defaultValue={education} id="bootstrap-input" onChange={educationChanged}/>
                    </FormControl>
                    <Button style={{ marginRight: "auto" }} 
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
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: 20}}>
                            Certificate
                        </InputLabel>
                        <BootstrapInput defaultValue={certificate} id="bootstrap-input" onChange={certificateChanged}/>
                    </FormControl>
                    <Button style={{ marginRight: "auto" }} 
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
                        {/* <Button sx={{ ml: 5}} variant="contained" color="success" onClick={handleExternal}>다른 계정 추가</Button> */}
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
                                    <Button  variant="contained" color="error" onClick={() => handleDeleteExternal(ext)}>삭제</Button>
                                </div>
                            );
                        }
                        else
                        {
                            return (
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',margin: '0 0 10px 0px'}}>
                                    <div style={{width: '100px'}}>{ext}</div>
                                    <Button variant="contained" color="success" onClick={() => handleExternal(ext)}>연결</Button>
                                </div>
                            );
                        }
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
