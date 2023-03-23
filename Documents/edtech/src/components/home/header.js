import React, {useState} from 'react';
import {FaArrowDown} from "react-icons/fa";
import {Link} from "react-router-dom";
import {HiMenuAlt1} from "react-icons/hi";

function Header() {

  const [show, setShow] = useState(false);

  const abrir = () => {
    setShow(abierto => !abierto)
  }

  return (
    <header className="bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center">
          <div className='w-full items-center md:w-1/3 flex'>
            <div className='w-1/5 flex sm:hidden'></div>
            <div className='w-3/5 sm:w-full flex justify-center'>
            <Link to="/"><img src="https://drive.google.com/uc?export=view&id=1Q0YRB9WuAGnvnwMfDoBVPR75dDX_ro4v" className="w-auto cursor-pointer h-16"/></Link>
            </div>
            <div className='w-1/5 flex justify-center sm:hidden'>
            <HiMenuAlt1 onClik={abrir} className="w-auto cursor-pointer h-12 text-gray-800"/>
            </div>
          </div>
          <div className="sm:flex hidden flex-wrap items-center w-full md:w-2/3 justify-evenly">
            <div className='flex w-full md:w-1/4 items-center py-2 md:py-0'>
              <div className='w-3/4 justify-center'>
                <p className="text-gray-800 text-lg cursor-pointer font-semibold hover:text-blue-700">For governments</p>
              </div>
              <div className='w-1/4 justify-start'>
                <FaArrowDown className='w-5 text-gray-800 cursor-pointer' />
              </div>
            </div>
            <div className='flex w-full md:w-1/4 items-center py-2 md:py-0'>
              <div className='w-3/4 justify-center'>
                <Link to="/submit"><p className="text-gray-800 text-lg font-semibold cursor-pointer hover:text-blue-700">For Enterprises</p></Link>
              </div>
              <div className='w-1/4 justify-start'>
                <FaArrowDown className='w-5 cursor-pointer text-gray-800' />
              </div>
            </div>
            <div className='flex w-full md:w-1/4 items-center py-2 md:py-0'>
              <div className='w-3/4 justify-center'>
                <Link to="/pricing"><p className="text-gray-800 text-lg cursor-pointer font-semibold hover:text-blue-700">Pricing</p></Link>
              </div>
            </div>
            <div className='flex justify-center w-full md:w-1/4 py-2 md:py-0'>
              <Link to="/login"><button className='px-4 py-2 rounded border-2 border-blue-700 text-lg text-blue-700 bg-white hover:bg-blue-700 hover:text-white font-semibold'>Log in/Sign in</button></Link>
            </div>
          </div>
          {show &&
            <div className="flex flex-wrap items-center w-full md:w-2/3 justify-evenly">
            <div className='flex w-full md:w-1/4 items-center py-2 md:py-0'>
              <div className='w-3/4 justify-center'>
                <p className="text-gray-800 text-lg cursor-pointer font-semibold hover:text-blue-700">For governments</p>
              </div>
              <div className='w-1/4 justify-start'>
                <FaArrowDown className='w-5 text-gray-800 cursor-pointer' />
              </div>
            </div>
            <div className='flex w-full md:w-1/4 items-center py-2 md:py-0'>
              <div className='w-3/4 justify-center'>
                <Link to="/submit"><p className="text-gray-800 text-lg font-semibold cursor-pointer hover:text-blue-700">For Enterprises</p></Link>
              </div>
              <div className='w-1/4 justify-start'>
                <FaArrowDown className='w-5 cursor-pointer text-gray-800' />
              </div>
            </div>
            <div className='flex w-full md:w-1/4 items-center py-2 md:py-0'>
              <div className='w-3/4 justify-center'>
                <Link to="/pricing"><p className="text-gray-800 text-lg cursor-pointer font-semibold hover:text-blue-700">Pricing</p></Link>
              </div>
            </div>
            <div className='flex justify-center w-full md:w-1/4 py-2 md:py-0'>
              <Link to="/login"><button className='px-4 py-2 rounded border-2 border-blue-700 text-lg text-blue-700 bg-white hover:bg-blue-700 hover:text-white font-semibold'>Log in/Sign in</button></Link>
            </div>
          </div>           
          }         
        </div>
      </div>
    </header>
  );
}

export default Header;