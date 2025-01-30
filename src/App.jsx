import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import PrayerTimesCard from './components/PrayerTimesCard';
import Overview from './components/Overview';
import Community from './components/Community';
import ProgramsCalendar from './components/ProgramsCalendar';
import WhatWeOffer from './components/WhatWeOffer';
import Donation from './components/Donation';
import DonationDetails from './components/other_pages/DonationDetails';
import EventsCenter from './components/EventsCenter';
import MainEventCenter from './components/other_pages/MainEventCenter';
import Newsletter from './components/Newsletter';
import RamadanActivities from './components/RamadanActivities';
import ContactPage from './components/other_pages/ContactPage';
import Footer from './components/Footer';
import Blog from './components/other_pages/Blog';
import BlogPost1 from './components/Blog_Pages/BlogPost1';
import BlogPost2 from './components/Blog_Pages/BlogPost2';
import BlogPost3 from './components/Blog_Pages/BlogPost3';
import BlogPost4 from './components/Blog_Pages/BlogPost4';
import BlogPost5 from './components/Blog_Pages/BlogPost5';
import BlogPost6 from './components/Blog_Pages/BlogPost6';


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
            <Community />
            <ProgramsCalendar />
            <WhatWeOffer />
            <Donation />
            <EventsCenter/>
            <Newsletter/>
            <RamadanActivities/>
            <Footer/>
            <Blog/>
            

          </>
        } />
        <Route path="/donation-details" element={<DonationDetails/>} />
        <Route path="/program" element={<ProgramsCalendar/>} />
        <Route path='/event-page' element={<MainEventCenter/>} />

        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog-post-1" element={<BlogPost1/>} />
        <Route path="/blog-post-2" element={<BlogPost2/>} />
        <Route path="/blog-post-3" element={<BlogPost3/>} />
        <Route path="/blog-post-4" element={<BlogPost4/>} />
        <Route path="/blog-post-5" element={<BlogPost5/>} />
        <Route path="/blog-post-6" element={<BlogPost6/>} />
        <Route path="/blog-page" element={<Blog/>} />

        

        
      </Routes>
    </BrowserRouter>
  );
};

export default App;