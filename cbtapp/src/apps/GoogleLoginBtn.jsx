import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "130873093876-hm2hqut5ci7bh6p09l7npku4t4e1to3d.apps.googleusercontent.com";

export default function GoogleLoginBtn({ onGoogleLogin }){
    const onSuccess = async(response) => {
        const { googleId, profileObj : { email, name } } = response;
        
        console.log('successed!', response);
        
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}