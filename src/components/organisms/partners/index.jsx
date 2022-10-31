import React from 'react';
import { Box, Typography } from '@mui/material';
import { partnersStyles, titleStyles } from './styles';
import visitRwandaLogo from '../../../assets/visit-rwanda-logo.avif';
import bkArenaLogo from '../../../assets/bk-arena-logo.avif';
import kccLogo from '../../../assets/kcc-logo.avif';
import fuseLogo from '../../../assets/fuse-logo.avif';
import microsoftLogo from '../../../assets/microsoft-logo.avif';
import rwandairLogo from '../../../assets/rwandair-logo.avif';
import pixellotLogo from '../../../assets/pixellot-logo.avif';
import skolLogo from '../../../assets/skol-logo.avif';
import airtelLogo from '../../../assets/airtel-logo.avif';
import moveLogo from '../../../assets/move-logo.avif';
import PartnerLogoCard from '../../molecules/partner_logo_card';

const partners = [
  {
    logo: visitRwandaLogo,
    altText: 'Visit Rwanda Logo',
  },
  {
    logo: bkArenaLogo,
    altText: 'BK Arena Logo',
  },
  {
    logo: kccLogo,
    altText: 'Kigali Convention Center Logo',
  },
  {
    logo: fuseLogo,
    altText: 'Fuse Logo',
  },
  {
    logo: microsoftLogo,
    altText: 'Microsoft Logo',
  },
  {
    logo: rwandairLogo,
    altText: 'Rwandair Logo',
  },
  {
    logo: pixellotLogo,
    altText: 'Pixellot Logo',
  },
  {
    logo: skolLogo,
    altText: 'SKOL Logo',
  },
  {
    logo: airtelLogo,
    altText: 'Airtel Logo',
  },
  {
    logo: moveLogo,
    altText: 'Move Logo',
  },
];

function Partners() {
  const markup = partners
    .map((partner) => (
      <PartnerLogoCard
        key={partner.altText}
        image={partner.logo}
        altText={partner.altText}
      />
    ));

  return (
    <>
      <Typography sx={titleStyles}>Partners & Sponsors</Typography>
      <Box sx={partnersStyles}>
        {markup}
      </Box>
    </>
  );
}

export default Partners;
