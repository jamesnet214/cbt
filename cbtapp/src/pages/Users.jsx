import React from "react";
import Axios from "axios";
export default function Users(props) {

    const [userInfo, setUserInfo] = React.useState({}); 

    React.useEffect(() => {
        const data = {
            "id": "0303",
            "userName": "string",
            "email": "string"
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        Axios.post('/api/Account/getLoginInfo', data)
            .then(function (response) {
                const data = response.data;
                setUserInfo({ 
                    userName: data.userName,
                    email: data.email,
                    id: data.id
                });
            console.log('Users');
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);

    return (
        <div>
            USERS
            {userInfo != null ? 
                <div>
                    <div>{userInfo.userName}</div>
                    <div>{userInfo.email}</div>
                    <div>{userInfo.id}</div>
                </div>
            : null
            }
        </div>
    );
}