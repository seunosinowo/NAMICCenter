import React, { useState } from 'react';

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
      program: 'Arabic Class',
      details: 'Every Friday at 8:30pm & Sunday at 10:30am'
    },
    {
      program: 'Tafsir-Daily',
      details: 'During the Month of Ramadan only'
    },
    {
      program: 'Taking of Shahada',
      details: 'As requested / Counselling as requested'
    },
    {
      program: 'Day-care center',
      details: 'A safe and nurturing environment for children'
    },
    {
      program: 'Provides Food, Shelter',
      details: 'Assisting with basic necessities'
    },
    {
      program: 'Help for the Needy',
      details: 'Host Ceremonies (Marriage, Naming, Birthday, Award, Fund-raising, Meetings, Rental, etc) As requested'
    },
    {
      program: 'Other Services',
      details: 'Based on Islamic Doctrines'
    },
  ]);


  const handleDownloadCSV = () => {
    const header = 'Program,Details\n';
    const csvData = programs.map((program) => `${program.program.replace(/,/g, '')},${program.details.replace(/,/g, '')}`).join('\n');
    const csvBlob = new Blob([header + csvData], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvBlob);
    const csvLink = document.createElement('a');
    csvLink.href = csvUrl;
    csvLink.download = 'programs-calendar.csv';
    csvLink.click();
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 mt-12 mb-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center uppercase bg-gradient-to-r text-green-800 py-6 from-green-700 to-black text-transparent bg-clip-text">Islamic Calendar</h2>
      <div className="flex justify-between mb-4">
        
        <button
          className="bg-green-800 hover:bg-green-950 text-white font-bold py-2 px-4 rounded"
          onClick={handleDownloadCSV}
        >
          Download File
        </button>
      </div>
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 w-1/2">Programs</th>
            <th className="px-4 py-2 w-1/2">Details</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 w-1/2">{program.program}</td>
              <td className="border px-4 py-2 w-1/2">{program.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgramsCalendar;