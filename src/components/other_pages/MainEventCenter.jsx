import React from 'react';
import { motion } from 'framer-motion';
import eventTradition from '../../assets/mos.jpg';

const Events = () => {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-900 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-6xl font-bold text-white mb-4">Events Center</h2>
        <p className="text-lg text-white mb-8">Discover our versatile event spaces for your special occasions</p>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <img src={eventTradition} alt="Events Center" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Our Event Spaces</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800">Main Hall</h4>
              <p className="text-gray-600">Perfect for large gatherings and special occasions</p>
              <p className="text-gray-600">Fully equipped with modern facilities and professional support</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">Conference Hall</h4>
              <p className="text-gray-600">Ideal for business meetings and professional events</p>
              <p className="text-gray-600">Equipped with essential business amenities</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">Prayer Hall</h4>
              <p className="text-gray-600">Designed for religious gatherings and spiritual events</p>
              <p className="text-gray-600">Peaceful environment with necessary facilities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-900 mb-6">Important Information</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Get Started</h4>
              <div className="space-y-4">
                <a
                  href="https://forms.gle/CeiGD5LrAo8kp8Vk9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-6 rounded text-center"
                >
                  Fill Hall Donation Agreement
                </a>
                <a
                  href="/pdfs/Facility.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-6 rounded text-center"
                >
                  View Facility Information
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">About Our Facility</h4>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our event center is designed to accommodate a wide range of gatherings, from intimate meetings to large celebrations. 
                  Each space is thoughtfully designed to provide comfort and functionality for your specific needs.
                </p>
                <p className="text-gray-600">
                  We take pride in maintaining a clean, welcoming environment with modern amenities to ensure your event runs smoothly. 
                  Our dedicated team is committed to providing a professional and supportive atmosphere for all our guests.
                </p>
                <p className="text-gray-600">
                  Whether you're planning a business conference, religious gathering, or special celebration, 
                  our versatile spaces can be customized to meet your requirements and create memorable experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;