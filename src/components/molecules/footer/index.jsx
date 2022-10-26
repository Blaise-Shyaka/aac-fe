import React from 'react';
import { Box } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from '../../../assets/aac-dark-gray.svg';
import {
  footerContainer, logoContainer, logoStyles, socialMediaContainer,
} from './styles';

function Footer() {
  return (
    <Box sx={footerContainer}>
      <Box sx={logoContainer}>
        <Box
          component="img"
          src={Logo}
          alt="AAC Logo"
          sx={logoStyles}
        />
      </Box>
      <Box sx={socialMediaContainer}>
        <Box>
          <FacebookRoundedIcon />
        </Box>
        <Box>
          <InstagramIcon />
        </Box>
        <Box>
          <TwitterIcon />
        </Box>
        <Box>
          <YouTubeIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
