import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

export default function Users(props) {
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
            },
            body: JSON.stringify(data)
        };

        console.log(requestOptions);

        Axios.post('https://ncoreapi.azurewebsites.net/api/Account/getUsers', data)
            .then(function (response) {
                const data = response.data;
                let users = data.map(user => {
                    return { 
                        id: user.id,
                        email: user.email,
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
        <div>
            USERS
            {users.map(user => {
                return (
                    <div onClick={(e) => userClick(e, user)}>{user.userName}</div>
                );
            })}
        </div>
    );
}