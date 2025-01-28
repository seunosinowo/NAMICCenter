import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import PrayerTimesCard from './components/PrayerTimesCard'
import Overview from './components/Overview'
import Events from './components/Events'

const App = () => {
  return (
    <div>
      <>
      <NavBar/>
      <HeroSection/>
      <PrayerTimesCard/>
      <Overview/>
      <Events/>


      {/* <div className='max-w-7xl mx-auto pt-20 px-6 bg-white'>
      
      </div> */}

      </>
    </div>
  )
}

export default App
