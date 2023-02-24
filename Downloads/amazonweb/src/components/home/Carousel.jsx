import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";


const Carousel = () => {

  return (
    <div>
    <div className='block sm:hidden'>
    <div className='flex justify-center pt-10'>
    <div className=" w-11/12">
    <p className='pb-5 text-xl flex justify-start font-semibold'>Travel basics</p>
    </div>
    </div>
    <div className="flex mb-3 justify-center">
    <Link to="/visa">
    <div className='ml-2 flex pb-3 w-11/12 mr-5 border border-gray-400 hover:border-2 hover:border-green-500 hover:shadow-lg rounded-lg'>
    <div className='w-1/5 flex justify-center'>
    <img className='w-10/12 m-3 object-cover rounded-full' src="https://static.vecteezy.com/system/resources/previews/009/916/094/non_2x/passport-flat-circle-free-vector.jpg" alt="Hola"/>
    </div>
    <div className="mt-5 ml-1 w-3/5">
      <div>
        <p className='font-semibold pb-3 text-base text-black'>VISA</p>
      </div>
      <div>
        <p className='text-sm font-light text-gray-800'>This is a sample description.</p>
      </div>
    </div>
    <div className="flex w-1/5 items-center">
    <ChevronRightIcon className="text-black w-8"/>
    </div>
    </div>
    </Link>
    </div>
    <div className="flex mb-3 justify-center">
    <div className='ml-2 flex pb-3 w-11/12 mr-5 border border-gray-400 hover:border-2 hover:border-green-500 hover:shadow-lg rounded-lg'>
    <div className='w-1/5 flex justify-center'>
    <img className='w-10/12 m-3 object-cover rounded-full' src="https://img.favpng.com/23/10/23/logo-tax-free-shopping-duty-free-shop-png-favpng-VSvtvaLY5WWjVyLyKeLhCMPWP.jpg" alt="Hola"/>
    </div>
    <div className="mt-5 ml-1 w-3/5">
      <div>
        <p className='font-semibold pb-3 text-base text-black'>Duty Free & Tax Refunds</p>
      </div>
      <div>
        <p className='text-sm font-light text-gray-800'>This is a sample description.</p>
      </div>
    </div>
    <div className="flex w-1/5 items-center">
    <ChevronRightIcon className="text-black w-8"/>
    </div>
    </div>
    </div>
    <div className="flex mb-3 justify-center">
    <div className='ml-2 flex pb-3 w-11/12 mr-5 border border-gray-400 hover:border-2 hover:border-green-500 hover:shadow-lg rounded-lg'>
    <div className='w-1/5 flex justify-center'>
    <img className='w-10/12 m-3 object-cover rounded-full' src="https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg" alt="Hola"/>
    </div>
    <div className="mt-5 ml-1 w-3/5">
      <div>
        <p className='font-semibold pb-3 text-base text-black'>Tourist-friendly Amazonas</p>
      </div>
      <div>
        <p className='text-sm font-light text-gray-800'>This is a sample description.</p>
      </div>
    </div>
    <div className="flex w-1/5 items-center">
    <ChevronRightIcon className="text-black w-8"/>
    </div>
    </div>
    </div>
    <div className="flex mb-3 justify-center">
    <Link to="/transportation"><div className='ml-2 flex pb-3 w-11/12 mr-5 border border-gray-400 hover:border-2 hover:border-green-500 hover:shadow-lg rounded-lg'>
    <div className='w-1/5 flex justify-center'>
    <img className='w-10/12 m-3 object-cover rounded-full' src="https://media.istockphoto.com/id/1269785368/vector/road-construction-logo-road-maintenance-creative-sign-concept-paving-design-template-vector.jpg?b=1&s=612x612&w=0&k=20&c=GKlLcccnfFxJ6b4V6WpbWWKFZjkbun-tljlLusrRogI=" alt="Hola"/>
    </div>
    <div className="mt-5 ml-1 w-3/5">
      <div>
        <p className='font-semibold pb-3 text-base text-black'>Transportation</p>
      </div>
      <div>
        <p className='text-sm font-light text-gray-800'>This is a sample description.</p>
      </div>
    </div>
    <div className="flex w-1/5 items-center">
    <ChevronRightIcon className="text-black w-8"/>
    </div>
    </div></Link>
    </div>
    </div>
    <div className='bg-white hidden sm:block'>
    <div className='flex justify-center pt-10'>
    <div className=" w-10/12">
    <p className='pb-10 text-4xl flex justify-start font-semibold'>Travel basics</p>
    </div>
    </div>
    <div className='flex justify-center'>
    <div className='w-10/12 grid grid-cols-2'>
    <Link to="/visa">
    <div className='flex mr-5 border pb-3 border-gray-400 hover:border-2 hover:border-green-500 hover:shadow-lg rounded-lg'>
    <div className='w-1/5'>
    <img className='w-16 mb-5 ml-5 object-cover mt-5 rounded-full' src="https://static.vecteezy.com/system/resources/previews/009/916/094/non_2x/passport-flat-circle-free-vector.jpg" alt="Hola"/>
    </div>
    <div className="mt-5 w-3/5">
      <div>
        <p className='font-semibold pb-3 text-2xl text-black'>VISA</p>
      </div>
      <div>
        <p className='text-lg text-gray-800'>This is a sample description.</p>
      </div>
    </div>
    <div className="flex w-1/5 items-center">
    <ChevronRightIcon className="text-gray-700 w-12"/>
    </div>
    </div>
    </Link>
    <div className='ml-5 cursor-pointer flex border pb-3 border-gray-400 hover:border-2 hover:border-green-500 hover:shadow-lg rounded-lg'>
    <div className='w-1/5'>
    <img className='w-16 mb-5 ml-5 object-cover mt-5 rounded-full' src="https://img.favpng.com/23/10/23/logo-tax-free-shopping-duty-free-shop-png-favpng-VSvtvaLY5WWjVyLyKeLhCMPWP.jpg" alt="Hola"/>
    </div>
    <div className="mt-5 w-3/5">
      <div>
        <p className='font-semibold pb-3 text-xl text-black'>Duty Free & Tax Refunds</p>
      </div>
      <div>
        <p className='text-lg text-gray-800'>This is a sample description.</p>
      </div>
    </div>
    <div className="flex w-1/5 items-center">
    <ChevronRightIcon className="text-gray-700 w-12"/>
    </div>
    </div>
    </div>
    </div>
    <div className='flex justify-center'>
    <div className='pb-5 pt-5 grid grid-cols-2 w-10/12'>
    <div className='mr-5 flex border cursor-pointer border-gray-400 pb-3 hover:border-2 hover:border-green-500 hover:shadow-lg rounded-lg'>
    <div className='w-1/5'>
    <img className='w-16 mb-5 ml-5 object-cover mt-5 rounded-full' src="https://png.pngtree.com/element_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg" alt="Hola"/>
    </div>
    <div className="mt-5 w-3/5">
      <div>
        <p className='font-semibold text-xl pb-3 text-black'>Tourist-friendly Amazonas</p>
      </div>
      <div>
        <p className='text-lg text-gray-800'>This is a sample description.</p>
      </div>
    </div>
    <div className="flex w-1/5 items-center">
    <ChevronRightIcon className="text-gray-700 w-12"/>
    </div>
    </div>
    <Link to="/transportation">
    <div className='ml-5 flex border border-gray-400 pb-3 hover:border-2 hover:border-green-500 hover:shadow-lg rounded-lg'>
    <div className='w-1/5'>
    <img className='w-16 mb-5 ml-5 object-cover mt-5 rounded-full' src="https://media.istockphoto.com/id/1269785368/vector/road-construction-logo-road-maintenance-creative-sign-concept-paving-design-template-vector.jpg?b=1&s=612x612&w=0&k=20&c=GKlLcccnfFxJ6b4V6WpbWWKFZjkbun-tljlLusrRogI=" alt="Hola"/>
    </div>
    <div className='mt-5 w-3/5'>
      <div>
        <p className='font-semibold text-xl text-black pb-3'>Transportation</p>
      </div>
      <div>
        <p className='text-lg text-gray-800'>This is a sample description.</p>
      </div>
    </div>
    <div className="flex w-1/5 items-center">
    <ChevronRightIcon className="text-gray-700 w-12"/>
    </div>
    </div>
    </Link>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Carousel;
