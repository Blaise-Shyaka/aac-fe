import React from 'react';
import { Button, Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { outlinedBtnStyles, containedBtnStyles, formControlContainerStyles } from './styles';

function MultiStepFormControl({
  previousBtnHandler,
  nextBtnHandler,
  skippable,
  handleSkip,
  hidePrevious,
  customNextBtnText,
}) {
  return (
    <Box display="flex" justifyContent="space-between" sx={formControlContainerStyles}>
      {!hidePrevious && (
      <Button
        variant="outlined"
        size="large"
        sx={outlinedBtnStyles}
        onClick={previousBtnHandler}
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
      <Button variant="contained" size="large" sx={containedBtnStyles} onClick={nextBtnHandler}>{customNextBtnText || 'Next'}</Button>
    </Box>
  );
}

export default MultiStepFormControl;

MultiStepFormControl.propTypes = {
  previousBtnHandler: PropTypes.func,
  nextBtnHandler: PropTypes.func,
  handleSkip: PropTypes.func,
  skippable: PropTypes.bool,
  hidePrevious: PropTypes.bool,
  customNextBtnText: PropTypes.string,
};

MultiStepFormControl.defaultProps = {
  previousBtnHandler: () => {},
  nextBtnHandler: () => {},
  handleSkip: () => {},
  skippable: false,
  hidePrevious: false,
  customNextBtnText: '',
};
