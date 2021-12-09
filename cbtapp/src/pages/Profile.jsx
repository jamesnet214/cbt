import React from "react";
import Axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Profile(props) {
    const [userInfo, setUserInfo] = React.useState({}); 
    const [examResult, SetExamResult] = React.useState({});
    const location = useLocation();
    const history = useHistory();
    
    const id = new URLSearchParams(location.search).get('id');
    console.log('ID: ', id);

    React.useEffect(() => {

        const data = {
            "id": id,
            "userName": "string",
            "email": "string",
            "blog": "string",
            "gitHubId": "string",
            "school": "string",
            "name": "string",
            "userId": "string"
            
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
        
        Axios.post('https://ncoreapi.azurewebsites.net/api/ExamResult/getExamResult', data2, requestOptions)
            .then(function (response) {
                const eRes = response.data;
                console.log('exam: ', response.data);
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

          
        console.log('data1: ', data);

        Axios.post('https://ncoreapi.azurewebsites.net/api/Account/getLoginInfo', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                setUserInfo({ 
                    userName: data.userName,
                    email: data.email,
                    id: data.id,
                    phone: data.phone,
                    

                });
            console.log('datas');
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);

    const editClick = (e) => {
        history.push(`/profile/update?id=${id}`);
    }

    return (
        <div>
            사용자 정보
            {userInfo != null ? 
                <div>
                    <div>{userInfo.id} {userInfo.userName} {userInfo.phone}</div>
                    <div> {userInfo.blog} {userInfo.gitHubId} {userInfo.school}</div>
                    <div> {userInfo.name} {userInfo.userId}</div>
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
            <Button size="small" variant="outlined" onClick={editClick}>수정</Button>
        </div>
    );
}