import React, { useState } from 'react';

const Contact = () => {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
  };

  return (
      <div className="flex justify-center">
        <div className='sm:w-3/5 w-full'>
        <div className="bg-white w-11/12 mx-auto my-10 rounded-lg shadow-md sm:w-full">
      <h1 className="text-2xl font-semibold text-blue-600 py-6 px-8">Submit a request</h1>
      <form onSubmit={handleSubmit} className="p-8">
        <div className="mb-4 grid grid-cols-4 gap-4">
          <label htmlFor="category" className="block text-gray-700">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="col-span-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a category</option>
            <option value="active_students">Active Students</option>
            <option value="enterprise_programs_students">Enterprise Programs Students</option>
            <option value="government_program_students">Government Program Students</option>
            <option value="scholarships_students">Scholarships Students</option>
          </select>
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
          <label htmlFor="subject" className="block text-gray-700">Subject:</label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="col-span-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4 grid grid-cols-4 gap-4">
          <label htmlFor="description" className="block text-gray-700">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="col-span-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
          />
        </div>
        <div className="mb-4 grid grid-cols-4 gap-4">
          <label htmlFor="attachments" className="block text-gray-700">Attachments (optional):</label>
          <input
            id="attachments"
            type="file"
            multiple
            onChange={(e) => setAttachments([...e.target.files])}
            className="col-span-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
</div>
<button
       type="submit"
       className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
     >
Submit
</button>
</form>
</div>
        </div>
      </div>
    )
};

export default Contact;
