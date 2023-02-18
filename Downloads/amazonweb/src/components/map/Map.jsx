import React, { useState, useEffect } from 'react';
import GMap from './GMap';

// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyBIZLo5M1oFJiWlIar1rz8dbOvv0f0b4to';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

const Map = () => {
  const [loadMap, setLoadMap] = useState(false);

  const [active, setActive] = useState(true);
  const [active2, setActives] = useState(false);
  const [active3, setActiven] = useState(false);
  const [uno, setOne] = useState(true);
  const [dos, setTwo] = useState(false);
  const [tres, setThree] = useState(false);

  const clickOne = () => {
    setActive(true);
    setActives(false);
    setActiven(false);
    setOne(true);
    setTwo(false);
    setThree(false);
  }

  const clickTwo = () => {
    setActive(false);
    setActives(true);
    setActiven(false);
    setOne(false);
    setTwo(true);
    setThree(false);
  }

  const clickThree = () => {
    setActive(false);
    setActives(false);
    setActiven(true);
    setOne(false);
    setTwo(false);
    setThree(true);
  }

 
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  return (
    <div className="flex">
      <div className='w-1/4 grid grid-cols-3 bg-gray-100'>
        <div>
        <div onClick={clickOne} style={{background: active? "#48bb78" : "#ffff"}} className='flex h-20 cursor-pointer py-3 border border-gray-800 justify-center'>
            <p>Routes</p>
        </div>
        { uno && <div className='pt-4'>
          <input className='rounded-lg border-gray-600 border py-3' placeholder='Type your origin'/>
          <input className='rounded-lg border-gray-600 border py-3' placeholder='Type your destination'/>
        </div>
        }
        </div>
        <div>
        <div onClick={clickTwo} style={{background: active2? "#48bb78" : "#ffff"}} className='flex h-20 cursor-pointer py-3 border border-gray-800 justify-center'>
            <p>Places</p>
        </div>
        {dos && <div className='pt-4'>
        <input className='rounded-lg border-gray-600 border py-3' placeholder='Type in here'/>
        </div>}
        </div>
        <div>
        <div onClick={clickThree} style={{background: active3? "#48bb78" : "#ffff"}} className='flex h-20 cursor-pointer py-3 border border-gray-800 justify-center'>
            <p>Routes</p>
        </div>
        {tres && <div>
          Hola
        </div>}
        </div>
      </div>
      <div className='w-3/4'>
      {!loadMap ? <div>Loading...</div> : <GMap />}
      </div>
    </div>
  );
}

export default Map;