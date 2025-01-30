import React from 'react';
import mosque_2 from '../../assets/mosque_2.jpg';


const BlogPost4 = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">The Importance of Hajj in Islam</h2>
      <img
        src={mosque_2}
        alt="Blog Post Thumbnail"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
        <p className="text-gray-600 mb-4">
            Hajj is one of the five pillars of Islam and is a once-in-a-lifetime obligation for Muslims, 
            promoting spiritual growth, unity, and equality. It is a journey to the holy city of Makkah, 
            where Muslims from all over the world come together to perform rituals and ceremonies that 
            commemorate the sacrifices of the Prophet Ibrahim and his family. Through Hajj, 
            Muslims renew their commitment to their faith and seek spiritual rejuvenation.
        </p>

        <p className="text-gray-600 mb-4">
            One of the most significant aspects of Hajj is its ability to promote unity and equality among Muslims. 
            During Hajj, Muslims from diverse backgrounds and cultures come together, shedding their worldly 
            distinctions and social hierarchies. They wear simple, identical clothing, and perform the same 
            rituals, emphasizing their shared humanity and equality before Allah. This experience fosters a 
            sense of global Muslim solidarity and community.
        </p>

        <p className="text-gray-600 mb-4">
            Hajj is also a transformative experience that promotes spiritual growth and self-reflection. 
            The rituals and ceremonies of Hajj are designed to help Muslims detach from worldly concerns 
            and focus on their inner selves. Through Hajj, Muslims can reflect on their lives, acknowledge 
            their mistakes, and seek forgiveness. The experience can be deeply humbling and cathartic, 
            leading to a renewed sense of purpose and direction.
        </p>

        <p className="text-gray-600 mb-4">
            In addition to its spiritual significance, Hajj also has a profound impact on the social 
            and economic lives of Muslims. The pilgrimage attracts millions of visitors each year, 
            generating significant economic activity and creating jobs in the hospitality, transportation, 
            and tourism sectors. Hajj also promotes cultural exchange and understanding, as Muslims from different 
            parts of the world share their traditions, customs, and experiences.
        </p>

        </div>
  );
};

export default BlogPost4;