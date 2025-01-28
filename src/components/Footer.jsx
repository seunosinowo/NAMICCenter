import React from 'react';
import FooterGreen from '../assets/green.jpg';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat py-12"
      style={{ backgroundImage: `url(${FooterGreen})` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-white">
            <img src={logo} alt="Logo" className="w-32 mb-4" />
            <p className="text-lg">
              The Nigerian-American Muslim Integrated Community Center (NAMICC) is a non-profit organization dedicated to serving the Muslim community in the United States.
            </p>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-lg mb-2">
              <span className="fas fa-map-marker-alt mr-2"></span>
              123 Main St, Anytown, USA 12345
            </p>
            <p className="text-lg mb-2">
              <span className="fas fa-phone mr-2"></span>
              (123) 456-7890
            </p>
            <p className="text-lg mb-2">
              <span className="fas fa-envelope mr-2"></span>
              <a href="mailto:info@namicc.org" className="text-white hover:text-gray-300">
                info@namicc.org
              </a>
            </p>
            <div className="flex justify-start mt-4">
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                <span className="fab fa-facebook-f"></span>
              </a>
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                <span className="fab fa-twitter"></span>
              </a>
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                <span className="fab fa-instagram"></span>
              </a>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="text-lg mb-2">
                <a href="#" className="text-white hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li className="text-lg mb-2">
                <a href="#" className="text-white hover:text-gray-300">
                  Our Programs
                </a>
              </li>
              <li className="text-lg mb-2">
                <a href="#" className="text-white hover:text-gray-300">
                  Donate
                </a>
              </li>
              <li className="text-lg mb-2">
                <a href="#" className="text-white hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-black text-white text-center p-4 mt-8 w-full flex">
          &copy; 2025 Nigerian-American Muslim Integrated Community Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;