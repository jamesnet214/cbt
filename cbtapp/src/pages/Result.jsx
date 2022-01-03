import React from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
                console.log('푼 문제 확인:', response.data);
                
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

    function initItemsTemplate(item) {
        return item.resultAnswers.map((answer, index) => {
            answer.isChecked = false;
            answer.id = index;

            
            return (                
                <FormControlLabel key={index} className="papar-answer-content" style={{margin: '0px 15px 0px 15px'}}
                    label={
                        <Typography key={index.toString()} variant="body2"
                            style={{ margin: '2px 0px 0px 0px' }}
                            children={`${index + 1}. ${answer.example}`} />}

                    control={<Checkbox
                        defaultChecked 
                        style={{ marginLeft: '0px' }}
                    />}
                />
            );
        })
    }


    return (
        <div>
            {result == null ? <CircularProgress /> :             
            <div>
                <h1 style={{marginLeft: '20px'}}>시험결과정보</h1>
                <h3 style={{marginLeft: '20px'}}>시험과목: {result.testSubject === "0" ? "정보처리기사" : ""}</h3>
                <h3 style={{marginLeft: '20px'}}>회차정보: {result.inning}</h3>
                <h3 style={{marginLeft: '20px'}}>맞은갯수: {result.rightCount}</h3>
                <h3 style={{marginLeft: '20px'}}>틀린갯수: {result.wrongCount}</h3>
                {
                    questions.map((item, i) => 
                    {
                        return(
                            <div className="paper-question"
                            style={{
                                border: ''
                            }}>
                            <Box className="papar-question-content">
                                <Typography variant="body1" children={`${i + 1}. ${item.question}`}/>
                            </Box>
                            <Box>
                                {item.infos != null ? 
                                    item.infos.map((info, i) => {
                                        return (
                                            <Box key={i}>
                                                <Box className="papar-question-content">
                                                    <img src={info.src} style={{maxWidth: '400px'}}/>
                                                </Box>
                                            </Box>
                                        );
                                    })
                                    : null
                                }
                            </Box>
                            <FormGroup>
                                {initItemsTemplate(item)}
                                </FormGroup>
                            </div>
                        );
                    }

                )};
                <h3>지난 시험결과</h3>
            </div>
        }
        </div>
    );
}