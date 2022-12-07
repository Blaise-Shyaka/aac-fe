import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import {
  themeContainer, themeTitle, themeSubtitle, themeTextContainer, themeTextWrapper,
} from './styles';

function Theme() {
  return (
    <Box
      sx={themeContainer}
    >
      <Box sx={themeTextContainer}>
        <Box sx={themeTextWrapper}>
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
            series of inter-related football-themed events over a
            6-day duration to be staged in Kigali city, Rwanda.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Theme;
