import React from 'react';
import { Box } from '@mui/material';
import NavigationBar from '../../../molecules/navigation_bar/NavigationBar';
import EventCard from '../../../molecules/event_card/events_page';
import conferenceImg from '../../../../assets/conference.avif';
import concertImg from '../../../../assets/bk-concert.avif';
import amahoroStadiumImg from '../../../../assets/amahoro-stadium.avif';
import ycImg from '../../../../assets/yc.avif';
import Footer from '../../../molecules/footer';

export const listOfEvents = [
  {
    title: 'AAC Conference',
    image: conferenceImg,
    altText: `The AAC2023 summit is designed as the meeting point for
    the African soccer business sector.
    
    The AAC2023 summit is
    designed to offer networking, in a casual and inspiring
    atmosphere facilitating global access through streaming. The
    event will enable congregation of Africa’s soccer sector
    executives in a relaxed and inspiring environment.
    
    This 4-day
    event will be focused on the hottest topics in the African
    soccer industry as it impacts the continent. This includes
    discussions in sector management, inclusivity,
    transformation, innovation and in foreseeing the market’s
    future.`,
    date: '13 - 16 June 2023, 08:00 am - 05:00 pm',
    venue: 'Kigali Convention Center',
  },
  {
    title: 'AAC Youth Football Camp',
    image: ycImg,
    altText: `1. Designed as training camps for youth aged between 8 to
    16 years.\n 2. Training to be executed in different locations with
    capacity of 500 trainees broken down into 5 camps.\n
    3. Each camp will be broken down into 2 major s¿uads.\n
    4. The camps are designed to deliver a 25-hour course over
    a 5-day duration.\n
    5.Venues for the camps include;
    
    a) Greenhills Academy
    
    Kigali
    
    b) Ecole Belge Kigali
    
    c) Ecole Francophone Kigali.
    
    d) Ferwafa Turf Remera e) BK Arena Remera.`,
    date: '13 - 17 June 2023, 08:00 am - 05:00 pm',
    venue: 'Various Locations',
  },
  {
    title: 'AAC Summer Ball',
    image: concertImg,
    altText: `The staging at The BK Arena of AAC2023 summer ball as the
    party component of the
    
    event organized under theme A
    
    toast to the gunners homecoming in Africa will
    
    happen on
    
    Saturday 17th June 2023 (Day Five).
    
    The event to be
    executed in strict compliance to #covid 19 guidelines will
    have
    
    capacity to host estimated 6,000 revelers grouped
    under following categories: 50 Executives cabins tickets,
    400 VVIP tickets, 2000 Deluxe tickets, 3000 regular tickets.`,
    date: '17 June 2023, 08:00 pm - 06:00 am',
    venue: 'BK ARENA',
  },
  {
    title: 'Arsenal Legends Football Match',
    image: amahoroStadiumImg,
    altText: `The staging at the Kigali regional stadium of AAC2023 epic
    match will happen on
    
    Sunday 18th June 2023 (Day Six). The
    match will be staged in strict compliance to #covid 19
    guidelines with capacity to
    
    host estimated 10,000
    
    spectators.
    
    Arsenal Africa 2023 legends team will play
    
    Mamelodi Sundowns of South Africa.`,
    date: '18 June 2023, 03:00 pm - 05:00 pm',
    venue: 'Kigali Regional Stadium',
  },
];

function Events() {
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
