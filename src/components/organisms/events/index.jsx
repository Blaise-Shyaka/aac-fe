import React from 'react';
import { Box, Typography } from '@mui/material';
import EventCard from '../../molecules/event_card';
import conferenceImg from '../../../assets/conference.avif';
import concertImg from '../../../assets/bk-concert.avif';
import amahoroStadiumImg from '../../../assets/amahoro-stadium.avif';
import ycImg from '../../../assets/yc.avif';
import eventTitleStyles from './styles';

// This has to be fetched from the API Later. This is solely for demo purposes
// Image, title, and alt text should all be fetched from the API
const listOfEvents = [
  {
    title: 'AAC Conference',
    image: conferenceImg,
    altText: 'AAC Conference poster',
  },
  {
    title: 'AAC Youth Football Camp',
    image: ycImg,
    altText: 'AAC youth football camp poster',
  },
  {
    title: 'AAC Summer Ball',
    image: concertImg,
    altText: 'AAC Summer Ball poster',
  },
  {
    title: 'Arsenal Legends Football Match',
    image: amahoroStadiumImg,
    altText: 'Arsenal Legends Football Match poster',
  },
];

function Events() {
  const markup = listOfEvents.map((event) => (
    <EventCard
      key={event.title}
      title={event.title}
      image={event.image}
      altText={event.altText}
    />
  ));

  return (
    <Box sx={{ backgroundColor: '#000', paddingTop: '1rem' }}>
      <Typography sx={eventTitleStyles}>EVENTS</Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: '1rem',
      }}
      >
        {markup}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* <RoundedButton
          fill={FILL_COLORS.primary}
          style={{
            width: '15rem',
            padding: '1.2rem 2rem',
            fontSize: '1rem',
            lineHeight: '1rem',
            marginBottom: '2rem',
          }}
        >
          See all events
        </RoundedButton> */}
      </Box>
    </Box>
  );
}

export default Events;
