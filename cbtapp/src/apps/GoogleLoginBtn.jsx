import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "130873093876-6hba2is1i9520ip6i4jm8kacfq95fbn6.apps.googleusercontent.com";

export default function GoogleLoginBtn({ onGoogleLogin }){


    function onSubmit() {
        
        const data = {
            "userId": "string",
            "userName": "string",
            "email": "string",
            "loginProvider": "string",
            "providerDisplayName": "string",
            "securityStamp": "string",
            "concurrencyStamp": "string"
        }

        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        fetch('/api/account/login', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }

    const onSuccess = async(response) => {
        const { googleId, profileObj : { email, name } } = response;
        console.log('successed!', response);
        console.log('ba: ', response["Ba"]);
        onSubmit();
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}