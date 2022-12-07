export const outlinedBtnStyles = {
  color: '#000',
  borderColor: '#000',
  borderRadius: '25px',
  fontFamily: 'Gotham, Montserrat, sans-serif',
  fontWeight: '300',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#000',
    borderColor: '#000',
  },
};

export const containedBtnStyles = {
  color: '#fff',
  backgroundColor: '#EB412A',
  borderRadius: '25px',
  fontFamily: 'Gotham, Montserrat, sans-serif',
  fontWeight: '300',
  '&:hover': {
    backgroundColor: '#EB412F',
  },
};

export const formControlContainerStyles = {
  margin: '1rem auto',
  width: '85%',
  '@media (min-width: 1024px)': {
    width: '60%',
  },
};
