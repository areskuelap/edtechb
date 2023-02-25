import React, {useState} from 'react';
import useScript from './useScript';
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const Selects = () => {

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);




  useScript("https://widgets.skyscanner.net/widget-server/js/loader.js");
  return (
      <div className='bg-green-50'>
        <div className='flex justify-center'>
            <div className='w-10/12'>
                <p className='text-3xl font-bold text-gray-800 py-5'>Themed travels</p>
            </div>
        </div>
        <div className="flex justify-center">
          <div className='w-10/12  py-10 grid grid-cols-1 sm:grid-cols-4'>
              <div className="">
              <div className="w-11/12">
              <div className="flex justify-center sm:justify-start">
              <img src='https://i0.wp.com/laposadadecuispes.com/wp-content/uploads/2018/08/museo-4.jpg?ssl=1' className='w-64 rounded h-49' alt='img'/>
              </div>
              <div className="flex justify-center sm:justify-start">
              <p className='text-sm font-bold pt-1 sm:pt-3 pb-1 sm:pb-2 hover:text-green-600 text-gray-700 cursor-pointer'>Sponsored travel</p>
              </div>
              <div className="flex justify-center sm:justify-start">
              <p className='text-base font-bold text-gray-800 hover:text-green-600 cursor-pointer'>Try the best food and canopying in Bagua</p>
              </div>                           
              </div>
              </div>
              <div className="">
              <div className="w-11/12 pt-10 sm:pt-0">
              <div className="flex justify-center sm:justify-start">
              <img src='https://blog.redbus.pe/wp-content/uploads/2017/09/peru-1531879_1920.jpg' className='w-64 rounded h-49' alt='img'/>
              </div>
              <div className="flex justify-center sm:justify-start">
              <p className='text-sm font-bold pt-1 sm:pt-3 pb-1 sm:pb-2 hover:text-green-600 text-gray-700 cursor-pointer'>Sponsored travel</p>
              </div>
              <div className="flex justify-center sm:justify-start">
              <p className='text-base font-bold text-gray-800 hover:text-green-600 cursor-pointer'>Try local specialties in Rodriguez de Mendoza</p>
              </div>
              </div>
              </div>
              <div className="">
              <div className="w-11/12 pt-10 sm:pt-0">
                <div className="flex justify-center sm:justify-start">
                <img src='https://i0.wp.com/laposadadecuispes.com/wp-content/uploads/2018/08/museo-4.jpg?ssl=1' className='w-64 rounded h-49' alt='img'/>
                </div>
                <div className="flex justify-center sm:justify-start">
                <p className='text-sm font-bold pt-1 sm:pt-3 pb-1 sm:pb-2 hover:text-green-600 text-gray-700 cursor-pointer'>Sponsored travel</p>
                </div>
                <div className="flex justify-center sm:justify-start">
                <p className='text-base font-bold text-gray-800 hover:text-green-600 cursor-pointer'>Must do in Chachapoyas</p>
                </div>
              </div>
              </div>
              <div className="">
              <div className="w-11/12 pt-10 sm:pt-0">
                <div className="flex justify-center sm:justify-start">
                <img src='https://blog.redbus.pe/wp-content/uploads/2017/09/peru-1531879_1920.jpg' className='w-64 rounded h-49' alt='img'/>
                </div>
                <div className="flex justify-center sm:justify-start">
                <p className='text-sm font-bold pt-1 sm:pt-3 pb-1 sm:pb-2 hover:text-green-600 text-gray-700 cursor-pointer'>Sponsored travel</p>
                </div>
                <div className="flex justify-center sm:justify-start">
                <p className='text-base font-bold text-gray-800 hover:text-green-600 cursor-pointer'>What to do in Luya Viejo</p>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Selects