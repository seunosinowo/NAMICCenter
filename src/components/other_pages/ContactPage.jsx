import React from 'react';

const ContactPage = () => {
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
                
              {/* location iframe*/}
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