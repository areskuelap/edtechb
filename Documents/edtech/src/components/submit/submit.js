import React, { useState } from 'react';

const Submit = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    companySize: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white py-6 px-24 rounded-lg shadow-md">
      <div className='py-8 flex justify-center'>
        <p className='text-4xl font-semibold text-gray-800'>Sign Up for a Consultation</p>
      </div>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 px-16 py-2 rounded-lg w-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 px-4 py-2 rounded-lg w-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Work Email</label>
          <input
            type="email"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            className="mt-1 px-4 py-2 rounded-lg w-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 px-4 py-2 rounded-lg w-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 px-4 py-2 rounded-lg w-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className='pb-12'>
          <label className="block text-gray-700">Company Size</label>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="mt-1 px-4 py-2 rounded-lg w-full border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select company size</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-1000">201-1000</option>
            <option value="1001+">1001+</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold w-3/5 py-2 rounded-lg  hover:bg-blue-600 focus:outline-none"
    >
      Submit
    </button>
  </form>
</div>

);
};

export default Submit;
