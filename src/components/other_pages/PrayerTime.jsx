import React from 'react';
import { Link } from 'react-router-dom';

const PrayerTime = () => {
  const prayerTimes = [
    {
      name: 'Fajr',
      time: '5:30 AM',
      description: 'Dawn prayer, performed before sunrise'
    },
    {
      name: 'Dhuhr',
      time: '12:15 PM',
      description: 'Noon prayer, performed when the sun is at its highest point'
    },
    {
      name: 'Asr',
      time: '3:30 PM',
      description: 'Afternoon prayer, performed in the late afternoon'
    },
    {
      name: 'Maghrib',
      time: '6:00 PM',
      description: 'Sunset prayer, performed just after sunset'
    },
    {
      name: 'Isha',
      time: '8:00 PM',
      description: 'Night prayer, performed before bedtime'
    },
  ];

  return (
    <div className="bg-gray-100 p-4 md:p-6 lg:p-8 mb-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-12">
        Prayer Times at our Community Center
    </h2>

      <p className="text-gray-600 mb-20">
        At Nigerian-American Muslim Integrated Community Center, we strive to provide a welcoming and inclusive environment for Muslims to perform their daily prayers. Our prayer times are carefully calculated to ensure accuracy and convenience for our community members.
      </p>

      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Prayer Name</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {prayerTimes.map((prayer, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{prayer.name}</td>
              <td className="px-4 py-2">{prayer.time}</td>
              <td className="px-4 py-2">{prayer.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-gray-600 mt-4">
        *Prayer times are subject to change based on daylight saving time and other factors. Please check our website or contact us for the most up-to-date prayer times.
      </p>
      <div className="flex justify-center mt-4">
        <Link to = "/contact">
            <button className="bg-green-800 hover:bg-green-950 text-white font-bold py-2 px-4 rounded">
            Get Directions
            </button>
        </Link>
      </div>
    </div>
  );
};

export default PrayerTime;