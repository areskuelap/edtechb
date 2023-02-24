import React from "react";
import Footer from "../home/Footer";

 const Newsa = () => {
    return(
        <div>
            <div className="flex justify-center py-10">
                <p className="text-4xl font-semibold text-black">Kuelap will open to visitors next week</p>
            </div>
            <div className="flex justify-center">
                <div className="w-4/5">
                    <hr className="border border-gray-600 w-full">
                    </hr>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="pt-6 w-1/2">
                    <img className="w-full h-auto" src="https://tongglobalcdn.visitkorea.or.kr/img/vk/enu/cms/content/70/2940870_image_1.jpg?v=2023001883"/>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-1/2 py-10">
                <p className="text-lg text-black">The Korea Grand Sale is Korea's representative shopping, culture, and tourism festival combining tourism and Hallyu for international visitors. <br/> The Korea Grand Sale offers the pleasure of shopping in Korea and a wealth of benefits in various fields such as airlines, accommodations, food and beverages, traditional culture, and experience programs. <br/> <br/> Through various online and offline promotions including K-Travel and K-Shopping promotions as well as K-Culture Experience events, the festival will show diverse charms of Korea from January to February 2023. <br/> <br/> For more information, please visit the Korea Grand Sale website. </p>                
            </div>
            </div>
            <div className="flex justify-center">
                <div className="w-3/4 flex justify-center pb-10">
                <iframe src="https://www.youtube.com/embed/N8SjBcK-nVg" className="w-4/5 sm:w-2/5 h-48 sm:h-80 rounded-lg"></iframe>
            </div>
            </div>
            <div className="flex justify-center">
                <div className="w-3/4 pb-10">
                <p className="text-lg font-bold text-black">More info</p>
            </div>
            </div>
            <div className="flex justify-center">
                <div className="w-3/4 pb-10">
                <p className="text-lg font-bold text-black">Period: <a className="text-lg text-black">January 12 - February 28, 2023 / 48 days</a> <br/> For Whom: <a className="text-lg text-black">Foreigners visiting Korea</a> Website: <a className="text-lg text-blue-500 underline">https://en.koreagrandsale.co.kr/kgs</a></p>
            </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Newsa;