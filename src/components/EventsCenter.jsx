import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import eventTradition from '../assets/mos.jpg';

const EventsCenter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white py-12"
    >
      <div className="max-w-5xl sm:w-11/12 md:w-11/12 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Host Your Event with Us</h2>
        <p className="text-lg md:text-lg text-gray-600 mb-8">
          Our state-of-the-art events center is perfect for weddings, conferences, and more.
          </p>
      </div>
      
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6 bg-green-100 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Events Center Details</h3>
          <p className="text-lg text-gray-600 mb-4">Our versatile event spaces can accommodate various types of gatherings and celebrations.</p>
          <p className="text-lg text-gray-600 mb-4">
            Equipped with modern amenities to ensure your event runs smoothly and professionally.
          </p>
          <h4 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h4>
          <div className="space-y-4">
            <a
              href="https://forms.gle/CeiGD5LrAo8kp8Vk9"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded text-center"
            >
              Fill Hall Donation Agreement
            </a>
            <a
              href="/pdfs/Facility.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded text-center"
            >
              View Facility Information
            </a>
          </div>
          <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-4">
            <Link to="/event" className="text-white">Learn More</Link>
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