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
            "seq": 0,
            "userId": id,
            "subject": "string",
            "ining": 0,
            "elective": "string",
            "problemCount": 0,
            "resultCount": 0,
            "created": "2021-12-05T13:43:14.151Z"
          }

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
                const eRes = response.data;
                SetExamResult({ 
                    seq: eRes.seq,
                    userId: eRes.userId,
                    subject: eRes.subject,
                    ining: eRes.ining,
                    elective: eRes.elective,
                    problemCount: eRes.problemCount,
                    resultCount: eRes.resultCount,
                    created: eRes.created
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
                    <div>{examResult.seq} {examResult.userId} {examResult.subject}</div>
                </div>
            : null
            }
        </div>
    );
}