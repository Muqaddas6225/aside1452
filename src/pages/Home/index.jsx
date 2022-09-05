import React from 'react';
import Header from './HeroSection';
import ProjectShowcase from './ProjectShowcase';
import ComingSoonSection from './ComingSoon';
import Watchlist from './Watchlist';
import Ambassodor from './Ambassodar';
import Newsletter from './Newsletter';
import Reviews from './Reviews';


const Home = () => {
  return (
    <>
        <Header/>
        <ProjectShowcase/>
        <ComingSoonSection/>
        <Watchlist/>
        <Ambassodor/>
        <Newsletter/>
        <Reviews/>
    </>
  )
}

export default Home