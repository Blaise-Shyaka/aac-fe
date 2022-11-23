import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import ProgressBar from './progress_bar';
import MultiStepFormControl from './multi_step_form_control';

function MultiStepForm({ steps, nextBtnDisabled }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  return (
    <Box>
      <ProgressBar steps={steps} completedSteps={completedSteps} currentStep={currentStep} />
      <Typography
        display="flex"
        justifyContent="center"
        sx={{
          fontFamily: 'Gotham Condensed, Montserrat, sans-serif',
          fontSize: '2rem',
          fontWeight: '500',
          textTransform: 'uppercase',
        }}
      >
        {steps[currentStep].name}
      </Typography>
      { steps[currentStep].component }
      <MultiStepFormControl
        numberOfSteps={steps.length}
        currentStep={currentStep}
        setStep={setCurrentStep}
        completedSteps={completedSteps}
        setCompletedSteps={setCompletedSteps}
        skippable={steps[currentStep].skippable}
        nextBtnDisabled={nextBtnDisabled}
        nextBtnHandler={steps[currentStep].nextBtnHandler}
        handleSubmit={steps[currentStep].handleSubmit}
      />
    </Box>
  );
}

export default MultiStepForm;

MultiStepForm.propTypes = {
  steps: PropTypes
    .arrayOf(PropTypes
      .shape({
        name: PropTypes.string,
        component: PropTypes.node,
        skippable: PropTypes.bool,
        nextBtnHandler: PropTypes.func,
        handleSubmit: PropTypes.func,
      }))
    .isRequired,
  nextBtnDisabled: PropTypes.bool,
};

MultiStepForm.defaultProps = {
  nextBtnDisabled: false,
};
