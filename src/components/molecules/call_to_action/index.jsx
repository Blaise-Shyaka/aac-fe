import React from 'react';
import { Box, Typography } from '@mui/material';
import { ctaStyles, ctaText } from './styles';

function CallToAction() {
  return (
    <Box sx={ctaStyles}>
      <Typography sx={ctaText}>Be part of the biggest football meeting in Africa</Typography>
    </Box>
  );
}

export default CallToAction;
