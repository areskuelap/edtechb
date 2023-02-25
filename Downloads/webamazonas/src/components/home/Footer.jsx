import React from 'react';
import { Link} from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className='block bg-gray-500 sm:hidden'>
      <div className='pl-5'>
            <ul>
              <li className='font-semibold  text-lg text-white pt-5 pb-3'>Helpful links</li>
              <a href="https://www.instagram.com/amazo.nas/" rel="noreferrer" target="_blank"><li className='text-base text-gray-100 cursor-pointer'>Social media partners</li></a>
              <Link to="/newsmain"><li className='text-base text-gray-100 py-3 cursor-pointer'>News</li></Link>
            </ul>
          </div>
          <div className='pl-5'>
            <ul>
            <li className='font-semibold  text-lg text-white pt-5 pb-3'>Related DIRCETUR sites</li>
            <a href="https://www.gob.pe/mincetur" rel="noreferrer" target="_blank"><li className='text-base text-gray-100 cursor-pointer'>MINCETUR</li></a>
            <a href="https://peru.info/es-pe/marca-peru" rel="noreferrer" target="_blank"><li className='text-base text-gray-100 py-3 cursor-pointer'>MARCA PERU</li></a>
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
              <a href="https://web.facebook.com/dirceturamazonas1" rel="noreferrer" target="_blank"><FaFacebook className='text-gray-100 cursor-pointer w-16 pl-8 pr-4'/></a>
              <a href="https://www.instagram.com/dircetur.amazonas/" rel="noreferrer" target="_blank"><FaInstagram className='text-gray-100 cursor-pointer w-16'/></a>
              <a href="https://www.tiktok.com/@dirceturamazonas" rel="noreferrer" target="_blank"><FaTiktok className='text-gray-100 cursor-pointer w-16'/></a>
            </div>
            <div className='flex justify-center bg-black items-center w-full h-40'>
            <p className="font-bold text-lg text-white">&copy; Dircetur Amazonas. All Rights Reserved</p>
        </div>
      </div>
        <div className="hidden sm:block bg-gray-800 ">
        <div className='w-full flex justify-center pt-10 pb-5'>
        <div className='w-3/4 grid grid-cols-3'>
          <div>
            <ul>
              <li className='font-semibold  text-lg text-gray-400 hover:text-white py-5'>Helpful links</li>
              <a href="https://www.instagram.com/amazo.nas/" rel="noreferrer" target="_blank"><li className='text-lg text-gray-400 hover:text-white cursor-pointer'>Social media partners</li></a>
              <Link to="/newsmain"><li className='text-lg text-gray-400 hover:text-white py-3 cursor-pointer'>News</li></Link>
            </ul>
          </div>
          <div>
            <ul>
            <li className='font-semibold  text-lg text-gray-400 hover:text-white py-5'>Related DIRCETUR sites</li>
            <a href="https://www.gob.pe/mincetur" rel="noreferrer" target="_blank"><li className='text-lg text-gray-400 hover:text-white cursor-pointer'>MINCETUR</li></a>
            <a href="https://peru.info/es-pe/marca-peru" rel="noreferrer" target="_blank"><li className='text-lg text-gray-400 hover:text-white py-3 cursor-pointer'>MARCA PERU</li></a>
            </ul>
          </div>
          <div>
            <ul>
            <li className='font-semibold  text-lg text-gray-400 hover:text-white py-5'>About DIRCETUR</li>
            <li className='text-lg text-gray-400 hover:text-white cursor-pointer'>Who we are</li>
            <li><Link to="/contact" className='text-lg text-gray-400 hover:text-white py-3 cursor-pointer'>Contact us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-gray-800'>
          <div className='pb-5 flex justify-center'>
          <hr className='w-4/5 border-2 border-gray-200'></hr>
          </div> 
          <div className='grid grid-cols-3 pb-10'>
            <div className='flex justify-center'>
              <p className='font-bold text-2xl text-gray-400 hover:text-white'>Amazonas</p>
            </div>
            <div className='flex justify-center'>
              <p className='text-lg text-gray-400 hover:text-white px-10 font-semibold cursor-pointer'>Privacy</p>
              <p className='text-lg text-gray-400 hover:text-white font-semibold cursor-pointer'>Cookies</p>
              <p className='text-lg text-gray-400 hover:text-white px-10 font-semibold cursor-pointer'>Links</p>
            </div>
            <div className='flex'>
            <a href="https://web.facebook.com/dirceturamazonas1" rel="noreferrer" target="_blank"><FaFacebook className='text-gray-400 hover:text-white cursor-pointer w-16 pl-8 pr-4'/></a>
              <a href="https://www.instagram.com/dircetur.amazonas/" rel="noreferrer" target="_blank"><FaInstagram className='text-gray-400 hover:text-white cursor-pointer w-16'/></a>
              <a href="https://www.tiktok.com/@dirceturamazonas" rel="noreferrer" target="_blank"><FaTiktok className='text-gray-400 hover:text-white cursor-pointer w-16'/></a>
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
