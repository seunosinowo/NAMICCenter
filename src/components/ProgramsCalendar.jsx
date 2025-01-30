import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProgramsCalendar = () => {
  const [events, setEvents] = useState([
    {
      date: '30 Jan, Thu',
      time: '7:45 - 8:30pm',
      event: 'Mountains Of Mecca'
    },
    {
      date: '31 Jan, Fri',
      time: '12:30 - 1pm',
      event: 'Jumuah Prayer 1'
    },
    {
      date: '30 Jan, Thu',
      time: '7:45 - 8:30pm',
      event: 'Mountains Of Mecca'
    },
    {
      date: '........',
      time: '........',
      event: '........'
    },
  ]);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 mt-12 mb-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center uppercase bg-gradient-to-r text-green-800 py-6 from-green-700 to-black text-transparent bg-clip-text">Programs Calendar</h2>
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Event</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{event.date}</td>
              <td className="border px-4 py-2">{event.time}</td>
              <td className="border px-4 py-2">{event.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Link to="/programs-page">
          <button className="bg-green-800 hover:bg-green-950 text-white font-bold py-2 px-4 rounded">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProgramsCalendar;