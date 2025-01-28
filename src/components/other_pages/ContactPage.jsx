import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-green-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-green-900 mb-8">Get in Touch</h2>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 xl:w-1/3 mb-4 mx-4">
            <div className="flex items-center mb-4">
              <span className="fas fa-map-marker-alt text-green-600 mr-4"></span>
              <h3 className="text-2xl font-bold text-green-900">Our Address</h3>
            </div>
            <p className="text-lg text-gray-600">
              123 Main St, Anytown, USA 12345
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 xl:w-1/3 mb-4 mx-4">
            <div className="flex items-center mb-4">
              <span className="fas fa-phone text-green-600 mr-4"></span>
              <h3 className="text-2xl font-bold text-green-900">Our Phone</h3>
            </div>
            <p className="text-lg text-gray-600">
              (123) 456-7890
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 xl:w-1/3 mb-4 mx-4">
            <div className="flex items-center mb-4">
              <span className="fas fa-location-arrow text-green-600 mr-4"></span>
              <h3 className="text-2xl font-bold text-green-900">Our Location</h3>
            </div>
            <div className="h-48 rounded-lg shadow-lg">
                
              {/* Add your location iframe here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.289259162453!2d-122.0840516846058!3d37.38534847972603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad7%3A0xb6a4622d2e845f4!2sGoogle!5e0!3m2!1sen!2sus!4v1643725288376!5m2!1sen!2sus"
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
          <form>
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-1/2 xl:w-1/2 mb-4 md:mb-0">
                <label className="text-lg text-gray-600 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-100 rounded-lg shadow-lg p-4 w-full"
                />
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 mb-4 md:mb-0">
                <label className="text-lg text-gray-600 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-100 rounded-lg shadow-lg p-4 w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-lg text-gray-600 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="bg-gray-100 rounded-lg shadow-lg p-4 w-full h-48"
              ></textarea>
            </div>
            <button className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                 Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;