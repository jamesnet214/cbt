import React from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';
import Button from "@mui/material/Button";

export default function Settings(props) {
    const [userInfo, setUserInfo] = React.useState({});
    const [externals, setExternals] = React.useState([]);
    const cookies = new Cookies();
    const token = cookies.get('.cbt.devncore.org.authentication.session');
    
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

        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/GetUserExternals', token, requestOptions)
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

                        // loginProvider: responseData.loginProvider,
                        // providerKey: responseData.providerKey
                });

                let _externals = userData.externals.map( ext => {
                    return {
                        loginProvider: ext.loginProvider,
                        providerKey: ext.providerKey
                    }
                })

                setExternals(_externals);

                console.log("여기", _externals);
          })
          .catch(function (error) {
            console.log(error);
        });

    }, []);

    return (
        <div className={"hstyle"}>
            {userInfo != null ?
                <div>
                    <div className={"stylestxt1"}>My Profile</div>
                    <div className={"info-group"}>
                        <div className={"info-header"}>ID</div>
                        <div className={"info-content"}>{userInfo.id}</div>
                    </div>
                    <div className={"info-group"}>
                        <div className={"info-header"}>Name</div>
                        <div className={"info-content"}>{userInfo.userName}</div>
                    </div>
                    <div className={"info-group"}>
                        <div className={"info-header"}>Email</div>
                        <div className={"info-content"}>{userInfo.email}</div>
                    </div>
                    <div className={"info-group"}>
                        <div className={"info-header"}>Phone</div>
                        <div className={"info-content"}>{userInfo.phone}</div>
                    </div>
                    <div className={"info-group"}>
                        <div className={"info-header"}>School</div>
                        <div className={"info-content"}>{userInfo.school}</div>
                    </div>
                    <div className={"info-group"}>
                        <div className={"info-header"}>Github ID</div>
                        <div className={"info-content"}>{userInfo.gitHubId}</div>
                    </div>
                    <div className={"info-group"}>
                        <div className={"info-header"}>Blog</div>
                        <div className={"info-content"}>{userInfo.blog}</div>
                    </div>
                    <div className={"info-group"}>
                        <div className={"info-header"}>AboutMe</div>
                        <div className={"info-content"}>{userInfo.aboutMe}</div>
                    </div>
         
                    {/* <div className={"stylestxt1"}>My Profile</div>
                    <div className={"stylestxt2"}>ID</div>
                    <div className={"stylestxt3"}>{userInfo.id}</div>
                    <div className={"stylestxt2"}>Name</div>
                    <div className={"stylestxt3"}>{userInfo.userName}</div>
                    <div className={"stylestxt2"}>Phone</div>
                    <div className={"stylestxt3"}>{userInfo.phone}</div>
                    <div className={"stylestxt2"}>Email</div>
                    <div className={"stylestxt3"}>{userInfo.email}</div>
                    <div className={"stylestxt2"}>School</div>
                    <div className={"stylestxt3"}>{userInfo.school}</div>
                    <div className={"stylestxt2"}>Github ID</div>
                    <div className={"stylestxt3"}>{userInfo.gitHubId}</div>
                    <div className={"stylestxt2"}>BlogURL</div>
                    <div className={"stylestxt3"}>{userInfo.blog}</div>
                    <div className={"stylestxt2"}>AboutMe</div>
                    <div className={"stylestxt3"}>{userInfo.aboutMe}</div>
                    <div>{externals.map( ext => {
                        return (
                            <div>
                                <div>{ext.loginProvider}</div>
                                <div>{ext.providerKey}</div>
                            </div>
                        );
                    })} 
                    </div>
                    
                    <Button children="저장"/> */}
                </div>
            : null}          
            
        </div>
    );
}