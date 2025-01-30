import React from 'react';
import muslimImage from '../../assets/muslim.jpg';
import tradition from '../../assets/tradition.jpg';
import reading from '../../assets/reading.jpg';
import muslimMan from '../../assets/muslimMan.jpg';
import mosque_2 from '../../assets/mosque_2.jpg';
import quran from '../../assets/quran.jpg';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">


        {/* Blog Post 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={reading}
            alt="Blog Post Thumbnail"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">The Importance of Prayer in Islam</h3>
          <p className="text-gray-600 mb-4">Prayer is one of the five pillars of Islam and is a fundamental aspect of a Muslim's daily life...</p>
          <Link to="/blog-post-1">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Read More
            </button>
          </Link>
        </div>


        {/* Blog Post 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={tradition}
            alt="Blog Post Thumbnail"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">The Benefits of Fasting in Ramadan</h3>
          <p className="text-gray-600 mb-4">Fasting during Ramadan is one of the most rewarding experiences for Muslims, offering numerous spiritual, physical, and mental benefits...</p>
          <Link to="/blog-post-2">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Read More
            </button>
          </Link>
        </div>


        {/* Blog Post 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={quran}
            alt="Blog Post Thumbnail"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">The Significance of Zakat in Islam</h3>
          <p className="text-gray-600 mb-4">Zakat is one of the five pillars of Islam and is a fundamental aspect of a Muslim's faith, promoting social justice, equality, and compassion...</p>
          <Link to="/blog-post-3">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Read More
            </button>
          </Link>
        </div>


        {/* Blog Post 4 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={mosque_2}
            alt="Blog Post Thumbnail"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">The Importance of Hajj in Islam</h3>
          <p className="text-gray-600 mb-4">Hajj is one of the five pillars of Islam and is a once-in-a-lifetime obligation for Muslims, promoting spiritual growth, unity, and equality...</p>
          <Link to="/blog-post-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Read More
            </button>
          </Link>
        </div>


        {/* Blog Post 5 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={muslimImage}
            alt="Blog Post Thumbnail"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">The Role of Mosque in the Muslim Community</h3>
          <p className="text-gray-600 mb-4">The mosque is a sacred place of worship, education, and community building, playing a vital role in the spiritual and social lives of Muslims...</p>
          <Link to="/blog-post-5">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Read More
            </button>
          </Link>
        </div>


        {/* Blog Post 6 */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={muslimMan}
              alt="Blog Post Thumbnail"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">The Role of Charity in Islam</h3>
            <p className="text-gray-600 mb-4">Charity is a fundamental aspect of Islam, promoting compassion, generosity, and social responsibility...</p>
            <Link to="/blog-post-6">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Read More
            </button>
          </Link>
          </div>
        </div>

      </div>
  );
};

export default Blog;