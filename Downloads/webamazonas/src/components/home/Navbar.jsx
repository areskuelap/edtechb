import React, {  useState } from 'react';
import { useEffect } from 'react';
import { Link} from 'react-router-dom';
import { MagnifyingGlassIcon, Bars3Icon, SunIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


const Navbar = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const [weather, setWeather] = useState([]);
  
    useEffect(() => {
      const fetchData = async() =>{
        await fetch("https://api.openweathermap.org/data/2.5/weather?q=chachapoyas&appid=f146cb84514cc4fa7752e6c3b033c917")
        .then(res => res.json())
        .then(result => {
          setWeather(result)
        });
      } 
      fetchData();
    }, [])
  
    const[one, setOne] = useState(false);
    const[two, setTwo] = useState(false);
    const[three, setThree] = useState(false);
    const[four, setFour] = useState(false);

    const uno = () => {
      setOne(abierto => !abierto);
      setTwo(false);
      setThree(false);
    }

    const dos = () => {
      setOne(false);
      setTwo(abierto => !abierto);
      setThree(false);
    }

    const tres = () => {
      setOne(false);
      setTwo(false);
      setThree(abierto => !abierto);
    }

  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }

  const home = () => {
      setIsOpened(false);
  }

     const data = (weather?.main?.temp - 273.15).toFixed(2);
    const updateTime = () => {
      let time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }

    setInterval(updateTime, 1000);
  
  return (
    <div>
    <div className="flex bg-gray-100 z-0 sm:hidden grid grid-cols-3">
      <div className='flex justify-start items-center pl-4'>
        <Bars3Icon onClick={toggle} className="text-gray-800 w-6"/>
      {isOpened && (
        <div className="sidebaropenc">
          <div className="hamburger-mask" onClick={toggle} ></div>
          <div className="hamburger-drawer z-30">
            <div>
        <Link to="/"><div onClick={home} className="border-b-gray-600 border border-l-white items-center border-t-white border-r-white flex">
	      <div className="w-3/4">
        <p className="font-semibold text-gray-600 py-5 hover:font-bold hover:text-black">HOME</p>
        </div>
	      <div className="">
        <ChevronRightIcon className="w-6 text-gray-600"/>
        </div>
	      </div></Link>
        <div onClick={uno} className="border-b-gray-600 border items-center border-l-white border-t-white border-r-white flex">
	      <div className="w-3/4">
        <p className="font-semibold text-gray-600 py-5 hover:font-bold hover:text-black">Destinations</p>
        </div>
	      <div className="items-center">
        <ChevronRightIcon className="w-6 text-gray-600"/>
        </div>
	      </div>
                {one &&
        <div>
          <div className="pl-5"> 
              <ul>
                <Link to="/luya"><li onClick={home}  className='text-base font-semibold text-gray-600 py-4'>Luya</li></Link>
                <li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Chachapoyas</li>
                <li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Rodríguez de Mendoza</li>
                <li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Bongará</li>
                <li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Condorcanqui</li>
                <li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Bagua</li>
                <li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Utcubamba</li>
              </ul>
          </div>
        </div>}
              <div onClick={dos} className="border-b-gray-600 border items-center border-l-white border-t-white border-r-white flex">
              <div className="w-3/4">
        <p className="font-semibold text-gray-600 py-5 hover:font-bold hover:text-black">Plan your trip</p>
        </div>
	      <div className="items-center">
        <ChevronRightIcon className="w-6 text-gray-600"/>
        </div>
	      </div>
        {two &&
        <div>
        <div className="pl-5"> 
              <ul>
                <Link to="/getting"><li onClick={home}  className='text-base font-semibold text-gray-600 py-4'>Getting started</li></Link>
                <Link to="/transportation"><li onClick={home}  className='text-base font-semibold text-gray-600 pb-4'>Transportation</li></Link>
                <Link to="/first"><li onClick={home}  className='text-base font-semibold text-gray-600 pb-4'>Must-know</li></Link>
                <Link to="/faq"><li onClick={home}  className='text-base font-semibold text-gray-600 pb-4'>FAQ</li></Link>
              </ul>
          </div>          
        </div>}
              <div onClick={tres} className="border-b-gray-600 border items-center border-l-white border-t-white border-r-white flex">
        <div className="w-3/4">
        <p className="font-semibold text-gray-600 py-5 hover:font-bold hover:text-black">To do</p>
        </div>
	      <div className="items-center">
        <ChevronRightIcon className="w-6 text-gray-600"/>
        </div>
	      </div>
        {three &&
        <div>
        <div className="pl-5"> 
              <ul>
                <Link to="/adventure"><li onClick={home}  className='text-base font-semibold text-gray-600 py-4'>Adventure</li></Link>
                <li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Business</li>
                <Link to="/consumer"><li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Consumer</li></Link>
                <Link to="/shopping"><li onClick={home}  className='text-base font-semibold text-gray-600 pb-4'>Shopping</li></Link>
                <Link to="/festival"><li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Festivals</li></Link>
                <Link to="/art"><li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Art</li></Link>
                <Link to="/cuisine"><li onClick={home} className='text-base font-semibold text-gray-600 pb-4'>Gastronomy</li></Link>
              </ul>
          </div>          
        </div>}        
              <div className="border-b-gray-600 border items-center border-l-white border-t-white border-r-white flex">
              <div className="w-3/4">
        <p className="font-semibold text-gray-600 py-5 hover:font-bold hover:text-black">Virtual Map</p>
        </div>
	      <div className="items-center">
        <ChevronRightIcon className="w-6 text-gray-600"/>
        </div>
	      </div>
            </div>
          </div>
        </div>
      )}
      </div>
      <div className='flex justify-center items-center'>
        <img src="https://drive.google.com/uc?export=view&id=1GTPcDQ4HCCq5nC9ntlRPyrNrtYXvH6Om" className='h-auto w-20 pt-5'/>
      </div>
      <div className='flex justify-end items-center pr-4'>
        <MagnifyingGlassIcon className="text-gray-800 w-6" />
      </div>
    </div>
      <div className='hidden sm:block border-b border-gray-200 pb-4'>
      <div className='flex py-4 bg-gray-100'>
      <div className='flex justify-center w-1/2'>
      <p className='text-gray-700 text-base font-semibold'>Chachapoyas local time: {currentTime} (GMT-5)</p>
      </div>
      <div className="flex justify-center">
        <div className="flex">
        <SunIcon className="text-yellow-500 w-6"/> 
        <p className='text-gray-700 text-base font-semibold pl-3 pr-3'>{data}<span> &deg;C</span></p>
        </div>
        <p className='text-gray-700 text-base pl-3 font-semibold'>Description: {weather?.weather?.map((result) => <a>{result.description}</a>)}</p>
      </div>
      </div>
      <div className="">
  <div className="">
    <nav className="flex pt-4 z-10">
      <div className='flex justify-center w-1/4'>
      <Link to="/" ><img src="https://drive.google.com/uc?export=view&id=1GTPcDQ4HCCq5nC9ntlRPyrNrtYXvH6Om" className="h-12 w-30"/> </Link>
      </div>
      <div className='w-2/4 flex justify-evenly'>
      <div>
      <span className="group relative inline-block">
        <button className="inline-flex text-lg text-black items-center border-white border hover:border-2 hover:border-b-red-500 rounded py-2 px-8 font-semibold">Destinations</button>
        <ul className="absolute hidden pt-1 text-gray-700 group-hover:block z-10">
          <li className=""><Link to="/luya" className="whitespace-no-wrap block cursor-pointer rounded-t font-semibold hover:text-green-600 bg-gray-200 py-2 px-8 hover:bg-gray-100" >Luya</Link></li>
          <li className=""><Link to="/luya" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600 bg-gray-200 py-2 px-8 hover:bg-gray-100" >Chachapoyas</Link></li>
          <li className=""><Link to="/luya" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600  bg-gray-200 py-2 px-8 hover:bg-gray-100" >Rodriguez de Mendoza</Link></li>
          <li className=""><Link to="/luya" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600  bg-gray-200 py-2 px-8 hover:bg-gray-100" >Bongará</Link></li>
          <li className=""><Link to="/luya" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600 bg-gray-200 py-2 px-8 hover:bg-gray-100" >Condorcanqui</Link></li>
          <li className=""><Link to="/luya" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600  bg-gray-200 py-2 px-8 hover:bg-gray-100" >Bagua</Link></li>
          <li className=""><Link to="/luya" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600 rounded-b  bg-gray-200 py-2 px-8 hover:bg-gray-100" >Utcubamba</Link></li>
        </ul>
      </span>
      </div>
      <div>
      <span className="group relative inline-block">
        <button className="inline-flex text-lg text-black items-center border-white border hover:border-2 hover:border-b-red-500 rounded py-2 px-8 font-semibold">Plan your trip</button>
        <ul className="absolute hidden pt-1 text-gray-700 group-hover:block z-10">
          <li className=""><Link to="/getting" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600 rounded-t bg-gray-200 py-2 px-8 hover:bg-gray-100" >Getting Started</Link></li>
          <li className=""><Link to="/transportation" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600 bg-gray-200 py-2 px-8 hover:bg-gray-100" >Transportation</Link></li>
          <li className=""><Link to="/first" className="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600 bg-gray-200 py-2 px-8 hover:bg-gray-100" >Must-know</Link></li>
          <li className=""><Link to="/faq" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600 rounded-b bg-gray-200 py-2 px-8 hover:bg-gray-100" >FAQ</Link></li>
        </ul>
      </span>
      </div>
      <div>
      <span className="group relative inline-block">
        <button className="inline-flex text-lg text-black items-center border-white border hover:border-2 hover:border-b-red-500 rounded py-2 px-8 font-semibold">To do</button>
        <ul className="absolute hidden pt-1 text-gray-700 group-hover:block z-10">
          <li className=""><Link to="/adventure" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600 rounded-t bg-gray-200 py-2 px-8 hover:bg-gray-100" >Adventure</Link></li>
          <li className=""><Link to="/adventure" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600 bg-gray-200 py-2 px-8 hover:bg-gray-100" >Business</Link></li>
          <li className=""><Link to="/consumer" class="whitespace-no-wrap block cursor-pointer font-semibold hover:text-green-600 bg-gray-200 py-2 px-8 hover:bg-gray-100" >Consumer</Link></li>
          <li className=""><Link to="/shopping" className="whitespace-no-wrap cursor-pointer font-semibold hover:text-green-600 block bg-gray-200 py-2 px-8 hover:bg-gray-100">Shopping</Link></li>
          <li className=""><Link to="/festival" class="whitespace-no-wrap cursor-pointer font-semibold hover:text-green-600 block bg-gray-200 py-2 px-8 hover:bg-gray-100" >Festivals</Link></li>
          <li className=""><Link to="/art" class="whitespace-no-wrap cursor-pointer font-semibold hover:text-green-600 block bg-gray-200 py-2 px-8 hover:bg-gray-100" >Art</Link></li>
          <li className=""><Link to="/cuisine" class="whitespace-no-wrap cursor-pointer font-semibold hover:text-green-600 block rounded-b bg-gray-200 py-2 px-8 hover:bg-gray-100" >Gastronomy</Link></li>
        </ul>
      </span>
      </div>
      <div>
      <span className="group relative inline-block">
        <Link to="/map"><button className="inline-flex text-lg text-black items-center border-white border hover:border-2 hover:border-b-red-500 rounded py-2 px-8 font-semibold">Virtual Map</button></Link>
      </span>
      </div>
    </div>
    <div className=' flex justify center w-1/4'>
            <input className='py-2 w-2/3 font-semibold outline-none text-gray-400 border border-gray-400 rounded-xl pl-4 hover:border hover:border-green-500' placeholder='Search...'/>
          </div>
    </nav>
  </div>
</div>
    </div>
    </div>
  );
};

export default Navbar;
