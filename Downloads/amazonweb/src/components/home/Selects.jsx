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
      <div>
      <div className="flex justify-center hidden sm:flex">
          <div className='w-11/12 pt-10'>
              <p className='text-lg text-gray-800 font-bold'>Themed travels</p>
          </div>
      </div>
        <div className="flex hidden justify-center">
            <div className="flex w-11/12 pt-5">
            <div className='w-1/6 flex items-center justify-center'>
            <ChevronLeftIcon className="w-12 text-gray-800 font-bold"/>
            </div>
            <div className='w-4/6'>
            <div className="w-64 h-64 cursor-pointer bg-cover  bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/df/Lago_de_Pomacochas%2C_Florida%2C_Bongar%C3%A1%2C_Amazonas_-_Per%C3%BA..jpg')]">
            <div className='bg-green-500 py-2 px-4 w-3/5'>
            <p className='text-white font-semibold text-base'>Themed travel</p>
            </div>
            </div>
            </div>
            <div className='w-1/6 flex justify-center items-center'>
              <ChevronRightIcon className="w-12 text-gray-800"/>
            </div>
            </div>
        </div>
        <div className='bg-white hidden sm:block'>
        <div className='flex justify-center pt-10'>
        <div className='w-10/12 grid grid-cols-4'>
      <div className='pr-5'>
      <div className="h-48 cursor-pointer bg-cover w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/df/Lago_de_Pomacochas%2C_Florida%2C_Bongar%C3%A1%2C_Amazonas_-_Per%C3%BA..jpg')]">
        <div className='bg-green-500 py-2 px-4 w-3/5'>
        <p className='text-white text-base'>Themed travel</p>
        </div>
        </div>
        <div className='border h-24 border-gray-600 mb-10 hover:border-2 hover:border-green-600'>
        <p className='text-gray-600 cursor-pointer font-semibold text-2xl mx-5'>Traveling from Condorcanqui to Luya</p>
        </div>
      </div>
      <div className='pr-5'>
      <div className='w-full cursor-pointer h-48 bg-cover bg-[url("https://seturismo.pe/wp-content/uploads/2018/08/Laguna-de-los-condores-Amazonas.jpg")]'>
        <div className='bg-green-500 py-2 px-4 w-3/5'>
        <p className='text-white'>Themed travel</p>
        </div>
        </div>
        <div className='border h-24 border-gray-600 mb-10 hover:border-2 hover:border-green-600'>
        <p className='text-gray-600 font-semibold cursor-pointer text-2xl mx-5'>Must do in Chachapoyas</p>
        </div>
      </div>
      <div className='pr-5'>
      <div className='w-full cursor-pointer h-48 bg-cover bg-[url("https://i0.wp.com/laposadadecuispes.com/wp-content/uploads/2018/08/museo-4.jpg?ssl=1")]'>
        <div className='bg-green-500 py-2 px-4 w-3/5'>
        <p className='text-white'>Themed travel</p>
        </div>
        </div>
        <div className='border h-24 border-gray-600 mb-10 hover:border-2 hover:border-green-600'>
        <p className='text-gray-600 font-semibold cursor-pointer text-2xl mx-5'>Visiting Quiocta</p>
        </div>
      </div>
      <div className=''>
      <div className='w-full h-48 cursor-pointer bg-cover bg-[url("https://i0.wp.com/laposadadecuispes.com/wp-content/uploads/2018/08/museo-4.jpg?ssl=1")]'>
        <div className='bg-green-500 py-2 px-4 w-3/5'>
        <p className='text-white'>Themed travel</p>
        </div>
        </div>
        <div className='border h-24 border-gray-600 mb-10 hover:border-2 hover:border-green-600'>
        <p className='text-gray-600 font-semibold cursor-pointer text-2xl mx-5'>About karajia</p>
        </div>
      </div>
        </div>
        </div>
    </div>
      </div>
  )
}

export default Selects