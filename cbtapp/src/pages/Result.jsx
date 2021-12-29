import React from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography  from '@mui/material/Typography';

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
                    inning: data.inning,
                    rightCount: data.rightCount,
                    wrongCount: data.wrongCount
                });
                
                setQuestions(data.resultQuestions);
                
                
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }, []);

    console.log('questions', questions);

    function initItemsTemplate() {
        return questions.map((question, index) => {
            question.isChecked = false;
            question.id = index;

            
            return (                
                <FormControlLabel key={index} className="papar-answer-content" style={{margin: '0px 15px 0px 15px'}}
                    label={
                        <Typography key={index.toString()} variant="body2"
                            style={{ margin: '2px 0px 0px 0px' }}
                            children={`${index + 1}. ${question.question} 
                            ${JSON.stringify(question.resultAnswers[0].rightAnswer)}
                            ${JSON.stringify(question.resultAnswers[0].id)}
                            ${JSON.stringify(question.resultAnswers[0].example)}
                            ${JSON.stringify(question.resultAnswers[1].rightAnswer)}
                            ${JSON.stringify(question.resultAnswers[1].id)}
                            ${JSON.stringify(question.resultAnswers[1].example)}
                            ${JSON.stringify(question.resultAnswers[2].rightAnswer)}
                            ${JSON.stringify(question.resultAnswers[2].id)}
                            ${JSON.stringify(question.resultAnswers[2].example)}
                            ${JSON.stringify(question.resultAnswers[3].rightAnswer)}
                            ${JSON.stringify(question.resultAnswers[3].id)}
                            ${JSON.stringify(question.resultAnswers[3].example)}
                            `}
                        />}
                        
                    control={<Checkbox 
                        style={{ marginLeft: '0px'}} 
                    />}
                />
            );
        })
    }


    return (
        <div>
            {result == null ? <CircularProgress /> :             
            <div>
                <h1>시험결과정보</h1>
                <h3>시험과목: {result.testSubject === "0" ? "정보처리기사" : ""}</h3>
                <h3>회차정보: {result.inning}</h3>
                <h3>맞은갯수: {result.rightCount}</h3>
                <h3>틀린갯수: {result.wrongCount}</h3>
                <FormGroup>
                    {initItemsTemplate()}
                </FormGroup>

                <h3>지난 시험결과</h3>
            </div>
            }
        </div>
    );
}