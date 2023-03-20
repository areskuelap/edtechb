import React from 'react';

function TestimonialCard({ name, text, imgSrc }) {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <img
        src={imgSrc}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      <h4 className="text-xl font-semibold">{name}</h4>
    </div>
  );
}

export default TestimonialCard;