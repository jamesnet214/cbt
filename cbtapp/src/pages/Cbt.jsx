import React from 'react';
import { styled } from '@mui/material/styles';
import { load } from 'js-yaml';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack  from '@mui/material/Stack';
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
    const history = useHistory();

    const [text, setText] = React.useState(null); 
    const [answer, setAnswer] = React.useState(-1);
    const [innings, setInnings] = React.useState([]);
    const [subjects, setSubjects] = React.useState([]);
    const [testTypes, setTestTypes] = React.useState([]);
    const [stepCompleted, setStepCompleted] = React.useState(false);
    const cbtId = props.cbtId;
    
    let currentSubject = '';

    React.useEffect(() => {

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

    function start() {
        var testType = testTypes.find(x => x.isChecked);
        var allowSubjects = subjects.filter(x=>x.isChecked).map((s) => { return s.sort } );
        sessionStorage.setItem('testTypes', testType.count);
        sessionStorage.setItem('subjects', allowSubjects);
        history.push(`/cbt/test/id=${cbtId}`);
    }

    return (
        <div className="frame-content">
            <Box style={{ minWidth: '200px', maxWidth: '600px', borderRight: '1px solid #dddddd', backgroundColor: '#f7f7f7' }}>
                <div style={{backgroundColor: 'rgba(255, 255, 255, 0.95)', borderBottom: '1px solid #dddddd', padding: '4px 24px 4px 24px', height: '36px', position: 'sticky', top: 0, zIndex: 9999 }}>
                    <Stack direction="row">
                        <Typography variant="h7" children={props.title} style={{marginTop: '8px'}}/>
                    </Stack>
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
            </Box>
        </div>
    );
}
