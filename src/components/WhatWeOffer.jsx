import React from 'react';
import { motion } from 'framer-motion';
import shiny from '../assets/shiny.jpg';

const WhatWeOffer = () => {
  return (
    <div
      className="bg-green-500 py-12 bg-cover"
      style={{ backgroundImage: `url(${shiny})` }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4 md:text-5xl lg:text-6xl">
          We offer an effective
          <br />
          Arabic & Quran Services
        </h2>
      </div>
      <div className="max-w-full flex flex-col md:flex-row justify-center items-center gap-0">

        {/* 1st Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/3 xl:w-1/3 p-6  lg:p-10 md:p-0 mx-0"
        >
          <div className="bg-green-700 rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Arabic Classes</h3>
            </div>
            
            <p className="text-xl text-white mb-4 md:text-xl lg:text-xl">
              Learn the language of the Quran with our expert teachers. Our Arabic classes are designed to help you understand the Quran and improve your Arabic language skills.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </motion.div>

        {/* 2nd Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/3 xl:w-1/3 p-6  lg:p-10 md:p-0 mx-0"
        >
          <div className="bg-green-700 rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Quran Recitation</h3>
            </div>
            
            <p className="text-xl text-white mb-4 md:text-xl lg:text-xl">
            Improve your Quran recitation skills with our experienced teachers. Our Quran recitation classes are designed to help you improve your Tajweed and recitation skills.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </motion.div>

        {/* 2nd Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/3 xl:w-1/3 p-6  lg:p-10 md:p-0 mx-0"
        >
          <div className="bg-green-700 rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Islamic Education</h3>
            </div>
            
            <p className="text-xl text-white mb-4 md:text-xl lg:text-xl">
            Learn about Islamic values and principles with our expert teachers. Our Islamic education classes are designed to help you understand the basics of Islam and improve your knowledge.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </motion.div>

        

        </div>
    </div>
  );
};

export default WhatWeOffer;