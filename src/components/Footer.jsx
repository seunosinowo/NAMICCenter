import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 p-4 md:p-6 lg:p-8">
            <h5 className="text-lg font-bold mb-4">About Us</h5>
            <p className="text-sm">
              Nigerian-American Muslim Integrated Community Center (NAMIC) is a non-profit organization dedicated to serving the Muslim community in Brooklyn, New York.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0 p-4 md:p-6 lg:p-8">
            <h5 className="text-lg font-bold mb-2">Quick Links</h5>
            
            <div className="flex flex-wrap justify-between">
              <div className="w-1/2 mb-4 md:mb-0">
                <ul className="text-sm">
                  <li className="mb-2"><a href="/home" className="hover:text-green-500">Home</a></li>
                  <li className="mb-2"><a href="/about" className="hover:text-green-500">About Us</a></li>
                  <li className="mb-2"><a href="/program" className="hover:text-green-500">Program</a></li>
                  <li className="mb-2"><a href="/service" className="hover:text-green-500">Services</a></li>
                </ul>
              </div>
              <div className="w-1/2 mb-4 md:mb-0">
                <ul className="text-sm">
                  <li className="mb-2"><a href="/prayer" className="hover:text-green-500">Prayer Time</a></li>
                  <li className="mb-2"><a href="/event" className="hover:text-green-500">Events</a></li>
                  <li className="mb-2"><a href="/blog" className="hover:text-green-500">Blog</a></li>
                  <li className="mb-2"><a href="/contact" className="hover:text-green-500">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0 p-4 md:p-6 lg:p-8">
            <h5 className="text-lg font-bold mb-2">Contact Us</h5>
            <div className="flex items-center mb-4 text-white">
              <MapPin className="w-4 h-4 mr-2" />
              <p className="text-sm">801 Dean Street, Brooklyn, New York</p>
            </div>
            <div className="flex items-center mb-4 text-white">
              <Phone className="w-4 h-4 mr-2" />
              <p className="text-sm"><a href="#" className="hover:text-green-500">718-623-8193</a></p>
            </div>
            <div className="flex items-center text-white">
              <Mail className="w-4 h-4 mr-2" />
              <p className="text-sm"><a href="#" className="hover:text-green-500">NAMIC801Dean@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm">&copy; 2025 Nigerian-American Muslim Integrated Community Center (NAMIC). All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;