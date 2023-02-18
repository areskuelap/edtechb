import React from 'react';
import { Link} from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className='block bg-gray-500 sm:hidden'>
      <div className='pl-5'>
            <ul>
              <li className='font-semibold  text-lg text-white pt-5 pb-3'>Helpful links</li>
              <li className='text-base text-gray-100 cursor-pointer'>Social media partners</li>
              <li className='text-base text-gray-100 py-3 cursor-pointer'>News</li>
            </ul>
          </div>
          <div className='pl-5'>
            <ul>
            <li className='font-semibold  text-lg text-white pt-5 pb-3'>Related DIRCETUR sites</li>
            <li className='text-base text-gray-100 cursor-pointer'>MINCETUR</li>
            <li className='text-base text-gray-100 py-3 cursor-pointer'>MARCA PERU</li>
            </ul>
          </div>
          <div className='pl-5'>
            <ul>
            <li className='font-semibold text-lg text-white pt-5 pb-3'>About DIRCETUR</li>
            <li className='text-base text-gray-100 cursor-pointer'>Who we are</li>
            <Link to="/contact"><li className='text-lg text-gray-100 py-3 cursor-pointer'>Contact us</li></Link>
            </ul>
          </div>
          <div className='flex justify-center'>
              <p className='font-bold text-xl text-white'>Amazonas</p>
            </div>
            <div className='flex justify-center'>
              <p className='text-lg text-gray-100 px-10 font-semibold cursor-pointer'>Privacy</p>
              <p className='text-lg text-gray-100 font-semibold cursor-pointer'>Cookies</p>
              <p className='text-lg text-gray-100 px-10 font-semibold cursor-pointer'>Links</p>
            </div>
            <div className='flex justify-center py-3'>
              <FaFacebook className='text-gray-100 cursor-pointer w-16 pl-8 pr-4'/>
              <FaInstagram className='text-gray-100 cursor-pointer w-16'/>
              <FaTwitter className='text-gray-100 cursor-pointer w-16'/>
            </div>
            <div className='flex justify-center bg-black items-center w-full h-40'>
            <p className="font-bold text-lg text-white">&copy; Dircetur Amazonas. All Rights Reserved</p>
        </div>
      </div>
        <div className="hidden sm:block bg-gray-500 ">
        <div className='w-full flex justify-center pt-10 pb-5'>
        <div className='w-3/4 grid grid-cols-3'>
          <div>
            <ul>
              <li className='font-semibold  text-lg text-white py-5'>Helpful links</li>
              <li className='text-lg text-gray-100 cursor-pointer'>Social media partners</li>
              <li className='text-lg text-gray-100 py-3 cursor-pointer'>News</li>
            </ul>
          </div>
          <div>
            <ul>
            <li className='font-semibold  text-lg text-white py-5'>Related DIRCETUR sites</li>
            <li className='text-lg text-gray-100 cursor-pointer'>MINCETUR</li>
            <li className='text-lg text-gray-100 py-3 cursor-pointer'>MARCA PERU</li>
            </ul>
          </div>
          <div>
            <ul>
            <li className='font-semibold  text-lg text-white py-5'>About DIRCETUR</li>
            <li className='text-lg text-gray-100 cursor-pointer'>Who we are</li>
            <li><Link to="/contact" className='text-lg text-gray-100 py-3 cursor-pointer'>Contact us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-gray-500'>
          <div className='pb-5 flex justify-center'>
          <hr className='w-4/5 border-2 border-gray-200'></hr>
          </div> 
          <div className='grid grid-cols-3 pb-10'>
            <div className='flex justify-center'>
              <p className='font-bold text-2xl text-white'>Amazonas</p>
            </div>
            <div className='flex justify-center'>
              <p className='text-lg text-white px-10 font-semibold cursor-pointer'>Privacy</p>
              <p className='text-lg text-white font-semibold cursor-pointer'>Cookies</p>
              <p className='text-lg text-white px-10 font-semibold cursor-pointer'>Links</p>
            </div>
            <div className='flex'>
              <FaFacebook className='text-white cursor-pointer w-16 pl-8 pr-4'/>
              <FaInstagram className='text-white cursor-pointer w-16'/>
              <FaTwitter className='text-white cursor-pointer w-16'/>
            </div>
          </div>
        <div className='flex justify-center bg-black items-center w-full h-40'>
            <p className="font-bold text-lg text-white">&copy; Dircetur Amazonas. All Rights Reserved</p>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Footer;
