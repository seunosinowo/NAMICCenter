import React from 'react';
import quran from '../../assets/quran.jpg';


const BlogPost3 = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">The Significance of Zakat in Islam</h2>
      <img
        src={quran}
        alt="Blog Post Thumbnail"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
        <p className="text-gray-600 mb-4">
            Zakat is one of the five pillars of Islam and is a fundamental aspect of a Muslim's faith, 
            promoting social justice, equality, and compassion. It is a mandatory charitable contribution 
            that Muslims are required to make to support the poor and needy. The Quran states, "And they have been 
            commanded no more than this: to worship Allah, offering Him sincere devotion, 
            being true in faith; to establish regular prayer; and to give Zakat".
        </p>

        <p className="text-gray-600 mb-4">
            The significance of Zakat lies in its ability to promote social justice and equality. By giving 
            a portion of their wealth to those in need, Muslims are helping to reduce poverty and inequality. 
            Zakat also serves as a means of purifying one's wealth and soul, as it is a way of acknowledging that 
            all wealth belongs to Allah and that we are merely stewards of it. The Prophet Muhammad 
            said, "Zakat is a means of cleansing the soul and purifying the heart".
        </p>

        <p className="text-gray-600 mb-4">
            Zakat is not only a means of supporting the poor and needy, but it also serves as a way of building a 
            sense of community and solidarity among Muslims. By giving Zakat, Muslims are demonstrating their 
            commitment to the well-being of their fellow Muslims and to the broader community. Zakat also helps 
            to promote a sense of gratitude and appreciation for the blessings that one has received from Allah. 
            The Quran states, "And let not those who covetously withhold of that which Allah has bestowed on them 
            think that it is better for them. Nay, it is worse for them. The things which they covetously 
            withhold shall be tied to their necks like a collar on the Day of Resurrection".
        </p>

        <p className="text-gray-600 mb-4">
            In conclusion, Zakat is a fundamental aspect of Islam that promotes social justice, equality, 
            and compassion. It is a means of purifying one's wealth and soul, building a sense of community 
            and solidarity, and demonstrating gratitude and appreciation for the blessings of Allah. By giving 
            Zakat, Muslims are fulfilling one of the five pillars of Islam and are contributing to the creation 
            of a more just and equitable society.
        </p>

        </div>
  );
};

export default BlogPost3;