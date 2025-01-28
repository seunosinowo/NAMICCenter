import React, { useState } from 'react';

const RamadanActivities = () => {
  const [isOpen, setIsOpen] = useState({
    taraweeh: false,
    quran: false,
    lecture: false,
    iftar: false,
    charity: false,
    youth: false,
    community: false,
  });

  const handleToggle = (activity) => {
    setIsOpen((prevIsOpen) => ({ ...prevIsOpen, [activity]: !prevIsOpen[activity] }));
  };

  return (
    <div className="bg-green-100 py-12 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-900 mb-4">Ramadan Activities</h2>
        <div className="flex flex-wrap justify-center">
          {[
            { id: 'taraweeh', title: 'Taraweeh Prayers' },
            { id: 'quran', title: 'Quran Recitation Competition' },
            { id: 'lecture', title: 'Ramadan Lecture Series' },
            { id: 'iftar', title: 'Iftar and Suhoor Events' },
            { id: 'charity', title: 'Charity Drives and Fundraisers' },
            { id: 'youth', title: 'Youth Programs and Activities' },
            { id: 'community', title: 'Community Service Projects' },
          ].map((activity) => (
            <div key={activity.id} className="w-3/4 md:w-1/2 xl:w-1/2 p-6 bg-white rounded-lg shadow-lg mb-4 mx-4">
              <button
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg w-full"
                onClick={() => handleToggle(activity.id)}
              >
                {isOpen[activity.id] ? '-' : '+'} {activity.title}
              </button>
              {isOpen[activity.id] && (
                <p className="text-md text-gray-600 mt-2">
                  {activity.id === 'taraweeh' && (
                    <span>
                      Join us for Taraweeh prayers every night during Ramadan. Our experienced imams will lead the prayers and provide spiritual guidance.
                    </span>
                  )}
                  {activity.id === 'quran' && (
                    <span>
                      Participate in our Quran recitation competition and showcase your skills. Winners will receive prizes and recognition.
                    </span>
                  )}
                  {activity.id === 'lecture' && (
                    <span>
                      Attend our Ramadan lecture series and gain insight into the teachings of Islam. Our knowledgeable speakers will cover various topics related to Ramadan and spirituality.
                    </span>
                  )}
                  {activity.id === 'iftar' && (
                    <span>
                      Join us for Iftar and Suhoor events throughout Ramadan. Enjoy delicious food and company while breaking your fast or preparing for the night ahead.
                    </span>
                  )}
                  {activity.id === 'charity' && (
                    <span>
                      Participate in our charity drives and fundraisers during Ramadan. Your donations will help support those in need and make a positive impact in our community.
                    </span>
                  )}
                  {activity.id === 'youth' && (
                    <span>
                      Engage your children in our youth programs and activities during Ramadan. Our experienced staff will provide a fun and educational experience for kids of all ages.
                    </span>
                  )}
                  {activity.id === 'community' && (
                    <span>
                      Join our community service projects during Ramadan and make a positive impact in our community. We have various projects planned, from food drives to volunteer work.
                    </span>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RamadanActivities;