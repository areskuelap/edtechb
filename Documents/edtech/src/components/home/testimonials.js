import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialData = [
  {
    name: 'Microsoft Azure',
    text: 'We use Microsoft Azure capabilities to enhance content creation and to embed artificial intelligence into our web and mobile applications',
    imgSrc: 'https://logo-marque.com/wp-content/uploads/2021/03/Microsoft-Azure-Embleme.jpg',
  },
  {
    name: 'OpenAI Large Language Models',
    text: 'We use Microsoft Azure capabilities to enhance content creation and to embed artificial intelligence into our web and mobile applications',
    imgSrc: 'https://miro.medium.com/v2/resize:fit:2942/0*W0ONHgjfFsJ3YgI6.jpg',
  },
  {
    name: 'MERN',
    text: 'We use Microsoft Azure capabilities to enhance content creation and to embed artificial intelligence into our web and mobile applications',
    imgSrc: 'https://fullstackacademy.in/wp-content/uploads/2021/04/Blog-Article-MERN-Stack.jpg',
  }
];

function Testimonials() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-blue-700 font-semibold mb-8">Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;