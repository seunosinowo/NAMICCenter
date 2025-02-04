import React from 'react'
import muslim from '../assets/muslim-prayers.jpg';
import praying from '../assets/praying.jpg';
import BIcon from '../assets/community_icon.png';
import { motion } from 'framer-motion';


const Overview = () => {
  return (
    <div className='mt-28 md:-mt-28 text-black mx-8 grid lg:grid-cols-2'>

      <div className='col-span-1'>
        <motion.p className='uppercase text-2xl'
          initial = "hidden"
          whileInView = "visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x:0}
          }}
        >
          Building a Stronger Community
        </motion.p>

        <motion.h1 className='bg-gradient-to-r text-green-800 text-5xl py-6 from-green-700 to-black text-transparent bg-clip-text'
          initial = "hidden"
          whileInView = "visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x:0}
          }}
        >
          Empowering Muslims, Enriching {" "}
          <span>Lives</span>
        </motion.h1>

        <p className='mt-1 mb-7 w-full justify-start'>
            At Nigerian-American Muslim Integrated Community Center, we're dedicated to creating a vibrant community where Muslims 
            can come together, learn, and grow. Our community development programs 
            are designed to promote Islamic knowledge, cultural awareness, 
            and social cohesion.
        </p>

        {/* 2 Section inside */}
        <div className='grid grid-cols-2 mb-9'>
            <img src={praying} alt="Praying"
            className='rounded-3xl h-[8rem] md:h-[12rem] w-[14rem] lg:w-[19rem] hidden md:hidden lg:block xl:block'
            />
            <div>
              <p className='w-[16rem] mb-9 hidden md:hidden lg:block xl:block'>
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
