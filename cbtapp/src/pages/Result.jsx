import React from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';

export default function Result(props) {
    const [result, setResult] = React.useState(null);
    const cookies = new Cookies();
    const token = cookies.get('.cbt.devncore.org.authentication.session');

    React.useEffect(() => {
        const data = {
            Token: token
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

        Axios.post(
            process.env.REACT_APP_SERVICE_URL + '/api/cbt/Get/User/Test', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                console.log('getResult completed:', data);
                setResult({ 
                    title: data.title,
                    inning: data.inning,
                    questions: data.questions,
                });
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }, []);


    return (
        <div>
            결과 확인화면
            {result == null ? "잠시만 기다려주세요." : 
            <div>
                <h1>{result.title}</h1>
                <h6>{result.inning}</h6>
                {result.questions.map((q, index) => {
                    return (
                        <div>{q}</div>
                    );
                })}
            </div>
            }
            <h3>지난 시험결과 목록</h3>
            <h6>2021 1회차 정보처리기사</h6>
            <h6>2021 1회차 정보처리기사</h6>
            <h6>2021 1회차 정보처리기사</h6>
        </div>
    );
}