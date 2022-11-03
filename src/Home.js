import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/material';

import './Home.css';
import aacLogo from './assets/aac-logo.png';

function Home() {
  return (
    <>
      <div className="homepage-image">
        <img alt="Arsenal Logo Homepage" />
      </div>
      <div className="homepage-content">
        <div style={{ width: '25%', margin: '4rem auto' }}>
          <img style={{ width: '100%' }} src={aacLogo} alt="AAC Logo" />
        </div>
        <p>Coming soon!</p>
        {/* <div style={{
          textAlign: 'center',
        }}
        >
          <iframe width="450" height="250" src="https://www.youtube.com/embed/QYHWRmlOvMk" title="Arsenal Africa Convention 2023 Highlight Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div> */}
        <div className="socials">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '40%',
              margin: '1rem auto',
            }}
          >
            <a href="https://www.youtube.com/channel/UCafMm8xFPkehGVC4sYjAFig" target="blank" rel="noopener noreferrer">
              <TwitterIcon sx={{ color: '#303E56' }} />
            </a>
            <a href="https://www.youtube.com/channel/UCafMm8xFPkehGVC4sYjAFig" target="blank" rel="noopener noreferrer">
              <FacebookIcon sx={{ color: '#303E56' }} />
            </a>
            <a href="https://www.youtube.com/channel/UCafMm8xFPkehGVC4sYjAFig" target="blank" rel="noopener noreferrer">
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

export default Home;
