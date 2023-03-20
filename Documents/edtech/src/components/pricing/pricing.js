import React from 'react';
import {Link} from "react-router-dom";

const plans = [
  {
    title: 'Weekly Plan',
    price: 6,
    duration: '1 week',
  },
  {
    title: '2-Week Plan',
    price: 10,
    duration: '2 weeks',
  },
  {
    title: 'Monthly Plan',
    price: 20,
    duration: '1 month',
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold mb-6">Choose your plan</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {plans.map((plan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg py-6 px-1">
                <h2 className="text-lg font-semibold mb-4">{plan.title}</h2>
                <p className="text-xl font-bold mb-4">${plan.price}</p>
                <p className="text-gray-500 mb-4">{plan.duration}</p>
                <ul className="list-disc list-inside mb-4">
                  <li>AI revision</li>
                  <li>Practice questions</li>
                  <li>Recorded lectures</li>
                  <li>Mobile app & Web access</li>
                </ul>
                <Link to="/login"><button className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-4 py-2 rounded-md">
                  Get Started
                </button></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
