import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProgramsCalendar = () => {
  const [programs, setPrograms] = useState([
    {
      program: 'Five Times, Daily Prayer / Jumat Service',
      details: 'Every Friday'
    },
    {
      program: 'Asalat',
      details: 'Every Friday at 8:00 pm and Sunday at 10:00am'
    },
    {
      program: 'Lallat\'l Qur\'an (Reading of the Holy Qur\'an)',
      details: 'Every last Friday of the month from 10:00pm'
    },
    {
      program: '........',
      details: '........',
    },
  ]);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 mt-12 mb-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center uppercase bg-gradient-to-r text-green-800 py-6 from-green-700 to-black text-transparent bg-clip-text">Islamic Calendar</h2>
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Programs</th>
            <th className="px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{program.program}</td>
              <td className="border px-4 py-2">{program.details}</td>
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