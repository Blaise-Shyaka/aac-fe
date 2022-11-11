import React from 'react';
import { Box } from '@mui/material';
import NavigationBar from '../../../molecules/navigation_bar/NavigationBar';
import EventCard from '../../../molecules/event_card/events_page';
import conferenceImg from '../../../../assets/conference.avif';
import concertImg from '../../../../assets/bk-concert.avif';
import amahoroStadiumImg from '../../../../assets/amahoro-stadium.avif';
import ycImg from '../../../../assets/yc.avif';
import Footer from '../../../molecules/footer';

function Events() {
  const listOfEvents = [
    {
      title: 'AAC Conference',
      image: conferenceImg,
      altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum. Auctor eu augue ut lectus arcu. Praesent tristique magna sit amet purus gravida. Dolor sit amet consectetur adipiscing. Arcu cursus vitae congue mauris. Semper quis lectus nulla at volutpat diam. In eu mi bibendum neque egestas congue quisque. Arcu felis bibendum ut tristique et egestas. Ac tincidunt vitae semper quis lectus nulla. Ipsum suspendisse ultrices gravida dictum. Nunc non blandit massa enim nec dui nunc mattis enim. Cursus risus at ultrices mi tempus imperdiet.',
      date: '13 - 16 June 2023, 08:00 am - 05:00 pm',
      venue: 'Kigali Convention Center',
    },
    {
      title: 'AAC Youth Football Camp',
      image: ycImg,
      altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum. Auctor eu augue ut lectus arcu. Praesent tristique magna sit amet purus gravida. Dolor sit amet consectetur adipiscing. Arcu cursus vitae congue mauris. Semper quis lectus nulla at volutpat diam. In eu mi bibendum neque egestas congue quisque. Arcu felis bibendum ut tristique et egestas. Ac tincidunt vitae semper quis lectus nulla. Ipsum suspendisse ultrices gravida dictum. Nunc non blandit massa enim nec dui nunc mattis enim. Cursus risus at ultrices mi tempus imperdiet.',
      date: '13 - 16 June 2023, 08:00 am - 05:00 pm',
      venue: 'Kigali Convention Center',
    },
    {
      title: 'AAC Summer Ball',
      image: concertImg,
      altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum. Auctor eu augue ut lectus arcu. Praesent tristique magna sit amet purus gravida. Dolor sit amet consectetur adipiscing. Arcu cursus vitae congue mauris. Semper quis lectus nulla at volutpat diam. In eu mi bibendum neque egestas congue quisque. Arcu felis bibendum ut tristique et egestas. Ac tincidunt vitae semper quis lectus nulla. Ipsum suspendisse ultrices gravida dictum. Nunc non blandit massa enim nec dui nunc mattis enim. Cursus risus at ultrices mi tempus imperdiet.',
      date: '13 - 16 June 2023, 08:00 am - 05:00 pm',
      venue: 'Kigali Convention Center',
    },
    {
      title: 'Arsenal Legends Football Match',
      image: amahoroStadiumImg,
      altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum. Auctor eu augue ut lectus arcu. Praesent tristique magna sit amet purus gravida. Dolor sit amet consectetur adipiscing. Arcu cursus vitae congue mauris. Semper quis lectus nulla at volutpat diam. In eu mi bibendum neque egestas congue quisque. Arcu felis bibendum ut tristique et egestas. Ac tincidunt vitae semper quis lectus nulla. Ipsum suspendisse ultrices gravida dictum. Nunc non blandit massa enim nec dui nunc mattis enim. Cursus risus at ultrices mi tempus imperdiet.',
      date: '13 - 16 June 2023, 08:00 am - 05:00 pm',
      venue: 'Kigali Convention Center',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <NavigationBar defaultBackgroundColor="#000" defaultMobileBackgroundColor="#000" />
      <Box sx={{
        paddingTop: '5rem',
        width: '90%',
        margin: '0 auto',
        '@media (min-width: 1024px)': {
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        },
      }}
      >
        {
        listOfEvents.map((event) => (
          <EventCard
            key={event.title}
            imageSource={event.image}
            imageAlt={event.altText}
            eventDetails={event.altText}
            eventTitle={event.title}
            date={event.date}
            venue={event.venue}
          />
        ))
      }
      </Box>
      <Footer backgroundColor="#000" />
    </Box>
  );
}

export default Events;
