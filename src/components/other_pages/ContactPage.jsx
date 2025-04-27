import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs.sendForm(
      'service_a3osa1x',      
      'template_lgrloea',    
      form.current,
      'zApUXWMwBkV13_DfE'   
    )
    .then(
      (result) => {
        setSent(true);
        setError('');
        form.current.reset();
        setLoading(false);
      },
      (error) => {
        setError('Failed to send message. Please try again.');
        setLoading(false);
      }
    );
  };

  return (
    <div className="bg-green-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-8">Get in Touch</h2>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 xl:w-1/3 mb-4 mx-4">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-green-900">Our Address</h3>
            </div>
            <p className="text-lg text-gray-600">
              801 dean street, Brooklyn New York
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 xl:w-1/3 mb-4 mx-4">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-green-900">Our Phone</h3>
            </div>
            <p className="text-lg text-gray-600">
              718-623-8193
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 xl:w-1/3 mb-4 mx-4">
            <div className="flex items-center mb-4">
              <span className="fas fa-location-arrow text-green-600 mr-4"></span>
              <h3 className="text-2xl font-bold text-green-900">Our Location</h3>
            </div>
            <div className="h-48 rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.748788585115!2d-73.9659647255438!3d40.67950373960681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba3b8f31b55%3A0x1cd420ef2c631abb!2s801%20Dean%20St%2C%20Brooklyn%2C%20NY%2011238%2C%20USA!5e0!3m2!1sen!2sng!4v1738082590700!5m2!1sen!2sng"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 xl:w-1/2 mx-auto">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Send a Message</h3>
          {sent && (
            <div className="bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-lg mb-6 text-center">
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 text-green-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h4 className="text-xl font-bold text-green-900 mb-2">Thank You for Contacting NAMIC!</h4>
                <p className="text-green-700">
                  We have received your message and appreciate your interest. Our team will review your inquiry and get back to you as soon as possible.
                </p>
                <p className="text-green-700 mt-2">
                  Have a wonderful day!
                </p>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          {!sent && (
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full md:w-1/2 xl:w-1/2 mb-4 md:mb-0">
                  <label className="text-lg text-gray-600 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="bg-gray-100 rounded-lg shadow-lg p-4 w-full"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 xl:w-1/2 mb-4 md:mb-0">
                  <label className="text-lg text-gray-600 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="bg-gray-100 rounded-lg shadow-lg p-4 w-full"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-lg text-gray-600 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="bg-gray-100 rounded-lg shadow-lg p-4 w-full h-48"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;