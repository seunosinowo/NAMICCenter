import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Use EmailJS to send the subscription
    emailjs.sendForm(
      'service_a3osa1x',   
      'template_lgrloea',  
      e.target,
      'zApUXWMwBkV13_DfE'
    )
    .then((result) => {
      setSuccess(true);
      setEmail('');
      setLoading(false);
    })
    .catch((error) => {
      setError('Failed to subscribe. Please try again.');
      setLoading(false);
    });
  };

  return (
    <div className="bg-green-900 py-12">
      <div className="max-w-5xl sm:w-11/12 md:w-11/12 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-100 mb-4">Stay Updated with Our Newsletter</h2>
        <p className="text-[1rem] md:text-lg text-amber-200 mb-8">Get the latest news and updates from our organization.</p>
        {success ? (
          <div className="bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-lg mb-6 text-center">
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-green-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h4 className="text-xl font-bold text-green-900 mb-2">Thank You for Subscribing!</h4>
              <p className="text-green-700">
                You have been successfully added to our newsletter list. We'll keep you updated with the latest news and events from NAMIC.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-white py-2 px-4 rounded-lg items-center shadow-lg w-9/12 md:w-1/2 xl:w-1/2 mb-4"
              required
            />
            {error && (
              <p className="text-lg text-red-900 mb-4">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg disabled:opacity-50"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;