import React from 'react';
import NavigationBar from '../../molecules/navigation_bar/NavigationBar';
import Hero from '../../molecules/hero';
import Theme from '../../molecules/theme';
import Events from '../../organisms/events';
import CallToAction from '../../molecules/call_to_action';
import Partners from '../../organisms/partners';
import Footer from '../../molecules/footer';

function HomePage() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Theme />
      <Events />
      <CallToAction />
      <Partners />
      <Footer />
    </>
  );
}

export default HomePage;
