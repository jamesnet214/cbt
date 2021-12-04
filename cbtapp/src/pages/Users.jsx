import React from "react";
import Axios from "axios";
export default function Users(props) {

    React.useEffect(() => {

        const data = {
            "id": "5451",
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
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        // fetch('https://ncoreapi.azurewebsites.net/api/Account/getLoginInfo', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        //     });

        // fetch('https://ncoreapi.azurewebsites.net/api/Account/getLoginInfo', requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        // Axios.post('https://ncoreapi.azurewebsites.net/api/Account/getLoginInfo', data)
        //     .then(response => console.log(response));
    });

    return (
        <div>
            USERS
            이름
            이메일
            프로필이미지            
        </div>
    );
}