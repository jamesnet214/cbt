import React from 'react';
import { styled } from '@mui/material/styles';
import { load } from 'js-yaml';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid  from '@mui/material/Grid';
import Paper  from '@mui/material/Paper';
import Typography  from '@mui/material/Typography';
import CbtStepper from '../components/cbt/CbtStepper';
import ResetIconButton from '../components/cbt/ResetIconButton';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Cbt(props) {
    const [text, setText] = React.useState(null);
    const [answer, setAnswer] = React.useState(-1);
    const [innings, setInnings] = React.useState([]);
    const [subjects, setSubjects] = React.useState([]);
    const [testTypes, setTestTypes] = React.useState([]);
    const [stepCompleted, setStepCompleted] = React.useState(false);
    const cbtId = props.cbtId;
    
    let currentSubject = '';

    React.useEffect(() => {
        console.log('cbt useEffect loaded');

        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.yaml')
        .then(res => res.blob())
        .then(blob => blob.text())
        .then(res => {
            setText(load(res));
        });

        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/innings.yaml')
            .then(res => res.blob())
            .then(blob => blob.text())
            .then(res => {
                console.log('inning loaded', cbtId);
                let _innings = load(res).filter(x => x.testId == cbtId);
                setInnings(_innings);
            });

        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/subjects.yaml')
            .then(res => res.blob())
            .then(blob => blob.text())
            .then(res => {
                let _subjects = load(res).filter(x => x.testId == cbtId);
                setSubjects(_subjects);
            });

        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/testTypes.yaml')
            .then(res => res.blob())
            .then(blob => blob.text())
            .then(res => {
                let _testTypes = load(res).filter(x => x.testId == cbtId);
                setTestTypes(_testTypes);
            });
    }, []);

    function answerChecked(event, id) {

    }
      
    function initItemsTemplate(items) {
        return items.map((answer, i) => {
            return (
                <Box key={i}>
                    <Box className="papar-answer-content" style={{margin: '0px 15px 0px 15px'}}>
                        <FormControlLabel
                            label={
                                <Typography key={i.toString()} variant="body2"
                                    style={{ margin: '2px 0px 0px 0px' }}
                                    children={`${answer.example}`}/>}
                            control={<Checkbox 
                                         defaultChecked={answer.isChecked}
                                         style={{ marginLeft: '0px'}} 
                                         onChange={(event) => answerChecked(event, answer.id)}/>}/>
                        
                    </Box>
                </Box>
            );
        })
    }

    function getAnswer(answers) {
        let answer = -1;
        answers.map((x, i) => {
            if(x.isAnswer === 'y') {
                answer = i + 1;
            }
        });
        return answer;
    }

    function getSubject(subjectName) {
        currentSubject = subjectName;
        return subjectName;
    }

    function start() {
        setStepCompleted(true);
    }

    function restart() {
        setStepCompleted(false);
    }

    return (
        <Box style={{ minWidth: '200px', maxWidth: '600px', borderRight: '1px solid #dddddd', backgroundColor: '#f7f7f7' }}>

            <div style={{backgroundColor: 'rgba(255, 255, 255, 0.95)', borderBottom: '1px solid #dddddd', padding: '14px 24px 14px 24px', position: 'sticky', top: 0, zIndex: 9999 }}>
                <Grid container>
                    <Grid xs>
                        <Typography variant="h6" children={props.title}/>
                    </Grid>
                    <Grid>
                        {stepCompleted ? <ResetIconButton onClick={restart}/> : null}
                    </Grid>
                    
                </Grid>
            </div>

                {!stepCompleted ? 
                    <Box margin={3}>
                        <CbtStepper 
                            cbtId={cbtId}
                            innings={innings}
                            subjects={subjects}
                            testTypes={testTypes}
                            start={start}/>
                    </Box>
                : null}

            {stepCompleted ?
                <Box margin={0, 0, 0, 0}>
                    {text == null ? null
                    :
                        text.map((item, i) => {
                            return (
                                <Box key={item.seq}>
                                    {currentSubject != item.subjectName ?
                                        <Box style={{ margin: '10px 25px 0px 0px', textAlign: 'right' }}>
                                            <Typography 
                                                children={`과목: ${getSubject(item.subjectName)}`}
                                                variant="caption"/>
                                        </Box>
                                        : null
                                    }
                                    <div className="paper-question"
                                        variant="outlined">
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
                                        <Box>
                                            {initItemsTemplate(item.answers)}
                                        </Box>
                                        <Box style={{ height: '10px'}}/>
                                        <Box className="papar-question-content" style={{display: 'none'}}>
                                            <Typography>
                                                정답 <span style={{color: '#ffffff'}}>{getAnswer(item.answers)}</span>
                                            </Typography>
                                        </Box>
                                    </div>
                                </Box>
                            );
                        })
                    }
                </Box>
            : null}
        </Box>
    );
}
