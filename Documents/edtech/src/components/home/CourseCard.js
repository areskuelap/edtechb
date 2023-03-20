import React from 'react';

function CourseCard({ title, description, imgSrc }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
<p className="text-gray-600">{description}</p>
<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
Ver más
</button>
</div>
</div>
);
}

export default CourseCard;