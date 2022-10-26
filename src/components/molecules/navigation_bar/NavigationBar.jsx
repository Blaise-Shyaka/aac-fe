import React from 'react';
import { Box } from '@mui/material';
import Logo from '../../../assets/aac-dark-gray.svg';
import MobileMenu from '../../../assets/carbon_overflow-menu-horizontal.svg';
import { navBarStyles, logoStyles, mobileMenuIcon } from './styles';

function NavigationBar() {
  return (
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
  );
}

export default NavigationBar;
