import React from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function ProfileUpdate(props) {
    const [userInfo, setUserInfo] = React.useState(null); 
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id');
    console.log('ID: ', id);

    const [name, setName] = React.useState('james');

    React.useEffect(() => {

        const data = {
            "id": id,
            "userName": "123",
            "email": "123",
            "phone": "123"
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': '*',
                'Access-Control-Allow-Methods': '*',
            }
        };

        Axios.post('https://ncoreapi.azurewebsites.net/api/Account/getLoginInfo', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                setUserInfo({ 
                    userName: data.userName,
                    email: data.email,
                    id: data.id,
                    phone: data.phone
                });
                console.log('Users:', userInfo);
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);

    const textChanged = (e) => {
        setUserInfo({...userInfo, phone: e.target.value});
    }

    const saveClick = (e) => {
        
    }

    return (
        <Stack style={{padding: 20, maxWidth: 600}} spacing={1}>
            {userInfo != null ?
                <>
                    <div>{userInfo["email"]}</div>
                    <div>{userInfo["phone"]}</div>
                    <TextField required 
                        size="small" 
                        id="outlined-basic" 
                        label="phone" 
                        variant="outlined"
                        defaultValue={userInfo["phone"]} 
                        onChange={(textChanged)}/>
                    <Button children="버튼" onClick={saveClick}/>
                </>
                : null
            }
        </Stack>
    );
}
