import React from "react";
import Axios from "axios";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';

import UserProfileBox from "../components/users/UserProfileBox.jsx";


export default function Users(props) {
    
    const cookies = new Cookies();
    const value = cookies.get('.cbt.devncore.org.authentication.session');
    const [users, setUsers] = React.useState([]); 
    let history = useHistory();

    React.useEffect(() => {
        console.log('users :');

        const data = {
            "id": "string",
            "userName": "string",
            "email": "string",
            "blog": "string",
            "gitHubId": "string",
            "school": "string",
            "name": "string",
            "userId": "string",
            "aboutMe": "string"
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': '*',
                'Access-Control-Allow-Methods': '*',
                ".cbt.devncore.org.authentication.session": value
            }
        };

        Axios.post(process.env.REACT_APP_SERVICE_URL + '/api/Account/getUsers', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                let source = data.map(user => {
                    return { 
                        id: user.id,
                        userName: user.userName,
                        userId: user.UserId,
                        email: user.email,
                        phone: user.phone,
                        name: user.name,
                        school: user.school,
                        gitHubId: user.gitHubId,
                        blog: user.blog,
                        aboutMe: user.aboutMe
                    }
                });
                setUsers(source);
                console.log('f :');
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);

    const userClick = (e, user) => {
        history.push(`/profile?id=${user.id}`);
    }

    return (
        <Grid container style={{maxWidth: 1200}} style={{padding: '10px 10px 10px 0px'}}>
             
            {users.map((user, index) => {
                return (
                    <UserProfileBox key={index} user={user} index={index} userClick={userClick}/>
                );
            })}
        </Grid>
    );
}