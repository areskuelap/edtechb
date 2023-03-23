import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import React from "react";

const About = () => {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-5xl px-4 py-8 bg-white shadow-md">
          <h1 className="text-4xl font-bold text-center text-gray-800">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 text-left">
          Welcome to EduX, your premier edtech destination for mastering AI-related skills and preparing for the Duolingo English Test. Based in the vibrant heart of Lima, Peru, our mission is to empower individuals to transform their lives through advanced learning opportunities.<br/><br/>At EduX, we believe in the power of technology to unlock human potential. That's why we focus on AI-related courses, designed to equip our students with the knowledge and tools they need to excel in the rapidly evolving world of artificial intelligence. Our highly experienced team of educators and industry professionals is dedicated to providing a comprehensive learning experience, blending theoretical concepts with hands-on, practical experience.<br/><br/>While our primary focus is on AI-related courses, we also recognize the importance of language proficiency for success in today's global landscape. We are proud to offer a specialized course for the Duolingo English Test, providing students with the necessary skills and strategies to perform at their best on this widely-accepted language assessment. Please note that AI Academy Lima is not affiliated with Duolingo; our course is designed to help students effectively prepare for the Duolingo English Test independently.
          <br/><br/>Our core values revolve around innovation, accessibility, and excellence. We are committed to creating a supportive and inclusive learning environment for students from diverse backgrounds and skill levels. Our flexible online and in-person course options make it easy for learners to access our top-quality educational resources at their convenience.
          <br/><br/>Join us at EduX and invest in your future. Together, we'll help you build the skills you need to succeed in the AI-driven world and overcome language barriers with confidence.
          </p>
          <div className="flex flex-wrap justify-around mt-8">
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="team member"
                  className="w-24 h-24 mb-4 rounded-full"
                />
                <h2 className="text-xl font-semibold text-gray-800">Héctor Díaz</h2>
                <p className="text-sm text-gray-600">CEO & Founder</p>
                <div className="flex mt-3 space-x-2">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-500">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-600">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="team member"
                  className="w-24 h-24 mb-4 rounded-full"
                />
                <h2 className="text-xl font-semibold text-gray-800">Jane Smith</h2>
                <p className="text-sm text-gray-600">COO</p>
                <div className="flex mt-3 space-x-2">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-500">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-600">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="team member"
                  className="w-24 h-24 mb-4 rounded-full"
                />
                <h2 className="text-xl font-semibold text-gray-800">Mark Johnson</h2>
                <p className="text-sm text-gray-600">CTO</p>
                <div className="flex mt-3 space-x-2">
                  <a href="#" className="text-blue-500 hover text-blue-600">
            <FaFacebook />
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-500">
            <FaTwitter />
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-600">
            <FaInstagram />
      </a>
    </div>
  </div>
</div>
</div>
<div className="mt-8">
<h2 className="text-2xl font-semibold text-center text-gray-800">Contact Us</h2>
<div className="flex justify-center mt-4">
  <HiOutlineMail className="text-4xl text-gray-600" />
  <p className="ml-4 text-xl text-gray-600">contact@konlap.com</p>
</div>
</div>
</div>
</div>
    )
}

export default About;