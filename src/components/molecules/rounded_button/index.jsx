import React from 'react';
import { Button } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import roundBtnStyle from './styles';

export const FILL_COLORS = {
  primary: '#EB412A',
  secondary: '#000',
};

function RoundedButton({
  children, fill, style, clickHandler,
}) {
  return (
    <Button
      onClick={clickHandler}
      sx={{ ...roundBtnStyle, backgroundColor: fill, ...style }}
    >
      {children}
    </Button>
  );
}

export default RoundedButton;

RoundedButton.propTypes = {
  fill: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
  clickHandler: PropTypes.func,
};

RoundedButton.defaultProps = {
  style: {},
  clickHandler: () => {},
};
