import Head from 'next/head'
import React from "react";
import { useState} from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'; 

const FilloutEasy = () => {

  const [showMessage, setShowMessage] = useState(false);

  const [buttonText, setButtonText] = useState();

  const handleClick = () => {
    setButtonText(current => !current);
  }

  function submit(){
    setShowMessage(!showMessage)
  }

 /* Usar una vez que no la página sea class y no const
 componentDidMount(); {
    $(".inputs").keyup( function () {

      if (this.value.length == this.maxLength) {
      var n=$(this).next('.inputs');
      n.focus();
     if(n.val().length==n.prop('maxlength')) n.next('.inputs').focus(); 
      }
  
  });
  } */


  return(
    <div>
    <Head>
        <title>Detly</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
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
      <div className='flex justify-center'>
      <div className='pb-10 text-xl font-bold flex justify-center w-3/4 sm:w-full'>
        <p className='text-2xl font-bold text-center'>Type the missing letters to complete the text below</p>
      </div>
      </div>
      <div className=''>
        <div className='flex justify-center'>
      <div className='border border-4 rounded-lg border-solid pb-5 mt-5 pt-5 w-11/12 sm:w-3/5 '>
        <p className='text-center text-xl font-bold'>The Amazon River </p>
        <p className='text-left text-lg pl-5 pr-5'>The Amazon River moves more water than the next eight largest rivers of the world combined. It
        <span>
        <input id='inputs' className="text-center bg-gray-200 border border-gray-400 ml-2 rounded-l-md w-6 text-base"  type="text" minlength="1" maxlength="1" size="1" value="a"/>
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="c" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="c" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="o" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 mr-2 rounded-r-md w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />     
        </span>
        for about one fifth 
        <span>
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 ml-2 rounded-l-md w-6 text-base"  type="text" minlength="1" maxlength="1" size="1" value="o" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 mr-2 rounded-r-md w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />     
        </span>
        the world's
        <span>
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 ml-2 rounded-l-md w-6 text-base"  type="text" minlength="1" maxlength="1" size="1" value="t" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="o" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 mr-2 rounded-r-md w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />     
        </span>
        river flow. During the wet
        <span>
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 ml-2 rounded-l-md w-6 text-base"  type="text" minlength="1" maxlength="1" size="1" value="s" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="e" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="a" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 rounded-r-md w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />     
        </span>
        , parts of the Amazon
        <span>
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 ml-2 rounded-l-md w-6 text-base"  type="text" minlength="1" maxlength="1" size="1" value="e" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="x" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="c" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 mr-2 rounded-r-md w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />     
        </span>
        120 miles in width. Because of its
        <span>
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 ml-2 rounded-l-md w-6 text-base"  type="text" minlength="1" maxlength="1" size="1" value="s" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="i" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 rounded-r-md w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />     
        </span>
        , it is
        <span>
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 ml-2 rounded-l-md w-6 text-base"  type="text" minlength="1" maxlength="1" size="1" value="s" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="o" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="m" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="e" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" /> 
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 mr-2 rounded-r-md w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />     
        </span>
        called The Sea. But it is
        <span>
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 ml-2 rounded-l-md w-6 text-base"  type="text" minlength="1" maxlength="1" size="1" value="n" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 mr-2 rounded-r-md w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />     
        </span>
        the world's longest river
        <span>
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 ml-2 rounded-l-md w-6 text-base"  type="text" minlength="1" maxlength="1" size="1" value="s" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="y" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="s" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" /> 
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 rounded-r-md w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />     
        </span>        
        . The world's longest
        <span>
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 ml-2 rounded-l-md w-6 text-base"  type="text" minlength="1" maxlength="1" size="1" value="r" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" value="i" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 w-6 text-base" type="text" minlength="1" maxlength="1" size="1" /> 
        <input id='inputs' className="text-center border bg-gray-200 border-gray-400 mr-2 rounded-r-md w-6 text-base" type="text" minlength="1" maxlength="1" size="1" />     
        </span>          
        is the Nile River, with the Amazon being second-longest.</p>
     </div>
     </div>
     </div>
      <div className='flex justify-center w-2/5 sm:w-2/3'>
      </div>
      <div className='flex justify-center pt-10'>
        <hr className='w-4/5 sm:w-3/5 border-2'></hr>
        </div> 
        <div className='flex justify-center'>
        {showMessage && <div className='w-3/4 sm:w-3/5 pt-5 pb-5'>
          <p className='text-xl font-bold'>Correct answer</p>
          <p className='text-lg text-left'>The Amazon River moves more water than the next eight largest rivers of the world combined. It
          <mark className='ml-2 bg-orange-500 font-bold px-2 rounded-md'>accounts</mark> for about one fifth <mark className='ml-2 bg-orange-500 font-bold px-2 rounded-md'>of</mark> the world's 
          <mark className='ml-2 bg-orange-500 font-bold px-2 rounded-md'>total</mark> river flow. During the wet 
          <mark className='ml-2 bg-orange-500 font-bold px-2 rounded-md'>season</mark>, parts of the Amazon 
          <mark className='ml-2 bg-orange-500 font-bold px-2 rounded-md'>exceed</mark> 120 miles in width. Because of its size
          , it is 
          <mark className='ml-2 bg-orange-500 font-bold px-2 rounded-md'>sometimes</mark> called The Sea. But it is 
          <mark className='ml-2 bg-orange-500 font-bold px-2 rounded-md'>not</mark> the world's longest river 
          <mark className='ml-2 bg-orange-500 font-bold px-2 rounded-md'>system</mark>. The world's longest 
          <mark className='ml-2 bg-orange-500 font-bold px-2 rounded-md'>river</mark> is the Nile River, with the Amazon being second-longest.
          </p>
        </div>}
      </div>
      <div className='flex pt-10 pb-20'>
      <div className='flex w-1/2 justify-center'>      
        <button onClick={()=>{ submit(); handleClick() }} className="bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">{buttonText ? 'Try again' : 'Submit'}</button>
      </div>
      <div className='flex w-1/2 content-center justify-center'>
      <button className="bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">Next</button>
      </div>
      </div>
      </div>
      </main>
    </div>
  );
}

export default FilloutEasy;