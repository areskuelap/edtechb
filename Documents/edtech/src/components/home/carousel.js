import React from 'react';
import {HiTrendingUp} from "react-icons/hi";
import {Link} from "react-router-dom";

function Carousel() {
  return (
    <div className='py-24 grid grid-cols-1 sm:grid-cols-3'>
        <div className='flex pb-8 sm:pb-0 justify-center'>
            <div className='w-2/3'>
                <div>
                    <img src='https://i.ytimg.com/vi/w-reMztu1ZU/maxresdefault.jpg' className="w-full h-36 bg-cover rounded-tr-[45px]"/>
                </div>
                
                <div className='flex items-center bg-white py-6 px-3'>
                    <div className='w-1/6'>
                        <HiTrendingUp className="w-10/12 text-blue-700"/>
                    </div>
                    <div className='flex w-5/6 justify-start'>
                        <p className='text-sm text-blue-700 font-medium'>Intermediate</p>
                    </div>
                </div>
                <div className='pb-3 bg-white flex justify-start'>
                <Link to="/main"><p className='text-xl cursor-pointer font-semibold text-black px-3'>Duolingo English Test full course</p></Link>
                </div>
                <div className='pb-6 bg-white flex '>
                    <p className='text-base px-3 font-semibold flex justify-start text-gray-800'>Get access to thousands of sample questions, access lecture videos and documents to get ready for the Duolingo English Test</p>
                </div>
                <div className='pb-6 bg-white'>
                    <p className='text-base font-semibold flex justify-start px-3 text-blue-700'>1 months / 10 hrs/week</p>
                </div>
            </div>
        </div>
        <div className='flex pb-8 sm:pb-0 justify-center'>
            <div className='w-2/3'>
                <div>
                    <img src='https://o.aolcdn.com/images/dims?quality=85&image_uri=https:%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FbcV_ofF.mbT2dqmdd3VFWQ--~B%2Fdz0xNjAwO2g9OTk4O2FwcGlkPXl0YWNoeW9u%2Fhttps:%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D5616%252C3502%252C0%252C241%26quality%3D85%26format%3Djpg%26resize%3D1600%252C998%26image_uri%3Dhttp%253A%252F%252Fo.aolcdn.com%252Fhss%252Fstorage%252Fmidas%252F9b756edb54e7e2643a02eca8a7d23165%252F205348633%252Fartificial-intelligence-machine-learning-and-deep-learning-concepts-picture-id689022374%26client%3Da1acac3e1b3290917d92%26signature%3D02b93623ca3b21de97240833f449f906aeec0efe&client=amp-blogside-v2&signature=b5ca57ab4d9a6e047742cb0bab2f3874dab36632' className="w-full h-36 bg-cover rounded-tr-[45px]"/>
                </div>
                
                <div className='flex items-center bg-white py-6 px-3'>
                    <div className='w-1/6'>
                        <HiTrendingUp className="w-10/12 text-blue-700"/>
                    </div>
                    <div className='flex w-5/6 justify-start'>
                        <p className='text-sm text-blue-700 font-medium'>Intermediate</p>
                    </div>
                </div>
                <div className='pb-3 bg-white flex justify-start'>
                <Link to="/main"><p className='text-xl cursor-pointer font-semibold text-black px-3'>Duolingo English Test full course</p></Link>
                </div>
                <div className='pb-6 bg-white flex '>
                    <p className='text-base px-3 font-semibold flex justify-start text-gray-800'>Get access to thousands of sample questions, access lecture videos and documents to get ready for the Duolingo English Test</p>
                </div>
                <div className='pb-6 bg-white'>
                    <p className='text-base font-semibold flex justify-start px-3 text-blue-700'>1 months / 10 hrs/week</p>
                </div>
            </div>
        </div>
        <div className='flex pb-8 sm:pb-0 justify-center'>
            <div className='w-2/3'>
                <div>
                    <img src='https://bernardmarr.com/img/The%206%20Best%20Free%20Online%20Artificial%20Intelligence%20Courses%20For%202018.png' className="w-full h-36 bg-cover rounded-tr-[45px]"/>
                </div>
                
                <div className='flex items-center bg-white py-6 px-3'>
                    <div className='w-1/6'>
                        <HiTrendingUp className="w-10/12 text-blue-700"/>
                    </div>
                    <div className='flex w-5/6 justify-start'>
                        <p className='text-sm text-blue-700 font-medium'>Intermediate</p>
                    </div>
                </div>
                <div className='pb-3 bg-white flex justify-start'>
                <Link to="/main"><p className='text-xl cursor-pointer font-semibold text-black px-3'>Duolingo English Test full course</p></Link>
                </div>
                <div className='pb-6 bg-white flex '>
                    <p className='text-base px-3 font-semibold flex justify-start text-gray-800'>Get access to thousands of sample questions, access lecture videos and documents to get ready for the Duolingo English Test</p>
                </div>
                <div className='pb-6 bg-white'>
                    <p className='text-base font-semibold flex justify-start px-3 text-blue-700'>1 months / 10 hrs/week</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Carousel;