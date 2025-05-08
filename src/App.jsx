import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Loader from './components/Loader/Loader';

const HeroSection = lazy(() => import('./components/HeroSection'));
const PrayerTimesCard = lazy(() => import('./components/PrayerTimesCard'));
const Overview = lazy(() => import('./components/Overview'));
const Community = lazy(() => import('./components/Community'));
const WhatWeOffer = lazy(() => import('./components/WhatWeOffer'));
const Donation = lazy(() => import('./components/Donation'));
const EventsCenter = lazy(() => import('./components/EventsCenter'));
const Newsletter = lazy(() => import('./components/Newsletter'));

const DonationDetails = lazy(() => import('./components/other_pages/DonationDetails'));
const MainEventCenter = lazy(() => import('./components/other_pages/MainEventCenter'));
const ContactPage = lazy(() => import('./components/other_pages/ContactPage'));
const Blog = lazy(() => import('./components/other_pages/Blog'));
const ProgramPage = lazy(() => import('./components/other_pages/ProgramPage'));
const PrayerTime = lazy(() => import('./components/other_pages/PrayerTime'));
const Services = lazy(() => import('./components/other_pages/Services'));
const About = lazy(() => import('./components/other_pages/About'));


const BlogPost1 = lazy(() => import('./components/Blog_Pages/BlogPost1'));
const BlogPost2 = lazy(() => import('./components/Blog_Pages/BlogPost2'));
const BlogPost3 = lazy(() => import('./components/Blog_Pages/BlogPost3'));


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<div><Loader/> </div>}>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <PrayerTimesCard />
            <Overview />
            <Community />
            <WhatWeOffer />
            <Donation />
            <EventsCenter/>
            <Newsletter/>
          </>
        } />
        <Route path="/donation-details" element={<DonationDetails/>} />
        <Route path="/program" element={<ProgramPage/>} />
        <Route path='/event' element={<MainEventCenter/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/about' element={<About/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/programs-page" element={<ProgramPage/>} />
        <Route path="/prayer" element={<PrayerTime/>} />
        <Route path='/home' element={
          <>
            <HeroSection />
            <PrayerTimesCard />
            <Overview />
            <Community />
            <WhatWeOffer />
            <Donation />
            <EventsCenter/>
            <Newsletter/>
          </>
        } />

        
        <Route path="/blog-post-1" element={<BlogPost1/>} />
        <Route path="/blog-post-2" element={<BlogPost2/>} />
        <Route path="/blog-post-3" element={<BlogPost3/>} />
        <Route path="/blog-page" element={<Blog/>} />

      </Routes>
      </Suspense>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;