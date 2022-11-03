import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  desktopHeroStyle,
  desktopHeroTextWrapper,
  heroStyles,
  heroTextStyles,
  heroImageStyles,
  heroText,
  playersStyles,
  playersWrapper,
} from './styles';
import ArsenalPlayers from '../../../assets/arsenal-players.avif';
import registrationOpenSoon from '../../../assets/registration-open-soon.avif';

// const registerBtnStyle = {
//   backgroundColor: '#EB412A',
//   borderRadius: '60px',
//   width: '134px',
//   height: '52px',
//   marginTop: '1rem',
//   color: '#fff',
//   fontFamily: 'Montserrat',
//   '@media (min-width: 744px)': {
//     width: '232px',
//     height: '64px',
//     fontSize: '24px',
//     padding: '2.5rem 3rem',
//   },
//   '@media (min-width: 1024px)': {
//     fontSize: '16px',
//     padding: '1rem 2rem',
//   },
// };

function Hero() {
  return (
    <>
      <Box sx={heroStyles}>
        <Box sx={heroImageStyles}>
          <Box
            component="img"
            src={ArsenalPlayers}
            sx={playersStyles}
            alt="Arsenal players"
          />
        </Box>
        <Box>
          <Typography sx={heroTextStyles}>ARSENAL AFRICA CONVENTION 2023 - KIGALI</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={registrationOpenSoon}
              sx={{ width: '65%', marginTop: '1rem' }}
              alt="Registration open soon"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={desktopHeroStyle}>
        <Box sx={desktopHeroTextWrapper}>
          <Box sx={heroText}>
            <Typography sx={heroTextStyles}>ARSENAL AFRICA CONVENTION 2023 - KIGALI</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src={registrationOpenSoon}
                sx={{ width: '65%', marginTop: '1rem' }}
                alt="Registration open soon"
              />
            </Box>
          </Box>
        </Box>
        <Box sx={playersWrapper}>
          <Box
            component="img"
            src={ArsenalPlayers}
            sx={playersStyles}
            alt="Arsenal players"
          />
        </Box>
      </Box>
    </>
  );
}

export default Hero;
