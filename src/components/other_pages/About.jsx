import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-6 lg:p-8 mb-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-green-800">About Us</h2>

      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <h3 className="text-lg font-bold mb-2 text-green-800">Our History</h3>
          <p className="text-gray-600 mb-2">Nigeria American Muslim Integrated Community Center (NAMIC) was established in 2025 with the goal of providing a welcoming and inclusive environment for Muslims to practice their faith and connect with their community.</p>
          <p className="text-gray-600 mb-2">Since our humble beginnings, we have grown to become one of the largest and most vibrant Muslim communities in the United States.</p>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <h3 className="text-lg font-bold mb-2 text-green-800">Our Mission</h3>
          <p className="text-gray-600 mb-2">Our mission is to provide a comprehensive and inclusive Islamic education, to foster a sense of community and belonging among Muslims, and to promote interfaith understanding and cooperation.</p>
          <p className="text-gray-600 mb-2">We strive to create a welcoming and inclusive environment that reflects the diversity of our community and promotes social justice and equality.</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <h3 className="text-lg font-bold mb-2 text-green-800">Our Vision</h3>
          <p className="text-gray-600 mb-2">Our vision is to become a leading Islamic institution in the United States, known for its excellence in education, community service, and interfaith relations.</p>
          <p className="text-gray-600 mb-2">We envision a future where Muslims are empowered to contribute positively to society, and where people of all faiths and backgrounds can come together in mutual respect and understanding.</p>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <h3 className="text-lg font-bold mb-2 text-green-800">Our Values</h3>
          <ul className="list-disc pl-4 mb-2">
            <li>Respect for all people, regardless of faith, culture, or background</li>
            <li>Commitment to social justice and equality</li>
            <li>Emphasis on education and personal development</li>
            <li>Promoting interfaith understanding and cooperation</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <h3 className="text-lg font-bold mb-2 text-green-800">Get in Touch</h3>
          <p className="text-gray-600 mb-2">Contact us to learn more about our programs and services, or to get involved in our community.</p>
          <ul className="list-none pl-0 mb-2">
            <li className="flex items-center mb-2">
              <span className="text-lg font-bold mr-2">Phone:</span>
              <span className="text-gray-600">718-623-8193</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="text-lg font-bold mr-2">Email:</span>
              <span className="text-gray-600">info@namic.org</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="text-lg font-bold mr-2">Address:</span>
              <span className="text-gray-600">801 dean street, Brooklyn New York</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <h3 className="text-lg font-bold mb-2 text-green-800">Social Media</h3>
          <ul className="list-none pl-0 mb-2">
          <li className="flex items-center mb-2">
            <span className="text-lg font-bold mr-2">Facebook:</span>
            <span className="text-gray-600">facebook</span>
            </li>

            <li className="flex items-center mb-2">
            <span className="text-lg font-bold mr-2">Twitter:</span>
            <span className="text-gray-600">twitter.com</span>
            </li>

            <li className="flex items-center mb-2">
            <span className="text-lg font-bold mr-2">Instagram:</span>
            <span className="text-gray-600">instagram.com</span>
            </li>

            </ul>
            </div>
            </div>

            <div className="flex flex-wrap justify-center mb-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <h3 className="text-lg font-bold mb-2 text-green-800">Donate</h3>
            <p className="text-gray-600 mb-2">Your donation will help us continue to provide essential services to our community.</p>
            <button className="bg-green-800 hover:bg-green-950 text-white font-bold py-2 px-4 rounded">
              <Link to="/donation-details">Donate Now</Link></button>
            </div>

            
            </div>
            </div>
            );
            };

            export default About;