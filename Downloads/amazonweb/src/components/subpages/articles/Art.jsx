import React from "react";
import Footer from "../../home/Footer";


export default function Art() {
    return (
        <div>
        <div className='bg-[url("https://drive.google.com/uc?export=view&id=1CYH9zssDxg6TJgZyEpiUbsi-4OWM-9mC")] bg-cover bg-center bg-no-repeat'>
        <div className='bg-gradient-to-l from-gray-500 to-transparent'>
          <p className='text-lg font-semibold text-white pl-10 py-3'>Official guide for traveling Amazonas- Travel Amazonas</p>
        </div>
        <div className='pt-24 pb-56'>
        <p className='text-4xl pl-10 text-white font-semibold'>Art & Design in Amazonas</p>
        <p className='text-xl py-3 pl-10 text-white font-semibold'>Amazonas' museums feature all kinds of art, housed in buildings showcasing traditional and modern architecture</p>
        </div>
        </div>
        <div className="flex justify-center">
        <div className="w-10/12 grid sm:grid-cols-2">
        <div>
          <p className='text-lg pt-12 sm:text-3xl text-black font-semibold sm:font-bold'>Amazonas' art, design and architecture scenes offer everything from the ancient to the avant-garde</p>
          <p className="pt-5 text-base sm:text-lg">Visit the 21st Century Museum of Contemporary Art, Kanazawa  in Kanazawa  to see all that is modern, or head to The National Museum of Art Osaka  in Osaka  or the Tokyo National Museum  for something a little older. For a deeper understanding of the Edo period (1603-1867) pop-artist Katsushika Hokusai and his ukiyo-e wood block prints, visit the Hokusai Museum  in Nagano Prefecture <br/><br/>Wandering the streets of Japan's major cities is akin to browsing a design museum as many of the buildings offer architectural inspiration. From the cavernous Tokyo Station  to the Mikimoto Ginza 2 and Prada buildings in upmarket Tokyo districts, you can discover structural surprises at every turn. Alternatively, head to one of the country's actual design museums such as Tokyo's 21_21 DESIGN SIGHT  or the Archi-Depot Museum to find out more about the scene.</p>
        </div>
        </div>
        </div>
        <div className="flex justify-center">
        <div className="w-10/12 pt-12 pb-4">
            <p className="text-2xl sm:text-3xl font-semibold">Explore by interest</p>
        </div>
        </div>
        <div className='flex justify-center'>
            <div className='w-10/12 pb-12 grid grid-cols-1 sm:grid-cols-2'>
              <div className="flex justify-center">
                <div className='w-full sm:w-11/12 cursor-pointer h-64 sm:h-96 rounded bg-cover bg-[url("https://www.centromallqui.pe/images/amazonas_museofg3.jpg")]'>
                  <p className='font-bold text-white text-lg pt-4 pl-4'>Museo de Leymebamba</p>
                </div>
              </div>
              <div className='pt-6 sm:pt-0'>
              <div className='flex'>
              <div className='w-64 mr-4 cursor-pointer rounded h-44 bg-cover bg-[url("https://www.intiyana.org/gallery/peru/arte_rupestre/chanqui/06.jpg")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Chanqui</p>
              </div>
              <div className='w-64 h-44 cursor-pointer rounded bg-cover bg-[url("https://pueblosoriginarios.com/sur/amazonia/chachapoya/imagenes/textil3.jpg")]'>
              <p className='font-bold text-white text-lg pt-4 pl-4'>Textiles</p>
              </div>
              </div>
              <div className='flex pt-8'>
              <div className='w-64 mr-4 cursor-pointer rounded bg-cover h-44 bg-[url("https://www.machupicchu-tours-peru.com/wp-content/uploads/2021/03/souvenirs-min-1.jpg")]'>
              <p className='font-bold text-white text-lg pt-4 pl-4'>Souvenirs</p>
              </div>
              <div className='w-64 h-44 cursor-pointer rounded bg-cover bg-[url("https://www.emstudioperu.com/wp-content/uploads/2018/11/web-em-studio-48.jpg")]'>
              <p className='font-bold text-white text-lg pt-4 pl-4'>Collares</p>
              </div>
              </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    );
}