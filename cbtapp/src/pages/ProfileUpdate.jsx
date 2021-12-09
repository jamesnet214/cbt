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



    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': '*',
            'Access-Control-Allow-Methods': '*',
        }
    };

    React.useEffect(() => {

        const data = {
            "id": id,
            "userName": "string",
            "email": "string",
            "phone": "string",
            "name": "string"
        };
        console.log(data);

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
        Axios.post('https://ncoreapi.azurewebsites.net/api/Account/updateUser', userInfo, requestOptions)
            .then(function (response) {
                const data = response.data;
                setUserInfo({ 
                    userName: userInfo.userName,
                    email: userInfo.email,
                    id: userInfo.id,
                    phone: userInfo.phone,
                    name: userInfo.name
                });
                console.log('Users:', userInfo);
          })
          .catch(function (error) {
            console.log(error);
          });
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
