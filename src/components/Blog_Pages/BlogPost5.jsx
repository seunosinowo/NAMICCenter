import React from 'react';
import muslimImage from '../../assets/muslim.jpg';

const BlogPost5 = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">The Role of Mosque in the Muslim Community</h2>
      <img
        src={muslimImage}
        alt="Blog Post Thumbnail"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
        <p className="text-gray-600 mb-4">
            The mosque is a place of worship, education, and community building, playing a vital role in 
            the spiritual and social lives of Muslims. It is a place where Muslims gather to perform their daily 
            prayers, attend Friday sermons, and celebrate important Islamic holidays. The mosque also serves as 
            a center for Islamic education, where Muslims can learn about their faith, study the Quran, and 
            develop their spiritual knowledge.
        </p>

        <p className="text-gray-600 mb-4">
            In addition to its spiritual functions, the mosque also plays a significant role in promoting 
            social cohesion and community building among Muslims. It is a place where Muslims from diverse 
            backgrounds and cultures come together, fostering a sense of unity and belonging. 
            The mosque also provides a range of social services, including food banks, youth programs, and 
            counseling services, which help to support the welfare of the Muslim community.
        </p>

        <p className="text-gray-600 mb-4">
            The mosque also serves as a symbol of Islamic identity and a beacon of hope for the Muslim community. 
            It is a physical representation of the Muslim faith and a reminder of the importance of prayer, 
            charity, and community service. The mosque also provides a sense of comfort and security for Muslims, 
            who can find solace in its peaceful atmosphere and spiritual guidance.
        </p>

        <p className="text-gray-600 mb-4">
            In many Muslim communities, the mosque is also a hub for interfaith dialogue and 
            community outreach. It provides a platform for Muslims to engage with people of other faiths 
            and backgrounds, promoting mutual understanding and respect. The mosque also serves as a center 
            for social activism and community service, where Muslims can work together to address social issues 
            and promote positive change.
        </p>

        </div>
  );
};

export default BlogPost5;