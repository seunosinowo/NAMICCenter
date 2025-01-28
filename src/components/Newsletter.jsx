import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your API key
    const apiUrl = `https://your-domain.com/wp-json/newsletter/v1/subscribe/`;
    const data = { email, name: '' }; // more fields if needed

    axios.post(apiUrl, data, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      setSuccess(true);
    })
    .catch((error) => {
      setError(error.message);
    });
  };

  return (
    <div className="bg-green-900 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-100 mb-4">Stay Updated with Our Newsletter</h2>
        <p className="text-lg text-amber-200 mb-8">Get the latest news and updates from our organization.</p>
        {success ? (
          <p className="text-lg text-green-900 mb-8">Thank you for subscribing to our newsletter!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-white py-2 px-4 rounded-lg shadow-lg w-full md:w-1/2 xl:w-1/2 mb-4"
            />
            {error && (
              <p className="text-lg text-red-900 mb-4">{error}</p>
            )}
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;