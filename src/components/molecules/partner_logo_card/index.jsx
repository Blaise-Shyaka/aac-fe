import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { logoContainer, logoStyles } from './styles';

function PartnerLogoCard({ image, altText }) {
  return (
    <Box sx={logoContainer}>
      <Box
        component="img"
        src={image}
        alt={altText}
        sx={logoStyles}
      />
    </Box>
  );
}

export default PartnerLogoCard;

PartnerLogoCard.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
