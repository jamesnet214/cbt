import React from 'react';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import NextButton from './NextButton';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import BackButton from './BackButton';
import InningCheckboxs from './InningCheckboxs';
import SubjectCheckboxs from './SubjectCheckboxs';
import TestTypeSelector from './TestTypeSelector';

export default function CbtStepper(props) {
    const search = useLocation().search;
    const cbtId = props.cbtId;
    const inning = props.innings;
    const [activeStep, setActiveStep] = React.useState(0);
    const [firstChecked, setFirstChecked] = React.useState(false);
    const [secondChecked, setSecondChecked] = React.useState(false);

    React.useEffect(() => {
        console.log('cbtstepper useEffect loaded');
    }, []);

    const firstRequired = (required) => {
        setFirstChecked(required)
        console.log('firstRequired', required);
        console.log('lucas cbtid', cbtId);
        console.log('lucas inning', inning);
    }

    const secondRequired = (required) => {
        setSecondChecked(required)
        console.log('secondRequired', required);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const firstStepClick = () => {
        handleNext();          
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getSelectedInning = () => {
        var inning = props.innings.find(x => x.isChecked);
        var count = props.innings.filter(x => x.isChecked).length; 
        return (
            <Stack direction="row" spacing={1}>
                <Chip size="small" label="회차" color="success" variant="outlined" />
                <Typography variant="body1" style={{ padding: '0px 0px 0px 10px' }}>{`${inning.year}년 ${inning.inning}회`}</Typography>
                <Typography variant="caption" style={{ marginTop: '2px' }}>{count > 1 ? ` 포함 ${count}회차` : '단일 회차'}</Typography> 
            </Stack>
        );
    }

    const getSelectedSubject = () => {
        var subject = props.subjects.find(x => x.isChecked);
        var count = props.subjects.filter(x => x.isChecked).length; 
        return (
            <Stack direction="row" spacing={1} style={{marginTop: '15px'}}>
                <Chip size="small" label="과목" color="success" variant="outlined"/>
                <Typography variant="body1" style={{ padding: '0px 0px 0px 10px' }}>{`${subject.subjectName}`}</Typography>
                <Typography variant="caption" style={{ marginTop: '2px' }}>{count > 1 ? ` 포함 ${count}과목` : '단일 과목'}</Typography> 
            </Stack>
        );
    }

    const getTestCount = () => {
        var testType = props.testTypes.find(x => x.isChecked);
        return (
            <Stack direction="row" spacing={1} style={{marginTop: '15px'}}>
                <Chip size="small" label="문항수" color="success" variant="outlined"/>
                <Typography variant="body1">{`총 ${testType.count}문제`}</Typography>
                {/* <Typography variant="caption" style={{ marginTop: '2px' }}>{testType.comment}</Typography>  */}
            </Stack>
        );
    }

  return (
    <Box sx={{ maxWidth: 538, }}>
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step key="1">
                <StepLabel children="회차 선택"/>
                <StepContent>
                    <Box style={{marginTop: '4px', marginBottom: '14px'}}>
                        <Typography children="회차를 선택해주세요." variant="h6"/>
                        <Typography children="여러 회차를 선택할 수도 있습니다." variant="caption"/>
                    </Box>
                    <InningCheckboxs 
                        cbtId={cbtId} 
                        innings={props.innings} 
                        required={firstRequired}/>
                    <Box sx={{ mb: 2 }}>
                        <NextButton 
                            disabled={!firstChecked}
                            onClick={firstStepClick}/>
                        <BackButton 
                            disabled={true}
                            onClick={handleBack}/>
                    </Box>
                </StepContent>
            </Step>
            <Step key="2">
                <StepLabel children="과목 선택"/>
                <StepContent>
                    <Box style={{marginTop: '4px', marginBottom: '14px'}}>
                        <Typography children="과목을 선택해주세요." variant="h6"/>
                        <Typography children="원하는 과목만 선택할 수도 있습니다." variant="caption"/>  
                    </Box>
                    <SubjectCheckboxs 
                        cbtId={cbtId} 
                        subjects={props.subjects} 
                        required={secondRequired}/>
                    <Box sx={{ mb: 2 }}>
                        <NextButton 
                            disabled={!secondChecked}
                            onClick={handleNext}/>
                        <BackButton onClick={handleBack}/>
                    </Box>
                </StepContent>
            </Step>
            <Step key="3">
                <StepLabel children="출제 문항수"/>
                <StepContent>
                    <Box style={{marginTop: '4px', marginBottom: '14px'}}>
                        <Typography children="문제 개수를 선택해주세요." variant="h6"/>
                        {/* <Typography children="몇 문제를 만들어 테스트 하시겠습니까?" variant="caption"/> */}
                    </Box>
                    <TestTypeSelector 
                        cbtId={cbtId}
                        testTypes={props.testTypes}/>
                    <Box sx={{ mb: 2 }}>
                        <NextButton 
                            onClick={handleNext}
                            children="Finish"/>
                        <BackButton onClick={handleBack}/>
                    </Box>
                </StepContent>
            </Step>
      </Stepper>
      {activeStep === 3 && (
        <div style={{ backgroundColor: '#ffffff', 
                      borderTop: '1px solid #dddddd', 
                      borderLeft: '1px solid #dddddd', 
                      borderRight: '1px solid #dddddd', 
                      borderRadius: 0, 
                      marginTop: 20,
                      marginBottom: 20,
                      padding: '20px 20px 20px 20px',}}>
          {getSelectedInning()}
          {getSelectedSubject()}
          {getTestCount()}
          <br />
          <Button variant="contained" size="small" onClick={props.start} sx={{ mt: 1, mr: 1 }}>
            시작
          </Button>
          <Button onClick={handleReset} size="small" sx={{ mt: 1, mr: 1 }} style={{color: '#ff5233'}}>
            초기화
          </Button>
        </div>
      )}
    </Box>
  );
}