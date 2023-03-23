import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className='bg-gray-800 grid py-16 grid-cols-1 sm:grid-cols-3'>
      <div className='pb-8 sm:pb-0'>
      <div className='flex justify-center py-6'>
      <Link to="/"><img src="https://drive.google.com/uc?export=view&id=1Q0YRB9WuAGnvnwMfDoBVPR75dDX_ro4v" className="w-auto cursor-pointer h-16"/></Link>
      </div>
      <div className='grid grid-cols-2 pb-6 pt-3'>
      <div className='flex justify-end'>
      <a href="/" target="_blank"><img src="https://drive.google.com/uc?export=view&id=1PDOWtdcRT-kZvX9SNu1ZKAdCE0JUhaEf" className="w-auto cursor-pointer h-12"/></a>
      </div>
      <div className='flex justify-start'>
      <a href="/" target="_blank"><img src="https://i0.wp.com/www.expatincroatia.com/wp-content/uploads/2017/10/Apple_Store_logo.svg_.png?ssl=1" className="w-auto cursor-pointer ml-4 h-12"/></a>
      </div>      
      </div>
      </div>
      <div className='pb-8 sm:pb-0'>
        <p className='text-lg text-white pb-4 font-semibold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>Schools</p>
        <p  className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>School of Languages and Machine Translation</p>
        <p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>School of Applied AI to Programming</p>
        <p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>School of Applied AI to Learning</p>
        <p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>School of Applied AI to Marketing and Design</p>
      </div>
      <div>
        <Link to="/about"><p className='text-base flex sm:justify-start text-white pb-2 font-light hover:font-bold cursor-pointer justify-center mx-4 sm:mx-0'>About us</p></Link>
        <Link to="/contact"><p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>Contact</p></Link>
        <Link to="/scholarship"><p className='text-base text-white pb-2 font-light hover:font-bold cursor-pointer flex sm:justify-start justify-center mx-4 sm:mx-0'>Scholarships</p></Link>       
      </div>
    </div>
  );
}

export default Footer;