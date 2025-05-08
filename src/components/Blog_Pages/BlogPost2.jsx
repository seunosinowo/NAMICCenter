import React from 'react';
import tradition from '../../assets/tradition.jpg';

const BlogPost2 = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">The Significance of Ileya (Eid al-Adha)</h2>
      <img
        src={tradition}
        alt="Ileya Celebration"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
        <p className="text-gray-600 mb-4">
          Ileya, known as Eid al-Adha, is one of the most sacred festivals in Islam, commemorating Prophet Ibrahim's 
          ultimate act of obedience to Allah. This blessed occasion reminds Muslims of the importance of sacrifice 
          and submission to divine will. The Quran states, "Their meat will not reach Allah, nor will their blood, 
          but what reaches Him is piety from you" (Quran 22:37). The ritual of Qurbani (sacrifice) teaches Muslims 
          to prioritize spiritual commitment over material possessions, following Ibrahim's exemplary devotion 
          when commanded to sacrifice his son Ismail.
        </p>

        <p className="text-gray-600 mb-4">
          The celebration of Ileya fosters unity and communal harmony through shared traditions. Families gather 
          for special prayers, exchange gifts, and prepare festive meals featuring the sacrificial meat. 
          This distribution of meat, especially to the less fortunate, ensures everyone participates in the 
          festivities. The Prophet Muhammad (peace be upon him) emphasized, "He who does not perform the sacrifice 
          despite having the means, let him not come near our Eid prayer place." This collective act of charity 
          strengthens social bonds and promotes economic justice within communities.
        </p>

        <p className="text-gray-600 mb-4">
          Beyond its historical roots, Ileya serves as a powerful reminder of moral and ethical growth. 
          The festival encourages Muslims to reflect on their personal "sacrifices" - letting go of selfishness, 
          greed, and harmful habits. During the Days of Tashreeq, the Takbir resounds through neighborhoods, 
          reinforcing Allah's greatness and mankind's temporary existence. This spiritual atmosphere motivates 
          believers to increase good deeds, reconcile differences, and renew their commitment to serving others.
        </p>

        <p className="text-gray-600 mb-4">
          Ileya's enduring legacy lies in its synthesis of faith and action. While the Qurbani ritual occurs 
          annually, its lessons of trust in Allah, compassion for creation, and willingness to surrender 
          what's dear remain relevant year-round. As Muslims worldwide don their finest attire and exchange 
          greetings of "Eid Mubarak," they reaffirm their dedication to living by divine principles. 
          The Prophet (PBUH) taught, "No human deed is more pleasing to Allah on the day of Eid than 
          giving sacrifice," highlighting the eternal value of sincere devotion and generosity.
        </p>
    </div>
  );
};

export default BlogPost2;