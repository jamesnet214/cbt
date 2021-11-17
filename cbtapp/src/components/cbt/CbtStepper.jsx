import * as React from 'react';
import {useLocation} from "react-router-dom";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NextButton from './NextButton';
import BackButton from './BackButton';
import InningCheckbox from './InningCheckbox';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function CbtStepper(props) {
    const search = useLocation().search;
    const cbtId = new URLSearchParams(search).get('id');
    const [activeStep, setActiveStep] = React.useState(0);
    const [firstChecked, setFirstChecked] = React.useState(false);

    const firstRequired = (required) => {
        setFirstChecked(required)
        console.log('firstRequired', required);
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
                    <InningCheckbox required={firstRequired}/>
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
                    <Stack sx={{ mb: 2 }}>
                        <FormControlLabel
                            label={<Typography children="소프트웨어 설계" variant="subtitle2"/>}
                            control={<Checkbox size="small" style={{padding: 6}}/>}/>
                        <FormControlLabel
                            label={<Typography children="소프트웨어 개발" variant="subtitle2"/>}
                            control={<Checkbox size="small" style={{padding: 6}}/>}/>
                        <FormControlLabel
                            label={<Typography children="데이터베이스 구축" variant="subtitle2"/>}
                            control={<Checkbox size="small" style={{padding: 6}}/>}/>
                        <FormControlLabel
                            label={<Typography children="프로그래밍 언어활용" variant="subtitle2"/>}
                            control={<Checkbox size="small" style={{padding: 6}}/>}/>
                        <FormControlLabel
                            label={<Typography children="정보시스템 구축관리" variant="subtitle2"/>}
                            control={<Checkbox size="small" style={{padding: 6}}/>}/>
                    </Stack>
                    <Box sx={{ mb: 2 }}>
                        <NextButton onClick={handleNext}/>
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
                    <Stack sx={{ mb: 2 }}>

                        <RadioGroup
                            aria-label="gender"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel value="5" control={<Radio  size="small" style={{padding: 6}}/>} label="5 (가볍게)" />
                            <FormControlLabel value="10"  control={<Radio size="small" style={{padding: 6}}/>} label="20 (적당히)" />
                            <FormControlLabel value="100"  control={<Radio size="small" style={{padding: 6}}/>} label="100 (진지하게)" />
                          </RadioGroup>
                    </Stack>
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