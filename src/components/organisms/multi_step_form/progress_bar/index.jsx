import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Avatar, Box, Divider } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

function ProgressBar({ steps = [], completedSteps = [], currentStep }) {
  const stepIsCompleted = (step) => completedSteps.includes(steps.indexOf(step));

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: '0.5rem' }}
    >
      {
        steps.map((step) => {
          const completedStep = stepIsCompleted(step);
          const stepBgColor = (() => {
            if (completedStep) {
              return 'green';
            }

            if (steps.indexOf(step) === currentStep) {
              return '#EB412A';
            }

            return '#888';
          })();
          const stepTextColor = completedStep ? '#fff' : '#eee';

          return (
            <>
              <Avatar
                key={step.name}
                sx={{ backgroundColor: stepBgColor, color: stepTextColor }}
              >
                {completedStep ? <DoneIcon /> : steps.indexOf(step) + 1}
              </Avatar>
              {/*
                The divider is only included when the step is not the last.
                Also, the width is divided equally between divider items.
                95% of the width is divided between all the divider items
              */}
              { (steps.indexOf(step) !== steps.length - 1) && <Divider color={completedStep && 'green'} sx={{ width: `${95 / steps.length}%` }} />}
            </>
          );
        })
      }
    </Box>
  );
}

export default ProgressBar;

ProgressBar.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
  completedSteps: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentStep: PropTypes.number.isRequired,
};
