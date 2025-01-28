import React from 'react';

const DonationDetails = () => {
  return (
    <div className="bg-green-100 py-12">

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-900 mb-4">Donation Details</h2>
        <p className="text-lg text-green-900 mb-8">Thank you for considering a donation to our organization!</p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6 bg-green-200 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Bank Transfer</h3>
          <p className="text-lg text-green-900 mb-4">Account Name: [Insert account name]</p>
          <p className="text-lg text-green-900 mb-4">Account Number: [Insert account number]</p>
          <p className="text-lg text-green-900 mb-4">Bank Name: [Insert bank name]</p>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/2 p-6 bg-green-200 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Online Payment</h3>
          <p className="text-lg text-green-900 mb-4">You can also make a donation online through our secure payment portal.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            <a href="[Insert payment portal link]" className="text-white">Donate Online</a>
          </button>
        </div>

      </div>
    </div>
  );
};

export default DonationDetails;

