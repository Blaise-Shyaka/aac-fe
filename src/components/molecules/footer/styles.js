export const footerContainer = {
  display: 'flex',
  alignItems: 'center',
  height: '5rem',
  justifyContent: 'space-between',
};

export const logoContainer = {
  width: '50%',
};

export const socialMediaContainer = {
  width: '50%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  '@media (min-width: 1024px)': {
    width: '35%',
  },
};

export const logoStyles = {
  width: '41px',
  height: '30px',
  marginLeft: '1rem',
  '@media (min-width: 744px)': {
    width: '71px',
    height: '71px',
  },
};

export const iconStyles = {
  '@media (min-width: 744px)': {
    width: '30px',
    height: '30px',
  },
};
