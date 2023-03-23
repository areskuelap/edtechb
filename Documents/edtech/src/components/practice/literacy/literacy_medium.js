import Head from 'next/head'
import React from "react";
import { useState} from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const LiteracyEasy = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);
    const [isActive8, setIsActive8] = useState(false);
    const [isActive9, setIsActive9] = useState(false);            
    const [isActive10, setIsActive10] = useState(false);
    const [isActive11, setIsActive11] = useState(false);
    const [isActive12, setIsActive12] = useState(false);
    const [isActive13, setIsActive13] = useState(false);
    const [isActive14, setIsActive14] = useState(false);
    const [isActive15, setIsActive15] = useState(false);  
    const [isActive16, setIsActive16] = useState(false);
    const [isActive17, setIsActive17] = useState(false);

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const [isEnabled6, setIsEnabled6] = useState(false);
    const [isEnabled7, setIsEnabled7] = useState(false);
    const [isEnabled8, setIsEnabled8] = useState(false);
    const [isEnabled9, setIsEnabled9] = useState(false);
    const [isEnabled10, setIsEnabled10] = useState(false);
    const [isEnabled11, setIsEnabled11] = useState(false);
    const [isEnabled12, setIsEnabled12] = useState(false);
    const [isEnabled13, setIsEnabled13] = useState(false);
    const [isEnabled14, setIsEnabled14] = useState(false);
    const [isEnabled15, setIsEnabled15] = useState(false);
    const [isEnabled16, setIsEnabled16] = useState(false);
    const [isEnabled17, setIsEnabled17] = useState(false);

    const handleClick = () => {
    setIsActive(current => !current);
  };
    const handleClick1 = () => {
    setIsActive1(current => !current);
  };
      const handleClick2 = () => {
    setIsActive2(current => !current);
  };
      const handleClick3 = () => {
    setIsActive3(current => !current);
  };
    const handleClick4 = () => {
    setIsActive4(current => !current);
  };
    const handleClick5 = () => {
    setIsActive5(current => !current);
  };
    const handleClick6 = () => {
    setIsActive6(current => !current);
  };
    const handleClick7 = () => {
    setIsActive7(current => !current);
  };
    const handleClick8 = () => {
    setIsActive8(current => !current);
  };
    const handleClick9 = () => {
    setIsActive9(current => !current);
  };
    const handleClick10 = () => {
    setIsActive10(current => !current);
  };
    const handleClick11 = () => {
    setIsActive11(current => !current);
  };
    const handleClick12 = () => {
    setIsActive12(current => !current);
  };
    const handleClick13 = () => {
    setIsActive13(current => !current);
  };
    const handleClick14 = () => {
    setIsActive14(current => !current);
  };
    const handleClick15 = () => {
    setIsActive15(current => !current);
  };
    const handleClick16 = () => {
    setIsActive16(current => !current);
  };
    const handleClick17 = () => {
    setIsActive17(current => !current);
  };

  const Submit = () => {
    setIsEnabled(current => !current)
    setIsEnabled1(current => !current)
    setIsEnabled2(current => !current)
    setIsEnabled3(current => !current)
    setIsEnabled4(current => !current)
    setIsEnabled5(current => !current)
    setIsEnabled6(current => !current)
    setIsEnabled7(current => !current)
    setIsEnabled8(current => !current)
    setIsEnabled9(current => !current)
    setIsEnabled10(current => !current)
    setIsEnabled11(current => !current)
    setIsEnabled12(current => !current)
    setIsEnabled13(current => !current)
    setIsEnabled14(current => !current)
    setIsEnabled15(current => !current)
    setIsEnabled16(current => !current)
    setIsEnabled17(current => !current)
  }

  const tryAgain = () => {
    setIsEnabled(current => !current)
    setIsEnabled1(current => !current)
    setIsEnabled2(current => !current)
    setIsEnabled3(current => !current)
    setIsEnabled4(current => !current)
    setIsEnabled5(current => !current)
    setIsEnabled6(current => !current)
    setIsEnabled7(current => !current)
    setIsEnabled8(current => !current)
    setIsEnabled9(current => !current)
    setIsEnabled10(current => !current)
    setIsEnabled11(current => !current)
    setIsEnabled12(current => !current)
    setIsEnabled13(current => !current)
    setIsEnabled14(current => !current)
    setIsEnabled15(current => !current)
    setIsEnabled16(current => !current)
    setIsEnabled17(current => !current)    

    setIsActive(false);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
    setIsActive7(false);
    setIsActive8(false);
    setIsActive9(false);
    setIsActive10(false);
    setIsActive11(false);
    setIsActive12(false);
    setIsActive13(false);
    setIsActive14(false);
    setIsActive15(false);
    setIsActive16(false);
    setIsActive17(false);
  }

return(
    <div>
    <Head>
        <title>Detly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className=''>
      <div className='flex items-end pt-10 pb-10'>
      <div className='w-1/2 sm:w-3/4'>
      </div>
      <div className='flex'>
      <p className='font-bolt text-xl pr-4 mt-5'>Time left: </p>
      <CountdownCircleTimer
    size={70}
    isPlaying
    duration={50}
    colors={['#f78801','#f78801', '#f78801', '#f78801']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
      </div>
      </div>
      <div className='pb-5'>
        <p className='text-2xl font-bold text-center'>Select the real English words in this list</p>
      </div>
      <div className='flex justify-center'>
      <div className="pt-4 pb-2 flex w-full sm:w-1/2 justify-center">
          <button onClick={handleClick} style={{backgroundColor: isActive ? 'rgb(251 146 60)' : '', borderColor: isEnabled ? "rgb(255, 0, 0)" : "", borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg sm:py-3 px-1 sm:px-6 mr-3">unlanguish</button>
          <button onClick={handleClick1} style={{backgroundColor: isActive1 ? 'rgb(251 146 60)' : '', borderColor: isEnabled1 ? "rgb(255, 0, 0)" : "", borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">inexpandest</button>
          <button onClick={handleClick2} style={{backgroundColor: isActive2 ? 'rgb(251 146 60)' : '', borderColor: isEnabled2 ? "rgb(255, 0, 0)" : "", borderWidth:"medium"}} className="border hidden sm:block font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-6 mr-3">jusion</button>
          <button onClick={handleClick3} style={{backgroundColor: isActive3 ? 'rgb(251 146 60)' : '', borderColor: isEnabled3 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border hidden sm:block font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-6 mr-3">spam</button>
          <button onClick={handleClick4} style={{backgroundColor: isActive4 ? 'rgb(251 146 60)' : '', borderColor: isEnabled4 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">underline</button>
          <button onClick={handleClick5} style={{backgroundColor: isActive5 ? 'rgb(251 146 60)' : '', borderColor: isEnabled5 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">butter</button>
      </div>
      </div>
        <div className='flex justify-center'>
        <div className="pt-4 pb-2 flex w-full sm:w-1/2 justify-center">
          <button onClick={handleClick6} style={{backgroundColor: isActive6 ? 'rgb(251 146 60)' : '', borderColor: isEnabled6 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">orchestra</button>
          <button onClick={handleClick7} style={{backgroundColor: isActive7 ? 'rgb(251 146 60)' : '', borderColor: isEnabled7 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">homeowner</button>
          <button onClick={handleClick8} style={{backgroundColor: isActive8 ? 'rgb(251 146 60)' : '', borderColor: isEnabled8 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border hidden sm:block font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-6 mr-3">lately</button>
          <button onClick={handleClick9} style={{backgroundColor: isActive9 ? 'rgb(251 146 60)' : '', borderColor: isEnabled9 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border hidden sm:block font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-6 mr-3">detach</button>
          <button onClick={handleClick10} style={{backgroundColor: isActive10 ? 'rgb(251 146 60)' : '', borderColor: isEnabled10 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">criteria</button>
          <button onClick={handleClick11} style={{backgroundColor: isActive11 ? 'rgb(251 146 60)' : '', borderColor: isEnabled11 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border text-sm sm:text-lg font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">law</button>
          </div>
          </div>
          <div className='flex justify-center'>
          <div className="pt-4 pb-2 flex w-full sm:w-1/2 justify-center">
          <button onClick={handleClick12} style={{backgroundColor: isActive12 ? 'rgb(251 146 60)' : '', borderColor: isEnabled12 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">pollute</button>
          <button onClick={handleClick13} style={{backgroundColor: isActive13 ? 'rgb(251 146 60)' : '', borderColor: isEnabled13 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">pepper</button>
          <button onClick={handleClick14} style={{backgroundColor: isActive14 ? 'rgb(251 146 60)' : '', borderColor: isEnabled14 ? "rgb(44, 184, 44)" : "", borderWidth:"medium"}} className="border hidden sm:block font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-6 mr-3">intern</button>
          <button onClick={handleClick15} style={{backgroundColor: isActive15 ? 'rgb(251 146 60)' : '', borderColor: isEnabled15 ? "rgb(255, 0, 0)" : "",  borderWidth:"medium"}} className="border hidden sm:block font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-6 mr-3">rehierization</button>
          <button onClick={handleClick16} style={{backgroundColor: isActive16 ? 'rgb(251 146 60)' : '', borderColor: isEnabled16 ? "rgb(255, 0, 0)" : "",  borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">flurryization</button>
          <button onClick={handleClick17} style={{backgroundColor: isActive17 ? 'rgb(251 146 60)' : '', borderColor: isEnabled17 ? "rgb(255, 0, 0)" : "",  borderWidth:"medium"}} className="border text-sm sm:text-lg  font-bold text-gray-800 hover:bg-orange-400 border-orange-400 rounded-lg py-3 px-1 sm:px-6 mr-3">transabundant</button>
        </div>
        </div>
        <div className='flex justify-center pt-10'>
        <hr className='w-4/5 sm:w-3/4 border-2'></hr>
        </div> 
      <div className='flex pt-10 pb-20'>
      <div className='flex w-1/3 justify-center'>      
        <button onClick={tryAgain} className="bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">Try again</button>
      </div>
      <div className='flex w-1/3 content-center justify-center'>
      <button onClick={Submit} className="bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">Submit</button>
      </div>
      <div className='flex w-1/3 content-center justify-center'>
      <button className="bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">Next</button>
      </div>
      </div>
      </div>
      </main>
    </div>
  );
}
export default LiteracyEasy;
