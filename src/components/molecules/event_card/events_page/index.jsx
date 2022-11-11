import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RoundedButton, { FILL_COLORS } from '../../rounded_button';
import { eventGeneralTextStyles } from './styles';

function EventCard({
  imageSource, imageAlt, eventDetails, eventTitle, date, venue,
}) {
  const history = useHistory();

  return (
    <Box>
      <Box sx={{
        width: '90%',
        border: '1px solid #fff',
        borderRadius: '15px',
        margin: '1rem',
        '@media (min-width: 1024px)': {
          width: '98%',
          display: 'flex',
        },
      }}
      >
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            width: '90%',
            margin: '1rem auto',
            '@media (min-width: 1024px)': {
              width: '45%',
              backgroundImage: `url(${imageSource})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '16px',
              marginLeft: '1rem',
            },
          }}
        >
          <Box
            component="img"
            src={imageSource}
            alt={imageAlt}
            sx={{
              width: '100%',
              '@media (min-width: 1024px)': {
                display: 'none',
              },
            }}
          />
        </Box>
        <Divider
          color="#fff"
          sx={{
            '@media (min-width: 1024px)': {
              display: 'none',
            },
          }}
        />
        <Box
          sx={{
            '@media (min-width: 1024px)': {
              width: '80%',
            },
          }}
        >
          <Box sx={{ margin: '1rem auto', width: '90%' }}>
            <Typography
              textAlign="center"
              color="#fff"
              sx={{
                fontFamily: 'Gotham Condensed, Montserrat, sans-serif',
                fontSize: '2rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                '@media (min-width: 1024px)': {
                  textAlign: 'left',
                },
              }}
            >
              {eventTitle}
            </Typography>
          </Box>
          <Box sx={{ width: '90%', margin: '1rem auto' }}>
            <Typography
              fontFamily="Gotham, Montserrat, sans-serif"
              fontWeight="300"
              color="#fff"
              textAlign="justify"
              sx={eventGeneralTextStyles}
            >
              {eventDetails}
            </Typography>
          </Box>
          <Box sx={{ width: '90%', margin: '1rem auto' }}>
            <Typography fontFamily="Gotham Cond, Montserrat, sans-serif" fontSize="1.5rem" textAlign="center" color="#fff" textTransform="uppercase" sx={eventGeneralTextStyles}>{date}</Typography>
          </Box>
          <Box sx={{ width: '90%', margin: '1rem auto' }}>
            <Typography fontFamily="Gotham Cond, Montserrat, sans-serif" fontSize="1.5rem" textAlign="center" color="#fff" textTransform="uppercase" sx={eventGeneralTextStyles}>{venue}</Typography>
          </Box>
          <Box display="flex" justifyContent="center" sx={{ margin: '1rem' }}>
            <RoundedButton clickHandler={() => history.push('/register')} style={{ padding: '0.8rem 3.5rem' }} fill={FILL_COLORS.primary}>Register</RoundedButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EventCard;

EventCard.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  eventDetails: PropTypes.string.isRequired,
  eventTitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
};
