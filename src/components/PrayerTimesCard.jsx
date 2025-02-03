import React from 'react'
import back from '../assets/back.jpg';
import { NotepadText } from 'lucide-react';
import { Megaphone } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const PrayerTimesCard = () => {
  return (
      <div className="relative h-screen bg-cover mx-auto mt-20 md:-mt-32">
            <div
              className="absolute inset-9 bg-cover rounded-lg h-[46.7rem] md:h-[15rem] md:mt-2"
              style={{ backgroundImage: `url(${back})` }}
            >
              {/* Overlay */}
              <div className='absolute inset-0 md:inset-x-0 md:top-0 md:bottom-0 bg-green-900 bg-opacity-50 rounded-lg flex flex-col md:flex-row md:gap-16 justify-center items-center md:mt-0 h-full'>

              
              {/* First img */}
              <div className="relative z-10 flex flex-col justify-center items-center mt-8 mb-8 md:mb-16">
              
                  <motion.div className='text-center text-white border-2 w-24 h-24 rounded-full border-white flex justify-center items-center mb-4 bg-yellow-400'

                  animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3 }}
                  >
                     <NotepadText className='w-20 h-20 text-white p-3'/>
                  </motion.div>

                  <h1 className='text-2xl font-bold text-white mb-3 text-center'>Arabic Classes</h1>
                  <h1 className='text-xl text-white text-center'>Learn the language of the Quran</h1>
              </div>

              {/* Second img */}
              <div className="relative z-10 flex flex-col justify-center items-center mt-8 mb-8 md:mb-16">
                  <motion.div className='text-center text-white border-2 w-24 h-24 rounded-full border-white flex justify-center items-center mb-4 bg-yellow-400'

                  animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3 }}
                  >
                     <Megaphone className='w-20 h-20 text-white p-3'/>
                  </motion.div>

                  <h1 className='text-2xl font-bold text-white mb-3 text-center'>Lectures & Eventss</h1>
                  <h1 className='text-xl text-white text-center'>Stay updated on our latest programs</h1>
              </div>

              {/* Third img */}
              <div className="relative z-10 flex flex-col justify-center items-center mt-8 mb-8 md:mb-16">
                  <motion.div className='text-center text-white border-2 w-24 h-24 rounded-full border-white flex justify-center items-center mb-4 bg-yellow-400'
                  animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3 }}
                  >

                     <GraduationCap className='w-20 h-20 text-white p-3'/>
                  </motion.div>
                  <h1 className='text-2xl font-bold text-white mb-3 text-center'>Islamic Education</h1>
                  <h1 className='text-xl text-white text-center'>Deepen your knowledge of Islam</h1>
              </div>
              
            </div>
            </div>
    </div>
  )
}

export default PrayerTimesCard