import React from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';


export default function Users(props) {
    
    const cookies = new Cookies();
    const value = cookies.get('.cbt.devncore.org.authentication.session');
    const [users, setUsers] = React.useState([]); 
    let history = useHistory();

    React.useEffect(() => {

        const data = {
            "id": "string",
            "userName": "string",
            "email": "string"
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

        console.log(requestOptions);

        Axios.post('https://localhost:7073/api/Account/getUsers', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                let users = data.map(user => {
                    return { 
                        id: user.id,
                        userName: user.userName
                    }
                });
                setUsers(users);
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);

    const userClick = (e, user) => {
        history.push(`/profile?id=${user.id}`);
    }

    return (
        <Grid container style={{width: 800}}>
            {users.map((user, index) => {
                return (
                    <Grid key={user.id} item xs={4}>
                        <Paper elevation={3} style={{margin: 10, padding: 10}}>
                            <Typography variant="h6">{user.userName}</Typography>
                            <Button 
                                style={{marginTop: 10}}
                                size="small"
                                variant="contained"
                                children="보기" 
                                onClick={(e) => userClick(e, user)}/>                 
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    );
}