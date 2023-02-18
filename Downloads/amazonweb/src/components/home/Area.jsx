import React from 'react';

const Area = () => {
  return (
    <div>
    <div className='block sm:hidden'>
      <div className="flex justify-center">
      <div className="pt-10 w-11/12 pb-5">
      <p className="text-xl font-semibold text-black">Explore by interest</p>
    </div>
      </div>
      <div className="flex justify-center">
        <div className='w-11/12 grid grid-cols-2'>
        <div className='flex justify-center'>
        <div className='w-11/12 h-44 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/k/dc760a69-a169-44ae-97f2-0e4fbbc5619d/rain-forest-vines_square.jpg")]'>
    <p className='font-bold text-white text-base pb-4 pl-4'>Swimming</p>
    </div>
    </div>
      <div className='flex justify-center'>
      <div className='w-11/12 h-44 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/k/d7cce383-6b47-4589-8de8-79153f364645/_olympic-park-hoh-forest_square.jpg")]'>
      <p className='font-bold text-white text-base pb-4 pl-4'>Swimming</p>
      </div>    
      </div>
        </div>
      </div>
      <div className="flex pt-4 justify-center">
        <div className='w-11/12 grid grid-cols-2'>
        <div className='flex justify-center'>
        <div className='w-11/12 h-44 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/n/551fadf4-6ec8-4e9f-9d54-2e250f8afa27/13248_square.jpg")]'>
    <p className='font-bold text-white text-base pb-4 pl-4'>Swimming</p>
    </div>
    </div>
      <div className='flex justify-center'>
      <div className='w-11/12 h-44 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/k/80d03092-d9c3-4c0a-b65f-d8a76ecd7071/rain-forest-tree-view-up_square.jpg")]'>
      <p className='font-bold text-white text-base pb-4 pl-4'>Swimming</p>
      </div>    
      </div>
        </div>
      </div>
    </div>
    <div className='flex hidden sm:flex justify-center pt-10 pb-10'>
    <div className="w-10/12">
    <div className="pt-5 pb-10">
      <p className="text-4xl font-semibold text-black">Explore by interest</p>
    </div>
    <div className='grid grid-cols-4'>
    <div className='w-11/12 hover:scale-110 rounded-md h-auto cursor-pointer'>
        <div className='w-64 h-64 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/k/dc760a69-a169-44ae-97f2-0e4fbbc5619d/rain-forest-vines_square.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Swimming</p>
    </div>
    </div>
    <div className='w-11/12 hover:scale-110 rounded-md h-auto cursor-pointer'>
    <div className='w-64 h-64 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/k/d7cce383-6b47-4589-8de8-79153f364645/_olympic-park-hoh-forest_square.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Swimming</p>
    </div>    
   </div>
    <div className='w-11/12 hover:scale-110 h-auto cursor-pointer'>
    <div className='w-64 h-64 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/n/551fadf4-6ec8-4e9f-9d54-2e250f8afa27/13248_square.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Swimming</p>
    </div>     
    </div>
    <div className='w-11/12 hover:scale-110 rounded-md h-auto cursor-pointer'>
    <div className='w-64 h-64 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/k/80d03092-d9c3-4c0a-b65f-d8a76ecd7071/rain-forest-tree-view-up_square.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Swimming</p>
    </div> 
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Area;
