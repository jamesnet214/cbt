import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "130873093876-0q51vs5cct76oddjfq4gv72caaur8009.apps.googleusercontent.com";

export default function GoogleLoginBtn({ onGoogleLogin }){

    const onSuccess = async(response) => {
        const { googleId, profileObj : { email, name } } = response;
        console.log('successed!', response);
        console.log('ba: ', response["Ba"]);
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