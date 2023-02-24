import React from 'react';
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div>
    <div className='block sm:hidden'>
    <div className="flex justify-center">
      <Link to="/vasquezpampa"><div className='w-96 my-3 flex items-end h-72 rounded cursor-pointer bg-cover bg-[url("https://www.actualidadambiental.pe/wp-content/uploads/2018/11/granja_porcon_actualidad_ambiental.jpg")]'>
      <p className='font-bold text-white text-lg pb-4 pl-4'>Bosque de Vasquezpampa</p>
      </div></Link>
    </div>
    <div className='grid grid-cols-2'>
    <div className='flex justify-center'>
    <div className='mb-3 cursor-pointer hover:scale-110 w-11/12 h-32 rounded flex items-end bg-cover bg-[url("https://blog.redbus.pe/wp-content/uploads/2018/01/1200px-Laguna_69_Yungay_-_Huaraz_-_Per%C3%BA-1280x720.jpg")]'>
    <p className='font-bold text-white text-sm pb-4 pl-4'>Cañon del Sonche</p>
    </div>     
    </div>
    <div className='flex justify-center'>
    <div className='mb-3 cursor-pointer hover:scale-110 w-11/12 h-32 rounded flex items-end bg-cover bg-[url("https://blog.redbus.pe/wp-content/uploads/2018/01/1200px-Laguna_69_Yungay_-_Huaraz_-_Per%C3%BA-1280x720.jpg")]'>
    <p className='font-bold text-white text-sm pb-4 pl-4'>Cañon del Sonche</p>
    </div>     
    </div>
    </div>
    <div className='grid grid-cols-2'>
    <div>
    <div className='flex justify-center'>
    <div className='mb-3 cursor-pointer hover:scale-110 w-11/12 h-32 rounded flex items-end bg-cover bg-[url("https://blog.redbus.pe/wp-content/uploads/2018/01/1200px-Laguna_69_Yungay_-_Huaraz_-_Per%C3%BA-1280x720.jpg")]'>
    <p className='font-bold text-white text-sm pb-4 pl-4'>Cerro Shubet</p>
    </div> 
    </div>
    </div>
    <div className='flex justify-center'>
    <div className='mb-3 cursor-pointer hover:scale-110 w-11/12 h-32 rounded flex items-end bg-cover bg-[url("https://elcordillerano1.cdn.net.ar/252/elcordillerano/images/93/32/933232_bc21c1b2748b8b6778f3467cc76e2602aa404d0d23beec9196ab338818d5e5fb/sm.webp")]'>
    <p className='font-bold text-white text-sm pb-4 pl-4'>Cañon del Sonche</p>
    </div>     
    </div>
    </div>
    </div>

    <div className='flex justify-center hidden sm:flex pb-10'>
    <div className="w-10/12">
    <div className="py-5">
      <p className="text-4xl font-semibold text-black">Popular places</p>
    </div>
    <div className="grid grid-cols-2">
    
    <div>
    <Link to="/vasquezpampa"><div className='mb-3 cursor-pointer w-[33.5rem] h-80 rounded flex items-end bg-cover bg-[url("https://www.actualidadambiental.pe/wp-content/uploads/2018/11/granja_porcon_actualidad_ambiental.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Bosque de Vasquezpampa</p>
    </div></Link>
    </div>
    <div className='grid grid-cols-2'>
    <div>
    <Link to="/vasquezpampa"><div className='mb-3 cursor-pointer hover:scale-110 w-64 h-40 rounded flex items-end bg-cover bg-[url("https://www.cdhal.org/wp-content/uploads/2021/06/Cordillera-del-condor.jpeg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Cerro Shubet</p>
    </div></Link> 
    <Link to="/vasquezpampa"><div className='w-64 cursor-pointer hover:scale-110 h-40 rounded flex items-end bg-cover bg-[url("https://www.cdhal.org/wp-content/uploads/2021/06/Cordillera-del-condor.jpeg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Cordillera del Cóndor</p>
    </div></Link> 
    </div>
    <div className=''>
    <Link to="/vasquezpampa"><div className='mb-3 cursor-pointer hover:scale-110 w-64 h-40 rounded flex items-end bg-cover bg-[url("https://blog.redbus.pe/wp-content/uploads/2018/01/1200px-Laguna_69_Yungay_-_Huaraz_-_Per%C3%BA-1280x720.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Cañon del Sonche</p>
    </div></Link> 
    <Link to="/vasquezpampa"><div className='w-64 cursor-pointer hover:scale-110 h-40 rounded flex items-end bg-cover bg-[url("https://elcordillerano1.cdn.net.ar/252/elcordillerano/images/93/32/933232_bc21c1b2748b8b6778f3467cc76e2602aa404d0d23beec9196ab338818d5e5fb/sm.webp")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Karajía</p>
    </div></Link>     
    </div>
    </div>

    </div>

    <div className="grid grid-cols-2 py-5">
    <div className='grid grid-cols-2'>
    <div>
    <Link to="/vasquezpampa"><div className='mb-3 cursor-pointer hover:scale-110 w-64 h-40 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/n/551fadf4-6ec8-4e9f-9d54-2e250f8afa27/13248_square.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Swimming</p>
    </div></Link>   
    <Link to="/vasquezpampa"><div className='w-64 hover:scale-110 h-40 rounded flex items-end bg-cover bg-[url("https://www.lifeder.com/wp-content/uploads/2019/05/paramo.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Swimming</p>
    </div></Link>  
    </div>
    <div className=''>
    <Link to="/vasquezpampa"><div className='mb-3 cursor-pointer hover:scale-110 w-64 h-40 rounded flex items-end bg-cover bg-[url("https://www.absolutviajes.com/wp-content/uploads/2021/03/taiga.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Swimming</p>
    </div></Link>   
    <Link to="/vasquezpampa"><div className='w-64 cursor-pointer hover:scale-110 h-40 rounded flex items-end bg-cover bg-[url("https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/3f298bf2-ea3c-4014-9033-2e79fa83ed81/710%20East%20Siberian%20taiga%20-%20%D0%98%D0%B3%D0%BE%D1%80%D1%8C%20%D0%A8%D0%BF%D0%B8%D0%BB%D0%B5%D0%BD%D0%BE%D0%BA.jpg?auto=compress%2Cformat&w=1600")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Swimming</p>
    </div></Link>  
    </div>
    </div>
    <div>
    <Link to="/vasquezpampa"><div className='mb-3 cursor-pointer w-[33.5rem] h-80 rounded flex items-end bg-cover bg-[url("https://viajesblog.net/wp-content/uploads/2018/05/5b85f6e416e9dbc34fd4dc7af7c473f5-900x600.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Swimming</p>
    </div></Link>  
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Hero;
