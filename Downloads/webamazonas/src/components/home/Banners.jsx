import React from 'react';
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

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
      <div className="flex justify-center">
      <div className='w-11/12'>
    <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
    </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Banners