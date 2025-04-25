import React, { useState } from 'react';
import { motion } from 'framer-motion';
import eventTradition from '../../assets/mos.jpg';

const Events = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    startTime: '',
    endTime: '',
    numberOfGuests: '',
    additionalRequirements: '',
    hallPreference: 'main-hall'
  });

  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: 'John Doe',
      eventType: 'Wedding',
      date: '2024-03-12',
      startTime: '14:00',
      endTime: '22:00',
      numberOfGuests: 200,
      hallPreference: 'main-hall'
    },
    {
      id: 2,
      name: 'Jane Smith',
      eventType: 'Conference',
      date: '2024-04-15',
      startTime: '09:00',
      endTime: '17:00',
      numberOfGuests: 150,
      hallPreference: 'conference-hall'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      eventType: 'Birthday Party',
      date: '2024-05-20',
      startTime: '18:00',
      endTime: '23:00',
      numberOfGuests: 100,
      hallPreference: 'main-hall'
    }
  ]);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Create new booking with a unique ID
      const newBooking = {
        id: bookings.length + 1,
        ...formData
      };

      // Add to bookings array
      setBookings(prev => [...prev, newBooking]);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        startTime: '',
        endTime: '',
        numberOfGuests: '',
        additionalRequirements: '',
        hallPreference: 'main-hall'
      });
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Error submitting booking. Please try again.');
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-900 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-6xl font-bold text-white mb-4">Events Center</h2>
        <p className="text-lg text-white mb-8">Book our state-of-the-art halls for your special events</p>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <img src={eventTradition} alt="Events Center" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Available Halls</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-gray-800">Main Hall</h4>
              <p className="text-gray-600">Capacity: 500 guests</p>
              <p className="text-gray-600">Amenities: Sound system, projector, stage, catering services</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">Conference Hall</h4>
              <p className="text-gray-600">Capacity: 200 guests</p>
              <p className="text-gray-600">Amenities: Projector, whiteboard, conference call facilities</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">Prayer Hall</h4>
              <p className="text-gray-600">Capacity: 300 guests</p>
              <p className="text-gray-600">Amenities: Prayer mats, sound system</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12">
        <h3 className="text-2xl font-bold text-white mb-4">Book a Hall</h3>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Booking submitted successfully! We'll contact you shortly.
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventType">
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="conference">Conference</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="meeting">Business Meeting</option>
                  <option value="religious">Religious Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                  Event Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hallPreference">
                  Hall Preference
                </label>
                <select
                  name="hallPreference"
                  value={formData.hallPreference}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="main-hall">Main Hall</option>
                  <option value="conference-hall">Conference Hall</option>
                  <option value="prayer-hall">Prayer Hall</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startTime">
                  Start Time
                </label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endTime">
                  End Time
                </label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfGuests">
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  required
                  min="1"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter number of guests"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalRequirements">
                Additional Requirements
              </label>
              <textarea
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
                placeholder="Enter any additional requirements or special requests"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12">
        <h3 className="text-2xl font-bold text-white mb-4">Upcoming Bookings</h3>
        <div className="flex flex-wrap justify-center">
          {bookings.map((booking) => (
            <div key={booking.id} className="w-full md:w-1/3 xl:w-1/3 p-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{booking.eventType}</h4>
                <p className="text-lg text-gray-600 mb-2">Booked by: {booking.name}</p>
                <p className="text-lg text-gray-600 mb-2">Date: {booking.date}</p>
                <p className="text-lg text-gray-600 mb-2">Time: {booking.startTime} - {booking.endTime}</p>
                <p className="text-lg text-gray-600 mb-2">Hall: {booking.hallPreference}</p>
                <p className="text-lg text-gray-600 mb-2">Guests: {booking.numberOfGuests}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;