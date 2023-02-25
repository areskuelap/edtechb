import React from "react";
import Footer from "../home/Footer";
import {Link} from "react-router-dom";

const Newsmain = () => {

    return(
        <div>
         <div className="flex py-10 justify-center">
            <p className="text-4xl font-semibold text-black">Travel news</p>
         </div>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-4/5 grid grid-cols-1 sm:grid-cols-3">
                    
                    <div className="pb-5">
                    <Link to="/newsa">
                    <div className="bg-[url('https://reinadelaselva.pe/content/img_noticia/kuelapastros.jpg')] cursor-pointer h-48 bg-cover w-72 flex justify-end items-end">
                        <p className="text-white font-bold pb-3 pr-3"></p>
                    </div>
                    </Link>
                    <Link to="/newsa">
                    <div className="h-32 w-72 pl-3 border border-gray-400 cursor-pointer hover:border-2 hover:border-green-500">
                        <p className="text-lg text-gray-600 font-semibold"> <a className="text-lg text-green-500 font-bold">Amazonas</a> free admission on Holiday</p>
                        <p className="text-base text-black font-semibold">Date: <a className="text-base text-black font-semibold">11/12/2022</a></p>
                    </div>
                    </Link>
                    </div>
                    <div className="pb-5">
                    <div className="bg-[url('https://reinadelaselva.pe/content/img_noticia/kuelapastros.jpg')] cursor-pointer h-48 bg-contain w-72 flex justify-end items-end">
                        <p></p>
                    </div>
                    <div className="h-32 pl-3 w-72 border border-gray-400 cursor-pointer hover:border-2 hover:border-green-500">
                        <p className="text-lg text-gray-600 font-semibold"> <a className="text-lg text-green-500 font-bold">Amazonas</a> free admission on Holiday</p>
                        <p className="text-base text-black font-semibold">Date: <a className="text-base text-black font-semibold">11/12/2022</a></p>
                    </div>
                    </div>
                    <div className="pb-5">
                    <div className="bg-[url('https://reinadelaselva.pe/content/img_noticia/kuelapastros.jpg')] cursor-pointer h-48 bg-contain w-72 flex justify-end items-end">
                        <p></p>
                    </div>
                    <div className="h-32 w-72 pl-3 border border-gray-400 cursor-pointer hover:border-2 hover:border-green-500">
                        <p className="text-lg text-gray-600 font-semibold"> <a className="text-lg text-green-500 font-bold">Amazonas</a> free admission on Holiday</p>
                        <p className="text-base text-black font-semibold">Date: <a className="text-base text-black font-semibold">11/12/2022</a></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-11/12 sm:w-4/5 grid grid-cols-1 sm:grid-cols-3 py-10">
                    <div className="pb-5">
                    <div className="bg-[url('https://reinadelaselva.pe/content/img_noticia/kuelapastros.jpg')] cursor-pointer h-48 bg-cover w-72 flex justify-end items-end">
                        <p className="text-black"></p>
                    </div>
                    <div className="h-32 pl-3 w-72 border border-gray-400 cursor-pointer hover:border-2 hover:border-green-500">
                        <p className="text-lg text-gray-600 font-semibold"> <a className="text-lg text-green-500 font-bold">Amazonas</a> free admission on Holiday</p>
                        <p className="text-base text-black font-semibold">Date: <a className="text-base text-black font-semibold">11/12/2022</a></p>
                    </div>
                    </div>
                    <div className="pb-5">
                    <div className="bg-[url('https://reinadelaselva.pe/content/img_noticia/kuelapastros.jpg')] cursor-pointer h-48 bg-contain w-72 flex justify-end items-end">
                        <p></p>
                    </div>
                    <div className="h-32 pl-3 w-72 border border-gray-400 cursor-pointer hover:border-2 hover:border-green-500">
                        <p className="text-lg text-gray-600 font-semibold"> <a className="text-lg text-green-500 font-bold">Amazonas</a> free admission on Holiday</p>
                        <p className="text-base text-black font-semibold">Date: <a className="text-base text-black font-semibold">11/12/2022</a></p>
                    </div>
                    </div>
                    <div className="pb-5">
                    <div className="bg-[url('https://reinadelaselva.pe/content/img_noticia/kuelapastros.jpg')] cursor-pointer h-48 bg-contain w-72 flex justify-end items-end">
                        <p></p>
                    </div>
                    <div className="h-32 pl-3 w-72 border border-gray-400 cursor-pointer hover:border-2 hover:border-green-500">
                        <p className="text-lg text-gray-600 font-semibold"> <a className="text-lg text-green-500 font-bold">Amazonas</a> free admission on Holiday</p>
                        <p className="text-base text-black font-semibold">Date: <a className="text-base text-black font-semibold">11/12/2022</a></p>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Newsmain;