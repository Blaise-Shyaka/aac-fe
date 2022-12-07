import React from 'react';
import { Box, Typography } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import ProgressBar from './progress_bar';

function MultiStepForm({ steps, completedSteps, currentStep }) {
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
  completedSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};
