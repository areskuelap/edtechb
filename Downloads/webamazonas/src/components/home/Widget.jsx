import React, {useState} from "react";
import {FaArrowAltCircleUp, FaDotCircle} from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Widget = () => {

    const [one, setOne] = useState(false);

    const [active, isActive] = useState(true);
    const [active1, isActive1] = useState(true);
    const [active2, isActive2] = useState(true);

    const hola = () => {
        isActive(false)
    }

    const hello = () => {
        isActive1(false)
    }

    const halo = () => {
        isActive2(false)
    }

    const send = () => {
        isActive(true);
        isActive1(true);
        isActive2(true);
    }

    const abrir = () => {
        setOne(true)
    }
    const cerrar = () => {
        setOne(false)
    }

    return(
        <div className="fixed w-3/5 sm:w-1/5 ml-6 sm:ml-32 bottom-0">
            <div className=" flex rounded-t-2xl bg-gray-800 bg-opacity-70">
                <div className="w-1/6 flex items-center justify-center">
                <FaArrowAltCircleUp onClick={abrir} className="w-3/4 cursor-pointer pl-5 text-white"/>
                </div>
                <div className="w-5/6">
                <p onClick={abrir} className="text-sm p-3 font-semibold cursor-pointer text-white">¿Cuál es tu razón principal para visitar este sitio web?</p>
                </div>
            </div>
            {one &&
            <div className="bg-gray-800 bg-opacity-70">
                <div className="flex">
                <div className="w-1/6 flex items-center justify-center">
                <FaDotCircle className="w-3/4 pl-5 text-white hover:text-green-600 cursor-pointer"/>
                </div>
                <div className="w-5/6">
                <p onClick={hola} style={{color: active? "#ffff" : "#48bb78"}} className="text-sm p-3 font-semibold  hover:text-green-600 cursor-pointer">Quiero visitar Amazonas pronto</p>
                </div>
                </div>
                <div className="flex">
                <div className="w-1/6 flex items-center justify-center">
                <FaDotCircle className="w-3/4 pl-5 text-white hover:text-green-600 cursor-pointer"/>
                </div>
                <div className="w-5/6">
                <p onClick={hello} style={{color: active1? "#ffff" : "#48bb78"}} className="text-sm p-3 font-semibold  hover:text-green-600 cursor-pointer">Planeo visitar Amazonas el próximo año</p>
                </div>
                </div>
                <div className="flex">
                <div className="w-1/6 flex items-center justify-center">
                <FaDotCircle className="w-3/4 pl-5 text-white hover:text-green-600"/>
                </div>
                <div className="w-5/6">
                <p onClick={halo} style={{color: active2? "#ffff" : "#48bb78"}} className="text-sm p-3 font-semibold hover:text-green-600 cursor-pointer ">Estoy investigando</p>
                </div>
                </div>
                <div className="flex py-5">
                <div className="w-4/6 flex justify-center">
                <button onClick={send} className="px-5 py-2 rounded-full font-semibold bg-white hover:bg-gray-400 hover:text-green-200 text-green-600 cursor-pointer">Enviar</button>
                </div>
                <div className="flex w-2/6 items-center justify-start">
                <GrClose style={{color: "#ffff"}} onClick={cerrar} className="w-1/2 pl-5 cursor-pointer   hover:text-green-600"/>
                </div>
                </div>
            </div>}
        </div>
    )
}

export default Widget;