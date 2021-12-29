import React from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';
import CircularProgress from '@mui/material/CircularProgress';

export default function Result(props) {
    const [result, setResult] = React.useState(null);
    const [answers, setAnswers] = React.useState([]);
    const [questions, setQuestions] = React.useState([]);
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
            process.env.REACT_APP_SERVICE_URL + '/api/cbt/test/result', data, requestOptions)
            .then(function (response) {
                const data = response.data;
                console.log('getResult completed:', data);
                
                setResult({ 
                    seq: data.seq,
                    testSubject: data.testSubject,
                    inning: data.inning
                });
                
                setQuestions(data.resultQuestions);
                
                console.log('questions', questions);

                setAnswers(data.resultAnswers);

                console.log('Answers', answers);
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }, []);


    return (
        <div>
            {result == null ? <CircularProgress /> :             
            <div>
                <h1>시험결과정보</h1>
                <h3>시험과목: {result.testSubject === "0" ? "정보처리기사" : ""}</h3>
                <h3>회차정보: {result.inning}</h3>
                {/* {result.map((ans, index) => {
                    return (
                        <div> */}
                            {/* <div>{ans.seq}</div>
                            <div>{ans.QuestionSeq}</div>
                            <div>{ans.Id}</div>
                            <div>{ans.Example}</div>
                            <div>{ans.IsAnswer}</div>
                            <div>{ans.IsChecked}</div>
                            <div>{ans.RightAnswer}</div> */}
                        {/* </div>
                    );
                })} */}

                <h3>지난 시험결과</h3>
            </div>
            }
        </div>
    );
}