export const navBarStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  backgroundColor: '#fff',
  top: 0,
  left: 0,
  right: 0,
  'z-index': '5',
  '@media (min-width: 744px)': {
    height: '80px',
  },
  '@media (min-width: 1024px)': {
    display: 'none',
  },
};

export const logoStyles = {
  width: '41px',
  height: '30px',
  marginLeft: '1rem',
  '@media (min-width: 744px)': {
    width: '71px',
    height: '52px',
  },
  '@media (min-width: 1024px)': {
    width: '60px',
    height: '60px',
  },
};

export const mobileMenuIcon = {
  marginRight: '1rem',
  '@media (min-width: 744px)': {
    width: '71px',
    height: '71px',
  },
};

export const desktopNavbar = {
  display: 'none',
  maxWidth: '1440px',
  '@media (min-width: 1024px)': {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    justifyContent: 'space-between',
    zIndex: '5',
    padding: '8px',
  },
};

export const desktopMenu = {
  width: '50%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

export const menuLinks = {
  fontFamily: 'Montserrat',
};
