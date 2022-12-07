import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Logo from '../../../assets/aac-dark-gray.svg';
import AACWhiteLogo from '../../../assets/aac-white-logo.svg';
import MobileMenu from '../../../assets/carbon_overflow-menu-horizontal.svg';
import {
  desktopNavbar, desktopMenu, navBarStyles, logoStyles, mobileMenuIcon, menuLinks,
} from './styles';
import { DARK_COLORS } from '../../../constants';

function NavigationBar({ defaultBackgroundColor, defaultMobileBackgroundColor }) {
  const [backgroundColor, setBackgroundColor] = useState('none');
  const [menuLinksColor, setMenuLinksColor] = useState(DARK_COLORS.includes(defaultBackgroundColor || backgroundColor) ? '#fff' : '#000');
  const HOMEPAGE_PATH = '/';

  useEffect(() => {
    if (window.location.pathname === HOMEPAGE_PATH) {
      window.addEventListener('scroll', () => {
        const HERO_SECTION_BOTTOM_SCROLL_POSITION = 600;
        if (window.scrollY >= HERO_SECTION_BOTTOM_SCROLL_POSITION) {
          setBackgroundColor('#000');
          setMenuLinksColor('#fff');
        } else {
          setBackgroundColor('none');
          setMenuLinksColor('#000');
        }
      });
    }
  });

  return (
    <>
      <Box sx={{ ...navBarStyles, backgroundColor: defaultMobileBackgroundColor }}>
        <Box
          component="img"
          src={DARK_COLORS.includes(defaultMobileBackgroundColor) ? AACWhiteLogo : Logo}
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
      <Box
        sx={{
          ...desktopNavbar,
          backgroundColor: defaultBackgroundColor || backgroundColor,
        }}
      >
        <Box
          component="img"
          src={AACWhiteLogo}
          alt="AAC Logo"
          sx={logoStyles}
        />
        <Box sx={desktopMenu}>
          <Link to="/">
            <Typography sx={{ ...menuLinks, color: menuLinksColor, textDecoration: 'none' }}>HOME</Typography>
          </Link>
          <Link to="/events">
            <Typography sx={{ ...menuLinks, color: menuLinksColor, textDecoration: 'none' }}>EVENTS</Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default NavigationBar;

NavigationBar.propTypes = {
  defaultBackgroundColor: PropTypes.string,
  defaultMobileBackgroundColor: PropTypes.string,
};

NavigationBar.defaultProps = {
  defaultBackgroundColor: '',
  defaultMobileBackgroundColor: '#fff',
};
