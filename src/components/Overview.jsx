import React from 'react'
import muslim from '../assets/muslim-prayers.jpg';
import praying from '../assets/praying.jpg';
import BIcon from '../assets/community_icon.png';



const Overview = () => {
  return (
    <div className='mt-52 md:-mt-64 text-black mx-8 grid lg:grid-cols-2'>

      <div className='col-span-1'>
        <p className='uppercase text-2xl'>Building a Stronger Community</p>
        <h1 className='bg-gradient-to-r text-green-800 text-5xl py-6 from-green-700 to-black text-transparent bg-clip-text'>
          Empowering Muslims, Enriching {" "}
          <span>Lives</span>
        </h1>

        <p className='mt-1 mb-7 w-full justify-start'>
            At NAMIC, we're dedicated to creating a vibrant community where Muslims 
            can come together, learn, and grow. Our community development programs 
            are designed to promote Islamic knowledge, cultural awareness, 
            and social cohesion.
        </p>

        {/* 2 Section inside */}
        <div className='grid grid-cols-2 mb-9'>
            <img src={praying} alt="Praying"
            className='rounded-3xl h-[8rem] md:h-[12rem] w-[14rem] lg:w-[19rem] sm:hidden md:hidden lg:block'
            />
            <div>
              <p className='w-[16rem] mb-9 sm:hidden md:hidden lg:block'>
                From Arabic classes to monthly lectures, and from social 
                events to spiritual gatherings, there's something for 
                everyone at NAMIC.
              </p>
              
              <div className='bg-yellow-400 w-16 h-16 rounded-full flex space-x-4 md:space-x-4'>
                <img src={BIcon} alt="icon" 
                className='w-16 h-16 text-center p-4'
                />
                <p className='w-full'>Empowering Muslims</p>
              </div>
            </div>
        </div>

      </div>

      {/* Second Grid */}
      <div className='col-span-1 lg:my-8'>
          <img src={muslim} alt="Icon"
          className='rounded-3xl'
          />
      </div>
    </div>
  )
}

export default Overview
