import React from 'react';
import { BiMap } from 'react-icons/bi';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 px-10 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Acerca de</h2>
            <p className="text-gray-600 font-semibold flex justify-start">
            La Institución educativa Escuela 18169, es hablar más que una Institución Educativa, es un ambiente familiar, un equipo de profesionales eficientes que custodian para que los estudiantes se incorporen adecuadamente, tanto en su vida como personas como social y escolar.<br/><br/>El novedoso sistema para evaluar debe responder a una evaluación diferente que respete niveles y procedimeintos de aprendizajes de los estudiantes, el sistema de evaluación constante es de forma diaria y semanal en actividades pedagógicas (AP) y evaluaciones para desarrollar (EPD)
            </p>
          </div>
          <div className="md:w-1/2 sm:ml-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <BiMap className="text-blue-500 mr-2" />
                  <h3 className="text-gray-800 font-medium">Ubicación</h3>
                </div>
                <p className="text-gray-600">
                  123 Main Street, Congón, PE
                </p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <FaPhoneAlt className="text-blue-500 mr-2" />
                  <h3 className="text-gray-800 font-medium">Tel.</h3>
                </div>
                <p className="text-gray-600">+51 (913) 454892</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-blue-500 mr-2" />
                  <h3 className="text-gray-800 font-medium">Email</h3>
                </div>
                <p className="text-gray-600">info@ie18169.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
