import React from 'react';
import { useState, useEffect } from 'react';

const Search = () => {

  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);


  const [showMessage, setShowMessage] = useState(true);
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);
  const [showMessage4, setShowMessage4] = useState(false);
  const [showMessage5, setShowMessage5] = useState(false);
  const [showMessage6, setShowMessage6] = useState(false);

  const show = () => {
    setShowMessage(true);
    setShowMessage1(false);
    setShowMessage2(false);
    setShowMessage3(false);
    setShowMessage4(false);
    setShowMessage5(false);
    setShowMessage6(false);
  }

  const show1 = () => {
    setShowMessage(false);
    setShowMessage1(true);
    setShowMessage2(false);
    setShowMessage3(false);
    setShowMessage4(false);
    setShowMessage5(false);
    setShowMessage6(false);
  }

  const show2 = () => {
    setShowMessage(false);
    setShowMessage1(false);
    setShowMessage2(true);
    setShowMessage3(false);
    setShowMessage4(false);
    setShowMessage5(false);
    setShowMessage6(false);
  }

  const show3 = () => {
    setShowMessage(false);
    setShowMessage1(false);
    setShowMessage2(false);
    setShowMessage3(true);
    setShowMessage4(false);
    setShowMessage5(false);
    setShowMessage6(false);
  }

  const show4 = () => {
    setShowMessage(false);
    setShowMessage1(false);
    setShowMessage2(false);
    setShowMessage3(false);
    setShowMessage4(true);
    setShowMessage5(false);
    setShowMessage6(false);
  }

  const show5 = () => {
    setShowMessage(false);
    setShowMessage1(false);
    setShowMessage2(false);
    setShowMessage3(false);
    setShowMessage4(false);
    setShowMessage5(true);
    setShowMessage6(false);
  }

  const show6 = () => {
    setShowMessage(false);
    setShowMessage1(false);
    setShowMessage2(false);
    setShowMessage3(false);
    setShowMessage4(false);
    setShowMessage5(false);
    setShowMessage6(true);
  }

  const handleClick = () => {
    setIsActive(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
  const handleClick1 = () => {
    setIsActive(false);
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
      const handleClick2 = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  };
      const handleClick3 = () => {
        setIsActive(false);
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(true);
        setIsActive4(false);
        setIsActive5(false);
        setIsActive6(false);
  };
    const handleClick4 = () => {
      setIsActive(false);
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(true);
      setIsActive5(false);
      setIsActive6(false);
  };
    const handleClick5 = () => {
      setIsActive(false);
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(true);
      setIsActive6(false);
  };
    const handleClick6 = () => {
      setIsActive(false);
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(true);
  };
  return (
    <div>
    <div className='block sm:hidden'>
    <div className='bg-cover backdrop-blur-sm bg-[url("https://img.travesiasdigital.com/2020/04/photo-1555854317-bdd208f4adbb-unsplash-dodi-achmat.jpg")]'>
    <div className='mb-3 mt-3 pt-12 flex justify-center'>
    <div className='w-11/12'>
    <p className='text-white text-xl font-semibold'>Explore places to visit</p>
    </div>
    </div>
    <div className="flex justify-center mb-5">
    <div className="flex w-full">
    <div>
    <button onClick={()=>{handleClick(); show()}} style={{backgroundColor: isActive ? '#48bb78' : ''}} className='py-1 my-2 mx-3 px-3 border hover:bg-green-500 text-white font-semibold text-sm border-white rounded-3xl'>Luya</button>
    </div>
    <div>
    <button onClick={()=>{handleClick1(); show1()}} style={{backgroundColor: isActive1 ? '#48bb78' : ''}} className='py-1 my-2 mx-2 px-3 border hover:bg-green-500 bg-transparent text-white font-semibold text-sm border-white rounded-3xl'>Chachapoyas</button>
    </div>
    <div>
    <button onClick={()=>{handleClick2(); show2()}} style={{backgroundColor: isActive2 ? '#48bb78' : ''}} className='py-1 my-2 mx-2 px-3 border hover:bg-green-500 bg-transparent text-white font-semibold text-sm border-white rounded-3xl'>Bongará</button>
    </div>
    <div>
    <button onClick={()=>{handleClick6(); show2()}} style={{backgroundColor: isActive2 ? '#48bb78' : ''}} className='py-1 my-2 mx-2 px-3 border hover:bg-green-500 bg-transparent text-white font-semibold text-sm border-white rounded-3xl'>Utcubamba</button>
    </div>
    </div>
    </div>
    <div className="flex justify-center mb-3">
    <div className="flex w-full">
    <div>
    <button onClick={()=>{handleClick3(); show()}} style={{backgroundColor: isActive3 ? '#48bb78' : ''}} className='py-1 my-2 mx-3 px-8 border hover:bg-green-500 text-white font-semibold text-sm border-white rounded-3xl'>Bagua</button>
    </div>
    <div>
    <button onClick={()=>{handleClick4(); show1()}} style={{backgroundColor: isActive4 ? '#48bb78' : ''}} className='py-1 my-2 mx-3 px-5 border hover:bg-green-500 bg-transparent text-white font-semibold text-sm border-white rounded-3xl'>Condorcanqui</button>
    </div>
    <div>
    <button onClick={()=>{handleClick5(); show2()}} style={{backgroundColor: isActive5 ? '#48bb78' : ''}} className='py-1 my-2 mx-3 px-5 border hover:bg-green-500 bg-transparent text-white font-semibold text-sm border-white rounded-3xl'>Mendoza</button>
    </div>
    </div>
    </div>
    {showMessage &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="http://viajerosustentable.com/wp-content/gallery/CHACHAPOYAS/08.Canon-del-Sonche.JPG"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'> Chachapoyas es una ciudad del norte de Perú, en un valle rodeado de bosques nubosos. Su Plaza de Armas tiene una fuente de bronce y edificios coloniales, como el Palacio Municipal. La ciudad es una vía de acceso a sitios arqueológicos como Kuélap, una ciudad amurallada con cientos de edificios de la cultura chachapoyas antigua. Al norte de la ciudad, la enorme catarata Gocta se ubica en medio de la selva, que alberga tucanes y monos </p>
      </div>
   </div>
    </div>}
    {showMessage1 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="https://www.machupicchu.com.pe/imagenes/amazonas/huaylla-belen-chachapoyas-amazonas/portada-huaylla-belen.png"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'>La provincia de Luya es una de las siete que conforman el departamento de Amazonas en la zona nororiental del Perú. Limita por el norte con la provincia de Utcubamba; por el este con la provincia de Bongará; por el sur con la provincia de Chachapoyas; y por el oeste con el departamento de Cajamarca.</p>
      </div>
   </div>
    </div>}
    {showMessage2 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="http://viajerosustentable.com/wp-content/gallery/CHACHAPOYAS/08.Canon-del-Sonche.JPG"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'> Chachapoyas es una ciudad del norte de Perú, en un valle rodeado de bosques nubosos. Su Plaza de Armas tiene una fuente de bronce y edificios coloniales, como el Palacio Municipal. La ciudad es una vía de acceso a sitios arqueológicos como Kuélap, una ciudad amurallada con cientos de edificios de la cultura chachapoyas antigua. Al norte de la ciudad, la enorme catarata Gocta se ubica en medio de la selva, que alberga tucanes y monos </p>
      </div>
   </div>
    </div>}
    {showMessage3 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="http://viajerosustentable.com/wp-content/gallery/CHACHAPOYAS/08.Canon-del-Sonche.JPG"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'> Chachapoyas es una ciudad del norte de Perú, en un valle rodeado de bosques nubosos. Su Plaza de Armas tiene una fuente de bronce y edificios coloniales, como el Palacio Municipal. La ciudad es una vía de acceso a sitios arqueológicos como Kuélap, una ciudad amurallada con cientos de edificios de la cultura chachapoyas antigua. Al norte de la ciudad, la enorme catarata Gocta se ubica en medio de la selva, que alberga tucanes y monos </p>
      </div>
   </div>
    </div>}
    {showMessage4 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="http://viajerosustentable.com/wp-content/gallery/CHACHAPOYAS/08.Canon-del-Sonche.JPG"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'> Chachapoyas es una ciudad del norte de Perú, en un valle rodeado de bosques nubosos. Su Plaza de Armas tiene una fuente de bronce y edificios coloniales, como el Palacio Municipal. La ciudad es una vía de acceso a sitios arqueológicos como Kuélap, una ciudad amurallada con cientos de edificios de la cultura chachapoyas antigua. Al norte de la ciudad, la enorme catarata Gocta se ubica en medio de la selva, que alberga tucanes y monos </p>
      </div>
   </div>
    </div>}
    {showMessage5 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="http://viajerosustentable.com/wp-content/gallery/CHACHAPOYAS/08.Canon-del-Sonche.JPG"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'> Chachapoyas es una ciudad del norte de Perú, en un valle rodeado de bosques nubosos. Su Plaza de Armas tiene una fuente de bronce y edificios coloniales, como el Palacio Municipal. La ciudad es una vía de acceso a sitios arqueológicos como Kuélap, una ciudad amurallada con cientos de edificios de la cultura chachapoyas antigua. Al norte de la ciudad, la enorme catarata Gocta se ubica en medio de la selva, que alberga tucanes y monos </p>
      </div>
   </div>
    </div>}
    {showMessage6 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="http://viajerosustentable.com/wp-content/gallery/CHACHAPOYAS/08.Canon-del-Sonche.JPG"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'> Chachapoyas es una ciudad del norte de Perú, en un valle rodeado de bosques nubosos. Su Plaza de Armas tiene una fuente de bronce y edificios coloniales, como el Palacio Municipal. La ciudad es una vía de acceso a sitios arqueológicos como Kuélap, una ciudad amurallada con cientos de edificios de la cultura chachapoyas antigua. Al norte de la ciudad, la enorme catarata Gocta se ubica en medio de la selva, que alberga tucanes y monos </p>
      </div>
   </div>
    </div>}
    </div>
    </div>
    <div className='bg-cover hidden sm:block bg-[url("https://img.travesiasdigital.com/2020/04/photo-1555854317-bdd208f4adbb-unsplash-dodi-achmat.jpg")]'>
    <div className='mb-5 mt-5 pt-12 flex justify-center'>
    <div className='w-10/12'>
    <p className='text-white text-4xl font-semibold'>Explore places to visit</p>
    </div>
    </div>
    <div className="flex justify-center">
    <div className="flex w-10/12">
    <button onClick={()=>{handleClick(); show()}} style={{backgroundColor: isActive ? '#48bb78' : ''}} className='py-4 my-2 mx-3 px-20 border hover:bg-green-500 text-white font-semibold text-xl border-white rounded-3xl'>Luya</button>
    <button onClick={()=>{handleClick1(); show1()}} style={{backgroundColor: isActive1 ? '#48bb78' : ''}} className='py-4 my-2 mx-6 px-20 border hover:bg-green-500 bg-transparent text-white font-semibold text-xl border-white rounded-3xl'>Chachapoyas</button>
    <button onClick={()=>{handleClick2(); show2()}} style={{backgroundColor: isActive2 ? '#48bb78' : ''}} className='py-4 my-2 mx-3 px-20 border hover:bg-green-500 bg-transparent text-white font-semibold text-xl border-white rounded-3xl'>Bongará</button>
    </div>
    </div>
    <div className="flex justify-center pt-5 pb-5">
    <div className="flex w-10/12">
    <button onClick={()=>{handleClick3(); show3()}} style={{backgroundColor: isActive3 ? '#48bb78' : ''}} className='py-4 my-2 mx-2 px-20 border hover:bg-green-500 bg-transparent text-white font-semibold text-xl border-white rounded-3xl'>Bagua</button>
    <button onClick={()=>{handleClick4(); show4()}} style={{backgroundColor: isActive4 ? '#48bb78' : ''}} className='py-4 my-2 mx-2 px-20 border hover:bg-green-500 bg-transparent text-white font-semibold text-xl border-white rounded-3xl'>Condorcanqui</button>
    <button onClick={()=>{handleClick5(); show5()}} style={{backgroundColor: isActive5 ? '#48bb78' : ''}} className='py-4 my-2 mx-2 px-20 border hover:bg-green-500 bg-transparent text-white font-semibold text-xl border-white rounded-3xl'>Mendoza</button>
    <button onClick={()=>{handleClick6(); show6()}} style={{backgroundColor: isActive6 ? '#48bb78' : ''}} className='py-4 my-2 mx-2 px-20 border hover:bg-green-500 bg-transparent text-white font-semibold text-xl border-white rounded-3xl'>Utcubamba</button>
    </div>
    </div>
    <div className='pb-10 flex justify-center'>
    {showMessage &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-auto object-cover" src="http://viajerosustentable.com/wp-content/gallery/CHACHAPOYAS/08.Canon-del-Sonche.JPG"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'> Chachapoyas es una ciudad del norte de Perú, en un valle rodeado de bosques nubosos. Su Plaza de Armas tiene una fuente de bronce y edificios coloniales, como el Palacio Municipal. La ciudad es una vía de acceso a sitios arqueológicos como Kuélap, una ciudad amurallada con cientos de edificios de la cultura chachapoyas antigua. Al norte de la ciudad, la enorme catarata Gocta se ubica en medio de la selva, que alberga tucanes y monos </p>
    </div>
    </div>
    }
    {showMessage1 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-auto object-cover" src="https://www.machupicchu.com.pe/imagenes/amazonas/huaylla-belen-chachapoyas-amazonas/portada-huaylla-belen.png"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'> La provincia de Luya es una de las siete que conforman el departamento de Amazonas en la zona nororiental del Perú. Limita por el norte con la provincia de Utcubamba; por el este con la provincia de Bongará; por el sur con la provincia de Chachapoyas; y por el oeste con el departamento de Cajamarca.</p>
    </div>
    </div>
    }
    {showMessage2 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-auto object-cover" src="https://media-cdn.tripadvisor.com/media/photo-s/08/16/cf/4d/rio-hotel-bagua-grande.jpg"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'> Bagua es una ciudad peruana, capital del distrito de Bagua, ubicado en la provincia homónima en el departamento de Amazonas. Recientemente dejó su antiguo nombre de Bagua Chica, considerado despectivo por los habitantes de dicha ciudad, quienes han improvisado el término Bagua-Capital.</p>
    </div>
    </div>
    }
    {showMessage3 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-72" src="https://drive.google.com/uc?export=view&id=18DhsjQSCepMGStY2PdOveytPE1Dc7Ih6"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'> I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. </p>
    </div>
    </div>
    }
    {showMessage4 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-72" src="https://drive.google.com/uc?export=view&id=18DhsjQSCepMGStY2PdOveytPE1Dc7Ih6"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'> I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. </p>
    </div>
    </div>
    }
    {showMessage5 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-72" src="https://drive.google.com/uc?export=view&id=1ww7Jaf6599LNAAznse9KRMDaH9o-ZH-V"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'> I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. </p>
    </div>
    </div>
    }
    {showMessage6 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-72" src="https://drive.google.com/uc?export=view&id=1wg_fSIAf3D39xwgFGM24db__LZWNC-p9"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'> I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. Lorem ipsum is the standard I do not know, but it is. </p>
    </div>
    </div>
    }

    </div>
    </div>
      </div>
  );
};

export default Search;
