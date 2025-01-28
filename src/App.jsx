import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import PrayerTimesCard from './components/PrayerTimesCard';
import Overview from './components/Overview';
import Events from './components/Events';
import ProgramsCalendar from './components/ProgramsCalendar';
import WhatWeOffer from './components/WhatWeOffer';
import Donation from './components/Donation';
import DonationDetails from './components/other_pages/DonationDetails';
import EventsCenter from './components/EventsCenter';
import MainEventCenter from './components/other_pages/MainEventCenter';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <PrayerTimesCard />
            <Overview />
            <Events />
            <ProgramsCalendar />
            <WhatWeOffer />
            <Donation />
            <EventsCenter/>
          </>
        } />
        <Route path="/donation-details" element={<DonationDetails/>} />
        <Route path='/event-page' element={<MainEventCenter/>} />

        
      </Routes>
    </BrowserRouter>
  );
};

export default App;