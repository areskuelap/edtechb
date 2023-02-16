import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container py-8 mx-auto sm:flex justify-between items-center">
        <div className="w-full sm:w-3/5">
          <h2 className="text-3xl text-gray-600 font-semibold mb-4 font-mono">
            Institución Educativa 18169
          </h2>
          <p className="text-xl mb-6 px-16">
          La Institución educativa Escuela 18169 se ubica en el distrito de Ocumal, localidad de Congón, provincia de Luya, tal IE compete a la UGEL LUYA que inspecciona el servicio educativo, que pertenece a la Dirección regional de educación DRE AMAZONAS.
          </p>
          <a href="https://joseluisaristatejada.blogspot.com/2019/02/instrumentos-de-gestion-escolar.html" target="_blank"><button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Ver más
          </button></a>
        </div>
        <div className="w-full pt-10 sm:w-2/5 flex justify-center">
        <img
          src="https://www.fondep.gob.pe/wp-content/uploads/2020/07/8fc57055-3ed5-4650-b0e3-8bd14addb701.jpg"
          alt="School"
          className="w-10/12 h-auto"
        />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
