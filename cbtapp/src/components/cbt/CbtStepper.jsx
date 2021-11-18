import React from 'react';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import NextButton from './NextButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import BackButton from './BackButton';
import InningCheckboxs from './InningCheckboxs';
import SubjectCheckboxs from './SubjectCheckboxs';
import TestCountSelector from './TestCountSelector';

export default function CbtStepper(props) {
    const search = useLocation().search;
    const cbtId = new URLSearchParams(search).get('id');
    const [activeStep, setActiveStep] = React.useState(0);
    const [firstChecked, setFirstChecked] = React.useState(false);
    const [secondChecked, setSecondChecked] = React.useState(false);

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
                    <InningCheckboxs required={firstRequired}/>
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
                    <SubjectCheckboxs required={secondRequired}/>
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
                        <Typography children="출제 문제 갯수를 선택해주세요." variant="h6"/>
                        <Typography children="몇 문제를 만들어 테스트 하시겠습니까?" variant="caption"/>
                    </Box>
                    <TestCountSelector/>
                    <Box sx={{ mb: 2 }}>
                        <NextButton 
                            onClick={handleNext}
                            children="Finish"/>
                        <BackButton onClick={handleBack}/>
                    </Box>
                </StepContent>
            </Step>

      </Stepper>
    </Box>
  );
}