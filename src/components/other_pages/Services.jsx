import React, { useState } from 'react';

const Services = () => {
  const [showArabicClasses, setShowArabicClasses] = useState(false);
  const [showQuranRecitation, setShowQuranRecitation] = useState(false);
  const [showIslamicEducation, setShowIslamicEducation] = useState(false);

  return (
    <div className="bg-gray-100 p-4 md:p-6 lg:p-8 mb-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">Our Services</h2>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="text-lg font-bold mb-2 text-green-800 cursor-pointer flex justify-between" onClick={() => setShowArabicClasses(!showArabicClasses)}>
              Arabic Classes
              {showArabicClasses ? <span className="text-lg font-bold">-</span> : <span className="text-lg font-bold">+</span>}
            </h3>
            {showArabicClasses && (
              <p className="text-gray-600 mb-2">Learn the language of the Quran with our expert teachers.</p>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="text-lg font-bold mb-2 text-green-800 cursor-pointer flex justify-between" onClick={() => setShowQuranRecitation(!showQuranRecitation)}>
              Quran Recitation
              {showQuranRecitation ? <span className="text-lg font-bold">-</span> : <span className="text-lg font-bold">+</span>}
            </h3>
            {showQuranRecitation && (
              <p className="text-gray-600 mb-2">Improve your Quran recitation skills with our experienced teachers.</p>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="text-lg font-bold mb-2 text-green-800 cursor-pointer flex justify-between" onClick={() => setShowIslamicEducation(!showIslamicEducation)}>
              Islamic Education
              {showIslamicEducation ? <span className="text-lg font-bold">-</span> : <span className="text-lg font-bold">+</span>}
            </h3>
            {showIslamicEducation && (
              <p className="text-gray-600 mb-2">Learn about Islamic values and principles with our expert teachers.</p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white rounded shadow-md p-4 mb-4">
        <h3 className="text-lg font-bold mb-2 text-green-800">Community Development Programs</h3>
        <p className="text-gray-600 mb-2">We offer various community development programs, including:</p>
        <ul className="list-disc pl-4 mb-2">
          <li>Arabic classes</li>
          <li>Monthly lectures from different scholars</li>
          <li>Social events like birthday, burial, and nikkaah</li>
        </ul>
      </div>
      <div className="bg-white rounded shadow-md p-4 mb-4">
        <h3 className="text-lg font-bold mb-2 text-green-800">Mosque Services</h3>
        <p className="text-gray-600 mb-2">We offer various mosque services, including:</p>
        <ul className="list-disc pl-4 mb-2">
          <li>Daily prayers</li>
          <li>Jumuah prayers</li>
          <li>Eid prayers</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;