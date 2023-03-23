import React, { useState } from 'react';

const Scholarship = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
  };

  return (
    <div className="bg-white w-4/5 mx-auto my-10 rounded-lg shadow-md sm:w-3/5">
      <h1 className="text-2xl font-semibold text-blue-600 py-6 px-8">Scholarship Submission</h1>
      <form onSubmit={handleSubmit} className="p-8">
        <div className="mb-4 grid grid-cols-4 gap-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col-span-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4 grid grid-cols-4 gap-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="col-span-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4 grid grid-cols-4 gap-4">
          <label htmlFor="country" className="block text-gray-700">Country:</label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="col-span-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4 grid grid-cols-4 gap-4">
          <label htmlFor="answer" className="block text-gray-700">What is "nothing" and how is AI related to it?:</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="col-span-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Scholarship;