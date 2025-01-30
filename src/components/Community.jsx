import React from 'react';
import eventImage from '../assets/building.jpg';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div className="p-4">

      <div className="mt-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center uppercase bg-gradient-to-r text-green-800 py-6 from-green-700 to-black text-transparent bg-clip-text">
          Latest Happenings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center items-center">
            <img src={eventImage} alt="Event" className="rounded-3xl h-[12rem] md:h-[16rem] w-full object-cover" />
          </div>
          
          <div className="flex flex-col justify-center items-start p-4">
            <h3 className="text-2xl font-bold mb-4">Community News and Updates</h3>
            <p className="text-lg mb-4">
              Stay updated on our community events, programs, and activities. Check out our blog for the latest news and updates! From community gatherings to Islamic lectures, we've got you covered!
            </p>
            <Link to = "/blog-page">
              <button className="bg-yellow-400 h-11 w-36 rounded-lg flex justify-center items-center">
                <span className="text-base text-black text-center">Learn More</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;