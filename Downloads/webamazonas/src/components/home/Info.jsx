import React from "react";
import { FaPassport, FaInfoCircle, FaBed, FaBus, FaFileDownload } from 'react-icons/fa';
import {Link} from "react-router-dom";

const Info = () => {
    return(
        <div>
            <div className="flex justify-center">
                <div className="w-10/12 grid py-24 grid-cols-1 sm:grid-cols-5">
                    <div>
                    <Link to="/visa"><div className="flex justify-center">
                        <FaPassport className="w-1/5 sm:w-2/5 text-green-600  hover:text-green-400 cursor-pointer h-auto"/>
                        </div>
                        <div className="flex justify-center">
                        <p className="pt-8 text-sm sm:text-lg font-semibold cursor-pointer text-gray-900 hover:text-green-600">VISA</p>
                        </div></Link>                        
                    </div>
                    <div>
                    <Link to="/first"><div className="flex justify-center">
                        <FaInfoCircle className="w-1/5 sm:w-2/5 pt-5 sm:pt-0 text-green-600 hover:text-green-400 cursor-pointer h-auto"/>
                        </div>
                        <div className="flex justify-center">
                        <p className="pt-8 text-sm sm:text-lg font-semibold cursor-pointer text-gray-900 hover:text-green-600">Primer viaje</p>
                        </div></Link>                        
                    </div>
                    <div>
                    <Link to="/"><div className="flex justify-center">
                        <FaBed className="w-1/5 sm:w-2/5 text-green-600 pt-5 sm:pt-0 hover:text-green-400 cursor-pointer h-auto"/>
                        </div>
                        <div className="flex justify-center">
                        <p className="pt-8 text-sm sm:text-lg font-semibold cursor-pointer text-gray-900 hover:text-green-600">Dónde hospedarse</p>
                        </div></Link>                        
                    </div>
                    <div>
                    <Link to="/getting"><div className="flex justify-center">
                        <FaBus className="w-1/5 sm:w-2/5 text-green-600 pt-5 sm:pt-0 hover:text-green-400 h-auto cursor-pointer"/>
                        </div>
                        <div className="flex justify-center">
                        <p className="pt-8 text-sm sm:text-lg font-semibold cursor-pointer text-gray-900 hover:text-green-600">Desplazarse</p>
                        </div></Link>                        
                    </div>
                    <div>
                    <Link to="/"><div className="flex justify-center">
                        <FaFileDownload className="w-1/5 sm:w-2/5 pt-5 sm:pt-0 text-green-600 hover:text-green-400 h-auto cursor-pointer"/>
                        </div>
                        <div className="flex justify-center">
                        <p className="pt-8 text-sm sm:text-lg cursor-pointer font-semibold text-gray-900 hover:text-green-600">Descargar flyer</p>
                        </div></Link>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;


