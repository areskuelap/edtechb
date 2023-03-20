import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className='bg-gray-800 grid py-16 grid-cols-1 sm:grid-cols-3'>
      <div className='pb-8 sm:pb-0'>
        <p className='text-lg text-white pb-4 font-semibold'>Edtech</p>
        <p className='text-lg text-white pb-4 font-semibold'>Get the app:</p>
      </div>
      <div className='pb-8 sm:pb-0'>
        <p className='text-lg text-white pb-4 font-semibold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>Schools</p>
        <p  className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>School of Languages and Machine Translation</p>
        <p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>School of Applied AI to Programming</p>
        <p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>School of Applied AI to Learning</p>
        <p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>School of Applied AI to Marketing and Design</p>
      </div>
      <div>
        <p className='text-base flex sm:justify-start text-white pb-2 font-light hover:font-bold cursor-pointer justify-center mx-4 sm:mx-0'>About us</p>
        ct<Link to="/contact"><p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>Contact</p></Link>
        <p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>Scholarships</p>
        <p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>Partner with us</p>        
      </div>
    </div>
  );
}

export default Footer;