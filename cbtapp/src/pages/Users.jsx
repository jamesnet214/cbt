import React from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { Stack } from "@mui/material";


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

        Axios.post('https://ncoreapi.azurewebsites.net/api/Account/getUsers', data, requestOptions)
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
        <Grid container style={{maxWidth: 1200}} margin={1}>
            {users.map((user, index) => {
                return (
                    <Grid key={user.id} item lg={3} md={4} sm={6} xs={12}>
                        <Paper 
                            variant="outlined" 
                            style={{margin: 5, padding: '10px 10px 10px 10px', borderRadius: 8}}
                            onClick={(e) => userClick(e, user)}>
                                <Grid container>
                                    <Grid item>
                                        <img src={`./images/people${index}.png`} style={{ width: 40, borderRadius: 8, marginRight: '10px'}}/>
                                    </Grid>
                                    <Grid item xs>
                                        <Stack>
                                            <Typography variant="caption">
                                                {user.userName.split('@')[0]}
                                            </Typography>
                                            <Typography variant="body2">
                                                {`${Math.floor(Math.random() * (15 - 3) + 3)}개의 자격증 보유`}
                                            </Typography>
                                        </Stack>
                                    </Grid>  
                                    <Grid item>
                                        <Badge badgeContent={Math.floor(Math.random() * (15 - 3) + 3)} color="primary" style={{margin: 10}} fontSize="small">
                                            <FeaturedPlayListIcon color="action" fontSize="small"/>
                                            </Badge>
                                    </Grid>                                                    
                                </Grid>
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    );
}