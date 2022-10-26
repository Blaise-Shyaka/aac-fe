import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import textStyles from './styles';

function EventCard({ title, image }) {
  const cardStyles = {
    position: 'relative',
    width: '18rem',
    minHeight: '22rem',
    margin: '4rem auto',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <Box sx={cardStyles}>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Typography sx={textStyles}>{title}</Typography>
      </Box>
    </Box>
  );
}

export default EventCard;

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
