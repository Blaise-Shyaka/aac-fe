import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Logo from '../../../assets/aac-dark-gray.svg';
import AACWhiteLogo from '../../../assets/aac-white-logo.svg';
import MobileMenu from '../../../assets/carbon_overflow-menu-horizontal.svg';
import {
  desktopNavbar, desktopMenu, navBarStyles, logoStyles, mobileMenuIcon,
} from './styles';

function NavigationBar() {
  const [backgroundColor, setBackgroundColor] = useState('none');
  // const [menuLinksColor, setMenuLinksColor] = useState('#000');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const HERO_SECTION_BOTTOM_SCROLL_POSITION = 600;
      if (window.scrollY >= HERO_SECTION_BOTTOM_SCROLL_POSITION) {
        setBackgroundColor('#000');
        // setMenuLinksColor('#fff');
      } else {
        setBackgroundColor('none');
        // setMenuLinksColor('#000');
      }
    });
  });

  return (
    <>
      <Box sx={navBarStyles}>
        <Box
          component="img"
          src={Logo}
          alt="AAC Logo"
          sx={logoStyles}
        />
        <Box>
          <Box
            component="img"
            src={MobileMenu}
            alt="Mobile device menu"
            sx={mobileMenuIcon}
          />
        </Box>
      </Box>
      <Box sx={{ ...desktopNavbar, backgroundColor }}>
        <Box
          component="img"
          src={AACWhiteLogo}
          alt="AAC Logo"
          sx={logoStyles}
        />
        <Box sx={desktopMenu}>
          {/* <Typography sx={{ ...menuLinks, color: menuLinksColor }}>HOME</Typography>
          <Typography sx={{ ...menuLinks, color: menuLinksColor }}>ABOUT</Typography>
          <Typography sx={{ ...menuLinks, color: menuLinksColor }}>EVENTS</Typography> */}
        </Box>
      </Box>
    </>
  );
}

export default NavigationBar;
