import React from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';
import Button from "@mui/material/Button";

export default function Settings(props) {
    const [userInfo, setUserInfo] = React.useState(null);
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
                        externals: userData.externals.map( ext => {
                            return {
                                loginProvider: ext.loginProvider,
                                providerKey: ext.providerKey
                            }
                        })



                        // loginProvider: responseData.loginProvider,
                        // providerKey: responseData.providerKey
                });

                

                console.log("여기");
                console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
        });

    }, []);

    return (
        <div className={"hstyle"}>
            <div>
                <div className={"stylestxt1"}>My Profile</div>
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
                {userInfo.externals != null ? 
                    <div>{userInfo.externals.map( ext => {
                        <div>
                            <div>{ext.loginProvider}</div>
                            <div>{ext.providerKey}</div>
                        </div>
                    })} 
                    </div> 
                    : null
                }
                <Button children="저장"/>
            </div>
            

            {/* <div>{userInfo.loginProvider}</div>
            <div>{userInfo.providerKey}</div> */}
            
        </div>
    );
}