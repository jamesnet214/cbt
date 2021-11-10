import * as React from 'react';
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

const steps = [
  {
    label: '회차 선택',
    description: `회차를 선택해주세요. 여러 회차를 선택할 수도 있습니다.`,
  },
  {
    label: '과목 선택',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: '문제 선택',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function CbtStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step key="1">
                <StepLabel children="회차 선택"/>
                <StepContent>
                    <Typography children="회차를 선택해주세요." variant="body2"/>
                    <Typography children="여러 회차를 선택할 수도 있습니다." variant="caption"/>
                    <InningCheckbox cbtId={props.cbtId}/>
                    <Box sx={{ mb: 2 }}>
                        <NextButton onClick={handleNext}/>
                        <BackButton disabled={true}
                                    onClick={handleBack}/>
                    </Box>
                </StepContent>
            </Step>
            <Step key="2">
                <StepLabel children="과목 선택"/>
                <StepContent>
                    <Typography children="과목을 선택해주세요. 원하는 과목만 선택할 수도 있습니다."/>
                    <Stack sx={{ mb: 2 }}>
                        <FormControlLabel
                            label="소프트웨어 설계"
                            control={<Checkbox checked={true}/>}/>
                        <FormControlLabel
                            label="소프트웨어 개발"
                            control={<Checkbox checked={true}/>}/>
                        <FormControlLabel
                            label="데이터베이스"
                            control={<Checkbox checked={true}/>}/>
                        <FormControlLabel
                            label="프로그래밍"
                            control={<Checkbox checked={true}/>}/>
                        <FormControlLabel
                            label="네트워크"
                            control={<Checkbox checked={true}/>}/>
                    </Stack>
                    <Box sx={{ mb: 2 }}>
                        <NextButton onClick={handleNext}/>
                        <BackButton onClick={handleBack}/>
                    </Box>
                </StepContent>
            </Step>

        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}


      </Stepper>
    </Box>
  );
}