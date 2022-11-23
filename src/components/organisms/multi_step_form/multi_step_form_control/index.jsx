import React from 'react';
import { Button, Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { outlinedBtnStyles, containedBtnStyles, formControlContainerStyles } from './styles';

function MultiStepFormControl({
  previousBtnHandler,
  nextBtnHandler,
  skippable,
  currentStep,
  setStep,
  numberOfSteps,
  submitBtn,
  handleSubmit,
  completedSteps,
  setCompletedSteps,
  nextBtnDisabled,
}) {
  const previousStep = () => {
    const currentCompletedSteps = [...completedSteps];
    currentCompletedSteps.pop();
    setCompletedSteps(currentCompletedSteps);
    setStep(currentStep - 1);
  };

  const nextStep = () => {
    const currentCompletedSteps = [...completedSteps];
    currentCompletedSteps.push(currentStep);
    setCompletedSteps(currentCompletedSteps);
    setStep(currentStep + 1);
  };

  const handlePrevious = () => {
    previousBtnHandler();
    previousStep();
  };

  const handleSkip = () => {
    nextStep();
  };

  const handleNext = () => {
    nextBtnHandler();
    nextStep();
  };

  return (
    <Box display="flex" justifyContent="space-between" sx={formControlContainerStyles}>
      {currentStep > 0 && (
      <Button
        variant="outlined"
        size="large"
        sx={outlinedBtnStyles}
        onClick={handlePrevious}
      >
        Previous
      </Button>
      )}
      { skippable && (
      <Button
        variant="outlined"
        size="large"
        sx={outlinedBtnStyles}
        onClick={handleSkip}
      >
        Skip
      </Button>
      )}
      {/* If it is the last step, hide the button "Next" */}
      { (numberOfSteps > currentStep + 1) && <Button variant="contained" disabled={nextBtnDisabled} size="large" sx={containedBtnStyles} onClick={handleNext}>Next</Button>}
      {
      (numberOfSteps === currentStep + 1 && submitBtn) && (
        <Button variant="contained" size="large" sx={containedBtnStyles} onClick={handleSubmit}>Submit</Button>
      )
      }
    </Box>
  );
}

export default MultiStepFormControl;

MultiStepFormControl.propTypes = {
  previousBtnHandler: PropTypes.func,
  nextBtnHandler: PropTypes.func,
  skippable: PropTypes.bool,
  numberOfSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
  submitBtn: PropTypes.bool,
  handleSubmit: PropTypes.func,
  completedSteps: PropTypes.arrayOf(PropTypes.number).isRequired,
  setCompletedSteps: PropTypes.func.isRequired,
  nextBtnDisabled: PropTypes.bool,
};

MultiStepFormControl.defaultProps = {
  previousBtnHandler: () => {},
  nextBtnHandler: () => {},
  skippable: false,
  submitBtn: true,
  handleSubmit: () => {},
  nextBtnDisabled: false,
};
