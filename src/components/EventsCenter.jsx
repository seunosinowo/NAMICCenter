import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import eventTradition from '../assets/tradition.jpg';

const EventsCenter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white py-12"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-900 mb-4">Host Your Event with Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our state-of-the-art events center is perfect for weddings, conferences, and more.
          </p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6 bg-green-100 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Events Center Details</h3>
          <p className="text-lg text-gray-600 mb-4">Capacity: 500 guests</p>
          <p className="text-lg text-gray-600 mb-4">
            Amenities: Sound system, projector, catering services
          </p>
          <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
            <Link to="/event"  className="text-white">Learn More</Link>
          </button>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <img src={eventTradition} alt="Events Center" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </motion.div>
  );
};

export default EventsCenter;