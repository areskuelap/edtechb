import React from 'react';
import {FaArrowDown} from "react-icons/fa";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center">
          <div className='w-full md:w-1/3 flex justify-center'>
            <Link to="/"><h1 className="text-gray-800 text-3xl cursor-pointer font-semibold">Edtech</h1></Link>
          </div>
          <div className="flex flex-wrap items-center w-full md:w-2/3 justify-evenly">
            <div className='flex w-full md:w-1/4 items-center py-2 md:py-0'>
              <div className='w-3/4 justify-center'>
                <p className="text-gray-800 text-lg cursor-pointer font-semibold">For governments</p>
              </div>
              <div className='w-1/4 justify-start'>
                <FaArrowDown className='w-5 text-gray-800 cursor-pointer' />
              </div>
            </div>
            <div className='flex w-full md:w-1/4 items-center py-2 md:py-0'>
              <div className='w-3/4 justify-center'>
                <Link to="/submit"><p className="text-gray-800 text-lg font-semibold cursor-pointer ">For Enterprises</p></Link>
              </div>
              <div className='w-1/4 justify-start'>
                <FaArrowDown className='w-5 cursor-pointer text-gray-800' />
              </div>
            </div>
            <div className='flex w-full md:w-1/4 items-center py-2 md:py-0'>
              <div className='w-3/4 justify-center'>
                <Link to="/pricing"><p className="text-gray-800 text-lg cursor-pointer font-semibold">Pricing</p></Link>
              </div>
            </div>
            <div className='flex justify-center w-full md:w-1/4 py-2 md:py-0'>
              <Link to="/login"><button className='px-4 py-2 rounded border-2 border-blue-700 text-lg text-blue-700 bg-white hover:bg-blue-700 hover:text-white font-semibold'>Log in/Sign in</button></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;