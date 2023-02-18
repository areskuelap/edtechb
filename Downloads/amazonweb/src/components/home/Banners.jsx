import React from 'react';
import {Link} from "react-router-dom";

const Banners = () => {
  return (
    <div>
    <div className='block sm:hidden'>
    <Link to="/newsmain"><div className='flex justify-start'>         
        <p className="text-xl pl-4 font-semibold text-black pt-10 pb-5">News & Announcement</p>
    </div></Link>
    <div className='flex justify-center'>
    <div className='w-11/12 flex pb-5'>
           <div className='w-1/5'>
           <button className='px-2 py-1 text-sm text-white bg-green-600 rounded  hover:bg-green-400'>New</button>
           </div>
            <div className='w-3/5'>
            <p className='text-black font-semibold flex justify-start text-base cursor-pointer'>Kuelap will open to visitors on May 10th</p>
            </div>
            <div className='w-1/5 justify-center'>
            <p className='font-light text-sm text-gray-700'>03/19/2023</p>
            </div>
      </div>
    </div>
    <div className='flex justify-center'>
    <div className='w-11/12 flex pb-5'>
           <div className='w-1/5'>
           <button className='px-2 py-1 text-sm text-white bg-green-600 rounded  hover:bg-green-400'>New</button>
           </div>
            <div className='w-3/5 flex justify-start'>
            <p className='text-black font-semibold flex justify-start text-base cursor-pointer'>Kuelap will open to visitors on May 10th</p>
            </div>
            <div className='w-1/5 justify-center'>
            <p className='font-light text-sm text-gray-700'>03/19/2023</p>
            </div>
      </div>
    </div>
    </div>
    <div className='pb-10 hidden sm:flex flex justify-center pt-10'>
    <div className='w-10/12 grid grid-cols-2'>
    <div>
        <div className='flex'>
        <Link to="/newsmain">
        <div className='flex justify-start'>         
        <p className="text-4xl font-semibold text-black pb-10">News & Announcement</p>
        </div>
        </Link>
        </div>
        <Link to="/newsa">
        <div className='flex pb-5'>
            <button className='px-3 py-2 text-base text-white bg-green-600 rounded-full  hover:bg-green-400'>New</button>
            <p className='text-black font-semibold text-lg px-4 cursor-pointer'>Kuelap will open to visitors on May 10th</p>
            <div className='flex justify-end'>
            <p className='font-semibold'>03/19/2023</p>
            </div>
        </div>
        </Link>
        <div className='flex pb-5'>
            <button className='px-3 py-2 text-base text-white bg-green-600 rounded-full hover:bg-green-400'>New</button>
            <p className='text-black font-semibold text-lg px-4 cursor-pointer'>Kuelap will open to visitors on May 10th</p>
            <div className='flex justify-end'>
            <p className='font-semibold'>03/19/2023</p>
            </div>
        </div>
        <div className='flex pb-5'>
            <button className='px-3 py-2 text-base text-white bg-green-600 rounded-full  hover:bg-green-400'>New</button>
            <p className='text-black font-semibold text-lg px-4 cursor-pointer'>Kuelap will open to visitors on May 10th</p>
            <div className='flex justify-end'>
            <p className='font-semibold'>03/19/2023</p>
            </div>
        </div>
        <Link to="/newsmain"><div className='flex justify-start pb-5'>
        <p className=' font-semibold text-gray-700 cursor-pointer'>More...</p>
        </div></Link>
    </div>
    <div className='h-96 w-10/12'>
    <img className='object-scale-down object-cover' src="https://2.bp.blogspot.com/-K_Noc2Vnu10/TmjH4OPw6KI/AAAAAAAABgQ/SbYd5RpIP5o/s1600/P1030857.jpg"/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Banners