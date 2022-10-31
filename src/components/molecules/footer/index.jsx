import React from 'react';
import { Box } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from '../../../assets/aac-dark-gray.svg';
import {
  footerContainer, logoContainer, logoStyles, socialMediaContainer, iconStyles,
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
          <FacebookRoundedIcon sx={iconStyles} onClick={() => window.open('https://web.facebook.com/profile.php?id=100084316916984', '_blank', 'noopener', 'noreferrer')} />
        </Box>
        <Box>
          <InstagramIcon sx={iconStyles} onClick={() => window.open('https://instagram.com/aa_convention', '_blank', 'noopener', 'noreferrer')} />
        </Box>
        <Box>
          <TwitterIcon sx={iconStyles} onClick={() => window.open('https://twitter.com/aa_convention', '_blank', 'noopener', 'noreferrer')} />
        </Box>
        <Box>
          <YouTubeIcon sx={iconStyles} onClick={() => window.open('https://www.youtube.com/channel/UCafMm8xFPkehGVC4sYjAFig', '_blank', 'noopener', 'noreferrer')} />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
