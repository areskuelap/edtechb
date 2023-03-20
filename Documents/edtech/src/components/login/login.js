import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import {Link} from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-2xl font-semibold text-gray-900">Sign Up</div>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-3 py-4 mt-6 text-white bg-gradient-to-r from-cyan-400 to-light-blue-500 rounded-md hover:from-cyan-500 hover:to-light-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-6">
              <Link to="/signin"><p className="text-sm text-center text-gray-500">
                Already have an account?{" "}
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Log In
                </a>
              </p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
