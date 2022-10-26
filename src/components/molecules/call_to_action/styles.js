import gunnersaurus from '../../../assets/gunnersaurus-mobile-red.png';
import gunnersaurusDesktop from '../../../assets/gunnersaurus-desktop-red.png';

export const ctaStyles = {
  backgroundImage: `url(${gunnersaurus})`,
  minHeight: '20rem',
  paddingTop: '2rem',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '@media (min-width: 744px)': {
    backgroundImage: `url(${gunnersaurusDesktop})`,
    backgroundSize: 'cover',
  },
  '@media (min-width: 1024px)': {
    height: '450px',
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export const ctaText = {
  color: '#F1F2F0',
  fontSize: '2rem',
  fontFamily: 'Montserrat',
  width: '22rem',
  marginLeft: '1rem',
  '@media (min-width: 744px)': {
    width: '25rem',
    fontSize: '2.5rem',
  },
  '@media (min-width: 1024px)': {
    width: '55%',
    fontSize: '3.5rem',
  },
};

export const registerBtn = {
  width: '12rem',
  height: '4rem',
  padding: '1rem 2rem',
  marginLeft: '1rem',
  marginTop: '2rem',
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  '@media (min-width: 744px)': {
    marginTop: '1rem',
  },
};
