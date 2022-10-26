import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { heroStyles, heroTextStyles, heroImageStyles } from './styles';
import ArsenalPlayers from '../../../assets/arsenal-players.png';

const registerBtnStyle = {
  backgroundColor: '#EB412A',
  borderRadius: '60px',
  width: '134px',
  height: '52px',
  marginTop: '1rem',
  color: '#fff',
};

function Hero() {
  return (
    <Box sx={heroStyles}>
      <Box sx={heroImageStyles}>
        <Box
          component="img"
          src={ArsenalPlayers}
          sx={{ width: '80%', marginTop: '4rem' }}
        />
      </Box>
      <Box>
        <Typography sx={heroTextStyles}>ARSENAL AFRICA CONVENTION 2023 - KIGALI</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button sx={registerBtnStyle}>Register</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
