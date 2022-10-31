import React from 'react';
import { Box, Typography } from '@mui/material';
import { ctaStyles, ctaText } from './styles';
// import RoundedButton, { FILL_COLORS } from '../rounded_button';

function CallToAction() {
  return (
    <Box sx={ctaStyles}>
      <Typography sx={ctaText}>Be part of the biggest African football gathering</Typography>
      {/* <RoundedButton
      fill={FILL_COLORS.secondary}
      style={registerBtn}>Register</RoundedButton> */}
    </Box>
  );
}

export default CallToAction;
