import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BasicInfo from "./components/BasicInfo"
import Kyc from './components/Kyc';
import OrganizationInfo from "./components/OrganizationInfo"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    margin: "auto",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  backbutton: {
    position: 'absolute',
    top: 80,
    left: 0,
  },
  nextbutton: {
    position: 'absolute',
    top: 80,
    right: 0,
  },
  btnContainer: {
    position: 'relative',
  },
  finishDiv: { 
    padding: 50,
    textAlign: 'center'
  }
}));

function getSteps() {
  return ['Basic Details', 'KYC Details', 'Organization Details'];
}

export default function HorizontalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = getSteps();

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (<BasicInfo apiData={props.apiData} />);
      case 1:
        return <Kyc apiData={props.apiData} />;
      case 2:
        return <OrganizationInfo apiData={props.apiData} />;
      default:
        return 'Unknown step';
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="formContent">
        {activeStep === steps.length ? (
          <div className={classes.finishDiv}>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>
            <div className={classes.btnContainer}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backbutton}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.nextbutton}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
