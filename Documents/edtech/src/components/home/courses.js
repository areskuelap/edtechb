import React from 'react';
import {FaArrowRight} from "react-icons/fa";
import {Link} from "react-router-dom";

function Courses() {
  return (
    <div className='block sm:flex items-center bg-blue-800'>
      <div className='w-4/5 sm:w-1/2 pl-6 sm:pl-24 pb-12 '>
        <div className='flex justify-start'>
        <p className='pt-20 text-4xl pb-6 text-left text-gray-100 font-bold'>The AI skills needed for the AI era</p>
        </div>
        <div className='flex pb-6 justify-start'>
        <p className="text-lg flex justify-start text-left font-medium text-gray-50">Train your workforce and/or yourself in the usage of the newest and most capabale AI tools in the market. Get ready and multiply your productivity.</p>
        </div>
        <div className='flex justify-start items-center'>
        <Link to="/login"><button className='px-4 py-2 cursor-pointer rounded border-2 text-lg space-x-2 items-center hover:bg-gray-50 text-blue-700 bg-white font-semibold flex'>Learn More <FaArrowRight className='w-8 ml-2 text-blue-800'/></button></Link>
        </div>
      </div>
      <div className="flex justify-center w-4/5 sm:w-1/2">
        <img src="https://drive.google.com/uc?export=view&id=1582vARIhz79H_KcckEQPdJne8ZNo9_mr" className='w-1/2 h-auto'/>
      </div>
    </div>
  );
}

export default Courses;