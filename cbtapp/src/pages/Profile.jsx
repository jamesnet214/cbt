import React from "react";
import Axios from "axios";
import { useLocation } from 'react-router-dom'

export default function Profile(props) {
    const [userInfo, setUserInfo] = React.useState({}); 
    const [examResult, SetExamResult] = React.useState({});
    const location = useLocation();

    React.useEffect(() => {
        let id = new URLSearchParams(location.search).get('id');
        console.log('ID', id);

        const data = {
            "Id": id,
            "userName": "string",
            "email": "string",
            "phone": "string"
        };

        const data2 = {
            "Seq": "seq",
            "UserId": id,
            "Subject": "string",
            "ining": "int",
            "elective": "string",
            "problemCount": "int",
            "ResultCount": "int",
            "Created": "datetime"
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
        console.log('data1: ', data);
        
        Axios.post('https://ncoreapi.azurewebsites.net/api/ExamResult/getExamResult', data2, requestOptions)
            .then(function (response) {
                const data2 = response.data2;
                SetExamResult({ 
                    Seq: data2.Seq,
                    UserId: data2.UserId,
                    Subject: data2.Subject,
                    ining: data2.ining,
                    elective: data2.elective,
                    problemCount: data2.problemCount,
                    ResultCount: data2.ResultCount,
                    Created: data2.Created
                });
          })
          .catch(function (error) {
            console.log(error);
          });


        Axios.post('https://ncoreapi.azurewebsites.net/api/Account/getLoginInfo', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                setUserInfo({ 
                    userName: data.userName,
                    email: data.email,
                    id: data.id,
                    phone: data.phone
                });
            console.log('Users');
          })
          .catch(function (error) {
            console.log(error);
          });


    }, []);

    return (
        <div>
            사용자 정보
            {userInfo != null ? 
                <div>
                    <div>{userInfo.id} {userInfo.userName} {userInfo.phone}</div>
                </div>
            : null
            }
            시험결과
            {examResult != null ?
                <div>
                    <div>{examResult.Seq} {examResult.UserId} {examResult.Subject}</div>
                </div>
            : null
            }
        </div>
    );
}