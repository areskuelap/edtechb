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
    </div>
    </div>
    <div className="flex justify-center mb-3">
    <div className="flex w-full">
    <div>
    <button onClick={()=>{handleClick3(); show3()}} style={{backgroundColor: isActive3 ? '#48bb78' : ''}} className='py-1 my-2 mx-3 px-8 border hover:bg-green-500 text-white font-semibold text-sm border-white rounded-3xl'>Mendoza</button>
    </div>
    <div>
    <button onClick={()=>{handleClick4(); show4()}} style={{backgroundColor: isActive4 ? '#48bb78' : ''}} className='py-1 my-2 mx-3 px-5 border hover:bg-green-500 bg-transparent text-white font-semibold text-sm border-white rounded-3xl'>Condorcanqui</button>
    </div>
    </div>
    </div>
    <div className="flex justify-center mb-3">
    <div className="flex w-full">
    <div>
    <button onClick={()=>{handleClick5(); show5()}} style={{backgroundColor: isActive5 ? '#48bb78' : ''}} className='py-1 my-2 mx-2 px-3 border hover:bg-green-500 bg-transparent text-white font-semibold text-sm border-white rounded-3xl'>Bagua</button>
    </div>
    <div>
    <button onClick={()=>{handleClick6(); show6()}} style={{backgroundColor: isActive6 ? '#48bb78' : ''}} className='py-1 my-2 mx-3 px-5 border hover:bg-green-500 bg-transparent text-white font-semibold text-sm border-white rounded-3xl'>Utcubamba</button>
    </div>
    </div>
    </div>
    {showMessage &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="https://turismoi.pe/uploads/province/image/44/large_353_Luya.jpg"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'>La provincia de Luya es una de las siete que conforman el departamento de Amazonas en la zona nororiental del Perú. Limita por el norte con la provincia de Utcubamba; por el este con la provincia de Bongará; por el sur con la provincia de Chachapoyas; y por el oeste con el departamento de Cajamarca.</p>
      </div>
   </div>
    </div>}
    {showMessage1 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="https://www.rumbosdelperu.com/wp-content/uploads/2017/10/chachapoyas.jpg"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'>La provincia de Chachapoyas es una de las siete que conforman el departamento de Amazonas en el nororiente del Perú. La provincia fue creada políticamente mediante Ley del 21 de noviembre de 1832, promulgada por el presidente Agustín Gamarra. Y pertenece a la macrorregión Norte del Perú.</p>
      </div>
   </div>
    </div>}
    {showMessage2 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="https://turismoi.pe/uploads/photo/version2/photo_file/58659/optimized_gocta-la-posada-de-cuispes.jpg"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'>La provincia de Bongará es una de las siete que conforman el departamento de Amazonas en el norte del Perú. Fue creada por Decreto Ley del 26 de diciembre de 1870, en el gobierno del Presidente José Balta. Posee un clima variado. Es frío en Pishco huañuna. Templado en ciudades como: Jumbilla, Recta, Florida. Es cálido en: Churuja, San Carlos, Yabrasbamba Jazan y Shipasbamba.</p>
      </div>
   </div>
    </div>}
    {showMessage3 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="https://munirodriguezdemendoza.gob.pe/wp-content/uploads/2020/08/men3.jpg"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'>La provincia de Rodríguez de Mendoza es una de las siete que conforman el departamento de Amazonas en el Perú. Su nombre es un homenaje a Toribio Rodríguez de Mendoza, sacerdote y educador hispano-peruano nacido en Chachapoyas y considerado precursor ideológico de la Independencia del Perú. La capital de la provincia es Mendoza, ubicada en el distrito de San Nicolás. Está situada a 1616 msnm.</p>
      </div>
   </div>
    </div>}
    {showMessage4 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="http://3.bp.blogspot.com/-gXS6ym9VGAg/Tx6-LfgAUcI/AAAAAAAABks/9oS567IRQLU/s1600/P1010160.JPG"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'>La provincia de Condorcanqui es una de las siete que conforman el departamento de Amazonas en la zona nororiental del Perú. Esta provincia es la más norteña de la región y la más extensa. La Capital de esta provincia es la ciudad de Santa María de Nieva, ubicada sobre los 222 msnm.</p>
      </div>
   </div>
    </div>}
    {showMessage5 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="https://2.bp.blogspot.com/-IYfRsC20Qi8/VztUeaKP7rI/AAAAAAAAFV4/vi3YGvyk6jYhfm53xkhTMjnz6znSzZtagCLcB/s1600/bagua.jpg"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'>La provincia de Bagua es una de las siete que conforman el departamento de Amazonas en el Perú. Está ubicada en la parte septentrional del país y su capital, Bagua, se encuentra en el valle del bajo Utcubamba.</p>
      </div>
   </div>
    </div>}
    {showMessage6 &&
      <div className=''>
    <div className='flex justify-center'>
    <img className="w-11/12 h-auto object-cover" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/El_Tingo.jpg"/>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-11/12">
      <p className='text-white text-sm flex justify-center font-semibold'>La provincia de Utcubamba es una de las siete que conforman el departamento de Amazonas en la zona nororiental del Perú. Limita por el norte con la provincia de Bagua y con la provincia de Condorcanqui; por el este con la provincia de Bongará; por el sur con la provincia de Luya; y por el oeste con el departamento de Cajamarca.</p>
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
    <button onClick={()=>{handleClick3(); show3()}} style={{backgroundColor: isActive3 ? '#48bb78' : ''}} className='py-4 my-2 mx-2 px-20 border hover:bg-green-500 bg-transparent text-white font-semibold text-xl border-white rounded-3xl'>Mendoza</button>
    <button onClick={()=>{handleClick4(); show4()}} style={{backgroundColor: isActive4 ? '#48bb78' : ''}} className='py-4 my-2 mx-2 px-20 border hover:bg-green-500 bg-transparent text-white font-semibold text-xl border-white rounded-3xl'>Condorcanqui</button>
    <button onClick={()=>{handleClick5(); show5()}} style={{backgroundColor: isActive5 ? '#48bb78' : ''}} className='py-4 my-2 mx-2 px-20 border hover:bg-green-500 bg-transparent text-white font-semibold text-xl border-white rounded-3xl'>Bagua</button>
    <button onClick={()=>{handleClick6(); show6()}} style={{backgroundColor: isActive6 ? '#48bb78' : ''}} className='py-4 my-2 mx-2 px-20 border hover:bg-green-500 bg-transparent text-white font-semibold text-xl border-white rounded-3xl'>Utcubamba</button>
    </div>
    </div>
    <div className='pb-10 flex justify-center'>
    {showMessage &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-auto object-cover" src="https://turismoi.pe/uploads/province/image/44/large_353_Luya.jpg"/>
    </div> 
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'>La provincia de Luya es una de las siete que conforman el departamento de Amazonas en la zona nororiental del Perú. Limita por el norte con la provincia de Utcubamba; por el este con la provincia de Bongará; por el sur con la provincia de Chachapoyas; y por el oeste con el departamento de Cajamarca.</p>
    </div>
    </div>
    }
    {showMessage1 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-auto object-cover" src="https://www.rumbosdelperu.com/wp-content/uploads/2017/10/chachapoyas.jpg"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'>La provincia de Chachapoyas es una de las siete que conforman el departamento de Amazonas en el nororiente del Perú. La provincia fue creada políticamente mediante Ley del 21 de noviembre de 1832, promulgada por el presidente Agustín Gamarra. Y pertenece a la macrorregión Norte del Perú.</p>
    </div>
    </div>
    }
    {showMessage2 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-auto object-cover" src="https://turismoi.pe/uploads/photo/version2/photo_file/58659/optimized_gocta-la-posada-de-cuispes.jpg"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'>La provincia de Bongará es una de las siete que conforman el departamento de Amazonas en el norte del Perú. Fue creada por Decreto Ley del 26 de diciembre de 1870, en el gobierno del Presidente José Balta. Posee un clima variado. Es frío en Pishco huañuna. Templado en ciudades como: Jumbilla, Recta, Florida. Es cálido en: Churuja, San Carlos, Yabrasbamba Jazan y Shipasbamba.</p>
    </div>
    </div>
    }
    {showMessage3 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-72" src="https://munirodriguezdemendoza.gob.pe/wp-content/uploads/2020/08/men3.jpg"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'>La provincia de Rodríguez de Mendoza es una de las siete que conforman el departamento de Amazonas en el Perú. Su nombre es un homenaje a Toribio Rodríguez de Mendoza, sacerdote y educador hispano-peruano nacido en Chachapoyas y considerado precursor ideológico de la Independencia del Perú. La capital de la provincia es Mendoza, ubicada en el distrito de San Nicolás. Está situada a 1616 msnm.</p>
    </div>
    </div>
    }
    {showMessage4 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-72" src="http://3.bp.blogspot.com/-gXS6ym9VGAg/Tx6-LfgAUcI/AAAAAAAABks/9oS567IRQLU/s1600/P1010160.JPG"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'>La provincia de Condorcanqui es una de las siete que conforman el departamento de Amazonas en la zona nororiental del Perú. Esta provincia es la más norteña de la región y la más extensa. La Capital de esta provincia es la ciudad de Santa María de Nieva, ubicada sobre los 222 msnm.</p>
    </div>
    </div>
    }
    {showMessage5 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-72" src="https://2.bp.blogspot.com/-IYfRsC20Qi8/VztUeaKP7rI/AAAAAAAAFV4/vi3YGvyk6jYhfm53xkhTMjnz6znSzZtagCLcB/s1600/bagua.jpg"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'>La provincia de Bagua es una de las siete que conforman el departamento de Amazonas en el Perú. Está ubicada en la parte septentrional del país y su capital, Bagua, se encuentra en el valle del bajo Utcubamba. </p>
    </div>
    </div>
    }
    {showMessage6 &&
      <div className='grid grid-cols-2 w-10/12'>
    <div>
    <img className="w-11/12 h-72" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/El_Tingo.jpg"/>
    </div>
    <div className="pl-5 pt-5">
    <p className='text-white text-xl font-semibold'>La provincia de Utcubamba es una de las siete que conforman el departamento de Amazonas en la zona nororiental del Perú. Limita por el norte con la provincia de Bagua y con la provincia de Condorcanqui; por el este con la provincia de Bongará; por el sur con la provincia de Luya; y por el oeste con el departamento de Cajamarca.</p>
    </div>
    </div>
    }

    </div>
    </div>
      </div>
  );
};

export default Search;
