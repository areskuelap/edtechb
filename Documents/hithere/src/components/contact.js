import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className='pt-20 pb-72 sm:pt-20 sm:pb-20'>
   <form onSubmit={handleSubmit} className="flex flex-col w-10/12 sm:w-1/3 mx-auto">
      <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
        Nombre
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        className="px-4 py-2 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-blue-500"
        required
      />

      <label htmlFor="email" className="mb-2 text-gray-700 font-semibold">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        className="px-4 py-2 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-blue-500"
        required
      />

      <label htmlFor="message" className="mb-2 text-gray-700 font-semibold">
        Mensaje
      </label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        className="px-4 py-2 rounded-md border border-gray-400 mb-4 focus:outline-none focus:border-blue-500"
        required
      ></textarea>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Enviar
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
