import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/material';

import aacLogo from './assets/aac-logo.png';
import './App.css';

function App() {
  return (
    <>
      <div className="homepage-image">
        <img alt="Arsenal Logo Homepage" />
      </div>
      <div className="homepage-content">
        <div style={{ width: '25%', margin: '4rem auto' }}>
          <img style={{ width: '100%' }} src={aacLogo} alt="AAC Logo" />
        </div>
        <p>We are going live soon!</p>
        <div className="socials">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '40%',
              margin: '1rem auto',
            }}
          >
            <a href="https://twitter.com/aa_convention" target="blank" rel="noopener noreferrer">
              <TwitterIcon sx={{ color: '#303E56' }} />
            </a>
            <a href="https://web.facebook.com/profile.php?id=100084316916984" target="blank" rel="noopener noreferrer">
              <FacebookIcon sx={{ color: '#303E56' }} />
            </a>
            <a href="https://instagram.com/aa_convention" target="blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ color: '#303E56' }} />
            </a>
            <a href="https://www.youtube.com/channel/UCafMm8xFPkehGVC4sYjAFig" target="blank" rel="noopener noreferrer">
              <YouTubeIcon sx={{ color: '#303E56' }} />
            </a>
          </Box>
        </div>
      </div>
    </>
  );
}

export default App;
