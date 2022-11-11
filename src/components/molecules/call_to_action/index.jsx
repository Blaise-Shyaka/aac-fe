import React from 'react';
import { Box, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { ctaStyles, ctaText, registerBtn } from './styles';
import RoundedButton, { FILL_COLORS } from '../rounded_button';

function CallToAction() {
  const history = useHistory();

  return (
    <Box sx={ctaStyles}>
      <Typography sx={ctaText}>Be part of the biggest African football gathering</Typography>
      <RoundedButton
        fill={FILL_COLORS.secondary}
        style={registerBtn}
        clickHandler={() => history.push('/register')}
      >
        Register
      </RoundedButton>
    </Box>
  );
}

export default CallToAction;
