import React from "react";
import Footer from "../home/Footer";

const Covid = () => {
    return(
        <div>
        <div className='bg-[url("https://drive.google.com/uc?export=view&id=1MUL8lPArg1cuQA3Uv6kju8d-dUGi3185")] bg-cover bg-center bg-no-repeat'>
        <div className='pt-24 flex justify-center pb-56'>
        <p className='text-4xl pl-10 text-white font-bold'>COVID-19: Practical Information for Traveling to Japan</p>
        </div>
        </div>
        <div className="bg-green-50 flex justify-center">
            <div className="w-4/5">
            <p className="text-base py-12 text-gray-800">All information here is gathered from the relevant authorities. Due to the regularly changing situation, it is essential for you to always check and follow the latest guidance.</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="w-4/5">
            <p className="text-base py-12 text-gray-800">Last updated: Friday, 13 January 2023</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="w-4/5">
            <p className="text-3xl font-bold pb-12 text-gray-800">We welcome you to visit Japan</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="w-4/5">
            <p className="text-base pt-12 pb-6 text-gray-800">A dip in a secluded mountain hot spring, a stroll through a picture-perfect temple garden, a steaming bowl of ramen at a hole-in-the-wall noodle shop; get ready to make your Japan dreams a reality. We look forward to welcoming you soon!</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="w-4/5">
            <p className="text-3xl font-bold pb-12 text-gray-800">Useful information</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="w-4/5 pb-12 grid grid-cols-3">
            <div className='w-11/12 hover:scale-110 rounded-md h-auto cursor-pointer'>
        <div className='w-64 h-64 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/n/f7facfef-285c-4171-b58a-3c4653d11872/2019-travel-photo-contest-epic-landscapes035_square.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>For travelers</p>
    </div>
    </div>
    <div className='w-11/12 hover:scale-110 rounded-md h-auto cursor-pointer'>
    <div className='w-64 h-64 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/n/21039e00-ee4e-4230-b4a8-10ab22fd1692/001-iceland-natural-beauty_square.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Preventive measures</p>
    </div>    
   </div>
    <div className='w-11/12 hover:scale-110 h-auto cursor-pointer'>
    <div className='w-64 h-64 rounded flex items-end bg-cover bg-[url("https://i.natgeofe.com/n/551fadf4-6ec8-4e9f-9d54-2e250f8afa27/13248_square.jpg")]'>
    <p className='font-bold text-white text-lg pb-4 pl-4'>Measures by the government</p>
    </div>     
    </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Covid;