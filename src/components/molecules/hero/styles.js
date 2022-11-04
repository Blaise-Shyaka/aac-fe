import TornPaper from '../../../assets/torn-paper-white-mobile.avif';
import TornPaperTablet from '../../../assets/torn-paper-white.avif';
import TornPaperDesktop from '../../../assets/torn-paper-black-desktop-cropped.avif';

export const heroStyles = {
  backgroundColor: '#000',
  height: '844px',
  width: '100%',
  margin: 0,
  '@media (min-width: 744px)': {
    height: '1170px',
  },
  '@media (min-width: 1024px)': {
    display: 'none',
  },
};

export const heroImageStyles = {
  height: '60%',
  textAlign: 'center',
  backgroundImage: `url(${TornPaper})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '@media (min-width: 744px)': {
    height: '60%',
    backgroundImage: `url(${TornPaperTablet})`,
  },
};

export const heroTextStyles = {
  color: '#fff',
  fontFamily: 'Gotham Cond, Montserrat, sans-serif',
  fontWeight: 300,
  width: '65%',
  margin: '0 auto',
  fontSize: '2.8rem',
  letterSpacing: '0.04em',
  textAlign: 'center',
  '@media (min-width: 744px)': {
    fontSize: '4.8rem',
  },
  '@media (min-width: 1024px)': {
    fontSize: '4.5rem',
    width: '60%',
  },
};

export const playersStyles = {
  width: '80%',
  marginTop: '4rem',
  '@media (min-width: 744px)': {
    width: '60%',
    marginTop: '5rem',
  },
  '@media (min-width: 1024px)': {
    width: '100%',
    marginTop: '1rem',
  },
};

export const playersWrapper = {
  '@media (min-width: 1024px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const desktopHeroStyle = {
  display: 'flex',
  height: '650px',
  '@media (max-width: 1023px)': {
    display: 'none',
  },
};

export const desktopHeroTextWrapper = {
  backgroundImage: `url(${TornPaperDesktop})`,
  backgroundRepeat: 'no-repeat',
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const heroText = {
  '@media (min-width: 1024px)': {
    paddingRight: '10%',
  },
  '@media (min-width: 1150px)': {
    paddingRight: '15%',
  },
  '@media (min-width: 1220px)': {
    paddingRight: '20%',
  },
  '@media (min-width: 1300px)': {
    paddingRight: '30%',
  },
};
