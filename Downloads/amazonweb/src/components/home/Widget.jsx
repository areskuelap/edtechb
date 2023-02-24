import React, {useState} from "react";
import {FaArrowAltCircleUp, FaDotCircle} from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Widget = () => {

    const [one, setOne] = useState(false);

    const abrir = () => {
        setOne(true)
    }
    const cerrar = () => {
        setOne(false)
    }

    return(
        <div className="fixed w-3/5 sm:w-1/5 ml-6 sm:ml-32 bottom-0">
            <div className=" flex bg-transparent rounded-t-2xl bg-gray-600">
                <div className="w-1/6 flex items-center justify-center">
                <FaArrowAltCircleUp onClick={abrir} className="w-3/4 cursor-pointer pl-5 text-white"/>
                </div>
                <div className="w-5/6">
                <p onClick={abrir}  className="text-sm p-3 font-semibold cursor-pointer text-white">What was your primary reason to visit this website today?</p>
                </div>
            </div>
            {one &&
            <div className="bg-transparent bg-gray-600">
                <div className="flex">
                <div className="w-1/6 flex items-center justify-center">
                <FaDotCircle className="w-3/4 pl-5 text-white hover:text-green-600 cursor-pointer"/>
                </div>
                <div className="w-5/6">
                <p className="text-sm p-3 font-semibold text-white hover:text-green-600 cursor-pointer">I want to visit Amazonas in the future</p>
                </div>
                </div>
                <div className="flex">
                <div className="w-1/6 flex items-center justify-center">
                <FaDotCircle className="w-3/4 pl-5 text-white hover:text-green-600 cursor-pointer"/>
                </div>
                <div className="w-5/6">
                <p className="text-sm p-3 font-semibold text-white hover:text-green-600 cursor-pointer">I plan to visit Amazonas soon</p>
                </div>
                </div>
                <div className="flex">
                <div className="w-1/6 flex items-center justify-center">
                <FaDotCircle className="w-3/4 pl-5 text-white hover:text-green-600"/>
                </div>
                <div className="w-5/6">
                <p className="text-sm p-3 font-semibold hover:text-green-600 cursor-pointer text-white">For research purposes</p>
                </div>
                </div>
                <div className="flex py-5">
                <div className="w-4/6 flex justify-center">
                <button className="px-5 py-2 rounded-full font-semibold bg-white hover:bg-gray-400 hover:text-green-200 text-green-600 cursor-pointer">Submit</button>
                </div>
                <div className="flex w-2/6 items-center justify-start">
                <GrClose onClick={cerrar} className="w-1/2 pl-5 cursor-pointer text-white hover:text-green-600"/>
                </div>
                </div>
            </div>}
        </div>
    )
}

export default Widget;