import themeBgMobile from '../../../assets/theme-bg-mobile.png';

export const themeContainer = {
  width: '100%',
  minHeight: '25rem',
  backgroundImage: `url(${themeBgMobile})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
};

export const themeTextContainer = {
  opacity: '0.8',
  backgroundColor: '#fff',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  '@media (min-width: 1024px)': {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
  },
};

export const themeTitle = {
  color: '#EB412A',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '2rem',
  lineHeight: '55px',
  textAlign: 'justify',
  margin: '0.5rem auto',
  padding: '0.5rem',
  width: '85%',
  '@media (min-width: 744px)': {
    fontSize: '3rem',
    lineHeight: '70px',
  },
};

export const themeSubtitle = {
  fontFamily: 'Montserrat',
  fontSize: '1.2rem',
  margin: '0.8rem',
  padding: '0.8rem',
  textAlign: 'justify',
  '@media (min-width: 744px)': {
    width: '85%',
    margin: '1rem auto',
    fontSize: '20px',
  },
};

export const themeTextWrapper = {
  '@media (min-width: 1024px)': {
    width: '75%',
  },
};
