import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Donation = () => {
  return (
    <div
      className="py-12 mt-8 rounded-2xl w-4/5 justify-center items-center mx-auto mb-12"
      style={{
        background: 'linear-gradient(180deg, #3E8E41 0%, #1A5C3A 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Support Our Cause</h2>
        <p className="text-xl lg:text-lg text-white mb-8">Help us spread the knowledge of Arabic and Quran</p>
        <button className="bg-green-950 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-3xl">
          <Link to="/donation-details" className="text-white">Donate Now</Link>
        </button>
      </motion.div>
    </div>
  )
}

export default Donation;