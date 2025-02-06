import React from 'react';
import { motion } from 'framer-motion';
import eventTradition from '../../assets/mos.jpg';


const Events = () => {
  return (
    <div
      className="bg-gradient-to-b from-gray-500 to-gray-900 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-6xl font-bold text-white mb-4">Events</h2>
        <p className="text-lg text-white mb-8">Our state-of-the-art events center is perfect for weddings, conferences, and more.</p>
      </motion.div>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <img src={eventTradition} alt="Events Center" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Events Center Details</h3>
          <p className="text-lg text-gray-600 mb-4">Capacity: 500 guests</p>
          <p className="text-lg text-gray-600 mb-4">Amenities: Sound system, projector, catering services</p>
          <p className="text-lg text-gray-600 mb-4">Parking: Ample parking space available</p>
          <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-12">
        <h3 className="text-2xl font-bold text-white mb-4">Upcoming Events</h3>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 xl:w-1/3 p-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Wedding Expo</h4>
              <p className="text-lg text-gray-600 mb-2">Date: March 12</p>
              <p className="text-lg text-gray-600 mb-2">Time: </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/3 p-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Fasting</h4>
              <p className="text-lg text-gray-600 mb-2">Date: April 15</p>
              <p className="text-lg text-gray-600 mb-2">Time: </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/3 p-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Charity </h4>
              <p className="text-lg text-gray-600 mb-2">Date: May 20</p>
              <p className="text-lg text-gray-600 mb-2">Time: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;