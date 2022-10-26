import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { themeContainer, themeTitle, themeSubtitle } from './styles';

function Theme() {
  return (
    <Box
      sx={themeContainer}
    >
      <Box sx={{ opacity: '0.8', backgroundColor: '#fff', height: '100%' }}>
        <Typography
          sx={themeTitle}
        >
          CHARTING A NEW PATH FOR AFRICAN FOOTBALL SECTOR
        </Typography>
        <Divider sx={{ backgroundColor: '#000', width: '85%', margin: '0 auto' }} />
        <Typography
          sx={themeSubtitle}
        >
          The Arsenal Africa Convention (AAC) 2023 is a
          series of inter-related soccer-themed events over a
          6-day duration to be staged in Kigali city, Rwanda.
        </Typography>
      </Box>
    </Box>
  );
}

export default Theme;
