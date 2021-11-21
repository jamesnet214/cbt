import React from 'react';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import NextButton from './NextButton';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
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
    const [activeStep, setActiveStep] = React.useState(0);
    const [firstChecked, setFirstChecked] = React.useState(false);
    const [secondChecked, setSecondChecked] = React.useState(false);

    React.useEffect(() => {
        console.log('cbtstepper useEffect loaded');
    });

    const firstRequired = (required) => {
        setFirstChecked(required)
        console.log('firstRequired', required);
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
                <StepLabel children="문제 출제"/>
                <StepContent>
                    <Box style={{marginTop: '4px', marginBottom: '14px'}}>
                        <Typography children="출제 문제 유형을 선택해주세요." variant="h6"/>
                        <Typography children="몇 문제를 만들어 테스트 하시겠습니까?" variant="caption"/>
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
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>모든 스텝 완료</Typography>
          {props.innings.filter(x => x.isChecked).map(x => <div>{x.year + '년 - ' + x.inning + '회'}</div>)}
          {props.subjects.filter(x => x.isChecked).map(x => <div>{x.subjectName}</div>)}
          {props.testTypes.filter(x => x.isChecked).map(x => <div>{`(${x.count}) ${x.comment}`}</div>)}
          <Button variant="contained" size="small" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            시작
          </Button>
          <Button onClick={handleReset} size="small" sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}